// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceChannelStatus extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ServiceChannel?: ServiceChannel;
    ServiceChannelId?: string;
    ServicePresenceStatus?: ServicePresenceStatus;
    ServicePresenceStatusId?: string;
    SystemModstamp?: string;
}