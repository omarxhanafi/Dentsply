/*------------------------------------------------------------  
Author:         Ahmed LOUDRASSI (Salesforce) 2019-09-30   
Description:    Global Utils. 
History 
20190930    Ahmed LOUDRASSI    create getRecordTypeId and getCurrentUser. (#TFUS-000001032)
20211011	Roberto Narbona	   create GetDependentPicklistValues and GetCategoryFromBrand. (TFUS-000003578)
2021118		Roberto Narbona	   update GetCategoryFromBrand removed reference to GetDependentPicklistValues 
							   method and improve performance(TFUS-000003722)

------------------------------------------------------------*/
public class GlobalUtils {
	private static User currentUser;
    private static Map<String,ID> recordTypes = new Map<String,ID> ();
    /*------------------------------------------------------------  
    Description:    Method to retrieve recordTypeId of a SObject by SObjectName
					and RecordTypeApiName
    Inputs:         @param SObjectName and @param recordTypeApiName
    ------------------------------------------------------------*/
    public static Id getRecordTypeId(String SObjectName, String recordTypeApiName){
        String key = SObjectName+recordTypeApiName;
        if(!recordTypes.containsKey(key)) {
            recordTypes.put(key, Schema.getGlobalDescribe()
                                        .get(SObjectName)
                                        .getDescribe()
                                        .getRecordTypeInfosByDeveloperName()
                                        .get(recordTypeApiName)
                                        .getRecordTypeId());
        }
        return recordTypes.get(key);
    }
    /*------------------------------------------------------------  
    Description:    Method to verify if a recordTypeId is in a list of RecordTypes
    Inputs:         @param SObjectName and @param recordTypeApiName and @param recordTypeId
    ------------------------------------------------------------*/
    public static Boolean ifRecordTypeInList(String SObjectName, List<String> recordTypesApiNames,Id recordTypeId){
       for(String recordTypeApiName : recordTypesApiNames) {
          if(getRecordTypeId(SObjectName, recordTypeApiName) == recordTypeId)
              	return true;
       }
        return false;
    }
    public static User getCurrentUser() {
        if(currentUser == null) {
            currentUser = [Select Id, User_Country__c, Full_Name__c, UserRole.Name
                           FROM User
                           WHERE Id =: UserInfo.getUserId()];
        }
        return currentUser;
    }
    /*------------------------------------------------------------  
    Description:    Method to get Category field value from Brand and country values.
    Inputs:         @param country and @param brand and @param categoryField and @param brandField
    ------------------------------------------------------------*/
    public static String getCategoryFromBrand(string country, string brand, Map<String,List<String>> categoryField, Map<String,List<String>> brandField) {
            //Map<String,List<String>> dependentPicklistCountryCategoryMap = getDependentPicklistValues(categoryField);
            //Map<String,List<String>> dependentPicklistCategoryBrandMap = getDependentPicklistValues(brandField);
            for(String countryCategory : categoryField.get(country)){
                
                List<String> brands = brandField.get(countryCategory);
                
                if(brands.size() == 1){
                    if(brands[0] == brand){
                        return(countryCategory);
                    }     
                }
                else if(brands.size()>1){
                    if(brandField.get(countryCategory).contains(brand) == true){
                        return(countryCategory);
                    }    
                }
                
                /*if(brandField.get(countryCategory).contains(brand) == true){
                    System.debug('Return category ' + countryCategory);
                    return(countryCategory);
                }*/
            }
            return null;
        }
    
