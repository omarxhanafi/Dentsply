// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestrationVersionChangeEvent extends SObject 
{
    ActivatedBy?: User;
    ActivatedById?: string;
    ActivatedDate?: string;
    ApiVersion?: number;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    FlowOrchestration?: FlowOrchestration;
    FlowOrchestrationId?: string;
    IsOverridable?: boolean;
    IsTemplate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OrchestrationType?: string;
    OverriddenBy?: FlowOrchestration;
    OverriddenById?: string;
    OverriddenOrchestration?: FlowOrchestration;
    OverriddenOrchestrationId?: string;
    ReplayId?: string;
    RunInMode?: string;
    SourceTemplate?: FlowOrchestration;
    SourceTemplateId?: string;
    Status?: string;
    TriggerObjectOrEventLabel?: string;
    VersionNumber?: number;
}