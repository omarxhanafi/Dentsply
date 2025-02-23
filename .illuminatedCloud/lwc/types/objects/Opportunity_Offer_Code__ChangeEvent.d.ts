// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Opportunity_Offer_Code__ChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    /**
     * <h3><b>Offer Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Offer_Code__c})</td></tr>
     * </table>
     */
    Offer_Code__c?: string;
    /**
     * <h3><b>Offer Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Offer_Code__c})</td></tr>
     * </table>
     */
    Offer_Code__r?: Offer_Code__c;
    /**
     * <h3><b>Opportunity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Opportunity})</td></tr>
     * </table>
     */
    Opportunity__c?: string;
    /**
     * <h3><b>Opportunity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Opportunity})</td></tr>
     * </table>
     */
    Opportunity__r?: Opportunity;
    ReplayId?: string;
}