// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CollaborationInvitation extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    InvitedUserEmail?: string;
    InvitedUserEmailNormalized?: string;
    Inviter?: User;
    InviterId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    OptionalMessage?: string;
    Parent?: CollaborationInvitation;
    ParentId?: string;
    RelatedRecord?: FlowRecordRelation;
    SharedEntity?: SObject;
    SharedEntityId?: string;
    Status?: string;
    SystemModstamp?: string;
}