// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailCapture extends SObject 
{
    CaptureDate: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FromPattern: string;
    IsActive: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    RawMessage: string;
    RawMessageLength: number;
    Recipient: string;
    Sender: string;
    SystemModstamp: string;
    ToPattern: string;
}