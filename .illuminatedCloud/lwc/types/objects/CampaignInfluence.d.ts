// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CampaignInfluence extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    Campaign?: Campaign;
    CampaignId?: string;
    CampaignMember?: CampaignMember;
    CampaignMemberId?: string;
    Contact?: Contact;
    ContactId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Influence?: number;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Model?: CampaignInfluenceModel;
    ModelId?: string;
    Opportunity?: Opportunity;
    OpportunityContactRole?: OpportunityContactRole;
    OpportunityContactRoleId?: string;
    OpportunityId?: string;
    RelatedRecord?: FlowRecordRelation;
    RevenueShare?: number;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}