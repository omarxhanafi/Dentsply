// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatTranscriptChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    /**
     * <h3><b>Auto Matched</b></h3>
     * <p>Will set the value to Yes if the incoming chat was matched automatically with existing contact in SFDC</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td><td nowrap>true</td></tr>
     * </table>
     */
    Auto_Matched__c?: string;
    AverageResponseTimeOperator?: number;
    AverageResponseTimeVisitor?: number;
    Body?: string;
    Browser?: string;
    BrowserLanguage?: string;
    Case?: Case;
    /**
     * <h3><b>Case assigned</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Case_assigned__c?: boolean;
    CaseId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ChatKey?: string;
    Contact?: Contact;
    /**
     * <h3><b>Contact Assigned</b></h3>
     * <p>A workaround to know if the contact is assigned or not. Populated through a process.
     * ContactID is not available directly in formula and filter criteria</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">True</code></td><td>True</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">False</code></td><td>False</td><td nowrap>true</td><td nowrap>true</td></tr>
     * </table>
     */
    Contact_Assigned__c?: string;
    ContactId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    /**
     * <h3><b>Source Email</b></h3>
     * <p>Populated with the Contact email from the Website backend or Prechat form</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    email__c?: string;
    EndedBy?: string;
    EndTime?: string;
    IpAddress?: string;
    IsChatbotSession?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Lead?: Lead;
    LeadId?: string;
    LiveChatButton?: LiveChatButton;
    LiveChatButtonId?: string;
    LiveChatDeployment?: LiveChatDeployment;
    LiveChatDeploymentId?: string;
    LiveChatVisitor?: LiveChatVisitor;
    LiveChatVisitorId?: string;
    Location?: string;
    MaxResponseTimeOperator?: number;
    MaxResponseTimeVisitor?: number;
    Name?: string;
    OperatorMessageCount?: number;
    Owner?: User;
    OwnerId?: string;
    Platform?: string;
    ReferrerUri?: string;
    ReplayId?: string;
    RequestTime?: string;
    ScreenResolution?: string;
    Skill?: Skill;
    SkillId?: string;
    StartTime?: string;
    Status?: string;
    SupervisorTranscriptBody?: string;
    UserAgent?: string;
    /**
     * <h3><b>Visitor First Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Visitor_First_Name__c?: string;
    /**
     * <h3><b>Visitor Last Name</b></h3>
     * <p>Populated with the Last Name from the website backend or prechat form</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Visitor_Last_Name__c?: string;
    VisitorMessageCount?: number;
    VisitorNetwork?: string;
}