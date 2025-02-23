// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductRequestChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Case?: Case;
    CaseId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    DestinationLocation?: Location;
    DestinationLocationId?: string;
    /**
     * <h3><b>ERPJSON Version</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    ERPJSONVersion__c?: number;
    /**
     * <h3><b>ERP Order Number</b></h3>
     * <p>The ERP Number from ERP - populated by integration based on Audit Logs in AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPOrderNumber__c?: string;
    /**
     * <h3><b>ERP Order Status</b></h3>
     * <p>Shows the status of the order in ERP - comes from the integration from Audit Logs in AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPOrderStatus__c?: string;
    /**
     * <h3><b>ERP Return Message</b></h3>
     * <p>Will show the return message from ERP from the integrations. Can show both success messages as well as Error messages. Info Comes from Audit Logs in AX.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(1000)</td></tr>
     * </table>
     */
    ERPReturnMessage__c?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    NeedByDate?: string;
    /**
     * <h3><b>Org Id</b></h3>
     * <p>This field is use to show send to ERP button only in prod org</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">$Organization.Id</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OrgId__c?: string;
    Owner?: User;
    OwnerId?: string;
    ProductRequestNumber?: string;
    ReplayId?: string;
    /**
     * <h3><b>Send To ERP Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SendToERPDate__c?: string;
    ShipmentType?: string;
    ShipToAddress?: Address;
    ShipToCity?: string;
    ShipToCountry?: string;
    ShipToGeocodeAccuracy?: string;
    ShipToLatitude?: number;
    ShipToLongitude?: number;
    ShipToPostalCode?: string;
    ShipToState?: string;
    ShipToStreet?: string;
    SourceLocation?: Location;
    SourceLocationId?: string;
    Status?: string;
    /**
     * <h3><b>Customer Request Number</b></h3>
     * <p>Combination fields to be sent to AX. (InventTransferTable.CustomerReqNumber_DNT)
     * DON&#39;T ADD TO PAGE LAYOUT</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WorkOrder.WorkOrderNumber&amp;&quot;|&quot;&amp;WorkOrder.SourceRecord__r.Customer_Id__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TF_CustomerRequestNumber__c?: string;
    WorkOrder?: WorkOrder;
    WorkOrderId?: string;
    WorkOrderLineItem?: WorkOrderLineItem;
    WorkOrderLineItemId?: string;
}