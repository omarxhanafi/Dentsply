/**
 * Lightning Web Component for Quick Creation of Campaigns from Cvent Events.
 * Handles the generation of campaigns, conversion of attendees into leads, and creation of campaign members.
 */
import {LightningElement, api, wire, track} from 'lwc';

import createCampaignFromCvent      from '@salesforce/apex/quickCreateCampaignFromCventController.createCampaignFromCvent';
import convertTempAttendeesToLeads  from '@salesforce/apex/quickCreateCampaignFromCventController.convertTempAttendeesToLeads';
import createAttendeesFromLeads     from '@salesforce/apex/quickCreateCampaignFromCventController.createNewAttendeesFromLeads';
import getCampaignMembersCount     from '@salesforce/apex/quickCreateCampaignFromCventController.getMembersCount';

import {CurrentPageReference, NavigationMixin} from "lightning/navigation";
import hasPermission from '@salesforce/customPermission/AccessToAddCventCampaign';
import { showToast, goToRecord} from 'c/utils';
import {ShowToastEvent} from "lightning/platformShowToastEvent";
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';

import EVENT_CODE_FIELD from '@salesforce/schema/CventEvents__Event__c.CventEvents__pkg_Code__c';
import EVENT_MAIN_BRAND_FIELD from '@salesforce/schema/CventEvents__Event__c.MainBrand__c';
import { getPicklistValues } from "lightning/uiObjectInfoApi";
import MAIN_BRAND_FIELD from "@salesforce/schema/Campaign.Brands__c";

import {
    subscribe,
    unsubscribe,
    onError,
    setDebugFlag,
    isEmpEnabled,
} from 'lightning/empApi';

// Labels
import GENERATION_OF_CAMPAIGN from '@salesforce/label/c.Cvent_Generation_of_Campaign';
import CONVERSION_OF_ATTENDEES_INTO_LEADS from '@salesforce/label/c.Cvent_Conversion_of_Attendees_into_Leads';
import CREATION_OF_CAMPAIGN_MEMBERS from '@salesforce/label/c.Cvent_Creation_of_Campaign_Members';
import EXISTING_CAMPAIGN_LINKED_TO_EVENT from '@salesforce/label/c.Cvent_Existing_Campaign_Linked_to_Event';
import ERROR from '@salesforce/label/c.Cvent_Error';
import HERE from '@salesforce/label/c.Cvent_Here';
import ENTER_CODE_TO_GENERATE_NEW_CAMPAIGN from '@salesforce/label/c.Cvent_Enter_Code_to_Generate_New_Campaign';
import PREPARING_CAMPAIGN from '@salesforce/label/c.Cvent_Preparing_Campaign';
import CAMPAIGN_GENERATION_COMPLETE_AND_ACCESSIBLE from '@salesforce/label/c.Cvent_Campaign_Generation_Complete_and_Accessible';
import EXISTING_CAMPAIGN_ASSOCIATED_WITH_EVENT from '@salesforce/label/c.Cvent_Existing_Campaign_Associated_with_Event';
import START_CREATING_CAMPAIGN_MEMBERS_AFTER_LEADS_ESTABLISHED from '@salesforce/label/c.Cvent_Start_Creating_Campaign_Members_After_Leads_Established';
import PREPARING_CAMPAIGN_MEMBERS_RECORDS from '@salesforce/label/c.Cvent_Preparing_Campaign_Members_Records';
import CAMPAIGN_MEMBERS_CREATION_COMPLETE from '@salesforce/label/c.Cvent_Campaign_Members_Creation_Complete';
import ERROR_GENERATING_CAMPAIGN_MEMBERS_RECORDS from '@salesforce/label/c.Cvent_Error_Generating_Campaign_Members_Records';
import INVALID_ENTRY from '@salesforce/label/c.Cvent_Invalid_Entry';
import CONVERT_YOUR_CVENT from '@salesforce/label/c.Cvent_Convert_Your_Cvent';
import ALL_ATTENDEES_WILL_BE_ADDED from '@salesforce/label/c.Cvent_All_CVENT_Attendees_Will_Be_Added_As_Campaign_Members';
import CVENT_EVENT_CODE from '@salesforce/label/c.Cvent_Event_Code';
import WE_RE_SORRY_THIS_FEATURE_IS_NOT_ENABLED from '@salesforce/label/c.Cvent_we_re_sorry_this_feature_is_not_enabled';
import PLEASE_CONTACT_YOUR_ADMINISTRATOR_CRM_ANALYST from '@salesforce/label/c.Cvent_please_contact_your_administrator_crm_analyst';
import THANK_YOU from '@salesforce/label/c.Cvent_thank_you';
import MATCHED_COUNT from '@salesforce/label/c.New_Matched_Campaign_Members';
import UNMATCHED_COUNT from '@salesforce/label/c.New_Unmatched_Campaign_Members';
import NEW_DYNAMIC_MAPPING_MSG from '@salesforce/label/c.It_appears_that_new_dynamic_mappings_have_been_added';
import CREATE from '@salesforce/label/c.create_button';
import GENERATE_SALES_LEAD from '@salesforce/label/c.Generate_Sales_Lead';
import MAIN_BRAND from '@salesforce/label/c.main_brand';

