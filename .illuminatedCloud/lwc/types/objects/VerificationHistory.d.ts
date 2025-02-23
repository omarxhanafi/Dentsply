// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface VerificationHistory extends SObject 
{
    Activity?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventGroup?: number;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LoginGeo?: LoginGeo;
    LoginGeoId?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    Policy?: string;
    Remarks?: string;
    Resource?: ConnectedApplication;
    ResourceId?: string;
    SourceIp?: string;
    Status?: string;
    SystemModstamp?: string;
    User?: User;
    UserId?: string;
    VerificationMethod?: string;
    VerificationTime?: string;
}