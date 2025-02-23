// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Territory2ModelChangeEvent extends SObject 
{
    ActivatedDate?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DeactivatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    IsCloneSource?: boolean;
    IsOppUnassignmentDone?: boolean;
    IsSharingGroupDeleteDone?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastOppTerrAssignEndDate?: string;
    LastRunRulesEndDate?: string;
    Name?: string;
    ReplayId?: string;
    State?: string;
}