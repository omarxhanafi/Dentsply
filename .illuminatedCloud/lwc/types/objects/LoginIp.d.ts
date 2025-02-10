// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LoginIp extends SObject 
{
    ChallengeMethod: string;
    ChallengeSentDate: string;
    CreatedDate: string;
    IsAuthenticated: boolean;
    SourceIp: string;
    Users: User;
    UsersId: string;
}