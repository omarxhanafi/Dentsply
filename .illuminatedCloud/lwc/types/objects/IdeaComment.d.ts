// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IdeaComment extends SObject 
{
    CommentBody: string;
    Community: Community;
    CommunityId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CreatorFullPhotoUrl: string;
    CreatorName: string;
    CreatorSmallPhotoUrl: string;
    Idea: Idea;
    IdeaId: string;
    IsDeleted: boolean;
    IsHtml: boolean;
    LastComment: Idea;
    SystemModstamp: string;
    UpVotes: number;
    Votes: Vote[];
}