// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PushTopic extends SObject 
{
    ApiVersion: number;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    IsActive: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    NotifyForFields: string;
    NotifyForOperationCreate: boolean;
    NotifyForOperationDelete: boolean;
    NotifyForOperations: string;
    NotifyForOperationUndelete: boolean;
    NotifyForOperationUpdate: boolean;
    Query: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
}