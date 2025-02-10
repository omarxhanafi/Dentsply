// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PartnerMarketingBudget extends SObject 
{
    ActivityHistories: ActivityHistory[];
    Amount: number;
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
    Attachments: Attachment[];
    ChannelPartner: Account;
    ChannelPartnerId: string;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    EndDate: Date;
    EventRelations: EventRelation[];
    Events: Event[];
    Feeds: PartnerMarketingBudgetFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    Histories: PartnerMarketingBudgetHistory[];
    IsDeleted: boolean;
    IsIgnoreValidation: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    OpenActivities: OpenActivity[];
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    /**
     * The reciprocal relationship for {@link PartnerFundAllocation.BudgetId}.
     */
    PartnerFundAllocations: PartnerFundAllocation[];
    /**
     * The reciprocal relationship for {@link PartnerFundClaim.BudgetId}.
     */
    PartnerFundClaims: PartnerFundClaim[];
    /**
     * The reciprocal relationship for {@link PartnerFundRequest.BudgetId}.
     */
    PartnerFundRequests: PartnerFundRequest[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    Shares: PartnerMarketingBudgetShare[];
    SobjectLookupValue: AIInsightValue;
    StartDate: Date;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    Title: string;
    TopicAssignments: TopicAssignment[];
    TotalAllocatedAmount: number;
    TotalApprovedFcs: number;
    TotalApprovedFrs: number;
    TotalReimbursedFcs: number;
    Type: string;
    What: EventChangeEvent;
}