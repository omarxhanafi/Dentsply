// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Dashboard extends SObject 
{
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    BackgroundDirection: string;
    BackgroundEnd: number;
    BackgroundStart: number;
    ChartTheme: string;
    ColorPalette: string;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DashboardComponents: DashboardComponent[];
    DashboardResultRefreshedDate: string;
    DashboardResultRunningUser: string;
    Description: string;
    DeveloperName: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: DashboardFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    Folder: SObject;
    FolderId: string;
    FolderName: string;
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
    LeftSize: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    MiddleSize: string;
    NamespacePrefix: string;
    Owner: User;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    RelatedRecord: FlowRecordRelation;
    RightSize: string;
    RunningUser: User;
    RunningUserId: string;
    SystemModstamp: string;
    Tags: DashboardTag[];
    TargetObject: PendingServiceRoutingInteractionInfo;
    TextColor: number;
    Title: string;
    TitleColor: number;
    TitleSize: number;
    Type: string;
}