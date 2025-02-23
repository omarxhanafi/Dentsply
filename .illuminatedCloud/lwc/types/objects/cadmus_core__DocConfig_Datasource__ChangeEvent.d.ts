// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface cadmus_core__DocConfig_Datasource__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Data Source</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link cadmus_core__Data_Source__c})</td></tr>
     * </table>
     */
    cadmus_core__Data_Source__c?: string;
    /**
     * <h3><b>Data Source</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link cadmus_core__Data_Source__c})</td></tr>
     * </table>
     */
    cadmus_core__Data_Source__r?: cadmus_core__Data_Source__c;
    /**
     * <h3><b>Doc Config</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link cadmus_core__Doc_Config__c})</td></tr>
     * </table>
     */
    cadmus_core__Doc_Config__c?: string;
    /**
     * <h3><b>Doc Config</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link cadmus_core__Doc_Config__c})</td></tr>
     * </table>
     */
    cadmus_core__Doc_Config__r?: cadmus_core__Doc_Config__c;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
}