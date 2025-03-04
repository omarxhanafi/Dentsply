// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductRelationshipType extends SObject 
{
    AssociatedProductRoleCat?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    MainProductRoleCat?: string;
    Name?: string;
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ProductRelationshipTypeId}.
     */
    ProductRelatedComponents?: ProductRelatedComponent[];
    /**
     * The reciprocal relationship for {@link ProductRelatedComponent.ProductRelationshipTypeId}.
     */
    ProductRelationshipType?: ProductRelatedComponent;
    RelatedRecord?: FlowRecordRelation;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}