// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ShiftTemplate extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    Duration: number;
    IsActive: boolean;
    IsDeleted: boolean;
    IsNonStandard: boolean;
    JobProfile: JobProfile;
    JobProfileId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    RecordsetFilterCriteria: RecordsetFilterCriteria;
    RecordsetFilterCriteriaId: string;
    RelatedRecord: FlowRecordRelation;
    Shares: ShiftTemplateShare[];
    /**
     * The reciprocal relationship for {@link ShiftPatternEntry.ShiftTemplateId}.
     */
    ShiftPatternEntries: ShiftPatternEntry[];
    /**
     * The reciprocal relationship for {@link Shift.ShiftTemplateId}.
     */
    Shifts: Shift[];
    /**
     * The reciprocal relationship for {@link Shift.ShiftTemplateId}.
     */
    ShiftTemplate: Shift;
    ShiftTemplateDurationType: string;
    SobjectLookupValue: AIInsightValue;
    StartTime: Time;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
}