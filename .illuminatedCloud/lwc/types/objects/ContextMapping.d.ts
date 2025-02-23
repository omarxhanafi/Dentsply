// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContextMapping extends SObject 
{
    ContextDefinitionVersion?: ContextDefinitionVersion;
    ContextDefinitionVersionId?: string;
    ContextMappingIntents?: ContextMappingIntent[];
    ContextNodeMappings?: ContextNodeMapping[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    InheritedFrom?: string;
    IsDefault?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    SystemModstamp?: string;
    Title?: string;
}