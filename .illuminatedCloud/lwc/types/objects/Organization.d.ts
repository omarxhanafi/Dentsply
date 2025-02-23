// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Organization extends SObject 
{
    Address?: Address;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    City?: string;
    CombinedAttachments?: CombinedAttachment[];
    ComplianceBccEmail?: string;
    Container?: Audience;
    ContentDocumentLinks?: ContentDocumentLink[];
    Country?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomBrands?: CustomBrand[];
    DefaultAccountAccess?: string;
    DefaultCalendarAccess?: string;
    DefaultCampaignAccess?: string;
    DefaultCaseAccess?: string;
    DefaultContactAccess?: string;
    DefaultLeadAccess?: string;
    DefaultLocaleSidKey?: string;
    DefaultOpportunityAccess?: string;
    DefaultPricebookAccess?: string;
    DelegatedAuthenticationServiceUrl?: string;
    Division?: string;
    Fax?: string;
    FirstPublishLocation?: ContentVersion;
    FiscalYearStartMonth?: number;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Folder?: EmailTemplate;
    GeocodeAccuracy?: string;
    InstanceName?: string;
    IsReadOnly?: boolean;
    IsSandbox?: boolean;
    LanguageLocaleKey?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Latitude?: number;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Longitude?: number;
    MonthlyPageViewsEntitlement?: number;
    MonthlyPageViewsUsed?: number;
    Name?: string;
    NamespacePrefix?: string;
    NumKnowledgeService?: number;
    OmniInteractionAccessConfigs?: OmniInteractionAccessConfig[];
    OrganizationType?: string;
    Owner?: Group;
    Parent?: ReputationLevel;
    Phone?: string;
    PostalCode?: string;
    PreferencesAutoSelectIndividualOnMerge?: boolean;
    PreferencesConsentManagementEnabled?: boolean;
    PreferencesEmailSenderIdCompliance?: boolean;
    PreferencesLightningLoginEnabled?: boolean;
    PreferencesOnlyLLPermUserAllowed?: boolean;
    PreferencesRequireOpportunityProducts?: boolean;
    PrimaryContact?: string;
    ReceivesAdminInfoEmails?: boolean;
    ReceivesInfoEmails?: boolean;
    SignupCountryIsoCode?: string;
    State?: string;
    Street?: string;
    SystemModstamp?: string;
    TimeZoneSidKey?: string;
    TrialExpirationDate?: string;
    UiSkin?: string;
    UsesStartDateAsFiscalYearName?: boolean;
    WebToCaseDefaultOrigin?: string;
}