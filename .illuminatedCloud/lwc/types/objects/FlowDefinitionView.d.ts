// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowDefinitionView extends SObject 
{
    ActiveVersionId: string;
    ApiName: string;
    ApiVersion: number;
    Builder: string;
    CapacityCategory: string;
    Description: string;
    DurableId: string;
    Environments: string;
    FlowTestResults: FlowTestResult[];
    FlowTestViews: FlowTestView[];
    HasAsyncAfterCommitPath: boolean;
    InstalledPackageName: string;
    IsActive: boolean;
    IsOutOfDate: boolean;
    IsOverridable: boolean;
    IsSwingFlow: boolean;
    IsTemplate: boolean;
    Label: string;
    LastModifiedBy: string;
    LastModifiedDate: string;
    LatestVersionId: string;
    ManageableState: string;
    NamespacePrefix: string;
    OverriddenBy: FlowDefinitionView;
    OverriddenById: string;
    OverriddenFlow: FlowDefinitionView;
    OverriddenFlowId: string;
    ProcessType: string;
    RecordTriggerType: string;
    SourceTemplate: FlowDefinitionView;
    SourceTemplateId: string;
    TriggerObjectOrEvent: EntityDefinition;
    TriggerObjectOrEventId: string;
    TriggerObjectOrEventLabel: string;
    TriggerOrder: number;
    TriggerType: string;
    VersionNumber: number;
    Versions: FlowVersionView[];
}