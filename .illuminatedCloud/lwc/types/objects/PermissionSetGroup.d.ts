// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PermissionSetGroup extends SObject 
{
    Assignments: PermissionSetAssignment[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    DeveloperName: string;
    HasActivationRequired: boolean;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    PermissionSetGroup: PermissionSet;
    PermissionSetGroupComponents: PermissionSetGroupComponent[];
    SessionActivations: SessionPermSetActivation[];
    Status: string;
    SystemModstamp: string;
}