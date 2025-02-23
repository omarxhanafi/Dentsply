// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Participant extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ParticipantAppType?: string;
    ParticipantRole?: string;
    ParticipantSubject?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
}