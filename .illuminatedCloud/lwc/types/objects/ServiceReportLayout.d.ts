// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceReportLayout extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastViewedDate?: string;
    MasterLabel?: string;
    ServiceReportTemplate?: WorkOrderChangeEvent;
    SystemModstamp?: string;
    TemplateType?: string;
    /**
     * The reciprocal relationship for {@link WorkOrderLineItem.ServiceReportTemplateId}.
     */
    WorkOrderLineItems?: WorkOrderLineItem[];
    WorkOrders?: WorkOrder[];
    /**
     * The reciprocal relationship for {@link WorkType.ServiceReportTemplateId}.
     */
    WorkTypes?: WorkType[];
}