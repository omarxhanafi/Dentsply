// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SalesforceInvoice extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Balance?: number;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    CurrencyIsoCode?: string;
    DueDate?: Date;
    ExternalId?: string;
    Feeds?: SalesforceInvoiceFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    InvoiceCurrency?: string;
    InvoiceDate?: Date;
    InvoiceNumber?: string;
    IsPayableOnline?: boolean;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    SalesforceContract?: SalesforceContract;
    SalesforceContractId?: string;
    SalesforceInvoiceStatus?: string;
    SalesforcePayments?: SalesforcePayment[];
    TotalAmount?: number;
}