// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EntitlementTemplate extends SObject 
{
    BusinessHours?: BusinessHours;
    BusinessHoursId?: string;
    CasesPerEntitlement?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EntitlementTemplate?: ProductEntitlementTemplate;
    IsPerIncident?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    NamespacePrefix?: string;
    SlaProcess?: SlaProcess;
    SlaProcessId?: string;
    SystemModstamp?: string;
    Term?: number;
    Type?: string;
}