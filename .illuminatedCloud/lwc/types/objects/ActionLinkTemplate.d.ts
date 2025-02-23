// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ActionLinkTemplate extends SObject 
{
    ActionLinkGroupTemplate?: ActionLinkGroupTemplate;
    ActionLinkGroupTemplateId?: string;
    ActionUrl?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Headers?: string;
    IsConfirmationRequired?: boolean;
    IsDeleted?: boolean;
    IsGroupDefault?: boolean;
    Label?: string;
    LabelKey?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkType?: string;
    Method?: string;
    Position?: number;
    RequestBody?: string;
    SystemModstamp?: string;
    UserAlias?: string;
    UserVisibility?: string;
}