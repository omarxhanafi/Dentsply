// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QuickTextChangeEvent extends SObject 
{
    Category: string;
    ChangeEventHeader: ChangeEventHeader;
    Channel: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    IsInsertable: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Message: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    ReplayId: string;
    SourceType: string;
}