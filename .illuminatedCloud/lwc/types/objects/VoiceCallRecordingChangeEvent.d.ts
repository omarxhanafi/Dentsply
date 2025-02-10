// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface VoiceCallRecordingChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DurationInSeconds: number;
    IsConsented: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MediaContent: ContentDocument;
    MediaContentId: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    ReplayId: string;
    VoiceCall: VoiceCall;
    VoiceCallId: string;
}