const CVENT_CAMPAIGN_RECORD_TYPE_ID = '0120J000000Yh7kQAC';
/**
 * Constants defining stages of campaign creation.
 * @constant
 * @type {number}
 */
const CAMPAIGN_CREATION_STAGE           = 0;
const LEAD_CONVERSION_STAGE             = 1;
const ATTENDEES_CREATION_STAGE          = 2;
export default class QuickCreateCampaignFromCventLwc extends NavigationMixin(LightningElement)
{
    @api recordId;

    @track
    stages = [
        { name: 'Generation of Campaign record'          , notStarted: true, inProgress: false, completed: false, error: false },
        { name: 'Conversion of Attendees into Leads'     , notStarted: true, inProgress: false, completed: false, error: false },
        { name: 'Creation of Campaign Members'           , notStarted: true, inProgress: false, completed: false, error: false }
    ];

    isDisabled = false;
    isLoading = false;
    inProgress = true;
    generatedCampaignId;
    alreadyExistingCampaignId;
    attendeeResultWrapper;
    errorDebugLogId;
    cventCode;
    cventMainBrand;
    matchedMembersCount = 0 ;
    unmatchedMembersCount = 0 ;
    labels = {
        GENERATION_OF_CAMPAIGN,
        CONVERSION_OF_ATTENDEES_INTO_LEADS,
        CREATION_OF_CAMPAIGN_MEMBERS,
        EXISTING_CAMPAIGN_LINKED_TO_EVENT,
        ERROR,
        HERE,
        ENTER_CODE_TO_GENERATE_NEW_CAMPAIGN,
        PREPARING_CAMPAIGN,
        CAMPAIGN_GENERATION_COMPLETE_AND_ACCESSIBLE,
        EXISTING_CAMPAIGN_ASSOCIATED_WITH_EVENT,
        START_CREATING_CAMPAIGN_MEMBERS_AFTER_LEADS_ESTABLISHED,
        PREPARING_CAMPAIGN_MEMBERS_RECORDS,
        CAMPAIGN_MEMBERS_CREATION_COMPLETE,
        ERROR_GENERATING_CAMPAIGN_MEMBERS_RECORDS,
        INVALID_ENTRY,
        CONVERT_YOUR_CVENT,
        ALL_ATTENDEES_WILL_BE_ADDED,
        CVENT_EVENT_CODE,
        WE_RE_SORRY_THIS_FEATURE_IS_NOT_ENABLED,
        PLEASE_CONTACT_YOUR_ADMINISTRATOR_CRM_ANALYST,
        UNMATCHED_COUNT,
        MATCHED_COUNT,
        NEW_DYNAMIC_MAPPING_MSG,
        CREATE,
        GENERATE_SALES_LEAD,
        MAIN_BRAND,
        THANK_YOU
    };

