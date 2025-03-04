// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Product2 extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    /**
     * <h3><b>Alternate VAT</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AlternateVAT__c?: number;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    /**
     * <h3><b>Article (SKU)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    Article__c?: string;
    /**
     * The reciprocal relationship for {@link Article__c.Product_Name__c}.
     */
    Articles__r?: Article__c[];
    /**
     * The reciprocal relationship for {@link Asset.Product2Id}.
     */
    Assets?: Asset[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    AvailabilityDate?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__UpgradeSource__c.SBQQ__SourceProduct__c}.
     */
    AvailableUpgradeSources__r?: SBQQ__UpgradeSource__c[];
    BasedOn?: ProductClassification;
    BasedOnId?: string;
    /**
     * The reciprocal relationship for {@link BOM__c.Product__c}.
     */
    Bill_of_Material__r?: BOM__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__BlockPrice__c.SBQQ__Product__c}.
     */
    BlockPrices__r?: SBQQ__BlockPrice__c[];
    /**
     * <h3><b>Brand</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Brand__c?: string;
    /**
     * <h3><b>Brand Category</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BrandCategory__c?: string;
    /**
     * <h3><b>Brand Code GDW</b></h3>
     * <p>This is the Brand Code from the Global Product Structure in GDW.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BrandCodeGDW__c?: string;
    /**
     * <h3><b>Brand Desc GDW</b></h3>
     * <p>This is the Brand Description from the Global Product Structure in GDW.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BrandDescGDW__c?: string;
    /**
     * <h3><b>Brand Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BrandType__c?: string;
    /**
     * <h3><b>Business Area - Brand</b></h3>
     * <p>This formula field combines the Busienss Area Code and Brand like  &quot;DI1 - Ankylos&quot;. Use this field for grouping in reports etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Business_Area_Code__c  &amp; &quot; - &quot;  &amp;  Brand__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Business_Area_Brand__c?: string;
    /**
     * <h3><b>Business Area - Category - Brand (HQ)</b></h3>
     * <p>Combination of PA - BAC and Name (Primary use for HQ)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Business_Area_Code__c &amp; &quot; - &quot; &amp; Product_Category__c &amp; &quot; - &quot; &amp;  Brand__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Business_Area_Category_Brand_HQ__c?: string;
    /**
     * <h3><b>Business Area Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(3)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Business_Area_Code__c?: string;
    /**
     * <h3><b>Business Area Description</b></h3>
     * <p>Description corresponding to Business Area Code and Business Area Name.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Business_Area_Description__c?: string;
    /**
     * <h3><b>Business Area Name</b></h3>
     * <p>Name corresponding to the Business Area Code.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Business_Area_Name__c?: string;
    Cases?: Case[];
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ChildProductId}.
     */
    ChildProduct?: ProductRelatedComponent;
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ParentProductId}.
     */
    ChildProductRelatedComponents?: ProductRelatedComponent[];
    /**
     * The reciprocal relationship for {@link SBQQ__Subscription__c.SBQQ__RequiredByProduct__c}.
     */
    ChildSubscriptions__r?: SBQQ__Subscription__c[];
    CombinedAttachments?: CombinedAttachment[];
    /**
     * <h3><b>Commission Group</b></h3>
     * <p>From AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CommissionGroup__c?: string;
    /**
     * <h3><b>Company Code</b></h3>
     * <p>The Company Code as written in the GDW</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Company_Code__c?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__ConfigurationAttribute__c.SBQQ__Product__c}.
     */
    ConfigurationAttributes__r?: SBQQ__ConfigurationAttribute__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ConfigurationRule__c.SBQQ__Product__c}.
     */
    ConfigurationRules__r?: SBQQ__ConfigurationRule__c[];
    ConfigureDuringSale?: string;
    ConnectionReceived?: PartnerNetworkConnection;
    ConnectionReceivedId?: string;
    ConnectionSent?: PartnerNetworkConnection;
    ConnectionSentId?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__RelatedContent__c.SBQQ__Product__c}.
     */
    Content__r?: SBQQ__RelatedContent__c[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    /**
     * The reciprocal relationship for {@link SBQQ__ContractedPrice__c.SBQQ__Product__c}.
     */
    ContractedPrices__r?: SBQQ__ContractedPrice__c[];
    /**
     * The reciprocal relationship for {@link ContractLineItem.Product2Id}.
     */
    ContractLineItems?: ContractLineItem[];
    /**
     * The reciprocal relationship for {@link SBQQ__Cost__c.SBQQ__Product__c}.
     */
    Costs__r?: SBQQ__Cost__c[];
    /**
     * The reciprocal relationship for {@link ProductWarrantyTerm.CoveredProductId}.
     */
    CoveredProduct?: ProductWarrantyTerm;
    /**
     * <h3><b>CPQ Product</b></h3>
     * <p>If checked, this product is used in CPQ Quotes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CPQ_Product__c?: boolean;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>D-Level1</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level1__c?: string;
    /**
     * <h3><b>D-Level2</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level2__c?: string;
    /**
     * <h3><b>D-Level3</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level3__c?: string;
    /**
     * <h3><b>D-Level4</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level4__c?: string;
    /**
     * <h3><b>D-Level5</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level5__c?: string;
    /**
     * <h3><b>D-Level6</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level6__c?: string;
    /**
     * <h3><b>D-Level7</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level7__c?: string;
    /**
     * <h3><b>D-Level8</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level8__c?: string;
    /**
     * <h3><b>D-Level9</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    D_Level9__c?: string;
    /**
     * <h3><b>Dashboard Product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Y</code></td><td>Y</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N</code></td><td>N</td><td nowrap>true</td></tr>
     * </table>
     */
    Dashboard_Product__c?: string;
    /**
     * <h3><b>DEP Record Hash</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DEPRecordHash__c?: string;
    /**
     * <h3><b>DEP Unique Key</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    DEPUniqueKey__c?: string;
    Description?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__Dimension__c.SBQQ__Product__c}.
     */
    Dimensions__r?: SBQQ__Dimension__c[];
    DiscontinuedDate?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__DiscountSchedule__c.SBQQ__Product__c}.
     */
    DiscountSchedules__r?: SBQQ__DiscountSchedule__c[];
    DisplayUrl?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    /**
     * <h3><b>DQSA Product</b></h3>
     * <p>Brought in from ERP. Defines if a product is a Pharma product or not</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    DQSAProduct__c?: boolean;
    /**
     * <h3><b>DS Care Eligible</b></h3>
     * <p>Shows if the equipment is eligible for DS Core Care or not.
     * Now at start this is all manually ticked in SFDC, hopefully will be provided at some point in time.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    DSCareEligible__c?: boolean;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EndOfLifeDate?: string;
    EngagementInitiatedTopic?: EngagementTopic[];
    /**
     * The reciprocal relationship for {@link EquipmentBooking__c.Product__c}.
     */
    Equipment_Bookings__r?: EquipmentBooking__c[];
    /**
     * <h3><b>ERP Source</b></h3>
     * <p>The ERP Source. 1= M3, 2=AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(2,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Source__c?: number;
    /**
     * <h3><b>ERP Source Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(ERP_Source__c, 1, &quot;M3&quot;, 2, &quot;AX&quot;, &quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Source_Description__c?: string;
    EventRelations?: EventRelation[];
    Events?: Event[];
    ExternalDataSource?: ExternalDataSource;
    ExternalDataSourceId?: string;
    ExternalId?: string;
    /**
     * <h3><b>Factory Desc</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FactoryDesc__c?: string;
    Family?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__FavoriteProduct__c.SBQQ__Product__c}.
     */
    FavoriteProduct__r?: SBQQ__FavoriteProduct__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ProductFeature__c.SBQQ__ConfiguredSKU__c}.
     */
    Features__r?: SBQQ__ProductFeature__c[];
    Feeds?: Product2Feed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    /**
     * The reciprocal relationship for {@link DocTemplateSectionCondition.FilterObjectId}.
     */
    FilterObjects?: DocTemplateSectionCondition[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link FulfillmentOrderLineItem.Product2Id}.
     */
    FulfillmentOrderLineItems?: FulfillmentOrderLineItem[];
    /**
     * <h3><b>GDW Unique Key</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(42), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    GdwUniqueKey__c?: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    /**
     * <h3><b>Global Product Family</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link ProductFamily__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GlobalProductFamily__c?: string;
    /**
     * <h3><b>Global Product Family</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link ProductFamily__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GlobalProductFamily__r?: ProductFamily__c;
    /**
     * <h3><b>GlobalSKU Mapping</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GlobalSKUMapping__c?: string;
    /**
     * <h3><b>GlobalSKU Mapping</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GlobalSKUMapping__r?: Product2;
    /**
     * <h3><b>GPP Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GPP_Code__c?: string;
    /**
     * <h3><b>GPP Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GPP_Desc__c?: string;
    /**
     * <h3><b>GPP - Description</b></h3>
     * <p>This field is a concatenation of GPP + GPP Description. Used to display PG Info on all products regardless of SKU type. Used in WAVE, Search Lists, ..etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(RecordType.DeveloperName, &quot;Global&quot;), GPP_Code__c &amp;&quot; - &quot; &amp; GPP_Desc__c, GlobalSKUMapping__r.GPP_Code__c &amp; &quot; - &quot; &amp; GlobalSKUMapping__r.GPP_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GPP_Description__c?: string;
    /**
     * The reciprocal relationship for {@link ProductComponentGrpOverride.OverrideContextId}.
     */
    GroupOverrides?: ProductComponentGrpOverride[];
    HelpText?: string;
    Histories?: Product2History[];
    /**
     * <h3><b>ID 18</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASESAFEID( Id )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ID_18__c?: string;
    /**
     * The reciprocal relationship for {@link Internal_Orders__c.Product__c}.
     */
    InternalOrders__r?: Internal_Orders__c[];
    IsActive?: boolean;
    IsArchived?: boolean;
    IsAssetizable?: boolean;
    IsDeleted?: boolean;
    IsSerialized?: boolean;
    IsSoldOnlyWithOtherProds?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    /**
     * <h3><b>Legacy System ID</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(40)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Legacy_System_ID__c?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.LinkedEntityId}.
     */
    LinkedArticles?: LinkedArticle[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    /**
     * <h3><b>List Price</b></h3>
     * <p>Used for Implants Germany to calculate the gross price on invoices for comparison towards net prices</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    List_Price__c?: number;
    ListEmails?: ListEmail[];
    /**
     * The reciprocal relationship for {@link SBQQ__Localization__c.SBQQ__Product__c}.
     */
    Localizations__r?: SBQQ__Localization__c[];
    LocalRecord?: PartnerNetworkRecordConnection;
    /**
     * The reciprocal relationship for {@link SBQQ__LookupData__c.SBQQ__Product__c}.
     */
    LookupData__r?: SBQQ__LookupData__c[];
    /**
     * The reciprocal relationship for {@link MarginGuidance__c.Product__c}.
     */
    Margin_Guidances__r?: MarginGuidance__c[];
    Name?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    /**
     * <h3><b>Non-ERP Product</b></h3>
     * <p>Creates a link between the Product2 and non-erp products to create a higher grouping for profiling. Also used along with the workflow analysis.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Non_ERP_Products__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NonERPProduct__c?: string;
    /**
     * <h3><b>Non-ERP Product</b></h3>
     * <p>Creates a link between the Product2 and non-erp products to create a higher grouping for profiling. Also used along with the workflow analysis.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Non_ERP_Products__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NonERPProduct__r?: Non_ERP_Products__c;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    OpenOrderLines__r?: OpenOrderLine__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__OptionConstraint__c.SBQQ__ConfiguredSKU__c}.
     */
    Option_Constraints__r?: SBQQ__OptionConstraint__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ProductOption__c.SBQQ__OptionalSKU__c}.
     */
    OptionalFor__r?: SBQQ__ProductOption__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ProductOption__c.SBQQ__ConfiguredSKU__c}.
     */
    Options__r?: SBQQ__ProductOption__c[];
    /**
     * The reciprocal relationship for {@link ProductRelComponentOverride.OverrideContextId}.
     */
    OverrideContextId?: ProductRelComponentOverride[];
    /**
     * The reciprocal relationship for {@link ProductAttributeDefinition.OverrideContextId}.
     */
    OverrideContextProductAttributeDefinitions?: ProductAttributeDefinition[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    /**
     * <h3><b>Parent Kit</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ParentKit__c?: boolean;
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ParentProductId}.
     */
    ParentProduct?: ProductRelatedComponent;
    /**
     * The reciprocal relationship for {@link ProductDisqualification.ParentProductId}.
     */
    ParentProductDisqualifications?: ProductDisqualification[];
    /**
     * The reciprocal relationship for {@link ProductQualification.ParentProductId}.
     */
    ParentProductQualifications?: ProductQualification[];
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ChildProductId}.
     */
    ParentProductRelatedComponents?: ProductRelatedComponent[];
    ParentRecord?: NetworkFeedResponseMetric;
    PartnerRecord?: PartnerNetworkRecordConnection;
    /**
     * <h3><b>Product Group 1 Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG1_Code__c?: string;
    /**
     * <h3><b>Product Group 1 Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG1_Desc__c?: string;
    /**
     * <h3><b>PG1 - Description</b></h3>
     * <p>This field is a concatenation of PG1 + PG1 Description. Used to display PG Info on all products regardless of SKU type. Used in WAVE, Search Lists, ..etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(RecordType.DeveloperName, &quot;Global&quot;), PG1_Code__c &amp;&quot; - &quot; &amp; PG1_Desc__c, GlobalSKUMapping__r.PG1_Code__c &amp; &quot; - &quot; &amp; GlobalSKUMapping__r.PG1_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG1_Description__c?: string;
    /**
     * <h3><b>Product Group 2 Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG2_Code__c?: string;
    /**
     * <h3><b>Product Group 2 Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG2_Desc__c?: string;
    /**
     * <h3><b>PG2 - Description</b></h3>
     * <p>This field is a concatenation of PG1 + PG1 Description. Used to display PG Info on all products regardless of SKU type. Used in WAVE, Search Lists, ..etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(RecordType.DeveloperName, &quot;Global&quot;), PG2_Code__c &amp;&quot; - &quot; &amp; PG2_Desc__c, GlobalSKUMapping__r.PG2_Code__c &amp; &quot; - &quot; &amp; GlobalSKUMapping__r.PG2_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG2_Description__c?: string;
    /**
     * <h3><b>Product Group 3 Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG3_Code__c?: string;
    /**
     * <h3><b>Product Group 3 Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG3_Desc__c?: string;
    /**
     * <h3><b>PG3 - Description</b></h3>
     * <p>This field is a concatenation of PG1 + PG1 Description. Used to display PG Info on all products regardless of SKU type. Used in WAVE, Search Lists, ..etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(RecordType.DeveloperName, &quot;Global&quot;), PG3_Code__c &amp;&quot; - &quot; &amp; PG3_Desc__c, GlobalSKUMapping__r.PG3_Code__c &amp; &quot; - &quot; &amp; GlobalSKUMapping__r.PG3_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG3_Description__c?: string;
    /**
     * <h3><b>Product Group 4 Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG4_Code__c?: string;
    /**
     * <h3><b>Product Group 4 Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG4_Desc__c?: string;
    /**
     * <h3><b>PG4 - Description</b></h3>
     * <p>This field is a concatenation of PG1 + PG1 Description. Used to display PG Info on all products regardless of SKU type. Used in WAVE, Search Lists, ..etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(RecordType.DeveloperName, &quot;Global&quot;), PG4_Code__c &amp;&quot; - &quot; &amp; PG4_Desc__c, GlobalSKUMapping__r.PG4_Code__c &amp; &quot; - &quot; &amp; GlobalSKUMapping__r.PG4_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PG4_Description__c?: string;
    /**
     * <h3><b>Pillar Desc</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PillarDesc__c?: string;
    PricebookEntries?: PricebookEntry[];
    /**
     * The reciprocal relationship for {@link SBQQ__PriceRule__c.SBQQ__Product__c}.
     */
    PriceRules__r?: SBQQ__PriceRule__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__PriceSchedule__c.SBQQ__Product__c}.
     */
    PriceSchedules__r?: SBQQ__PriceSchedule__c[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Product?: CaseChangeEvent;
    /**
     * The reciprocal relationship for {@link Asset.Product2Id}.
     */
    Product2?: Asset;
    /**
     * <h3><b>Product Category</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Category__c?: string;
    /**
     * <h3><b>Product Group 2 - Description</b></h3>
     * <p>Shows a concatenation of Product Group 2 and Product Group 2 Description, giving it the same layout as product group 2 on the Sales History object</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PG2_Code__c &amp; &quot; - &quot; &amp;  PG2_Desc__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_2_Description__c?: string;
    /**
     * <h3><b>Product Group OLD</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group__c?: string;
    /**
     * <h3><b>Product Group Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_group_description__c?: string;
    /**
     * <h3><b>Product # (HQ)</b></h3>
     * <p>Power One field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_HQ__c?: number;
    /**
     * <h3><b>Product Line</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Line__c?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__ProductAction__c.SBQQ__Product__c}.
     */
    ProductActions__r?: SBQQ__ProductAction__c[];
    /**
     * The reciprocal relationship for {@link ProductAttributeDefinition.Product2Id}.
     */
    ProductAttributeDefinitions?: ProductAttributeDefinition[];
    /**
     * The reciprocal relationship for {@link ProductCategoryProduct.ProductId}.
     */
    ProductCategoryProducts?: ProductCategoryProduct[];
    ProductCode?: string;
    /**
     * The reciprocal relationship for {@link ProductComponentGroup.ParentProductId}.
     */
    ProductComponentGroups?: ProductComponentGroup[];
    /**
     * The reciprocal relationship for {@link ProductDisqualification.ProductId}.
     */
    ProductDisqualifications?: ProductDisqualification[];
    /**
     * The reciprocal relationship for {@link ProductItem.Product2Id}.
     */
    ProductItems?: ProductItem[];
    /**
     * The reciprocal relationship for {@link ProductQualification.ProductId}.
     */
    ProductQualifications?: ProductQualification[];
    /**
     * The reciprocal relationship for {@link ProductRequestLineItem.Product2Id}.
     */
    ProductRequestLineItems?: ProductRequestLineItem[];
    /**
     * The reciprocal relationship for {@link Product2.GlobalSKUMapping__c}.
     */
    Products__r?: Product2[];
    /**
     * The reciprocal relationship for {@link Consignment_Stock__c.Article__c}.
     */
    Products_in_Consignment_Stock__r?: Consignment_Stock__c[];
    /**
     * The reciprocal relationship for {@link ProductConsumed.Product2Id}.
     */
    ProductsConsumed?: ProductConsumed[];
    ProductSellingModelOptions?: ProductSellingModelOption[];
    /**
     * The reciprocal relationship for {@link ProductServiceCampaignItem.Product2Id}.
     */
    ProductServiceCampaignItems?: ProductServiceCampaignItem[];
    /**
     * The reciprocal relationship for {@link ProductServiceCampaign.Product2Id}.
     */
    ProductServiceCampaignProducts?: ProductServiceCampaign[];
    /**
     * The reciprocal relationship for {@link ProductRequired.Product2Id}.
     */
    ProductsRequired?: ProductRequired[];
    /**
     * <h3><b>Product Structure (HQ)</b></h3>
     * <p>Shows the full product structure of the Product record.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SBU_Code__c &amp; IF( ISBLANK(SBU_Name__c),null, &quot; &quot;) &amp; SBU_Name__c &amp; &quot; - &quot; &amp; GPP_Code__c &amp; IF( ISBLANK(GPP_Desc__c),null, &quot; &quot;) &amp; GPP_Desc__c &amp; &quot; - &quot; &amp; PG1_Code__c &amp; IF( ISBLANK(PG1_Desc__c),null, &quot; &quot;) &amp; PG1_Desc__c &amp; &quot; - &quot; &amp; PG2_Code__c &amp; IF( ISBLANK(PG2_Desc__c),null, &quot; &quot;) &amp; PG2_Desc__c &amp; &quot; - &quot; &amp; PG3_Code__c &amp; IF( ISBLANK(PG3_Desc__c),null, &quot; &quot;)  &amp; PG3_Desc__c &amp; &quot; - &quot; &amp; PG4_Code__c &amp; IF( ISBLANK(PG4_Desc__c),null, &quot; &quot;)  &amp; PG4_Desc__c &amp; &quot; - &quot; &amp; Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductStructure__c?: string;
    /**
     * The reciprocal relationship for {@link ProductTransfer.Product2Id}.
     */
    ProductTransfers?: ProductTransfer[];
    /**
     * The reciprocal relationship for {@link ProductWarrantyTerm.CoveredProductId}.
     */
    ProductWarrantyTermProducts?: ProductWarrantyTerm[];
    QuantityUnitOfMeasure?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__Product__c}.
     */
    R00N70000001lXB6EAM__r?: SBQQ__QuoteLine__c[];
    Record?: ObjectMetadataTag;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RecordType?: RecordType;
    RecordTypeId?: string;
    ReferenceEntityAsyncOperationTrackers?: AsyncOperationTracker[];
    ReferenceEntityRevenueAsyncOperations?: RevenueAsyncOperation[];
    /**
     * The reciprocal relationship for {@link Refined_pricebook_items__c.Product__c}.
     */
    Refined_pricebook_items__r?: Refined_pricebook_items__c[];
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    /**
     * The reciprocal relationship for {@link RequestFormProduct__c.ProductName__c}.
     */
    Request_Form_Products__r?: RequestFormProduct__c[];
    /**
     * The reciprocal relationship for {@link ReturnOrderLineItem.Product2Id}.
     */
    ReturnOrderLineItems?: ReturnOrderLineItem[];
    /**
     * The reciprocal relationship for {@link ProductDisqualification.RootProductId}.
     */
    RootProductDisqualifications?: ProductDisqualification[];
    /**
     * The reciprocal relationship for {@link ProductQualification.RootProductId}.
     */
    RootProductQualifications?: ProductQualification[];
    /**
     * The reciprocal relationship for {@link Sales_Analytics__c.Product__c}.
     */
    Sales_Analytics__r?: Sales_Analytics__c[];
    /**
     * The reciprocal relationship for {@link Sales_History__c.Global_SKU_From_Salesline__c}.
     */
    Sales_History1__r?: Sales_History__c[];
    /**
     * The reciprocal relationship for {@link Sales_History__c.Product__c}.
     */
    Sales_History__r?: Sales_History__c[];
    /**
     * <h3><b>SBU Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBU_Code__c?: string;
    /**
     * <h3><b>SBU - Description</b></h3>
     * <p>This field is a concatenation of SBU + SBU Description. Used to display PG Info on all products regardless of SKU type. Used in WAVE, Search Lists, ..etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(RecordType.DeveloperName, &quot;Global&quot;), SBU_Code__c &amp;&quot; - &quot; &amp; SBU_Name__c, GlobalSKUMapping__r.SBU_Code__c &amp; &quot; - &quot; &amp; GlobalSKUMapping__r.SBU_Name__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBU_Description__c?: string;
    /**
     * <h3><b>SBU Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBU_Name__c?: string;
    /**
     * <h3><b>Segment Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SegmentName__c?: string;
    /**
     * The reciprocal relationship for {@link SerializedProduct.Product2Id}.
     */
    SerializedProducts?: SerializedProduct[];
    /**
     * <h3><b>Servicable Item</b></h3>
     * <p>Requires Installation</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ServicableItem__c?: boolean;
    /**
     * The reciprocal relationship for {@link ServiceContractHistory__c.Product__c}.
     */
    Service_Contract_Histories__r?: ServiceContractHistory__c[];
    /**
     * The reciprocal relationship for {@link ServiceContract.Product__c}.
     */
    Service_Contracts__r?: ServiceContract[];
    /**
     * The reciprocal relationship for {@link ShipmentItem.Product2Id}.
     */
    ShipmentItems?: ShipmentItem[];
    /**
     * <h3><b>SIMPLANT Product Category HQ</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SIMPLANT_Product_Category_HQ__c?: string;
    /**
     * <h3><b>SKU Source</b></h3>
     * <p>1: LocalSKU not mapped to GPC
     * 2: Available in the GPC
     * 3: LocalSKU not mapped to GPC but available in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SKU_Source__c?: number;
    /**
     * <h3><b>SKU Status</b></h3>
     * <p>1: Active
     * 0: Inactive</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(6,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SKU_Status__c?: number;
    /**
     * <h3><b>SKU Key</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    SKUKey__c?: string;
    SobjectLookupValue?: AIInsightValue;
    /**
     * <h3><b>Source System Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceSystemName__c?: string;
    SpecificationType?: string;
    /**
     * <h3><b>SSIS: ERP/SKU - Market Mapping</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SSIS_ERP_SKU_Metadata_Country_Connectio__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SSIS_ERP_SKU_Market_Mapping__c?: string;
    /**
     * <h3><b>SSIS: ERP/SKU - Market Mapping</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SSIS_ERP_SKU_Metadata_Country_Connectio__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SSIS_ERP_SKU_Market_Mapping__r?: SSIS_ERP_SKU_Metadata_Country_Connectio__c;
    /**
     * The reciprocal relationship for {@link SSIS_TrackWise__c.Default_Product__c}.
     */
    SSIS_TrackWise__r?: SSIS_TrackWise__c[];
    StockKeepingUnit?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__Subscription__c.SBQQ__Product__c}.
     */
    Subscriptions__r?: SBQQ__Subscription__c[];
    /**
     * The reciprocal relationship for {@link SubscriptionPlan__c.Product__c}.
     */
    SubscriptionsPlans__r?: SubscriptionPlan__c[];
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    /**
     * <h3><b>Tariff Code</b></h3>
     * <p>tax code on goods coming into or going out of a country</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TariffCode__c?: string;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    /**
     * The reciprocal relationship for {@link ToothCabinetProduct__c.Product__c}.
     */
    Tooth_Cabinet_Products__r?: ToothCabinetProduct__c[];
    Topic?: EngagementTopicChangeEvent;
    /**
     * The reciprocal relationship for {@link TrackWise__c.Article__c}.
     */
    TrackWise__r?: TrackWise__c[];
    TransferRecordMode?: string;
    Type?: string;
    /**
     * <h3><b>Unit of Measurement</b></h3>
     * <p>The unit of Measurement</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Unit_of_Measurement__c?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__UpgradeSource__c.SBQQ__UpgradeProduct__c}.
     */
    UpgradeSources__r?: SBQQ__UpgradeSource__c[];
    /**
     * <h3><b>VAT</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    VAT__c?: number;
    /**
     * <h3><b>Warranty Code</b></h3>
     * <p>The Item Warranty Code from ERP - the code means a specific number fo days/month of warranty. Find details in other Warranty fields on Product</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WarrantyCode__c?: string;
    /**
     * <h3><b>Warranty Days</b></h3>
     * <p>Number of days the warranty is valid. Based on WarrantyCode</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WarrantyDays__c?: number;
    /**
     * <h3><b>Warranty Description</b></h3>
     * <p>Describes in words what the warranty Code means</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WarrantyDescription__c?: string;
    /**
     * <h3><b>Warranty Type</b></h3>
     * <p>Type of warranty - coming from WarrantyCode</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WarrantyType__c?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__WebQuoteLine__c.SBQQ__Product__c}.
     */
    WebQuoteLines__r?: SBQQ__WebQuoteLine__c[];
    What?: EventChangeEvent;
    WorkOrderLineItems?: WorkOrderLineItem[];
    /**
     * The reciprocal relationship for {@link WorkPlanSelectionRule.Product2Id}.
     */
    WorkPlanSelectionRules?: WorkPlanSelectionRule[];
    /**
     * The reciprocal relationship for {@link XSBUProduct__c.Product__c}.
     */
    X_SBU_Products__r?: XSBUProduct__c[];
}