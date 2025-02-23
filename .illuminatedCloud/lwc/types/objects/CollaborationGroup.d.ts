// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CollaborationGroup extends SObject 
{
    Announcement?: Announcement;
    AnnouncementId?: string;
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
    BannerPhotoUrl?: string;
    CanHaveGuests?: boolean;
    ChatterGroup?: LightningOnboardingConfig[];
    CollaborationGroup?: CollaborationGroupRecordChangeEvent;
    CollaborationGroupRecords?: CollaborationGroupRecord[];
    CollaborationType?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    Feeds?: CollaborationGroupFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    FullPhotoUrl?: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    GroupEmail?: string;
    GroupMemberRequests?: CollaborationGroupMemberRequest[];
    GroupMembers?: CollaborationGroupMember[];
    HasPrivateFieldsAccess?: boolean;
    InformationBody?: string;
    InformationTitle?: string;
    IsArchived?: boolean;
    IsAutoArchiveDisabled?: boolean;
    LastFeedModifiedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MediumPhotoUrl?: string;
    MemberCount?: number;
    Name?: string;
    Network?: Network;
    NetworkId?: string;
    Owner?: User;
    OwnerId?: string;
    Parent?: Announcement;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    SharedEntity?: CollaborationInvitation;
    SmallPhotoUrl?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}