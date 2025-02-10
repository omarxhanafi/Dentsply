// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TabDefinition extends SObject 
{
    AppTabs: AppTabMember[];
    Colors: ColorDefinition[];
    DurableId: string;
    Icons: IconDefinition[];
    IsAvailableInAloha: boolean;
    IsAvailableInDesktop: boolean;
    IsAvailableInLightning: boolean;
    IsAvailableInMobile: boolean;
    IsCustom: boolean;
    Label: string;
    MobileUrl: string;
    Name: string;
    SobjectName: string;
    Url: string;
}