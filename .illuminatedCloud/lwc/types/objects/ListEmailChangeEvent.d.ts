// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ListEmailChangeEvent extends SObject 
{
    Campaign: Campaign;
    CampaignId: string;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    FromAddress: string;
    FromName: string;
    HasAttachment: boolean;
    HtmlBody: string;
    IsTracked: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    Owner: User;
    OwnerId: string;
    RelatedTo: SObject;
    RelatedToId: string;
    ReplayId: string;
    ScheduledDate: string;
    Status: string;
    Subject: string;
    TextBody: string;
    TotalSent: number;
}