// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Address extends SObject 
{
    Address: Address;
    AddressType: string;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    City: string;
    ContextRecord: FlowExecutionErrorEvent;
    Country: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    DrivingDirections: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    GeocodeAccuracy: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Latitude: number;
    LocationType: string;
    Longitude: number;
    Name: string;
    Parent: Location;
    ParentId: string;
    PostalCode: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RelatedRecord: FlowRecordRelation;
    SobjectLookupValue: AIInsightValue;
    State: string;
    Street: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TimeZone: string;
    /**
     * The reciprocal relationship for {@link Location.VisitorAddressId}.
     */
    VisitorAddress: Location;
}