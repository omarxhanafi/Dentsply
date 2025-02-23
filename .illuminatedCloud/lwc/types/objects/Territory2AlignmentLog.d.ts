// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Territory2AlignmentLog extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    EndTime?: string;
    Filter?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RelatedRecord?: FlowRecordRelation;
    RunAs?: User;
    RunAsId?: string;
    StartTime?: string;
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Territory2?: Territory2;
    Territory2Id?: string;
    Territory2Model?: Territory2Model;
    Territory2ModelId?: string;
}