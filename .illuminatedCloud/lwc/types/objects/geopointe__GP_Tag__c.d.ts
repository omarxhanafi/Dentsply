// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Geopointe Tag</b></h3>
 * <p>Geopointe Tag to be used for filtering purposes</p>
 */
declare interface geopointe__GP_Tag__c extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    /**
     * The reciprocal relationship for {@link geopointe__GP_List__c.geopointe__GP_List_Tag__c}.
     */
    Geopointe_List_List_tag__r: geopointe__GP_List__c[];
    /**
     * The reciprocal relationship for {@link geopointe__GP_List_Tag2__c.geopointe__GP_Tag__c}.
     */
    Geopointe_List_Tag_Tag2__r: geopointe__GP_List_Tag2__c[];
    /**
     * The reciprocal relationship for {@link geopointe__GP_List_Tag__c.geopointe__GP_Tag__c}.
     */
    Geopointe_List_Tag_Tag__r: geopointe__GP_List_Tag__c[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
}