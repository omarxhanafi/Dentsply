// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DecisionMatrixDefinitionVersion extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DecisionMatrixDefinition?: DecisionMatrixDefinition;
    DecisionMatrixDefinitionId?: string;
    DecisionMatrixDefinitionVer?: CalculationMatrixVersion[];
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    Status?: string;
    SystemModstamp?: string;
    VersionNumber?: number;
}