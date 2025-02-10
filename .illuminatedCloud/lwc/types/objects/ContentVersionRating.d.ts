// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentVersionRating extends SObject 
{
    ContentVersion: ContentVersion;
    ContentVersionId: string;
    ContextRecord: FlowExecutionErrorEvent;
    LastModifiedDate: string;
    Rating: number;
    RelatedRecord: FlowRecordRelation;
    User: User;
    UserComment: string;
    UserId: string;
}