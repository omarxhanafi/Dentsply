// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DocumentGenerationProcess extends SObject 
{
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    DataRaptorInput: string;
    DocGenApiVersionType: string;
    /**
     * The reciprocal relationship for {@link DocGenerationQueryResult.DocumentGenerationProcessId}.
     */
    DocGenerationQueryResults: DocGenerationQueryResult[];
    DocumentInputType: string;
    DocumentTemplate: DocumentTemplate;
    DocumentTemplateId: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    HasDocGenFontSource: boolean;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    ReferenceObject: string;
    RelatedRecord: FlowRecordRelation;
    RequestText: string;
    ResponseText: string;
    Shares: DocumentGenerationProcessShare[];
    SobjectLookupValue: AIInsightValue;
    Status: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TokenData: string;
    TokenDataContentDocument: ContentDocument;
    TokenDataContentDocumentId: string;
    Type: string;
}