// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Solution Group</b></h3>
 * <p>Pre-defined group from which groups of line items on individual quotes may be created.</p>
 */
declare interface SBQQ__SolutionGroup__c extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLineGroup__c.SBQQ__SolutionGroup__c}.
     */
    QuoteLineGroups__r?: SBQQ__QuoteLineGroup__c[];
    /**
     * <h3><b>Description</b></h3>
     * <p>Description for this SolutionGroup.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(5000)</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SBQQ__Description__c?: string;
}