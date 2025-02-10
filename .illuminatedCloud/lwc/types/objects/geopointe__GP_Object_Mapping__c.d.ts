// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Geopointe Object Mapping</b></h3>
 * <p>Global Business &amp; People Layers is no longer a part of Geopointe.</p>
 */
declare interface geopointe__GP_Object_Mapping__c extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    /**
     * <h3><b>Geopointe Object</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__Geopointe_Object__c: string;
    /**
     * <h3><b>Sfdc Object</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__Sfdc_Object__c: string;
    /**
     * The reciprocal relationship for {@link geopointe__GP_Default_Mapping__c.geopointe__Geopointe_Object_Mapping__c}.
     */
    Geopointe_Default_Mappings__r: geopointe__GP_Default_Mapping__c[];
    /**
     * The reciprocal relationship for {@link geopointe__GP_Field_Mapping__c.geopointe__Geopointe_Object_Mapping__c}.
     */
    Geopointe_Field_Mappings__r: geopointe__GP_Field_Mapping__c[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
}