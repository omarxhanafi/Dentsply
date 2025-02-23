// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Non_ERP_Products__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Additional Name</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Additional_Name__c?: string;
    /**
     * <h3><b>Assignment Rule Codes</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AssignmentRuleCodes__c?: string;
    /**
     * <h3><b>Catch Phrase</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Catch_Phrase__c?: string;
    ChangeEventHeader?: ChangeEventHeader;
    /**
     * <h3><b>Competitor Product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Competitor_Product__c?: boolean;
    /**
     * <h3><b>Countries</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Countries__c?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>Custom Category</b></h3>
     * <p>Used for any kind of Custome categorization of the non-erp products. Example is MENA region that categorize the non-erp into specific categorizations used for their sub-segmentation calculations</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CustomCategory__c?: string;
    /**
     * <h3><b>Details</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Details__c?: string;
    /**
     * <h3><b>Global Product (Show to all countries)</b></h3>
     * <p>If checked, this product will be shown to all countries regardless of the countries&#39; field selection.
     * TFUS-000005477</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    GlobalProductShowtoallcountries__c?: boolean;
    /**
     * <h3><b>Inactive</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Inactive__c?: boolean;
    /**
     * <h3><b>Internal Id</b></h3>
     * <p>Record identifier used for data migration and internal (SFDC) usage.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    InternalId__c?: string;
    /**
     * <h3><b>Kana</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Kana__c?: string;
    /**
     * <h3><b>Focus Product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    KeyProduct__c?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * <h3><b>Manufacturer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Manufacturer__c?: string;
    /**
     * <h3><b>Market</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(TEXT( Product_Market_Mapping__r.Market__c )=&#39;IT&#39;, &#39;Italy&#39;,IF(TEXT( Product_Market_Mapping__r.Market__c )=&#39;ES&#39;, &#39;Iberia&#39;, TEXT(Product_Market_Mapping__r.Market__c)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Market__c?: string;
    Name?: string;
    /**
     * <h3><b>Non-ERP Product Id (18 digit)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASESAFEID(Id)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Non_ERP_Product_Id_18_digit__c?: string;
    /**
     * <h3><b>Old Product ID</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Old_Product_ID__c?: string;
    Owner?: SObject;
    OwnerId?: string;
    /**
     * <h3><b>Product Group (Local)</b></h3>
     * <p>Free Text, optional</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(250)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Category__c?: string;
    /**
     * <h3><b>Product Image 1</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Product_Image_1__c?: string;
    /**
     * <h3><b>Product Image 2</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Product_Image_2__c?: string;
    /**
     * <h3><b>Product Image 3</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Product_Image_3__c?: string;
    /**
     * <h3><b>Product Market Mapping</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SSIS_ERP_SKU_Metadata_Country_Connectio__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Market_Mapping__c?: string;
    /**
     * <h3><b>Product Market Mapping</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SSIS_ERP_SKU_Metadata_Country_Connectio__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Market_Mapping__r?: SSIS_ERP_SKU_Metadata_Country_Connectio__c;
    /**
     * <h3><b>Product Family</b></h3>
     * <p>Assocaites the non-ERP product to a product family. Used for the Workflow definitions and analysis</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link ProductFamily__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductFamily__c?: string;
    /**
     * <h3><b>Product Family</b></h3>
     * <p>Assocaites the non-ERP product to a product family. Used for the Workflow definitions and analysis</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link ProductFamily__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductFamily__r?: ProductFamily__c;
    /**
     * <h3><b>Product Group (Global)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductGroupText__c?: string;
    /**
     * <h3><b>Quantity Unit Of Measure</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">pieces</code></td><td>pcs</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">pieces/month</code></td><td>pieces/month</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">pieces/year</code></td><td>pieces/year</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">boxes</code></td><td>boxes</td><td nowrap>true</td></tr>
     * </table>
     */
    QuantityUnitOfMeasure__c?: string;
    /**
     * <h3><b>Replacements</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Replacements__c?: string;
    ReplayId?: string;
    /**
     * <h3><b>Product Group</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CADCAM</code></td><td>CAD/CAM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics</code></td><td>Endodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Imaging</code></td><td>Imaging</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants</code></td><td>Implants</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Labratory</code></td><td>Labratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics</code></td><td>Orthodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive</code></td><td>Preventive</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative</code></td><td>Restorative</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Treatment Centers</code></td><td>Treatment Centers</td><td nowrap>true</td></tr>
     * </table>
     */
    SBU__c?: string;
    /**
     * <h3><b>Search Keyword</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Search_Keyword__c?: string;
    /**
     * <h3><b>Stock Status</b></h3>
     * <p>Used for Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Stock Only(Part)</code></td><td>Stock Only(Part)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Stock Only</code></td><td>Stock Only</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">End of Sales(Part)</code></td><td>End of Sales(Part)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">End of Sales</code></td><td>End of Sales</td><td nowrap>true</td></tr>
     * </table>
     */
    Status__c?: string;
    /**
     * <h3><b>T35 Name (UK)</b></h3>
     * <p>Used for UK</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    T35_Name_UK__c?: string;
    /**
     * <h3><b>Valid in my Market?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(UPPER(TEXT($User.Market__c))=UPPER(TEXT(Product_Market_Mapping__r.Market__c)), True, IF(TEXT($User.Market__c)=&quot;South Africa&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;ZA&quot;,True, IF(TEXT($User.Market__c)=&quot;Iberia&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;ES&quot;,True, IF(TEXT($User.Market__c)=&quot;Thailand&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;TH&quot;,True, IF(TEXT($User.Market__c)=&quot;Australia&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;AU&quot;,True, IF(TEXT($User.Market__c)=&quot;Hong Kong&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;HK&quot;,True, IF(TEXT($User.Market__c)=&quot;Singapore&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;SG&quot;,True, IF(TEXT($User.Market__c)=&quot;Germany&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;DE&quot;,True, IF(TEXT($User.Market__c)=&quot;Austria&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;AT&quot;,True, IF(TEXT($User.Market__c)=&quot;Switzerland&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;DE&quot;,True, IF(TEXT($User.Market__c)=&quot;France&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;FR&quot;,True, IF(TEXT($User.Market__c)=&quot;Italy&quot; &amp;&amp; TEXT(Product_Market_Mapping__r.Market__c)=&quot;IT&quot;,True,False)&#47;&#42;italy, iberia &amp; south africa exception&#42;&#47; )))))))))))</code></td></tr>
     * </table>
     */
    Valid_in_my_Market__c?: boolean;
}