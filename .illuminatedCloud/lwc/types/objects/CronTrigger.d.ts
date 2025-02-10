// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CronTrigger extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CronExpression: string;
    CronJobDetail: CronJobDetail;
    CronJobDetailId: string;
    CronTrigger: AsyncApexJob;
    EndTime: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    NextFireTime: string;
    Owner: User;
    OwnerId: string;
    PreviousFireTime: string;
    StartTime: string;
    State: string;
    TimesTriggered: number;
    TimeZoneSidKey: string;
}