// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowTestView extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DurableId?: string;
    FlowDefinitionView?: FlowDefinitionView;
    FlowDefinitionViewId?: string;
    FlowTestApiName?: string;
    FlowTestLabel?: string;
    FlowTestResults?: FlowTestResult[];
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
}