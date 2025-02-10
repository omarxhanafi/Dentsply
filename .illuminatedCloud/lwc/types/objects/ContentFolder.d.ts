// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentFolder extends SObject 
{
    ContentFolderLinks: ContentFolderLink[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FeaturedMedia: ContentAsset;
    FeaturedMediaId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ParentContentFolder: ContentFolder;
    ParentContentFolderId: string;
    RelatedRecord: FlowRecordRelation;
    RootContentFolder: ContentWorkspace;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}