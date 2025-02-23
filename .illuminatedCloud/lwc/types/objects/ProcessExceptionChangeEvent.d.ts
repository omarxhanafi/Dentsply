// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcessExceptionChangeEvent extends SObject 
{
    AttachedTo?: SObject;
    AttachedToId?: string;
    Case?: Case;
    CaseId?: string;
    Category?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    ExternalReference?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Message?: string;
    Owner?: User;
    OwnerId?: string;
    Priority?: string;
    ProcessExceptionNumber?: string;
    ReplayId?: string;
    Severity?: string;
    SeverityCategory?: string;
    Status?: string;
    StatusCategory?: string;
}