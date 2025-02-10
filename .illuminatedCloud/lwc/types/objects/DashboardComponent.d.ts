// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DashboardComponent extends SObject 
{
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CustomReport: Report;
    CustomReportId: string;
    Dashboard: Dashboard;
    DashboardId: string;
    Feeds: DashboardComponentFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Name: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    RelatedRecord: FlowRecordRelation;
}