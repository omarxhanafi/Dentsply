// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Domain extends SObject 
{
    CnameTarget: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Domain: string;
    DomainSites: DomainSite[];
    DomainType: string;
    HttpsOption: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    OptionsHstsPreload: boolean;
    SystemModstamp: string;
}