// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthorizationFormChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DefaultAuthFormText: AuthorizationFormText;
    DefaultAuthFormTextId: string;
    EffectiveFromDate: Date;
    EffectiveToDate: Date;
    IsSignatureRequired: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    ReplayId: string;
    RevisionNumber: string;
}