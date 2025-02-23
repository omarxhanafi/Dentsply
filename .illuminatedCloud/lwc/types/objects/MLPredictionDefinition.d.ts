// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MLPredictionDefinition extends SObject 
{
    AiRecordInsights?: AIRecordInsight[];
    Application?: AIApplication;
    ApplicationId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    PredictionDefinition?: MLModel;
    PredictionField?: string;
    PushbackField?: string;
    Status?: string;
    SystemModstamp?: string;
    Type?: string;
}