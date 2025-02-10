// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface NetworkMember extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DefaultGroupNotificationFrequency: string;
    DigestFrequency: string;
    LastChatterActivityDate: Date;
    Member: User;
    MemberId: string;
    Network: Network;
    NetworkId: string;
    PreferencesDisableAllFeedsEmail: boolean;
    PreferencesDisableBestAnswerEmail: boolean;
    PreferencesDisableBookmarkEmail: boolean;
    PreferencesDisableChangeCommentEmail: boolean;
    PreferencesDisableEndorsementEmail: boolean;
    PreferencesDisableFollowersEmail: boolean;
    PreferencesDisableItemFlaggedEmail: boolean;
    PreferencesDisableLaterCommentEmail: boolean;
    PreferencesDisableLikeEmail: boolean;
    PreferencesDisableMentionsPostEmail: boolean;
    PreferencesDisableMessageEmail: boolean;
    PreferencesDisablePendingReviewEmail: boolean;
    PreferencesDisableProfilePostEmail: boolean;
    PreferencesDisableSharePostEmail: boolean;
    PreferencesDisCommentAfterLikeEmail: boolean;
    PreferencesDisMentionsCommentEmail: boolean;
    PreferencesDisProfPostCommentEmail: boolean;
    ReputationPoints: number;
    SystemModstamp: string;
}