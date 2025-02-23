// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssociatedLocationChangeEvent extends SObject 
{
    ActiveFrom?: string;
    ActiveTo?: string;
    AssociatedLocationNumber?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Location?: Location;
    LocationId?: string;
    ParentRecord?: Account;
    ParentRecordId?: string;
    ReplayId?: string;
    Type?: string;
}