// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Site extends SObject 
{
    Admin: User;
    AdminId: string;
    AnalyticsTrackingCode: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    ArchivedBy: User;
    ArchivedById: string;
    ArchivedDate: string;
    ArchiveStatus: string;
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    ClickjackProtectionLevel: string;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DailyBandwidthLimit: number;
    DailyBandwidthUsed: number;
    DailyRequestTimeLimit: number;
    DailyRequestTimeUsed: number;
    Description: string;
    ExperienceContext: PromptVersion;
    Feeds: SiteFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    GuestRecordDefaultOwner: User;
    GuestRecordDefaultOwnerId: string;
    GuestUser: User;
    GuestUserId: string;
    Histories: SiteHistory[];
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    MasterLabel: string;
    MonthlyPageViewsEntitlement: number;
    Name: string;
    OptionsAllowGuestPaymentsApi: boolean;
    OptionsAllowGuestSupportApi: boolean;
    OptionsAllowHomePage: boolean;
    OptionsAllowStandardAnswersPages: boolean;
    OptionsAllowStandardIdeasPages: boolean;
    OptionsAllowStandardLookups: boolean;
    OptionsAllowStandardPortalPages: boolean;
    OptionsAllowStandardSearch: boolean;
    OptionsBrowserXssProtection: boolean;
    OptionsCachePublicVfPagesInProxies: boolean;
    OptionsContentSniffingProtection: boolean;
    OptionsCookieConsent: boolean;
    OptionsEnableFeeds: boolean;
    OptionsHasStoredPathPrefix: boolean;
    OptionsIsSiteConsentBannerIntegrationEnabled: boolean;
    OptionsIsSiteConsentBannerIntegrationMigrated: boolean;
    OptionsIsSiteDataCloudIntegrationEnabled: boolean;
    OptionsIsSiteDataCloudIntegrationMigrated: boolean;
    OptionsIsSiteGAIntegrationEnabled: boolean;
    OptionsIsSiteGAIntegrationMigrated: boolean;
    OptionsIsSiteGAIntegrationMigratedV2: boolean;
    OptionsIsSiteGRecaptchaIntegrationEnabled: boolean;
    OptionsRedirectToCustomDomain: boolean;
    OptionsReferrerPolicyOriginWhenCrossOrigin: boolean;
    OptionsUseGuestUserLanguage: boolean;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    Site: LiveChatButton;
    SiteDomainPaths: DomainSite[];
    SiteIframeWhiteListUrls: SiteIframeWhiteListUrl[];
    SiteType: string;
    Status: string;
    Subdomain: string;
    SystemModstamp: string;
    UrlPathPrefix: string;
}