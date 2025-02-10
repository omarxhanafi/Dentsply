// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkPlanTemplateEntryChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    ExecutionOrder: number;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ReplayId: string;
    WorkPlanTemplate: WorkPlanTemplate;
    WorkPlanTemplateEntryNumber: string;
    WorkPlanTemplateId: string;
    WorkStepTemplate: WorkStepTemplate;
    WorkStepTemplateId: string;
}