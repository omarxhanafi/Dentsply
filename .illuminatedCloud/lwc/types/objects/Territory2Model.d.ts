// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Territory2Model extends SObject 
{
    ActivatedDate?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DeactivatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    Feeds?: Territory2ModelFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: Territory2ModelHistory[];
    IsCloneSource?: boolean;
    IsDeleted?: boolean;
    IsOppUnassignmentDone?: boolean;
    IsSharingGroupDeleteDone?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastOppTerrAssignEndDate?: string;
    LastRunRulesEndDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    ObjectTerritory2AssignmentRules?: ObjectTerritory2AssignmentRule[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    RelatedRecord?: FlowRecordRelation;
    SobjectLookupValue?: AIInsightValue;
    State?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Territory2Model?: Territory2AlignmentLog;
    /**
     * The reciprocal relationship for {@link Territory2.Territory2ModelId}.
     */
    Territory2s?: Territory2[];
}