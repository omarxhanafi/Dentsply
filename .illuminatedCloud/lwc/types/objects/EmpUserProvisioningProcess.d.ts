// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmpUserProvisioningProcess extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    EmpUserProvisionProcessErrs?: EmpUserProvisionProcessErr[];
    EndTime?: string;
    ErrorRecordCount?: number;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    ProcessStatus?: string;
    RelatedRecord?: FlowRecordRelation;
    StartTime?: string;
    SuccessRecordCount?: number;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TotalRecordCount?: number;
}