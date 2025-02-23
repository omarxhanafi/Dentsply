// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ChatterExtension extends SObject 
{
    ChatterExtension?: ChatterExtensionConfig;
    CompositionComponentEnumOrId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    ExtensionName?: string;
    HeaderText?: string;
    HoverText?: string;
    Icon?: ContentAsset;
    IconId?: string;
    IsDeleted?: boolean;
    IsProtected?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Localization?: ChatterExtensionLocalization[];
    MasterLabel?: string;
    NamespacePrefix?: string;
    RenderComponentEnumOrId?: string;
    SystemModstamp?: string;
    Type?: string;
}