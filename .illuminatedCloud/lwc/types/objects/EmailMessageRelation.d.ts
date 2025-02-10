// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailMessageRelation extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EmailMessage: EmailMessage;
    EmailMessageId: string;
    IsDeleted: boolean;
    RelatedRecord: FlowRecordRelation;
    Relation: SObject;
    RelationAddress: string;
    RelationId: string;
    RelationObjectType: string;
    RelationType: string;
    SystemModstamp: string;
}