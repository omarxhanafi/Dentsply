// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactPointEmailChangeEvent extends SObject 
{
    ActiveFromDate?: Date;
    ActiveToDate?: Date;
    BestTimeToContactEndTime?: Time;
    BestTimeToContactStartTime?: Time;
    BestTimeToContactTimezone?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EmailAddress?: string;
    EmailDomain?: string;
    EmailLatestBounceDateTime?: string;
    EmailLatestBounceReasonText?: string;
    EmailMailBox?: string;
    IsPrimary?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    Parent?: SObject;
    ParentId?: string;
    ReplayId?: string;
}