// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Crew Management User Settings Territory</b></h3>
 */
declare interface FSL__Crew_Management_User_Settings_Territory__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    AttachedTo?: ProcessException;
    Attachments?: Attachment[];
    CombinedAttachments?: CombinedAttachment[];
    ConnectionReceived?: PartnerNetworkConnection;
    ConnectionReceivedId?: string;
    ConnectionSent?: PartnerNetworkConnection;
    ConnectionSentId?: string;
    /**
     * The reciprocal relationship for {@link ContactRequest.WhatId}.
     */
    ContactRequests?: ContactRequest[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link DuplicateRecordItem.RecordId}.
     */
    DuplicateRecordItems?: DuplicateRecordItem[];
    EngagementInitiatedTopic?: EngagementTopic[];
    EventRelations?: EventRelation[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * <h3><b>Crew Management User Settings</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Crew_Management_User_Settings__c})</td></tr>
     * </table>
     */
    FSL__Crew_Management_User_Settings__c?: string;
    /**
     * <h3><b>Crew Management User Settings</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Crew_Management_User_Settings__c})</td></tr>
     * </table>
     */
    FSL__Crew_Management_User_Settings__r?: FSL__Crew_Management_User_Settings__c;
    /**
     * <h3><b>Service Territory</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ServiceTerritory})</td></tr>
     * </table>
     */
    FSL__Service_Territory__c?: string;
    /**
     * <h3><b>Service Territory</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ServiceTerritory})</td></tr>
     * </table>
     */
    FSL__Service_Territory__r?: ServiceTerritory;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LocalRecord?: PartnerNetworkRecordConnection;
    Name?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    Parent?: Case__hd;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PartnerRecord?: PartnerNetworkRecordConnection;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    ProcessExceptions?: ProcessException[];
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RecordAlertParent?: RecordAlert[];
    RecordAlertWhat?: RecordAlert[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RelatedRecord?: ContentDistribution;
    /**
     * The reciprocal relationship for {@link VoiceCall.RelatedRecordId}.
     */
    RelatedRecords?: VoiceCall[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Tags?: Crew_Management_User_Settings_Territory__Tag[];
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Topic?: EngagementTopicChangeEvent;
    TopicAssignments?: TopicAssignment[];
    UserDefinedLabelAssignments?: UserDefinedLabelAssignment[];
    /**
     * The reciprocal relationship for {@link VideoCall.RelatedRecordId}.
     */
    VideoRelatedRecords?: VideoCall[];
    What?: EventChangeEvent;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem?: AgentWork;
}