    /**
     *  Lightning Web Component Life Cycle : Connected Callback
     */
    connectedCallback() {
        this.subscribeToPlatformEventNotifications();
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    /**
     * Wire service to load event fields based on the record Id.
     * @param {Object} error - Error information if the wire service call fails.
     * @param {Object} data - Data received from the wire service call.
     */
    @wire(getRecord, { recordId: '$recordId', fields: [EVENT_CODE_FIELD, EVENT_MAIN_BRAND_FIELD] })
    loadFields({ error, data }) {
        if (error) {
            console.error(error);
        } else if (data) {
            this.cventCode = getFieldValue(data, EVENT_CODE_FIELD);
            this.cventMainBrand = getFieldValue(data, EVENT_MAIN_BRAND_FIELD);
        }
    }

    @wire(getPicklistValues, { recordTypeId: CVENT_CAMPAIGN_RECORD_TYPE_ID, fieldApiName: MAIN_BRAND_FIELD })
    mainBrandPicklistValues;

    selectedMainBrand;
    convertToSalesLead = false;
    get mainBrandValues(){
        return this.mainBrandPicklistValues.data ? this.mainBrandPicklistValues.data.values : [];
    }

    handleMainBrandChange(event){
        this.selectedMainBrand = event.detail.value;
    }
    handleChangeConvertTo(event){
        this.convertToSalesLead = event.detail.checked;
    }

    /************************************************************************************/
    /**                                 Apex Calls                                      */
    /************************************************************************************/

    /**
     * Initiates the process of creating a campaign by calling the 'createCampaignFromCvent' Apex method.
     * Handles different states such as in-progress, completion, and errors during the campaign creation process.
     * @param {string} cventCode - The Cvent event code used to generate a new campaign.
     * @param {string} mainBrand - The main brand associated with the campaign.
     * @param {boolean} convertToSalesLead - Indicates whether to convert campaign members to sales leads.
     */
    async createCampaign(cventCode,mainBrand,convertToSalesLead)
    {
        this.setStageToInProgress(CAMPAIGN_CREATION_STAGE);

        try
        {
            const result = await createCampaignFromCvent({cventCode: cventCode, mainBrand:mainBrand, convertMembersToSalesLeads:convertToSalesLead});

            // ERROR
            if (result.error) {
                console.error('Errors : ' + JSON.stringify(result, null, 2));
                this.errorDebugLogId = result.errorDebugLogId;
                if (result.status === 'Existing') {
                    this.generatedCampaignId = null;
                    this.alreadyExistingCampaignId = result.result;
                    this.showFoundToast(result.result);
                    this.isDisabled = false;
                } else {
                    let errorMsg = (result.error.message) ? (result.error.message) : (result.error);
                    showToast(this, 'Theme4t', 'Error', errorMsg, 'error');
                    this.isDisabled = false;
                }
                this.setStageToError(CAMPAIGN_CREATION_STAGE);
            }
            // RESULT
            else if (result.result) {
                //console.log('result : ' + JSON.stringify(result, null, 2));
                this.generatedCampaignId = result.result;
                this.alreadyExistingCampaignId = null;
                this.setStageToCompleted(CAMPAIGN_CREATION_STAGE);
                //this.animateLink();
            }
            // UNKNOWN SERVER RESPONSE
            else {
                console.error('Unknown result : ' + JSON.stringify(result, null, 2));
                this.setStageToError(CAMPAIGN_CREATION_STAGE);
                this.isDisabled = false;
            }
        }
            // JS ERROR
        catch (error)
        {
            console.error('UnHandled Exception : ' + JSON.stringify(error, null, 2));
            this.setStageToError(CAMPAIGN_CREATION_STAGE);
            this.isDisabled = false;
        }
    }

    /**
     * Initiates the process of converting temporary attendees to leads by calling the 'convertTempAttendeesToLeads' Apex method.
     * Handles different states such as in-progress, completion, and errors during the lead conversion process.
     */
    async startLeadConversionFromTempAttendees()
    {
        this.setStageToInProgress(LEAD_CONVERSION_STAGE); // Hidden in UI
        this.setStageToInProgress(ATTENDEES_CREATION_STAGE);
        try
        {
            const result = await convertTempAttendeesToLeads({cventCode: this.cventCode});

            // ERROR
            if (result.error) {
                console.error('Lead Conversion Errors : ' + JSON.stringify(result, null, 2));
                let errorMsg = (result.error.message) ? (result.error.message) : (result.error);
                showToast(this, 'Theme4t', 'Error', errorMsg, 'error');
                this.isDisabled = false;
                this.setStageToError(LEAD_CONVERSION_STAGE);
                this.setStageToError(ATTENDEES_CREATION_STAGE);
            }
            // RESULT
            else if (result.result) {
                this.setStageToCompleted(LEAD_CONVERSION_STAGE);
                this.attendeeResultWrapper = result;
            }
            // UNKNOWN
            else {
                console.error('Unknown result Lead Conversion : ' + JSON.stringify(result, null, 2));
                this.setStageToError(LEAD_CONVERSION_STAGE);
                this.setStageToError(ATTENDEES_CREATION_STAGE);
                this.isDisabled = false;
            }
        }
        catch (error)
        {
            console.error('UnHandled Exception Lead Conversion: ' + JSON.stringify(error, null, 2));
            this.setStageToError(LEAD_CONVERSION_STAGE);
            this.setStageToError(ATTENDEES_CREATION_STAGE);
            this.isDisabled = false;
        }
    }

    /**
     * Initiates the process of creating attendees from leads by calling the 'createAttendeesFromLeads' Apex method.
     * Handles different states such as errors and unknown server responses during the attendee creation process.
     * @param {Object[]} batch - An array of attendee wrappers to be processed for creation.
     */
    async startAttendeeCreation(batch)
    {
        if(this.attendeeResultWrapper)
        {
            try
            {
                const result = await createAttendeesFromLeads({attendeeWrappers: batch})

                // SERVER RETURNED ERROR
                if (result.error) {
                    console.error('Campaign Members Creation Errors : ' + JSON.stringify(result, null, 2));
                    let errorMsg = (result.error.message) ? (result.error.message) : (result.error);
                    showToast(this, 'Theme4t', 'Error', errorMsg, 'error');
                    this.setStageToError(ATTENDEES_CREATION_STAGE);
                }

                // SERVER RETURNED RESULT
                else if (result.result) {
                    //console.log('Campaign Members Creation result : ' + JSON.stringify(result, null, 2));
                }

                // UNKNOWN SERVER RESPONSE
                else {
                    console.error('Unknown result Campaign Members Creation : ' + JSON.stringify(result, null, 2));
                    this.setStageToError(ATTENDEES_CREATION_STAGE);
                }
            }
                // JS UNHANDLED EXCEPTION
            catch (e)
            {
                console.error('UnHandled Exception Campaign Members Creation:' + JSON.stringify(e, null, 2));
                this.setStageToError(ATTENDEES_CREATION_STAGE);
            }
        }
    }

    /************************************************************************************/
    /**                                 Utils                                           */
    /************************************************************************************/

    /**
     * Initiates the end-to-end process of campaign creation, lead conversion, and attendee creation based on the provided parameters.
     * Calls the 'createCampaign', 'startLeadConversionFromTempAttendees', and 'startAttendeeCreation' methods sequentially.
     * Handles different stages, errors, and completion throughout the entire process.
     * @param {string} cventCode - The Cvent event code used to generate a new campaign.
     * @param {string} mainBrand - The main brand associated with the campaign.
     * @param {boolean} convertToSalesLead - Indicates whether to convert campaign members to sales leads.
     */
    async launchCreation(cventCode,mainBrand,convertToSalesLead){
        try
        {
            await this.createCampaign(cventCode,mainBrand,convertToSalesLead);
            if(this.campaignCreationStage.completed)
            {
                await this.startLeadConversionFromTempAttendees();

                if (!this.leadsGenerationStage.error && this.attendeeResultWrapper.attendeeWrappers) {
                    // this.setStageToInProgress(ATTENDEES_CREATION_STAGE);
                    const attendees = this.attendeeResultWrapper.attendeeWrappers;
                    const batchSize = 400;
                    const totalAttendees = attendees.length;

                    // loop through the attendees array in batches of 400
                    for (let i = 0; i < totalAttendees; i += batchSize)
                    {
                        // Making sure no batch has caused an error
                        if(!this.attendeesAndMembersCreation.error)
                        {
                            const batch = attendees.slice(i, i + batchSize);
                            // execute generation for each batch of 200 attendees
                            //console.log('Enqueuing : ' + batch.length);
                            await this.startAttendeeCreation(batch);
                        }
                    }

                    // Mark Completed if all good
                    if(!this.attendeesAndMembersCreation.error)
                    {
                        // Fetch the count of campaign members for Leads and Contacts separately
                        try {
                            const campaignData = await getCampaignMembersCount({ campaignId: this.generatedCampaignId});

                            if(campaignData){
                                this.matchedMembersCount = campaignData.NumberOfContacts;
                                this.unmatchedMembersCount = campaignData.NumberOfLeads;
                            }

                        } catch (error) {
                            console.error('Error fetching campaign members count:', error);
                        }

                        this.setStageToCompleted(ATTENDEES_CREATION_STAGE);
                        this.handleToggleDetails(true);
                    }
                }

                this.isDisabled = false;
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    toggleClass(div) {
        if (div.classList.contains('slds-is-open')) {
            div.classList.remove('slds-is-open');
        } else {
            div.classList.add('slds-is-open');
        }
    }

    /**
     * Validate the user entry in the code input
     * @returns {*} - If the code input is valid
     */
    validateFields() {
        return [...this.template.querySelectorAll('lightning-input')].reduce((validSoFar, field) =>
        {
            // Return whether all fields up to this point are valid and whether current field is valid
            // reportValidity returns validity and also displays/clear message on element based on validity
            return (validSoFar && field.reportValidity());
        }, true);
    }

    /**
     * Show a toast message in the use case where the user has entered a cvent code already converted to a campaign
     * @param campaignFound - The Id of the campaign found, we will allow the user to get redirected to this campaign
     *                        via a link
     */
    showFoundToast(campaignFound)
    {
        const event = new ShowToastEvent({
            title: this.labels.ERROR,
            message: this.labels.EXISTING_CAMPAIGN_LINKED_TO_EVENT + ' (Code:{0})!',
            messageData: [
                this.cventCode,
                {
                    url:'/' + campaignFound,
                    label: this.labels.HERE,
                },
            ],
        });
        this.dispatchEvent(event);
    }

    /**
     * Sets all the stage to not started in the beginning
     */
    setAllStageToNotStarted(){
        this.setStageToNotStarted(CAMPAIGN_CREATION_STAGE);
        this.setStageToNotStarted(LEAD_CONVERSION_STAGE);
        this.setStageToNotStarted(ATTENDEES_CREATION_STAGE);
    }

    setStageToNotStarted(index){
        this.stages[index].notStarted  = true;
        this.stages[index].inProgress  = false;
        this.stages[index].completed   = false;
        this.stages[index].error       = false;
    }
    setStageToInProgress(index){
        this.stages[index].notStarted  = false;
        this.stages[index].inProgress  = true;
        this.stages[index].completed   = false;
        this.stages[index].error       = false;
    }
    setStageToCompleted(index){
        this.stages[index].notStarted  = false;
        this.stages[index].inProgress  = false;
        this.stages[index].completed   = true;
        this.stages[index].error       = false;
    }
    setStageToError(index){
        this.stages[index].notStarted  = false;
        this.stages[index].inProgress  = false;
        this.stages[index].completed   = false;
        this.stages[index].error       = true;
    }

    /************************************************************************************/
    /**                                  GETTERS                                        */
    /************************************************************************************/

    get hasAccess(){
        return hasPermission;
    }
    get campaignCreationStage() {
        return this.stages[CAMPAIGN_CREATION_STAGE];
    }
    get leadsGenerationStage() {
        return this.stages[LEAD_CONVERSION_STAGE];
    }
    get attendeesAndMembersCreation() {
        return this.stages[ATTENDEES_CREATION_STAGE];
    }

    /**
     * Gets the current description for the first stage of the campaign creation process.
     * @return {string} - The description based on the current state of the first stage.
     */
    get stageOneCurrentDescription()
    {
        if(this.stages[CAMPAIGN_CREATION_STAGE].notStarted){
            return this.labels.ENTER_CODE_TO_GENERATE_NEW_CAMPAIGN;
        }else if(this.stages[CAMPAIGN_CREATION_STAGE].inProgress){
            return this.labels.PREPARING_CAMPAIGN;
        }else if(this.stages[CAMPAIGN_CREATION_STAGE].completed){
            return this.labels.CAMPAIGN_GENERATION_COMPLETE_AND_ACCESSIBLE;
        }else if(this.stages[CAMPAIGN_CREATION_STAGE].error){
            if(this.alreadyExistingCampaignId)
            {
                return this.labels.EXISTING_CAMPAIGN_ASSOCIATED_WITH_EVENT;
            }
            else
            {
                return this.labels.ENTER_CODE_TO_GENERATE_NEW_CAMPAIGN;
            }
        }
    }

    get stageTwoCurrentDescription()
    {
        if(this.stages[LEAD_CONVERSION_STAGE].notStarted){
            return 'Once the campaign record has been created successfully, the process of converting attendees into lead records will begin.';
        }else if(this.stages[LEAD_CONVERSION_STAGE].inProgress){
            return 'Please wait while we prepare your leads records...';
        }else if(this.stages[LEAD_CONVERSION_STAGE].completed){
            return 'The leads generation process has been completed successfully.';
        }else if(this.stages[LEAD_CONVERSION_STAGE].error){
            return 'An error has occurred while generating lead records. Please contact your system administrator for assistance.';
        }
    }

    /**
     * Gets the current description for the third stage of the campaign creation process.
     * @return {string} - The description based on the current state of the third stage.
     */
    get stageThreeCurrentDescription()
    {
        if(this.stages[ATTENDEES_CREATION_STAGE].notStarted){
            return this.labels.START_CREATING_CAMPAIGN_MEMBERS_AFTER_LEADS_ESTABLISHED;
        }else if(this.stages[ATTENDEES_CREATION_STAGE].inProgress){
            return this.labels.PREPARING_CAMPAIGN_MEMBERS_RECORDS;
        }else if(this.stages[ATTENDEES_CREATION_STAGE].completed){
            return this.labels.CAMPAIGN_MEMBERS_CREATION_COMPLETE;
        }else if(this.stages[ATTENDEES_CREATION_STAGE].error){
            return this.labels.ERROR_GENERATING_CAMPAIGN_MEMBERS_RECORDS;
        }
    }
    get stageOneName() {
        return this.stages[CAMPAIGN_CREATION_STAGE].name
    }
    get stageTwoName() {
        return this.stages[LEAD_CONVERSION_STAGE].name
    }
    get stageThreeName() {
        return this.stages[ATTENDEES_CREATION_STAGE].name
    }

    get showHereLinkToCampaign(){
        // Process finish Completed Or Error
        return (this.stages[CAMPAIGN_CREATION_STAGE].completed || (this.stages[CAMPAIGN_CREATION_STAGE].error && this.alreadyExistingCampaignId) );
    }


    /************************************************************************************/
    /**                                 Platform Event Section                          */
    /************************************************************************************/

    channelName = '/event/Notification__e';
    subscription = {};

    // Tracks changes to channelName text field
    handleChannelName(event) {
        this.channelName = event.target.value;
    }

    /**
     * Handles subscribe to Notification__e PE
     */
    subscribeToPlatformEventNotifications() {
        // Callback invoked whenever a new event message is received
        const messageCallback = (response) => {
            // Response contains the payload of the new message received
            if(response.data.payload.SubType__c === 'Validations') {
                this.handleToggleDetails(false);
            }
        };

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback).then((response) => {
            // Response contains the subscription information on subscribe call
            this.subscription = response;
        });
    }


    /**
     * Handles unsubscribe to Notification__e PE
     */
    handleUnsubscribe() {
        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, (response) => {
            // Response is true for successful unsubscribe
        });
    }


    /************************************************************************************/
    /**                                 Event Handlers                                  */
    /************************************************************************************/

    /**
     * Toggles the visibility of details for either campaign members or campaign details.
     * @param {boolean} forMembers - Indicates whether to toggle details for campaign members (true) or campaign details (false).
     */
    handleToggleDetails(forMembers){
        try{
            const div = (forMembers) ? this.template.querySelector('*.create-details-members') : this.template.querySelector('*.create-details-campaign');
            // Add the 'slds-is-open' class to the div's class list
            if (div) {
                div.classList.add('slds-is-open');
                const article = this.template.querySelector('.slds-timeline__item_details')
                if (article) {
                    article.classList.toggle('slds-is-open');
                }
            }else{
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * Handles the change of the code input
     * @param event
     */
    handleChangeInput(event) {
        this.cventCode = event.detail.value;
    }

    /**
     * Handles when the user clicks on Create Button. It launches the campaign creation
     */
    async handleCreateAction() {
        this.isDisabled = true;

        if (!this.validateFields() || !this.cventCode) {
            showToast(this, 'Theme4t', 'Error', this.labels.INVALID_ENTRY, 'error');
            this.isDisabled = false;
        }
        else {
            this.setAllStageToNotStarted();
            await this.launchCreation(this.cventCode,this.cventMainBrand,this.convertToSalesLead);
        }
    }

    /**
     * Handles when the user clicks on campaign link
     */
    handleRedirectionToCampaign(event)
    {
        event.preventDefault();
        event.stopPropagation();
        if(this.generatedCampaignId)
        {
            this.handleRedirectionToNewCampaign();
        }
        else if (this.alreadyExistingCampaignId)
        {
            this.handleRedirectionToExisting();
        }
        event.preventDefault();
    }

    /**
     * Redirects the user to the campaign Id
     */
    handleRedirectionToNewCampaign() {
        const url = `/${this.generatedCampaignId}`;
        const redirected = window.open(url, '_blank');
        if (!redirected) {
            //Pop-up blocked
            this.fallbackFunction(this.generatedCampaignId);
        }
    }

    /**
     * Handles when the user wants to access the existing campaign
     */
    handleRedirectionToExisting() {
        const url = `/${this.alreadyExistingCampaignId}`;
        const win = window.open(url, '_blank');
        if (!win) {
            //Pop-up blocked
            this.fallbackFunction(this.alreadyExistingCampaignId);
        }
    }

    /**
     * Handles when the user browser doesn't allow pop-ups
     */
    fallbackFunction(recordId) {
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
                objectApiName: "Campaign",
                actionName: "view",
                recordId: recordId
            }
        });
    }
}