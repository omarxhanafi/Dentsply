// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserProvisioningConfig extends SObject 
{
    ApprovalRequired?: string;
    ConnectedApp?: ConnectedApplication;
    ConnectedAppId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    Enabled?: boolean;
    EnabledOperations?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReconDateTime?: string;
    MasterLabel?: string;
    NamedCredential?: NamedCredential;
    NamedCredentialId?: string;
    NamespacePrefix?: string;
    Notes?: string;
    OnUpdateAttributes?: string;
    ReconFilter?: string;
    SystemModstamp?: string;
    UserAccountMapping?: string;
    UserProvConfig?: UserProvisioningRequest;
}