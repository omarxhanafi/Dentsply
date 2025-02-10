// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CampaignMemberStatus extends SObject 
{
    Campaign: Campaign;
    CampaignId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    HasResponded: boolean;
    IsDefault: boolean;
    IsDeleted: boolean;
    Label: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    SortOrder: number;
    SystemModstamp: string;
}