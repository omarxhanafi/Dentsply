// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface maps__AdvRoutePriority__ChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    /**
     * <h3><b>Maps Advanced Route Template</b></h3>
     * <p>This is the Advanced Route template that the priority is associated with</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteTemplate__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AdvRouteTemplate__c: string;
    /**
     * <h3><b>Maps Advanced Route Template</b></h3>
     * <p>This is the Advanced Route template that the priority is associated with</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteTemplate__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AdvRouteTemplate__r: maps__AdvRouteTemplate__c;
    /**
     * <h3><b>Base Priority</b></h3>
     * <p>This will tell us if the priority is from the base filter or not</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    maps__IsBasePriority__c: boolean;
    /**
     * <h3><b>Logic Order of Operations</b></h3>
     * <p>This is the order of operations for the priority filters</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__LogicOrderOfOperations__c: string;
    /**
     * <h3><b>Priority</b></h3>
     * <p>This is the priority</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__Priority__c: number;
    /**
     * <h3><b>Priority Filters</b></h3>
     * <p>These are the filters used in the priority query</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    maps__PriorityFilters__c: string;
    /**
     * <h3><b>Priority Object</b></h3>
     * <p>This is the object the priority will check</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__PriorityObject__c: string;
    /**
     * <h3><b>Priority Query</b></h3>
     * <p>This is the query for the priority</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    maps__PriorityQuery__c: string;
    /**
     * <h3><b>Related Advanced Route Template</b></h3>
     * <p>This is populated if the waypoint is associated to an additional base object for a template</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteTemplate__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RelatedAdvRouteTemplate__c: string;
    /**
     * <h3><b>Related Advanced Route Template</b></h3>
     * <p>This is populated if the waypoint is associated to an additional base object for a template</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteTemplate__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RelatedAdvRouteTemplate__r: maps__AdvRouteTemplate__c;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    ReplayId: string;
}