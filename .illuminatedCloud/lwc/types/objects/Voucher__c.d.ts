// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Voucher</b></h3>
 * <p>Part of the Rewards Program, a voucher record must be related to an &quot;Account Program Member&quot; and is used to store and maintain all customer vouchers (e.g. Clinical Accelerator Sales)</p>
 */
declare interface Voucher__c extends SObject 
{
    /**
     * <h3><b>Account Program Member</b></h3>
     * <p>Master Detail</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link LoyaltyProgramParticipant__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AccountProgramMember__c?: string;
    /**
     * <h3><b>Account Program Member</b></h3>
     * <p>Master Detail</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link LoyaltyProgramParticipant__c})</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AccountProgramMember__r?: LoyaltyProgramParticipant__c;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
}