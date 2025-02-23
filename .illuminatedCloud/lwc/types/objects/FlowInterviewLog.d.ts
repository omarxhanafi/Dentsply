// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowInterviewLog extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FlowDeveloperName?: string;
    FlowInterviewGuid?: string;
    FlowInterviewLogs?: FlowInterviewLogEntry[];
    FlowLabel?: string;
    FlowNamespace?: string;
    FlowVersionNumber?: number;
    InterviewDurationInMinutes?: number;
    InterviewEndTimestamp?: string;
    InterviewStartTimestamp?: string;
    InterviewStatus?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: FlowInterviewLogShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}