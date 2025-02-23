// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CalendarViewChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    Color?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DateHandlingType?: string;
    DisplayField?: string;
    EndField?: string;
    FillPattern?: string;
    IsDisplayed?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ListViewFilter?: ListView;
    ListViewFilterId?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    Publisher?: SObject;
    PublisherId?: string;
    ReplayId?: string;
    StartField?: string;
}