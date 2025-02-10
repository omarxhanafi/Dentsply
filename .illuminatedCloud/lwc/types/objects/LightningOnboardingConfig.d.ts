// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LightningOnboardingConfig extends SObject 
{
    CollaborationGroup: CollaborationGroup;
    CollaborationGroupId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomQuestion: string;
    DeveloperName: string;
    FeedbackFormDaysFrequency: number;
    IsCustom: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    PromptDelayTime: number;
    SendFeedbackToSalesforce: boolean;
    SystemModstamp: string;
}