// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Period extends SObject 
{
    EndDate: Date;
    FiscalYearSettings: FiscalYearSettings;
    FiscalYearSettingsId: string;
    FullyQualifiedLabel: string;
    IsForecastPeriod: boolean;
    Number: number;
    Period: FiscalYearSettings;
    PeriodLabel: string;
    QuarterLabel: string;
    StartDate: Date;
    SystemModstamp: string;
    Type: string;
}