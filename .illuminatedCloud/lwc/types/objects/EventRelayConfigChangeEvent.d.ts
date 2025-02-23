// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventRelayConfigChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DestinationResourceName?: string;
    DeveloperName?: string;
    EventChannel?: string;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    RelayOption?: string;
    ReplayId?: string;
    State?: string;
    UsageType?: string;
}