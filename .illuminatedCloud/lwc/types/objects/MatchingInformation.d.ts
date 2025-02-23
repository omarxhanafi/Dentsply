// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MatchingInformation extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EmailAddress?: string;
    ExternalId?: string;
    IsDeleted?: boolean;
    IsPickedAsPreferred?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    PreferenceUsed?: string;
    RelatedRecord?: FlowRecordRelation;
    SFDCId?: Contact;
    SFDCIdId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserId?: string;
}