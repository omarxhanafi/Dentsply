// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProductFamily__ChangeEvent extends SObject 
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
     * <h3><b>Lifespan (in Months)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LifespanMonths__c: number;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    /**
     * <h3><b>Product Family Label</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ProductFamilyLabel__c: string;
    ReplayId: string;
}