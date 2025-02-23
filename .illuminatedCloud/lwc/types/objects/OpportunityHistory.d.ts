// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityHistory extends SObject 
{
    Amount?: number;
    CloseDate?: Date;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    ExpectedRevenue?: number;
    ForecastCategory?: string;
    IsDeleted?: boolean;
    LastAmountChangedHistory?: OpportunityChangeEvent;
    LastCloseDateChangedHistory?: OpportunityChangeEvent;
    OpportunitiesAmountChanged?: Opportunity[];
    OpportunitiesCloseDateChanged?: Opportunity[];
    Opportunity?: Opportunity;
    OpportunityId?: string;
    PrevAmount?: number;
    PrevCloseDate?: Date;
    Probability?: number;
    StageName?: string;
    SystemModstamp?: string;
}