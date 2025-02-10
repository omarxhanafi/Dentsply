// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AppDefinition extends SObject 
{
    AppDefinition: UserAppInfo;
    AppTabs: AppTabMember[];
    Description: string;
    DeveloperName: string;
    DurableId: string;
    HeaderColor: string;
    IsLargeFormFactorSupported: boolean;
    IsMediumFormFactorSupported: boolean;
    IsNavAutoTempTabsDisabled: boolean;
    IsNavPersonalizationDisabled: boolean;
    IsNavTabPersistenceDisabled: boolean;
    IsOmniPinnedViewEnabled: boolean;
    IsOverrideOrgTheme: boolean;
    IsSmallFormFactorSupported: boolean;
    Label: string;
    LogoUrl: string;
    MasterLabel: string;
    NamespacePrefix: string;
    NavType: string;
    UiType: string;
    UtilityBar: string;
}