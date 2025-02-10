// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Admin Setting</b></h3>
 * <p>Overall Settings for System Admins:
 * 1. BatchFreezeUsers: # of Days (based on Last Login Date) used to automatically freeze users (by Apex Batch)</p>
 */
declare interface AdminSetting__mdt extends SObject 
{
    DeveloperName: string;
    Label: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string;
    /**
     * <h3><b># of Days since Last Login to Freeze</b></h3>
     * <p># of Days (based on Last Login Date) used to automatically freeze users (by Apex Batch)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ofDaysSinceLastLogin__c: number;
    QualifiedApiName: string;
    SystemModstamp: string;
}