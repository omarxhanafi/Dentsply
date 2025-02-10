// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExpenseChangeEvent extends SObject 
{
    Account: Account;
    AccountId: string;
    Amount: number;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    Discount: number;
    ExpenseEndDate: Date;
    ExpenseNumber: string;
    ExpenseStartDate: Date;
    ExpenseType: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Owner: User;
    OwnerId: string;
    Quantity: number;
    ReplayId: string;
    Title: string;
    TransactionDate: Date;
    UnitPrice: number;
    WorkOrder: WorkOrder;
    WorkOrderId: string;
}