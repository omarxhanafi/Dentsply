// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CollaborationGroupMemberRequest extends SObject 
{
    CollaborationGroup?: CollaborationGroup;
    CollaborationGroupId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RelatedRecord?: FlowRecordRelation;
    Requester?: User;
    RequesterId?: string;
    ResponseMessage?: string;
    Status?: string;
    SystemModstamp?: string;
}