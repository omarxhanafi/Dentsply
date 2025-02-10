// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MLModelFactor extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    Correlation: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    FactorType: string;
    Importance: number;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    MLModelFactorComponents: MLModelFactorComponent[];
    Model: MLModel;
    ModelId: string;
    Name: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Type: string;
    Weight: number;
}