// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderChangeEvent extends SObject 
{
    Account: Account;
    /**
     * <h3><b>Account Discount Model</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account.Discount_Model__c + &quot; &quot;+ Account.Discount_Model_Description__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Discount_Model__c: string;
    /**
     * <h3><b>Payer Account</b></h3>
     * <p>Account to track sample in AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_for_Sample_in_AX__c: string;
    /**
     * <h3><b>Payer Account</b></h3>
     * <p>Account to track sample in AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_for_Sample_in_AX__r: Account;
    /**
     * <h3><b>Account Owner</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Owner__c: string;
    /**
     * <h3><b>Account Owner</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Owner__r: User;
    /**
     * <h3><b>Account Rating</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">text(Account.Rating)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Rating__c: string;
    /**
     * <h3><b>Account Record Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case(Account.RecordTypeId ,&quot;01220000000DiSB&quot;,&quot;Clinical Customer&quot;, &quot;01220000000DiSf&quot;, &quot;Clinical PROSPECT&quot;, &quot;01220000000DZSL&quot;, &quot;Lab Customer&quot;, &quot;01220000000DZSV&quot;, &quot;Lab PROSPECT&quot;,&quot;OTHER&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Record_Type__c: string;
    AccountId: string;
    ActivatedBy: User;
    ActivatedById: string;
    ActivatedDate: string;
    /**
     * <h3><b>Activity ID</b></h3>
     * <p>ID from related CFE</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Activity_ID__c: string;
    /**
     * <h3><b>Add/edit distributor</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&#39;apex/orderDealerVF?recordId=&#39; + Id, $Label.Add_edit_dealer, &quot;_self&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Add_edit_dealer__c: string;
    /**
     * <h3><b>Allowed discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    Allowed_discount__c: number;
    /**
     * <h3><b>Allowed payment terms (months)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(2,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1</code></td></tr>
     * </table>
     */
    Allowed_payment_terms_months__c: number;
    /**
     * <h3><b>amount of foc products with currency</b></h3>
     * <p>To mantain the currency of the country for approval process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Amount_of_free_of_charge_products__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    amount_of_foc_products_eith_currency__c: number;
    /**
     * <h3><b>Amount of free of charge products</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Value_of_free_product__c</code></td></tr>
     * </table>
     */
    Amount_of_free_of_charge_products__c: number;
    /**
     * <h3><b>Amount of Samples for Sales Rep</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Value_of_Samples_for_Sales_Rep__c</code></td></tr>
     * </table>
     */
    Amount_of_Samples_for_Sales_Rep__c: number;
    /**
     * <h3><b>Approval check (global)</b></h3>
     * <p>Used for checking if an approval is needed</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">&quot;Sales rep&quot;</code></td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sales rep</code></td><td>Sales rep</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Regional Sales Manager</code></td><td>Regional Sales Manager</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Area Sales Manager</code></td><td>Area Sales Manager</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">National Sales Manager</code></td><td>National Sales Manager</td><td nowrap>true</td></tr>
     * </table>
     */
    Approval_check_global__c: string;
    /**
     * <h3><b>Approval Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( ApprovalLevelInt__c, 1, &#39;Manager&#39;, 2, &#39;Area Manager&#39;, 3, &#39;Sales Director&#39;, &#39;No approval needed&#39;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevel__c: string;
    /**
     * <h3><b>Approval Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevelInt__c: number;
    /**
     * <h3><b>Approval Level (secondary)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ApprovalLevelSecondaryInt__c: number;
    /**
     * <h3><b>Overall Status and Approvals</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( Status, &quot;Created&quot;, IF( Total_of_Products_on_this_Order__c =0,  Image(&quot;/resource/1415991748000/NAOrdersAddProduct&quot;, &quot;Add Products&quot;, 80,195), IF(  SIMPLANT_Director_Approval__c =TRUE, IMAGE(&quot;/resource/1415307435000/NAApprovalsSIMPLANT&quot;, &quot;Additional Approvals Needed - click Submit for Approval to gain approval and submit to Customer Service&quot;,80,195), IF( Regional_Manager_Approval_Required__c =TRUE, IMAGE(&quot;/resource/1415307452000/NAApprovalsRM&quot;, &quot;RM Approval Needed - click Submit for Approval and send to Customer Service&quot;,80,195), IF(Waive_Shipping_Charges__c=TRUE,IMAGE(&quot;/resource/1415307452000/NAApprovalsRM&quot;, &quot;RM Approval Needed - click Submit for Approval and send to Customer Service&quot;,80,195), IMAGE(&quot;/resource/1415307396000/NAApprovalsNoApprovalNeeded&quot;, &quot;No Additional Approvals Needed - click Submit for Approval to gain approval and send to Customer Service&quot;,80,195))))), &quot;Submitted&quot;, IMAGE(&quot;/resource/1415990458000/NAApprovalsSUBMITTED&quot;, &quot;Submitted&quot;, 80, 195),&quot;Processing&quot;, IMAGE(&quot;/resource/1415990458000/NAApprovalsSUBMITTED&quot;, &quot;Pending CS Processing&quot;,80,195), &quot;On Hold&quot;, IMAGE(&quot;/resource/1415991296000/NAOrdersONHOLD&quot;,&quot;On Hold&quot;,200,200), &quot;Rejected&quot;, Image(&quot;/resource/1415991353000/NAOrdersRejected&quot;,&quot;Rejected&quot;,200,200), &quot;Activated&quot;, Image(&quot;/resource/1415991501000/NAOrdersActivated&quot;, &quot;Activated&quot;, 80,95),Image(&quot;/resource/1415991748000/NAOrdersAddProduct&quot;, &quot;Add Products&quot;, 80,195))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Approvals_Needed__c: string;
    /**
     * <h3><b>Area Director Approval Required</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AND( Regional_Manager_Approval_Required__c ,  Regional_Manager_Approved__c =TRUE, Waive_Shipping_Charges__c = TRUE, OR( TEXT( Shipping_Method__c )=&quot;UFJ: F IntnlPriority: FedEx Intnl Priority Warehouse&quot;, TEXT( Shipping_Method__c )=&quot;UPS Next Day end of day - UXC $20.50&quot;, TEXT( Shipping_Method__c )=&quot;UPS Saturday 10:30am - UXH $49.50&quot;, TEXT( Shipping_Method__c )=&quot;UPS COD Next Day 10:30 AM: UX2&quot;, TEXT( Shipping_Method__c )=&quot;UPS COD Next Day PM: UX3&quot;, TEXT( Shipping_Method__c )=&quot;UPS COD 2nd Day PM:  UX5&quot;, TEXT( Shipping_Method__c )=&quot;UPS Next Day 10:30am - UXB $27.00&quot;, TEXT( Shipping_Method__c )=&quot;FedEx Next Day 10:30am - UFB $27.00&quot;, TEXT( Shipping_Method__c )=&quot;FedEx Next Day end of day - UFC $20.50&quot;, TEXT( Shipping_Method__c )=&quot;FedEx Next Day Early AM - 6-8:30am - UFA $49.50&quot;, TEXT(Shipping_Method__c )=&quot;FedEx Saturday 10:30am - UFH $49.50&quot;))</code></td></tr>
     * </table>
     */
    Area_Director_Approval_Required__c: boolean;
    /**
     * <h3><b>Areas Director Approved</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Areas_Director_Approved__c: boolean;
    /**
     * <h3><b>ERP Order Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(40)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AX_Order_Number__c: string;
    /**
     * <h3><b>Backorder Notes</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Backorder_Notes__c: string;
    BillingAddress: Address;
    BillingCity: string;
    BillingCountry: string;
    BillingGeocodeAccuracy: string;
    BillingLatitude: number;
    BillingLongitude: number;
    BillingPostalCode: string;
    BillingState: string;
    BillingStreet: string;
    /**
     * <h3><b>Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Campaign})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Campaign__c: string;
    /**
     * <h3><b>Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Campaign})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Campaign__r: Campaign;
    ChangeEventHeader: ChangeEventHeader;
    /**
     * <h3><b>Commercial Leader approved</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Commercial_Leader_approved__c: boolean;
    /**
     * <h3><b>Commercial Leader e-mail</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Commercial_Leader_e_mail__c: string;
    /**
     * <h3><b>Communication to Customer Service</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Communication_to_Customer_Service__c: string;
    CompanyAuthorizedBy: User;
    CompanyAuthorizedById: string;
    /**
     * <h3><b>Confirmation #</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Confirmation__c: string;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Contact__c: string;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Contact__r: Contact;
    /**
     * <h3><b>Contact e-mail</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Contact__r.Email</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Contact_e_mail__c: string;
    Contract: Contract;
    ContractId: string;
    /**
     * <h3><b>Count Bundles</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order_bundle__c.Order__c</code></td></tr>
     * </table>
     */
    Count_Bundles__c: number;
    /**
     * <h3><b>Count Offer Codes</b></h3>
     * <p>This Roll-Up Summary field counts the OrderItems, which have an Offer Code applied to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Offer_Code_Applied_Number__c GREATER_THAN 0</code><br/>
     * </td></tr>
     * </table>
     */
    Count_Offer_Codes__c: number;
    /**
     * <h3><b>Count products</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * </table>
     */
    Count_products__c: number;
    /**
     * <h3><b>Country</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Country__c: string;
    /**
     * <h3><b>Coupon Code Count</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.UseCoupon__c EQUALS True</code><br/>
     * </td></tr>
     * </table>
     */
    CouponCodeCount__c: number;
    /**
     * <h3><b>Created by me</b></h3>
     * <p>Dynamic Checkbox that shows if the logged in the user creating the record</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CreatedById == $User.Id, TRUE, FALSE)</code></td></tr>
     * </table>
     */
    Created_by_me__c: boolean;
    /**
     * <h3><b>Created by My Direct Reports</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CreatedBy.ManagerId = $User.Id, True, false)</code></td></tr>
     * </table>
     */
    Created_by_My_Direct_Reports__c: boolean;
    /**
     * <h3><b>Created by My Second Direct Reports</b></h3>
     * <p>Created by the users managed by my direct reports</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( CreatedBy.Manager.ManagerId  = $User.Id, True, false)</code></td></tr>
     * </table>
     */
    Created_by_My_Second_Direct_Reports__c: boolean;
    CreatedBy: User;
    CreatedById: string;
    /**
     * <h3><b>Created By Name</b></h3>
     * <p>Created to be able to show the created by name in order related list on Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CreatedBy.Full_Name__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CreatedByName__c: string;
    CreatedDate: string;
    /**
     * <h3><b>Credit Card Expiration Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Encrypted Text(5)</td></tr>
     * <tr><td nowrap><b>Mask Type:</b></td><td nowrap>all</td></tr>
     * <tr><td nowrap><b>Mask Character:</b></td><td nowrap>asterisk</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Credit_Card_Expiration_Date__c: string;
    /**
     * <h3><b>CS Inbox Approved</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CS_Inbox_Approved__c: boolean;
    /**
     * <h3><b>CS Inbox Prospect Created</b></h3>
     * <p>Checked by a workflow on the approval process - if a  prospect needs to have a Movex Customer Created, the NA CS Inbox team creates the Movex Customer in a status 10, adds the Movex Number to the Account iN SFDC, and clicks &quot;Approve&quot;  on the Order to move the Order to the Project Team to release the Movex Customer from Status 10 to 20</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CS_Inbox_Prospect_Created__c: boolean;
    /**
     * <h3><b>CS Proj Team Movex Customer Released</b></h3>
     * <p>Updated by the approval process when the CS Project Team Member releases and merges the movex customer</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CS_Proj_Team_Movex_Customer_Released__c: boolean;
    /**
     * <h3><b>CS Project Team Member Assigned</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CS_Project_Team_Member_Assigned__c: string;
    /**
     * <h3><b>CS Project Team Member Assigned</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CS_Project_Team_Member_Assigned__r: User;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Customer Credit Card Information</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Encrypted Text(16)</td></tr>
     * <tr><td nowrap><b>Mask Type:</b></td><td nowrap>last four</td></tr>
     * <tr><td nowrap><b>Mask Character:</b></td><td nowrap>asterisk</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Credit_Card_Information__c: string;
    /**
     * <h3><b>Customer Service Alerts</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(AND( MTF_Evaluation1__c &gt;0, Waive_Shipping_Charges__c =TRUE),  IMAGE(&quot;/resource/1416838977000/NAOrdersMTFandShipping&quot;, &quot;MTF Check and Shipping Waived&quot;,90,250), if(AND( MTF_Evaluation1__c &gt;0, Waive_Shipping_Charges__c =FALSE), IMAGE(&quot;/resource/1416838931000/NAOrdersMTFNotify&quot;,&quot;Check MTF Documentation&quot;,90,250), IF(AND(MTF_Evaluation1__c =0, Waive_Shipping_Charges__c =TRUE), IMAGE(&quot;/resource/1416839015000/NAOrdersShippingWaived&quot;,&quot;Shipping is waived&quot;,30,150),&quot;&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Service_Alerts__c: string;
    /**
     * <h3><b># Customer Service Check</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Offer_Code_Applied_Number__c GREATER_OR_EQUAL 1</code><br/>
     * </td></tr>
     * </table>
     */
    Customer_Service_Check__c: number;
    /**
     * <h3><b>Customer Service Date/Time Completed</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Service_Date_Time_Completed__c: string;
    /**
     * <h3><b>Customer Service Email</b></h3>
     * <p>To update the right customer email to be used in the approval process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Service_Email__c: string;
    /**
     * <h3><b>Customer Service Processing Time (Hrs)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if( isblank(CS_Ownership_Assigned__c),(ActivatedDate-Customer_Service_Received__c)*24,(ActivatedDate-CS_Ownership_Assigned__c)*24)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Service_Processing_Time__c: number;
    /**
     * <h3><b>Customer Service Date/Time Received</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Service_Received__c: string;
    /**
     * <h3><b>Customer Service Rep Responsible</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Service_Rep_Responsible__c: string;
    /**
     * <h3><b>Customer Service Rep Responsible</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Service_Rep_Responsible__r: User;
    /**
     * <h3><b>Customer Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( Account.RecordTypeId , &quot;01220000000DiSB&quot;, IMAGE(&quot;/resource/1417017250000/NAOrdersMovexCustomer&quot;, &quot;Movex Customer&quot;,30,300) ,&quot;01220000000DiSf&quot;, IMAGE(&quot;/resource/1417017556000/NAOrdersProspectCustomer&quot;, &quot;PROSPECT CUSTOMER&quot;,30,300),&quot;OTHER&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Type__c: string;
    CustomerAuthorizedBy: Contact;
    CustomerAuthorizedById: string;
    /**
     * <h3><b>Dealer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Preferred_dealer_item__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Dealer__c: string;
    /**
     * <h3><b>Dealer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Preferred_dealer_item__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Dealer__r: Preferred_dealer_item__c;
    /**
     * <h3><b>Notes to dealer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Dealer_notes__c: string;
    /**
     * <h3><b>Dealer price set</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Dealer_price_set__c: boolean;
    /**
     * <h3><b>Delivery Cost</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(14,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Delivery_Cost__c: number;
    Description: string;
    /**
     * <h3><b>Direct Manager</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Owner:User.Manager.Full_Name__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Direct_Manager__c: string;
    /**
     * <h3><b># Discount Applied</b></h3>
     * <p>Counts the number of order line items with discount applied</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Discount_Percent__c GREATER_THAN 0</code><br/>
     * </td></tr>
     * </table>
     */
    Discount_Applied__c: number;
    /**
     * <h3><b>Discount Approval Needed</b></h3>
     * <p>For the Approval Process. Determines whether or not this order will need additional approvals. If Greater than 0, the order will need additional manager approval, if not - the order goes straight to Customer Service.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.DiscountApproval_Line_Item__c</code></td></tr>
     * </table>
     */
    Discount_Approval_Needed__c: number;
    /**
     * <h3><b>Contract Discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    Discount_to_be_used__c: number;
    /**
     * <h3><b>Discounted Shipping</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Discounted_Shipping__c: boolean;
    /**
     * <h3><b>Discounted Shipping Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Discounted_Shipping_Type__c: string;
    /**
     * <h3><b>Discount Reason</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Competitive Offer</code></td><td>Competitive Offer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Volume Discount</code></td><td>Volume Discount</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bundle Price</code></td><td>Bundle Price</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low Differentiation</code></td><td>Low Differentiation</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Relationship Improvement</code></td><td>Relationship Improvement</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prior Pricing</code></td><td>Prior Pricing</td><td nowrap>true</td></tr>
     * </table>
     */
    DiscountReason__c: string;
    /**
     * <h3><b>Discount Reason Check ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if( ISBLANK(TEXT(DiscountReason__c)) &amp;&amp; ApprovalLevelInt__c &gt;= 1 , null ,&#39;Pass&#39;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DiscountReasonCheck__c: string;
    /**
     * <h3><b>Distributor</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distributor__c: string;
    /**
     * <h3><b>Distributor</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distributor__r: Account;
    /**
     * <h3><b>Distributor contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distributor_contact__c: string;
    /**
     * <h3><b>Distributor contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distributor_contact__r: Contact;
    /**
     * <h3><b>Distributor details</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distributor_details__c: string;
    /**
     * <h3><b>Distributor email</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distributor_email__c: string;
    /**
     * <h3><b>Distributor Missing</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if(isblank( Distributor__c ), True, False)</code></td></tr>
     * </table>
     */
    Distributor_Missing__c: boolean;
    /**
     * <h3><b>Distributor PO number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Distributor_PO_number__c: string;
    EffectiveDate: Date;
    /**
     * <h3><b>Email Body</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Email_Body__c: string;
    /**
     * <h3><b>Email Template ID</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if( UserCountryETM__c =&quot;Portugal&quot;,&quot;00X0J000002PCNE&quot;,&quot;00X0J000002Wl0Z&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Email_Template_ID__c: string;
    EndDate: Date;
    /**
     * <h3><b>ERP Account Number on Contract</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Account_Number_on_Contract__c: string;
    /**
     * <h3><b>ERP Customer Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account.Movex__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Customer_Number__c: string;
    /**
     * <h3><b>ERP Return Message</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    ERPReturnMessage__c: string;
    /**
     * <h3><b>ERP Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERPStatus__c: string;
    /**
     * <h3><b>ERPStopFlag</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ERPStopFlag__c: boolean;
    /**
     * <h3><b>Notes to the customer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    External_notes__c: string;
    /**
     * <h3><b>First Level Approver</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FirstLevelApprover__c: string;
    /**
     * <h3><b>First Level Approver</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FirstLevelApprover__r: User;
    /**
     * <h3><b>FOC products delivered</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    FOC_products_delivered__c: boolean;
    /**
     * <h3><b>Free of Charge Order</b></h3>
     * <p>Used for NA to check if an entire order is an FOC order</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Free_of_Charge_Order__c: boolean;
    /**
     * <h3><b>Free Shipping Required?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(Total_of_Products_on_this_Order__c = Items_at_100_Discount__c, &quot;Free Shipping Required&quot;, &quot;No&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Free_Shipping_Required__c: string;
    /**
     * <h3><b>Global SFDC Order</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if (contains( RecordType.Name, &quot;global&quot;) , True, False)</code></td></tr>
     * </table>
     */
    Global_SFDC_Order__c: boolean;
    /**
     * <h3><b>Invoice #</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice__c: string;
    IsReductionOrder: boolean;
    /**
     * <h3><b># Items at 100% Discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Number_of_Items_at_100_Discount__c</code></td></tr>
     * </table>
     */
    Items_at_100_Discount__c: number;
    /**
     * <h3><b># items for free</b></h3>
     * <p>roll up on the products with 100% discount</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Discount_Percent__c EQUALS 100</code><br/>
     * </td></tr>
     * </table>
     */
    items_for_free__c: number;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    /**
     * <h3><b>Location</b></h3>
     * <p>Used by the North America Implants Customer Service Team to understand where Orders are in the Approval Process via Order List View</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISPICKVAL( Status , &quot;Rejected&quot;), &quot;Rejected - with Rep&quot;, IF( ISPICKVAL( Status , &quot;Activated&quot;), &quot;Complete&quot;, IF(ISPICKVAL( Status , &quot;Created&quot;), &quot;Sales Rep&quot;, IF( AND( NOT(ISBLANK(FirstLevelApprover__c)), NOT(ISBLANK(SecondLevelApprover__c)), NOT(ISBLANK(TEXT(Shipping_Method__c))), OR( Pricebook_Name__c = &quot;US Implants Pricing&quot;, Pricebook_Name__c = &quot;US MIS Implants Pricing&quot;, Pricebook_Name__c = &quot;CA Implants Pricing&quot;)), IF( AND( ISPICKVAL( Status , &quot;Submitted&quot;), ApprovalLevelInt__c = 1, Regional_Manager_Approved__c = FALSE), &quot;Manager Approval&quot;, IF( AND( ISPICKVAL( Status , &quot;Processing&quot;), ApprovalLevelInt__c = 2, Areas_Director_Approved__c = FALSE), &quot;Area Director Approval&quot;, IF( AND( ISPICKVAL( Status , &quot;Processing&quot;), ApprovalLevelInt__c &gt;= 3, Current_approver_ID__c = &quot;0050J000006saxpQAA&quot;), &quot;VP Approval&quot;, IF( AND( ISPICKVAL( Status , &quot;Processing&quot;), ApprovalLevelInt__c &gt;= 3, Commercial_Leader_approved__c = FALSE), &quot;VP Approval&quot;,  &quot;CS Inbox - Order Process&quot;)))),  IF( AND( OR(  BEGINS(Pricebook_Name__c, &quot;US IMP&quot;), BEGINS(Pricebook_Name__c, &quot;CA IMP&quot;)), Pricebook_Name__c != &quot;US Implants Demo&quot;), IF( AND(Regional_Manager_Approved__c = FALSE, OR( total_discount_on_the_order_c__c &gt; 0, AND(Waive_Shipping_Charges__c = TRUE, OR(BEGINS(TEXT(Shipping_Method__c), &quot;UFJ&quot;), BEGINS(TEXT(Shipping_Method__c), &quot;FedEx Next&quot;), BEGINS(TEXT(Shipping_Method__c), &quot;FedEx Saturday&quot;), BEGINS(TEXT(Shipping_Method__c), &quot;UPS Next&quot;), BEGINS(TEXT(Shipping_Method__c), &quot;UPS Saturday&quot;), BEGINS(TEXT(Shipping_Method__c), &quot;UPS COD&quot;))))), &quot;Manager Approval&quot;,  &quot;CS Inbox - Order Process&quot;), &quot;N/A&quot;)))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Location__c: string;
    /**
     * <h3><b># Manager Approval</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Discount_Percent__c GREATER_THAN 0</code><br/>
     * <code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Offer_Code_Applied_Number__c EQUALS 0</code><br/>
     * </td></tr>
     * </table>
     */
    Manager_Approval__c: number;
    /**
     * <h3><b>Manager approval discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">total_discount_on_the_order_c__c -  Allowed_discount__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Manager_approval_discount__c: number;
    /**
     * <h3><b>Margin Guidance Indicator</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(OR( WeightedUpperGuidance__c==0,WeightedLowerGuidance__c==0), &#39;n/a&#39;, IF( ((TF_TotalSalesMarginCalculation__c- TotalCost__c)/TF_TotalSalesMarginCalculation__c) &gt; WeightedUpperGuidance__c, IMAGE(&quot;/img/samples/color_green.gif&quot;, &quot;Green&quot;, 20, 20), IF( AND( ((TF_TotalSalesMarginCalculation__c - TotalCost__c)/TF_TotalSalesMarginCalculation__c) &lt;= WeightedUpperGuidance__c, ((TF_TotalSalesMarginCalculation__c - TotalCost__c)/TF_TotalSalesMarginCalculation__c) &gt;= WeightedLowerGuidance__c ), IMAGE(&quot;/img/samples/color_yellow.gif&quot;, &quot;Yellow&quot;, 20, 20), IMAGE(&quot;/img/samples/color_red.gif&quot;, &quot;Red&quot;, 20, 20) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MarginGuidanceIndicator__c: string;
    /**
     * <h3><b>Movex Customer Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account.Movex__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Customer_Number__c: string;
    /**
     * <h3><b>Movex Order Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Order_Number__c: string;
    /**
     * <h3><b>MTF Evaluation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.MTF_EvaluationNumber__c</code></td></tr>
     * </table>
     */
    MTF_Evaluation1__c: number;
    /**
     * <h3><b>NA: Area</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account_Owner__r.NA_Area__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NA_Area__c: string;
    Name: string;
    /**
     * <h3><b>No of FOC rows</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Free_of_Charge_Delivery__c NOT_EQUAL </code><br/>
     * </td></tr>
     * </table>
     */
    No_of_FOC_rows__c: number;
    /**
     * <h3><b>Non-SIMPLANT Items</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Non_SIMPLANT_Evaluation__c</code></td></tr>
     * </table>
     */
    Non_SIMPLANT_Items__c: number;
    /**
     * <h3><b>Note for canceled orders</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Note_for_canceled_orders__c: string;
    /**
     * <h3><b>Offer Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Offer_Code__c: string;
    Opportunity: Opportunity;
    OpportunityId: string;
    OrchestrationSbmsStatus: string;
    /**
     * <h3><b>Order Account Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account.Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Account_Name__c: string;
    /**
     * <h3><b>Order Amount before total discount</b></h3>
     * <p>Value of the order with discount</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Total_Line_Item_Price__c</code></td></tr>
     * </table>
     */
    Order_amount_before_disc_globa__c: number;
    /**
     * <h3><b>Order Amount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(Order_amount_before_disc_globa__c + Order_bundle_amount__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Amount_global__c: number;
    /**
     * <h3><b>Order amount (number)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TotalAmount</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_amount_number__c: number;
    /**
     * <h3><b>Order amount without discounts</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TotalAmount</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_amount_without_discounts__c: number;
    /**
     * <h3><b>Order bundle amount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order_bundle__c.Order__c</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order_bundle__c.Total_price__c</code></td></tr>
     * </table>
     */
    Order_bundle_amount__c: number;
    /**
     * <h3><b>Order Discount</b></h3>
     * <p>Discount for the total amount of the order</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Discount__c: number;
    /**
     * <h3><b>Order Link</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Country__c =&quot;PT&quot;, hyperlink(&quot;/email/author/emailauthor.jsp?retURL=/&quot;&amp;Id&amp;&quot;&amp;p3_lkid=&quot;&amp;Id&amp;&quot;&amp;rtype=003&amp;p5=&quot;&amp;$User.Email&amp;&quot;&amp;template_id=00X0J000002PD7b&quot;,&quot;Send Quote&quot; ), hyperlink(&quot;/email/author/emailauthor.jsp?retURL=/&quot;&amp;Id&amp;&quot;&amp;p3_lkid=&quot;&amp;Id&amp;&quot;&amp;rtype=003&amp;p5=&quot;&amp;$User.Email&amp;&quot;&amp;template_id=00X0J000002RY5a&quot;,&quot;Send Quote&quot; ))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Link__c: string;
    /**
     * <h3><b>Order Missing Info</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">VAT Number</code></td><td>VAT Number</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Shipping Address</code></td><td>Shipping Address</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No products in the order</code></td><td>No products in the order</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor Name</code></td><td>Distributor Name</td><td nowrap>true</td></tr>
     * </table>
     */
    Order_Missing_Info__c: string;
    /**
     * <h3><b>Order Owner Full Name</b></h3>
     * <p>Formula field displaying Order Owner</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Owner:User.Full_Name__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Owner__c: string;
    /**
     * <h3><b>Order quote valid until</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_quote_end_date__c: Date;
    /**
     * <h3><b>Order Reason</b></h3>
     * <p>used by Taiwan and US (see TFUS-000006409)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment purchase order</code></td><td>Consignment purchase order</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment transfer</code></td><td>Consignment transfer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Delivery Order</code></td><td>Delivery Order</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Equipment Promo Exception Requests</code></td><td>Equipment Promo Exception Requests</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Make It Right orders</code></td><td>Make It Right orders</td><td nowrap>true</td></tr>
     * </table>
     */
    Order_Reason__c: string;
    /**
     * <h3><b>Order SBU</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Owner:User.User_SBU__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_SBU__c: string;
    /**
     * <h3><b>Order Source</b></h3>
     * <p>To track the origin of the order</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Customer Visit</code></td><td>Customer Visit</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Call from customer</code></td><td>Call from customer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Email from customer</code></td><td>Email from customer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dealer</code></td><td>Dealer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order to Dealer's Rep</code></td><td>Order to Dealer&#39;s Rep</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Webshop</code></td><td>Webshop</td><td nowrap>true</td></tr>
     * </table>
     */
    Order_Source__c: string;
    /**
     * <h3><b>Order subtype</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Telesales</code></td><td>Telesales</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Austenal</code></td><td>Austenal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ceramco</code></td><td>Ceramco</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Institutional</code></td><td>Institutional</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Midwest</code></td><td>Midwest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive</code></td><td>Preventive</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative</code></td><td>Restorative</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthetics</code></td><td>Prosthetics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Austenal & Trubyte</code></td><td>Austenal &amp; Trubyte</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Offers</code></td><td>Offers</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Standard</code></td><td>Standard</td><td nowrap>true</td></tr>
     * </table>
     */
    Order_subtype__c: string;
    /**
     * <h3><b>Order Tracking</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IMAGE(&quot;/servlet/servlet.FileDownload?file=0150J0000045MNP&quot;, &quot;Connect to the VPN before tracking&quot;,25, 200)&amp;&quot;  |  &quot; &amp;HYPERLINK(&quot;https://www.centiro.com/c3web&quot; , &quot;Click to Track US6 Regen Orders&quot;)&amp;&quot;|   &quot;&amp;Hyperlink(&quot;http://c3web.astratech.net/&quot;, &quot;Click to Track All Other Orders&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Tracking__c: string;
    /**
     * <h3><b>Order Type</b></h3>
     * <p>Order Type for DNA</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Free Goods Order</code></td><td>Free Goods Order</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthetics</code></td><td>Prosthetics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Telesales</code></td><td>Telesales</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants</code></td><td>Implants</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Discount on Demand</code></td><td>Discount on Demand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PREP</code></td><td>PREP</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics</code></td><td>Endodontics</td><td nowrap>true</td></tr>
     * </table>
     */
    Order_Type__c: string;
    /**
     * <h3><b>Order Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if( and( Country__c=&quot;US&quot;,  Free_of_Charge_Order__c =True),&quot;Free Goods Order&quot;,   text(Order_Type__c) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_Type_formula__c: string;
    OrderNumber: string;
    OrderReferenceNumber: string;
    /**
     * <h3><b>Orders Related to CFE</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Orders_Related_to_CFE__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Orders_Related_to_CFE__c: string;
    /**
     * <h3><b>Orders Related to CFE</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Orders_Related_to_CFE__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Orders_Related_to_CFE__r: Orders_Related_to_CFE__c;
    OriginalOrder: Order;
    OriginalOrderId: string;
    /**
     * <h3><b>Overdue Invoice Age</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account.Credit_Limit_4__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Overdue_Invoice_Age__c: number;
    /**
     * <h3><b>Overdue Invoice Amount at this Account</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Account.Outstanding_Invoice_Amount__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Overdue_Invoice_Amount_at_this_Account__c: number;
    Owner: User;
    OwnerId: string;
    /**
     * <h3><b># Parent Kit Product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.ParentKit__c EQUALS True</code><br/>
     * </td></tr>
     * </table>
     */
    ParentKitProduct__c: number;
    /**
     * <h3><b>Payment Period</b></h3>
     * <p>Indonesia has the legal requirement to indicate on each order sent out, which payment terms (time-wise in a sense of &quot;When is the order amount being settled by the customer?) the customer is choosing</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TOP14</code></td><td>TOP14</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TOP30</code></td><td>TOP30</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Transfer prior to delivery</code></td><td>Transfer prior to delivery</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cash on Delivery </code></td><td>Cash on Delivery </td><td nowrap>true</td></tr>
     * </table>
     */
    Payment_Period__c: string;
    /**
     * <h3><b>Payment terms (months)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(2,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1</code></td></tr>
     * </table>
     */
    Payment_terms_months__c: number;
    /**
     * <h3><b>Payment type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS credit card</code></td><td>DS credit card</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Credit card</code></td><td>Credit card</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bank transfer</code></td><td>Bank transfer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Promissory note</code></td><td>Promissory note</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cheque</code></td><td>Cheque</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cash on hand</code></td><td>Cash on hand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Clearing</code></td><td>Clearing</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mpay</code></td><td>Mpay</td><td nowrap>true</td></tr>
     * </table>
     */
    Payment_type__c: string;
    /**
     * <h3><b>Payment type discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    Payment_type_discount__c: number;
    /**
     * <h3><b>PDF Butler Alternative Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pricebook2.PDF_Butler_Template__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PDFButlerAlternativeName__c: string;
    /**
     * <h3><b>PDF Butler Draft</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if(TEXT(Status)=&#39;Activated&#39;, &#39;&#39; , &#39;-Draft&#39;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PDFButlerDraft__c: string;
    /**
     * <h3><b>PDF Butler Locale</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT($User.LocaleSidKey)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PDFButlerLocale__c: string;
    /**
     * <h3><b>PDF Butler Send Email View</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">! ISBLANK(Contact__c) &amp;&amp; Contact__r.Email != &#39;&#39;</code></td></tr>
     * </table>
     */
    PDFButlerSendEmailView__c: boolean;
    PoDate: Date;
    PoNumber: string;
    /**
     * <h3><b>PPN 11%</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(Order_Amount_global__c / 1.11 ) * 0.11</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PPN10__c: number;
    /**
     * <h3><b>Preferred Ship Date</b></h3>
     * <p>Requested as part of TFUS-000006281</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Preferred_Ship_Date__c: Date;
    Pricebook2: Pricebook2;
    Pricebook2Id: string;
    /**
     * <h3><b>Pricebook Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pricebook2.Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Pricebook_Name__c: string;
    /**
     * <h3><b>Process Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProcessStatus__c: string;
    /**
     * <h3><b>Profile Order Creator</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CreatedBy.Profile__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Profile_Order_Creator__c: string;
    /**
     * <h3><b>Project Team Approval Required</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( Prospect_at_the_point_of_order_entry__c=TRUE, Account_Record_Type__c  = &quot;Clinical PROSPECT&quot;), TRUE, FALSE)</code></td></tr>
     * </table>
     */
    Project_Team_Approval_Required__c: boolean;
    /**
     * <h3><b>Project Team Approved</b></h3>
     * <p>Populated by workflow/approval process</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Project_Team_Approved__c: boolean;
    /**
     * <h3><b>Project Team Date/Time Completed</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Project_Team_Date_Time_Completed__c: string;
    /**
     * <h3><b>Project Team Date/Time Received</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Project_Team_Date_Time_Received__c: string;
    /**
     * <h3><b>Prospect at the point of order entry</b></h3>
     * <p>Updated by a workflow at the point of order entry - evaluates the record type of the original account to determine processing by the customer service team</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Prospect_at_the_point_of_order_entry__c: boolean;
    /**
     * <h3><b>Quote Status</b></h3>
     * <p>Field to set the status of the quote</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Created</code></td><td>Created</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Emailed to Customer</code></td><td>Emailed to Customer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Confirmed by Customer</code></td><td>Confirmed by Customer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order</code></td><td>Order</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Order</code></td><td>No Order</td><td nowrap>true</td></tr>
     * </table>
     */
    Quote_Status__c: string;
    RecordType: RecordType;
    RecordTypeId: string;
    /**
     * <h3><b>Regional Manager</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Regional_Manager__c: string;
    /**
     * <h3><b>Regional Manager</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Regional_Manager__r: User;
    /**
     * <h3><b>Regional Manager Approval Required</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( AND( Discount_Approval_Needed__c  &gt; 0,  Non_SIMPLANT_Items__c&gt;=1,  SIMPLANT_Included__c &gt;=0), AND( Discount_Approval_Needed__c &gt;0,  Non_SIMPLANT_Items__c&gt;=0,  SIMPLANT_Included__c &gt;0,  Waive_Shipping_Charges__c =TRUE), AND( Discount_Approval_Needed__c &gt;0,  Non_SIMPLANT_Items__c&gt;=0,  SIMPLANT_Included__c &gt;0), AND(Non_SIMPLANT_Items__c &gt;0, Waive_Shipping_Charges__c =TRUE), AND( SIMPLANT_Included__c &gt;=0, Non_SIMPLANT_Items__c &gt;=1,Waive_Shipping_Charges__c =TRUE)), TRUE,FALSE)</code></td></tr>
     * </table>
     */
    Regional_Manager_Approval_Required__c: boolean;
    /**
     * <h3><b>Regional Manager Approved</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Regional_Manager_Approved__c: boolean;
    /**
     * <h3><b>Regional Manager E-mail</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Regional_Manager_E_mail__c: string;
    RelatedOrder: Order;
    RelatedOrderId: string;
    ReplayId: string;
    /**
     * <h3><b>Sales Rep Address</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if(  Ship_to_Sales_Rep__c =False,&quot;&quot;, if(isblank(Account_for_Sample_in_AX__c),&quot;&quot;, if(isblank(Account_for_Sample_in_AX__r.ShippingStreet),&quot;&quot;, Account_for_Sample_in_AX__r.ShippingStreet) &amp; if(isblank(Account_for_Sample_in_AX__r.ShippingPostalCode),&quot;&quot;, &quot; , &quot; &amp; Account_for_Sample_in_AX__r.ShippingPostalCode)&amp; if (isblank(Account_for_Sample_in_AX__r.ShippingCity),&quot;&quot;, &quot; , &quot; &amp;  Account_for_Sample_in_AX__r.ShippingCity)&amp; if(isblank( Account_for_Sample_in_AX__r.ShippingState),&quot;&quot;, &quot; , &quot; &amp;  Account_for_Sample_in_AX__r.ShippingState)&amp; if(isblank(Account_for_Sample_in_AX__r.ShippingCountry),&quot;&quot;, &quot; , &quot;  &amp; Account_for_Sample_in_AX__r.ShippingCountry)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Rep_Address__c: string;
    /**
     * <h3><b>Sales Lead</b></h3>
     * <p>TFUS-000003080</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Field_Sales_Project_Members__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesLead__c: string;
    /**
     * <h3><b>Sales Lead</b></h3>
     * <p>TFUS-000003080</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Field_Sales_Project_Members__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesLead__r: Field_Sales_Project_Members__c;
    /**
     * <h3><b>Sales Origin</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesOrigin__c: string;
    /**
     * <h3><b>Sample Order</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if(  isblank(Account_for_Sample_in_AX__c ),False,True)</code></td></tr>
     * </table>
     */
    Sample_Order__c: boolean;
    /**
     * <h3><b># sample products</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Discount_Percent__c EQUALS 100</code><br/>
     * <code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Value_of_Samples_for_Sales_Rep__c GREATER_THAN 0</code><br/>
     * </td></tr>
     * </table>
     */
    sample_products__c: number;
    /**
     * <h3><b>Second Level Approver</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SecondLevelApprover__c: string;
    /**
     * <h3><b>Second Level Approver</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SecondLevelApprover__r: User;
    /**
     * <h3><b>Not to send order to EDI automatically</b></h3>
     * <p>Used for US to control that a distributor order is not sent to dealer via EDI</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Send_order_manually__c: boolean;
    /**
     * <h3><b>Ship from</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor</code></td><td>Distributor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dentsply</code></td><td>Dentsply</td><td nowrap>true</td></tr>
     * </table>
     */
    Ship_from__c: string;
    /**
     * <h3><b>Ship Method</b></h3>
     * <p>Picklist field (required) only on the Prosthetics Direct Orders (USC - US)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COD</code></td><td>COD</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx - Ground</code></td><td>FedEx - Ground</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx – 1 Day</code></td><td>FedEx – 1 Day</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx – 2 Day</code></td><td>FedEx – 2 Day</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS - Ground</code></td><td>UPS - Ground</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS – 2 Day</code></td><td>UPS – 2 Day</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS – 3 Day</code></td><td>UPS – 3 Day</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS – Overnight</code></td><td>UPS – Overnight</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * </table>
     */
    Ship_Method__c: string;
    /**
     * <h3><b>Ship to Sales Rep</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Ship_to_Sales_Rep__c: boolean;
    /**
     * <h3><b>Shipping Charges</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bill Customer for Shipping</code></td><td>Bill Customer for Shipping</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Waive Shipping</code></td><td>Waive Shipping</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Discounted Shipping</code></td><td>Discounted Shipping</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SIMPLANT Software Only - No Shipping Required</code></td><td>SIMPLANT Software Only - No Shipping Required</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    Shipping_Charges__c: string;
    /**
     * <h3><b>Delivery Method</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS (UXJ): IntnlPriority: UPS Intnl Priority Warehouse</code></td><td>UPS (UXJ): IntnlPriority: UPS Intnl Priority Warehouse</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UFJ: F IntnlPriority: FedEx Intnl Priority Warehouse</code></td><td>UFJ: F IntnlPriority: FedEx Intnl Priority Warehouse</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx 2nd Day PM - UFE $14.50</code></td><td>FedEx 2nd Day PM - UFE $14.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx 3rd Day PM: UFF $13</code></td><td>FedEx 3rd Day PM: UFF $13</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx Next Day 10:30am - UFB $27.00</code></td><td>FedEx Next Day 10:30am - UFB $27.00</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx Next Day end of day - UFC $20.50</code></td><td>FedEx Next Day end of day - UFC $20.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx Next Day Early AM - 6-8:30am - UFA $49.50</code></td><td>FedEx Next Day Early AM - 6-8:30am - UFA $49.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FedEx Saturday 10:30am - UFH $49.50</code></td><td>FedEx Saturday 10:30am - UFH $49.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS 2nd Day PM - UXE $14.50</code></td><td>UPS 2nd Day PM - UXE $14.50</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS 2nd Day AM - UXD-$16.50</code></td><td>UPS 2nd Day AM - UXD-$16.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS Next Day 10:30am - UXB $27.00</code></td><td>UPS Next Day 10:30am - UXB $27.00</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS Next Day end of day - UXC $20.50</code></td><td>UPS Next Day end of day - UXC $20.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS Ground - UXG $8.50</code></td><td>UPS Ground - UXG $8.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS Saturday 10:30am - UXH $49.50</code></td><td>UPS Saturday 10:30am - UXH $49.50</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SIMPLANT- No Shipping</code></td><td>SIMPLANT- No Shipping</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS COD Next Day 10:30 AM: UX2</code></td><td>UPS COD Next Day 10:30 AM: UX2</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS COD Next Day PM: UX3</code></td><td>UPS COD Next Day PM: UX3</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UPS COD 2nd Day PM:  UX5</code></td><td>UPS COD 2nd Day PM:  UX5</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    Shipping_Method__c: string;
    ShippingAddress: Address;
    /**
     * <h3><b>Shipping Address</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Address__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShippingAddress__c: string;
    /**
     * <h3><b>Shipping Address</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Address__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ShippingAddress__r: Address__c;
    ShippingCity: string;
    ShippingCountry: string;
    ShippingGeocodeAccuracy: string;
    ShippingLatitude: number;
    ShippingLongitude: number;
    ShippingPostalCode: string;
    ShippingState: string;
    ShippingStreet: string;
    /**
     * <h3><b>SIMPLANT CS Approval Required</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if(SIMPLANT_Software_Evaluation__c  &lt;&gt; 0,TRUE,FALSE)</code></td></tr>
     * </table>
     */
    SIMPLANT_CS_Approval_Required__c: boolean;
    /**
     * <h3><b>SIMPLANT Customer Service Approved</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SIMPLANT_Customer_Service_Approved__c: boolean;
    /**
     * <h3><b>SIMPLANT Director Approval Required</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(OR (AND (SIMPLANT_Included__c &gt;0,  Discount_Approval_Needed__c &gt;0,  Non_SIMPLANT_Items__c =0,  Waive_Shipping_Charges__c =TRUE), AND( SIMPLANT_Included__c &gt;0,  Discount_Approval_Needed__c &gt;0,  Non_SIMPLANT_Items__c =0)), TRUE,FALSE)</code></td></tr>
     * </table>
     */
    SIMPLANT_Director_Approval__c: boolean;
    /**
     * <h3><b>SIMPLANT Director Approved</b></h3>
     * <p>Populated by workflow/approvals</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SIMPLANT_Director_Approved__c: boolean;
    /**
     * <h3><b>SIMPLANT Included</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.SIMPLANT_Line_Item__c</code></td></tr>
     * </table>
     */
    SIMPLANT_Included__c: number;
    /**
     * <h3><b>SIMPLANT Software Evaluation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.SIMPLANT_Software_Line_Item__c</code></td></tr>
     * </table>
     */
    SIMPLANT_Software_Evaluation__c: number;
    /**
     * <h3><b>Source Record</b></h3>
     * <p>#1674</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Source_Record__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceRecord__c: string;
    /**
     * <h3><b>Source Record</b></h3>
     * <p>#1674</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Source_Record__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceRecord__r: Source_Record__c;
    /**
     * <h3><b>Special Requests</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SpecialRequests__c: string;
    Status: string;
    StatusCode: string;
    /**
     * <h3><b>submitted date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    submitted_date__c: string;
    /**
     * <h3><b>Submitted for Approval</b></h3>
     * <p>This box is checked only when the approval process has been enabled. This is to create a validation rule, such that only the approval process can change the Status</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Submitted_for_Approval__c: boolean;
    /**
     * <h3><b>Total Sales (w/ Margin Calculation)</b></h3>
     * <p>Used in formula of the Margin Indicator
     * Total Sales w/ discount exc. lines w/o identified Margin Guidance</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Total_Line_Item_Price__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.Cost__c GREATER_THAN 0</code><br/>
     * </td></tr>
     * </table>
     */
    TF_TotalSalesMarginCalculation__c: number;
    /**
     * <h3><b>Total After PPN</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order_Amount_global__c -  PPN10__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_After_PPN__c: number;
    /**
     * <h3><b>Total Amount</b></h3>
     * <p>Prints the total amount of an order, including Order Amount and Delivery Cost</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Delivery_Cost__c  +  Order_Amount_global__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Amount__c: number;
    /**
     * <h3><b>Total Bundle Discount</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order_bundle__c.Order__c</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order_bundle__c.Order_Bundle_Discount_Amount__c</code></td></tr>
     * </table>
     */
    Total_Bundle_Discount__c: number;
    /**
     * <h3><b>Total #bundle product in the order</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Order_bundle__c.Order__c</code></td></tr>
     * </table>
     */
    Total_bundle_product_in_the_order__c: number;
    /**
     * <h3><b>% total discount on the order</b></h3>
     * <p>The % discount doesn not count the percentage of discount in the bundle</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if ((TotalAmount+ Order_bundle_amount__c)=0,0,( (TotalAmount+ Order_bundle_amount__c) - Order_Amount_global__c )/TotalAmount )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    total_discount_on_the_order_c__c: number;
    /**
     * <h3><b>Total # of Products on this Order</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * </table>
     */
    Total_of_Products_on_this_Order__c: number;
    /**
     * <h3><b>Total Order Discount</b></h3>
     * <p>(Order Amount before Discount has been subtracted) MINUS (Order Amount after Discount has been substracted) = Order Discount</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">-(Order_amount_before_disc_globa__c  -   TotalAmount)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Order_Discount__c: number;
    TotalAmount: number;
    /**
     * <h3><b>Total Cost</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.TotalCost__c</code></td></tr>
     * </table>
     */
    TotalCost__c: number;
    Type: string;
    /**
     * <h3><b>Type</b></h3>
     * <p>field for USC to manage special DOD offer</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AD Overage Spend</code></td><td>AD Overage Spend</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Discount on Demand</code></td><td>Discount on Demand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Grip Stock</code></td><td>Grip Stock</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New Customer</code></td><td>New Customer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New User 1+1</code></td><td>New User 1+1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New User 2+1</code></td><td>New User 2+1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Tessera Trade Out B7,T3,G3</code></td><td>Tessera Trade Out B7,T3,G3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Trade In</code></td><td>Trade In</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Trade Out</code></td><td>Trade Out</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Tradeout 1+1</code></td><td>Tradeout 1+1</td><td nowrap>true</td></tr>
     * </table>
     */
    Type__c: string;
    /**
     * <h3><b>US Telesales Order Historical</b></h3>
     * <p>Field managed using approval process to track if in the order was created by a person that at the creation time had a Telesales profile</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    US__c: boolean;
    /**
     * <h3><b>US Telesales Order</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If(  US__c =True, True, if(Owner:User.Profile.Id = &#39;00e0J000001Ar3p&#39;, True, False))</code></td></tr>
     * </table>
     */
    US_Telesales_Order__c: boolean;
    /**
     * <h3><b>US TeleSales Team Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CreatedBy.US_TeleSales_Team_Name__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    US_Telsales__c: string;
    /**
     * <h3><b>Used Coupons Value</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.UsedCouponValue__c</code></td></tr>
     * </table>
     */
    UsedCouponsValue__c: number;
    /**
     * <h3><b>User CountryPL</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Australia</code></td><td>Australia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Austria</code></td><td>Austria</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Belarus</code></td><td>Belarus</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Belgium</code></td><td>Belgium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BEX</code></td><td>BEX</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Brazil</code></td><td>Brazil</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Canada</code></td><td>Canada</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Croatia</code></td><td>Croatia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cyprus</code></td><td>Cyprus</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Czech Republic</code></td><td>Czech Republic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Denmark</code></td><td>Denmark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor Markets</code></td><td>Distributor Markets</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Egypt</code></td><td>Egypt</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Estonia</code></td><td>Estonia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Finland</code></td><td>Finland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">France</code></td><td>France</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Germany</code></td><td>Germany</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Greece</code></td><td>Greece</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Holland</code></td><td>Holland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hong Kong</code></td><td>Hong Kong</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HQ: DE</code></td><td>HQ: DE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HQ: NL</code></td><td>HQ: NL</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HQ: SE</code></td><td>HQ: SE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hungary</code></td><td>Hungary</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">INDIA</code></td><td>INDIA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Indonesia</code></td><td>Indonesia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Italy</code></td><td>Italy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Japan</code></td><td>Japan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Jordan</code></td><td>Jordan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Kazakhstan</code></td><td>Kazakhstan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Kuwait</code></td><td>Kuwait</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Latvia</code></td><td>Latvia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lithuania</code></td><td>Lithuania</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Luxembourg</code></td><td>Luxembourg</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Malaysia</code></td><td>Malaysia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Malta</code></td><td>Malta</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New Zealand</code></td><td>New Zealand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Norway</code></td><td>Norway</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oman</code></td><td>Oman</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Philippines</code></td><td>Philippines</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Poland</code></td><td>Poland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Portugal</code></td><td>Portugal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Romania</code></td><td>Romania</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Russia</code></td><td>Russia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Saudi Arabia</code></td><td>Saudi Arabia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Singapore</code></td><td>Singapore</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Slovakia</code></td><td>Slovakia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">South Africa</code></td><td>South Africa</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">South Korea</code></td><td>South Korea</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Spain</code></td><td>Spain</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sweden</code></td><td>Sweden</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Switzerland</code></td><td>Switzerland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Taiwan</code></td><td>Taiwan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Thailand</code></td><td>Thailand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Turkey</code></td><td>Turkey</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UAE</code></td><td>UAE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK</code></td><td>UK</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ukraine</code></td><td>Ukraine</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">USA</code></td><td>USA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Vietnam</code></td><td>Vietnam</td><td nowrap>true</td></tr>
     * </table>
     */
    User_CountryPL__c: string;
    /**
     * <h3><b>User Country</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CreatedBy.Country</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    User_Geography__c: string;
    /**
     * <h3><b>UserCountryETM</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">text(Owner:User.User_Country__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    UserCountryETM__c: string;
    /**
     * <h3><b>VAT Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if(isblank( Account.Vat_Registration_No__c ), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mkdN&quot;, &quot;KO&quot;, 30, 30) , Account.Vat_Registration_No__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    VAT_Number__c: string;
    /**
     * <h3><b>Waive Shipping Charges</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Waive_Shipping_Charges__c: boolean;
    /**
     * <h3><b>Was this Order ever put ON HOLD</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Was_this_Order_ever_put_ON_HOLD__c: boolean;
    /**
     * <h3><b>Weighted Lower Guidance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.WeightedLowerGuidance__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.UpperGuidance__c NOT_EQUAL 0</code><br/>
     * </td></tr>
     * </table>
     */
    WeightedLowerGuidance__c: number;
    /**
     * <h3><b>Weighted Upper Guidance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.OrderId</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.WeightedUpperGuidance__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OrderItem.UpperGuidance__c NOT_EQUAL 0</code><br/>
     * </td></tr>
     * </table>
     */
    WeightedUpperGuidance__c: number;
}