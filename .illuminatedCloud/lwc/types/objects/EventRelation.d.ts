// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventRelation extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Event?: Event;
    EventId?: string;
    IsDeleted?: boolean;
    IsInvitee?: boolean;
    IsParent?: boolean;
    IsWhat?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RelatedRecord?: FlowRecordRelation;
    Relation?: SObject;
    RelationId?: string;
    RespondedDate?: string;
    Response?: string;
    Status?: string;
    SystemModstamp?: string;
}