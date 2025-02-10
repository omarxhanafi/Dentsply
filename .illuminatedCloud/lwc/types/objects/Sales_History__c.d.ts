// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Sales History</b></h3>
 * <p>Detailed Sales History of Products Sold to Accounts</p>
 */
declare interface Sales_History__c extends SObject 
{
    /**
     * <h3><b>Abutment Implant System</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (CONTAINS(Product__r.RecordType.DeveloperName, &quot;Global&quot;) ,IF( Product__r.PG2_Code__c =&quot;ID21&quot; ||Product__r.PG2_Code__c =&quot;ID22&quot; || Product__r.PG2_Code__c =&quot;ID23&quot;, &#47;&#42; checks if this is Atlantis &#42;&#47; CASE( Implant_system__c, &quot;Dentsply Friadent&quot;, LEFT( Atlantis_Interface_D__c , FIND( &quot; &quot;, Atlantis_Interface_D__c)), &quot;Astra Tech&quot;, &quot;Astra Tech Implant System&quot;, &quot;Astra Tech (D)&quot;,&quot;Astra Tech Implant System&quot;, &quot;Ankylos (D)&quot;,&quot;Ankylos&quot;, &quot;XiVE/Frialit (D)&quot;,&quot;XiVE&quot;, Implant_system__c) , &#47;&#42; If Atlantis, check if manufacturer is Friadent and add the first word in the implant interface (Ankylos, Frialit, XiVe). if Astra Tech, change to Astra Tech Implant System to match Implant brand, other - add implant manufacturer &#42;&#47; IF(Product__r.PG2_Code__c =&quot;II12&quot;, Brand__c ,&quot;&quot;) ) &#47;&#42;If not Atlantis check if Stock Abutments. If so Add Brand, if not leave blank &#42;&#47; , IF( Product__r.GlobalSKUMapping__r.PG2_Code__c =&quot;ID21&quot; ||Product__r.GlobalSKUMapping__r.PG2_Code__c =&quot;ID22&quot; || Product__r.GlobalSKUMapping__r.PG2_Code__c =&quot;ID23&quot;, &#47;&#42; checks if this is Atlantis &#42;&#47; CASE( Implant_system__c, &quot;Dentsply Friadent&quot;, LEFT( Atlantis_Interface_D__c , FIND( &quot; &quot;, Atlantis_Interface_D__c)), &quot;Astra Tech&quot;, &quot;Astra Tech Implant System&quot;, &quot;Astra Tech (D)&quot;,&quot;Astra Tech Implant System&quot;, &quot;Ankylos (D)&quot;,&quot;Ankylos&quot;, &quot;XiVE/Frialit (D)&quot;,&quot;XiVE&quot;, Implant_system__c) , &#47;&#42; If Atlantis, check if manufacturer is Friadent and add the first word in the implant interface (Ankylos, Frialit, XiVe). if Astra Tech, change to Astra Tech Implant System to match Implant brand, other - add implant manufacturer &#42;&#47; IF(Product__r.GlobalSKUMapping__r.PG2_Code__c =&quot;II12&quot;, Brand__c ,&quot;&quot;) ) ) &#47;&#42;If not Atlantis check if Stock Abutments. If so Add Brand, if not leave blank &#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Abutment_Implant_System__c: string;
    /**
     * <h3><b>Account Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Account})</td></tr>
     * </table>
     */
    Account__c: string;
    /**
     * <h3><b>Account Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Account})</td></tr>
     * </table>
     */
    Account__r: Account;
    /**
     * <h3><b>ERP Number From Integration</b></h3>
     * <p>The current ERP number of this customer concatenated with the country code.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    Account_Account_No__c: string;
    /**
     * <h3><b>Account Owner</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account__r.Owner.FirstName&amp;&quot; &quot;&amp;Account__r.Owner.LastName</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Owner__c: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    /**
     * <h3><b>Article &amp; Product Name</b></h3>
     * <p>Article (SKU) + Product name</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Name  &amp; &quot; &quot;  &amp;  Product__r.Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Article__c: string;
    /**
     * <h3><b>Article Description OLD</b></h3>
     * <p>Use Product field instead!</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Article_Description__c: string;
    /**
     * <h3><b>ATL Abut Implant Manufacturer Grouped</b></h3>
     * <p>Groups ATL Implant Manufacturer into DI Implant Systems and Competitive Implant Systems.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( Implant_system__c , &quot;BioHorizons&quot;, &quot;Comp System&quot;, &quot;Osstem&quot;, &quot;Comp System&quot;, &quot;Biomet 3i&quot;, &quot;Comp System&quot;, &quot;Camlog&quot;, &quot;Comp System&quot;, &quot;Keystone Dental&quot;, &quot;Comp System&quot;, &quot;Mis&quot;, &quot;Comp System&quot;, &quot;Nobel Biocare&quot;, &quot;Comp System&quot;, &quot;Straumann&quot;, &quot;Comp System&quot;, &quot;Sybron Implant Solutions&quot;, &quot;Comp System&quot;, &quot;Zimmer Dental&quot;, &quot;Comp System&quot;, &quot;Ankylos (D)&quot;, &quot;DI System&quot;, &quot;Astra Tech (D)&quot;, &quot;DI System&quot;, &quot;XiVE/Frialit (D)&quot;, &quot;DI System&quot;, &quot;Astra Tech Implant System EV&quot;, &quot;DI System&quot;, &quot;Astra Tech TX&quot;, &quot;DI System&quot;, &quot;N/A&quot; )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ATL_Abut_Implant_Manufacturer_Grouped__c: string;
    /**
     * <h3><b>ATLANTIS Interface</b></h3>
     * <p>This field shows Attr 4 (Implant type) for the Atlantis abutment</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Atlantis_Interface_D__c: string;
    /**
     * <h3><b>ATL Scanner Brand</b></h3>
     * <p>This field is integrated with Atlantis Attrb 5 (Scanner ID)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Atlantis_Scanner_Brand_D__c: string;
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    AttachedTo: ProcessException;
    Attachments: Attachment[];
    /**
     * <h3><b>AWO Case No</b></h3>
     * <p>This fields shows the EXPECTED AWO-case number. This fields is created from the Order number on ALL Atlantis sales, which means that it can be created from sales not entered in AWO.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND(BEGINS(Product_Group_2__c, &quot;ID2&quot;) ,NOT( ISNULL( Order_Number__c ) )) , MID( Order_Number__c , 4,  LEN( Order_Number__c ) -3) , NULL)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AWO_Case_No_D__c: string;
    /**
     * <h3><b>AWO-Link</b></h3>
     * <p>Opens the Order in AWO</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISNUMBER( Our_Reference__c ), HYPERLINK(&quot;https://www.atlantisweborder.com/orders/show/&quot;&amp; Our_Reference__c,   AWO_Case_No_D__c  ), NULL)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AWO_Link__c: string;
    /**
     * <h3><b>Brand</b></h3>
     * <p>Limited to Products that has a brand definition in Movex, otherwise N/A</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.Brand__c, Product__r.Brand__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Brand__c: string;
    /**
     * <h3><b>Business Area Code</b></h3>
     * <p>Limited to Products that has a definition in Movex, otherwise N/A</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.Business_Area_Code__c, Product__r.Business_Area_Code__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Business_Area_Code__c: string;
    /**
     * <h3><b>Business Area Code TEXT (HQ)</b></h3>
     * <p>Used to be able to build RUS-field on Business Area Code. To be updated either by workflow, by integration or by an APEX-trigger. Used for EV Launch.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Business_Area_Code_TEXT_HQ__c: string;
    /**
     * <h3><b>Campaign Code</b></h3>
     * <p>This field is integrated from Movex field &#39;Campaign Code&#39; (Stat.1.Code). In Movex, a value is set on the Invoice level, which means that all invoice lines/ Sales history records with the corresponding invoice number always contain this code.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Campaign_Code__c: string;
    /**
     * <h3><b>Check Product 4</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), If( Product__r.GlobalSKUMapping__r.PG4_Code__c =  Product_Group_HQ__c ,&quot;Yes&quot;,&quot;No&quot;), If( Product__r.PG4_Code__c =  Product_Group_HQ__c ,&quot;Yes&quot;,&quot;No&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Check_Product_4__c: string;
    CombinedAttachments: CombinedAttachment[];
    ConnectionReceived: PartnerNetworkConnection;
    ConnectionReceivedId: string;
    ConnectionSent: PartnerNetworkConnection;
    ConnectionSentId: string;
    /**
     * The reciprocal relationship for {@link ContactRequest.WhatId}.
     */
    ContactRequests: ContactRequest[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    /**
     * <h3><b>Continent</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE (Country_Code__c, &quot;US&quot;, &quot;North America&quot;, &quot;CA&quot;, &quot;North America&quot;, &quot;AU&quot;, &quot;Asia/Pacific&quot;, &quot;NZ&quot; , &quot;Asia/Pacific&quot;, &quot;JP&quot;, &quot;Asia/Pacific&quot;, &quot;Europe&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Continent__c: string;
    /**
     * <h3><b>Contract/Voucher</b></h3>
     * <p>Lookup field to the Corresponding Purchasing Contract or Voucher when a relation exists</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contract})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Contract__c: string;
    /**
     * <h3><b>Contract/Voucher</b></h3>
     * <p>Lookup field to the Corresponding Purchasing Contract or Voucher when a relation exists</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contract})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Contract__r: Contract;
    /**
     * <h3><b>Country Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LEFT( Account_Account_No__c , 2)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Country_Code__c: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Customer Order Number</b></h3>
     * <p>This is the customer&#39; order number.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Order_Number__c: string;
    /**
     * <h3><b>Days to reach Expiry (HQ)</b></h3>
     * <p>To calculate the number days left before the expiration date.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( ISBLANK(Maintenance_Expiry_Date__c) &amp;&amp; ISBLANK(Voucher_Expiry_Date__c),NULL, Case ( SIMPLANT_Sales_Category_HQ__c ,&quot;Maintenance&quot;, Maintenance_Expiry_Date__c - TODAY(), &quot;Vouchers&quot;,  Voucher_Expiry_Date__c - TODAY(),NULL))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Days_to_reach_Expiry_HQ__c: number;
    /**
     * <h3><b>Discount Amount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(10,4)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Discount_Amount__c: number;
    /**
     * <h3><b>Discount Model</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Discount_Model__c: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * <h3><b>Document Archive</b></h3>
     * <p>View invoice in Document Archive (within Dentsply domain or via VPN only)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">&#47;&#42; HYPERLINK(&quot;http://a3.astratech.net/a3DirectStart.asp?COMPONENT=OpenCollector_Invoice_0_Collector&amp;view=A&amp;selectionbox_Invoiceno=&quot;  &amp; Invoice_Number__c  &amp; &quot;&amp;selectionbox_Orderno=&quot; &amp;  Order_Number__c &amp;&quot;&amp;View=A&quot;, &quot;View invoice&quot;,&quot;_blank&quot;)&#42;&#47; HYPERLINK(&quot;http://a3.astratech.net/a3DirectStart.asp?COMPONENT=OpenCollector_Invoice_0_Collector&quot; &amp; IF( (Country_Code__c =&#39;DE&#39;|| Country_Code__c =&#39;US&#39;||Country_Code__c =&#39;PL&#39;||Country_Code__c =&#39;CA&#39; )&amp;&amp;Value(Invoice_Year__c)&gt;=2017,&#39;2017&#39;,&#39;&#39;) &amp; &quot;&amp;view=A&amp;selectionbox_Orderno=&quot; &amp; Order_Number__c &amp; &quot;&amp;selectionbox_Division=&quot; &amp; IF( (Country_Code__c &lt;&gt;&#39;DE&#39; &amp;&amp; Country_Code__c &lt;&gt;&#39;US&#39;&amp;&amp; Country_Code__c &lt;&gt;&#39;CA&#39; ),&#39;&#39;,Country_Code__c) &amp; &quot;&amp;selectionbox_Invoiceno=&quot; &amp; IF( (Country_Code__c &lt;&gt;&#39;DE&#39; &amp;&amp; Country_Code__c &lt;&gt;&#39;US&#39; &amp;&amp; Country_Code__c &lt;&gt;&#39;PL&#39; &amp;&amp; Country_Code__c &lt;&gt;&#39;CA&#39; ),&#39;&#39;,Invoice_Number__c) &amp; &quot;&amp;view=A&quot; , $Label.View_Invoice , &quot;_blank&quot; )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Document_Archive__c: string;
    /**
     * <h3><b>Dummy Date Field (HQ)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Dummy_Date_Field_HQ__c: string;
    /**
     * The reciprocal relationship for {@link DuplicateRecordItem.RecordId}.
     */
    DuplicateRecordItems: DuplicateRecordItem[];
    EngagementInitiatedTopic: EngagementTopic[];
    /**
     * <h3><b>ERP Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account__r.Movex__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Number__c: string;
    EventRelations: EventRelation[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * <h3><b>Free Prod</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (Price__c  = 0 , &quot;Free Prod&quot;, &quot;Invoiced&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Free_Prod__c: string;
    /**
     * <h3><b>friadent temp remove</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( CONTAINS( Sales_History_External_ID__c , &quot; &quot;) ,1, 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    friadent_temp_remove__c: number;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    /**
     * <h3><b>Global Brand Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product__r.GlobalSKUMapping__r.BrandCodeGDW__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Global_Brand_Code__c: string;
    /**
     * <h3><b>Global Brand Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product__r.GlobalSKUMapping__r.BrandDescGDW__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Global_Brand_Description__c: string;
    /**
     * <h3><b>Global SKU From Salesline</b></h3>
     * <p>The GlobalSKU written on the Invoiceline.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Global_SKU_From_Salesline__c: string;
    /**
     * <h3><b>Global SKU From Salesline</b></h3>
     * <p>The GlobalSKU written on the Invoiceline.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Global_SKU_From_Salesline__r: Product2;
    /**
     * <h3><b>GlobalSKU From Source (HQ)</b></h3>
     * <p>The mapped GlobalSKU in the sales line. To use this field to compare our mapping in the Product Object.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GlobalSKU_From_Source_HQ__c: string;
    /**
     * <h3><b>Gross price (currency)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(Quantity__c=0, 0, Product__r.List_Price__c*Quantity__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Gross_price__c: number;
    /**
     * <h3><b>Guide Payment Method (HQ)</b></h3>
     * <p>Linked to Movex attribute 5</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Guide_Payment_Method__c: string;
    /**
     * <h3><b>Guide Payment Method</b></h3>
     * <p>Shows if the surgical guide is paid by  voucher or regular billing.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case ( Guide_Payment_Method__c , &quot;1&quot;,&quot;Voucher&quot;,&quot;0&quot;,&quot;Regular&quot;,NULL)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Guide_Payment_Method_Front__c: string;
    /**
     * <h3><b>Implant Connections</b></h3>
     * <p>Similar to existing field!</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), IF( Product__r.GlobalSKUMapping__r.PG1_Code__c = &quot;ID4&quot; &amp;&amp; CONTAINS(Name, &quot;-&quot;), VALUE(RIGHT( Name , LEN(TRIM(Name))-FIND(&quot;-&quot;, Name) )) , null), IF( Product__r.PG1_Code__c = &quot;ID4&quot; &amp;&amp; CONTAINS(Name, &quot;-&quot;), VALUE(RIGHT( Name , LEN(TRIM(Name))-FIND(&quot;-&quot;, Name) )) , null))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implant_Connections__c: number;
    /**
     * <h3><b>ATL Implant Manufacturer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implant_system__c: string;
    /**
     * <h3><b>Implants Qty</b></h3>
     * <p>Used by Benelux to calculate the quantity only for implants but to include all the items in the value</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Product_Category__c =&quot;Implants&quot;,  Quantity__c , 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implants_Qty__c: number;
    /**
     * <h3><b>Internal Order? (for analysis only)</b></h3>
     * <p>For analysis only, should not appear in any page layouts or search criterias if you are not a System administrator. The number 1 should appear if the order type is marked as an internal order type, else 0</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND ( OR (CONTAINS ( Order_Type__c, &quot;7&quot; ),CONTAINS ( Order_Type__c, &quot;8&quot; ),CONTAINS ( Order_Type__c, &quot;9&quot; ),CONTAINS ( Order_Type__c, &quot;F&quot; ),CONTAINS ( Order_Type__c, &quot;P&quot; ),CONTAINS ( Order_Type__c, &quot;Q&quot; ),CONTAINS ( Order_Type__c, &quot;R&quot; ),CONTAINS ( Order_Type__c, &quot;S&quot; ),CONTAINS ( Order_Type__c, &quot;T&quot; ),CONTAINS ( Order_Type__c, &quot;SQZ&quot; ),CONTAINS ( Order_Type__c, &quot;SQG&quot; ) ), NOT ( OR ( CONTAINS (Order_Type__c, &quot;0&quot; ),CONTAINS (Order_Type__c, &quot;1&quot; ),CONTAINS (Order_Type__c, &quot;2&quot; ),CONTAINS (Order_Type__c, &quot;3&quot; ),CONTAINS (Order_Type__c, &quot;4&quot; ) ) ) ,OR(Order_Type__c=&quot;AUR&quot;,Order_Type__c=&quot;ES8&quot;,Order_Type__c=&quot;ES9&quot;,Order_Type__c=&quot;ESR&quot;,Order_Type__c=&quot;GB7&quot;,Order_Type__c=&quot;GB9&quot;,Order_Type__c=&quot;GBR&quot;,Order_Type__c=&quot;GBT&quot;,Order_Type__c=&quot;NL7&quot;,Order_Type__c=&quot;NL8&quot;,Order_Type__c=&quot;NLR&quot;,Order_Type__c=&quot;NO8&quot;,Order_Type__c=&quot;NO9&quot;,Order_Type__c=&quot;NOS&quot;,Order_Type__c=&quot;NOT&quot;,Order_Type__c=&quot;PL7&quot;,Order_Type__c=&quot;PLR&quot;,Order_Type__c=&quot;PLS&quot;,Order_Type__c=&quot;PT8&quot;,Order_Type__c=&quot;SE7&quot;,Order_Type__c=&quot;SE8&quot;,Order_Type__c=&quot;SE9&quot;,Order_Type__c=&quot;SER&quot;,Order_Type__c=&quot;US7&quot;)),1,0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Internal_Order_for_analysis_only__c: number;
    /**
     * <h3><b>Invoice Date -1Y</b></h3>
     * <p>The Invoice date -1 year. Used in analytics (like one-click reports)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Invoice_Date__c -365</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Date1Y__c: Date;
    /**
     * <h3><b>Invoice Date +1Y</b></h3>
     * <p>The invoice date plus one year. Used for comparision of YTD and LYTD sales figures. For analysis only</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Invoice_Date__c +365</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Date_1Y__c: Date;
    /**
     * <h3><b>Invoice Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Date__c: Date;
    /**
     * <h3><b>Same Current Month? (HQ)</b></h3>
     * <p>Used by France https://emea.salesforce.com/00O20000006geE0</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (Month( Invoice_Date__c )= Month (Today()),&quot;This Month&quot;,NUll)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Month_1_HQ__c: string;
    /**
     * <h3><b>Invoice Month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ((MONTH ( Invoice_Date__c  ) = 1 ) , &quot;01 Jan&quot;, IF ((MONTH ( Invoice_Date__c  ) = 2 ) , &quot;02 Feb&quot;, IF ((MONTH ( Invoice_Date__c  ) = 3 ) , &quot;03 Mar&quot;, IF ((MONTH ( Invoice_Date__c  ) = 4 ) , &quot;04 Apr&quot;, IF ((MONTH ( Invoice_Date__c  ) = 5 ) , &quot;05 May&quot;, IF ((MONTH ( Invoice_Date__c  ) = 6 ) , &quot;06 Jun&quot;, IF ((MONTH ( Invoice_Date__c  ) = 7 ) , &quot;07 Jul&quot;, IF ((MONTH ( Invoice_Date__c  ) = 8 ) , &quot;08 Aug&quot;, IF ((MONTH ( Invoice_Date__c  ) = 9 ) , &quot;09 Sep&quot;, IF ((MONTH ( Invoice_Date__c  ) = 10 ) , &quot;10 Oct&quot;, IF ((MONTH ( Invoice_Date__c  ) = 11 ) , &quot;11 Nov&quot;, IF ((MONTH ( Invoice_Date__c  ) = 12 ) , &quot;12 Dec&quot;, &quot; &quot;))))))))))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Month__c: string;
    /**
     * <h3><b>Invoice Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Number__c: string;
    /**
     * <h3><b>Invoice Quarter</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( MONTH( Invoice_Date__c ) , 1, &quot;Q1&quot;, 2, &quot;Q1&quot;, 3, &quot;Q1&quot;, 4, &quot;Q2&quot;, 5, &quot;Q2&quot;, 6, &quot;Q2&quot;, 7, &quot;Q3&quot;, 8, &quot;Q3&quot;, 9, &quot;Q3&quot;, 10, &quot;Q4&quot;, 11, &quot;Q4&quot;, 12, &quot;Q4&quot;, null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Quarter__c: string;
    /**
     * <h3><b>Invoice Quarter+Year</b></h3>
     * <p>The Quarter+Year when the Invoice is placed. For analysis</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Invoice_Quarter__c &amp;&quot;/&quot;&amp; Invoice_Year__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Quarter_Year__c: string;
    /**
     * <h3><b>Invoice Year</b></h3>
     * <p>The Year when the Invoice is placed. For analysis</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(YEAR( Invoice_Date__c ))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Year__c: string;
    /**
     * <h3><b>Invoice Year (numeric)</b></h3>
     * <p>Only used in calculations - should not appear in any page layouts etc</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">VALUE( Invoice_Year__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Year_numeric__c: number;
    /**
     * <h3><b>is is the primary contract external id</b></h3>
     * <p>The external ID of the Contract or Voucher if that exists</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    is_is_the_primary_contract_external_id__c: string;
    IsDeleted: boolean;
    /**
     * <h3><b>ISUS Prostheses?</b></h3>
     * <p>We can&#39;t use Product Category in Roll ups because it refers to another object, so this field use the Product Group fields to give Yes or No</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(LEFT(Product_Group_HQ__c, 4) , &quot;ID42&quot;, &quot;Yes&quot;, &quot;ID41&quot;,&quot;Yes&quot;, &quot;ID43&quot;,&quot;Yes&quot;, &quot;ID44&quot;,&quot;Yes&quot;, &quot;No&quot;) &#47;&#42; OLD formula CASE(Product_Group_2__c,&quot;ID42 ISUS Bridge&quot;, &quot;Yes&quot;,&quot;ID41 ISUS Bar&quot;,&quot;Yes&quot;,&quot;ID43 ISUS Hybrid&quot;,&quot;Yes&quot;,&quot;ID44 ISUS 2in1&quot;,&quot;Yes&quot;,&quot;No&quot;) &#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ISUS_Prostheses__c: string;
    /**
     * <h3><b>ATL Lab-based scanning</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( CONTAINS(Name, &quot;S&quot;), &quot;Yes&quot;, IF(LEFT(Product_Group_HQ__c, 2)=&quot;ID2&quot;, &quot;No&quot;,&quot;&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Lab_based_Scanning__c: string;
    /**
     * <h3><b>Lab Referral Postal Code</b></h3>
     * <p>Shows the clinical postal code that has been referred from the Atlantis Web Order system. The formula is copying the Project Element field, but only for Atlantis sales for AWO-customers</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Account__r.Atlantis_Web_Order_Customer__c = TRUE  &amp;&amp;  (Product_Group_1__c = &quot;ID2 Atlantis&quot; || Product_Group_1__c = &quot;ID4 ATLANTIS ISUS&quot; ),  Postal_Code_D_NA__c , null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Lab_Referral_Postal_Code__c: string;
    /**
     * <h3><b>Last quarter sales</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If(CEILING( MONTH ( Invoice_Date__c ) / 3 ) = CEILING( MONTH ( Today() ) / 3 )-1 &amp;&amp;  Year ( Invoice_Date__c ) =Year ( today() ),Tot_Price__c,null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Last_quarter_sales__c: number;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LocalRecord: PartnerNetworkRecordConnection;
    /**
     * <h3><b>Maintenance Expiry Date</b></h3>
     * <p>Updated Manually by Leuven</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Maintenance_Expiry_Date__c: Date;
    /**
     * <h3><b>Moving Annual Total</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If (AND( (Invoice_Date__c +365) &gt; TODAY(), Invoice_Date__c &lt;=TODAY()), &quot;True&quot;, &quot;False&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Moving_Annual_Total__c: string;
    /**
     * <h3><b>Is My Sales?</b></h3>
     * <p>If this field shows a &quot;YES&quot; = My sales, otherwise &quot;NO&quot;. Use this field for filtering and to simulate &quot;My sales&quot; on reports and views</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Sales_Owner__c  =  $User.Id , &quot;YES&quot;, &quot;NO&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    My_Sales__c: string;
    Name: string;
    NetworkUserHistoryRecentToRecord: NetworkUserHistoryRecent[];
    /**
     * <h3><b>No longer exist in BPW (HQ)</b></h3>
     * <p>Field to be used to identify fields that no longer exist in BPW and therefore should be deleted from SFDC.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    No_longer_exist_in_BPW__c: boolean;
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    /**
     * <h3><b>OneSF Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account__r.OneSF_Id__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OneSF_Id__c: string;
    /**
     * <h3><b>Order Number</b></h3>
     * <p>This is the Astra Tech order number that this row corresponds to. Note that it is not until the article has been invoiced that the sales history record appears in Salesforce.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(11)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Number__c: string;
    /**
     * <h3><b>Order Type</b></h3>
     * <p>Shows the Order Type</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Type__c: string;
    /**
     * <h3><b>Our Reference</b></h3>
     * <p>Our Reference on the Order/Invoice. Comes from the field OREF in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Our_Reference__c: string;
    Parent: Case__hd;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    PartnerRecord: PartnerNetworkRecordConnection;
    /**
     * <h3><b>Payer Customer Group</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Payer_Lookup__r.Customer_Group__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Customer_Group__c: string;
    /**
     * <h3><b>Payer Lookup</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Lookup__c: string;
    /**
     * <h3><b>Payer Lookup</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Lookup__r: Account;
    /**
     * <h3><b>Payer ERP # (D-JP)</b></h3>
     * <p>Showing the Paying Accounts Movex #.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(15)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Movex_D_JP__c: string;
    /**
     * <h3><b>Payer Name (D-JP) OLD</b></h3>
     * <p>Showing the name of the Paying Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Name_D_JP__c: string;
    /**
     * <h3><b>Payer Sales Channel</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Payer_Lookup__r.Payer_Customer_Group_D_JP__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Sales_Channel__c: string;
    /**
     * <h3><b>Project Element</b></h3>
     * <p>The Project Element field in Movex. For Atlantis orders it refers to the postal code of the clinic from where the lab sales is originating. Only used for Dental lab sales</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(8)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Postal_Code_D_NA__c: string;
    /**
     * <h3><b>Prd Grp 2 / Article</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product_Group_2__c  &amp; &quot; / &quot; &amp;  Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Prd_Grp_2_Article__c: string;
    /**
     * <h3><b>Previous Month</b></h3>
     * <p>Sets a value if the invoice date belongs to the month previous to TODAYs month - used in reports to compare the sales in previous month with the sales in the same month earlier years. Should not be visible on any Page Layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(MONTH(TODAY())=(MONTH( Invoice_Date__c )+1), TEXT(MONTH( Invoice_Date__c )),IF(MONTH(TODAY())=1&amp;&amp;MONTH(Invoice_Date__c )=12,TEXT(MONTH(Invoice_Date__c)),null))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Previous_Month__c: string;
    /**
     * <h3><b>Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,4)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Price__c: number;
    /**
     * <h3><b>Price List Code (D-JP)</b></h3>
     * <p>Field used in JP to know what price list category was used. Field Price List Description(D-JP) shows the corresponding desciption. Brought over from Movex.
     * J1 = Direct Sales
     * J4= SASAKI
     * J5= Other Dealer
     * J6= Other Dealer
     * J7= Other Dealer
     * J8= Other Dealer
     * J9= Other Dealer
     * JA= Other Dealer</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Price_List_Code_D_JP__c: string;
    /**
     * <h3><b>Price List Description (D-JP)</b></h3>
     * <p>Field set by a field update based on field Price List Code. Used in JP only.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Direct Sales</code></td><td>Direct Sales</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SASAKI</code></td><td>SASAKI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other Dealer</code></td><td>Other Dealer</td><td nowrap>true</td></tr>
     * </table>
     */
    Price_List_Description_D_JP__c: string;
    PrimaryRecord: PendingServiceRoutingInteractionInfo;
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    ProcessExceptions: ProcessException[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    /**
     * <h3><b>Product Name</b></h3>
     * <p>A lookup field to Product object , we use SFDC ID to update this field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product__c: string;
    /**
     * <h3><b>Product Name</b></h3>
     * <p>A lookup field to Product object , we use SFDC ID to update this field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product__r: Product2;
    /**
     * <h3><b>Product Category</b></h3>
     * <p>Limited to products that has a definition in Movex, otherwise it will be N/A</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.Product_Category__c, Product__r.Product_Category__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Category__c: string;
    /**
     * <h3><b>Product GPP</b></h3>
     * <p>Global Product Platform</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.GPP_Code__c + &quot; &quot; +  Product__r.GlobalSKUMapping__r.GPP_Desc__c, Product__r.GPP_Code__c + &quot; &quot; +  Product__r.GPP_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_GPP__c: string;
    /**
     * <h3><b>Product Group 1</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.PG1_Code__c + &quot; &quot; +  Product__r.GlobalSKUMapping__r.PG1_Desc__c, Product__r.PG1_Code__c + &quot; &quot; +  Product__r.PG1_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_1__c: string;
    /**
     * <h3><b>Product Group 2</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.PG2_Code__c + &quot; &quot; +  Product__r.GlobalSKUMapping__r.PG2_Desc__c, Product__r.PG2_Code__c + &quot; &quot; +  Product__r.PG2_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_2__c: string;
    /**
     * <h3><b>Product Group 2 - Brand</b></h3>
     * <p>Concatenation of Product group 2, description and brand &quot;II11 Implants - Astra Tech Implant System&quot;. Use in report - should not appear in any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.PG2_Code__c  &amp;  &quot; &quot; &amp; Product__r.GlobalSKUMapping__r.PG2_Desc__c  &amp; &quot; - &quot; &amp;   Product__r.GlobalSKUMapping__r.Brand__c, Product__r.PG2_Code__c  &amp;  &quot; &quot; &amp; Product__r.PG2_Desc__c  &amp; &quot; - &quot; &amp;   Product__r.Brand__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_2_Brand__c: string;
    /**
     * <h3><b>Product Group 3</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.PG3_Code__c + &quot; &quot; +  Product__r.GlobalSKUMapping__r.PG3_Desc__c, Product__r.PG3_Code__c + &quot; &quot; +  Product__r.PG3_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_3__c: string;
    /**
     * <h3><b>Product Group 3 OLD</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_3_OLD__c: string;
    /**
     * <h3><b>Product Group 4</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.PG4_Code__c + &quot; &quot; +  Product__r.GlobalSKUMapping__r.PG4_Desc__c, Product__r.PG4_Code__c + &quot; &quot; +  Product__r.PG4_Desc__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_4__c: string;
    /**
     * <h3><b>TBD Product Group 4 OLD</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Product__r.PG4_Code__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group__c: string;
    /**
     * <h3><b>XXXProduct Group Changed (HQ)</b></h3>
     * <p>Checks for differences in Product Structure and Article Description between Sales History Record and related Product record. If change is detected, then &quot;Yes&quot;</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">null</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_Changed_HQ_del__c: string;
    /**
     * <h3><b>Product Group 4 Code (HQ)</b></h3>
     * <p>Used only for Roll up summary fields and Formula fields, avoid to use it in reports</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group_HQ__c: string;
    /**
     * <h3><b>Product Line</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.Product_Line__c, Product__r.Product_Line__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Line__c: string;
    /**
     * <h3><b>Product Structure (HQ)</b></h3>
     * <p>Shows the full product structure of the Sales History record.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">null</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductStructure__c: string;
    /**
     * <h3><b>Product Structure Changed (HQ)</b></h3>
     * <p>TRUE if the product structure of the Sales History record differs from that of its corresponding Product record.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), IF(ProductStructure__c = Product__r.GlobalSKUMapping__r.ProductStructure__c , FALSE, TRUE), IF(ProductStructure__c = Product__r.ProductStructure__c , FALSE, TRUE))</code></td></tr>
     * </table>
     */
    ProductStructureChanged__c: boolean;
    /**
     * <h3><b>Purchasing Contract External ID</b></h3>
     * <p>The External ID of the Purchasing Contract (or Voucher). Should not appear in any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Purchasing_Contract_External_ID__c: string;
    /**
     * <h3><b>Quantity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(8,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Quantity__c: number;
    /**
     * <h3><b>Quantity Test</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Quantity_Test__c: number;
    /**
     * <h3><b>Read Me</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    READ_ME__c: string;
    Record: CollaborationGroupRecordChangeEvent;
    /**
     * <h3><b>Record Transfered to Another Account?</b></h3>
     * <p>This fields is for checking Data Quality. If this field = &quot;1&quot;, it means that the Movex# doesn&#39;t corresponds and that the sales has been moved to another account (possibly through a merge). This gives errors in the integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Account_Account_No__c  &lt;&gt;  Account__r.Movex__c , 1, 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Record_Transfered_to_Another_Account__c: number;
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RecordAlertParent: RecordAlert[];
    RecordAlertWhat: RecordAlert[];
    RecordAssociatedGroups: CollaborationGroupRecord[];
    RelatedRecord: ContentDistribution;
    /**
     * The reciprocal relationship for {@link VoiceCall.RelatedRecordId}.
     */
    RelatedRecords: VoiceCall[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    /**
     * <h3><b>Remake? (For analysis only)</b></h3>
     * <p>Returns Quantity if this is Invoice line is a Remake or else 0. Used only for Atlantis sales</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( AND(CONTAINS( Name , &quot;R&quot;), LEFT( Product_Group_1__c , 2)=&quot;ID2&quot; ) ,   Quantity__c , 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Remake_For_analysis_only__c: number;
    /**
     * <h3><b>Returned Prod</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if  (Quantity__c  &lt; 0 , &quot;Returned Prod&quot; , &quot;Shipped Prod&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Returned_Prod__c: string;
    /**
     * <h3><b>Sales Attribute 1</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Attribute_1__c: string;
    /**
     * <h3><b>Sales Attribute 2</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Attribute_2__c: string;
    /**
     * <h3><b>Sales Attribute 3</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Attribute_3__c: string;
    /**
     * <h3><b>Sales Attribute 4</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Attribute_4__c: string;
    /**
     * <h3><b>Sales Attribute 5</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Attribute_5__c: string;
    /**
     * <h3><b>Sales History External ID</b></h3>
     * <p>Used to get a unique reference number. Based on CustomerPrefix+InvoiceDate+InvoiceNumber+LineNumber+CustomerOrderNumber+DeliveryIndex(Only M3)+ERPId+CompanyCode. Used for Upserts, should not be visible</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    Sales_History_External_ID__c: string;
    /**
     * <h3><b>Sales History # (HQ)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_History_HQ__c: number;
    /**
     * <h3><b>Sales in year of implants won date?</b></h3>
     * <p>This field is used for i.e asp analytics on sales to recently won customer. should not be available in reports or page layout</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( YEAR( Account__r.LastWonEventYearMonth_Implants__c )= YEAR( Invoice_Date__c )  , True, false)</code></td></tr>
     * </table>
     */
    Sales_in_year_of_implants_won_date__c: boolean;
    /**
     * <h3><b>Sales Owner</b></h3>
     * <p>The Person who should get credit for the sale. Note that if this individual can not be tracked in Salesforce, the owner of the Account will be set as Sales Owner</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Owner__c: string;
    /**
     * <h3><b>Sales Owner</b></h3>
     * <p>The Person who should get credit for the sale. Note that if this individual can not be tracked in Salesforce, the owner of the Account will be set as Sales Owner</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Owner__r: User;
    /**
     * <h3><b>Sales Owner Salesman ID (HQ)</b></h3>
     * <p>Used for verification. Should not appear on any screens</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Owner_Salesman_ID_HQ__c: string;
    /**
     * <h3><b>Sales within 12M after Implants Won Date</b></h3>
     * <p>This field is checked if the sales occured within 365 days after the Implants won date</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Account__r.LastWonEventYearMonth_Implants__c &lt;= Invoice_Date__c  &amp;&amp; Account__r.LastWonEventYearMonth_Implants__c +365  &gt;=  Invoice_Date__c , True, False)</code></td></tr>
     * </table>
     */
    Sales_within_12M_after_Implants_Won_Date__c: boolean;
    /**
     * <h3><b>SBU Name</b></h3>
     * <p>Strategic Business Unit</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), Product__r.GlobalSKUMapping__r.SBU_Code__c + &quot; &quot; + Product__r.GlobalSKUMapping__r.SBU_Name__c, Product__r.SBU_Code__c + &quot; &quot; + Product__r.SBU_Name__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBU__c: string;
    /**
     * <h3><b>SIMPLANT Guide Type</b></h3>
     * <p>Linked to Attribute 1 in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SIMPLANT_Guide_Type__c: string;
    /**
     * <h3><b>SIMPLANT Sales Category HQ</b></h3>
     * <p>Important field to build reports on SIMPLANT sales, just filter on this field by using these different values : Licenses, Maintenance, Guides, Conversion, Value Pack, Vouchers, Hardware, Guides (Old), Licenses (Old).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), IF (  Business_Area_Code__c =&quot;DD2&quot;, IF ( NOT(ISBLANK(Product__r.GlobalSKUMapping__r.SIMPLANT_Product_Category_HQ__c)) ,Product__r.GlobalSKUMapping__r.SIMPLANT_Product_Category_HQ__c, CASE( Product__r.GlobalSKUMapping__r.PG3_Code__c , &quot;ID820&quot;, &quot;Licenses&quot;, &quot;ID821&quot;, &quot;Maintenance&quot;, &quot;ID822&quot;, &quot;Guides&quot;, &quot;ID823&quot;, &quot;Conversion&quot;, &quot;ID824&quot;, &quot;Value Pack&quot;, &quot;ID825&quot;, &quot;Vouchers&quot;, &quot;ID826&quot;, &quot;Hardware&quot;, &quot;ID851&quot;, &quot;Hardware&quot;, &quot;ID852&quot;, &quot;Hardware&quot;, &quot;ID811&quot;, &quot;Guides (Old)&quot;, &quot;ID853&quot;, &quot;Guides (Old)&quot;, &quot;ID861&quot;, &quot;Licenses (Old)&quot;, &quot;Others&quot;)), &quot;Non Simplant&quot;), IF (  Business_Area_Code__c =&quot;DD2&quot;, IF ( NOT(ISBLANK(Product__r.SIMPLANT_Product_Category_HQ__c)) ,Product__r.SIMPLANT_Product_Category_HQ__c, CASE( Product__r.PG3_Code__c , &quot;ID820&quot;, &quot;Licenses&quot;, &quot;ID821&quot;, &quot;Maintenance&quot;, &quot;ID822&quot;, &quot;Guides&quot;, &quot;ID823&quot;, &quot;Conversion&quot;, &quot;ID824&quot;, &quot;Value Pack&quot;, &quot;ID825&quot;, &quot;Vouchers&quot;, &quot;ID826&quot;, &quot;Hardware&quot;, &quot;ID851&quot;, &quot;Hardware&quot;, &quot;ID852&quot;, &quot;Hardware&quot;, &quot;ID811&quot;, &quot;Guides (Old)&quot;, &quot;ID853&quot;, &quot;Guides (Old)&quot;, &quot;ID861&quot;, &quot;Licenses (Old)&quot;, &quot;Others&quot;)), &quot;Non Simplant&quot;) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SIMPLANT_Sales_Category_HQ__c: string;
    SobjectLookupValue: AIInsightValue;
    /**
     * <h3><b>Unearned Revenue</b></h3>
     * <p>Used to show unearned revenue of Vouchers Package and Maintenance fees</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SWmaint_Value__c: number;
    SystemModstamp: string;
    Tags: Sales_History__Tag[];
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    Topic: EngagementTopicChangeEvent;
    TopicAssignments: TopicAssignment[];
    /**
     * <h3><b>Total Price (Currency)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Quantity__c =0,  Price__c , Price__c *  Quantity__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Tot_Price__c: number;
    /**
     * <h3><b>Total ISUS Implant Connections</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(IF( ISUS_Prostheses__c = &quot;Yes&quot;,  VALUE(RIGHT( Name ,  LEN(TRIM(Name))-FIND(&quot;-&quot;,  Name) )) , 0)) *  Quantity__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_ISUS_Implant_Connections__c: number;
    /**
     * <h3><b>Total Value</b></h3>
     * <p>Total value is a numerice field that is the equivalent to the currency field Total Price. It is used to track local currency or multiple currencies in reports. Should not appear in any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Tot_Price__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Value__c: number;
    /**
     * <h3><b>ATL Implant Use Case</b></h3>
     * <p>Groups ATL Implant sales into use cases DI Implant Systems and Competitive Implant Systems.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(Implant_system__c, &quot;BioHorizons&quot;, &quot;Comp System&quot;, &quot;Biomet 3i&quot;, &quot;Comp System&quot;, &quot;Camlog&quot;, &quot;Comp System&quot;, &quot;Keystone Dental&quot;, &quot;Comp System&quot;, &quot;Nobel Biocare&quot;, &quot;Comp System&quot;, &quot;Straumann&quot;, &quot;Comp System&quot;, &quot;Sybron Implant Solutions&quot;, &quot;Comp System&quot;, &quot;Zimmer Dental&quot;, &quot;Comp System&quot;, &quot;Ankylos (D)&quot;, &quot;DI System&quot;, &quot;Astra Tech (D)&quot;, &quot;DI System&quot;, &quot;XiVE/Frialit (D)&quot;, &quot;DI System&quot;, &quot;N/A&quot; )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    UseCase__c: string;
    UserDefinedLabelAssignments: UserDefinedLabelAssignment[];
    /**
     * The reciprocal relationship for {@link VideoCall.RelatedRecordId}.
     */
    VideoRelatedRecords: VideoCall[];
    /**
     * <h3><b>Voucher Expiry Date</b></h3>
     * <p>Manual input by subsidiaries, the data originated in SoftAdmin</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Voucher_Expiry_Date__c: Date;
    /**
     * <h3><b>Voucher Validity</b></h3>
     * <p>Valid :Can be used to purchase more guides
     * Processed: Can&#39;t be used.
     * updated manually by Leuven</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Voucher_Validity__c: string;
    /**
     * <h3><b>Warranty? (For analysis only)</b></h3>
     * <p>Returns Quantity if this is Invoice line is a Warranty or else 0. Used only for Atlantis sales</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( AND(CONTAINS( Name , &quot;W&quot;), LEFT( Product_Group_1__c , 2)=&quot;ID2&quot; ) ,   Quantity__c  , 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Warranty_For_analysis_only__c: number;
    What: EventChangeEvent;
    /**
     * <h3><b>WonLostCategory</b></h3>
     * <p>Used by the WonLost logic to determine the proper Product Category.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CONTAINS(Product__r.RecordType.DeveloperName, &quot;Local&quot;), CASE( Product__r.GlobalSKUMapping__r.Product_Category__c, &quot;Implants&quot;, &quot;Implants&quot;, &quot;Stock Abutments&quot;, &quot;Stock Abutments&quot;, &quot;Abutments&quot;, &quot;Abutments&quot;, &quot;ISUS Prostheses&quot;, &quot;ISUS&quot;, &quot;N/A&quot;), CASE( Product__r.Product_Category__c, &quot;Implants&quot;, &quot;Implants&quot;, &quot;Stock Abutments&quot;, &quot;Stock Abutments&quot;, &quot;Abutments&quot;, &quot;Abutments&quot;, &quot;ISUS Prostheses&quot;, &quot;ISUS&quot;, &quot;N/A&quot; ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostCategory__c: string;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem: AgentWork;
    /**
     * <h3><b>YrMonth</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    YrMonth__c: string;
    /**
     * <h3><b>YTD period</b></h3>
     * <p>This field gets the value YTD (YEAR) - i.e YTD (2009) when the invoice line is within the YTD period. Otherwise it is blank.
     * It is used to compare multiple YTD periods with each other.
     * If this field is used in the filter criteria like this: &quot;YTD Period not equal to blank&quot; it means that you are comparing YTD figures.
     * This field should not appear in any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( TODAY() -  Invoice_Date__c   &lt; 0, &quot;Error&quot;,  &#47;&#42; Invoice date appears in the future &#42;&#47; IF( YEAR( Invoice_Date__c ) =   YEAR( TODAY() ) , TRIM(&quot; YTD (&quot; &amp;  TEXT(YEAR( Invoice_Date__c ))  &amp; &quot;)&quot;), &#47;&#42;Invoice date appears this year within the YTD scope &#42;&#47; IF( YEAR(Invoice_Date__c)  &lt; YEAR(TODAY())   &amp;&amp; ( MONTH(Invoice_Date__c)&lt; MONTH(TODAY())   || ( MONTH(Invoice_Date__c)= MONTH(TODAY())   &amp;&amp;   DAY(Invoice_Date__c) &lt;=  DAY(TODAY())   ))  , TRIM(&quot; YTD (&quot; &amp; TEXT(YEAR( Invoice_Date__c ))  &amp; &quot;)&quot;), &#47;&#42;Invoice date appears in previous year within the YTD scope &#42;&#47; &quot;&quot;) ) ) &#47;&#42;Invoice date appears outside of the YTD scope &#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    YTDperiod__c: string;
}