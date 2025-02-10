// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AIApplication extends SObject 
{
    AiApplications: AIRecordInsight[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    MlPredictionDefinitions: MLPredictionDefinition[];
    MlRecommendationDefinitions: MLRecommendationDefinition[];
    NamespacePrefix: string;
    Status: string;
    SystemModstamp: string;
    Type: string;
}