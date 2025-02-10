// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetAccountParticipantChangeEvent extends SObject 
{
    Account: Account;
    AccountId: string;
    Asset: Asset;
    AssetId: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    EffectiveEndDate: Date;
    EffectiveStartDate: Date;
    IsActive: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    ReplayId: string;
    StakeholderRole: string;
    UsageType: string;
}