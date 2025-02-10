// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveAgentSessionHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IsDeleted: boolean;
    LiveAgentSession: LiveAgentSession;
    LiveAgentSessionId: string;
    NewValue: any;
    OldValue: any;
}