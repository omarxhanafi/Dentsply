// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SiteRedirectMapping extends SObject 
{
    Action?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsActive?: boolean;
    IsDynamic?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Site?: Site;
    SiteId?: string;
    Source?: string;
    SystemModstamp?: string;
    Target?: string;
}