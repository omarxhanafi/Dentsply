// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SalesforceQuote extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    CreatedDate?: string;
    ExternalId?: string;
    Feeds?: SalesforceQuoteFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    QuoteNumber?: string;
    SalesforceContract?: SalesforceContract;
    SalesforceContractId?: string;
    SalesforceQuoteStatus?: string;
    Uuid?: string;
}