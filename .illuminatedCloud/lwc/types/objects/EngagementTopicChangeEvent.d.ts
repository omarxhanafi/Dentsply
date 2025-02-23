// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EngagementTopicChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Engagement?: SObject;
    EngagementId?: string;
    InteractionSummary?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    ParentTopic?: EngagementTopic;
    ParentTopicId?: string;
    ProcessFailureReason?: string;
    ProcessName?: string;
    ProcessStatus?: string;
    ProcessType?: string;
    RelatedPerson?: SObject;
    RelatedPersonId?: string;
    ReplayId?: string;
    Topic?: SObject;
    TopicId?: string;
}