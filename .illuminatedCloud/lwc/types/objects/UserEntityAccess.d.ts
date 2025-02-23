// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserEntityAccess extends SObject 
{
    DurableId?: string;
    EntityDefinition?: EntityDefinition;
    EntityDefinitionId?: string;
    IsActivateable?: boolean;
    IsCreatable?: boolean;
    IsDeletable?: boolean;
    IsEditable?: boolean;
    IsFlsUpdatable?: boolean;
    IsMergeable?: boolean;
    IsReadable?: boolean;
    IsUndeletable?: boolean;
    IsUpdatable?: boolean;
    RunningUserEntityAccess?: EntityDefinition;
    User?: User;
    UserId?: string;
}