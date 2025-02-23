// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailDomainKey extends SObject 
{
    AlternatePublicKey?: string;
    AlternateSelector?: string;
    AlternateTxtRecordName?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Domain?: string;
    DomainMatch?: string;
    DomainMatchPattern?: string;
    IsActive?: boolean;
    IsDeleted?: boolean;
    KeySize?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    PlatformType?: string;
    PublicKey?: string;
    Selector?: string;
    Status?: string;
    StatusMessage?: string;
    SystemModstamp?: string;
    ThirdSelector?: string;
    ThirdTxtRecordName?: string;
    TxtRecordName?: string;
    TxtRecordsPublishState?: string;
}