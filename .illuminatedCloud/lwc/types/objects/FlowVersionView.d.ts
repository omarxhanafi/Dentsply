// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowVersionView extends SObject 
{
    ApiVersion?: number;
    ApiVersionRuntime?: number;
    CapabilityType?: string;
    CapacityCategory?: string;
    Description?: string;
    DurableId?: string;
    FlowDefinitionView?: FlowDefinitionView;
    FlowDefinitionViewId?: string;
    FlowTestResults?: FlowTestResult[];
    FlowVersionView?: FlowInterview;
    IsSwingFlow?: boolean;
    IsTemplate?: boolean;
    Label?: string;
    LastModifiedDate?: string;
    ProcessType?: string;
    RunInMode?: string;
    Status?: string;
    Variables?: FlowVariableView[];
    VersionNumber?: number;
}