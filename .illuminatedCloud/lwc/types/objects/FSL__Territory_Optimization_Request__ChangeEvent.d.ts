// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FSL__Territory_Optimization_Request__ChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Optimization Request</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Optimization_Request__c})</td></tr>
     * </table>
     */
    FSL__Optimization_Request__c: string;
    /**
     * <h3><b>Optimization Request</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link FSL__Optimization_Request__c})</td></tr>
     * </table>
     */
    FSL__Optimization_Request__r: FSL__Optimization_Request__c;
    /**
     * <h3><b>Service Territory</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ServiceTerritory})</td></tr>
     * </table>
     */
    FSL__ServiceTerritory__c: string;
    /**
     * <h3><b>Service Territory</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link ServiceTerritory})</td></tr>
     * </table>
     */
    FSL__ServiceTerritory__r: ServiceTerritory;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
}