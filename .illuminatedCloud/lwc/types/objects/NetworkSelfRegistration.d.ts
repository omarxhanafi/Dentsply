// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NetworkSelfRegistration extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ApexHandler?: ApexClass;
    ApexHandlerId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    ExecuteApexHandlerAs?: User;
    ExecuteApexHandlerAsId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Network?: Network;
    NetworkId?: string;
    OptionsDisableStandardRgstrComponent?: boolean;
    OptionsIncludePassword?: boolean;
    OptionsShowEmail?: boolean;
    OptionsShowFirstName?: boolean;
    OptionsShowLastName?: boolean;
    OptionsShowMobilePhone?: boolean;
    OptionsShowNickname?: boolean;
    OptionsShowUsername?: boolean;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    VerificationMethod?: string;
}