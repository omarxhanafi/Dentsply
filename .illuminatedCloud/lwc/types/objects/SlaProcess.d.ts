// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SlaProcess extends SObject 
{
    BusinessHours: BusinessHours;
    BusinessHoursId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    /**
     * The reciprocal relationship for {@link EntityMilestone.SlaProcessId}.
     */
    EntityMilestones: EntityMilestone[];
    IsActive: boolean;
    IsDeleted: boolean;
    IsVersionDefault: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastViewedDate: string;
    Name: string;
    NameNorm: string;
    /**
     * The reciprocal relationship for {@link Entitlement.SlaProcessId}.
     */
    SlaProcess: Entitlement;
    StartDateField: string;
    SystemModstamp: string;
    VersionMaster: string;
    VersionNotes: string;
    VersionNumber: number;
}