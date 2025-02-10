// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentAsset extends SObject 
{
    AssetSource: CustomBrandAsset;
    ContentAsset: ContentDocument;
    ContentDocument: ContentDocument;
    ContentDocumentId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    FeaturedMedia: ContentFolder;
    Icon: ChatterExtension;
    Image: PromptVersion;
    IsDeleted: boolean;
    IsVisibleByExternalUsers: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    /**
     * The reciprocal relationship for {@link AccountBrand.LogoId}.
     */
    Logo: AccountBrand;
    MasterLabel: string;
    NamespacePrefix: string;
    SystemModstamp: string;
    WorkspaceImage: ContentWorkspace;
}