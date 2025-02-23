// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SocialPostChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Handle?: string;
    Headline?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LikedBy?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    Posted?: string;
    Provider?: string;
    ReplayId?: string;
}