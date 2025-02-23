// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ManagedContentChangeEvent extends SObject 
{
    ApiName?: string;
    AuthoredManagedContentSpace?: ManagedContentSpace;
    AuthoredManagedContentSpaceId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ContentKey?: string;
    ContentTypeFullyQualifiedName?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    ExternalId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    PrimaryLanguage?: string;
    ReplayId?: string;
}