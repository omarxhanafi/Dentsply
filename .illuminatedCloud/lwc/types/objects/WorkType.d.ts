// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WorkType extends SObject 
{
    /**
     * The reciprocal relationship for {@link AppointmentTopicTimeSlot.WorkTypeId}.
     */
    AppointmentTopicTimeSlots?: AppointmentTopicTimeSlot[];
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
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    /**
     * <h3><b>Country</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    Country__c?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects?: DocumentEnvelope[];
    DurationInMinutes?: number;
    DurationType?: string;
    EstimatedDuration?: number;
    Feeds?: WorkTypeFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    /**
     * <h3><b>Due Date Offset</b></h3>
     * <p>Minutes</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(9,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Due_Date_Offset__c?: number;
    /**
     * <h3><b>Exact Appointments</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    FSL__Exact_Appointments__c?: boolean;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects?: GeneratedDocument[];
    Histories?: WorkTypeHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    /**
     * The reciprocal relationship for {@link LinkedArticle.LinkedEntityId}.
     */
    LinkedArticles?: LinkedArticle[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    /**
     * The reciprocal relationship for {@link MaintenanceAsset.WorkTypeId}.
     */
    MaintenanceAssets?: MaintenanceAsset[];
    /**
     * The reciprocal relationship for {@link MaintenancePlan.WorkTypeId}.
     */
    MaintenancePlans?: MaintenancePlan[];
    /**
     * The reciprocal relationship for {@link MaintenanceWorkRule.WorkTypeId}.
     */
    MaintenanceWorkRules?: MaintenanceWorkRule[];
    MinimumCrewSize?: number;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    /**
     * The reciprocal relationship for {@link ProductServiceCampaign.WorkTypeId}.
     */
    ProductServiceCampaignWorkTypes?: ProductServiceCampaign[];
    /**
     * The reciprocal relationship for {@link ProductRequired.ParentRecordId}.
     */
    ProductsRequired?: ProductRequired[];
    RecommendedCrewSize?: number;
    RecordActionHistories?: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    ServiceReportTemplate?: ServiceReportLayout;
    ServiceReportTemplateId?: string;
    Shares?: WorkTypeShare[];
    ShouldAutoCreateSvcAppt?: boolean;
    /**
     * The reciprocal relationship for {@link SkillRequirement.RelatedRecordId}.
     */
    SkillRequirements?: SkillRequirement[];
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.WorkTypeId}.
     */
    WorkOrderLineItems?: WorkOrderLineItem[];
    WorkOrders?: WorkOrder[];
    /**
     * The reciprocal relationship for {@link WorkPlanSelectionRule.WorkTypeId}.
     */
    WorkPlanSelectionRules?: WorkPlanSelectionRule[];
    /**
     * The reciprocal relationship for {@link MaintenanceAsset.WorkTypeId}.
     */
    WorkType?: MaintenanceAsset;
    /**
     * The reciprocal relationship for {@link WorkTypeGroupMember.WorkTypeId}.
     */
    WorkTypeGroupMembers?: WorkTypeGroupMember[];
}