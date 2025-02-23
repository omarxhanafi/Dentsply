// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExternalDataUserAuth extends SObject 
{
    AuthProvider?: AuthProvider;
    AuthProviderId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExternalDataSource?: SObject;
    ExternalDataSourceId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Password?: string;
    Protocol?: string;
    SystemModstamp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}