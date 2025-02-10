// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceTerritory extends SObject 
{
    Address: Address;
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
    AvgTravelTime: number;
    /**
     * The reciprocal relationship for {@link ApptBundlePolicySvcTerr.ServiceTerritoryId}.
     */
    BundlePolicySvcTerrs: ApptBundlePolicySvcTerr[];
    /**
     * The reciprocal relationship for {@link ServiceTerritory.ParentTerritoryId}.
     */
    ChildServiceTerritories: ServiceTerritory[];
    City: string;
    CombinedAttachments: CombinedAttachment[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    Country: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * The reciprocal relationship for {@link ServiceTerritory.TopLevelTerritoryId}.
     */
    DescendantTerritories: ServiceTerritory[];
    Description: string;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    Feeds: ServiceTerritoryFeed[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    FirstPublishLocation: ContentVersion;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    FSL__Crew_Management_User_Settings_Territory__r: FSL__Crew_Management_User_Settings_Territory__c[];
    /**
     * <h3><b>Hide Emergency Map</b></h3>
     * <p>Determines if the map will be shown on the emergency wizard</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    FSL__Hide_Emergency_Map__c: boolean;
    /**
     * <h3><b>Internal SLR HomeAddress Geolocation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Location</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Internal_SLR_Geolocation__c: Location;
    FSL__Internal_SLR_Geolocation__Latitude__s: number;
    FSL__Internal_SLR_Geolocation__Longitude__s: number;
    /**
     * <h3><b>Number Of Services To Drip Feed</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(7,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__NumberOfServicesToDripFeed__c: number;
    FSL__Polygons__r: FSL__Polygon__c[];
    /**
     * <h3><b>Service Cluster Min Size (Closed Pilot)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Service_Cluster_Min_Size__c: number;
    /**
     * <h3><b>Service Cluster Proximity (Closed Pilot)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,3)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__Service_Cluster_Proximity__c: number;
    /**
     * <h3><b>System Jobs</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BATCH_ServicesInJeopardy</code></td><td>BATCH_ServicesInJeopardy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BATCH_ServicesDispatched</code></td><td>BATCH_ServicesDispatched</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ChatterNotification</code></td><td>ChatterNotification</td><td nowrap>true</td></tr>
     * </table>
     */
    FSL__System_Jobs__c: string;
    FSL__Territory_Optimization_Requests__r: FSL__Territory_Optimization_Request__c[];
    /**
     * <h3><b>Territory Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(14,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    FSL__TerritoryLevel__c: number;
    FSL__User_Setting_Territory_Territories__r: FSL__User_Setting_Territory__c[];
    FSL__User_Territories__r: FSL__User_Territory__c[];
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    GeocodeAccuracy: string;
    Histories: ServiceTerritoryHistory[];
    IsActive: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Latitude: number;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    /**
     * The reciprocal relationship for {@link ServiceTerritoryLocation.ServiceTerritoryId}.
     */
    Locations: ServiceTerritoryLocation[];
    Longitude: number;
    Name: string;
    OperatingHours: OperatingHours;
    OperatingHoursId: string;
    Owner: SObject;
    OwnerId: string;
    Parent: FeedComment;
    ParentEntities: NetworkActivityAudit[];
    ParentRecord: NetworkFeedResponseMetric;
    ParentTerritory: ServiceTerritory;
    ParentTerritoryId: string;
    PostalCode: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RelatedRecord: FlowRecordRelation;
    SchedulingConstraint: SchedulingConstraint;
    SchedulingConstraintId: string;
    /**
     * The reciprocal relationship for {@link SchedulingWorkspaceTerritory.ServiceTerritoryId}.
     */
    SchedulingWorkspaceTerritories: SchedulingWorkspaceTerritory[];
    ServiceAppointments: ServiceAppointment[];
    /**
     * The reciprocal relationship for {@link ServiceTerritoryMember.ServiceTerritoryId}.
     */
    ServiceResources: ServiceTerritoryMember[];
    ServiceTerritory: ServiceAppointmentChangeEvent;
    Shares: ServiceTerritoryShare[];
    /**
     * The reciprocal relationship for {@link Shift.ServiceTerritoryId}.
     */
    ShiftServiceTerritories: Shift[];
    SobjectLookupValue: AIInsightValue;
    State: string;
    Street: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TopicAssignments: TopicAssignment[];
    TopLevelTerritory: ServiceTerritory;
    TopLevelTerritoryId: string;
    TravelTimeBuffer: number;
    TypicalInTerritoryTravelTime: number;
    WorkCapacityAvailabilities: WorkCapacityAvailability[];
    /**
     * The reciprocal relationship for {@link WorkCapacityLimit.ServiceTerritoryId}.
     */
    WorkCapacityLimits: WorkCapacityLimit[];
    WorkCapacityUsages: WorkCapacityUsage[];
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.ServiceTerritoryId}.
     */
    WorkOrderLineItems: WorkOrderLineItem[];
    WorkOrders: WorkOrder[];
    /**
     * The reciprocal relationship for {@link WorkPlanSelectionRule.ServiceTerritoryId}.
     */
    WorkPlanSelectionRules: WorkPlanSelectionRule[];
}