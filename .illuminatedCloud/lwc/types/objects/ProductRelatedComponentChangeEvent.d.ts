// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductRelatedComponentChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    ChildProduct: Product2;
    ChildProductClassification: ProductClassification;
    ChildProductClassificationId: string;
    ChildProductId: string;
    ChildProductRole: string;
    ChildSellingModel: ProductSellingModel;
    ChildSellingModelId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DoesBundlePriceIncludeChild: boolean;
    IsComponentRequired: boolean;
    IsDefaultComponent: boolean;
    IsQuantityEditable: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MaxQuantity: number;
    MinQuantity: number;
    Name: string;
    ParentProduct: Product2;
    ParentProductId: string;
    ParentProductRole: string;
    ParentSellingModel: ProductSellingModel;
    ParentSellingModelId: string;
    ProductComponentGroup: ProductComponentGroup;
    ProductComponentGroupId: string;
    ProductRelationshipType: ProductRelationshipType;
    ProductRelationshipTypeId: string;
    Quantity: number;
    QuantityScaleMethod: string;
    ReplayId: string;
    Sequence: number;
}