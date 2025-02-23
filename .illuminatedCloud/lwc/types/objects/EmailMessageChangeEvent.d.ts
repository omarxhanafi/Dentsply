// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailMessageChangeEvent extends SObject 
{
    Activity?: Task;
    ActivityId?: string;
    AutomationType?: string;
    BccAddress?: string;
    CcAddress?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ClientThreadIdentifier?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EmailRoutingAddress?: EmailRoutingAddress;
    EmailRoutingAddressId?: string;
    EmailTemplate?: EmailTemplate;
    EmailTemplateId?: string;
    FirstOpenedDate?: string;
    FromAddress?: string;
    FromName?: string;
    HasAttachment?: boolean;
    Headers?: string;
    HtmlBody?: string;
    Incoming?: boolean;
    IsBounced?: boolean;
    IsClientManaged?: boolean;
    IsExternallyVisible?: boolean;
    IsTracked?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastOpenedDate?: string;
    MessageDate?: string;
    MessageIdentifier?: string;
    Parent?: Case;
    ParentId?: string;
    RelatedTo?: SObject;
    RelatedToId?: string;
    ReplayId?: string;
    ReplyToEmailMessage?: EmailMessage;
    ReplyToEmailMessageId?: string;
    Status?: string;
    Subject?: string;
    TextBody?: string;
    ThreadIdentifier?: string;
    ToAddress?: string;
}