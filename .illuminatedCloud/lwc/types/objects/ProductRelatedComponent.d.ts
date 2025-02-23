// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductRelatedComponent extends SObject 
{
    AssetRelationships?: AssetRelationship[];
    ChildProduct?: Product2;
    ChildProductClassification?: ProductClassification;
    ChildProductClassificationId?: string;
    ChildProductId?: string;
    ChildProductRole?: string;
    ChildSellingModel?: ProductSellingModel;
    ChildSellingModelId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DoesBundlePriceIncludeChild?: boolean;
    IsComponentRequired?: boolean;
    IsDefaultComponent?: boolean;
    IsDeleted?: boolean;
    IsQuantityEditable?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    MaxQuantity?: number;
    MinQuantity?: number;
    Name?: string;
    OrderItemRelationships?: OrderItemRelationship[];
    ParentProduct?: Product2;
    ParentProductId?: string;
    ParentProductRole?: string;
    ParentSellingModel?: ProductSellingModel;
    ParentSellingModelId?: string;
    ProductComponentGroup?: ProductComponentGroup;
    ProductComponentGroupId?: string;
    ProductRelatedComponent?: AssetRelationshipChangeEvent;
    /**
     * The reciprocal relationship for {@link ProductRelComponentOverride.ProductRelatedComponentId}.
     */
    ProductRelatedComponentId?: ProductRelComponentOverride[];
    ProductRelationshipType?: ProductRelationshipType;
    ProductRelationshipTypeId?: string;
    Quantity?: number;
    QuantityScaleMethod?: string;
    QuoteLineRelationships?: QuoteLineRelationship[];
    RelatedRecord?: FlowRecordRelation;
    Sequence?: number;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}