// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecommendationChangeEvent extends SObject 
{
    AcceptanceLabel: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    Description: string;
    ExternalId: string;
    Image: ContentAsset;
    ImageId: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Network: Network;
    NetworkId: string;
    RecommendationKey: string;
    RecommendationMode: string;
    RecommendationScore: number;
    RejectionLabel: string;
    ReplayId: string;
}