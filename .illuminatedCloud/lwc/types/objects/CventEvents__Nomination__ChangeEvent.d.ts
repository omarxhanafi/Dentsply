// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CventEvents__Nomination__ChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Approver Comment</b></h3>
     * <p>The most recent approver comment.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(2000)</td></tr>
     * </table>
     */
    CventEvents__ApproverComment__c: string;
    /**
     * <h3><b>Attendee</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link CventEvents__Attendee__c})</td></tr>
     * </table>
     */
    CventEvents__Attendee__c: string;
    /**
     * <h3><b>Attendee</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link CventEvents__Attendee__c})</td></tr>
     * </table>
     */
    CventEvents__Attendee__r: CventEvents__Attendee__c;
    /**
     * <h3><b>Attendee Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(CventEvents__Lead__c), HYPERLINK(&quot;/&quot; &amp; CventEvents__Contact__r.FirstName + &quot; &quot; + CventEvents__Contact__r.LastName, &quot;&quot;) &amp; HYPERLINK(&quot;/&quot; &amp; CventEvents__Contact__c, CventEvents__Contact__r.FirstName + &quot; &quot; + CventEvents__Contact__r.LastName), HYPERLINK(&quot;/&quot; &amp; CventEvents__Lead__r.FirstName + &quot; &quot; + CventEvents__Lead__r.LastName, &quot;&quot;) &amp; HYPERLINK(&quot;/&quot; &amp; CventEvents__Lead__c, CventEvents__Lead__r.FirstName + &quot; &quot; + CventEvents__Lead__r.LastName))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__AttendeeName__c: string;
    /**
     * <h3><b>Requester Comment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(2000)</td></tr>
     * </table>
     */
    CventEvents__Comment__c: string;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Contact__c: string;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Contact__r: Contact;
    /**
     * <h3><b>Current Approver</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CventEvents__NominationApprover__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__CurrentApprover__c: string;
    /**
     * <h3><b>Current Approver</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CventEvents__NominationApprover__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__CurrentApprover__r: CventEvents__NominationApprover__c;
    /**
     * <h3><b>Current Approver</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(CventEvents__CurrentApprover__r.CventEvents__User__c), CventEvents__CurrentApprover__r.CventEvents__GroupName__c, HYPERLINK(&quot;/&quot; &amp; CventEvents__CurrentApprover__r.CventEvents__User__r.FirstName + &quot; &quot; + CventEvents__CurrentApprover__r.CventEvents__User__r.LastName, &quot;&quot;) &amp; HYPERLINK(&quot;/&quot; &amp; CventEvents__CurrentApprover__r.CventEvents__User__c, CventEvents__CurrentApprover__r.CventEvents__User__r.FirstName + &quot; &quot; + CventEvents__CurrentApprover__r.CventEvents__User__r.LastName))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__CurrentApproverName__c: string;
    /**
     * <h3><b>Event</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CventEvents__Event__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Event__c: string;
    /**
     * <h3><b>Event</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CventEvents__Event__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Event__r: CventEvents__Event__c;
    /**
     * <h3><b>Event</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&quot;/&quot; &amp; CventEvents__Event__r.CventEvents__pkg_Title__c, &quot;&quot;) &amp; HYPERLINK(&quot;/&quot; &amp; CventEvents__Event__c, CventEvents__Event__r.CventEvents__pkg_Title__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__EventTitle__c: string;
    /**
     * <h3><b>Invitation Email/List</b></h3>
     * <p>Stores name of configuration to be used for automatic invitation after the nomination gets approved.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__InvitationConfigurationName__c: string;
    /**
     * <h3><b>Invitation Configuration Stub</b></h3>
     * <p>Stores configuration stub to be used for automatic invitation after the nomination gets approved.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(36)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    CventEvents__InvitationConfigurationStub__c: string;
    /**
     * <h3><b>Lead</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Lead})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Lead__c: string;
    /**
     * <h3><b>Lead</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Lead})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Lead__r: Lead;
    /**
     * <h3><b>Requester</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Requester__c: string;
    /**
     * <h3><b>Requester</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CventEvents__Requester__r: User;
    /**
     * <h3><b>Send Invite On Approve</b></h3>
     * <p>Indicates whether an automatic invitation will take place after the nomination gets approved.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NOT(ISBLANK(CventEvents__InvitationConfigurationStub__c))</code></td></tr>
     * </table>
     */
    CventEvents__SendInviteOnApprove__c: boolean;
    /**
     * <h3><b>Send Invite On Behalf Of Requester</b></h3>
     * <p>Indicates whether the nomination requester should be shown as a sender of invitation email.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CventEvents__SendInviteOnBehalfOfRequester__c: boolean;
    /**
     * <h3><b>Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Approved</code></td><td>Approved</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pending</code></td><td>Pending</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rejected</code></td><td>Rejected</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cancelled</code></td><td>Cancelled</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    CventEvents__Status__c: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
}