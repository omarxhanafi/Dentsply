// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordActionHistory extends SObject 
{
    ActionDefinitionApiName?: string;
    ActionDefinitionLabel?: string;
    ActionType?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsMandatory?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LoggedTime?: string;
    ParentRecord?: SObject;
    ParentRecordId?: string;
    Pinned?: string;
    RecordActionId?: string;
    State?: string;
    SystemModstamp?: string;
    User?: SObject;
    UserId?: string;
}