// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DocumentTemplateHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    DocumentTemplate: DocumentTemplate;
    DocumentTemplateId: string;
    Field: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
}