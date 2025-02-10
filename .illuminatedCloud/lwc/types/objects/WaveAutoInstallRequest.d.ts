// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface WaveAutoInstallRequest extends SObject 
{
    Configuration: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FailedReason: string;
    Folder: Folder;
    FolderId: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    RelatedRecord: FlowRecordRelation;
    RequestLog: string;
    RequestStatus: string;
    RequestType: string;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TemplateApiName: string;
    TemplateVersion: string;
    WaveCompatibilityCheckItems: WaveCompatibilityCheckItem[];
}