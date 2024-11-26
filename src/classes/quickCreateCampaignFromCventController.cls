/*-------------------------------------------------------------------------------------------------------
Author:         Houssam ADIB (Salesforce)
Description:    LWC:quickCreateCampaignFromCvent  Controller
Test class      CreateCampaignFromCventControllerTest

History
01-01-2023     Houssam ADIB - Create new class
01-01-2024     Houssam ADIB - Refactoring and adding Phase 2 ( Sales Lead Generation )
01-10-2024     Houssam ADIB - TFUS-000006858 - Map new fields from Temp to attendee ( static mapping ) + Add logic to SharedGlobally field

----------------------------------------------------------------------------------------*/
public without sharing class quickCreateCampaignFromCventController {

    private static Id linkedCampaign;

    /** STAGE 1
     * Root method that gets called in the front to create a campaign based on a Cvent Event record.
     * @author hadib@salesforce.com | 10-01-2023
     *
     * @param cventCode     The Cvent Event code entered by the user
     * @param mainBrand     Main Brand selected in the UI
     * @param convertMembersToSalesLeads     Set Campaign Convert To = 'Sales Lead'
     *
     * @return ResultWrapper -  We return a wrapper in both success and failure use cases
     *                          We never throw a handledException because we report the Error logs in DB
     */
    @AuraEnabled
    public static ResultWrapper createCampaignFromCvent(String cventCode, String mainBrand, Boolean convertMembersToSalesLeads)
    {
        ResultWrapper result = new ResultWrapper();

        // Step 1 - Validate the user entry
        if(String.isBlank(cventCode))
        {
            validateDynamicMappingsAsync();
            result.error    = 'Invalid Entry!';
            result.status   = 'Error';
            return result;
        }

        try
        {
            // Step 2 - Validations
            List<CventEvents__Event__c> sourceCvent = CventManagement.findCventByCode(cventCode);
            ResultWrapper errorResultWrapper = getErrorResultWrapper(sourceCvent, cventCode);

            // Step 3 - Trigger Campaign Creation
            if(errorResultWrapper != null)
            {
                return errorResultWrapper;
            }
            else {
                result = startCreationProcess(sourceCvent[0],mainBrand,convertMembersToSalesLeads);
            }
        }
        catch (Exception e)
        {
            Database.SaveResult savingErrorLogResult = DebugLog.addException(e, 'quickCreateCampaignFromCventController.createCampaignFromCvent');
            result.error = e;
            if(savingErrorLogResult.isSuccess())
            {
                result.errorDebugLogId = savingErrorLogResult.getId();
            }
        }

        return result;
    }

    /**
     * Runs Validations on entered Cvent Event Code.
     * @author hadib@salesforce.com | 27-12-2023
     * @param sourceCvent Source Event
     * @param cventCode Cvent Event Code
     *
     * @return ResultWrapper
     */
    public static ResultWrapper getErrorResultWrapper(List<CventEvents__Event__c> sourceCvent, String cventCode)
    {
        // Validation 1 - We check if the code entered doesn't correspond to any Cvent Event record
        if (sourceCvent.isEmpty()) {
            validateDynamicMappingsAsync();
            return errorCodeNotFound(cventCode);
        }
        // Validation 2 -   The user has entered a valid code, but the Cvent event pointed may already have a campaign linked,
        //                  if its the case we return an error
        else{
            if (alreadyLinkedToACampaign(sourceCvent[0])) {
                validateDynamicMappingsAsync();
                return errorAlreadyLinkedToACampaign(linkedCampaign, cventCode);
            }
        }
        return null;
    }

    /**
     * Trigger Asynchronous Validations to Dynamic mapping if there any new ones added.
     * @author hadib@salesforce.com | 27-12-2023
     */
    public static void validateDynamicMappingsAsync()
    {
        MappingManagement.launchValidationAsynchronous(CventManagement.SOURCE_OBJECT_EVENT, CventManagement.TARGET_OBJECT_CAMPAIGN);
        MappingManagement.launchValidationAsynchronous(CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD);
    }

    /** STAGE 2
     * Root Method that converts unmatched Temp Attendee to Attendees+Leads
     * We just create the leads in this step, and prepare the attendees to be created in a later step.
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param cventCode Event Code
     *
     * @return ResultWrapper - Result Wrapper
     */
    @AuraEnabled
    public static ResultWrapper convertTempAttendeesToLeads(String cventCode)
    {
        ResultWrapper result = new ResultWrapper();
        List<AttendeeWrapper> attendeeWrappers = new List<AttendeeWrapper>();

        try
        {
            // Find Cvent Event
            List<CventEvents__Event__c> sourceCvent = CventManagement.findCventByCode(cventCode);
            List<DynamicMapping__mdt> mappings = MappingManagement.getMapping(CventManagement.SOURCE_OBJECT_TEMP, CventManagement.TARGET_OBJECT_LEAD,true);
            Map<String,CventEvents__AttendeeTemp__c> allTemps = getAllTemps(sourceCvent,mappings);
            // Find existing leads by stub in case we already generated leads for temps
            Map<String, Lead> stubToLead = CventManagement.getStubToLead();


            // Find existing matched Attendees
            Map<String,CventEvents__Attendee__c> matchedAttendees = CventManagement.getMatchedAttendees(sourceCvent[0]);

            // Partition Temps in matched and unmatched
            Map<String,CventEvents__AttendeeTemp__c> matchedTempAttendees = new Map<String,CventEvents__AttendeeTemp__c>();
            Map<Id,CventEvents__AttendeeTemp__c> unmatchedTempAttendees = new Map<Id,CventEvents__AttendeeTemp__c>();
            partitionTemps(allTemps, matchedAttendees.keySet(),     // Input
                    matchedTempAttendees, unmatchedTempAttendees);  // will be Output

            // Put matched attendees in wrappers to prepare for recreation (recreating the attendees is the only way to secure conversion to member by cvent app)
            attendeeWrappers.addAll(prepareMatchedAttendeesForReCreation(sourceCvent, matchedAttendees, matchedTempAttendees));



            // Create Leads for unmatched Temps
            List<Lead> newLeads = new List<Lead>();
            List<CventEvents__AttendeeTemp__c> newTempsConvertedToLeads = new List<CventEvents__AttendeeTemp__c>();

            newLeads = CventManagement.InstantiateLeadsForUnmatchedTemps(   unmatchedTempAttendees.values(), newTempsConvertedToLeads, sourceCvent[0],
                    mappings, stubToLead, new Map<String,Campaign>(),attendeeWrappers);

            TriggerHandler.bypass('StandardLeadTriggerHandler');
            insert newLeads;

            TriggerHandler.bypass('AttendeeTempTriggerHandler');
            CventManagement.updateTempStatus(newTempsConvertedToLeads);

            result.result = unmatchedTempAttendees.size() + ' Leads created for unmatched Temps and matchedTempAttendees size=' + matchedTempAttendees.size();
            result.attendeeWrappers = attendeeWrappers;

        }
        catch (Exception e)
        {
            Database.SaveResult savingErrorLogResult = DebugLog.addException(e, 'quickCreateCampaignFromCventController.convertTempAttendeesToLeads');
            result.error = e;
            if(savingErrorLogResult.isSuccess())
            {
                result.errorDebugLogId = savingErrorLogResult.getId();
            }
        }

        return result;
    }

    /** STAGE 3
     * Root method that creates attendees
     * For leads we create new attendees. And for matched temps to contacts, we re-create their existing attendees to trigger members generation by the app.
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param attendeeWrappers Wrappers of attendees
     *
     * @return ResultWrapper - Controller Result Wrapper
     */
    @AuraEnabled
    public static ResultWrapper createNewAttendeesFromLeads(List<AttendeeWrapper> attendeeWrappers)
    {
        ResultWrapper result = new ResultWrapper();
        List<CventEvents__Attendee__c> newAttendees = new List<CventEvents__Attendee__c>();

        List<CventEvents__Attendee__c> attendeesToReCreateInLaterStage = new List<CventEvents__Attendee__c>();

        CventManagement.partitionAndProcessWrapper(attendeeWrappers, attendeesToReCreateInLaterStage, newAttendees);

        TriggerHandler.bypass('AttendeeTriggerHandler');
        insertAttendees(newAttendees);

        result.status = 'Success';
        result.result = 'Success';

        deleteExistingAttendees(attendeesToReCreateInLaterStage);

        return result;
    }

    /**
     * Loop through the matchedAttendees List and create wrappers.
     * The wrappers we will be used in a follow stage to recreate the records
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param sourceCvent               Event
     * @param matchedAttendees          The Matched Attendees records
     * @param matchedTempAttendees      The Matched Attendees Temps records
     *
     * @return List<AttendeeWrapper> - Wrappers
     */
    public static List<AttendeeWrapper> prepareMatchedAttendeesForReCreation(   List<CventEvents__Event__c> sourceCvent,
                                                                                Map<String,CventEvents__Attendee__c>        matchedAttendees,
                                                                                Map<String,CventEvents__AttendeeTemp__c>    matchedTempAttendees)
    {
        List<AttendeeWrapper> attendeeWrappers = new List<AttendeeWrapper>();
        CventEvents__Attendee__c attendee;
        CventEvents__AttendeeTemp__c temp;

        for (Integer i = 0, j = matchedAttendees.values().size(); i < j; i++) {
            attendee = matchedAttendees.values()[i];
            temp = matchedTempAttendees.get(attendee.CventEvents__AttendeeStub__c);
            attendee.ContactType__c                 = temp.CventEvents__pkg_ContactTypeName__c;
            attendee.IntraoralScannerInUse__c       = temp.Doyouhaveanintraoralscannerinyour__c;
            attendee.SolutionsInterest__c           = temp.Whichsolutionsareyouinterestedin__c;

            AttendeeWrapper attendeeWrapper = new AttendeeWrapper();
            attendeeWrapper.matched = true;
            attendeeWrapper.attendee = attendee;
            attendeeWrapper.event = sourceCvent[0];

            attendeeWrappers.add(attendeeWrapper);
        }
        return attendeeWrappers;
    }

    /**
     * Partition the list of attendees in two categories: Matched and unmatched
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param allTemps                  all Attendees Temp records
     * @param existingAttendeesStubs    Existing Attendees list
     * @param matchedTempAttendees      Matched attendees to populate
     * @param unmatchedAttendees        Unmatched Attendees to populate
     */
    public static void partitionTemps(  Map<String,CventEvents__AttendeeTemp__c>    allTemps,
                                        Set<String>                                 existingAttendeesStubs,
                                        Map<String,CventEvents__AttendeeTemp__c>    matchedTempAttendees,
                                        Map<Id,CventEvents__AttendeeTemp__c>        unmatchedTempAttendees)
    {
        CventEvents__AttendeeTemp__c temp;
        for (Integer i = 0, j = allTemps.values().size(); i < j; i++) {
            temp = allTemps.values()[i];
            if (existingAttendeesStubs.contains(temp.CventEvents__pkg_AttendeeStub__c)) {
                matchedTempAttendees.put(temp.CventEvents__pkg_AttendeeStub__c,temp);
            }
            else {
                unmatchedTempAttendees.put(temp.Id,temp);
            }
        }
    }

    /**
     * Retrieves all the existing Attendee Temp record for a particular event
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param sourceCvent   Event
     * @param mappings      Fields mapping to know what fields to retrieve
     *
     * @return List<CventEvents__AttendeeTemp__c> - List of Temp records
     */
    public static Map<String,CventEvents__AttendeeTemp__c> getAllTemps(List<CventEvents__Event__c> sourceCvent, List<DynamicMapping__mdt> mappings )
    {
        List<CventEvents__AttendeeTemp__c> allTemps = new List<CventEvents__AttendeeTemp__c>();
        Map<String,CventEvents__AttendeeTemp__c> allTempsMap = new Map<String,CventEvents__AttendeeTemp__c>();
        String eventStub = sourceCvent[0].CventEvents__pkg_EventStub__c;

        Set<String> allFields = new Set<String>{'CventEvents__pkg_AttendeeStub__c', 'CventEvents__pkg_AttendeeStatus__c',
                'CventEvents__pkg_Attended__c', 'MatchStatus__c', 'Doyouhaveanintraoralscannerinyour__c','CventEvents__pkg_ContactTypeName__c',
                'Whichsolutionsareyouinterestedin__c'}; // (+Static Cvent Fields.)
        DynamicMapping__mdt mapping;
        for (Integer i = 0, j = mappings.size(); i < j; i++) {
            mapping = mappings[i];
            allFields.add(mapping.SourceFieldApiName__c);
        }

        String fieldsApiNames = String.join( new List<String>(allFields) , ',');
        String queryString = 'SELECT ' + fieldsApiNames + ' FROM ' + CventManagement.SOURCE_OBJECT_TEMP +
                ' WHERE CventEvents__pkg_EventStub__c = :eventStub';

        // Execute Query
        allTemps  = Database.query(queryString);

        for(CventEvents__AttendeeTemp__c temp : allTemps)
        {
            allTempsMap.put(temp.CventEvents__pkg_AttendeeStub__c,temp);
        }

        return allTempsMap;
    }

    /**
     * Deletes Attendees
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param attendeesToReCreateInLaterStage Attendees to delete
     */
    public static void deleteExistingAttendees(List<CventEvents__Attendee__c> attendeesToReCreateInLaterStage)
    {
        if (!attendeesToReCreateInLaterStage.isEmpty())
        {
            try {
                delete attendeesToReCreateInLaterStage;
            }
            catch (Exception e) {
                DebugLog.addException(e, 'quickCreateCampaignFromCventController.attendeesToReCreateInLaterStage');
            }
        }
    }

    /**
     * Insert Attendees in database
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param newAttendees New Attendees to insert
     */
    public static void insertAttendees(List<CventEvents__Attendee__c> newAttendees)
    {
        if (!newAttendees.isEmpty())
        {
            try {
                insert newAttendees;
            }
            catch (Exception e) {
                DebugLog.addException(e, 'quickCreateCampaignFromCventController.insert new attendees');
            }
        }
    }

    /**
     * Check if the event is already linked to another campaign via CventEvents__EventCampaignEntry__c entries
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param sourceEvent Source Event
     *
     * @return Boolean - Whether or not the event is linked to another campaign record.
     */
    private static Boolean alreadyLinkedToACampaign(CventEvents__Event__c sourceEvent)
    {
        Boolean alreadyLinked = false;
        CventEvents__EventCampaignEntry__c[] entries = [SELECT Id,CventEvents__Campaign__c
        FROM CventEvents__EventCampaignEntry__c
        WHERE CventEvents__Event__c = :sourceEvent.Id LIMIT 1];
        if(!entries.isEmpty())
        {
            linkedCampaign = entries[0].CventEvents__Campaign__c;
            alreadyLinked = true;
        }

        return alreadyLinked;
    }

    /**
     * The user has Wants to creates a campaign for Cvent Event record that has already a campaign created previously
     * Returns an error
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param existingCampaign  Existing Campaign Id
     * @param cventCode         Cvent Code Entered by the user
     *
     * @return ResultWrapper - Stating that this Cvent entered has already a linked Campaign
     */
    private static ResultWrapper errorAlreadyLinkedToACampaign(Id existingCampaign, String cventCode)
    {
        ResultWrapper result = new ResultWrapper();
        result.result   = existingCampaign;
        result.error    = 'Found an existing campaign linked this event (Code:' + cventCode + ')';
        result.status   = 'Existing';

        return result;
    }

    /**
     * No Cvent is found with this code entered by the user.
     * Returns an error
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param cventCode     Code Entered by the user
     *
     * @return ResultWrapper - Stating that no Cvent is found with this code entered
     */
    private static ResultWrapper errorCodeNotFound(String cventCode)
    {
        ResultWrapper result = new ResultWrapper();
        result.error    = 'We couldn\'t find any record with the entered code (' + cventCode + '). ' +
                'Please enter a valid code.';
        result.status   = 'Not Found';
        return result;
    }

    /**
     * Will try to create the Campaign using the existing Mapping in the custom metadata records
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param sourceEvent     Cvent Event Code entered by the User
     * @param mainBrand       Main Brand of the campaign
     * @param convertMembersToSalesLeads       Set Campaign Convert To = 'Sales Lead'
     *
     * @return ResultWrapper - Result
     */
    private static ResultWrapper startCreationProcess(CventEvents__Event__c sourceEvent, String mainBrand, Boolean convertMembersToSalesLeads)
    {
        ResultWrapper result = new ResultWrapper();
        // Step 1 - Get Mappings from Custom Metadata DynamicMapping__mdt
        List<DynamicMapping__mdt> mappings =
                MappingManagement.getMapping(CventManagement.SOURCE_OBJECT_EVENT, CventManagement.TARGET_OBJECT_CAMPAIGN,true);

        if (mappings.size() > 0)
        {
            SObject sourceRecordData;
            // Step 2 - If mapping records are found, we retrieve the data to use to create the target object record
            try
            {
                sourceRecordData = MappingManagement.retrieveSourceData(
                        sourceEvent.Id,
                        CventManagement.SOURCE_OBJECT_EVENT,
                        mappings,
                        new Set<String>{'CventEvents__pkg_CountryCode__c,CventEvents__pkg_EventStub__c,TotalEstimatedBudget__c'});
            }
            catch (Exception e)
            {
                Database.SaveResult savingErrorLogResult = DebugLog.addException(e,'MappingManagement.retrieveSourceData');
                result.error = 'Error while trying to retrieve Event data. Please contact your system administrator for assistance.';
                MappingManagement.attemptToFixWrongMapping(e.getMessage());
                if(savingErrorLogResult.isSuccess())
                {
                    result.errorDebugLogId = savingErrorLogResult.getId();
                }
                return result;
            }

            // Step 3 - Insert Campaign record
            Id campaignId = createCampaign(mappings, sourceRecordData, mainBrand, convertMembersToSalesLeads);
            if(campaignId != null)
            {
                result.result = (String) campaignId;

                // Step 4 - Link the Cvent Event with the new created Campaign
                CventManagement.linkCampaignWithEvent(sourceEvent.Id,campaignId);
            }
            else
            {
                result.error = 'Error while trying to create the campaign record. Please contact your system administrator for assistance.';
            }
        }
        else
        {
            result.error = 'No Valid Mappings found for Campaign Creation';
        }

        return result;
    }

    /**
     * Creates a campaign records using mapping values
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param mappings              Existing mappings in DynamicMapping__mdt records
     * @param retrievedSourceData   The Cvent Data we will use to create the Campaign
     * @param mainBrand             Campaign main brand
     * @param convertMembersToSalesLeads    Set Campaign Convert To = 'Sales Lead'
     *
     * @return Id - Id of the campaign created
     */
    private static Id createCampaign(List<DynamicMapping__mdt> mappings, SObject retrievedSourceData, String mainBrand, Boolean convertMembersToSalesLeads)
    {
        if(retrievedSourceData == null) return null;
        if(mappings.isEmpty()) return null;

        Id campaignRecordTypeId = GlobalUtils.getRecordTypeId('Campaign', 'CventCampaign');
        Id memberRecordTypeId   = GlobalUtils.getRecordTypeId('CampaignMember', 'CVENT_Campaign_Member');
        Campaign campaign = new Campaign(
                IsActive = true,
                SBU_Focus__c = 'Implants',
                Brands__c = mainBrand);

        if(convertMembersToSalesLeads) {
            campaign.Convert_To__c = 'Sales Lead';
        }

        setTotalCostBudget(retrievedSourceData, campaign);
        setCampaignCountry(retrievedSourceData, campaign);

        if(campaignRecordTypeId != null)
        {
            campaign.RecordTypeId = campaignRecordTypeId;
        }
        if(memberRecordTypeId != null)
        {
            campaign.CampaignMemberRecordTypeId = memberRecordTypeId;
        }

        // For each mapping, we will use the data retrieved in the SObject record
        // to put the value dynamically using <record>.put(<field>,<value>) method
        for (DynamicMapping__mdt mapping : mappings)
        {
            try
            {
                if (mapping.limitStringLength__c != null) {
                    // Special Case for limited strings
                    // The field limitStringLength__c Field on the custom metadata allow the admins to
                    // limit the number of chars in the source value to no exceed target field max length
                    String sourceValue = (String) retrievedSourceData.get(mapping.SourceFieldApiName__c);
                    if(sourceValue != null)
                    {
                        sourceValue = sourceValue.left(mapping.limitStringLength__c.intValue());
                        campaign.put(mapping.TargetFieldApiName__c, sourceValue);
                    }
                }
                else {
                    // Default: We just put the value in the field
                    Object targetValue = retrievedSourceData.get(mapping.SourceFieldApiName__c);
                    campaign.put(mapping.TargetFieldApiName__c, targetValue);
                }
            }
            catch (Exception e)
            {
                DebugLog.addException(e,'quickCreateCampaignFromCventController.createCampaign. Failed mapping: ' + JSON.serializePretty(mapping));
                MappingManagement.tickMappingAsInvalid(mapping.QualifiedApiName,e.getMessage());
            }
        }

        return insertCampaignAndHandleErrors(campaign);
    }

    /**
     * Sets the country of the campaign using the country code of the event record and CountryCodeMap__mdt custom mdt
     * @author hadib@salesforce.com | 02-08-2023
     *
     * @param retrievedSourceData Event Data
     * @param campaign The new Campaign record
     */
    private static void setCampaignCountry(SObject retrievedSourceData, Campaign campaign)
    {
        String countryCode;
        if(retrievedSourceData != null)
        {
            countryCode = (String) retrievedSourceData.get('CventEvents__pkg_CountryCode__c');
        }

        if (String.isNotBlank(countryCode)) {
            List<CountryCodeMap__mdt> country = [
                    SELECT Campaign_Country__c, Country_Code_3_digit__c
                    FROM CountryCodeMap__mdt
                    WHERE Country_Code_2_digit__c = :countryCode
            ];
            if (!country.isEmpty()) {
                campaign.Country_Code_3_digit__c = country[0].Country_Code_3_digit__c;
            }
        }
    }

    /**
     * Sets the total cost budget on the campaign by converting a string value on the event TotalEstimatedBudget__c field
     * @author hadib@salesforce.com | 31-10-2023
     *
     * @param retrievedSourceData Event Data
     * @param campaign The new Campaign record
     */
    private static void setTotalCostBudget(SObject retrievedSourceData, Campaign campaign)
    {
        String totalEstimatedStringValue;

        if (retrievedSourceData != null) {
            totalEstimatedStringValue = (String) retrievedSourceData.get('TotalEstimatedBudget__c');
        }

        try {
            Decimal totalEstimatedBudget = Decimal.valueOf(totalEstimatedStringValue);
            campaign.TotalCostBudgetCvent__c = totalEstimatedBudget;
        } catch (Exception ex) {
            // Ignoring error, leaving the campaign field as null
            campaign.TotalCostBudgetCvent__c = null;
        }
    }


    /**
     * Inserts the campaign record and handle mappings errors
     * @author hadib@salesforce.com | 20-03-2023
     *
     * @param campaign Campaign to insert
     *
     * @return Inserted Campaign Id
     */
    private static Id insertCampaignAndHandleErrors(Campaign campaign)
    {
        Database.SaveResult saveResult;
        try {

            saveResult = Database.insert(campaign, true);

            return campaign.Id;
        }
        catch (DmlException e)
        {
            if(!e.getDmlFieldNames(0).isEmpty())
            {
                MappingManagement.tickTargetFieldAsInvalid(e.getDmlFieldNames(0)[0], e.getMessage(), CventManagement.SOURCE_OBJECT_EVENT, CventManagement.TARGET_OBJECT_CAMPAIGN);
            }
            if (saveResult != null) {
                if (!saveResult.isSuccess()) {
                    for (Database.Error error : saveResult.getErrors()) {
                        // Log the failed field and error message
                        DebugLog.addInfo('quickCreateCampaignFromCventController.createCampaign. Failed field: ' + error.getFields() + ', Error message: ' + error.getMessage());
                    }
                }
            }

            // Log the exception using a custom logging method
            DebugLog.addException(e, 'quickCreateCampaignFromCventController.createCampaign');
        }
        return null;
    }

    /**
     * Get the number of matched and unmatched attendees that were converted to campaign members by the cvent application
     * @author hadib@salesforce.com | 29-01-2024
     * @param campaignId If of the New campaign generated
     *
     * @return Campaign - Campaign record with the information in the fields
     */
    @AuraEnabled
    public static Campaign getMembersCount(String campaignId)
    {
        try {
            Campaign campaign;
            List<Campaign> campaigns = [SELECT NumberOfContacts, NumberOfLeads FROM Campaign WHERE Id = :campaignId];
            if (!campaigns.isEmpty()) {
                campaign = campaigns[0];
            }
            return campaign;
        }
        catch (Exception e) {
            NotificationEventPublisher.publishNotification( NotificationEventPublisher.EXCEPTION_CONTEXT,   NotificationEventPublisher.EXCEPTION_TYPE,
                                                    'Error','getMembersCount',       JSON.serializePretty(e));
            throw new AuraHandledException(e.getMessage());
        }
    }

    /**
     * The inner class will allow us to report errors in the database without throwing exceptions
     * We can still inform the view with server errors with the wrapper instead of throwing exceptions
     */
    public class ResultWrapper
    {
        @AuraEnabled
        public Object result;
        @AuraEnabled
        public Object error;
        @AuraEnabled
        public Object errorDebugLogId;
        @AuraEnabled
        public String status; // Success || Error || Existing || Not Found
        @AuraEnabled
        public List<AttendeeWrapper> attendeeWrappers; // Unmatched, have new leads generated

    }

}