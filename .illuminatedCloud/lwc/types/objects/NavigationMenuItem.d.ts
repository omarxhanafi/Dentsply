// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NavigationMenuItem extends SObject 
{
    AccessRestriction: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CustomBrands: CustomBrand[];
    DefaultListView: ListView;
    DefaultListViewId: string;
    DraftRow: NavigationMenuItem;
    DraftRowId: string;
    IsDeleted: boolean;
    Label: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Localization: NavigationMenuItemLocalization[];
    NavigationLinkSet: NavigationLinkSet;
    NavigationLinkSetId: string;
    Parent: NavigationMenuItem;
    ParentId: string;
    Position: number;
    Status: string;
    SystemModstamp: string;
    Target: string;
    TargetPrefs: string;
    Type: string;
}