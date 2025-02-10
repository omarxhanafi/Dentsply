// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ReputationLevel extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomBrands: CustomBrand[];
    IsDeleted: boolean;
    Label: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LevelNumber: number;
    Localization: ReputationLevelLocalization[];
    Parent: SObject;
    ParentId: string;
    SystemModstamp: string;
    Threshold: number;
}