    /*------------------------------------------------------------  
    Description:    Method to get dependant picklist values. All credits to:
					https://salesforceprofs.com/how-to-get-dependent-picklist-values-in-apex/
    Inputs:         @param dependToken
    ------------------------------------------------------------*/
    public static Map<String, List<String>> getDependentPicklistValues(Schema.sObjectField dependToken) {
        Schema.DescribeFieldResult depend = dependToken.getDescribe();
        Schema.sObjectField controlToken = depend.getController();
        if (controlToken == null) {
            return new Map<String, List<String>>();
        }
        
        Schema.DescribeFieldResult control = controlToken.getDescribe();
        List<Schema.PicklistEntry> controlEntries;
        if(control.getType() != Schema.DisplayType.Boolean) {
            controlEntries = control.getPicklistValues();
        }
        
        String base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        Map<String,List<String>> dependentPicklistValues = new Map<String,List<String>>();
        for (Schema.PicklistEntry entry : depend.getPicklistValues()) {
            if (entry.isActive() && String.isNotEmpty(String.valueOf(((Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(entry))).get('validFor')))) {
                List<String> base64chars =
                    String.valueOf(((Map<String,Object>) JSON.deserializeUntyped(JSON.serialize(entry))).get('validFor')).split('');
                for (Integer index = 0; index < (controlEntries != null ? controlEntries.size() : 2); index++) {
                    Object controlValue =
                        (controlEntries == null
                         ?   (Object) (index == 1)
                         :   (Object) (controlEntries[index].isActive() ? controlEntries[index].getValue() : null)
                        );
                    Integer bitIndex = index / 6;
                    if (bitIndex > base64chars.size() - 1) {
                        break;
                    }
                    Integer bitShift = 5 - Math.mod(index, 6);
                    if  (controlValue == null || (base64map.indexOf( base64chars[ bitIndex ] ) & (1 << bitShift)) == 0)
                        continue;
                    if (!dependentPicklistValues.containsKey((String) controlValue)) {
                        dependentPicklistValues.put((String) controlValue, new List<String>());
                    }
                    dependentPicklistValues.get((String) controlValue).add(entry.getValue());
                }
            }
        }
        return dependentPicklistValues;
    }

    /**
     * Assort the Opportunity Settings data (LeadOpportunitySetting__mdt) in a Map
     * The map has either brand names or category names as keys and corresponding LeadOpportunitySetting__mdt values.
     * @author hadib@salesforce.com | 20-02-2023 (Campaign Refactoring)
     *
     * @param oppSettings   Opportunity Settings metadata
     *
     * @return Map<String, LeadOpportunitySetting__mdt> - Map of settings classified by Brand or Category
     */
    public static Map<String, LeadOpportunitySetting__mdt> getSettingsMap(List<LeadOpportunitySetting__mdt> oppSettings)
    {
        Map<String, LeadOpportunitySetting__mdt> settingsMap = new Map<String, LeadOpportunitySetting__mdt>();

        for (LeadOpportunitySetting__mdt setting : oppSettings)
        {
            if (setting.BrandsList__c != null)
            {
                String brands = setting.BrandsList__c;
                String[] brandList = brands.split(';');

                for (String brand : brandList)
                {
                    settingsMap.put(brand, setting);
                }
            }
            else
            {
                settingsMap.put(setting.Category__c, setting);
            }
        }
        return settingsMap;
    }

    /**
     * Assort the Opportunity Settings data (LeadOpportunitySetting__mdt) in a Map
     * @author hadib@salesforce.com | 20-02-2023 (Campaign Refactoring)
     *
     * @param oppSettings   Opportunity Settings metadata
     *
     * @return Map<String, LeadOpportunitySetting__mdt> - Map of settings classified by Brand or Category
     */
    public static Map<String, LeadOpportunitySetting__mdt> getSettingsMapWithNumberSignKey(LeadOpportunitySetting__mdt[] oppSettings)
    {
        Map<String, LeadOpportunitySetting__mdt> settingsMap = new Map<String, LeadOpportunitySetting__mdt>();

        for (LeadOpportunitySetting__mdt setting : oppSettings)
        {
            if (setting.BrandsList__c != null)
            {
                String brands = setting.BrandsList__c;
                String[] brandList = brands.split(';');

                for (String brand : brandList)
                {
                    settingsMap.put(setting.Country__c + '#' + brand, setting);
                }
            }
        }
        return settingsMap;
    }

