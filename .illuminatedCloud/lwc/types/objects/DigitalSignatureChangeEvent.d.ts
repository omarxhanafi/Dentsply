// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DigitalSignatureChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DigitalSignatureNumber: string;
    Document: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Parent: SObject;
    ParentId: string;
    Place: string;
    ReplayId: string;
    SignatureType: string;
    SignedBy: string;
    SignedDate: string;
}