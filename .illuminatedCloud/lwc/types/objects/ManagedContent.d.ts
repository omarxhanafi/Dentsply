// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ManagedContent extends SObject 
{
    ApiName: string;
    AuthoredManagedContentSpace: ManagedContentSpace;
    AuthoredManagedContentSpaceId: string;
    ContentKey: string;
    ContentTypeFullyQualifiedName: string;
    ContextRecord: FlowExecutionErrorEvent;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    ExternalId: string;
    Image: NetworkDataCategory;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    ManagedContent: ManagedContentVariantChangeEvent;
    ManagedContentVariants: ManagedContentVariant[];
    Name: string;
    PrimaryLanguage: string;
    RelatedRecord: FlowRecordRelation;
    SystemModstamp: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
}