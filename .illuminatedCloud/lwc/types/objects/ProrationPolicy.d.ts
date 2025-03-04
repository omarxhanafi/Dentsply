// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProrationPolicy extends SObject 
{
    ArePartialPeriodsAllowed?: boolean;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    ProductSellingModelOptions?: ProductSellingModelOption[];
    ProrationPolicyType?: string;
    RelatedRecord?: FlowRecordRelation;
    RemainderStrategy?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}