// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IntegrationProviderExecutionChangeEvent extends SObject 
{
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    ErrorCode: string;
    ExecutionDateTime: string;
    IntegrationProviderDef: IntegrationProviderDef;
    IntegrationProviderDefId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    ReferenceObjectIdentifier: string;
    ReplayId: string;
    RequestPayload: ContentDocument;
    RequestPayloadId: string;
    ResponsePayload: ContentDocument;
    ResponsePayloadId: string;
    Status: string;
}