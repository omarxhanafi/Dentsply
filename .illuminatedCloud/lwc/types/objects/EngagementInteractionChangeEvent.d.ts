// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EngagementInteractionChangeEvent extends SObject 
{
    AttendeeVerificationTime?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CommunicationChannel?: string;
    Context?: ServiceAppointment;
    ContextId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Duration?: string;
    EndDateTime?: string;
    ExternalIdentifier?: string;
    InitiatingAttendee?: SObject;
    InitiatingAttendeeId?: string;
    IsAttendeeAuthenticated?: boolean;
    IsAttendeeVerified?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    PhoneNumber?: string;
    Reason?: string;
    ReplayId?: string;
    Sentiment?: string;
    StartDateTime?: string;
    Status?: string;
    Type?: string;
}