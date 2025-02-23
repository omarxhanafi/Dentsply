// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Quote extends SObject 
{
    /**
     * <h3><b>Acceptance Date/Time</b></h3>
     * <p>Shows the DateTime when the quote was accepted by the customer</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Acceptance_Date_Time__c?: string;
    Account?: Account;
    AccountId?: string;
    ActivityHistories?: ActivityHistory[];
    AdditionalAddress?: Address;
    AdditionalCity?: string;
    AdditionalCountry?: string;
    AdditionalGeocodeAccuracy?: string;
    AdditionalLatitude?: number;
    AdditionalLongitude?: number;
    AdditionalName?: string;
    AdditionalPostalCode?: string;
    AdditionalState?: string;
    AdditionalStreet?: string;
    Agreements__r?: echosign_dev1__SIGN_Agreement__c[];
    /**
     * <h3><b>Approval Status</b></h3>
     * <p>Shows the approval status of the Quote</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Submitted</code></td><td>Submitted</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Recalled</code></td><td>Recalled</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Auto Approved</code></td><td>Auto Approved</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Approved</code></td><td>Approved</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rejected</code></td><td>Rejected</td><td nowrap>true</td></tr>
     * </table>
     */
    Approval_Status__c?: string;
    /**
     * <h3><b>Approval Submission DateTime</b></h3>
     * <p>Shows the DateTime when the Quote was submitted for approval.
     * Can also be used along with the Last Approval action DateTime to see time from submission to approval/rejecion.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Approval_Submission_DateTime__c?: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AppUsageAssignments?: AppUsageAssignment[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    BillingAddress?: Address;
    /**
     * <h3><b>Billing Address</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Address__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BillingAddress__c?: string;
    /**
     * <h3><b>Billing Address</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Address__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    BillingAddress__r?: Address__c;
    BillingCity?: string;
    BillingCountry?: string;
    BillingGeocodeAccuracy?: string;
    BillingLatitude?: number;
    BillingLongitude?: number;
    BillingName?: string;
    BillingPostalCode?: string;
    BillingState?: string;
    BillingStreet?: string;
    BillToContact?: Contact;
    BillToContactId?: string;
    /**
     * <h3><b>Brand</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE($User.User_Country__c, &quot;Turkey&quot;,&quot;Teklif edilen cihazlar Sirona markadır.&quot;, &quot;&quot;)</code></td></tr>
     * </table>
     */
    Brand__c?: string;
    CalculationStatus?: string;
    CanCreateQuoteLineItems?: boolean;
    CombinedAttachments?: CombinedAttachment[];
    Contact?: Contact;
    ContactId?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    Contract?: Contract;
    ContractId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>Customer Signed Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CustomerSignedDate__c?: Date;
    /**
     * <h3><b>Customer Signed By</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CustomerSignedId__c?: string;
    /**
     * <h3><b>Customer Signed By</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CustomerSignedId__r?: Contact;
    /**
     * <h3><b>Delivery</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Siparişiniz hemen teslim edilecektir.</code></td><td>Siparişiniz hemen teslim edilecektir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 1 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 1 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 2 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 2 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 3 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 3 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 4 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 4 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 5 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 5 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 6 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 6 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 7 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 7 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 8 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 8 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 9 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 9 haftadır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 10 haftadır.</code></td><td>Teslim süresi işbu sözleşme koşullarına göre siparişin netleştirilmesine istinaden 10 haftadır.</td><td nowrap>true</td></tr>
     * </table>
     */
    Delivery__c?: string;
    Description?: string;
    DigitalSignatures?: DigitalSignature[];
    Discount?: number;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    Email?: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EngagementInitiatedTopic?: EngagementTopic[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    /**
     * <h3><b>Exchange Rate</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE($User.User_Country__c, &quot;Turkey&quot;,&quot;EUR karşılığı TL Tahsilat için ödeme tarihindeki TCMB Günlük Döviz Satış Kuru Kullanılacaktır.&quot;, &quot;&quot;)</code></td></tr>
     * </table>
     */
    ExchangeRate__c?: string;
    ExpirationDate?: Date;
    Fax?: string;
    Feeds?: QuoteFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    /**
     * <h3><b>Grand List Total</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.QuoteId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.TotalListPrice__c</code></td></tr>
     * </table>
     */
    GrandListTotal__c?: number;
    GrandTotal?: number;
    /**
     * <h3><b>Grand Total Deduction</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(GrandListTotal__c - TotalPrice) / GrandListTotal__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GrandTotalDeduction__c?: number;
    /**
     * <h3><b>Grand Total w/ VAT</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.QuoteId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.TotalPriceVAT__c</code></td></tr>
     * </table>
     */
    GrandTotalwVAT__c?: number;
    /**
     * <h3><b>Grand Unit Total</b></h3>
     * <p>Total of Quantity * UnitPrice. Calculated Total amount without discount.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.QuoteId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.TotalUnitPrice__c</code></td></tr>
     * </table>
     */
    GrandUnitTotal__c?: number;
    Histories?: QuoteHistory[];
    IsDeleted?: boolean;
    IsSyncing?: boolean;
    /**
     * <h3><b>Last Approval Action DateTime</b></h3>
     * <p>Shows the DateTime for the last Approval Action</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Last_Approval_Action_DateTime__c?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastPricedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    /**
     * <h3><b>Leasing Account</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LeasingAccount__c?: string;
    /**
     * <h3><b>Leasing Account</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LeasingAccount__r?: Account;
    LegalEntity?: LegalEntity;
    LegalEntityId?: string;
    LineItemCount?: number;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    /**
     * <h3><b>Manager</b></h3>
     * <p>Sets the manager of the Owner - used for Approval Processes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Manager__c?: string;
    /**
     * <h3><b>Manager</b></h3>
     * <p>Sets the manager of the Owner - used for Approval Processes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Manager__r?: User;
    /**
     * <h3><b>Model Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE($User.User_Country__c, &quot;Turkey&quot;,&quot;Cihazlarımız &quot;+TEXT(YEAR(TODAY()))+&quot; model, yeni ve kullanılmamıştır.&quot;, &quot;&quot;)</code></td></tr>
     * </table>
     */
    ModelStatus__c?: string;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Opportunity?: Opportunity;
    OpportunityId?: string;
    Orders?: Order[];
    /**
     * <h3><b>Origin</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE($User.User_Country__c, &quot;Turkey&quot;,&quot;Cihazlarımız Alman menşeidir.&quot;, &quot;&quot;)</code></td></tr>
     * </table>
     */
    Origin__c?: string;
    OriginalActionType?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: DigitalSignatureChangeEvent;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PartnerAccount?: Account;
    PartnerAccountId?: string;
    /**
     * <h3><b>Payment Terms</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Toplam tutarın %30'u sipariş öncesinde, kalan miktar teslimattan en geç 1 hafta öncesinde tahsil edilir.</code></td><td>Toplam tutarın %30&#39;u sipariş öncesinde, kalan miktar teslimattan en geç 1 hafta öncesinde tahsil edilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Toplam tutarın %15'i sipariş öncesinde, kalan miktar teslimattan en geç 1 hafta öncesinde tahsil edilir.</code></td><td>Toplam tutarın %15&#39;i sipariş öncesinde, kalan miktar teslimattan en geç 1 hafta öncesinde tahsil edilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ödeme peşin olarak gerçekleştirilir.</code></td><td>Ödeme peşin olarak gerçekleştirilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ödeme leasing yoluyla fatura karşılığı peşin yada banka havalesi ile gerçekleştirilir.</code></td><td>Ödeme leasing yoluyla fatura karşılığı peşin yada banka havalesi ile gerçekleştirilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ödeme cihaz teslimatından sonra Peşin olarak gerçekleştirilir.</code></td><td>Ödeme cihaz teslimatından sonra Peşin olarak gerçekleştirilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ödeme fatura karşılığı mal tesliminde gerçekleştirilir.</code></td><td>Ödeme fatura karşılığı mal tesliminde gerçekleştirilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Toplam tutarın %40'i sipariş öncesinde, kalan miktar teslimattan en geç 1 hafta öncesinde tahsil edilir.</code></td><td>Toplam tutarın %40&#39;i sipariş öncesinde, kalan miktar teslimattan en geç 1 hafta öncesinde tahsil edilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Toplam tutarın %60'ı sipariş öncesinde, kalan miktar ürün K.K.T.C. gümrüğüne girdiğinde tahsil edilir.</code></td><td>Toplam tutarın %60&#39;ı sipariş öncesinde, kalan miktar ürün K.K.T.C. gümrüğüne girdiğinde tahsil edilir.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ödeme leasing yoluyla mal teslimatı sonrasında fatura karşılığı banka havalesi ile gerçekleştirilir.</code></td><td>Ödeme leasing yoluyla mal teslimatı sonrasında fatura karşılığı banka havalesi ile gerçekleştirilir.</td><td nowrap>true</td></tr>
     * </table>
     */
    PaymentTerms__c?: string;
    /**
     * <h3><b>PDF Bulter Locale</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( SelectQuoteTemplate__c , &quot;Fiyat Teklifi&quot;, &quot;tr_TR&quot;, &quot;Fiyat Teklifi no VAT&quot;, &quot;tr_TR&quot;, &quot;Fiyat Teklifi Short&quot;, &quot;tr_TR&quot;, &quot;Proforma Kurumsal&quot;, &quot;tr_TR&quot;, &quot;Proforma Kurumsal no VAT&quot;, &quot;tr_TR&quot;, &quot;Quote Template: Austria&quot;, &quot;de_AT&quot;, &quot;Quote Template: Belgium (FR)&quot;, &quot;fr_BE&quot;, &quot;Quote Template: Belgium (NL)&quot;, &quot;nl_BE&quot;, &quot;Quote Template: Canarias Equipment Proforma&quot;, &quot;es_IC&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: Canarias Other Products Proforma&quot;, &quot;es_IC&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: Ceuta Melilla Andorra Equipment Proforma&quot;, &quot;ca_AD&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: Ceuta Melilla Andorra Other Products Proforma&quot;, &quot;ca_AD&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: España Equipment Proforma&quot;, &quot;es_ES&quot;, &quot;Quote Template: Espana Other Products Proforma&quot;, &quot;es_ES&quot;, &quot;Quote Template: France&quot;, &quot;fr_FR&quot;, &quot;Quote Template: Germany&quot;, &quot;de_DE&quot;, &quot;Quote Template: Luxembourg&quot;, &quot;fr_LU&quot;, &quot;Quote Template: Netherlands&quot;, &quot;nl_NL&quot;, &quot;Quote Template: Portugal Equipment Proforma 155&quot;, &quot;pt_PT&quot;, &quot;Quote Template: Portugal Equipment Proforma 550&quot;, &quot;pt_PT&quot;, &quot;Quote Template: Portugal Other Products Proforma 155&quot;, &quot;pt_PT&quot;, &quot;Quote Template: Portugal Other Products Proforma 550&quot;, &quot;pt_PT&quot;, &quot;Quote Template: Switzerland (DE)&quot;, &quot;de_CH&quot;, &quot;Quote Template: Switzerland (FR)&quot;, &quot;fr_CH&quot;, &quot;Quote Template: Switzerland (IT)&quot;, &quot;it_CH&quot;, &quot;Quote Template: UK&quot;, &quot;en_GB&quot;, TEXT($User.LanguageLocaleKey))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PDFBulterLocale__c?: string;
    /**
     * <h3><b>PDF Bulter Template</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( SelectQuoteTemplate__c , &quot;Fiyat Teklifi no VAT&quot;, &quot;TurkeyPrice&quot;, &quot;Fiyat Teklifi Short&quot;, &quot;TurkeyPrice&quot;, &quot;Fiyat Teklifi&quot;, &quot;TurkeyPrice&quot;, &quot;Proforma Kurumsal no VAT&quot;, &quot;TurkeyProforma&quot;, &quot;Proforma Kurumsal&quot;, &quot;TurkeyProforma&quot;, &quot;Quote Template: Austria&quot;, &quot;Austria&quot;, &quot;Quote Template: Belgium (FR)&quot;, &quot;Belgium_FR&quot;, &quot;Quote Template: Belgium (NL)&quot;, &quot;Belgium_NL&quot;, &quot;Quote Template: Canarias Equipment Proforma&quot;, &quot;SpainProforma2&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: Canarias Other Products Proforma&quot;, &quot;sp2&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: Ceuta Melilla Andorra Equipment Proforma&quot;, &quot;SpainProforma3&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: Ceuta Melilla Andorra Other Products Proforma&quot;, &quot;sp3&quot;, &#47;&#42;Spanish Region&#42;&#47; &quot;Quote Template: España Equipment Proforma&quot;, &quot;SpainProforma&quot;, &quot;Quote Template: Espana Other Products Proforma&quot;, &quot;sp1&quot;, &quot;Quote Template: France&quot;, &quot;France&quot;, &quot;Quote Template: Germany&quot;, &quot;Germany&quot;, &quot;Quote Template: Luxembourg&quot;, &quot;Luxembourg&quot;, &quot;Quote Template: Netherlands&quot;, &quot;Netherlands&quot;, &quot;Quote Template: Portugal Equipment Proforma 155&quot;, &quot;PortugalProforma2&quot;, &quot;Quote Template: Portugal Equipment Proforma 550&quot;, &quot;PortugalProforma&quot;, &quot;Quote Template: Portugal Other Products Proforma 155&quot;, &quot;pt1&quot;, &quot;Quote Template: Portugal Other Products Proforma 550&quot;, &quot;pt2&quot;, &quot;Quote Template: Switzerland (DE)&quot;, &quot;Switzerland_DE&quot;, &quot;Quote Template: Switzerland (FR)&quot;, &quot;Switzerland_FR&quot;, &quot;Quote Template: Switzerland (IT)&quot;, &quot;Switzerland_IT&quot;, &quot;Quote Template: UK&quot;, &quot;UK&quot;, &quot;Global&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PDFBulterTemplate__c?: string;
    Phone?: string;
    /**
     * <h3><b>Planned Financing</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dealer financing</code></td><td>Dealer financing</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Customer financing</code></td><td>Customer financing</td><td nowrap>true</td></tr>
     * </table>
     */
    PlannedFinancing__c?: string;
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    PrimaryRecord?: QuoteToOrderErrDtlEvent;
    PrimaryRevenueTransactionErrorLogs?: RevenueTransactionErrorLog[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Quote?: OrderChangeEvent;
    /**
     * The reciprocal relationship for {@link QuoteProductBundle__c.Quote__c}.
     */
    Quote_Product_Bundles__r?: QuoteProductBundle__c[];
    QuoteActions?: QuoteAction[];
    /**
     * <h3><b>Quote Date</b></h3>
     * <p>The date of the quote that is used in PDF Butler and can be considered as the start date of the quote from customer perspective. &quot;Last_Approval_Action_DateTime__c&quot; and &quot;CreatedDate&quot; if not.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(Last_Approval_Action_DateTime__c),  DATEVALUE(CreatedDate), DATEVALUE(Last_Approval_Action_DateTime__c))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    QuoteDate__c?: Date;
    QuoteDocuments?: QuoteDocument[];
    QuoteLineGroups?: QuoteLineGroup[];
    QuoteLineItemRecipients?: QuoteLineItemRecipient[];
    QuoteLineItems?: QuoteLineItem[];
    QuoteLineRelationships?: QuoteLineRelationship[];
    /**
     * <h3><b>Quote Lines Discount Changed</b></h3>
     * <p>Shows the number of Quote Line Items rows where the final price has been changed ( Sales Price or Discount has been modified by user) - either Increased or Decreased.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.QuoteId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.ExtraAppliedDiscount__c NOT_EQUAL 0</code><br/>
     * </td></tr>
     * </table>
     */
    QuoteLinesDiscountChanged__c?: number;
    QuoteNumber?: string;
    QuoteToAddress?: Address;
    QuoteToCity?: string;
    QuoteToCountry?: string;
    QuoteToGeocodeAccuracy?: string;
    QuoteToLatitude?: number;
    QuoteToLongitude?: number;
    QuoteToName?: string;
    QuoteToPostalCode?: string;
    QuoteToState?: string;
    QuoteToStreet?: string;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RecordType?: RecordType;
    RecordTypeId?: string;
    ReferenceEntityAsyncOperationTrackers?: AsyncOperationTracker[];
    ReferenceEntityRevenueAsyncOperations?: RevenueAsyncOperation[];
    ReferenceObject?: SalesTransactionFulfillReq;
    RelatedRecord?: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    RelatedWork?: WorkOrder;
    RelatedWorkId?: string;
    Relation?: EventRelationChangeEvent;
    /**
     * <h3><b>Select Quote Template</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Fiyat Teklifi</code></td><td>Fiyat Teklifi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Fiyat Teklifi no VAT</code></td><td>Fiyat Teklifi no VAT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Fiyat Teklifi Short</code></td><td>Fiyat Teklifi Short</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Proforma Kurumsal</code></td><td>Proforma Kurumsal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Proforma Kurumsal no VAT</code></td><td>Proforma Kurumsal no VAT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Andorra</code></td><td>Quote Template: Andorra</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Austria</code></td><td>Quote Template: Austria</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Belgium</code></td><td>Quote Template: Belgium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Belgium (Dutch)</code></td><td>Quote Template: Belgium (Dutch)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Belgium (FR)</code></td><td>Quote Template: Belgium (FR)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Belgium (French)</code></td><td>Quote Template: Belgium (French)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Belgium (NL)</code></td><td>Quote Template: Belgium (NL)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Canarias Equipment Proforma</code></td><td>Quote Template: Canarias Equipment Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Canarias Other Products Proforma</code></td><td>Quote Template: Canarias Other Products Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Canarias Proforma</code></td><td>Quote Template: Canarias Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Ceuta Melilla Andorra Equipment Proforma</code></td><td>Quote Template: Ceuta Melilla Andorra Equipment Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Ceuta Melilla Andorra Other Products Proforma</code></td><td>Quote Template: Ceuta Melilla Andorra Other Products Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Ceuta Melilla Andorra Proforma</code></td><td>Quote Template: Ceuta Melilla Andorra Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: España</code></td><td>Quote Template: España</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: España DSO</code></td><td>Quote Template: España DSO</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: España Equipment Proforma</code></td><td>Quote Template: España Equipment Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Espana Other Products Proforma</code></td><td>Quote Template: Espana Other Products Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: España PrimeSolution</code></td><td>Quote Template: España PrimeSolution</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: España Proforma</code></td><td>Quote Template: España Proforma</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: France</code></td><td>Quote Template: France</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Germany</code></td><td>Quote Template: Germany</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Luxembourg</code></td><td>Quote Template: Luxembourg</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Netherlands</code></td><td>Quote Template: Netherlands</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Netherlands/Luxembourg</code></td><td>Quote Template: Netherlands/Luxembourg</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal</code></td><td>Quote Template: Portugal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal DSO</code></td><td>Quote Template: Portugal DSO</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal Equipment Proforma 155</code></td><td>Quote Template: Portugal Equipment Proforma 155</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal Equipment Proforma 550</code></td><td>Quote Template: Portugal Equipment Proforma 550</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal Other Products Proforma 155</code></td><td>Quote Template: Portugal Other Products Proforma 155</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal Other Products Proforma 550</code></td><td>Quote Template: Portugal Other Products Proforma 550</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal Proforma 155</code></td><td>Quote Template: Portugal Proforma 155</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Portugal Proforma 550</code></td><td>Quote Template: Portugal Proforma 550</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Switzerland (DE)</code></td><td>Quote Template: Switzerland (DE)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Switzerland (FR)</code></td><td>Quote Template: Switzerland (FR)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: Switzerland (IT)</code></td><td>Quote Template: Switzerland (IT)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quote Template: UK</code></td><td>Quote Template: UK</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">sözleşme</code></td><td>sözleşme</td><td nowrap>true</td></tr>
     * </table>
     */
    SelectQuoteTemplate__c?: string;
    Shares?: QuoteShare[];
    ShippingAddress?: Address;
    /**
     * <h3><b>Shipping Address</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Address__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShippingAddress__c?: string;
    /**
     * <h3><b>Shipping Address</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Address__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShippingAddress__r?: Address__c;
    ShippingCity?: string;
    ShippingCountry?: string;
    ShippingGeocodeAccuracy?: string;
    ShippingHandling?: number;
    ShippingLatitude?: number;
    ShippingLongitude?: number;
    ShippingName?: string;
    ShippingPostalCode?: string;
    ShippingState?: string;
    ShippingStreet?: string;
    SobjectLookupValue?: AIInsightValue;
    /**
     * <h3><b>Source Record</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Source_Record__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceRecord__c?: string;
    /**
     * <h3><b>Source Record</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Source_Record__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceRecord__r?: Source_Record__c;
    StartDate?: Date;
    Status?: string;
    Subtotal?: number;
    /**
     * The reciprocal relationship for {@link Opportunity.SyncedQuoteId}.
     */
    SyncedQuote?: Opportunity;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    Tax?: number;
    Topic?: EngagementTopicChangeEvent;
    TotalPrice?: number;
    /**
     * <h3><b>Total VAT Amount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.QuoteId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QuoteLineItem.VATAmount__c</code></td></tr>
     * </table>
     */
    TotalVATAmount__c?: number;
    /**
     * <h3><b>User Country</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE($User.User_Country__c, &quot;Australia&quot;,&quot;Australia&quot;, &quot;Austria&quot;,&quot;Austria&quot;, &quot;Belarus&quot;,&quot;Belarus&quot;, &quot;Belgium&quot;,&quot;Belgium&quot;, &quot;Brazil&quot;,&quot;Brazil&quot;, &quot;Canada&quot;, &quot;Canada&quot;, &quot;China&quot;,&quot;China&quot;, &quot;Denmark&quot;,&quot;Denmark&quot;, &quot;Finland&quot;,&quot;Finland&quot;, &quot;France&quot;,&quot;France&quot;, &quot;Germany&quot;,&quot;Germany&quot;, &quot;Holland&quot;,&quot;Holland&quot;, &quot;Hong Kong&quot;,&quot;Hong Kong&quot;, &quot;India&quot;,&quot;India&quot;, &quot;Indonesia&quot;,&quot;Indonesia&quot;, &quot;Italy&quot;,&quot;Italy&quot;, &quot;Kuwait&quot;,&quot;Kuwait&quot;, &quot;Egypt &quot;,&quot;Egypt &quot;, &quot;Jordan&quot;,&quot;Jordan&quot;, &quot;Algeria&quot;,&quot;Algeria&quot;, &quot;Tunisia&quot;,&quot;Tunisia&quot;, &quot;Cameroun&quot;,&quot;Cameroun&quot;, &quot;Senegal &quot;,&quot;Senegal &quot;, &quot;Oman&quot;,&quot;Oman&quot;, &quot;Iran&quot;,&quot;Iran&quot;, &quot;Iraq&quot;,&quot; Iraq&quot;, &quot;Libya&quot;,&quot;Libya&quot;, &quot;Yemen&quot;,&quot;Yemen&quot;, &quot;Bahrain&quot;,&quot;Bahrain&quot;, &quot;Mauritius&quot;,&quot;Mauritius&quot;, &quot;Maldives&quot;,&quot;Maldives&quot;, &quot;Japan&quot;,&quot;Japan&quot;, &quot;Kazakhstan&quot;,&quot;Kazakhstan&quot;, &quot;Lebanon&quot;,&quot;Lebanon&quot;, &quot;Luxembourg&quot;,&quot;Luxembourg&quot;, &quot;Malaysia&quot;,&quot;Malaysia&quot;, &quot;Morocco&quot;,&quot;Morocco&quot;, &quot;New Zealand&quot;,&quot;New Zealand&quot;, &quot;Norway&quot;,&quot;Norway&quot;, &quot;Philippines&quot;,&quot;Philippines&quot;, &quot;Portugal&quot;,&quot;Portugal&quot;, &quot;Poland&quot;,&quot;Poland&quot;, &quot;Russia&quot;,&quot;Russia&quot;, &quot;Saudi Arabia&quot;,&quot;Saudi Arabia&quot;, &quot;Singapore&quot;,&quot;Singapore&quot;, &quot;Slovakia&quot;,&quot;Slovakia&quot;, &quot;South Africa&quot;,&quot;South Africa&quot;, &quot;South Korea&quot;,&quot;South Korea&quot;, &quot;Spain&quot;,&quot;Spain&quot;, &quot;Sweden&quot;,&quot;Sweden&quot;, &quot;Switzerland&quot;,&quot;Switzerland&quot;, &quot;Taiwan&quot;,&quot;Taiwan&quot;, &quot;Thailand&quot;,&quot;Thailand&quot;, &quot;Turkey&quot;,&quot;Turkey&quot;, &quot;United Arab Emirates&quot;,&quot;United Arab Emirates&quot;, &quot;UK&quot;, &quot;UK&quot;, &quot;Ukraine&quot;, &quot;Ukraine&quot;, &quot;USA&quot;,&quot;USA&quot;, &quot;Vietnam&quot;,&quot;Vietnam&quot;, &quot;HQ: SE&quot;)</code></td></tr>
     * </table>
     */
    UserCountry__c?: string;
    ValidationResult?: string;
    /**
     * <h3><b>Warranty Period</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ürünlerimizin garanti süresi 1 yıldır.</code></td><td>Ürünlerimizin garanti süresi 1 yıldır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ürünlerimizin garanti süresi 2 yıldır.</code></td><td>Ürünlerimizin garanti süresi 2 yıldır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ürünlerimizin garanti süresi 3 yıldır.</code></td><td>Ürünlerimizin garanti süresi 3 yıldır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ürünlerimizin garanti süresi 4 yıldır.</code></td><td>Ürünlerimizin garanti süresi 4 yıldır.</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ürünlerimizin garanti süresi 5 yıldır.</code></td><td>Ürünlerimizin garanti süresi 5 yıldır.</td><td nowrap>true</td></tr>
     * </table>
     */
    WarrantyPeriod__c?: string;
    What?: EventChangeEvent;
    /**
     * <h3><b>2nd level Manager</b></h3>
     * <p>Sets the second level manager (Managers Manager) - used for Approval processes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    X2nd_level_Manager__c?: string;
    /**
     * <h3><b>2nd level Manager</b></h3>
     * <p>Sets the second level manager (Managers Manager) - used for Approval processes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    X2nd_level_Manager__r?: User;
}