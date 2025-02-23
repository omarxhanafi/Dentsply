// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkPlanChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    ExecutionOrder?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    ParentRecord?: SObject;
    ParentRecordId?: string;
    ReplayId?: string;
    WorkOrder?: WorkOrder;
    WorkOrderId?: string;
    WorkOrderLineItem?: WorkOrderLineItem;
    WorkOrderLineItemId?: string;
    WorkPlanTemplate?: WorkPlanTemplate;
    WorkPlanTemplateId?: string;
}