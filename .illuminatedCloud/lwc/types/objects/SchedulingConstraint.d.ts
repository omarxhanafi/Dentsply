// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SchedulingConstraint extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    MaxNonstandardShiftsPerMonth: number;
    MaxShiftsPerDay: number;
    MaxShiftsPerMonth: number;
    MaxShiftsPerWeek: number;
    MaxWorkingHoursPerDay: number;
    MaxWorkingHoursPerMonth: number;
    MaxWorkingHoursPerWeek: number;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    RestTimeMinutes: number;
    /**
     * The reciprocal relationship for {@link ServiceResource.SchedulingConstraintId}.
     */
    SchedulingConstraint: ServiceResource;
    /**
     * The reciprocal relationship for {@link ServiceResource.SchedulingConstraintId}.
     */
    ServiceResources: ServiceResource[];
    /**
     * The reciprocal relationship for {@link ServiceTerritory.SchedulingConstraintId}.
     */
    ServiceTerritories: ServiceTerritory[];
    Shares: SchedulingConstraintShare[];
    SobjectLookupValue: AIInsightValue;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}