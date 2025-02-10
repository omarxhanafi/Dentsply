// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentVersionComment extends SObject 
{
    ContentDocument: ContentDocument;
    ContentDocumentId: string;
    ContentVersion: ContentVersion;
    ContentVersionId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedDate: string;
    RelatedRecord: FlowRecordRelation;
    UserComment: string;
}