// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MailmergeTemplate extends SObject 
{
    Body: string;
    BodyLength: number;
    Category: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    Filename: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastUsedDate: string;
    Name: string;
    SecurityOptionsAttachmentHasFlash: boolean;
    SecurityOptionsAttachmentHasXSSThreat: boolean;
    SecurityOptionsAttachmentScannedforFlash: boolean;
    SecurityOptionsAttachmentScannedForXSS: boolean;
    SystemModstamp: string;
}