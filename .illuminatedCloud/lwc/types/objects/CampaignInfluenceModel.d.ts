// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CampaignInfluenceModel extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsActive?: boolean;
    IsDefaultModel?: boolean;
    IsDeleted?: boolean;
    IsModelLocked?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    /**
     * The reciprocal relationship for {@link CampaignInfluence.ModelId}.
     */
    Model?: CampaignInfluence;
    ModelDescription?: string;
    ModelType?: string;
    NamespacePrefix?: string;
    RecordPreference?: string;
    SystemModstamp?: string;
}