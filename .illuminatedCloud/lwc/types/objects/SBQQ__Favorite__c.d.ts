// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Favorite</b></h3>
 */
declare interface SBQQ__Favorite__c extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__FavoriteProduct__c.SBQQ__Favorite__c}.
     */
    FavoriteProduct__r?: SBQQ__FavoriteProduct__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__FavoriteShare__c.SBQQ__Favorite__c}.
     */
    FavoriteShares__r?: SBQQ__FavoriteShare__c[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLineGroup__c.SBQQ__Favorite__c}.
     */
    QuoteLineGroups__r?: SBQQ__QuoteLineGroup__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLine__c.SBQQ__Favorite__c}.
     */
    QuoteLines__r?: SBQQ__QuoteLine__c[];
    /**
     * <h3><b>Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Description__c?: string;
    /**
     * <h3><b>Owner Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Owner:User.FirstName + &quot; &quot; +  Owner:User.LastName</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__OwnerName__c?: string;
}