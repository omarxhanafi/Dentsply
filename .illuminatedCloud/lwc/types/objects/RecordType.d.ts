// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordType extends SObject 
{
    BusinessProcess: BusinessProcess;
    BusinessProcessId: string;
    /**
     * The reciprocal relationship for {@link Campaign.CampaignMemberRecordTypeId}.
     */
    CampaignMemberRecordType: Campaign;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    DefaultRecordType: ContentWorkspace;
    Description: string;
    DeveloperName: string;
    IsActive: boolean;
    IsPersonType: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Localization: RecordTypeLocalization[];
    Name: string;
    NamespacePrefix: string;
    RecordType: MessagingLink;
    RecordTypes: ProductSpecificationRecType[];
    SystemModstamp: string;
    TargetRecordType: PromptVersion;
}