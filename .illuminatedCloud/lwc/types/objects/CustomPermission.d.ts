// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CustomPermission extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomPermissionDependencyItem: CustomPermissionDependency[];
    CustomPermissionItem: CustomPermissionDependency[];
    Description: string;
    DeveloperName: string;
    ExternalClientApplication: ExternalClientApplication;
    ExternalClientApplicationId: string;
    GrantedByLicenses: GrantedByLicense[];
    IsDeleted: boolean;
    IsLicensed: boolean;
    IsProtected: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    NamespacePrefix: string;
    ObjectStateTransitions: ObjectStateTransition[];
    ObjectStateValues: ObjectStateValue[];
    SetupEntityAccessItems: SetupEntityAccess[];
    SystemModstamp: string;
}