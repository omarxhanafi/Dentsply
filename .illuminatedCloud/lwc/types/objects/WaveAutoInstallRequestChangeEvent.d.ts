// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WaveAutoInstallRequestChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    Configuration: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FailedReason: string;
    Folder: Folder;
    FolderId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
    RequestLog: string;
    RequestStatus: string;
    RequestType: string;
    TemplateApiName: string;
    TemplateVersion: string;
}