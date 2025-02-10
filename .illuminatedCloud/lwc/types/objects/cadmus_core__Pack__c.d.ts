// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>PDF Butler Pack</b></h3>
 */
declare interface cadmus_core__Pack__c extends SObject 
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
    cadmus_core__Actionables__r: Actionable__c[];
    /**
     * <h3><b>Active</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    cadmus_core__Active__c: boolean;
    /**
     * <h3><b>Customer Pack Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISBLANK(cadmus_core__Migrated_Customer_Pack_Id__c ) ,IF( ISBLANK(cadmus_core__Migrated_Customer_Pack_Id_2__c ) , $Organization.Id + &#39;_&#39; + Id , cadmus_core__Migrated_Customer_Pack_Id_2__c ) , cadmus_core__Migrated_Customer_Pack_Id__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    cadmus_core__Customer_Pack_Id__c: string;
    /**
     * <h3><b>Leading Doc Config</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link cadmus_core__Doc_Config__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Leading_Doc_Config__c: string;
    /**
     * <h3><b>Leading Doc Config</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link cadmus_core__Doc_Config__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Leading_Doc_Config__r: cadmus_core__Doc_Config__c;
    /**
     * <h3><b>Migrated Customer Pack Id 2</b></h3>
     * <p>If you migrate a pack from another Org or a Sandbox, use this field to copy the Pack Id from that other Org/Sandbox</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-sensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Migrated_Customer_Pack_Id_2__c: string;
    /**
     * <h3><b>Migrated Customer Pack Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    cadmus_core__Migrated_Customer_Pack_Id__c: string;
    cadmus_core__Pack_DocConfigs__r: Pack_DocConfig__c[];
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
    EngagementInitiatedTopic: EngagementTopic[];
    EventRelations: EventRelation[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LocalRecord: PartnerNetworkRecordConnection;
    Name: string;
    NetworkUserHistoryRecentToRecord: NetworkUserHistoryRecent[];
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    Owner: SObject;
    OwnerId: string;
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
    Shares: Pack__Share[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Tags: Pack__Tag[];
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
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem: AgentWork;
}