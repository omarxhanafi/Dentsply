// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CaseSolution extends SObject 
{
    Case: Case;
    CaseId: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    RelatedRecord: FlowRecordRelation;
    Solution: Solution;
    SolutionId: string;
    SystemModstamp: string;
}