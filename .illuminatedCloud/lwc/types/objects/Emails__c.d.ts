// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Email Consent Tracking</b></h3>
 * <p>Used to track Emails for a contact and consent along with it. Required for GDPR and other data privacy and anti-spam regulations.
 * Object populated and updated by the system based on email updates/changes from the contact.</p>
 */
declare interface Emails__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    AttachedTo: ProcessException;
    Attachments: Attachment[];
    CombinedAttachments: CombinedAttachment[];
    ConnectionReceived: PartnerNetworkConnection;
    ConnectionReceivedId: string;
    ConnectionSent: PartnerNetworkConnection;
    ConnectionSentId: string;
    /**
     * <h3><b>Consent Collected by</b></h3>
     * <p>Tracks who collected the consent</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Consent_Collected_by__c: string;
    /**
     * <h3><b>Consent Collection Method</b></h3>
     * <p>Used to track how the consent was collected.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Verbally Phone</code></td><td>Verbally Phone</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Verbally Face-To-Face</code></td><td>Verbally Face-To-Face</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Digitally</code></td><td>Digitally</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hard Copy Signed Form</code></td><td>Hard Copy Signed Form</td><td nowrap>true</td></tr>
     * </table>
     */
    Consent_Collection_Method__c: string;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Contact})</td></tr>
     * </table>
     */
    Contact__c: string;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Contact})</td></tr>
     * </table>
     */
    Contact__r: Contact;
    /**
     * The reciprocal relationship for {@link ContactRequest.WhatId}.
     */
    ContactRequests: ContactRequest[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * <h3><b>Double opt in</b></h3>
     * <p>Used to track where we have a double opt-in in countries that require this.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Double_opt_in__c: boolean;
    /**
     * The reciprocal relationship for {@link DuplicateRecordItem.RecordId}.
     */
    DuplicateRecordItems: DuplicateRecordItem[];
    /**
     * <h3><b>Email</b></h3>
     * <p>The email address</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Email__c: string;
    /**
     * <h3><b>Email Marketing Consent</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Please Select Yes or No</code></td><td>Please Select Yes or No</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td></tr>
     * </table>
     */
    Email_Marketing_Consent__c: string;
    /**
     * <h3><b>Email Marketing Consent Date</b></h3>
     * <p>Tracks when the consent was collected</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Email_Marketing_Consent_Date__c: string;
    /**
     * <h3><b>Email opt out</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Email_opt_out__c: boolean;
    EngagementInitiatedTopic: EngagementTopic[];
    EventRelations: EventRelation[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: Emails__History[];
    /**
     * <h3><b>Inactive</b></h3>
     * <p>Set to True if the email is no longer in use</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Inactive__c: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LocalRecord: PartnerNetworkRecordConnection;
    Name: string;
    NetworkUserHistoryRecentToRecord: NetworkUserHistoryRecent[];
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    Parent: Case__hd;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    PartnerRecord: PartnerNetworkRecordConnection;
    PrimaryRecord: PendingServiceRoutingInteractionInfo;
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    ProcessExceptions: ProcessException[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    Record: CollaborationGroupRecordChangeEvent;
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RecordAlertParent: RecordAlert[];
    RecordAlertWhat: RecordAlert[];
    RecordAssociatedGroups: CollaborationGroupRecord[];
    RelatedRecord: ContentDistribution;
    /**
     * The reciprocal relationship for {@link VoiceCall.RelatedRecordId}.
     */
    RelatedRecords: VoiceCall[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Tags: Emails__Tag[];
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    Topic: EngagementTopicChangeEvent;
    TopicAssignments: TopicAssignment[];
    UserDefinedLabelAssignments: UserDefinedLabelAssignment[];
    /**
     * The reciprocal relationship for {@link VideoCall.RelatedRecordId}.
     */
    VideoRelatedRecords: VideoCall[];
    What: EventChangeEvent;
    /**
     * <h3><b>When collected?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WhenCollected__c: string;
    /**
     * <h3><b>Where collected?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WhereCollected__c: string;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem: AgentWork;
}