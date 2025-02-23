// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceResource extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivityHistories?: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    Attachments?: Attachment[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: ServiceResourceFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * <h3><b>Efficiency</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Efficiency__c?: number;
    /**
     * <h3><b>Gantt Label</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__GanttLabel__c?: string;
    /**
     * <h3><b>Online Offset</b></h3>
     * <p>Online offset in minutes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Online_Offset__c?: number;
    FSL__Optimization_Requests__r?: FSL__Optimization_Request__c[];
    /**
     * <h3><b>Picture Link</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Url</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Picture_Link__c?: string;
    /**
     * <h3><b>Priority</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Priority__c?: number;
    /**
     * <h3><b>Travel Speed</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Travel_Speed__c?: number;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: ServiceResourceHistory[];
    IsActive?: boolean;
    IsCapacityBased?: boolean;
    /**
     * <h3><b>Contractor</b></h3>
     * <p>Check if service resource is a contractor or not</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    IsContractor__c?: boolean;
    IsOptimizationCapable?: boolean;
    LastKnownLatitude?: number;
    LastKnownLocation?: Location;
    LastKnownLocationDate?: string;
    LastKnownLongitude?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Location?: Location;
    LocationId?: string;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: User;
    RelatedRecordId?: string;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo?: EmailMessage;
    Relation?: EventRelationChangeEvent;
    /**
     * The reciprocal relationship for {@link ResourceAbsence.ResourceId}.
     */
    Resource?: ResourceAbsence;
    /**
     * The reciprocal relationship for {@link ResourceAbsence.ResourceId}.
     */
    ResourceAbsences?: ResourceAbsence[];
    /**
     * The reciprocal relationship for {@link ResourcePreference.ServiceResourceId}.
     */
    ResourcePreferences?: ResourcePreference[];
    ResourceType?: string;
    SchedulingConstraint?: SchedulingConstraint;
    SchedulingConstraintId?: string;
    /**
     * The reciprocal relationship for {@link ServiceAppointment.FSSK__FSK_Assigned_Service_Resource__c}.
     */
    Service_Appointments__r?: ServiceAppointment[];
    /**
     * The reciprocal relationship for {@link AssignedResource.ServiceResourceId}.
     */
    ServiceAppointments?: AssignedResource[];
    ServiceCrew?: ServiceCrew;
    ServiceCrewId?: string;
    /**
     * The reciprocal relationship for {@link ServiceCrewMember.ServiceResourceId}.
     */
    ServiceCrewMembers?: ServiceCrewMember[];
    /**
     * The reciprocal relationship for {@link AssignedResource.ServiceResourceId}.
     */
    ServiceResource?: AssignedResource;
    /**
     * The reciprocal relationship for {@link ServiceResourceCapacity.ServiceResourceId}.
     */
    ServiceResourceCapacities?: ServiceResourceCapacity[];
    /**
     * The reciprocal relationship for {@link ServiceResourcePreference.ServiceResourceId}.
     */
    ServiceResourcePreferences?: ServiceResourcePreference[];
    /**
     * The reciprocal relationship for {@link ServiceResourceSkill.ServiceResourceId}.
     */
    ServiceResourceSkills?: ServiceResourceSkill[];
    /**
     * The reciprocal relationship for {@link ServiceTerritoryMember.ServiceResourceId}.
     */
    ServiceTerritories?: ServiceTerritoryMember[];
    Shares?: ServiceResourceShare[];
    /**
     * The reciprocal relationship for {@link Shift.ServiceResourceId}.
     */
    ShiftServiceResources?: Shift[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks?: Task[];
    /**
     * <h3><b>TF Resource Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If( TEXT(ResourceType)= &#39;C&#39;,ServiceCrew.Name, RelatedRecord.Full_Name__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TF_ResourceName__c?: string;
    /**
     * The reciprocal relationship for {@link TimeSheet.ServiceResourceId}.
     */
    TimeSheets?: TimeSheet[];
    TopicAssignments?: TopicAssignment[];
    What?: EventChangeEvent;
}