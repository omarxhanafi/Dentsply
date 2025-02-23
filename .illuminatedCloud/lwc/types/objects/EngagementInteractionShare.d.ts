// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EngagementInteractionShare extends SObject 
{
    EngagementInteraction?: EngagementInteraction;
    EngagementInteractionAccessLevel?: string;
    EngagementInteractionId?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RowCause?: string;
    UserOrGroup?: SObject;
    UserOrGroupId?: string;
}