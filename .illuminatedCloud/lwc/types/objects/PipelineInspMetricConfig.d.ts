// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PipelineInspMetricConfig extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsCumulative?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Localization?: PipelineInspMetricConfigLocalization[];
    MasterLabel?: string;
    Metric?: string;
    SystemModstamp?: string;
}