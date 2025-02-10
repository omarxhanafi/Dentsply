// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DocumentGenerationSetting extends SObject 
{
    BatchDocGnrnPctLimitPerHour: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    DocumentTemplateLibraryName: string;
    GenerationMechanism: string;
    GuestAccessNamedCredential: string;
    InProgDocGenRqstTmot: number;
    IsBatchDocGnrnEnabled: boolean;
    IsDeleted: boolean;
    IsInProgRqstTmotEnab: boolean;
    IsServerSideDocGenEnabled: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    PreviewType: string;
    SystemModstamp: string;
}