// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordAlertTemplate extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Localization?: RecordAlertTemplateLocalization[];
    MasterLabel?: string;
    NamespacePrefix?: string;
    RecordAlertCategory?: RecordAlertCategory;
    RecordAlertCategoryId?: string;
    Subject?: string;
    SystemModstamp?: string;
}