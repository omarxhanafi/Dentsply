// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetAttributeChangeEvent extends SObject 
{
    Asset?: Asset;
    AssetId?: string;
    AttributeDefinition?: AttributeDefinition;
    AttributeDefinitionId?: string;
    AttributeName?: string;
    AttributePicklistValue?: AttributePicklistValue;
    AttributePicklistValueId?: string;
    AttributeValue?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    ExternalId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ReplayId?: string;
}