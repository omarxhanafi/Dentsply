// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Territory2AlignmentLogChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    EndTime: string;
    Filter: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ReplayId: string;
    RunAs: User;
    RunAsId: string;
    StartTime: string;
    Status: string;
    Territory2: Territory2;
    Territory2Id: string;
    Territory2Model: Territory2Model;
    Territory2ModelId: string;
}