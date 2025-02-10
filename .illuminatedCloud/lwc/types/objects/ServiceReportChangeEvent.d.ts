// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceReportChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    ContentVersionDocument: ContentVersion;
    ContentVersionDocumentId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Document: string;
    IsSigned: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Parent: SObject;
    ParentId: string;
    ReplayId: string;
    ServiceReportLanguage: string;
    ServiceReportNumber: string;
    Template: string;
}