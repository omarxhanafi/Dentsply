// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CommSubscriptionConsentChangeEvent extends SObject 
{
    BusinessBrand?: BusinessBrand;
    BusinessBrandId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CommSubscriptionChannelType?: CommSubscriptionChannelType;
    CommSubscriptionChannelTypeId?: string;
    ConsentCapturedDateTime?: string;
    ConsentCapturedSource?: string;
    ConsentGiver?: SObject;
    ConsentGiverId?: string;
    ContactPoint?: SObject;
    ContactPointId?: string;
    ContactPointValue?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DataUsePurpose?: DataUsePurpose;
    DataUsePurposeId?: string;
    EffectiveFromDate?: Date;
    EngagementChannelType?: EngagementChannelType;
    EngagementChannelTypeId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    PartyRole?: SObject;
    PartyRoleId?: string;
    PrivacyConsentStatus?: string;
    ReplayId?: string;
}