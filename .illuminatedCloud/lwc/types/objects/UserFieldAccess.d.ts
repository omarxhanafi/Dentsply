// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserFieldAccess extends SObject 
{
    DurableId?: string;
    EntityDefinition?: EntityDefinition;
    EntityDefinitionId?: string;
    FieldDefinition?: FieldDefinition;
    FieldDefinitionId?: string;
    IsAccessible?: boolean;
    IsCreatable?: boolean;
    IsUpdatable?: boolean;
    RunningUserFieldAccess?: FieldDefinition;
    User?: User;
    UserId?: string;
}