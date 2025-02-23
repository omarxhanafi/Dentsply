// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QueueRoutingConfig extends SObject 
{
    CapacityPercentage?: number;
    CapacityWeight?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    DropAdditionalSkillsTimeout?: number;
    IsAttributeBased?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    OverflowAssignee?: SObject;
    OverflowAssigneeId?: string;
    PushTimeout?: number;
    QueueRoutingConfig?: Group;
    RoutingConfiguration?: LiveChatButton;
    RoutingModel?: string;
    RoutingPriority?: number;
    SystemModstamp?: string;
}