// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SiteMarketingDataExtensionMapping extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    IsActive?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MarketingDataExtension?: string;
    MarketingDataExtensionFieldsSchema?: string;
    MarketingMemberIdentification?: string;
    MarketingTenantSpecificAuthEndpoint?: string;
    MarketingTenantSpecificRestEndpoint?: string;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    Site?: Site;
    SiteId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}