// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DataUsePurposeChangeEvent extends SObject 
{
    CanDataSubjectOptOut?: boolean;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LegalBasis?: DataUseLegalBasis;
    LegalBasisId?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
}