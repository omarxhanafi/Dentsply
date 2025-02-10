// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserProvAccountStaging extends SObject 
{
    ConnectedApp: ConnectedApplication;
    ConnectedAppId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    ExternalEmail: string;
    ExternalFirstName: string;
    ExternalLastName: string;
    ExternalUserId: string;
    ExternalUsername: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LinkState: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    SalesforceUser: User;
    SalesforceUserId: string;
    Status: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}