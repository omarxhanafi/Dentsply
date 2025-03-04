// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ERPIntegrationUploadResult__ChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>ERP Integration Data Flow Run</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ERPIntegrationDataFlowRun__c})</td></tr>
     * </table>
     */
    ERPIntegrationDataFlowRun__c?: string;
    /**
     * <h3><b>ERP Integration Data Flow Run</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ERPIntegrationDataFlowRun__c})</td></tr>
     * </table>
     */
    ERPIntegrationDataFlowRun__r?: ERPIntegrationDataFlowRun__c;
    /**
     * <h3><b>Error</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * </table>
     */
    Error__c?: string;
    /**
     * <h3><b>External ID</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ExternalID__c?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
}