// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DataAssetSemanticGraphEdge extends SObject 
{
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    EdgeInfoVersion: number;
    EdgeType: string;
    FromDataAssetFieldIdOrName: string;
    FromDataAssetIdOrName: string;
    FromEntityAssetType: string;
    Info1Name: string;
    Info1Value: string;
    Info2Name: string;
    Info2Value: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    ToEntityAssetType: string;
    ToEntityFieldIdOrName: string;
    ToEntityIdOrName: string;
    Weight1Name: string;
    Weight1Value: number;
    Weight2Name: string;
    Weight2Value: number;
}