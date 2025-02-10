// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserCustomBadge extends SObject 
{
    BadgeType: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomText: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Localization: UserCustomBadgeLocalization[];
    Parent: SObject;
    ParentId: string;
    SystemModstamp: string;
}