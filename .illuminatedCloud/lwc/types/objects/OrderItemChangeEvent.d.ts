// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderItemChangeEvent extends SObject 
{
    /**
     * <h3><b>Account for Sample in AX</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_for_Sample_in_AX__c?: string;
    /**
     * <h3><b>Account for Sample in AX</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_for_Sample_in_AX__r?: Account;
    /**
     * <h3><b>Amount Discounted</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If(TEXT(Order.User_CountryPL__c)= &#39;Indonesia&#39; &amp;&amp; CONTAINS(Order.Pricebook2.Name,&quot;NET PRICE&quot;),If(ISNULL(Discount_Percent__c), 0 , Quantity * NettPrice__c * Discount_Percent__c), Unit_price_formula_c__c * Discount_Percent__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Amount_Discounted__c?: number;
    /**
     * <h3><b>Approval Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(OR(IF( PricebookEntry.Primary__c = true, (UnitPrice *(1- Discount_Percent__c)&gt; PricebookEntry.ApprovalLevel1__c), Order.ApprovalLevelSecondaryInt__c = 0), AND((Order.Order_Amount_global__c - Total_Line_Item_Price__c)&gt;= PricebookEntry.FreeProductThreshold__c* Quantity,UseCoupon__c = true,(Order.Order_Amount_global__c - Total_Line_Item_Price__c)&gt; Order.UsedCouponsValue__c), AND(Offer_Code_dna__c!=null, Offer_Code_dna__r.QuantityLimit__c &gt;= Quantity)), null, IF(OR(AND(PricebookEntry.Primary__c = false, Order.ApprovalLevelSecondaryInt__c = 3), AND(PricebookEntry.Primary__c = true, UnitPrice *(1- Discount_Percent__c)&lt;= PricebookEntry.ApprovalLevel3__c)), &quot;Sales Director&quot;, IF(OR(AND(PricebookEntry.Primary__c = false, Order.ApprovalLevelSecondaryInt__c = 2), AND(PricebookEntry.Primary__c = true, UnitPrice *(1- Discount_Percent__c)&lt;= PricebookEntry.ApprovalLevel2__c)),&quot;Area Director&quot;,&quot;Manager&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevel__c?: string;
    /**
     * <h3><b>Approval Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(ApprovalLevel__c, &#39;Manager&#39;, 1, &#39;Area Director&#39;, 2, &#39;Sales Director&#39;, 3, 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevelInt__c?: number;
    /**
     * <h3><b>Article Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PricebookEntry.Product2.Article__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Article_Number__c?: string;
    /**
     * <h3><b>Available Coupon Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND( OR((Order.Order_Amount_global__c - Total_Line_Item_Price__c)&gt;=  PricebookEntry.FreeProductThreshold__c * Quantity, UseCoupon__c = true), NOT(ISNULL(PricebookEntry.FreeProductThreshold__c))), TEXT(PricebookEntry.FreeProductThreshold__c), &#39;&#39;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AvailableCouponCode__c?: string;
    AvailableQuantity?: number;
    /**
     * <h3><b>AX Customer Price</b></h3>
     * <p>Used to store the customer price received from the Pricing Microservice into AX.
     * (basePrice in response from microservice).
     * Also used in Order Integrations o ERP</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AXCustomerPrice__c?: number;
    /**
     * <h3><b>AX Discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1 - ( UnitPrice / AXRetailPrice__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AXDiscount__c?: number;
    /**
     * <h3><b>Retail Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AXRetailPrice__c?: number;
    /**
     * <h3><b>Brand</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PricebookEntry.Product2.Brand__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Brand__c?: string;
    ChangeEventHeader?: ChangeEventHeader;
    /**
     * <h3><b>Cost</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Cost__c?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    /**
     * <h3><b>Discount Approval Evaluation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( AND(Discount_Percent__c  &gt; 0, (LEN( Text(Sales_Special__c))&gt;0)),&quot;NO APPROVAL NEEDED&quot;, IF(AND(Discount_Percent__c  &gt; 0,(LEN( Text(Sales_Special__c))=0)), &quot;YES - APPROVAL NEEDED&quot;, IF(Discount_Percent__c  &gt; 0, &quot;YES - APPROVAL NEEDED&quot;, IF(Discount_Percent__c   = 0, &quot;NO APPROVAL NEEDED&quot;, &quot;YES&quot;))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Discount_Approval_Eval__c?: string;
    /**
     * <h3><b>Discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,4)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    Discount_Percent__c?: number;
    /**
     * <h3><b>Discount Approval Line Item</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    DiscountApproval_Line_Item__c?: number;
    /**
     * <h3><b>Discounted Amount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If(ISNULL(Discount_Percent__c), 0 ,  Quantity * UnitPrice * Discount_Percent__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DiscountedAmount__c?: number;
    /**
     * <h3><b>Distributor price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distr__c?: number;
    EndDate?: Date;
    /**
     * <h3><b>ERP Account for Sample</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if( isblank(Account_for_Sample_in_AX__c),&quot;&quot;,Account_for_Sample_in_AX__r.Movex__c &amp;&quot; - &quot; &amp;  Account_for_Sample_in_AX__r.Name )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Account_for_Sample__c?: string;
    /**
     * <h3><b>Free Of Charge</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Free_Of_Charge__c?: boolean;
    /**
     * <h3><b>Free of Charge Delivery</b></h3>
     * <p>Used to state who should deliver a free of charge item - it can be either a dealer, Dentsply Sirona Customer Service or given directly during meeting by Sales Rep</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dealer</code></td><td>Dealer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Customer Service</code></td><td>Customer Service</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sales Rep</code></td><td>Sales Rep</td><td nowrap>true</td></tr>
     * </table>
     */
    Free_of_Charge_Delivery__c?: string;
    /**
     * <h3><b>Item at 100%?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Discount_Percent__c  &gt; 0.99,1,0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Item_at_100__c?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * <h3><b>Line Approval Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR(UnitPrice *(1- Discount_Percent__c)&gt; PricebookEntry.ApprovalLevel1__c, AND(Offer_Code_dna__c!=null, Offer_Code_dna__r.QuantityLimit__c &gt;= Quantity)), null, IF(UnitPrice *(1- Discount_Percent__c)&lt;= PricebookEntry.ApprovalLevel3__c, &quot;Sales Director&quot;, IF(UnitPrice *(1- Discount_Percent__c)&lt;= PricebookEntry.ApprovalLevel2__c,&quot;Area Director&quot;,&quot;Manager&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LineApprovalLevel__c?: string;
    ListPrice?: number;
    /**
     * <h3><b>Lower Guidance (%)</b></h3>
     * <p>#5314 - Margin Guidance Calculation Process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LowerGuidance__c?: number;
    /**
     * <h3><b>Margin</b></h3>
     * <p>#5314 - Margin Guidance Calculation Process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(14,4)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Margin__c?: number;
    /**
     * <h3><b>Margin Guidance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link MarginGuidance__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MarginGuidance__c?: string;
    /**
     * <h3><b>Margin Guidance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link MarginGuidance__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MarginGuidance__r?: MarginGuidance__c;
    /**
     * <h3><b>Margin Guidance Indicator</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( MarginGuidance__c == null, &#39;n/a&#39;, IF( Margin__c  &gt;  UpperGuidance__c , IMAGE(&quot;/img/samples/color_green.gif&quot;, &quot;Green&quot;, 20,20), IF( AND(Margin__c &lt;= UpperGuidance__c, Margin__c &gt;=  LowerGuidance__c ), IMAGE(&quot;/img/samples/color_yellow.gif&quot;, &quot;Yellow&quot;, 20,20), IMAGE(&quot;/img/samples/color_red.gif&quot;, &quot;Red&quot;, 20,20) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MarginGuidanceIndicator__c?: string;
    /**
     * <h3><b>MTF Evaluation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( PricebookEntry.Product2.Article__c , &quot;US228005&quot;, 1, &quot;US228010&quot;, 1, &quot;US228025&quot;, 1, &quot;US420038&quot;,1, &quot;US420039&quot;,1, &quot;US420075&quot;, 1, &quot;US420076&quot;,1, &quot;US420077&quot;, 1, &quot;US420078&quot;,1, &quot;US400175&quot;,1, &quot;US400173&quot;, 1, &quot;US400174&quot;,1, &quot;US400191&quot;,1, &quot;US400192&quot;,1, &quot;US400175&quot;, 1, &quot;US400176&quot;,1, &quot;US400177&quot;,1, &quot;US400178&quot;,1, &quot;US791101&quot;, 1, &quot;US791102&quot;, 1, &quot;US791104&quot;, 1, &quot;US791204&quot;, 1, &quot;US790101&quot;, 1, &quot;US790102&quot;, 1, &quot;US790104&quot;, 1, &quot;US790202&quot;, 1, &quot;US790204&quot;, 1, &quot;US400193&quot;, 1, &quot;US420048&quot;, 1, &quot;US400172&quot;, 1, &quot;US400178&quot;, 1, &quot;US400194&quot;, 1, &quot;US420049&quot;, 1, &quot;US600172&quot;, 1, &quot;US600173&quot;, 1, &quot;US600174&quot;, 1, &quot;US600175&quot;, 1, &quot;US600176&quot;, 1, &quot;US600177&quot;, 1, &quot;US600178&quot;, 1, &quot;US600191&quot;, 1, &quot;US600192&quot;, 1, &quot;US600193&quot;, 1, &quot;US600194&quot;, 1, &quot;US620038&quot;, 1, &quot;US620039&quot;, 1, &quot;US620048&quot;, 1, &quot;US620049&quot;, 1, &quot;US620075&quot;, 1, &quot;US620076&quot;, 1, &quot;US620077&quot;, 1, &quot;US620078&quot;, 1, 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MTF_Evaluation__c?: number;
    /**
     * <h3><b>MTF Evaluation Line Item</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(2,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    MTF_EvaluationNumber__c?: number;
    /**
     * <h3><b>Nett Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ListPrice / 1.11</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NettPrice__c?: number;
    /**
     * <h3><b>No Contract</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PricebookEntry.No_Contract__c</code></td></tr>
     * </table>
     */
    No_Contract__c?: boolean;
    /**
     * <h3><b>Non-SIMPLANT Evaluation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1</code></td></tr>
     * </table>
     */
    Non_SIMPLANT_Evaluation__c?: number;
    /**
     * <h3><b>Number of Items at 100% Discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Number_of_Items_at_100_Discount__c?: number;
    /**
     * <h3><b>Offer Code Applied Number</b></h3>
     * <p>Updated by the Order Product Process Builder and used in the Roll Up Summary field on the Order</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Offer_Code_Applied_Number__c?: number;
    /**
     * <h3><b>Offer Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Offer_Code__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Offer_Code_dna__c?: string;
    /**
     * <h3><b>Offer Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Offer_Code__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Offer_Code_dna__r?: Offer_Code__c;
    /**
     * <h3><b>Offer Code Name</b></h3>
     * <p>Prints the name of the offer code, if one is applied</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Offer_Code_dna__r.Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Offer_Code_Name__c?: string;
    Order?: Order;
    OrderId?: string;
    OrderItemNumber?: string;
    OriginalOrderItem?: OrderItem;
    OriginalOrderItemId?: string;
    /**
     * <h3><b>Parent Kit</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ParentKit__c?: boolean;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    /**
     * <h3><b>Product Group</b></h3>
     * <p>Taken from Product Group Level 4 on the Product Object</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PricebookEntry.Product2.PG4_Desc__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Group__c?: string;
    /**
     * <h3><b>Product Line</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PricebookEntry.Product2.Product_Line__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Line__c?: string;
    /**
     * <h3><b>Product Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PricebookEntry.Product2.PG2_Desc__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Type__c?: string;
    Quantity?: number;
    ReplayId?: string;
    /**
     * <h3><b>Retail Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PricebookEntry.Retail_Price__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Retail_Price__c?: number;
    /**
     * <h3><b>Reward (UK)</b></h3>
     * <p>Used for tracking rewards in UK</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Reward__c?: number;
    /**
     * <h3><b>Sales Special</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">***DENTSPLY Implants Specials***</code></td><td>***DENTSPLY Implants Specials***</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">2018XIVE15 - Xive 15 Implant Special $5,995UDS/$6,495CAD(expires 6/30/18)</code></td><td>2018XIVE15 - Xive 15 Implant Special $5,995UDS/$6,495CAD(expires 6/30/18)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">2018XIVE10 - Xive 10 Implant Special $5,350UDS/$5,995CAD(expires 6/30/18)</code></td><td>2018XIVE10 - Xive 10 Implant Special $5,350UDS/$5,995CAD(expires 6/30/18)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">***National Specials***</code></td><td>***National Specials***</td><td nowrap>true</td></tr>
     * </table>
     */
    Sales_Special__c?: string;
    /**
     * <h3><b>Sales Price</b></h3>
     * <p>Shows the sales price of the line item (each) - the discounted price</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UnitPrice * (1- Discount_Percent__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesPrice__c?: number;
    /**
     * <h3><b>SBU</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if( isblank(PricebookEntry.Product2.GlobalSKUMapping__r.SBU_Name__c), PricebookEntry.Product2.D_Level2__c &amp; &#39;-&#39; &amp; PricebookEntry.Product2.D_Level1__c,PricebookEntry.Product2.GlobalSKUMapping__r.SBU_Name__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBU__c?: string;
    ServiceDate?: Date;
    /**
     * <h3><b>SIMPLANT Line Item</b></h3>
     * <p>Populated by a workflow rule which evaluates the formula field SIMPLANT Order and brings back a numerical value. This field will be used in a rollup summary to the Order for evaluation in an approval process for North America</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(1,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    SIMPLANT_Line_Item__c?: number;
    /**
     * <h3><b>SIMPLANT Software Evaluation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(PricebookEntry.Product2.PG4_Code__c, &quot;ID8111&quot;,1, &quot;ID8201&quot;,1, &quot;ID8202&quot;,1, &quot;ID8203&quot;,1, &quot;ID8205&quot;,1, &quot;ID8206&quot;,1, &quot;ID8207&quot;,1, &quot;ID8211&quot;,1, &quot;ID8212&quot;,1, &quot;ID8213&quot;,1, &quot;ID8215&quot;,1, &quot;ID8216&quot;,1, &quot;ID8217&quot;,1, &quot;ID8222&quot;,1, &quot;ID8231&quot;,1, &quot;ID8232&quot;,1, &quot;ID8241&quot;,1, &quot;ID8251&quot;,1, &quot;ID8252&quot;,1, &quot;ID8255&quot;,1, 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SIMPLANT_Software_Evaluation__c?: number;
    /**
     * <h3><b>Simplant Software Flag</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(SIMPLANT_Software_Line_Item__c &gt; 0,  IMAGE(&quot;/resource/1431363452000/NA_SimplantSftw&quot;, &quot;SIMPLANT SOFTWARE&quot;,34,60),&quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Simplant_Software_Flag__c?: string;
    /**
     * <h3><b>SIMPLANT Software Line Item</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(6,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SIMPLANT_Software_Line_Item__c?: number;
    /**
     * <h3><b>Total Line Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Quantity * UnitPrice *(1- Discount_Percent__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Line_Item_Price__c?: number;
    /**
     * <h3><b>Total Cost</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalCost__c?: number;
    /**
     * <h3><b>Total Discount</b></h3>
     * <p>Used to track the Total Discount for order items when using the Pricing Microservice.
     * It calculates the total discount from the Retail Price in ERP against final sales price in SFDC - so adding AX discount and SFDC discount to create total discount</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(10,8)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(1-(UnitPrice*(1-Discount_Percent__c))/AXRetailPrice__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalDiscount__c?: number;
    /**
     * <h3><b>Total Discount Amount</b></h3>
     * <p>Shows the total discounted amount - difference between Retail Price and final Sales Price * Quantity. Only valid for Orders using pricing direct from ERP. Used in Order Integrations.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AXRetailPrice__c*Quantity-UnitPrice*(1-Discount_Percent__c)*Quantity</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalDiscountAmount__c?: number;
    /**
     * <h3><b>Total Line Item Price PDF Butler</b></h3>
     * <p>Calculating Total Amount with TAX/VAT of &quot;Total_Line_Item_Price__c&quot;
     * This field is exclusively used for specific countries (Australia, New Zealand, Vietnam) to calculate their VAT/GST to be printed in their order PDF.
     * Any change should be aligned with this use.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(Order.Country__c, &#39;AU&#39;, Total_Line_Item_Price__c * 1.10, &#39;NZ&#39;, Total_Line_Item_Price__c * 1.15, &#39;VN&#39;, Total_Line_Item_Price__c * 1.05, null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalLineItemPricePDFButler__c?: number;
    /**
     * <h3><b>Total Price Net</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NettPrice__c *  Quantity - (  NettPrice__c *  Quantity *  Discount_Percent__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalPriceNet__c?: number;
    /**
     * <h3><b>Total Retail Price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AXRetailPrice__c * Quantity</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalRetailPrice__c?: number;
    /**
     * <h3><b>Unit price</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UnitPrice</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Unit_price_formula_c__c?: number;
    UnitPrice?: number;
    /**
     * <h3><b>Upper Guidance</b></h3>
     * <p>#5314 - Margin Guidance Calculation Process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    UpperGuidance__c?: number;
    /**
     * <h3><b>Use Coupon?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    UseCoupon__c?: boolean;
    /**
     * <h3><b>Used Coupon Value</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(UseCoupon__c = true, Quantity * UnitPrice, 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    UsedCouponValue__c?: number;
    /**
     * <h3><b>Value of free product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Value_of_free_product__c?: number;
    /**
     * <h3><b>Value of Samples for Sales Rep</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Value_of_Samples_for_Sales_Rep__c?: number;
    /**
     * <h3><b>VAT Amount PDF Butler</b></h3>
     * <p>Calculating TAX/VAT Amount of &quot;Total_Line_Item_Price__c&quot;
     * This field is exclusively used for specific countries (Australia, New Zealand, Vietnam) to calculate their VAT/GST to be printed in their order PDF.
     * Any change should be aligned with this use.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(Order.Country__c, &#39;AU&#39;, Total_Line_Item_Price__c * 0.10, &#39;NZ&#39;, Total_Line_Item_Price__c * 0.15, &#39;VN&#39;, Total_Line_Item_Price__c * 0.05, null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    VATAmountPDF__c?: number;
    /**
     * <h3><b>Weight</b></h3>
     * <p>#5314 - Margin Guidance Calculation Process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,8)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Weight__c?: number;
    /**
     * <h3><b>Weighted Lower Guidance</b></h3>
     * <p>#5314 - Margin Guidance Calculation Process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,8)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WeightedLowerGuidance__c?: number;
    /**
     * <h3><b>Weighted Upper Guidance</b></h3>
     * <p>#5314 - Margin Guidance Calculation Process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,8)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WeightedUpperGuidance__c?: number;
}