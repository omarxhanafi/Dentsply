// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointPhoneChangeEvent extends SObject 
{
    ActiveFromDate?: Date;
    ActiveToDate?: Date;
    AreaCode?: string;
    BestTimeToContactEndTime?: Time;
    BestTimeToContactStartTime?: Time;
    BestTimeToContactTimezone?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExtensionNumber?: string;
    FormattedInternationalPhoneNumber?: string;
    FormattedNationalPhoneNumber?: string;
    IsBusinessPhone?: boolean;
    IsFaxCapable?: boolean;
    IsPersonalPhone?: boolean;
    IsPrimary?: boolean;
    IsSmsCapable?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    Parent?: SObject;
    ParentId?: string;
    PhoneType?: string;
    ReplayId?: string;
    TelephoneNumber?: string;
}