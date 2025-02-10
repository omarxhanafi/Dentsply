// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Service Cloud: Assignment Rule</b></h3>
 * <p>To assign cases created by the sales reps to the right queue based on Account Country and Product Group/Line TFUS-000003229</p>
 */
declare interface ServiceCloudAssignmentRules__mdt extends SObject 
{
    /**
     * <h3><b>Account Country</b></h3>
     * <p>Account Country Code</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AccountCountry__c: string;
    /**
     * <h3><b>Assigned Queue</b></h3>
     * <p>Assigned Queue Id</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(200)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AssignedQueue__c: string;
    DeveloperName: string;
    Label: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string;
    /**
     * <h3><b>Product Group</b></h3>
     * <p>Product Group Values</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductGroup__c: string;
    /**
     * <h3><b>Product Line</b></h3>
     * <p>Product Line Values</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductLine__c: string;
    QualifiedApiName: string;
    SystemModstamp: string;
}