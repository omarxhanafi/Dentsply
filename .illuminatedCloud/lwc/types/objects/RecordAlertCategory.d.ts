// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordAlertCategory extends SObject 
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
    Localization?: RecordAlertCategoryLocalization[];
    MasterLabel?: string;
    NamespacePrefix?: string;
    RecordAlertCategories?: RecordAlert[];
    RecordAlertCategory?: RecordAlertChangeEvent;
    Severity?: string;
    SystemModstamp?: string;
}