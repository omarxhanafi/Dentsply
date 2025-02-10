// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkOrderChangeEvent extends SObject 
{
    Account: Account;
    AccountId: string;
    /**
     * <h3><b>Actual Duration from SA (in Mins)</b></h3>
     * <p>Cumulative field that sums up the durations, updated through flows after completing each Service Appointment.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ActualDurationfromSA__c: number;
    Address: Address;
    Asset: Asset;
    AssetId: string;
    /**
     * <h3><b>Asset Serial Number</b></h3>
     * <p>Formula to expose the serial number of the asset on Work Order</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Asset.SerialNumber</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AssetSerialNumber__c: string;
    AssetWarranty: AssetWarranty;
    AssetWarrantyId: string;
    BusinessHours: BusinessHours;
    BusinessHoursId: string;
    /**
     * <h3><b>Cannot Complete Reason</b></h3>
     * <p>This field will be filled out by field service technicians if they didn&#39;t complete a service appointment</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CannotCompleteReason__c: string;
    Case: Case;
    CaseId: string;
    /**
     * <h3><b>Case Number</b></h3>
     * <p>Show Case Number to Portal Users</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case.CaseNumber</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CaseNumber__c: string;
    ChangeEventHeader: ChangeEventHeader;
    City: string;
    Contact: Contact;
    /**
     * <h3><b>Contact Email</b></h3>
     * <p>to be shown on Portal</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Contact.Email</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ContactEmail__c: string;
    ContactId: string;
    Country: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    /**
     * <h3><b>CSAT Survey Score</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CSATSurveyScore__c: number;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Customer ERP ID</b></h3>
     * <p>TFUS-000005480</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SourceRecord__r.Customer_Id__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CustomerERPId__c: string;
    /**
     * <h3><b>Work Done</b></h3>
     * <p>Copied from each completed Service Appointment</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(4000)</td></tr>
     * </table>
     */
    DescribeWhatHasBeenDone__c: string;
    Description: string;
    Duration: number;
    DurationInMinutes: number;
    DurationType: string;
    EndDate: string;
    Entitlement: Entitlement;
    EntitlementId: string;
    /**
     * <h3><b>ERPJSON Version</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    ERPJSONVersion__c: number;
    /**
     * <h3><b>ERP Order Number</b></h3>
     * <p>The ERP Number from ERP - populated by integration based on Audit Logs in AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPOrderNumber__c: string;
    /**
     * <h3><b>ERP Order Status</b></h3>
     * <p>Shows the status of the order in ERP - comes from the integration from Audit Logs in AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPOrderStatus__c: string;
    /**
     * <h3><b>ERP Return Message</b></h3>
     * <p>Will show the return message from ERP from the integrations. Can show both success messages as well as Error messages. Info Comes from Audit Logs in AX.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(1000)</td></tr>
     * </table>
     */
    ERPReturnMessage__c: string;
    /**
     * <h3><b>Fault Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FaultDescription__c: string;
    /**
     * <h3><b>Is Fill In Candidate</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    FSL__IsFillInCandidate__c: boolean;
    /**
     * <h3><b>Prevent Geocoding For Chatter Actions</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    FSL__Prevent_Geocoding_For_Chatter_Actions__c: boolean;
    /**
     * <h3><b>Scheduling Priority</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(TEXT(Priority), &#39;Critical&#39; , 1 ,&#39;High&#39; ,2,&#39;Medium&#39; ,3 , &#39;Low&#39;, 4, null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Scheduling_Priority__c: number;
    /**
     * <h3><b>Visiting Hours</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link OperatingHours})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__VisitingHours__c: string;
    /**
     * <h3><b>Visiting Hours</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link OperatingHours})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__VisitingHours__r: OperatingHours;
    GeocodeAccuracy: string;
    IsClosed: boolean;
    IsGeneratedFromMaintenancePlan: boolean;
    IsStopped: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Latitude: number;
    LineItemCount: number;
    Location: Location;
    LocationId: string;
    Longitude: number;
    MaintenancePlan: MaintenancePlan;
    MaintenancePlanId: string;
    MaintenanceWorkRule: MaintenanceWorkRule;
    MaintenanceWorkRuleId: string;
    MinimumCrewSize: number;
    /**
     * <h3><b>Org Id</b></h3>
     * <p>This field is use to show send to ERP button only in prod org</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">$Organization.Id</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OrgId__c: string;
    Owner: User;
    OwnerId: string;
    ParentWorkOrder: WorkOrder;
    ParentWorkOrderId: string;
    /**
     * <h3><b>Phone/Mobile</b></h3>
     * <p>Account phone number, mainly to expose it to Contractor portal</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISBLANK( Contact.MobilePhone ) ,&quot;Contact Phone: &quot; &amp; Contact.Phone, IF( ISBLANK(Contact.Phone), &quot;Contact Mobile: &quot; &amp; Contact.MobilePhone , &quot;Account Phone: &quot;&amp; Account.Phone ))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Phone__c: string;
    PostalCode: string;
    Pricebook2: Pricebook2;
    Pricebook2Id: string;
    Priority: string;
    ProductServiceCampaign: ProductServiceCampaign;
    ProductServiceCampaignId: string;
    ProductServiceCampaignItem: ProductServiceCampaignItem;
    ProductServiceCampaignItemId: string;
    RecommendedCrewSize: number;
    ReplayId: string;
    ReturnOrderLineItem: ReturnOrderLineItem;
    ReturnOrderLineItemId: string;
    RootWorkOrder: WorkOrder;
    RootWorkOrderId: string;
    /**
     * <h3><b>Scheduling Priority (DS)</b></h3>
     * <p>it represents/reflects the priority to be in numbers</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(TEXT(Priority), &#39;Business Crititcal&#39;, 1 ,&#39;Customer Critical&#39; ,1,&#39;High&#39;,2 ,&#39;Normal&#39;, 3,&#39;Medium&#39;,3,&#39;Low&#39;,4, null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SchedulingPriorityDS__c: number;
    /**
     * <h3><b>Send To ERP Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SendToERPDate__c: string;
    ServiceContract: ServiceContract;
    ServiceContractId: string;
    /**
     * <h3><b>Service Notes</b></h3>
     * <p>To be copied from Service Appointment (TFUS-000005632)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32000)</td></tr>
     * </table>
     */
    ServiceNotes__c: string;
    ServiceReportLanguage: string;
    ServiceReportTemplate: ServiceReportLayout;
    ServiceReportTemplateId: string;
    ServiceTerritory: ServiceTerritory;
    ServiceTerritoryId: string;
    /**
     * <h3><b>Service Type</b></h3>
     * <p>Used to describe the service code based on AX Service Types</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ServiceType__c: string;
    SlaExitDate: string;
    SlaStartDate: string;
    /**
     * <h3><b>Source Record</b></h3>
     * <p>CIM Record updated through the Case</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Source_Record__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceRecord__c: string;
    /**
     * <h3><b>Source Record</b></h3>
     * <p>CIM Record updated through the Case</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Source_Record__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceRecord__r: Source_Record__c;
    StartDate: string;
    State: string;
    Status: string;
    StatusCategory: string;
    StopStartDate: string;
    Street: string;
    Subject: string;
    Subtotal: number;
    SuggestedMaintenanceDate: Date;
    /**
     * <h3><b>Survey Sent</b></h3>
     * <p>TFUS-000006524</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SurveySent__c: boolean;
    Tax: number;
    /**
     * <h3><b>Account Country</b></h3>
     * <p>Technical Field that will be used in Entitlement Processes to define milestone criteria</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Text( Account.Country__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TF_AccountCountry__c: string;
    /**
     * <h3><b>TF_IsValidSourceRecord</b></h3>
     * <p>This is to validate the source record for the integration. This is a quick temp fix until we deploy a scalable validation method.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( ISBLANK(SourceRecord__c) ||  ( SourceRecord__r.Company_Code__c !=&quot;613&quot; &amp;&amp;  SourceRecord__r.Company_Code__c !=&quot;614&quot; )||  TEXT(SourceRecord__r.Status__c)=&quot;Inactive&quot;, &quot;False&quot;,&quot;True&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TF_IsValidSourceRecord__c: string;
    /**
     * <h3><b>Service Territory Name</b></h3>
     * <p>as the service territory field is a lookup and we need to use it in Sharing Rules criteria and we can&#39;t use it, so this field is used as a technical field to get the service territory name through a flow and use it</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TF_ServiceTerritoryName__c: string;
    TotalPrice: number;
    WorkOrderNumber: string;
    WorkType: WorkType;
    WorkTypeId: string;
}