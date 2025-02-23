// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OmniExtTrackingDef extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    ExtTrackingConfigDefs?: OmniTrackingGroup[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    OmniExtTrackingDefKey?: string;
    OmniExtTrackingDefs?: OmniExtTrackingEventDef[];
    SystemModstamp?: string;
    TrackingFrameworkInformation?: string;
    TrackingServiceProvider?: string;
}