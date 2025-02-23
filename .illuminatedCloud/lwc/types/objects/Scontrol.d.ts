// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Scontrol extends SObject 
{
    Binary?: string;
    BodyLength?: number;
    ContentSource?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    EncodingKey?: string;
    Filename?: string;
    HtmlWrapper?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Localization?: ScontrolLocalization[];
    Name?: string;
    NamespacePrefix?: string;
    Scontrol?: WebLink;
    SupportsCaching?: boolean;
    SystemModstamp?: string;
}