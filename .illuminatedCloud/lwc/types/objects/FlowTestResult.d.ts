// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowTestResult extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FlowDefinitionView: FlowDefinitionView;
    FlowDefinitionViewId: string;
    FlowTestView: FlowTestView;
    FlowTestViewId: string;
    FlowVersionNumber: number;
    FlowVersionView: FlowVersionView;
    FlowVersionViewId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    RelatedRecord: FlowRecordRelation;
    Result: string;
    Shares: FlowTestResultShare[];
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TestEndDateTime: string;
    TestStartDateTime: string;
}