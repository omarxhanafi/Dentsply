// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ActivityFieldHistory extends SObject 
{
    Activity?: SObject;
    ActivityId?: string;
    ChangedBy?: User;
    ChangedById?: string;
    ChangedDate?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    FieldName?: string;
    IsDataAvailable?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    NewValueDateTime?: string;
    NewValueNumber?: number;
    NewValueText?: string;
    OldValueDateTime?: string;
    OldValueNumber?: number;
    OldValueText?: string;
    Operation?: string;
    SystemModstamp?: string;
}