// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailBounceEvent extends SObject 
{
    BouncedAddress?: string;
    BounceDate?: string;
    BouncedObject?: SObject;
    BouncedObjectId?: string;
    Classification?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ErrorMessage?: string;
    EventUuid?: string;
    ReplayId?: string;
    SenderAddress?: string;
    ShouldGenerateDsn?: boolean;
    SourceEvent?: AsyncOperationEvent;
}