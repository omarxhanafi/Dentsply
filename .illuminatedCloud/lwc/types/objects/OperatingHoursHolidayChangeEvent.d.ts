// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OperatingHoursHolidayChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DateAndTime: string;
    Holiday: Holiday;
    HolidayId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    OperatingHours: OperatingHours;
    OperatingHoursHolidayNumber: string;
    OperatingHoursId: string;
    ReplayId: string;
}