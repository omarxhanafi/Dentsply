// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Geopointe Folder</b></h3>
 * <p>Folder for Geopointe objects such as Data Sets.</p>
 */
declare interface geopointe__GP_Folder__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link geopointe__GP_Folder__c.geopointe__Parent_Folder__c}.
     */
    Child_Folders__r?: geopointe__GP_Folder__c[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * The reciprocal relationship for {@link geopointe__Data_Set_Object__c.geopointe__Folder__c}.
     */
    Data_Sets__r?: geopointe__Data_Set_Object__c[];
    /**
     * The reciprocal relationship for {@link geopointe__GP_Demographics__c.geopointe__Folder__c}.
     */
    Demographics__r?: geopointe__GP_Demographics__c[];
    /**
     * The reciprocal relationship for {@link geopointe__Geo_Location__c.geopointe__Folder__c}.
     */
    Geo_Locations__r?: geopointe__Geo_Location__c[];
    /**
     * <h3><b>Inherit Sharing</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    geopointe__Inherit_Sharing__c?: boolean;
    /**
     * <h3><b>Parent Folder</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link geopointe__GP_Folder__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__Parent_Folder__c?: string;
    /**
     * <h3><b>Parent Folder</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link geopointe__GP_Folder__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__Parent_Folder__r?: geopointe__GP_Folder__c;
    /**
     * <h3><b>Personal</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    geopointe__Personal__c?: boolean;
    /**
     * <h3><b>Scorecard Integration</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__Scorecard_Integration__c?: string;
    /**
     * <h3><b>Type</b></h3>
     * <p>The type of objects contained in this folder</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Data Set</code></td><td>Data Set</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Shape</code></td><td>Shape</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    geopointe__Type__c?: string;
    /**
     * The reciprocal relationship for {@link geopointe__Shape__c.geopointe__Folder__c}.
     */
    Geopointe_Shapes__r?: geopointe__Shape__c[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * The reciprocal relationship for {@link geopointe__Layer__c.geopointe__Folder__c}.
     */
    Layers__r?: geopointe__Layer__c[];
    /**
     * The reciprocal relationship for {@link geopointe__GP_Map_Layer__c.geopointe__Folder__c}.
     */
    Map_Layers__r?: geopointe__GP_Map_Layer__c[];
    Name?: string;
}