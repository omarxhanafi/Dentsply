// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WebLink extends SObject 
{
    ActionDefinition?: RecordAction;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DisplayType?: string;
    EncodingKey?: string;
    HasMenubar?: boolean;
    HasScrollbars?: boolean;
    HasToolbar?: boolean;
    Height?: number;
    IsProtected?: boolean;
    IsResizable?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkType?: string;
    Localization?: WebLinkLocalization[];
    MasterLabel?: string;
    Name?: string;
    NamespacePrefix?: string;
    OpenType?: string;
    PageOrSobjectType?: string;
    Position?: string;
    RequireRowSelection?: boolean;
    Scontrol?: SObject;
    ScontrolId?: string;
    ShowsLocation?: boolean;
    ShowsStatus?: boolean;
    SystemModstamp?: string;
    Url?: string;
    Width?: number;
}