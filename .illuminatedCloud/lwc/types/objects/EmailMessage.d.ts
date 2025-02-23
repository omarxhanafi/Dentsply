// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailMessage extends SObject 
{
    Activity?: Task;
    ActivityId?: string;
    AlternateDetail?: ActivityHistory;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions?: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems?: ApprovalWorkItem[];
    AttachedContentDocuments?: AttachedContentDocument[];
    AttachedContentNotes?: AttachedContentNote[];
    AttachmentIds?: string;
    Attachments?: Attachment[];
    AutomationType?: string;
    BccAddress?: string;
    BccIds?: string[];
    Cases?: Case[];
    CcAddress?: string;
    CcIds?: string[];
    ClientThreadIdentifier?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentIds?: string[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EmailMessageRelations?: EmailMessageRelation[];
    EmailRoutingAddress?: EmailRoutingAddress;
    EmailRoutingAddressId?: string;
    EmailTemplate?: EmailTemplate;
    EmailTemplateId?: string;
    FirstOpenedDate?: string;
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    From?: SObject;
    FromAddress?: string;
    FromId?: string;
    FromName?: string;
    HasAttachment?: boolean;
    Headers?: string;
    HtmlBody?: string;
    Incoming?: boolean;
    IsBounced?: boolean;
    IsClientManaged?: boolean;
    IsDeleted?: boolean;
    IsExternallyVisible?: boolean;
    IsOpened?: boolean;
    IsTracked?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastOpenedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LocalRecord?: PartnerNetworkRecordConnection;
    MessageDate?: string;
    MessageIdentifier?: string;
    Name?: string;
    Parent?: Case;
    ParentId?: string;
    PartnerRecord?: PartnerNetworkRecordConnection;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: ContentDistribution;
    RelatedTo?: SObject;
    RelatedToId?: string;
    ReplyToEmailMessage?: EmailMessage;
    ReplyToEmailMessageId?: string;
    SobjectLookupValue?: AIInsightValue;
    Source?: CaseChangeEvent;
    Status?: string;
    Subject?: string;
    SystemModstamp?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TextBody?: string;
    ThreadIdentifier?: string;
    ToAddress?: string;
    ToIds?: string[];
    ValidatedFromAddress?: string;
}