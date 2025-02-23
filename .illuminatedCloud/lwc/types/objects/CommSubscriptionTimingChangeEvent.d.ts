// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CommSubscriptionTimingChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CommSubscriptionConsent?: CommSubscriptionConsent;
    CommSubscriptionConsentId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
    Unit?: string;
}