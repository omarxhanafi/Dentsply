// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniProcessElement extends SObject 
{
    ChildElements?: OmniProcessElement[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    DesignerCustomizationType?: string;
    DiscoveryFrameworkUsageType?: string;
    EmbeddedOmniScriptKey?: string;
    IsActive?: boolean;
    IsDeleted?: boolean;
    IsOmniScriptEmbeddable?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Level?: number;
    Name?: string;
    OmniProcess?: OmniProcess;
    OmniProcessId?: string;
    OmniProcessVersionNumber?: number;
    ParentElement?: OmniProcessElement;
    ParentElementId?: string;
    ParentElementName?: string;
    ParentElementType?: string;
    PropertySetConfig?: string;
    RelatedRecord?: FlowRecordRelation;
    SequenceNumber?: number;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
}