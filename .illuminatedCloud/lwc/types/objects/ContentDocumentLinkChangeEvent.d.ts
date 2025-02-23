// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDocumentLinkChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    LinkedEntity?: SObject;
    LinkedEntityId?: string;
    ReplayId?: string;
    ShareType?: string;
    Visibility?: string;
}