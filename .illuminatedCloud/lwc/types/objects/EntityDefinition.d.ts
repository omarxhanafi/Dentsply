// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EntityDefinition extends SObject 
{
    /**
     * The reciprocal relationship for {@link ActionOverride__mdt.Object__c}.
     */
    Action_Override_Settings__r?: ActionOverride__mdt[];
    ChildRelationships?: RelationshipInfo[];
    ChildSobject?: RelationshipDomain;
    DefaultCompactLayout?: SObject;
    DefaultCompactLayoutId?: string;
    DefaultImplementation?: string;
    DeploymentStatus?: string;
    DetailUrl?: string;
    DeveloperName?: string;
    DurableId?: string;
    EditDefinitionUrl?: string;
    EditUrl?: string;
    EntityDefinition?: RelatedListDefinition;
    ExtendedBy?: string;
    ExtendsInterfaces?: string;
    ExternalSharingModel?: string;
    FlowDefinitionViews?: FlowDefinitionView[];
    HasSubtypes?: boolean;
    HelpSettingPageName?: string;
    HelpSettingPageUrl?: string;
    ImplementedBy?: string;
    ImplementsInterfaces?: string;
    InternalSharingModel?: string;
    IsApexTriggerable?: boolean;
    IsAutoActivityCaptureEnabled?: boolean;
    IsCompactLayoutable?: boolean;
    IsCustomizable?: boolean;
    IsCustomSetting?: boolean;
    IsDeprecatedAndHidden?: boolean;
    IsEverCreatable?: boolean;
    IsEverDeletable?: boolean;
    IsEverUpdatable?: boolean;
    IsFeedEnabled?: boolean;
    IsIdEnabled?: boolean;
    IsInterface?: boolean;
    IsLayoutable?: boolean;
    IsMruEnabled?: boolean;
    IsProcessEnabled?: boolean;
    IsQueryable?: boolean;
    IsReplicateable?: boolean;
    IsRetrieveable?: boolean;
    IsSearchable?: boolean;
    IsSearchLayoutable?: boolean;
    IsSubtype?: boolean;
    IsTriggerable?: boolean;
    IsWorkflowEnabled?: boolean;
    KeyPrefix?: string;
    Label?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    NewUrl?: string;
    /**
     * The reciprocal relationship for {@link OppStageGuidance__mdt.Object__c}.
     */
    Opportunity_Stage_Guidances__r?: OppStageGuidance__mdt[];
    OwnerChangeOptions?: OwnerChangeOptionInfo[];
    Particles?: EntityParticle[];
    PluralLabel?: string;
    Publisher?: Publisher;
    PublisherId?: string;
    QualifiedApiName?: string;
    RecordTypesSupported?: Object;
    RelatedListDefinitions?: RelatedListDefinition[];
    RelationshipDomains?: RelationshipDomain[];
    RunningUserEntityAccess?: UserEntityAccess;
    RunningUserEntityAccessId?: string;
    SearchLayouts?: SearchLayout[];
}