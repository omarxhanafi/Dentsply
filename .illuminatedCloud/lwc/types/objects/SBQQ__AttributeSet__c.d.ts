// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Attribute Set</b></h3>
 */
declare interface SBQQ__AttributeSet__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link SBQQ__ProductAttributeSet__c.SBQQ__AttributeSet__c}.
     */
    Attribute_Sets__r: SBQQ__ProductAttributeSet__c[];
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * The reciprocal relationship for {@link SBQQ__ProductAttribute__c.SBQQ__AttributeSet__c}.
     */
    Product_Attributes__r: SBQQ__ProductAttribute__c[];
}