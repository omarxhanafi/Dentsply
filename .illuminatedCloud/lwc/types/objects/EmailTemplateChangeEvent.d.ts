// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailTemplateChangeEvent extends SObject 
{
    ApiVersion: number;
    Body: string;
    BrandTemplate: BrandTemplate;
    BrandTemplateId: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    Encoding: string;
    EnhancedLetterhead: EnhancedLetterhead;
    EnhancedLetterheadId: string;
    Folder: SObject;
    FolderId: string;
    HtmlValue: string;
    IsActive: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastUsedDate: string;
    Markup: string;
    Name: string;
    NamespacePrefix: string;
    Owner: User;
    OwnerId: string;
    RelatedEntityType: string;
    ReplayId: string;
    Subject: string;
    TemplateStyle: string;
    TemplateType: string;
    TimesUsed: number;
    UiType: string;
}