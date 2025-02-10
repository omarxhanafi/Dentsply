// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Custom Script</b></h3>
 * <p>Script that can be executed by an outside resource</p>
 */
declare interface SBQQ__CustomScript__c extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * <h3><b>Code</b></h3>
     * <p>Script code</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Code__c: string;
    /**
     * <h3><b>Consumption Rate Fields</b></h3>
     * <p>Fields on the ConsumptionRate object referenced by this plugin</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ConsumptionRateFields__c: string;
    /**
     * <h3><b>Consumption Schedule Fields</b></h3>
     * <p>Fields on the ConsumptionSchedule object referenced by this plugin</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__ConsumptionScheduleFields__c: string;
    /**
     * <h3><b>Quote Line Group Fields</b></h3>
     * <p>Fields on the QuoteLineGroup__c object referenced by this plugin</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__GroupFields__c: string;
    /**
     * <h3><b>Quote Fields</b></h3>
     * <p>Fields on the Quote__c object referenced by this plugin</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__QuoteFields__c: string;
    /**
     * <h3><b>Quote Line Fields</b></h3>
     * <p>QuoteLine__c fields referenced by the plugin</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__QuoteLineFields__c: string;
    /**
     * <h3><b>Transpiled Code</b></h3>
     * <p>Script Code transpiled to ES5</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(131072)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__TranspiledCode__c: string;
}