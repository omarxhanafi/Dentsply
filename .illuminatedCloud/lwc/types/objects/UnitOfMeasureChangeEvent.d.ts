// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UnitOfMeasureChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    ConversionFactor?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    Sequence?: number;
    Status?: string;
    Type?: string;
    UnitCode?: string;
    UnitOfMeasureClass?: UnitOfMeasureClass;
    UnitOfMeasureClassId?: string;
}