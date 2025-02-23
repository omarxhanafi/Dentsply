// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Individual extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.ConsentGiverId}.
     */
    AuthorizationFormConsents?: AuthorizationFormConsent[];
    BirthDate?: Date;
    CanStorePiiElsewhere?: boolean;
    ChildrenCount?: number;
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.ConsentGiverId}.
     */
    CommSubscriptionConsents?: CommSubscriptionConsent[];
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.ConsentGiverId}.
     */
    ConsentGiver?: AuthorizationFormConsent;
    ConsumerCreditScore?: number;
    ConsumerCreditScoreProviderName?: string;
    /**
     * The reciprocal relationship for {@link ContactPointAddress.ParentId}.
     */
    ContactPointAddresses?: ContactPointAddress[];
    /**
     * The reciprocal relationship for {@link ContactPointEmail.ParentId}.
     */
    ContactPointEmails?: ContactPointEmail[];
    /**
     * The reciprocal relationship for {@link ContactPointPhone.ParentId}.
     */
    ContactPointPhones?: ContactPointPhone[];
    Contacts?: Contact[];
    ContextRecord?: FlowExecutionErrorEvent;
    ConvictionsCount?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeathDate?: Date;
    /**
     * The reciprocal relationship for {@link DuplicateRecordItem.RecordId}.
     */
    DuplicateRecordItems?: DuplicateRecordItem[];
    FirstName?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    HasOptedOutGeoTracking?: boolean;
    HasOptedOutProcessing?: boolean;
    HasOptedOutProfiling?: boolean;
    HasOptedOutSolicit?: boolean;
    HasOptedOutTracking?: boolean;
    Histories?: IndividualHistory[];
    Individual?: ContactChangeEvent;
    /**
     * The reciprocal relationship for {@link ContactPointTypeConsent.PartyId}.
     */
    Individuals?: ContactPointTypeConsent[];
    IndividualsAge?: string;
    InfluencerRating?: number;
    IsDeleted?: boolean;
    IsHomeOwner?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastName?: string;
    LastViewedDate?: string;
    Leads?: Lead[];
    MasterRecord?: Individual;
    MasterRecordId?: string;
    MilitaryService?: string;
    Name?: string;
    Occupation?: string;
    Owner?: User;
    OwnerId?: string;
    /**
     * The reciprocal relationship for {@link ContactPointAddress.ParentId}.
     */
    Parent?: ContactPointAddress;
    Party?: CommSubscriptionConsent;
    /**
     * The reciprocal relationship for {@link PartyConsent.PartyId}.
     */
    PartyConsents?: PartyConsent[];
    /**
     * The reciprocal relationship for {@link Customer.PartyId}.
     */
    PartyRoleCustomers?: Customer[];
    /**
     * The reciprocal relationship for {@link Seller.PartyId}.
     */
    PartyRoleSellers?: Seller[];
    /**
     * The reciprocal relationship for {@link Account.PersonIndividualId}.
     */
    PersonIndividual?: Account;
    RelatedRecord?: FlowRecordRelation;
    Salutation?: string;
    SendIndividualData?: boolean;
    Shares?: IndividualShare[];
    ShouldForget?: boolean;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Website?: string;
}