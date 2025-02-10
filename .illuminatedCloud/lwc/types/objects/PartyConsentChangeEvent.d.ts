// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PartyConsentChangeEvent extends SObject 
{
    Action: string;
    BusinessBrand: BusinessBrand;
    BusinessBrandId: string;
    CaptureContactPointType: string;
    CaptureDate: string;
    CaptureSource: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DataUsePurpose: DataUsePurpose;
    DataUsePurposeId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    Party: Individual;
    PartyId: string;
    PartyRole: SObject;
    PartyRoleId: string;
    PrivacyConsentStatus: string;
    ReplayId: string;
}