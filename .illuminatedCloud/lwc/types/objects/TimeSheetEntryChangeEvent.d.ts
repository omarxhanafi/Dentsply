// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TimeSheetEntryChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    DurationInMinutes: number;
    EndTime: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ReplayId: string;
    StartTime: string;
    Status: string;
    Subject: string;
    TimeSheet: TimeSheet;
    TimeSheetEntryNumber: string;
    TimeSheetId: string;
    Type: string;
    WorkOrder: WorkOrder;
    WorkOrderId: string;
    WorkOrderLineItem: WorkOrderLineItem;
    WorkOrderLineItemId: string;
}