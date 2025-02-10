// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ManagedContentVariantChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    ContentTypeFullyQualifiedName: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsReady: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ManagedContent: ManagedContent;
    ManagedContentId: string;
    ManagedContentKey: string;
    ManagedContentVariantStatus: string;
    Name: string;
    ReplayId: string;
    UrlName: string;
    VariantType: string;
}