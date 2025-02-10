// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AccountBrand extends SObject 
{
    Account: Account;
    AccountId: string;
    Address: Address;
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    City: string;
    CombinedAttachments: CombinedAttachment[];
    CompanyName: string;
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    Country: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Email: string;
    FirstPublishLocation: ContentVersion;
    GeocodeAccuracy: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastReferencedDate: string;
    LastViewedDate: string;
    Latitude: number;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    Logo: ContentAsset;
    LogoId: string;
    LogoUrl: string;
    Longitude: number;
    Name: string;
    Owner: SObject;
    OwnerId: string;
    Phone: string;
    PostalCode: string;
    RelatedRecord: FlowRecordRelation;
    Shares: AccountBrandShare[];
    SobjectLookupValue: AIInsightValue;
    State: string;
    Street: string;
    SystemModstamp: string;
    Target: AIRecordInsight;
    TargetObject: PendingServiceRoutingInteractionInfo;
    Website: string;
}