// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Group extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.AssignedToId}.
     */
    AssignedWorkItems?: ApprovalWorkItem[];
    Assignee?: FlowOrchestrationWorkItem;
    BusinessOwner?: FieldDefinition;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DelegatedApprover?: UserChangeEvent;
    DelegatedUsers?: User[];
    Description?: string;
    DeveloperName?: string;
    DoesIncludeBosses?: boolean;
    DoesSendEmailToMembers?: boolean;
    Email?: string;
    FalloutQueue?: FulfillmentFalloutRule;
    FulfillmentSteps?: FulfillmentStep[];
    Group?: OmniSupervisorConfigGroup;
    GroupMembers?: GroupMember[];
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Member?: ContentWorkspaceMember;
    Name?: string;
    OriginalGroup?: AgentWork;
    Owner?: SObject;
    OwnerId?: string;
    QueueRoutingConfig?: QueueRoutingConfig;
    QueueRoutingConfigId?: string;
    QueueSobjects?: QueueSobject[];
    Related?: SObject;
    RelatedId?: string;
    SystemModstamp?: string;
    Type?: string;
    UserOrGroup?: AccountBrandShare;
}