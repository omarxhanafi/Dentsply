// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EntitySubscription extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: SObject;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    Network?: Network;
    NetworkId?: string;
    Parent?: SObject;
    ParentId?: string;
    RelatedRecord?: FlowRecordRelation;
    Subscriber?: User;
    SubscriberId?: string;
}