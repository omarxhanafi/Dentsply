// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface VoiceCallChangeEvent extends SObject 
{
    Activity: Task;
    ActivityId: string;
    CallConnectDateTime: string;
    CallDisposition: string;
    CallDurationInSeconds: number;
    CallEndDateTime: string;
    CallerIdType: string;
    CallOrigin: string;
    CallRecording: VoiceCallRecording;
    CallRecordingId: string;
    CallStartDateTime: string;
    CallType: string;
    ChangeEventHeader: ChangeEventHeader;
    ConferenceKey: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyCode: string;
    FromPhoneNumber: string;
    IsDiarizationOptIn: boolean;
    IsRecorded: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MediaProvider: CallCoachingMediaProvider;
    MediaProviderId: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    Price: number;
    RelatedRecord: SObject;
    RelatedRecordId: string;
    ReplayId: string;
    SourceType: string;
    ToPhoneNumber: string;
    TranscribedLanguage: string;
    User: User;
    UserId: string;
    VendorCallKey: string;
    VendorParentCallKey: string;
    VendorType: string;
}