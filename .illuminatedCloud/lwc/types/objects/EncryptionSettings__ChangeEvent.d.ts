// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EncryptionSettings__ChangeEvent extends SObject 
{
    /**
     * <h3><b>AES Key</b></h3>
     * <p>[TFUS-000006026]  This field stores the AES key used for encrypting custom data included as a GET parameter within a DS.com link. The purpose is to initiate an invitation/registration email process tailored for a specific customer, identified by the encrypted data.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AESKey__c: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
    SetupOwner: SObject;
    SetupOwnerId: string;
}