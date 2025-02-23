// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExplainabilityMsgTemplate extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    EmtUsageType?: string;
    ExpressionSetStepType?: string;
    IsDefault?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Localization?: ExplainabilityMsgTemplateLocalization[];
    MasterLabel?: string;
    Message?: string;
    NamespacePrefix?: string;
    ResultType?: string;
    SystemModstamp?: string;
}