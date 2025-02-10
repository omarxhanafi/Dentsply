// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkStepChangeEvent extends SObject 
{
    ActionDefinition: string;
    ActionType: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    EndTime: string;
    ExecutionOrder: number;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ParentRecord: SObject;
    ParentRecordId: string;
    PausedFlowInterview: FlowInterview;
    PausedFlowInterviewId: string;
    ReplayId: string;
    StartTime: string;
    Status: string;
    StatusCategory: string;
    WorkOrder: WorkOrder;
    WorkOrderId: string;
    WorkOrderLineItem: WorkOrderLineItem;
    WorkOrderLineItemId: string;
    WorkPlan: WorkPlan;
    WorkPlanId: string;
}