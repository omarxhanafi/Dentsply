// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AccountTeamMember extends SObject 
{
    Account?: Account;
    AccountAccessLevel?: string;
    AccountId?: string;
    CaseAccessLevel?: string;
    ContactAccessLevel?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    OpportunityAccessLevel?: string;
    PhotoUrl?: string;
    RelatedRecord?: FlowRecordRelation;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TeamMemberRole?: string;
    Title?: string;
    User?: User;
    UserId?: string;
}