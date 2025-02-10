// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Project Member</b></h3>
 * <p>For internal projects -  to add project members to a project</p>
 */
declare interface Project_Member__c extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    AttachedTo: ProcessException;
    Attachments: Attachment[];
    CombinedAttachments: CombinedAttachment[];
    ConnectionReceived: PartnerNetworkConnection;
    ConnectionReceivedId: string;
    ConnectionSent: PartnerNetworkConnection;
    ConnectionSentId: string;
    /**
     * The reciprocal relationship for {@link ContactRequest.WhatId}.
     */
    ContactRequests: ContactRequest[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    /**
     * <h3><b>Country</b></h3>
     * <p>Lookup to the country object (interbnal object to keep track of the countries live in SFDC</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Country__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Country__c: string;
    /**
     * <h3><b>Country</b></h3>
     * <p>Lookup to the country object (interbnal object to keep track of the countries live in SFDC</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Country__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Country__r: Country__c;
    /**
     * <h3><b>Country Location</b></h3>
     * <p>The country the member belongs to</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Country_Location__c: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link DuplicateRecordItem.RecordId}.
     */
    DuplicateRecordItems: DuplicateRecordItem[];
    EngagementInitiatedTopic: EngagementTopic[];
    EventRelations: EventRelation[];
    /**
     * <h3><b>External Member</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    External_Member__c: boolean;
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    LocalRecord: PartnerNetworkRecordConnection;
    Name: string;
    NetworkUserHistoryRecentToRecord: NetworkUserHistoryRecent[];
    Notes: Note[];
    /**
     * <h3><b>Notes</b></h3>
     * <p>Place to add any specific notes about the project member - e.g. his/her role in the project and/or company</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Notes__c: string;
    NotesAndAttachments: NoteAndAttachment[];
    Parent: Case__hd;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    PartnerRecord: PartnerNetworkRecordConnection;
    PrimaryRecord: PendingServiceRoutingInteractionInfo;
    /**
     * The reciprocal relationship for {@link ProcessException.AttachedToId}.
     */
    ProcessExceptions: ProcessException[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    /**
     * <h3><b>Project</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Project__c})</td></tr>
     * </table>
     */
    Project__c: string;
    /**
     * <h3><b>Project</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Project__c})</td></tr>
     * </table>
     */
    Project__r: Project__c;
    /**
     * <h3><b>Project Member</b></h3>
     * <p>Add the member of the project (full SFDC license)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Project_Member__c: string;
    /**
     * <h3><b>Project Member</b></h3>
     * <p>Add the member of the project (full SFDC license)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Project_Member__r: User;
    /**
     * <h3><b>Project Role</b></h3>
     * <p>The user&#39;s role in the project</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Business Analyst</code></td><td>Business Analyst</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Data Manager</code></td><td>Data Manager</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Deployment Manager</code></td><td>Deployment Manager</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Developer</code></td><td>Developer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Global Sponsor</code></td><td>Global Sponsor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Knowledge Manager</code></td><td>Knowledge Manager</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Local Sponsor</code></td><td>Local Sponsor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Project Member</code></td><td>Project Member</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Project Owner (budget)</code></td><td>Project Owner (budget)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Stakeholder/business user</code></td><td>Stakeholder/business user</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Steer-Co</code></td><td>Steer-Co</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">System Administrator</code></td><td>System Administrator</td><td nowrap>true</td></tr>
     * </table>
     */
    Project_Role__c: string;
    Record: CollaborationGroupRecordChangeEvent;
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RecordAlertParent: RecordAlert[];
    RecordAlertWhat: RecordAlert[];
    RecordAssociatedGroups: CollaborationGroupRecord[];
    RelatedRecord: ContentDistribution;
    /**
     * The reciprocal relationship for {@link VoiceCall.RelatedRecordId}.
     */
    RelatedRecords: VoiceCall[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Tags: Project_Member__Tag[];
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * <h3><b>Time allocated per week</b></h3>
     * <p>Enter amount of hours allocated by the project member to this project.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,1)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Time_allocated_per_week__c: number;
    Topic: EngagementTopicChangeEvent;
    TopicAssignments: TopicAssignment[];
    /**
     * <h3><b>Non-SFDC Project Member</b></h3>
     * <p>Add Project Member who isn&#39;t an SFDC user or has a Chatter Free user license</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User_Role__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    User_Role__c: string;
    /**
     * <h3><b>Non-SFDC Project Member</b></h3>
     * <p>Add Project Member who isn&#39;t an SFDC user or has a Chatter Free user license</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User_Role__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    User_Role__r: User_Role__c;
    UserDefinedLabelAssignments: UserDefinedLabelAssignment[];
    /**
     * The reciprocal relationship for {@link VideoCall.RelatedRecordId}.
     */
    VideoRelatedRecords: VideoCall[];
    What: EventChangeEvent;
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem: AgentWork;
}