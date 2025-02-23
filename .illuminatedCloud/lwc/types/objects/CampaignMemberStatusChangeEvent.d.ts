// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CampaignMemberStatusChangeEvent extends SObject 
{
    Campaign?: Campaign;
    CampaignId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    HasResponded?: boolean;
    IsDefault?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ReplayId?: string;
    SortOrder?: number;
}