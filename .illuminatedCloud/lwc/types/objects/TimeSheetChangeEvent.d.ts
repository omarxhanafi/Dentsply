// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TimeSheetChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    EndDate?: Date;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    ServiceResource?: ServiceResource;
    ServiceResourceId?: string;
    StartDate?: Date;
    Status?: string;
    TimeSheetEntryCount?: number;
    TimeSheetNumber?: string;
}