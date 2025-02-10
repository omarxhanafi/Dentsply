// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDocumentSubscription extends SObject 
{
    ContentDocument: ContentDocument;
    ContentDocumentId: string;
    ContextRecord: FlowExecutionErrorEvent;
    IsCommentSub: boolean;
    IsDocumentSub: boolean;
    RelatedRecord: FlowRecordRelation;
    User: User;
    UserId: string;
}