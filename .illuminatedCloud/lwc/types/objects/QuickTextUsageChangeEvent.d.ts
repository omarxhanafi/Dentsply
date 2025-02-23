// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QuickTextUsageChangeEvent extends SObject 
{
    AppContext?: string;
    ChangeEventHeader?: ChangeEventHeader;
    Channel?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LaunchSource?: string;
    LoggedTime?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    QuickText?: QuickText;
    QuickTextId?: string;
    ReplayId?: string;
    User?: User;
    UserId?: string;
}