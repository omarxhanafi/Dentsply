// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CollaborationGroupMember extends SObject 
{
    CollaborationGroup: CollaborationGroup;
    CollaborationGroupId: string;
    CollaborationRole: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    LastFeedAccessDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Member: User;
    MemberId: string;
    Network: Network;
    NetworkId: string;
    NotificationFrequency: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
}