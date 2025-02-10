// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface maps__LiveHolidayRelationship__ChangeEvent extends SObject 
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
     * <h3><b>Live Driver</b></h3>
     * <p>Driver associated to this Holiday</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link maps__LiveDriver__c})</td></tr>
     * </table>
     */
    maps__LiveDriver__c: string;
    /**
     * <h3><b>Live Driver</b></h3>
     * <p>Driver associated to this Holiday</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link maps__LiveDriver__c})</td></tr>
     * </table>
     */
    maps__LiveDriver__r: maps__LiveDriver__c;
    /**
     * <h3><b>Live Holiday Time</b></h3>
     * <p>The Holiday Time record</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link maps__LiveHolidayTime__c})</td></tr>
     * </table>
     */
    maps__LiveHolidayTime__c: string;
    /**
     * <h3><b>Live Holiday Time</b></h3>
     * <p>The Holiday Time record</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link maps__LiveHolidayTime__c})</td></tr>
     * </table>
     */
    maps__LiveHolidayTime__r: maps__LiveHolidayTime__c;
    Name: string;
    ReplayId: string;
}