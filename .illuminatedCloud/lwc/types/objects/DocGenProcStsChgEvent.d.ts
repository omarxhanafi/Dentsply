// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DocGenProcStsChgEvent extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DocGenProcessIdentifier?: string;
    Error?: string;
    EventUuid?: string;
    PdfDocumentIdentifier?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    Status?: string;
    WordDocumentIdentifier?: string;
}