// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Campaign_Offer_Codes__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Campaign})</td></tr>
     * </table>
     */
    Campaign__c: string;
    /**
     * <h3><b>Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Campaign})</td></tr>
     * </table>
     */
    Campaign__r: Campaign;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * <h3><b>Offer Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Offer_Code__c})</td></tr>
     * </table>
     */
    Offer_Code__c: string;
    /**
     * <h3><b>Offer Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Offer_Code__c})</td></tr>
     * </table>
     */
    Offer_Code__r: Offer_Code__c;
    /**
     * <h3><b>Offer Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(Offer_Code__r.Offer_Code_Type__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Offer_Type__c: string;
    ReplayId: string;
}