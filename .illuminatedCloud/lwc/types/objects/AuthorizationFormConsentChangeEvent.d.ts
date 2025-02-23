// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthorizationFormConsentChangeEvent extends SObject 
{
    AuthorizationFormText?: AuthorizationFormText;
    AuthorizationFormTextId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ConsentCapturedDateTime?: string;
    ConsentCapturedSource?: string;
    ConsentCapturedSourceType?: string;
    ConsentGiver?: SObject;
    ConsentGiverId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DocumentVersion?: ContentVersion;
    DocumentVersionId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    RelatedRecord?: Account;
    RelatedRecordId?: string;
    ReplayId?: string;
    Status?: string;
}