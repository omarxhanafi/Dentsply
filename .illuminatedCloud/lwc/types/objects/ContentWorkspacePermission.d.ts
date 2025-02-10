// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentWorkspacePermission extends SObject 
{
    ContentWorkspacePermission: ContentWorkspaceMember;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Description: string;
    EntityIdentifier: ContentNotification;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    PermissionsAddComment: boolean;
    PermissionsAddContent: boolean;
    PermissionsAddContentOBO: boolean;
    PermissionsArchiveContent: boolean;
    PermissionsChatterSharing: boolean;
    PermissionsDeleteContent: boolean;
    PermissionsDeliverContent: boolean;
    PermissionsFeatureContent: boolean;
    PermissionsManageWorkspace: boolean;
    PermissionsModifyComments: boolean;
    PermissionsOrganizeFileAndFolder: boolean;
    PermissionsTagContent: boolean;
    PermissionsViewComments: boolean;
    SystemModstamp: string;
    Type: string;
}