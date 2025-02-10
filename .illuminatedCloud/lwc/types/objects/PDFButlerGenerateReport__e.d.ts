// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>PDF Butler Generate Report</b></h3>
 * <p>Event listener that&#39;s used to trigger auto-launched flow &quot;SFS: Call PDF Butler Apex Class&quot; so it passes the WO Id to apex class and the service report will be generated based on it</p>
 */
declare interface PDFButlerGenerateReport__e extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    EventUuid: string;
    ReplayId: string;
    SourceEvent: AsyncOperationEvent;
    /**
     * <h3><b>WorkOrderId</b></h3>
     * <p>This field is used to capture the work order id, that will be used in SFS: Call PDF Butler Apex Class auto launched flow</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WorkOrderId__c: string;
}