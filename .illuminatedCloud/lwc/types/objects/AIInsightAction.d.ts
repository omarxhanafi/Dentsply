// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AIInsightAction extends SObject 
{
    Action: SObject;
    ActionId: string;
    ActionName: string;
    AiInsightActions: AIInsightValue[];
    AiRecordInsight: AIRecordInsight;
    AiRecordInsightId: string;
    Confidence: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Feedback: AIInsightFeedback[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Type: string;
}