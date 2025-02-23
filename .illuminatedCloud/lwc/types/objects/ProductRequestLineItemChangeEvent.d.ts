// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductRequestLineItemChangeEvent extends SObject 
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
     * <h3><b>Quantity Received</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPQtyReceived__c?: number;
    /**
     * <h3><b>Quantity Ready To Pick Up</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPQtyShipped__c?: number;
    /**
     * <h3><b>ERP Requested Quantity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPQtyTransfer__c?: number;
    /**
     * <h3><b>Last ERP Activity Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPTransDate__c?: Date;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    NeedByDate?: string;
    Parent?: ProductRequest;
    ParentId?: string;
    Product2?: Product2;
    Product2Id?: string;
    ProductRequestLineItemNumber?: string;
    QuantityRequested?: number;
    QuantityUnitOfMeasure?: string;
    ReplayId?: string;
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
    WorkOrder?: WorkOrder;
    WorkOrderId?: string;
    WorkOrderLineItem?: WorkOrderLineItem;
    WorkOrderLineItemId?: string;
}