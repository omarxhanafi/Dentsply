// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Holiday extends SObject 
{
    ActivityDate: Date;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    EndTimeInMinutes: number;
    /**
     * The reciprocal relationship for {@link OperatingHoursHoliday.HolidayId}.
     */
    Holiday: OperatingHoursHoliday;
    IsAllDay: boolean;
    IsRecurrence: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    NextOccurrenceDate: Date;
    /**
     * The reciprocal relationship for {@link OperatingHoursHoliday.HolidayId}.
     */
    OperatingHoursHolidays: OperatingHoursHoliday[];
    RecurrenceDayOfMonth: number;
    RecurrenceDayOfWeekMask: number;
    RecurrenceEndDateOnly: Date;
    RecurrenceInstance: string;
    RecurrenceInterval: number;
    RecurrenceMonthOfYear: string;
    RecurrenceStartDate: Date;
    RecurrenceType: string;
    StartTimeInMinutes: number;
    SystemModstamp: string;
}