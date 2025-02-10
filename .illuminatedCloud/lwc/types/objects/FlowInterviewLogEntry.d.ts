// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowInterviewLogEntry extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DurationSinceStartInMinutes: number;
    ElementApiName: string;
    ElementDurationInMinutes: number;
    ElementLabel: string;
    FlowInterviewLog: FlowInterviewLog;
    FlowInterviewLogId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LogEntryTimestamp: string;
    LogEntryType: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}