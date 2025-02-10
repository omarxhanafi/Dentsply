// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BatchSettings__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Enable CallReportEventTriggerAfterInsert</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CallReportEventTriggerAfterInsertIsEnabl__c: boolean;
    /**
     * <h3><b>Enable CallReportEventTrigger</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CallReportEventTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable CampMgmtCampaignMemberTrigger</b></h3>
     * <p>When checked, the CampMgmtCampaignMemberTrigger Apex trigger is run on all inserts of CampaignMember records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CampMgmtCampaignMemberTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable CampMgmtCampaignSessionTrigger</b></h3>
     * <p>When checked, the CampMgmtCampaignSessionTrigger Apex trigger is run on all inserts of Campaign records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CampMgmtCampaignSessionTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable CampMgmtCampaignSharingTrigger</b></h3>
     * <p>When checked, the CampMgmtCampaignSharingTrigger Apex trigger is run on all modifications to Campaign records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CampMgmtCampaignSharingTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable CampMgmtCampaignTrigger</b></h3>
     * <p>When checked, the CampMgmtCampaignTrigger Apex trigger is run on all inserts of Campaign records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CampMgmtCampaignTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable CampMgmtEngagementTrigger</b></h3>
     * <p>When checked, the CampMgmtEngagementTrigger Apex trigger is run on all modifications to Engagement records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CampMgmtEngagementTriggerIsEnabled__c: boolean;
    ChangeEventHeader: ChangeEventHeader;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Enable CventEventInternalTrigger</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CventEventInternalTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Disable ContractTriggerHelper_updSales</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    DisableContractTriggerHelperUpdSales__c: boolean;
    /**
     * <h3><b>Enable EvLaunchRefresh</b></h3>
     * <p>When checked, the EvLaunchRefresh batch job is included in the scheduling chain started daily by the external integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    EvLaunchRefreshIsEnabled__c: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * <h3><b>Enable OrderSetAccountOwner</b></h3>
     * <p>When checked, the OrderSetAccountOwner Apex trigger is run on all inserts and updates of Order records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    OrderSetAccountOwnerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable ProdSyncRefresh</b></h3>
     * <p>When checked, the ProdSyncRefresh batch job is included in the scheduling chain started daily by the external integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ProdSyncRefreshIsEnabled__c: boolean;
    /**
     * <h3><b>Enable PushAmountToOpportunities</b></h3>
     * <p>When checked, the PushAmountToOpportunities Apex trigger is run on all updates of Account records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    PushAmountToOpportunitiesIsEnabled__c: boolean;
    ReplayId: string;
    SetupOwner: SObject;
    SetupOwnerId: string;
    /**
     * <h3><b>Enable StstRefresh</b></h3>
     * <p>When checked, the StstRefresh batch job is included in the scheduling chain started daily by the external integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    StstRefreshIsEnabled__c: boolean;
    /**
     * <h3><b>TotalCFEs Country Partitions</b></h3>
     * <p>The TotalCFEsRefresh job is executed by country for query selectivity reasons. The events in each country are further partitioned randomly into groups per country (e.g. US1, US2, ...). This setting determines the number of such sub-partitions per country. This value can be increased to increase query selectivity if needed.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(2,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">2</code></td></tr>
     * </table>
     */
    TotalCFEsCountryPartitions__c: number;
    /**
     * <h3><b>Enable TotalCFEsRefresh</b></h3>
     * <p>When checked, the TotalCFEsRefresh batch job is included in the scheduling chain started daily by the external integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    TotalCFEsRefreshIsEnabled__c: boolean;
    /**
     * <h3><b>Enable TotalCFEsTrigger</b></h3>
     * <p>When checked, the TotalCFEsTrigger apex trigger is run on all modifications to Event records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    TotalCFEsTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable TotalSalesRefresh</b></h3>
     * <p>When checked, the TotalSalesRefresh batch job is included in the scheduling chain started daily by the external integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    TotalSalesRefreshIsEnabled__c: boolean;
    /**
     * <h3><b>Enable TotalSalesTrigger</b></h3>
     * <p>When checked, the TotalSalesTrigger apex trigger is run on all modifications to Sales_History__c records.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    TotalSalesTriggerIsEnabled__c: boolean;
    /**
     * <h3><b>Enable WonLostRefresh</b></h3>
     * <p>When checked, the WonLostRefresh batch job is included in the scheduling chain started daily by the external integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    WonLostRefreshIsEnabled__c: boolean;
}