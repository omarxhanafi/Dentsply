// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface VideoCallChangeEvent extends SObject 
{
    AcceptanceTimeStamp: string;
    ChangeEventHeader: ChangeEventHeader;
    ConsentedUser: User;
    ConsentedUserId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    DurationInSeconds: number;
    EndDateTime: string;
    Event: Event;
    EventId: string;
    ExternalId: string;
    Host: User;
    HostId: string;
    IntelligenceScore: number;
    IsCallCoachingIncluded: boolean;
    IsDiarizationOptIn: boolean;
    IsRecorded: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MeetingType: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    RelatedRecord: SObject;
    RelatedRecordId: string;
    ReplayId: string;
    StartDateTime: string;
    TranscribedLanguage: string;
    VendorMeetingKey: string;
    VendorMeetingUuid: string;
    VendorName: string;
}