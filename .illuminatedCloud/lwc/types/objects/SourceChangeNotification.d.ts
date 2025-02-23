// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SourceChangeNotification extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    IsNameObsolete?: boolean;
    MemberName?: string;
    MemberType?: string;
    ReplayId?: string;
    RevisionNum?: number;
    SourceEvent?: AsyncOperationEvent;
}