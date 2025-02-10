// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EngagementAttendeeHistory extends SObject 
{
    CreatedBy: SObject;
    CreatedById: string;
    CreatedDate: string;
    DataType: string;
    EngagementAttendee: EngagementAttendee;
    EngagementAttendeeId: string;
    Field: string;
    IsDeleted: boolean;
    NewValue: any;
    OldValue: any;
}