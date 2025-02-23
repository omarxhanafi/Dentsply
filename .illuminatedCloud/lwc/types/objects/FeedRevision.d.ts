// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedRevision extends SObject 
{
    Action?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: SObject;
    CreatedById?: string;
    CreatedDate?: string;
    EditedAttribute?: string;
    FeedEntity?: SObject;
    FeedEntityId?: string;
    IsDeleted?: boolean;
    IsValueRichText?: boolean;
    OriginNetwork?: Network;
    OriginNetworkId?: string;
    RelatedRecord?: FlowRecordRelation;
    Revision?: number;
    SystemModstamp?: string;
    Value?: string;
}