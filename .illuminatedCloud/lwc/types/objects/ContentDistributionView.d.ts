// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentDistributionView extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Distribution: ContentDistribution;
    DistributionId: string;
    IsDeleted: boolean;
    IsDownload: boolean;
    IsInternal: boolean;
    ParentView: ContentDistributionView;
    ParentViewId: string;
    SystemModstamp: string;
}