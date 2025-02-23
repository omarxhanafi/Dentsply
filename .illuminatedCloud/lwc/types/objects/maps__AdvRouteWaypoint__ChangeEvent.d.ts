// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface maps__AdvRouteWaypoint__ChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * <h3><b>Address</b></h3>
     * <p>This is the address formatted</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    maps__Address__c?: string;
    /**
     * <h3><b>Maps Advanced Route</b></h3>
     * <p>This the route that the Advanced Route waypoint is associated to</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRoute__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AdvRoute__c?: string;
    /**
     * <h3><b>Maps Advanced Route</b></h3>
     * <p>This the route that the Advanced Route waypoint is associated to</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRoute__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AdvRoute__r?: maps__AdvRoute__c;
    /**
     * <h3><b>Advanced Route Data Set</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteDataSet__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AdvRouteDataSet__c?: string;
    /**
     * <h3><b>Advanced Route Data Set</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteDataSet__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AdvRouteDataSet__r?: maps__AdvRouteDataSet__c;
    /**
     * <h3><b>Associated Output Types</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">None</code></td><td>None</td><td nowrap>true</td></tr>
     * </table>
     */
    maps__AssociatedOutputTypes__c?: string;
    /**
     * <h3><b>Base Object Address Misconfigured</b></h3>
     * <p>This is for when all the address fields on the base object we are looking for are not configured properly.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    maps__BaseObjectAddressMisconfigured__c?: boolean;
    /**
     * <h3><b>Base Object Api</b></h3>
     * <p>This is the object api of the record routed</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(maps__RoutedObjectId__c == null, null, IF(maps__AdvRouteDataSet__c != null, maps__AdvRouteDataSet__r.maps__BaseObject__r.Name, IF(maps__RelatedAdvRouteTemplate__c == null, maps__AdvRoute__r.maps__AdvRouteTemplateUser__r.maps__AdvRouteTemplate__r.maps__TemplateObject__c, maps__RelatedAdvRouteTemplate__r.maps__TemplateObject__c)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__BaseObjectApi__c?: string;
    /**
     * <h3><b>Base Object Id</b></h3>
     * <p>This is the id of the core base object record the route is based off of</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(maps__RoutedObjectId__c == null, null, IF(maps__AdvRouteDataSet__c != null, maps__AdvRouteDataSet__r.maps__BaseObject__c, IF(maps__RelatedAdvRouteTemplate__c == null, maps__AdvRoute__r.maps__AdvRouteTemplateUser__r.maps__AdvRouteTemplate__r.maps__CoreBaseObjectId__c, maps__RelatedAdvRouteTemplate__r.maps__CoreBaseObjectId__c)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__BaseObjectId__c?: string;
    /**
     * <h3><b>City</b></h3>
     * <p>This is the city of the stop</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__City__c?: string;
    /**
     * <h3><b>Created for Future Visit</b></h3>
     * <p>This field is used to block off a time for a future scheduled visit that is created outside of Maps Advanced Route</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    maps__CreatedForFutureVisit__c?: boolean;
    /**
     * <h3><b>End DateTime</b></h3>
     * <p>This is the end time of the stop</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__EndDateTime__c?: string;
    /**
     * <h3><b>End Location</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    maps__IsEndLocation__c?: boolean;
    /**
     * <h3><b>Locked</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    maps__isLocked__c?: boolean;
    /**
     * <h3><b>Modified from Core</b></h3>
     * <p>This lets us know if the waypoint was edited from core</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    maps__IsModified__c?: boolean;
    /**
     * <h3><b>Start Location</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    maps__IsStartLocation__c?: boolean;
    /**
     * <h3><b>Lat/Long</b></h3>
     * <p>This is the lat/long of the stop</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Location</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__LatLong__c?: maps__Location;
    maps__LatLong__Latitude__s?: number;
    maps__LatLong__Longitude__s?: number;
    /**
     * <h3><b>Options</b></h3>
     * <p>This is a json object of options being passed around in Core</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    maps__Options__c?: string;
    /**
     * <h3><b>Postal Code</b></h3>
     * <p>This is the postal code of the stop</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__PostalCode__c?: string;
    /**
     * <h3><b>Related Advanced Route Template</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteTemplate__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RelatedAdvRouteTemplate__c?: string;
    /**
     * <h3><b>Related Advanced Route Template</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AdvRouteTemplate__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RelatedAdvRouteTemplate__r?: maps__AdvRouteTemplate__c;
    /**
     * <h3><b>Routed Object Id</b></h3>
     * <p>This is the id of the routed object</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RoutedObjectId__c?: string;
    /**
     * <h3><b>Route Job Id</b></h3>
     * <p>This is the job id that produced the waypoint</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RouteJobId__c?: string;
    /**
     * <h3><b>Account</b></h3>
     * <p>This is the default lookup to associate the Account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Account__c?: string;
    /**
     * <h3><b>Account</b></h3>
     * <p>This is the default lookup to associate the Account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Account__r?: Account;
    /**
     * <h3><b>Case</b></h3>
     * <p>This is the default lookup to associate the Case</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Case})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Case__c?: string;
    /**
     * <h3><b>Case</b></h3>
     * <p>This is the default lookup to associate the Case</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Case})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Case__r?: Case;
    /**
     * <h3><b>Contact</b></h3>
     * <p>This is the default lookup to associate the Contact</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Contact__c?: string;
    /**
     * <h3><b>Contact</b></h3>
     * <p>This is the default lookup to associate the Contact</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Contact__r?: Contact;
    /**
     * <h3><b>Lead</b></h3>
     * <p>This is the default lookup to associate the Lead</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Lead})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Lead__c?: string;
    /**
     * <h3><b>Lead</b></h3>
     * <p>This is the default lookup to associate the Lead</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Lead})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Lead__r?: Lead;
    /**
     * <h3><b>Opportunity</b></h3>
     * <p>This is the default lookup to associate the Opportunity</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Opportunity})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Opportunity__c?: string;
    /**
     * <h3><b>Opportunity</b></h3>
     * <p>This is the default lookup to associate the Opportunity</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Opportunity})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__RW_Opportunity__r?: Opportunity;
    /**
     * <h3><b>Saved Query Id</b></h3>
     * <p>This will be the id of the related Saved Query record for Maps</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(maps__RoutedObjectId__c == null, null, IF(maps__AdvRouteDataSet__c != null, maps__AdvRouteDataSet__r.maps__SavedQueryId__c, IF(maps__RelatedAdvRouteTemplate__c == null, maps__AdvRoute__r.maps__AdvRouteTemplateUser__r.maps__AdvRouteTemplate__r.maps__SavedQueryId__c, maps__RelatedAdvRouteTemplate__r.maps__SavedQueryId__c)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__SavedQueryId__c?: string;
    /**
     * <h3><b>Sequence</b></h3>
     * <p>This is the sequence order of the stop in the route</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__Sequence__c?: number;
    /**
     * <h3><b>Start DateTime</b></h3>
     * <p>This is the start time of the stop</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__StartDateTime__c?: string;
    /**
     * <h3><b>State/Province</b></h3>
     * <p>This is the state or province of the stop</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__StateProvince__c?: string;
    /**
     * <h3><b>Street</b></h3>
     * <p>This is the street of the stop</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__Street__c?: string;
    /**
     * <h3><b>Template User Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">maps__AdvRoute__r.maps__AdvRouteTemplateUser__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__TemplateUserId__c?: string;
    /**
     * <h3><b>Visit Number in Frequency</b></h3>
     * <p>This is the visit number in the frequency</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__VisitNumberInFrequency__c?: number;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ReplayId?: string;
}