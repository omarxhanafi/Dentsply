// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Internal Participant</b></h3>
 * <p>TFUS-000004621
 * Object used to track Campaign Member Participants that are employees (Users)</p>
 */
declare interface InternalParticipant__c extends SObject 
{
    ActivityHistories: ActivityHistory[];
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
    /**
     * <h3><b>Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Campaign})</td></tr>
     * </table>
     */
    Campaign__c: string;
    /**
     * <h3><b>Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Campaign})</td></tr>
     * </table>
     */
    Campaign__r: Campaign;
    CombinedAttachments: CombinedAttachment[];
    ConnectionReceived: PartnerNetworkConnection;
    ConnectionReceivedId: string;
    ConnectionSent: PartnerNetworkConnection;
    ConnectionSentId: string;
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
     * The reciprocal relationship for {@link DuplicateRecordItem.RecordId}.
     */
    DuplicateRecordItems: DuplicateRecordItem[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    /**
     * <h3><b>Employee</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Employee__c: string;
    /**
     * <h3><b>Employee</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Employee__r: User;
    EngagementInitiatedTopic: EngagementTopic[];
    EventRelations: EventRelation[];
    Events: Event[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: InternalParticipant__History[];
    IsDeleted: boolean;
    LastActivityDate: Date;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LocalRecord: PartnerNetworkRecordConnection;
    Name: string;
    NetworkUserHistoryRecentToRecord: NetworkUserHistoryRecent[];
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
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
    /**
     * <h3><b>Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Invited</code></td><td>Invited</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Attended</code></td><td>Attended</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Declined</code></td><td>Declined</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    Status__c: string;
    SystemModstamp: string;
    Tags: InternalParticipant__Tag[];
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    Topic: EngagementTopicChangeEvent;
    TopicAssignments: TopicAssignment[];
    UserDefinedLabelAssignments: UserDefinedLabelAssignment[];
    /**
     * The reciprocal relationship for {@link VideoCall.RelatedRecordId}.
     */
    VideoRelatedRecords: VideoCall[];
    What: EventChangeEvent;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem: AgentWork;
}