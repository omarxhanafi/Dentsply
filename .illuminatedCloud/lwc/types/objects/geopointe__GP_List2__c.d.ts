// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Geopointe List</b></h3>
 * <p>Working list for a user to keep track of records they want to visit.</p>
 */
declare interface geopointe__GP_List2__c extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * <h3><b>Is Archived</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    geopointe__Is_Archived__c?: boolean;
    /**
     * <h3><b>Is Completed</b></h3>
     * <p>Status of the list - completed or not completed.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    geopointe__Is_Completed__c?: boolean;
    /**
     * <h3><b>Color</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">&quot;FF0000&quot;</code></td></tr>
     * </table>
     */
    geopointe__Marker_Color__c?: string;
    /**
     * The reciprocal relationship for {@link geopointe__GP_List_Assignment2__c.geopointe__GP_List2__c}.
     */
    Geopointe_List_Assignment__r?: geopointe__GP_List_Assignment2__c[];
    /**
     * The reciprocal relationship for {@link geopointe__GP_List_Tag2__c.geopointe__GP_List2__c}.
     */
    Geopointe_List_Tag_List__r?: geopointe__GP_List_Tag2__c[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
}