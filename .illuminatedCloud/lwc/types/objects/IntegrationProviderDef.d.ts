// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IntegrationProviderDef extends SObject 
{
    ApexClass?: ApexClass;
    ApexClassId?: string;
    CanUseInIntegrationOrch?: boolean;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    ExternalServiceOperationName?: string;
    FalloutRules?: FulfillmentFalloutRule[];
    FileBasedApexClass?: string;
    FulfillmentStepDefinitions?: FulfillmentStepDefinition[];
    FulfillmentStepJeopardyRules?: FulfillmentStepJeopardyRule[];
    FulfillmentSteps?: FulfillmentStep[];
    InputDataProcessor?: OmniIntegrationProcConfig;
    InputDataProcessorId?: string;
    IntegrationDefinitionName?: FulfillmentStepChangeEvent;
    /**
     * The reciprocal relationship for {@link IntegrationProviderAttr.IntegrationProviderDefId}.
     */
    IntegrationProviderAttrs?: IntegrationProviderAttr[];
    /**
     * The reciprocal relationship for {@link IntegrationProviderDcsnRqmt.IntegrationProviderDefId}.
     */
    IntegrationProviderDcsnRqmts?: IntegrationProviderDcsnRqmt[];
    /**
     * The reciprocal relationship for {@link IntegrationProviderDcsnRqmt.IntegrationProviderDefId}.
     */
    IntegrationProviderDef?: IntegrationProviderDcsnRqmt;
    /**
     * The reciprocal relationship for {@link IntegrationProviderExecution.IntegrationProviderDefId}.
     */
    IntegrationProviderExecutions?: IntegrationProviderExecution[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    IsManual?: boolean;
    IsServiceTypeIntegration?: boolean;
    JavaClassName?: string;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    OmniUiCardConfig?: OmniUiCardConfig;
    OmniUiCardConfigId?: string;
    OutputDataProcessor?: OmniIntegrationProcConfig;
    OutputDataProcessorId?: string;
    StorePayload?: string;
    SystemModstamp?: string;
    Type?: string;
}