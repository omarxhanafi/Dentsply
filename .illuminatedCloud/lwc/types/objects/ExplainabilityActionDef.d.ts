// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ExplainabilityActionDef extends SObject 
{
    ActionLogSchemaType: string;
    ApplicationSubtype: ApplicationSubtypeDefinition;
    ApplicationSubtypeId: string;
    ApplicationType: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    ExplainabilityActionDef: ExplainabilityActionVersion;
    IsDeleted: boolean;
    IsInternal: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    ProcessType: BusinessProcessTypeDef;
    ProcessTypeId: string;
    SystemModstamp: string;
}