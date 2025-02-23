// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContentVersion extends SObject 
{
    AuditableEntities?: NetworkActivityAudit[];
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.DocumentVersionId}.
     */
    AuthorizationFormConsents?: AuthorizationFormConsent[];
    /**
     * <h3><b>BU Dental Contact</b></h3>
     * <p>Who to contact when you have questions about a material</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Head of Market Communication</code></td><td>Head of Market Communication</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Head of Product & Therapy Management</code></td><td>Head of Product &amp; Therapy Management</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Head of Scientific Management</code></td><td>Head of Scientific Management</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Head of Training & Education</code></td><td>Head of Training &amp; Education</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Head of International Congresses</code></td><td>Head of International Congresses</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company AT</code></td><td>Market Company AT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company AU</code></td><td>Market Company AU</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company BeNeLux</code></td><td>Market Company BeNeLux</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company CA</code></td><td>Market Company CA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company CH</code></td><td>Market Company CH</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company DE</code></td><td>Market Company DE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company DK</code></td><td>Market Company DK</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company DEX</code></td><td>Market Company DEX</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company ES</code></td><td>Market Company ES</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company FI</code></td><td>Market Company FI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company FR</code></td><td>Market Company FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company IT</code></td><td>Market Company IT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company NO</code></td><td>Market Company NO</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company PL</code></td><td>Market Company PL</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company UK</code></td><td>Market Company UK</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company US</code></td><td>Market Company US</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company SE</code></td><td>Market Company SE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market Company AT Nordic</code></td><td>Market Company AT Nordic</td><td nowrap>true</td></tr>
     * </table>
     */
    BU_Dental_Contact__c?: string;
    Checksum?: string;
    ContentBody?: ContentBody;
    ContentBodyId?: string;
    ContentDocument?: ContentDocument;
    ContentDocumentId?: string;
    ContentLocation?: string;
    ContentModifiedBy?: User;
    ContentModifiedById?: string;
    ContentModifiedDate?: string;
    ContentSize?: number;
    ContentUrl?: string;
    ContentVersion?: ContentDistribution;
    ContentVersionDocument?: QuoteDocument;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    Description?: string;
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.DocumentVersionId}.
     */
    DocumentVersion?: AuthorizationFormConsent;
    EntityIdentifier?: ContentNotification;
    ExternalDataSource?: ExternalDataSource;
    ExternalDataSourceId?: string;
    ExternalDocumentInfo1?: string;
    ExternalDocumentInfo2?: string;
    FeaturedContentBoost?: number;
    FeaturedContentDate?: Date;
    FileExtension?: string;
    FileType?: string;
    FirstPublishLocation?: SObject;
    FirstPublishLocationId?: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ContentVersionId}.
     */
    GeneratedDocContentVersions?: GeneratedDocument[];
    Histories?: ContentVersionHistory[];
    IsAssetEnabled?: boolean;
    IsDeleted?: boolean;
    IsLatest?: boolean;
    IsMajorVersion?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    /**
     * The reciprocal relationship for {@link DocumentTemplateContentDoc.LatestContentVersionId}.
     */
    LatestContentVersion?: DocumentTemplateContentDoc;
    LatestPublishedVersion?: ContentDocument;
    NegativeRatingCount?: number;
    Network?: Network;
    NetworkId?: string;
    Origin?: string;
    Owner?: User;
    OwnerId?: string;
    PathOnClient?: string;
    PositiveRatingCount?: number;
    PublishStatus?: string;
    RatingCount?: number;
    ReasonForChange?: string;
    Record?: FeedAttachment;
    RecordType?: RecordType;
    RecordTypeId?: string;
    RelatedRecord?: AccountFeed;
    SharingPrivacy?: string;
    SobjectLookupValue?: AIInsightValue;
    SystemModstamp?: string;
    TagCsv?: string;
    Target?: AIRecordInsight;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TextPreview?: string;
    Title?: string;
    /**
     * <h3><b>Type of Material</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SP Sales Presentation</code></td><td>SP Sales Presentation</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AB Abstract</code></td><td>AB Abstract</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">RP Reprint</code></td><td>RP Reprint</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SR Scientific Review</code></td><td>SR Scientific Review</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GU Guideline</code></td><td>GU Guideline</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MA Manual</code></td><td>MA Manual</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AD Advertisement</code></td><td>AD Advertisement</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BO Book</code></td><td>BO Book</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BR Brochure</code></td><td>BR Brochure</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FO Folder</code></td><td>FO Folder</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LF Leaflet</code></td><td>LF Leaflet</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MAG Magazine</code></td><td>MAG Magazine</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PC Postcard</code></td><td>PC Postcard</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PO Poster</code></td><td>PO Poster</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OT Other</code></td><td>OT Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DP Digital Presentation</code></td><td>DP Digital Presentation</td><td nowrap>true</td></tr>
     * </table>
     */
    Type_of_Material__c?: string;
    /**
     * <h3><b>Type of Use</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">For EXTERNAL use</code></td><td>For EXTERNAL use</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">For INTERNAL use</code></td><td>For INTERNAL use</td><td nowrap>true</td></tr>
     * </table>
     */
    Type_of_Use__c?: string;
    VersionData?: string;
    VersionDataUrl?: string;
    VersionNumber?: string;
}