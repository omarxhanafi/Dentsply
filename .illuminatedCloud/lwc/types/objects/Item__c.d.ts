// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Item</b></h3>
 * <p>SBU: PREP &amp; ORTHO; Counrty: Japan - Used in Japan as a parallell structure to the global product structure. It&#39;s a copy from their previous CRM system with product images and related FAQs.</p>
 */
declare interface Item__c extends SObject 
{
    /**
     * <h3><b>Additional Name</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Additional_Name__c?: string;
    /**
     * <h3><b>Catch Phrase</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Catch_Phrase__c?: string;
    /**
     * <h3><b>Category</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan - Controls Sub-Category</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive</code></td><td>Preventive</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative</code></td><td>Restorative</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthetics</code></td><td>Prosthetics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics</code></td><td>Orthodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics</code></td><td>Endodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LA</code></td><td>LA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">X-ray</code></td><td>X-ray</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * </table>
     */
    Category__c?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * <h3><b>Dealer Name</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Dealer_Name__c?: string;
    /**
     * <h3><b>Details</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Details__c?: string;
    /**
     * <h3><b>End Date</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    End_Date__c?: Date;
    /**
     * The reciprocal relationship for {@link FAQ__c.Item__c}.
     */
    FAQs__r?: FAQ__c[];
    /**
     * <h3><b>Hidden From Users?</b></h3>
     * <p>SBU: PREP, ORTH, Country Japan, This field controls the sharing rule and makes sure records with this field ticked is not shared with users. Example of use case is a new product that has not yet been launched but added to the system.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Hidden_From_Users__c?: boolean;
    IsDeleted?: boolean;
    /**
     * The reciprocal relationship for {@link Item_Attachment__c.Item__c}.
     */
    Item_Attachments__r?: Item_Attachment__c[];
    /**
     * The reciprocal relationship for {@link Item_Specification__c.Item__c}.
     */
    Item_Specifications__r?: Item_Specification__c[];
    /**
     * <h3><b>Kana</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Kana__c?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * <h3><b>Legacy ID</b></h3>
     * <p>Stores the old ID number - used for mapping when importing the data</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    Legacy_ID__c?: string;
    Name?: string;
    /**
     * <h3><b>Old Product ID</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Old_Product_ID__c?: string;
    /**
     * <h3><b>Product Image 1</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Image_1__c?: string;
    /**
     * <h3><b>Product Image 2</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Image_2__c?: string;
    /**
     * <h3><b>Product Image 3</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Product_Image_3__c?: string;
    /**
     * <h3><b>Replacements</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Replacements__c?: string;
    /**
     * <h3><b>Search Keyword</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Search_Keyword__c?: string;
    /**
     * <h3><b>Serial Number Management</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Serial_Number_Management__c?: boolean;
    /**
     * <h3><b>Status</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Not in use</code></td><td>Not in use</td><td nowrap>true</td></tr>
     * </table>
     */
    Status__c?: string;
    /**
     * <h3><b>Stock Status</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
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
    Stock_Status__c?: string;
    /**
     * <h3><b>Stock Status Icon</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan - Need to update when images are in the system!</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">if( ISPICKVAL(  Stock_Status__c , &quot;Stock Only&quot;) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000001F4GO&quot;, &quot;Stock Only&quot;) ,if( ISPICKVAL( Stock_Status__c, &quot;End of Sales&quot;) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000001F4G9&quot;, &quot;End of Sales&quot;) ,if( ISPICKVAL( Stock_Status__c, &quot;Stock Only(Part)&quot;) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000001F4GY&quot;, &quot;Stock Only(Part)&quot;) ,if( ISPICKVAL( Stock_Status__c, &quot;End of Sales(Part)&quot;) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000001F4G4&quot;, &quot;End of Sales(Part)&quot;) ,&quot;&quot;))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Stock_Status_Icon__c?: string;
    /**
     * <h3><b>Sub Category</b></h3>
     * <p>SBU: PREP &amp; ORTHO; Country: Japan - Dependent on Category - Not defined yet - might be used in future</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Not defined yet - might be used in future</code></td><td>Not defined yet - might be used in future</td><td nowrap>true</td></tr>
     * </table>
     */
    Sub_Category__c?: string;
}