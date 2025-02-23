// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProrationPolicy extends SObject 
{
    ArePartialPeriodsAllowed?: boolean;
    AssetActionSources?: AssetActionSource[];
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
    OrderItems?: OrderItem[];
    ProductSellingModelOptions?: ProductSellingModelOption[];
    ProrationPolicy?: OrderItemChangeEvent;
    ProrationPolicyType?: string;
    QuoteLineItems?: QuoteLineItem[];
    RelatedRecord?: FlowRecordRelation;
    RemainderStrategy?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}