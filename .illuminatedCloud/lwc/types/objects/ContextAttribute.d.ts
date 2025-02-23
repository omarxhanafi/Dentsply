// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextAttribute extends SObject 
{
    ContextAttributeMappings?: ContextAttributeMapping[];
    ContextNode?: ContextNode;
    ContextNodeId?: string;
    ContextTags?: ContextTag[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    Description?: string;
    DisplayName?: string;
    DomainSet?: string;
    FieldType?: string;
    InheritedFrom?: string;
    IsDeleted?: boolean;
    IsKey?: boolean;
    IsValue?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    SystemModstamp?: string;
    Title?: string;
}