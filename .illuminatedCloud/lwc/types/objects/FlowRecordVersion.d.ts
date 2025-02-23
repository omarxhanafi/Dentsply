// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowRecordVersion extends SObject 
{
    ActivatedBy?: User;
    ActivatedById?: string;
    ActivatedDate?: string;
    ActiveVersion?: FlowRecord;
    ApiVersion?: number;
    Builder?: string;
    CapacityCategory?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    FlowRecord?: FlowRecord;
    FlowRecordId?: string;
    FlowRecordVersion?: FlowRecordElement;
    FlowType?: string;
    IsDeleted?: boolean;
    IsOverridable?: boolean;
    IsPaused?: boolean;
    IsTemplate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    OverriddenBy?: FlowRecord;
    OverriddenById?: string;
    OverriddenFlow?: FlowRecord;
    OverriddenFlowId?: string;
    PausedDate?: string;
    PausingUser?: User;
    PausingUserId?: string;
    ProgressStatus?: string;
    ReasonPaused?: string;
    RelatedRecord?: FlowRecordRelation;
    ResumedDate?: string;
    ResumingUser?: User;
    ResumingUserId?: string;
    RunInMode?: string;
    ScheduledStartDate?: string;
    SourceTemplate?: FlowRecord;
    SourceTemplateId?: string;
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TriggerObjectOrEventLabel?: string;
    VersionNumber?: number;
}