// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IndividualChangeEvent extends SObject 
{
    BirthDate: Date;
    CanStorePiiElsewhere: boolean;
    ChangeEventHeader: ChangeEventHeader;
    ChildrenCount: number;
    ConsumerCreditScore: number;
    ConsumerCreditScoreProviderName: string;
    ConvictionsCount: number;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DeathDate: Date;
    FirstName: string;
    HasOptedOutGeoTracking: boolean;
    HasOptedOutProcessing: boolean;
    HasOptedOutProfiling: boolean;
    HasOptedOutSolicit: boolean;
    HasOptedOutTracking: boolean;
    IndividualsAge: string;
    InfluencerRating: number;
    IsHomeOwner: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastName: string;
    MilitaryService: string;
    Name: string;
    Occupation: string;
    Owner: User;
    OwnerId: string;
    ReplayId: string;
    Salutation: string;
    SendIndividualData: boolean;
    ShouldForget: boolean;
    Website: string;
}