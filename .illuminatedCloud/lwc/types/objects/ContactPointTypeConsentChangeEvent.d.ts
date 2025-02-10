// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointTypeConsentChangeEvent extends SObject 
{
    BusinessBrand: BusinessBrand;
    BusinessBrandId: string;
    CaptureContactPointType: string;
    CaptureDate: string;
    CaptureSource: string;
    ChangeEventHeader: ChangeEventHeader;
    ContactPointType: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DataUsePurpose: DataUsePurpose;
    DataUsePurposeId: string;
    DoubleConsentCaptureDate: string;
    EffectiveFrom: string;
    EffectiveTo: string;
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