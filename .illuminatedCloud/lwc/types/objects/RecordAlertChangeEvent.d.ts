// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordAlertChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    EffectiveDate: string;
    IsActive: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    Parent: SObject;
    ParentId: string;
    RecordAlertCategory: RecordAlertCategory;
    RecordAlertCategoryId: string;
    ReplayId: string;
    Severity: string;
    SnoozeUntilDate: string;
    SourceSystemIdentifier: string;
    Subject: string;
    ValidUntilDate: string;
    What: SObject;
    WhatId: string;
}