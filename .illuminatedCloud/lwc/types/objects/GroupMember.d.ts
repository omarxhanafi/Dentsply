// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface GroupMember extends SObject 
{
    Group: Group;
    GroupId: string;
    SystemModstamp: string;
    UserOrGroup: SObject;
    UserOrGroupId: string;
}