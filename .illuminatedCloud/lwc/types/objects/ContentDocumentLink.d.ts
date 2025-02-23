// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDocumentLink extends SObject 
{
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    IsDeleted?: boolean;
    LinkedEntity?: SObject;
    LinkedEntityId?: string;
    RelatedRecord?: FlowRecordRelation;
    ShareType?: string;
    SystemModstamp?: string;
    Visibility?: string;
}