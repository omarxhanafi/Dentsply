// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Product Feature</b></h3>
 * <p>Feature of a configurable product that consists of one or more options. Features are configured by selecting one or more options.</p>
 */
declare interface SBQQ__ProductFeature__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link SBQQ__ConfigurationRule__c.SBQQ__ProductFeature__c}.
     */
    Configuration_Rules__r?: SBQQ__ConfigurationRule__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ConfigurationAttribute__c.SBQQ__Feature__c}.
     */
    ConfigurationAttributes__r?: SBQQ__ConfigurationAttribute__c[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__Localization__c.SBQQ__ProductFeature__c}.
     */
    Localizations__r?: SBQQ__Localization__c[];
    Name?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__ProductOption__c.SBQQ__Feature__c}.
     */
    ProductOptions__r?: SBQQ__ProductOption__c[];
    /**
     * <h3><b>Category</b></h3>
     * <p>Category of options in this feature. Allows for another level of grouping.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hardware</code></td><td>Hardware</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Software</code></td><td>Software</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__Category__c?: string;
    /**
     * <h3><b>Configuration Field Set</b></h3>
     * <p>The API name of the field set that will be used for this feature during configuration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OptionConfiguration</code></td><td>OptionConfiguration</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__ConfigurationFieldSet__c?: string;
    /**
     * <h3><b>Configured SKU</b></h3>
     * <p>The product bundle that includes this feature. If you created the feature from the product detail page, this should already be populated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ConfiguredSKU__c?: string;
    /**
     * <h3><b>Configured SKU</b></h3>
     * <p>The product bundle that includes this feature. If you created the feature from the product detail page, this should already be populated.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Product2})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ConfiguredSKU__r?: Product2;
    /**
     * <h3><b>Discount Schedule</b></h3>
     * <p>Discount schedule to be applied to the product selected by all options in this feature.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DiscountSchedule__c?: string;
    /**
     * <h3><b>Discount Schedule</b></h3>
     * <p>Discount schedule to be applied to the product selected by all options in this feature.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link SBQQ__DiscountSchedule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__DiscountSchedule__r?: SBQQ__DiscountSchedule__c;
    /**
     * <h3><b>Dynamic Option Filter Field Set</b></h3>
     * <p>The API name of the field set that will be used when filtering dynamic options for this feature during configuration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ConfiguratorFilter</code></td><td>ConfiguratorFilter</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__DynamicProductFilterFieldSet__c?: string;
    /**
     * <h3><b>Dynamic Option Lookup Field Set</b></h3>
     * <p>The API name of the field set that will be used when viewing dynamic options for this feature during configuration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ConfiguratorLookup</code></td><td>ConfiguratorLookup</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__DynamicProductLookupFieldSet__c?: string;
    /**
     * <h3><b>Max Options</b></h3>
     * <p>Maximum number of options for this feature that can be selected as part of the product bundle.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__MaxOptionCount__c?: number;
    /**
     * <h3><b>Min Options</b></h3>
     * <p>Minimum number of options for this feature that must be part of the product bundle.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1</code></td></tr>
     * </table>
     */
    SBQQ__MinOptionCount__c?: number;
    /**
     * <h3><b>Number</b></h3>
     * <p>A sequential number that determines how the features are sorted in the related list on the product.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Number__c?: number;
    /**
     * <h3><b>Option Selection Method</b></h3>
     * <p>Determines how user selects options attached to this product. &quot;Click&quot; method presents options with checkboxes next to them. &quot;Add&quot; renders a button which brings up predefined options. &quot;Dynamic&quot; renders a button which brings up all active products.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Click</code></td><td>Click</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Add</code></td><td>Add</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dynamic</code></td><td>Dynamic</td><td nowrap>true</td></tr>
     * </table>
     */
    SBQQ__OptionSelectionMethod__c?: string;
}