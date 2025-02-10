// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface VideoCallRecordingChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DurationInSeconds: number;
    EndDateTime: string;
    ExpirationDateTime: string;
    ExternalRecordingKey: string;
    ExternalRecordingKeyLong: string;
    FileSizeInByte: number;
    FileType: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
    StartDateTime: string;
    VideoCallRecord: VideoCall;
    VideoCallRecordId: string;
}