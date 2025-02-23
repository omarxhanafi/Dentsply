// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Calendar extends SObject 
{
    AcceptedEventRelations?: AcceptedEventRelation[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeclinedEventRelations?: DeclinedEventRelation[];
    EventRelations?: EventRelation[];
    IsActive?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: ActivityHistory;
    Publisher?: CalendarView;
    Relation?: EventRelationChangeEvent;
    SystemModstamp?: string;
    Type?: string;
    UndecidedEventRelations?: UndecidedEventRelation[];
    User?: User;
    UserId?: string;
}