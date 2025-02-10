// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TeamForce_Release__ChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    /**
     * <h3><b>Communication Date</b></h3>
     * <p>Add the date when communication will happen out to the business</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CommunicationDate__c: Date;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Development Freeze Date</b></h3>
     * <p>Date when development is frozen for the release - after this date no new things should be added to the release</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DevelopmentFreezeDate__c: Date;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    /**
     * <h3><b>Release Date</b></h3>
     * <p>The date when this release will go into production</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    ReleaseDate__c: Date;
    ReplayId: string;
    /**
     * <h3><b>Staging Start Date</b></h3>
     * <p>Date when the move into Staging for this release will start</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    StagingStartDate__c: Date;
}