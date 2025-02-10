// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>FSLHealth Event</b></h3>
 */
declare interface FSL__FSLHealth_Event__e extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventUuid: string;
    /**
     * <h3><b>json</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * </table>
     */
    FSL__json__c: string;
    /**
     * <h3><b>Test Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Test_Status__c: string;
    ReplayId: string;
    SourceEvent: AsyncOperationEvent;
}