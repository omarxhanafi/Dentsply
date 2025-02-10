// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Asset extends SObject 
{
    Account: Account;
    AccountId: string;
    ActivityHistories: ActivityHistory[];
    Address: Address;
    /**
     * <h3><b>Age (# Days)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If(  ISBLANK(InstallDate) = false , TEXT(ROUND((TODAY() - InstallDate),0)), &#39;N/A&#39;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AgeDays__c: string;
    /**
     * <h3><b>Age (Y+M)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If( ISBLANK(InstallDate) = false , TEXT(FLOOR((TODAY() - InstallDate)/365.2425)) &amp;&#39; Years&#39; &amp; &#39; &#39; &amp; TEXT(FLOOR(MOD((TODAY() - InstallDate),365.2425)/30)) &amp;&#39; Months&#39;, &#39;N/A&#39;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AgeYM__c: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AppUsageAssignments: AppUsageAssignment[];
    /**
     * <h3><b>Article Number (SKU)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ArticleNumberSKU__c: string;
    /**
     * The reciprocal relationship for {@link AssetAccountParticipant.AssetId}.
     */
    Asset: AssetAccountParticipant;
    /**
     * The reciprocal relationship for {@link AssetAccountParticipant.AssetId}.
     */
    AssetAccountParticipantsAsset: AssetAccountParticipant[];
    AssetActions: AssetAction[];
    AssetAttributes: AssetAttribute[];
    /**
     * The reciprocal relationship for {@link AssetContactParticipant.AssetId}.
     */
    AssetContactParticipantAsset: AssetContactParticipant[];
    AssetContractRelationships: AssetContractRelationship[];
    /**
     * The reciprocal relationship for {@link AssetDowntimePeriod.AssetId}.
     */
    AssetDowntimePeriods: AssetDowntimePeriod[];
    /**
     * <h3><b>Asset ID (18 Digit)</b></h3>
     * <p>Converting Id from 15 char to 18 char</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASESAFEID(Id)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AssetID18Digits__c: string;
    AssetServicedBy: Account;
    AssetServicedById: string;
    AssetStatePeriods: AssetStatePeriod[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    /**
     * The reciprocal relationship for {@link SBQQ__AttributeValue__c.SBQQ__Asset__c}.
     */
    AttributeValues__r: SBQQ__AttributeValue__c[];
    Cases: Case[];
    /**
     * The reciprocal relationship for {@link Asset.ParentId}.
     */
    ChildAssets: Asset[];
    City: string;
    CombinedAttachments: CombinedAttachment[];
    /**
     * <h3><b>Combined Fields</b></h3>
     * <p>Combining the Product Name and Serial number to make it easier for the Service Cloud users to select the correct Asset</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Name&amp;&quot; | &quot;&amp;SerialNumber</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CombinedFields__c: string;
    /**
     * <h3><b>Competitor Product?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product_Name__r.Competitor_Product__c</code></td></tr>
     * </table>
     */
    Competitor_Product__c: boolean;
    Contact: Contact;
    ContactId: string;
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    /**
     * The reciprocal relationship for {@link ContractLineItem.AssetId}.
     */
    ContractLineItems: ContractLineItem[];
    /**
     * The reciprocal relationship for {@link Contract.SAP_Asset__c}.
     */
    Contracts__r: Contract[];
    Country: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>DEP Unique Key</b></h3>
     * <p>UniqueKey for equipments consisting of ItemNumber_SerialNumber - used also for integrations and tieing e.g. Subscriptions for DS Core Care to an equipment</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    DEPUniqueKey__c: string;
    Description: string;
    DigitalAssetStatus: string;
    /**
     * <h3><b>Distributor</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(200)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DistributorText__c: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * <h3><b>DSI serial number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DSI_serial_number__c: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EngagementInitiatedTopic: EngagementTopic[];
    /**
     * The reciprocal relationship for {@link Entitlement.AssetId}.
     */
    Entitlements: Entitlement[];
    /**
     * The reciprocal relationship for {@link EquipmentBooking__c.Asset__c}.
     */
    Equipment_Bookings__r: EquipmentBooking__c[];
    EventRelations: EventRelation[];
    Events: Event[];
    /**
     * The reciprocal relationship for {@link Asset.ParentId}.
     */
    Feeds: Asset[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    GeocodeAccuracy: string;
    Histories: AssetHistory[];
    InstallDate: Date;
    /**
     * <h3><b>Installed At (Id)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    InstalledAtIdText__c: string;
    /**
     * <h3><b>Invoice Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Number__c: string;
    IsCompetitorProduct: boolean;
    IsDeleted: boolean;
    IsInternal: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Latitude: number;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Location: Location;
    LocationId: string;
    Longitude: number;
    /**
     * <h3><b>Main Partner</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MainPartner__c: string;
    /**
     * <h3><b>Main Partner</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MainPartner__r: Account;
    /**
     * The reciprocal relationship for {@link MaintenanceAsset.AssetId}.
     */
    MaintenanceAssets: MaintenanceAsset[];
    /**
     * <h3><b>Manufacturer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product_Name__r.Manufacturer__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Manufacturer__c: string;
    Name: string;
    NetworkUserHistoryRecentToRecord: NetworkUserHistoryRecent[];
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    /**
     * <h3><b>Opportunity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Opportunity})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Opportunity__c: string;
    /**
     * <h3><b>Opportunity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Opportunity})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Opportunity__r: Opportunity;
    OrderActions: OrderAction[];
    /**
     * <h3><b>Order Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OrderNumber__c: string;
    Parent: Asset;
    ParentEntities: NetworkActivityAudit[];
    ParentId: string;
    ParentRecord: NetworkFeedResponseMetric;
    PostalCode: string;
    Price: number;
    /**
     * The reciprocal relationship for {@link AssetRelationship.AssetId}.
     */
    PrimaryAssets: AssetRelationship[];
    PrimaryRevenueTransactionErrorLogs: RevenueTransactionErrorLog[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    Product2: Product2;
    Product2Id: string;
    /**
     * <h3><b>Product/Asset Name</b></h3>
     * <p>To combine the Product Name from the ERP Products &amp; Non-ERP Products, only to be displayed on the related lists</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case ( RecordTypeId, &#39;0120J000000cmqC&#39;,  Product2.Name ,  Product_Name__r.Name )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Asset_Name__c: string;
    /**
     * <h3><b>Product Category</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product_Name__r.Product_Category__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Category__c: string;
    /**
     * <h3><b>Product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Non_ERP_Products__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Name__c: string;
    /**
     * <h3><b>Product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Non_ERP_Products__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Name__r: Non_ERP_Products__c;
    ProductCode: string;
    ProductDescription: string;
    ProductFamily: string;
    /**
     * The reciprocal relationship for {@link ProductServiceCampaignItem.AssetId}.
     */
    ProductServiceCampaignItems: ProductServiceCampaignItem[];
    PurchaseDate: Date;
    Quantity: number;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__RenewedAsset__c}.
     */
    Quote_Lines__r: SBQQ__QuoteLine__c[];
    QuoteActions: QuoteAction[];
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RecordAlertParent: RecordAlert[];
    RecordAlertWhat: RecordAlert[];
    /**
     * The reciprocal relationship for {@link RecordsetFltrCritMonitor.AssetId}.
     */
    RecordsetFltrCritMonitors: RecordsetFltrCritMonitor[];
    RecordType: RecordType;
    RecordTypeId: string;
    /**
     * <h3><b>Registration Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    RegistrationDate__c: Date;
    /**
     * The reciprocal relationship for {@link AssetRelationship.RelatedAssetId}.
     */
    RelatedAsset: AssetRelationship;
    /**
     * The reciprocal relationship for {@link AssetRelationship.RelatedAssetId}.
     */
    RelatedAssets: AssetRelationship[];
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    /**
     * The reciprocal relationship for {@link ResourcePreference.RelatedRecordId}.
     */
    ResourcePreferences: ResourcePreference[];
    /**
     * The reciprocal relationship for {@link ReturnOrderLineItem.AssetId}.
     */
    ReturnOrderLineItems: ReturnOrderLineItem[];
    /**
     * <h3><b>Revenue Synergy commodity code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Revenue_Synergy_commodity_code__c: string;
    RootAsset: Asset;
    RootAssetId: string;
    /**
     * <h3><b>SAP Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    SAPId__c: string;
    /**
     * <h3><b>sent letter</b></h3>
     * <p>needed to track if a welcome letter was sent or not (Germany)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    sent_letter__c: boolean;
    /**
     * The reciprocal relationship for {@link SerializedProduct.AssetId}.
     */
    SerializedProducts: SerializedProduct[];
    SerialNumber: string;
    /**
     * <h3><b>Service Agreement</b></h3>
     * <p>Temp field until we migrate the Service Agreement records</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ServiceAgreement__c: string;
    ServiceAppointments: ServiceAppointment[];
    /**
     * <h3><b>Ship-To Party</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShipToParty__c: string;
    /**
     * <h3><b>Ship-To Party</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShipToParty__r: Account;
    SobjectLookupValue: AIInsightValue;
    State: string;
    Status: string;
    StockKeepingUnit: string;
    Street: string;
    /**
     * The reciprocal relationship for {@link SBQQ__SubscribedAsset__c.SBQQ__Asset__c}.
     */
    Subscriptions__r: SBQQ__SubscribedAsset__c[];
    /**
     * The reciprocal relationship for {@link SubscriptionPlan__c.Asset__c}.
     */
    Subscriptions_Plans__r: SubscriptionPlan__c[];
    SystemModstamp: string;
    Tags: AssetTag[];
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    /**
     * <h3><b>Data Migration Action</b></h3>
     * <p>used to update ANZ Assets
     * Cutoff Feb 19, 2024</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Created After Cutoff</code></td><td>Created After Cutoff</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">To be Deleted</code></td><td>To be Deleted</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Has Work Orders/Cases</code></td><td>Has Work Orders/Cases</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Siroforce Asset</code></td><td>Siroforce Asset</td><td nowrap>true</td></tr>
     * </table>
     */
    TF_DataMigrationAction__c: string;
    Topic: EngagementTopicChangeEvent;
    TopicAssignments: TopicAssignment[];
    /**
     * <h3><b>Total price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Price * Quantity</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_price__c: number;
    /**
     * <h3><b>Unique External ID</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    UniqueExternalID__c: string;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__UpgradedAsset__c}.
     */
    UpgradeLines__r: SBQQ__QuoteLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__WebQuoteLine__c.SBQQ__UpgradedAsset__c}.
     */
    UpgradeWebLines__r: SBQQ__WebQuoteLine__c[];
    UsageEndDate: Date;
    /**
     * The reciprocal relationship for {@link AssetWarranty.AssetId}.
     */
    WarrantyAssets: AssetWarranty[];
    /**
     * The reciprocal relationship for {@link SBQQ__WebQuoteLine__c.SBQQ__RenewedAsset__c}.
     */
    WebQuoteLines__r: SBQQ__WebQuoteLine__c[];
    What: EventChangeEvent;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.AssetId}.
     */
    WorkOrderLineItems: WorkOrderLineItem[];
    WorkOrders: WorkOrder[];
    /**
     * The reciprocal relationship for {@link WorkPlanSelectionRule.AssetId}.
     */
    WorkPlanSelectionRules: WorkPlanSelectionRule[];
}