// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailRelay extends SObject 
{
    AuthType?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Filters?: EmailDomainFilter[];
    Host?: string;
    IsDeleted?: boolean;
    IsRequireAuth?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Password?: string;
    Port?: string;
    SystemModstamp?: string;
    TlsSetting?: string;
    Username?: string;
}