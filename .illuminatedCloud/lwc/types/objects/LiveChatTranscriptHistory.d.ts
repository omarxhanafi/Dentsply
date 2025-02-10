// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatTranscriptHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    Field: string;
    IsDeleted: boolean;
    LiveChatTranscript: LiveChatTranscript;
    LiveChatTranscriptId: string;
    NewValue: any;
    OldValue: any;
}