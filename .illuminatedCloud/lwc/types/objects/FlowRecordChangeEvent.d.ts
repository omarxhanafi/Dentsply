// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowRecordChangeEvent extends SObject 
{
    ActiveVersion: FlowRecordVersion;
    ActiveVersionId: string;
    ApiName: string;
    ApiVersion: number;
    AssociatedRecord: Campaign;
    AssociatedRecordId: string;
    Builder: string;
    CapacityCategory: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    ErrorCode: string;
    ErrorDetails: string;
    FlowCategory: string;
    FlowDefinition: string;
    FlowLabel: string;
    FlowSubcategory: string;
    FlowType: string;
    InstalledPackageName: string;
    IsCitizenEnabled: boolean;
    IsOverridable: boolean;
    IsPaused: boolean;
    IsTemplate: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ManageableState: string;
    Name: string;
    NamespacePrefix: string;
    OverriddenBy: FlowRecord;
    OverriddenById: string;
    OverriddenFlow: FlowRecord;
    OverriddenFlowId: string;
    Owner: User;
    OwnerId: string;
    ProgressStatus: string;
    ReplayId: string;
    ScheduledStartDate: string;
    SourceTemplate: FlowRecord;
    SourceTemplateId: string;
    StartSource: string;
    TriggerObjectOrEventLabel: string;
    Type: string;
}