    /**
     * Retrieve the list of settings corresponding for a country and a category
     * @author hadib@salesforce.com | 20-02-2023 (Campaign Refactoring)
     *
     * @param countryId         Country Id
     * @param categoryInput     Category
     *
     * @return List<LeadOpportunitySetting__mdt> - Map of lead/opportunity settings
     */
    public static List<LeadOpportunitySetting__mdt> getOpportunitySettings(String countryId, String categoryInput)
    {
        List<LeadOpportunitySetting__mdt> filteredLeadOpportunitySettings = new List<LeadOpportunitySetting__mdt>();

        List<LeadOpportunitySetting__mdt> leadOpportunitySettings = getOpportunitySettings(new Set<String>{countryId});

        if(!leadOpportunitySettings.isEmpty())
        {
            for(LeadOpportunitySetting__mdt setting : leadOpportunitySettings)
            {
                if(setting.Category__c == categoryInput)
                {
                    filteredLeadOpportunitySettings.add(setting);
                }
            }
        }

        return filteredLeadOpportunitySettings;
    }

    /**
     * Retrieve the list of settings corresponding for a country and a category
     * @author hadib@salesforce.com | 20-02-2023 (Campaign Refactoring)
     *
     * @param countriesSet2Digit    List of countries
     *
     * @return List<LeadOpportunitySetting__mdt> - Map of lead/opportunity settings
     */
    public static List<LeadOpportunitySetting__mdt> getOpportunitySettings(Set<String> countriesSet2Digit)
    {
        List<LeadOpportunitySetting__mdt> leadOpportunitySettings = new List<LeadOpportunitySetting__mdt>{};
        if (Test.isRunningTest()) {
            leadOpportunitySettings = [
                    SELECT  DeveloperName, ShowManualSalesLeadOwnerAssignment__c, Category__c, DefaultLeadOwner__c, BrandsList__c, Country__c,
                            AssignOwnerFrom__c, DefaultCampaignOwner__c, UserRoles__c, IsTest__c
                    FROM LeadOpportunitySetting__mdt
            ];
        }
        else {
            leadOpportunitySettings = [
                    SELECT  DeveloperName, ShowManualSalesLeadOwnerAssignment__c, Category__c, DefaultLeadOwner__c, BrandsList__c, Country__c,
                            AssignOwnerFrom__c, DefaultCampaignOwner__c, UserRoles__c, IsTest__c
                    FROM LeadOpportunitySetting__mdt
                    WHERE   Country__c IN :countriesSet2Digit
                            AND IsTest__c = :false
            ];
        }
        return leadOpportunitySettings;
    }

    /**
     * Returns a map of LeadOpportunitySetting__mdt settings based on a set of countries codes
     * Key in a form of (setting.Country__c + '#' + brand)
     * @author hadib@salesforce.com | 01-03-2023 (Campaign Refactoring)
     *
     * @param Counties2Digits Set of Countries codes
     *
     * @return Map<String, LeadOpportunitySetting__mdt> - Map of LeadOpportunitySetting__mdt
     */
    public static Map<String, LeadOpportunitySetting__mdt>  getSettingsMapNumberSignKey(Set<String> Counties2Digits)
    {
        LeadOpportunitySetting__mdt[] oppSettings               = GlobalUtils.getOpportunitySettings(Counties2Digits);

        Map<String, LeadOpportunitySetting__mdt> settingsMap    = GlobalUtils.getSettingsMapWithNumberSignKey(oppSettings);

        return settingsMap;
    }


    /*------------------------------------------------------------  
    Description:    Method to retrieve a map with key devname and Id value for SObject recordType
    Inputs:         @param SObjectName 
    ------------------------------------------------------------*/
    public static Map<String, Id> getRecordTypeMapNameIds(String ObjectName){
        Map<String, Id> recorTypeMap = new Map<String, Id>();
        for(RecordType recorTypeInfo : [SELECT DeveloperName, Id FROM RecordType WHERE SobjectType =: ObjectName AND IsActive = true ]){
            recorTypeMap.put(recorTypeInfo.DeveloperName, recorTypeInfo.Id);
        }
        return recorTypeMap;
    }
}