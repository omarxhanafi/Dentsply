// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ActionLinkGroupTemplate extends SObject 
{
    ActionLinkTemplates: ActionLinkTemplate[];
    Category: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    ExecutionsAllowed: string;
    HoursUntilExpiration: number;
    IsDeleted: boolean;
    IsPublished: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    SystemModstamp: string;
}