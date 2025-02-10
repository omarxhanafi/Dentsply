// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MutingPermissionSet extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeveloperName: string;
    IsDeleted: boolean;
    Language: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MasterLabel: string;
    PermissionsAccessCMC: boolean;
    PermissionsAccessContentBuilder: boolean;
    PermissionsAccessDisputePrompts: boolean;
    PermissionsAccessServiceEinstein: boolean;
    PermissionsAccessSfDrive: boolean;
    PermissionsAccessToComplaintMgmt: boolean;
    PermissionsAccessToDisputeManagement: boolean;
    PermissionsAccessToServiceProcess: boolean;
    PermissionsAccessWalkthroughs: boolean;
    PermissionsAccountSwitcherUser: boolean;
    PermissionsActivateContract: boolean;
    PermissionsActivateOrder: boolean;
    PermissionsActivateSystemModeFlows: boolean;
    PermissionsActivitiesAccess: boolean;
    PermissionsAddAnalyticsRemoteConnections: boolean;
    PermissionsAddWaveNotificationRecipients: boolean;
    PermissionsAdoptionAnalyticsUser: boolean;
    PermissionsAdvancedCsvDataImportUser: boolean;
    PermissionsAECommunityAccess: boolean;
    PermissionsAgentforceServiceAgentUser: boolean;
    PermissionsAICreateInsightObjects: boolean;
    PermissionsAIViewInsightObjects: boolean;
    PermissionsAllowERIBasicAccess: boolean;
    PermissionsAllowUniversalSearch: boolean;
    PermissionsAllowViewEditConvertedLeads: boolean;
    PermissionsAllowViewKnowledge: boolean;
    PermissionsAmendAssets: boolean;
    PermissionsApexRestServices: boolean;
    PermissionsApiEnabled: boolean;
    PermissionsApiUserOnly: boolean;
    PermissionsAppFrameworkManageApp: boolean;
    PermissionsAppFrameworkViewApp: boolean;
    PermissionsApprovalAdmin: boolean;
    PermissionsApprovalDesigner: boolean;
    PermissionsArchiveArticles: boolean;
    PermissionsAssessmentPlatformUser: boolean;
    PermissionsAssignPermissionSets: boolean;
    PermissionsAssignTopics: boolean;
    PermissionsAssignUserToSkill: boolean;
    PermissionsAttributionModelUser: boolean;
    PermissionsAuthorApex: boolean;
    PermissionsAutomatedDataEntry: boolean;
    PermissionsAutomaticActivityCapture: boolean;
    PermissionsB2BMarketingAnalyticsUser: boolean;
    PermissionsBillingSetupAccess: boolean;
    PermissionsBotManageBots: boolean;
    PermissionsBotManageBotsTrainingData: boolean;
    PermissionsBREAlertsUserAccess: boolean;
    PermissionsBulkApiHardDelete: boolean;
    PermissionsBulkMacrosAllowed: boolean;
    PermissionsBypassMFAForUiLogins: boolean;
    PermissionsCallCoachingUser: boolean;
    PermissionsCampaignInfluence2: boolean;
    PermissionsCanAccessCE: boolean;
    PermissionsCanApproveFeedPost: boolean;
    PermissionsCancelAssets: boolean;
    PermissionsCanEditDataPrepRecipe: boolean;
    PermissionsCanEditPrompts: boolean;
    PermissionsCanInitiateMessagingSessions: boolean;
    PermissionsCanInsertFeedSystemFields: boolean;
    PermissionsCanManageMaps: boolean;
    PermissionsCanRunAnalysis: boolean;
    PermissionsCanSendInitialSMSToIndividual: boolean;
    PermissionsCanUpdateEmailMessage: boolean;
    PermissionsCanUseNewDashboardBuilder: boolean;
    PermissionsCanVerifyComment: boolean;
    PermissionsCanViewDataPrepRecipe: boolean;
    PermissionsCdcReportingCreateReports: boolean;
    PermissionsCdcReportingManageFolders: boolean;
    PermissionsCdcReportingViewReports: boolean;
    PermissionsChangeDashboardColors: boolean;
    PermissionsChatterComposeUiCodesnippet: boolean;
    PermissionsChatterEditOwnPost: boolean;
    PermissionsChatterEditOwnRecordPost: boolean;
    PermissionsChatterFileLink: boolean;
    PermissionsChatterInternalUser: boolean;
    PermissionsChatterInviteExternalUsers: boolean;
    PermissionsChatterOwnGroups: boolean;
    PermissionsClauseDesigner: boolean;
    PermissionsClauseDEUser: boolean;
    PermissionsClauseUser: boolean;
    PermissionsClientSecretRotation: boolean;
    PermissionsCloseConversations: boolean;
    PermissionsCMSECEAuthoringAccess: boolean;
    PermissionsCommerceTaxApiUser: boolean;
    PermissionsConfigCustomRecs: boolean;
    PermissionsConfigureDataspaceScope: boolean;
    PermissionsConfigureLiveMessage: boolean;
    PermissionsConnectOrgToEnvironmentHub: boolean;
    PermissionsConsentApiUpdate: boolean;
    PermissionsContentAdministrator: boolean;
    PermissionsContentHubUser: boolean;
    PermissionsContentWorkspaces: boolean;
    PermissionsContextServiceAdmin: boolean;
    PermissionsContextServiceEmbedAdmin: boolean;
    PermissionsContextServiceRuntime: boolean;
    PermissionsConvertLeads: boolean;
    PermissionsCoreCPQUser: boolean;
    PermissionsCorePricingAdmin: boolean;
    PermissionsCorePricingDesignTimeUser: boolean;
    PermissionsCorePricingManager: boolean;
    PermissionsCorePricingRunTimeUser: boolean;
    PermissionsCosellAuthSetupUser: boolean;
    PermissionsCosellExportUser: boolean;
    PermissionsCreateAuditFields: boolean;
    PermissionsCreateCustomizeDashboards: boolean;
    PermissionsCreateCustomizeFilters: boolean;
    PermissionsCreateCustomizeReports: boolean;
    PermissionsCreateDashboardFolders: boolean;
    PermissionsCreateLtngTempFolder: boolean;
    PermissionsCreateLtngTempInPub: boolean;
    PermissionsCreatePackaging: boolean;
    PermissionsCreateReportFolders: boolean;
    PermissionsCreateReportInLightning: boolean;
    PermissionsCreateTopics: boolean;
    PermissionsCreateUpdateSDDDataset: boolean;
    PermissionsCreateUpdateSDDStory: boolean;
    PermissionsCreateWorkspaces: boolean;
    PermissionsCustomAppsOnFSMobile: boolean;
    PermissionsCustomizeApplication: boolean;
    PermissionsCustomMobileAppsAccess: boolean;
    PermissionsDataExport: boolean;
    PermissionsDataPipelinesAppConsumer: boolean;
    PermissionsDebugApex: boolean;
    PermissionsDecisionTableExecUserAccess: boolean;
    PermissionsDeferSharingCalculations: boolean;
    PermissionsDelegatedPortalUserAdmin: boolean;
    PermissionsDelegatedTwoFactor: boolean;
    PermissionsDeleteActivatedContract: boolean;
    PermissionsDeleteCrMemoAndInvoice: boolean;
    PermissionsDeleteTopics: boolean;
    PermissionsDerivedPricing: boolean;
    PermissionsDesignContextRule: boolean;
    PermissionsDfoAdminUser: boolean;
    PermissionsDFODesignerUser: boolean;
    PermissionsDFOManagerOperatorUser: boolean;
    PermissionsDigitalLendingAdminUser: boolean;
    PermissionsDigitalLendingEditReadOnly: boolean;
    PermissionsDigitalLendingUser: boolean;
    PermissionsDigitalLendingWorkbench: boolean;
    PermissionsDistributeFromPersWksp: boolean;
    PermissionsDocGenDesigner: boolean;
    PermissionsDocGenRuntimeCCUser: boolean;
    PermissionsDocGenRuntimeUser: boolean;
    PermissionsDownloadPackageVersionZips: boolean;
    PermissionsDROOrderSubmitInitiateUser: boolean;
    PermissionsEditActivatedOrders: boolean;
    PermissionsEditBillingInfo: boolean;
    PermissionsEditBrandTemplates: boolean;
    PermissionsEditCaseComments: boolean;
    PermissionsEditEvent: boolean;
    PermissionsEditHtmlTemplates: boolean;
    PermissionsEditKnowledge: boolean;
    PermissionsEditMyDashboards: boolean;
    PermissionsEditMyReports: boolean;
    PermissionsEditOppLineItemUnitPrice: boolean;
    PermissionsEditPublicDocuments: boolean;
    PermissionsEditPublicFilters: boolean;
    PermissionsEditPublicTemplates: boolean;
    PermissionsEditReadonlyFields: boolean;
    PermissionsEditTask: boolean;
    PermissionsEditTopics: boolean;
    PermissionsEditTranslation: boolean;
    PermissionsEinsteinReplyManager: boolean;
    PermissionsEmailAdministration: boolean;
    PermissionsEmailMass: boolean;
    PermissionsEmailSingle: boolean;
    PermissionsEmailTemplateManagement: boolean;
    PermissionsEmbeddedMessagingAgent: boolean;
    PermissionsEmployeeExperience: boolean;
    PermissionsEnableBCTransactionPolling: boolean;
    PermissionsEnableIPFSUpload: boolean;
    PermissionsEnablementAdmin: boolean;
    PermissionsEnablementUser: boolean;
    PermissionsEnableNotifications: boolean;
    PermissionsEngagementConfigUser: boolean;
    PermissionsEnhancedSalesMobileExp: boolean;
    PermissionsExplainabilityCmtyAccess: boolean;
    PermissionsExplainabilityUserAccess: boolean;
    PermissionsExportReport: boolean;
    PermissionsExternalClientAppAdmin: boolean;
    PermissionsExternalClientAppDeveloper: boolean;
    PermissionsExternalClientAppViewer: boolean;
    PermissionsFeedPinning: boolean;
    PermissionsFieldServiceAccess: boolean;
    PermissionsFieldServiceCopilotActions: boolean;
    PermissionsFieldServiceDispatcher: boolean;
    PermissionsFieldServiceLastMile: boolean;
    PermissionsFieldServiceMobileApp: boolean;
    PermissionsFieldServiceScheduling: boolean;
    PermissionsFinancialServices2UserAccess: boolean;
    PermissionsFlowUFLRequired: boolean;
    PermissionsForceTwoFactor: boolean;
    PermissionsFreezeUsers: boolean;
    PermissionsFSCAlertFrameworkUserAccess: boolean;
    PermissionsFSCArcGraphCommunityUser: boolean;
    PermissionsFSCComprehensiveUserAccess: boolean;
    PermissionsGetSmartDataDiscovery: boolean;
    PermissionsGetSmartDataDiscoveryExternal: boolean;
    PermissionsGiveRecognitionBadge: boolean;
    PermissionsGovernNetworks: boolean;
    PermissionsHasUnlimitedErbScoringRequests: boolean;
    PermissionsHasUnlimitedNBAExecutions: boolean;
    PermissionsHeadlessCMSAccess: boolean;
    PermissionsHeadlessConfiguratorUser: boolean;
    PermissionsHeadlessPublishNudges: boolean;
    PermissionsHideReadByList: boolean;
    PermissionsIdentityConnect: boolean;
    PermissionsIdentityEnabled: boolean;
    PermissionsIdentityVerificationUserAccess: boolean;
    PermissionsImportCustomObjects: boolean;
    PermissionsImportLeads: boolean;
    PermissionsImportPersonal: boolean;
    PermissionsInboundMigrationToolsUser: boolean;
    PermissionsIndustriesEpcNextPilot: boolean;
    PermissionsInsightsAppAdmin: boolean;
    PermissionsInsightsAppDashboardEditor: boolean;
    PermissionsInsightsAppEltEditor: boolean;
    PermissionsInsightsAppUploadUser: boolean;
    PermissionsInsightsAppUser: boolean;
    PermissionsInsightsCreateApplication: boolean;
    PermissionsInstallPackaging: boolean;
    PermissionsInteractionCalcAdminPerm: boolean;
    PermissionsInteractionCalcUserPerm: boolean;
    PermissionsInteractionObjStateDefUserPerm: boolean;
    PermissionsIsotopeAccess: boolean;
    PermissionsIsotopeCToCUser: boolean;
    PermissionsIsotopeLEX: boolean;
    PermissionsIsSsoEnabled: boolean;
    PermissionsLeadScoreResultPublisher: boolean;
    PermissionsLeadScoreUser: boolean;
    PermissionsLightningConsoleAllowedForUser: boolean;
    PermissionsLightningExperienceUser: boolean;
    PermissionsLightningOnFSMobile: boolean;
    PermissionsListEmailSend: boolean;
    PermissionsLiveMessageAgent: boolean;
    PermissionsLMEndMessagingSessionUserPerm: boolean;
    PermissionsLMOutboundMessagingUserPerm: boolean;
    PermissionsLobbyManagementUserAccess: boolean;
    PermissionsLtngPromoReserved01UserPerm: boolean;
    PermissionsManageAccessPolicies: boolean;
    PermissionsManageAgentforceServiceAgent: boolean;
    PermissionsManageAnalyticSnapshots: boolean;
    PermissionsManageAssets: boolean;
    PermissionsManageAuthProviders: boolean;
    PermissionsManageBusinessHourHolidays: boolean;
    PermissionsManageC2CHighVolumePriming: boolean;
    PermissionsManageC360AConnections: boolean;
    PermissionsManageCallCenters: boolean;
    PermissionsManageCases: boolean;
    PermissionsManageCategories: boolean;
    PermissionsManageCdpMlModels: boolean;
    PermissionsManageCertificates: boolean;
    PermissionsManageCertificatesExpiration: boolean;
    PermissionsManageChatterMessages: boolean;
    PermissionsManageCMS: boolean;
    PermissionsManageContentPermissions: boolean;
    PermissionsManageContentProperties: boolean;
    PermissionsManageContentTypes: boolean;
    PermissionsManageCssUsers: boolean;
    PermissionsManageCustomDomains: boolean;
    PermissionsManageCustomPermissions: boolean;
    PermissionsManageCustomReportTypes: boolean;
    PermissionsManageDashbdsInPubFolders: boolean;
    PermissionsManageDataCategories: boolean;
    PermissionsManageDataIntegrations: boolean;
    PermissionsManageDataProcessingEngine: boolean;
    PermissionsManageDataspaceScope: boolean;
    PermissionsManageDevSandboxes: boolean;
    PermissionsManageDynamicDashboards: boolean;
    PermissionsManageEmailClientConfig: boolean;
    PermissionsManageEntitlements: boolean;
    PermissionsManageExchangeConfig: boolean;
    PermissionsManageExternalConnections: boolean;
    PermissionsManageFilesAndAttachments: boolean;
    PermissionsManageHealthCheck: boolean;
    PermissionsManageHubConnections: boolean;
    PermissionsManageInAppGuidanceForSites: boolean;
    PermissionsManageIntegrationConnections: boolean;
    PermissionsManageInteraction: boolean;
    PermissionsManageInternalUsers: boolean;
    PermissionsManageIpAddresses: boolean;
    PermissionsManageKnowledge: boolean;
    PermissionsManageKnowledgeImportExport: boolean;
    PermissionsManageLeads: boolean;
    PermissionsManageLoginAccessPolicies: boolean;
    PermissionsManageMobile: boolean;
    PermissionsManageMobileAppSecurity: boolean;
    PermissionsManageNamedCredentials: boolean;
    PermissionsManageNetworks: boolean;
    PermissionsManageOrchestrationRuns: boolean;
    PermissionsManageOrchInstsAndWorkItems: boolean;
    PermissionsManagePartnerNetConn: boolean;
    PermissionsManagePartners: boolean;
    PermissionsManagePasswordPolicies: boolean;
    PermissionsManageProductCatalog: boolean;
    PermissionsManageProductDiscovery: boolean;
    PermissionsManageProductIndexAndSearch: boolean;
    PermissionsManageProfilesPermissionsets: boolean;
    PermissionsManagePropositions: boolean;
    PermissionsManagePvtRptsAndDashbds: boolean;
    PermissionsManageRecommendationStrategies: boolean;
    PermissionsManageReleaseUpdates: boolean;
    PermissionsManageRemoteAccess: boolean;
    PermissionsManageReportsInPubFolders: boolean;
    PermissionsManageRoles: boolean;
    PermissionsManageSandboxes: boolean;
    PermissionsManageSearchPromotionRules: boolean;
    PermissionsManageSelfService: boolean;
    PermissionsManageSessionPermissionSets: boolean;
    PermissionsManageSharing: boolean;
    PermissionsManageSmartDataDiscovery: boolean;
    PermissionsManageSmartDataDiscoveryModel: boolean;
    PermissionsManageSolutions: boolean;
    PermissionsManageSubscriptions: boolean;
    PermissionsManageSurveys: boolean;
    PermissionsManageSvcCatalog: boolean;
    PermissionsManageSynonyms: boolean;
    PermissionsManageTemplatedApp: boolean;
    PermissionsManageTerritories: boolean;
    PermissionsManageTranslation: boolean;
    PermissionsManageTrustMeasures: boolean;
    PermissionsManageTwoFactor: boolean;
    PermissionsManageUnlistedGroups: boolean;
    PermissionsManageUsers: boolean;
    PermissionsMassInlineEdit: boolean;
    PermissionsMergeTopics: boolean;
    PermissionsMetadataStudioUser: boolean;
    PermissionsMicrobatching: boolean;
    PermissionsMobileAppSecurity: boolean;
    PermissionsMobileMessagingAgent: boolean;
    PermissionsModerateChatter: boolean;
    PermissionsModerateNetworkFeeds: boolean;
    PermissionsModerateNetworkFiles: boolean;
    PermissionsModerateNetworkMessages: boolean;
    PermissionsModerateNetworkUsers: boolean;
    PermissionsModifyAllData: boolean;
    PermissionsModifyDataClassification: boolean;
    PermissionsModifyMetadata: boolean;
    PermissionsMonitorLoginHistory: boolean;
    PermissionsNativeWebviewScrolling: boolean;
    PermissionsNewReportBuilder: boolean;
    PermissionsObligationAssignee: boolean;
    PermissionsObligationDEAssignee: boolean;
    PermissionsObligationDEManager: boolean;
    PermissionsObligationDEUser: boolean;
    PermissionsObligationManager: boolean;
    PermissionsObligationUser: boolean;
    PermissionsOmniStudioDesigner: boolean;
    PermissionsOmniStudioRuntime: boolean;
    PermissionsOmniStudioRuntimeCC: boolean;
    PermissionsOmniSupervisorManageQueue: boolean;
    PermissionsOpportunityScoreUser: boolean;
    PermissionsOptOutGeoLocationTracking: boolean;
    PermissionsOrderSubmitUser: boolean;
    PermissionsOrgPerformanceAccess: boolean;
    PermissionsOutboundMigrationToolsUser: boolean;
    PermissionsPackaging2: boolean;
    PermissionsPackaging2Delete: boolean;
    PermissionsPasswordNeverExpires: boolean;
    PermissionsPerformanceAnalysisAccess: boolean;
    PermissionsPersonalizationIntelUser: boolean;
    PermissionsPersonalizationPlatform: boolean;
    PermissionsPersonalizedFinanceUserAccess: boolean;
    PermissionsPipelineInspectorUser: boolean;
    PermissionsPortalSuperUser: boolean;
    PermissionsPreventClassicExperience: boolean;
    PermissionsPreviewExperienceUser: boolean;
    PermissionsPricingDiscovery: boolean;
    PermissionsPrismPlaygroundUser: boolean;
    PermissionsPrivacyDataAccess: boolean;
    PermissionsPRMChannelMgmtConsoleUser: boolean;
    PermissionsPrmExtIntPrtnrAdminUser: boolean;
    PermissionsProductAdmin: boolean;
    PermissionsProductCatalogApiAccess: boolean;
    PermissionsProductCatalogMgmtApiCCAccess: boolean;
    PermissionsProductCatalogMgmtApiPCAccess: boolean;
    PermissionsProductCatalogMgmtBaseCCUser: boolean;
    PermissionsProductCatalogMgmtBasePCUser: boolean;
    PermissionsProductConfigurationRuleAccess: boolean;
    PermissionsProductConfiguratorUser: boolean;
    PermissionsProductDiscoveryUser: boolean;
    PermissionsPublishArticles: boolean;
    PermissionsPublishPackaging: boolean;
    PermissionsPublishTranslation: boolean;
    PermissionsQueryAllFiles: boolean;
    PermissionsQueryNonVetoedFiles: boolean;
    PermissionsQuipMetricsAccess: boolean;
    PermissionsQuipUserEngagementMetrics: boolean;
    PermissionsQuoteToOrderUser: boolean;
    PermissionsReassignOrchestrationWorkItems: boolean;
    PermissionsRecordVisibilityAPI: boolean;
    PermissionsRenewAssets: boolean;
    PermissionsReplyRecommendationUser: boolean;
    PermissionsResetPasswords: boolean;
    PermissionsRunCatalogItemsOnBehalfOf: boolean;
    PermissionsRunContextRule: boolean;
    PermissionsRunDecisionMatrix: boolean;
    PermissionsRunExpressionSet: boolean;
    PermissionsRunFlow: boolean;
    PermissionsRunReports: boolean;
    PermissionsSalesConsole: boolean;
    PermissionsSalesforceIQInbox: boolean;
    PermissionsSalesforceIQInternal: boolean;
    PermissionsSalesforceMeetingsUserPerm: boolean;
    PermissionsSandboxTestingInCommunityApp: boolean;
    PermissionsSCEViewAllData: boolean;
    PermissionsScheduleJob: boolean;
    PermissionsScheduleReports: boolean;
    PermissionsSegmentIntelligenceUser: boolean;
    PermissionsSelectFilesFromSalesforce: boolean;
    PermissionsSendAnnouncementEmails: boolean;
    PermissionsSendCustomNotifications: boolean;
    PermissionsSendSitRequests: boolean;
    PermissionsServiceAnalyticsUser: boolean;
    PermissionsServiceECIUser: boolean;
    PermissionsServiceExcellencePlatformUser: boolean;
    PermissionsShareFilesWithNetworks: boolean;
    PermissionsShareInternalArticles: boolean;
    PermissionsShareSmartDataDiscoveryStory: boolean;
    PermissionsShowCompanyNameAsUserBadge: boolean;
    PermissionsShowPreWorkBriefGA: boolean;
    PermissionsSimpleCsvDataImportUser: boolean;
    PermissionsSkipIdentityConfirmation: boolean;
    PermissionsSmartDataDiscoveryForCommunity: boolean;
    PermissionsSolutionImport: boolean;
    PermissionsSonicConsumer: boolean;
    PermissionsStageManagementDesignUser: boolean;
    PermissionsStdAutomaticActivityCapture: boolean;
    PermissionsStoryOnDSWithPredicate: boolean;
    PermissionsSubmitForTranslation: boolean;
    PermissionsSubmitMacrosAllowed: boolean;
    PermissionsSubscribeDashboardRolesGrps: boolean;
    PermissionsSubscribeDashboardToOtherUsers: boolean;
    PermissionsSubscribeReportRolesGrps: boolean;
    PermissionsSubscribeReportsRunAsUser: boolean;
    PermissionsSubscribeReportToOtherUsers: boolean;
    PermissionsSubscribeToLightningDashboards: boolean;
    PermissionsSubscribeToLightningReports: boolean;
    PermissionsTagManager: boolean;
    PermissionsTakePartnerProgram: boolean;
    PermissionsTraceXdsQueries: boolean;
    PermissionsTransactionalEmailSend: boolean;
    PermissionsTransferAnyCase: boolean;
    PermissionsTransferAnyEntity: boolean;
    PermissionsTransferAnyLead: boolean;
    PermissionsTwoFactorApi: boolean;
    PermissionsUpdateReportTypeReferences: boolean;
    PermissionsUpdateWithInactiveOwner: boolean;
    PermissionsUsageDesignUser: boolean;
    PermissionsUseAnyApiClient: boolean;
    PermissionsUseAssistantDialog: boolean;
    PermissionsUseFulfillmentAPIs: boolean;
    PermissionsUseMySearch: boolean;
    PermissionsUsePartnerMessagingChannels: boolean;
    PermissionsUseQuerySuggestions: boolean;
    PermissionsUseServiceCatalogForGuest: boolean;
    PermissionsUseServicePartReturn: boolean;
    PermissionsUseSmartDataDiscovery: boolean;
    PermissionsUseSubscriptionEmails: boolean;
    PermissionsUseSvcCatalog: boolean;
    PermissionsUseTeamReassignWizards: boolean;
    PermissionsUseTemplatedApp: boolean;
    PermissionsUseWebLink: boolean;
    PermissionsVideoConferenceMeetUser: boolean;
    PermissionsVideoConferenceTeamsUser: boolean;
    PermissionsVideoConferenceZoomUser: boolean;
    PermissionsViewAccessPolicies: boolean;
    PermissionsViewAllActivities: boolean;
    PermissionsViewAllCalls: boolean;
    PermissionsViewAllCustomSettings: boolean;
    PermissionsViewAllData: boolean;
    PermissionsViewAllForeignKeyNames: boolean;
    PermissionsViewAllProfiles: boolean;
    PermissionsViewAllUsers: boolean;
    PermissionsViewArchivedArticles: boolean;
    PermissionsViewClientSecret: boolean;
    PermissionsViewContent: boolean;
    PermissionsViewCustomerSentiment: boolean;
    PermissionsViewDataAssessment: boolean;
    PermissionsViewDataCategories: boolean;
    PermissionsViewDeveloperName: boolean;
    PermissionsViewDraftArticles: boolean;
    PermissionsViewEncryptedData: boolean;
    PermissionsViewEventLogFiles: boolean;
    PermissionsViewForecastingPredictive: boolean;
    PermissionsViewGlobalHeader: boolean;
    PermissionsViewHealthCheck: boolean;
    PermissionsViewHelpLink: boolean;
    PermissionsViewInAppGuidanceForSites: boolean;
    PermissionsViewMLModels: boolean;
    PermissionsViewMyTeamsDashboards: boolean;
    PermissionsViewOnlyEmbeddedAppUser: boolean;
    PermissionsViewOrchestrationsInAutomApp: boolean;
    PermissionsViewPrivateStaticResources: boolean;
    PermissionsViewProductCatalogObjects: boolean;
    PermissionsViewPublicDashboards: boolean;
    PermissionsViewPublicReports: boolean;
    PermissionsViewRecommendations: boolean;
    PermissionsViewRestrictionAndScopingRules: boolean;
    PermissionsViewRoles: boolean;
    PermissionsViewSetup: boolean;
    PermissionsViewTrustMeasures: boolean;
    PermissionsViewUserPII: boolean;
    PermissionsWaveCommunityUser: boolean;
    PermissionsWaveManagePrivateAssetsUser: boolean;
    PermissionsWaveTabularDownload: boolean;
    PermissionsWaveTrendReports: boolean;
    PermissionsYourAccountCDAPublishEvents: boolean;
    SystemModstamp: string;
}