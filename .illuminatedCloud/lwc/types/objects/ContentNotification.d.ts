// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentNotification extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedDate?: string;
    EntityIdentifier?: SObject;
    EntityIdentifierId?: string;
    EntityType?: string;
    Nature?: string;
    RelatedRecord?: FlowRecordRelation;
    Subject?: string;
    Text?: string;
    Users?: User;
    UsersId?: string;
}