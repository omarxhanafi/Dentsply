// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MacroInstructionChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Macro: Macro;
    MacroId: string;
    Name: string;
    Operation: string;
    ReplayId: string;
    SortOrder: number;
    Target: string;
    Value: string;
    ValueRecord: string;
}