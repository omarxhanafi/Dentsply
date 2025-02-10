// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Attendee Action Status Map</b></h3>
 * <p>This represents a map of Attendee statuses to the Actions (Registration, Nomination, Invitation) that are available.</p>
 */
declare interface CventEvents__AttendeeActionStatusMap__mdt extends SObject 
{
    /**
     * <h3><b>Allow Invitation</b></h3>
     * <p>Indicates whether the invitation of an attendee in this status is allowed.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CventEvents__AllowInvitation__c: boolean;
    /**
     * <h3><b>Allow Modify/Cancel</b></h3>
     * <p>Indicates whether the modification of an attendee in this status is allowed.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CventEvents__AllowModifyCancel__c: boolean;
    /**
     * <h3><b>Allow Nomination</b></h3>
     * <p>Indicates whether the nomination of an attendee in this status is allowed.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CventEvents__AllowNomination__c: boolean;
    /**
     * <h3><b>Allow Registration</b></h3>
     * <p>Indicates whether the registration of an attendee in this status is allowed.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CventEvents__AllowRegistration__c: boolean;
    DeveloperName: string;
    Label: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string;
    QualifiedApiName: string;
    SystemModstamp: string;
}