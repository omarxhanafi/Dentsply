// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AnalyticRecipeCompleteEvent extends SObject 
{
    CanTriggerExecution?: boolean;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    Message?: string;
    RecipeId?: string;
    RecipeLabel?: string;
    ReplayId?: string;
    Requester?: string;
    Runtime?: number;
    SourceEvent?: AsyncOperationEvent;
    StartDate?: string;
    Status?: string;
    WaitTime?: number;
}