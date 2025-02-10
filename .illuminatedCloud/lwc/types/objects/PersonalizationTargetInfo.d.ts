// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PersonalizationTargetInfo extends SObject 
{
    Container: SObject;
    ContainerId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DraftRow: PersonalizationTargetInfo;
    DraftRowId: string;
    GroupName: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    PublishStatus: string;
    SystemModstamp: string;
    TargetType: string;
    TargetValue: string;
}