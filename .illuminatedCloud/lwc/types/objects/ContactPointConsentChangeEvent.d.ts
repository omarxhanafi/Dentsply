// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointConsentChangeEvent extends SObject 
{
    BusinessBrand: BusinessBrand;
    BusinessBrandId: string;
    CaptureContactPointType: string;
    CaptureDate: string;
    CaptureSource: string;
    ChangeEventHeader: ChangeEventHeader;
    ContactPoint: SObject;
    ContactPointId: string;
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
    PartyRole: SObject;
    PartyRoleId: string;
    PrivacyConsentStatus: string;
    ReplayId: string;
}