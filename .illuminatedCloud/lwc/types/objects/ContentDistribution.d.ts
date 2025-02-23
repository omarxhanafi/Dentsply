// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDistribution extends SObject 
{
    ContentDistributionViews?: ContentDistributionView[];
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContentDownloadUrl?: string;
    ContentVersion?: ContentVersion;
    ContentVersionId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DistributionPublicUrl?: string;
    ExpiryDate?: string;
    FirstViewDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastViewDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    Password?: string;
    PdfDownloadUrl?: string;
    PreferencesAllowOriginalDownload?: boolean;
    PreferencesAllowPDFDownload?: boolean;
    PreferencesAllowViewInBrowser?: boolean;
    PreferencesExpires?: boolean;
    PreferencesLinkLatestVersion?: boolean;
    PreferencesNotifyOnVisit?: boolean;
    PreferencesNotifyRndtnComplete?: boolean;
    PreferencesPasswordRequired?: boolean;
    RelatedRecord?: SObject;
    RelatedRecordId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    ViewCount?: number;
}