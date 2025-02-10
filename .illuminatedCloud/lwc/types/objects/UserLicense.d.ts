// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserLicense extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    CreatedDate: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    LastModifiedDate: string;
    License: PermissionSet;
    LicenseDefinitionKey: string;
    MasterLabel: string;
    Name: string;
    Status: string;
    SystemModstamp: string;
    TotalLicenses: number;
    UsedLicenses: number;
    UsedLicensesLastUpdated: string;
    UserLicense: ActiveProfileMetric;
}