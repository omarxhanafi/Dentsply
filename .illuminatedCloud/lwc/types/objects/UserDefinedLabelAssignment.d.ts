// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserDefinedLabelAssignment extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EntityType?: string;
    IsDeleted?: boolean;
    Item?: SObject;
    ItemId?: string;
    Label?: UserDefinedLabel;
    LabelId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: SObject;
    OwnerId?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: UserDefinedLabelAssignmentShare[];
    SortOrder?: number;
    SubjectOrName?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}