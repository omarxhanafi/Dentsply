// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApexTrigger extends SObject 
{
    ApiVersion: number;
    Body: string;
    BodyCrc: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsValid: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LengthWithoutComments: number;
    Name: string;
    NamespacePrefix: string;
    Status: string;
    SystemModstamp: string;
    TableEnumOrId: string;
    UsageAfterDelete: boolean;
    UsageAfterInsert: boolean;
    UsageAfterUndelete: boolean;
    UsageAfterUpdate: boolean;
    UsageBeforeDelete: boolean;
    UsageBeforeInsert: boolean;
    UsageBeforeUpdate: boolean;
    UsageIsBulk: boolean;
}