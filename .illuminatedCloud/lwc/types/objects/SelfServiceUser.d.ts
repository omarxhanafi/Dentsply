// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SelfServiceUser extends SObject 
{
    Contact: Contact;
    ContactId: string;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Email: string;
    FeedItemCreatedBy: NetworkFeedResponseMetric;
    FirstName: string;
    InsertedBy: AccountFeed;
    InterviewStartedBy: FlowExecutionErrorEvent;
    IsActive: boolean;
    LanguageLocaleKey: string;
    LastEditBy: FeedComment;
    LastLoginDate: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastName: string;
    LocaleSidKey: string;
    LogUser: ApexLog;
    Name: string;
    Parent: ChatterActivity;
    SuperUser: boolean;
    SystemModstamp: string;
    TimeZoneSidKey: string;
    User: ExperienceDiagnosticEvent;
    Username: string;
}