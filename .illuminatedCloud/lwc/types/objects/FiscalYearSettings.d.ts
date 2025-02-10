// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FiscalYearSettings extends SObject 
{
    Description: string;
    EndDate: Date;
    IsStandardYear: boolean;
    Name: string;
    Period: Period;
    PeriodId: string;
    PeriodLabelScheme: string;
    PeriodPrefix: string;
    Periods: Period[];
    QuarterLabelScheme: string;
    QuarterPrefix: string;
    StartDate: Date;
    SystemModstamp: string;
    WeekLabelScheme: string;
    WeekStartDay: number;
    YearType: string;
}