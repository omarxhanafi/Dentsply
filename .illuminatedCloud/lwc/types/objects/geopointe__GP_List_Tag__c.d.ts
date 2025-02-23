// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Geopointe List Tag (Deprecated)</b></h3>
 * <p>Geopointe List Tag which connects a List to a Tag</p>
 */
declare interface geopointe__GP_List_Tag__c extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * <h3><b>Geopointe List</b></h3>
     * <p>Geopointe list that the list tag belongs to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link geopointe__GP_List__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__GP_List__c?: string;
    /**
     * <h3><b>Geopointe List</b></h3>
     * <p>Geopointe list that the list tag belongs to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link geopointe__GP_List__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__GP_List__r?: geopointe__GP_List__c;
    /**
     * <h3><b>Geopointe Tag</b></h3>
     * <p>Geopointe tag that the list tag relates to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link geopointe__GP_Tag__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__GP_Tag__c?: string;
    /**
     * <h3><b>Geopointe Tag</b></h3>
     * <p>Geopointe tag that the list tag relates to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link geopointe__GP_Tag__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    geopointe__GP_Tag__r?: geopointe__GP_Tag__c;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
}