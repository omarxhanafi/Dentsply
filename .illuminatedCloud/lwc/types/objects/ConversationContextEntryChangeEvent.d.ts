// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationContextEntryChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    ConversationContextEntryName?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    CustomDetailContextKey?: string;
    CustomDetailContextValue?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Parent?: LiveChatTranscript;
    ParentId?: string;
    ReplayId?: string;
}