// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PlatformAction extends SObject 
{
    ActionListContext?: string;
    ActionTarget?: string;
    ActionTargetType?: string;
    ApiName?: string;
    Category?: string;
    ConfirmationMessage?: string;
    DeviceFormat?: string;
    ExternalId?: string;
    Group?: SObject;
    GroupId?: string;
    IconContentType?: string;
    IconHeight?: number;
    IconUrl?: string;
    IconWidth?: number;
    InvocationStatus?: string;
    InvokedByUser?: User;
    InvokedByUserId?: string;
    IsGroupDefault?: boolean;
    IsMassAction?: boolean;
    Label?: string;
    LastModifiedDate?: string;
    OpenType?: string;
    PrimaryColor?: string;
    RelatedListRecordId?: string;
    RelatedSourceEntity?: string;
    RetrievalMode?: string;
    Section?: string;
    SourceEntity?: string;
    Subtype?: string;
    TargetObject?: string;
    TargetUrl?: string;
    Type?: string;
}