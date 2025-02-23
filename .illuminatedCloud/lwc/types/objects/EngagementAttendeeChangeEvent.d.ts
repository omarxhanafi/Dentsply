// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EngagementAttendeeChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EndDateTime?: string;
    Engagement?: SObject;
    EngagementId?: string;
    ExternalAttendee?: SObject;
    ExternalAttendeeId?: string;
    InternalAttendee?: User;
    InternalAttendeeId?: string;
    IsAuthenticated?: boolean;
    IsVerified?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    Role?: string;
    StartDateTime?: string;
    VerificationTime?: string;
}