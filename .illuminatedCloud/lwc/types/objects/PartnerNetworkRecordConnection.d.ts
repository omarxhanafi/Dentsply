// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PartnerNetworkRecordConnection extends SObject 
{
    Connection: PartnerNetworkConnection;
    ConnectionId: string;
    EndDate: string;
    LocalRecord: SObject;
    LocalRecordId: string;
    ParentRecord: SObject;
    ParentRecordId: string;
    PartnerRecord: SObject;
    PartnerRecordId: string;
    RelatedRecords: string;
    SendClosedTasks: boolean;
    SendEmails: boolean;
    SendOpenTasks: boolean;
    StartDate: string;
    Status: string;
}