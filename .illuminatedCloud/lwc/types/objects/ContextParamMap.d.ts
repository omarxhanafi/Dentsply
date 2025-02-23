// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextParamMap extends SObject 
{
    ContextEntity?: SObject;
    ContextEntityId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MapKey?: string;
    MapValue?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
}