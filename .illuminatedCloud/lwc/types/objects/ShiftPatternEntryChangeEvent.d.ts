// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ShiftPatternEntryChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DayOrder: number;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
    ShiftPattern: ShiftPattern;
    ShiftPatternId: string;
    ShiftTemplate: ShiftTemplate;
    ShiftTemplateId: string;
}