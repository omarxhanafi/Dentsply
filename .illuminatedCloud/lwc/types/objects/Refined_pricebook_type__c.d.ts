// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Refined pricebook type</b></h3>
 */
declare interface Refined_pricebook_type__c extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    /**
     * The reciprocal relationship for {@link Refined_pricebook_connection__c.Refined_pricebook_type__c}.
     */
    Refined_pricebook_connections__r?: Refined_pricebook_connection__c[];
    /**
     * The reciprocal relationship for {@link Refined_pricebook_items__c.Refined_pricebook_type__c}.
     */
    Refined_pricebook_items__r?: Refined_pricebook_items__c[];
}