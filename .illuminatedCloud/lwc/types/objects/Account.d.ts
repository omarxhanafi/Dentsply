// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Account extends SObject 
{
    /**
     * <h3><b>Acc Strategy Icons (HQ)</b></h3>
     * <p>Help field, don&#39;t add layout</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Acc_Strategy_Icons_HQ__c: string;
    Account: AcceptedEventRelation;
    /**
     * <h3><b>Competitor Information</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Competitor_Information__c: string;
    /**
     * The reciprocal relationship for {@link Account_Create_Change_Request__c.Existing_Account__c}.
     */
    Account_Create_Change_Requests__r: Account_Create_Change_Request__c[];
    /**
     * <h3><b>Account # (HQ)</b></h3>
     * <p>This field is only for analysis. Examples are &quot;give me the number of Accounts with sales history records&quot;. Should not appear on any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_for_analysis_only__c: number;
    /**
     * The reciprocal relationship for {@link Account_Network_Member__c.Account_Network_Member__c}.
     */
    Account_Network_Members__r: Account_Network_Member__c[];
    Account_OneSF_Number__pc: string;
    /**
     * The reciprocal relationship for {@link Account_Plan__c.Account__c}.
     */
    Account_Plans__r: Account_Plan__c[];
    /**
     * The reciprocal relationship for {@link LoyaltyProgramParticipant__c.DistributorRep__c}.
     */
    Account_Program_Members1__r: LoyaltyProgramParticipant__c[];
    /**
     * The reciprocal relationship for {@link LoyaltyProgramParticipant__c.Contact__c}.
     */
    Account_Program_Members__r: LoyaltyProgramParticipant__c[];
    Account_Record_Type__pc: string;
    /**
     * The reciprocal relationship for {@link Account_Create_Change_Request__c.Parent_Account__c}.
     */
    Account_Requests__r: Account_Create_Change_Request__c[];
    /**
     * The reciprocal relationship for {@link Account_Create_Change_Request__c.Old_ParentAccount__c}.
     */
    Account_RequestsParentAcc__r: Account_Create_Change_Request__c[];
    /**
     * The reciprocal relationship for {@link Account_Segmentation__c.Account__c}.
     */
    Account_Segments__r: Account_Segmentation__c[];
    /**
     * <h3><b>Account Strategy (ATL Abut)</b></h3>
     * <p>The Account Strategy for ATLANTIS Abutments, applicable only for Lab Accounts, refer to the training material for more info.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case ( Loyalty_ATL_Abut__c , &quot;&gt;75%&quot;, IF (WonLostStatus_Abutments_EndField__c=&quot;WON&quot; || WonLostStatus_Abutments_EndField__c=&quot;REWON&quot;, &quot;KEEP&quot;, &quot;GET&quot;), &quot;&lt;75%&quot;, IF (( ISPICKVAL(Volume_ATL_Abut__c ,&quot;Medium Usage&quot; ) || ISPICKVAL(Volume_ATL_Abut__c ,&quot;High Usage&quot; ) ),IF ((WonLostStatus_Abutments_EndField__c=&quot;WON&quot; || WonLostStatus_Abutments_EndField__c=&quot;REWON&quot;),&quot;GROW&quot;,&quot;GET&quot;),&quot;TIME MINIMISE&quot;), &quot;0%&quot;, IF (( ISPICKVAL(Volume_ATL_Abut__c ,&quot;Medium Usage&quot; ) || ISPICKVAL(Volume_ATL_Abut__c ,&quot;High Usage&quot; ) ),&quot;GET&quot;,&quot;TIME MINIMISE&quot;), &quot;N/A&quot;, &quot;WITHOUT STRATEGY&quot;, &quot;WITHOUT STRATEGY&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_ATL_Abut__c: string;
    /**
     * <h3><b>Account Strategy (ATL Abut) (Text) HQ</b></h3>
     * <p>Temp help field until we dedicate different strategy fields for ATL Abut and Implants</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(20)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_ATL_Abut_Text_HQ__c: string;
    /**
     * <h3><b>Account Strategy (ATL Suprast)</b></h3>
     * <p>The Account Strategy for ATLANTIS ISUS, applicable only for Lab Accounts, refer to the training material for more info.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case ( Loyalty_ATL_ISUS__c , &quot;&gt;75%&quot;, IF (WonLostStatus_ISUS_EndField__c=&quot;WON&quot; || WonLostStatus_ISUS_EndField__c=&quot;REWON&quot;, &quot;KEEP&quot;, &quot;GET&quot;), &quot;&lt;75%&quot;, IF (( ISPICKVAL(Volume_ATL_ISUS__c ,&quot;Medium Usage&quot; ) || ISPICKVAL(Volume_ATL_ISUS__c ,&quot;High Usage&quot; ) ),IF ((WonLostStatus_ISUS_EndField__c=&quot;WON&quot; || WonLostStatus_ISUS_EndField__c=&quot;REWON&quot;),&quot;GROW&quot;,&quot;GET&quot;),&quot;TIME MINIMISE&quot;), &quot;0%&quot;, IF (( ISPICKVAL(Volume_ATL_ISUS__c ,&quot;Medium Usage&quot; ) || ISPICKVAL(Volume_ATL_ISUS__c ,&quot;High Usage&quot; ) ),&quot;GET&quot;,&quot;TIME MINIMISE&quot;), &quot;N/A&quot;, &quot;WITHOUT STRATEGY&quot;, &quot;WITHOUT STRATEGY&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_ATL_ISUS__c: string;
    /**
     * <h3><b>Account Strategy End LY (Implants)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_End_LY_Implants__c: string;
    /**
     * <h3><b>Account Strategy Icons</b></h3>
     * <p>Multi Strategy Icons</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case(Left( Acc_Strategy_Icons_HQ__c,15),&quot;01520000001F4Er&quot;,&quot;&quot;,image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;Left( Acc_Strategy_Icons_HQ__c,15)&amp;&quot;&quot;,&quot;&quot;,30,30))&amp;&quot;&quot;&amp; Case(mid( Acc_Strategy_Icons_HQ__c,16,15),&quot;01520000001F4Er&quot;,&quot;&quot;,image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;mid( Acc_Strategy_Icons_HQ__c,16,15)&amp;&quot;&quot;,&quot;&quot;,30,30))&amp;&quot;&quot;&amp; Case(mid( Acc_Strategy_Icons_HQ__c,31,15),&quot;01520000001F4Er&quot;,&quot;&quot;,image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;mid( Acc_Strategy_Icons_HQ__c,31,15)&amp;&quot;&quot;,&quot;&quot;,30,30))&amp;&quot;&quot;&amp; Case(mid( Acc_Strategy_Icons_HQ__c,46,15),&quot;01520000001F4Er&quot;,&quot;&quot;,image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;mid( Acc_Strategy_Icons_HQ__c,46,15)&amp;&quot;&quot;,&quot;&quot;,30,30))&amp;&quot;&quot;&amp; Case(mid( Acc_Strategy_Icons_HQ__c,61,15),&quot;01520000001F4Er&quot;,&quot;&quot;,image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;mid( Acc_Strategy_Icons_HQ__c,61,15)&amp;&quot;&quot;,&quot;&quot;,30,30))&amp;&quot;&quot;&amp; Case(mid( Acc_Strategy_Icons_HQ__c,76,15),&quot;01520000001F4Er&quot;,&quot;&quot;,image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;mid( Acc_Strategy_Icons_HQ__c,76,15)&amp;&quot;&quot;,&quot;&quot;,30,30))&amp;&quot;&quot;&amp; Case(mid( Acc_Strategy_Icons_HQ__c,91,15),&quot;01520000001F4Er&quot;,&quot;&quot;,image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;mid( Acc_Strategy_Icons_HQ__c,91,15)&amp;&quot;&quot;,&quot;&quot;,30,30))&amp;&quot;&quot;&amp; image(&quot;/servlet/servlet.FileDownload?file=&quot;&amp;right( Acc_Strategy_Icons_HQ__c,15)&amp;&quot;&quot;,&quot;&quot;,30,30)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_Icons__c: string;
    /**
     * <h3><b>Account Strategy (Implants)</b></h3>
     * <p>The Account Strategy for Implants, applicable only for Clinical Accounts, refer to the training material for more info.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If ( IsPickval(Custom_Segmentation__c, &quot;Segmentation N/A&quot; ), IF(Referral_Potential_Year__c &gt;= 5,&quot;REFERRAL&quot;,&quot;WITHOUT STRATEGY&quot;), Case ( Volume_Implants__c, &quot;No Usage&quot;,If ( IsPickval(Custom_Segmentation__c, &quot;Educate&quot;),&quot;EDUCATE&quot;,If ( Referral_Potential_Year__c &gt;= 5, &quot;REFERRAL&quot;,&quot;WITHOUT STRATEGY&quot;) ), &quot;Low Usage&quot;, If ( IsPickval(Custom_Segmentation__c, &quot;Implants Starter&quot; ), &quot;STARTER&quot;, If ( (Referral_Potential_Year__c &gt;= 5 &amp;&amp; Referral_Potential_Year__c &gt; Implants_Potential_Year__c), &quot;REFERRAL&quot;, If ( Loyalty_Implants_Text__c &gt; 0.25, IF ((WonLostStatus_Implants_EndField__c=&quot;WON&quot; || WonLostStatus_Implants_EndField__c=&quot;REWON&quot;),&quot;KEEP&quot;,&quot;TIME MINIMISE&quot;), &quot;TIME MINIMISE&quot;))), If ( Loyalty_Implants_Text__c &gt; 0.75, &quot;KEEP&quot;,If ( Loyalty_Implants_Text__c &lt;= 0 ,&quot;GET&quot;, IF((WonLostStatus_Implants_EndField__c=&quot;WON&quot; || WonLostStatus_Implants_EndField__c=&quot;REWON&quot;),&quot;GROW&quot;,&quot;GET&quot;)))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_Implants__c: string;
    /**
     * <h3><b>Account Strategy (Implants Basic)</b></h3>
     * <p>Alternative field for account Strategy to be used only for countries who select Loyalty manually (No Movex sales)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If ( IsPickval(Custom_Segmentation__c, &quot;Segmentation N/A&quot; ), IF(Referral_Potential_Year__c &gt;= 10,&quot;REFERRAL&quot;,&quot;WITHOUT STRATEGY&quot;), Case ( Volume_Implants__c, &quot;No Usage&quot;,If ( Referral_Potential_Year__c &gt;= 10, &quot;REFERRAL&quot;,If ( IsPickval(Custom_Segmentation__c, &quot;Educate&quot;),&quot;EDUCATE&quot;,&quot;WITHOUT STRATEGY&quot;) ), &quot;Low Usage&quot;, If ( IsPickval(Custom_Segmentation__c, &quot;Implants Starter&quot; ), &quot;STARTER&quot;, If ( Text(Loyalty_Implants_Basic__c) = &quot;25% to 75%&quot; || Text(Loyalty_Implants_Basic__c) = &quot;&gt;75%&quot;, &quot;KEEP&quot;, &quot;TIME MINIMISE&quot;)), If ( Text(Loyalty_Implants_Basic__c) =&quot;&gt;75%&quot;, &quot;KEEP&quot;,If ( Text(Loyalty_Implants_Basic__c) = &quot;0%&quot;,&quot;GET&quot;,&quot;GROW&quot;))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_Implants_Basic__c: string;
    /**
     * <h3><b>Account Strategy (SBU: ENDO)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (ISPICKVAL(Potential_SBU_ENDO__c,&quot;No Potential&quot;),&quot;WITHOUT STRATEGY&quot;, Case(Share_of_Potential_SBU_ENDO__c,&quot;&gt;75%&quot;,&quot;KEEP&quot;,&quot;26% to 75%&quot;,IF (ISPICKVAL(Potential_SBU_ENDO__c,&quot;Low&quot;),&quot;KEEP&quot;,&quot;GROW&quot;),&quot;1% to 25%&quot;,IF (ISPICKVAL(Potential_SBU_ENDO__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,&quot;GROW&quot;),&quot;0%&quot;,IF (ISPICKVAL(Potential_SBU_ENDO__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,IF (ISPICKVAL(Potential_SBU_ENDO__c,&quot;&quot;),&quot;WITHOUT STRATEGY&quot;,&quot;GET&quot;)),&quot;WITHOUT STRATEGY&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_SBU_ENDO__c: string;
    /**
     * <h3><b>Account Strategy (SBU: ORTH)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (ISPICKVAL(Potential_SBU_ORTHO__c,&quot;No Potential&quot;),&quot;WITHOUT STRATEGY&quot;, Case(Share_of_Potential_SBU_ORTHO__c,&quot;&gt;75%&quot;,&quot;KEEP&quot;,&quot;26% to 75%&quot;,IF (ISPICKVAL(Potential_SBU_ORTHO__c,&quot;Low&quot;),&quot;KEEP&quot;,&quot;GROW&quot;),&quot;1% to 25%&quot;,IF (ISPICKVAL(Potential_SBU_ORTHO__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,&quot;GROW&quot;),&quot;0%&quot;,IF (ISPICKVAL(Potential_SBU_ORTHO__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,IF (ISPICKVAL(Potential_SBU_ORTHO__c,&quot;&quot;),&quot;WITHOUT STRATEGY&quot;,&quot;GET&quot;)),&quot;WITHOUT STRATEGY&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_SBU_ORTH__c: string;
    /**
     * <h3><b>Account Strategy (SBU: PREV)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (ISPICKVAL(Potential_SBU_PREV__c,&quot;No Potential&quot;),&quot;WITHOUT STRATEGY&quot;, Case(Share_of_Potential_SBU_PREV__c,&quot;&gt;75%&quot;,&quot;KEEP&quot;,&quot;26% to 75%&quot;,IF (ISPICKVAL(Potential_SBU_PREV__c,&quot;Low&quot;),&quot;KEEP&quot;,&quot;GROW&quot;),&quot;1% to 25%&quot;,IF (ISPICKVAL(Potential_SBU_PREV__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,&quot;GROW&quot;),&quot;0%&quot;,IF (ISPICKVAL(Potential_SBU_PREV__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,IF (ISPICKVAL(Potential_SBU_PREV__c,&quot;&quot;),&quot;WITHOUT STRATEGY&quot;,&quot;GET&quot;)),&quot;WITHOUT STRATEGY&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_SBU_PREV__c: string;
    /**
     * <h3><b>Account Strategy (SBU: PROS)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (ISPICKVAL(Potential_SBU_PROS__c,&quot;No Potential&quot;),&quot;WITHOUT STRATEGY&quot;, Case(Share_of_Potential_SBU_PROS__c,&quot;&gt;75%&quot;,&quot;KEEP&quot;,&quot;26% to 75%&quot;,IF (ISPICKVAL(Potential_SBU_PROS__c,&quot;Low&quot;),&quot;KEEP&quot;,&quot;GROW&quot;),&quot;1% to 25%&quot;,IF (ISPICKVAL(Potential_SBU_PROS__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,&quot;GROW&quot;),&quot;0%&quot;,IF (ISPICKVAL(Potential_SBU_PROS__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,IF (ISPICKVAL(Potential_SBU_PROS__c,&quot;&quot;),&quot;WITHOUT STRATEGY&quot;,&quot;GET&quot;)),&quot;WITHOUT STRATEGY&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_SBU_PROS__c: string;
    /**
     * <h3><b>Account Strategy (SBU: REST)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (ISPICKVAL(Potential_SBU_RESTO__c,&quot;No Potential&quot;),&quot;WITHOUT STRATEGY&quot;, Case(Share_of_Potential_SBU_RESTO__c,&quot;&gt;75%&quot;,&quot;KEEP&quot;,&quot;26% to 75%&quot;,IF (ISPICKVAL(Potential_SBU_RESTO__c,&quot;Low&quot;),&quot;KEEP&quot;,&quot;GROW&quot;),&quot;1% to 25%&quot;,IF (ISPICKVAL(Potential_SBU_RESTO__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,&quot;GROW&quot;),&quot;0%&quot;,IF (ISPICKVAL(Potential_SBU_RESTO__c,&quot;Low&quot;),&quot;TIME MINIMISE&quot;,IF (ISPICKVAL(Potential_SBU_RESTO__c,&quot;&quot;),&quot;WITHOUT STRATEGY&quot;,&quot;GET&quot;)),&quot;WITHOUT STRATEGY&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_SBU_REST__c: string;
    /**
     * <h3><b>Account Strategy (SIMPLANT)</b></h3>
     * <p>Based on SP Guides Volume &amp; Loyalty. If this segmentation is not applicable for this accounts, please tick SIMPLANT Segmentation N/A checkbox.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (Simplant_Segmentation_NA__c=True,&quot;Without Strategy&quot;, IF ( Loyalty_SP_Guides__c =&quot;&gt;75%&quot;,&quot;KEEP&quot;, IF ((ISPICKVAL(Volume_Simplant__c,&quot;Medium Usage&quot; ) || ISPICKVAL(Volume_Simplant__c,&quot;High Usage&quot; )),If ((TS_CY_D_DD_AllPCs_Simplant__c+TS_CY_1_D_DD_AllPCs_Simplant__c+TS_CY_2_D_DD_AllPCs_Simplant__c)&lt;=0 ,&quot;EDUCATE&quot;, IF (Sold_Guides_L12M__c &lt;=0,&quot;GET&quot;,&quot;GROW&quot;)), &quot;TIME MINIMISE&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Strategy_Simplant__c: string;
    /**
     * <h3><b>Account Type &amp; Specialty</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Text(OneAccount_Type__c)&amp;IF(NOT(ISBLANK(Text(Sub_Account_Type__c ))),&quot; - &quot;&amp;Text(Sub_Account_Type__c ),&quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Account_Type_Specialty__c: string;
    Account_Website__pc: string;
    /**
     * The reciprocal relationship for {@link AccountBrand.AccountId}.
     */
    AccountBrands: AccountBrand[];
    /**
     * The reciprocal relationship for {@link AccountContactRelation.AccountId}.
     */
    AccountContactRelations: AccountContactRelation[];
    AccountContactRoles: AccountContactRole[];
    /**
     * <h3><b>Account ID (18 Digit)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASESAFEID(Id)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AccountID18Digit__c: string;
    AccountNumber: string;
    AccountPartnersFrom: AccountPartner[];
    AccountPartnersTo: AccountPartner[];
    /**
     * The reciprocal relationship for {@link Account.Parent_Geographical_Area__c}.
     */
    Accounts1__r: Account[];
    /**
     * The reciprocal relationship for {@link Account.Main_Competitor_D__c}.
     */
    Accounts__r: Account[];
    /**
     * The reciprocal relationship for {@link Accounts_Receivables__c.Account__c}.
     */
    Accounts_Receivables__r: Accounts_Receivables__c[];
    /**
     * The reciprocal relationship for {@link AccountSales__c.Account__c}.
     */
    AccountSales__r: AccountSales__c[];
    AccountSource: string;
    /**
     * The reciprocal relationship for {@link AccountTeamMember.AccountId}.
     */
    AccountTeamMembers: AccountTeamMember[];
    AccountUserTerritory2Views: AccountUserTerritory2View[];
    Active_KOL__pc: boolean;
    /**
     * <h3><b>Active Purchasing Contract?</b></h3>
     * <p>Will be updated via Workflow. Is enabled if a PA contract is active</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Active_Purhasing_Contract__c: boolean;
    Activities__r: LookedUpFromActivity[];
    ActivityHistories: ActivityHistory[];
    /**
     * <h3><b>Actual DI Volume CY</b></h3>
     * <p>Grouping of Volume based on actual sold implants LY (Actual Low, Actual Medium, Actual High). Based on Sold implants CY.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (AND(TQ_CY_D_DI_Implants_AllBrands__c &gt;=1, TQ_CY_D_DI_Implants_AllBrands__c &lt;=29),&quot;c. Low DI Actual Usage&quot;, IF (AND(TQ_CY_D_DI_Implants_AllBrands__c &gt;=30, TQ_CY_D_DI_Implants_AllBrands__c &lt;=99 ), &quot;b. Medium DI Actual Usage&quot;, IF (TQ_CY_D_DI_Implants_AllBrands__c &gt;=100 , &quot;a. High DI Actual Usage&quot;,&quot;&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Actual_DI_Volume_CY_D__c: string;
    /**
     * <h3><b>Actual DI Volume LY</b></h3>
     * <p>Grouping of Volume based on actual sold implants LY (Actual Low, Actual Medium, Actual High). Based on Sold implants LY</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (AND(TQ_CY_1_D_DI_Implants_AllBrands__c &gt;=1, TQ_CY_1_D_DI_Implants_AllBrands__c &lt;=29),&quot;c. Low DI Actual Usage&quot;, IF (AND(TQ_CY_1_D_DI_Implants_AllBrands__c &gt;=30, TQ_CY_1_D_DI_Implants_AllBrands__c &lt;=99 ), &quot;b. Medium DI Actual Usage&quot;, IF (TQ_CY_1_D_DI_Implants_AllBrands__c &gt;=100 , &quot;a. High DI Actual Usage&quot;,&quot;&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Actual_DI_Volume_LY_D__c: string;
    /**
     * The reciprocal relationship for {@link Address__c.Account__c}.
     */
    Addresses__r: Address__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.ReferredTo__c}.
     */
    Advanced_Profiling1__r: AdvancedProfiling__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.ImplantsPrimaryLabUsed__c}.
     */
    Advanced_Profiling2__r: AdvancedProfiling__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.ImplantsSpecialistRefTo__c}.
     */
    Advanced_Profiling3__r: AdvancedProfiling__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.EndoSpecialistRefTo__c}.
     */
    Advanced_Profiling4__r: AdvancedProfiling__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.LabUsedforAppliance__c}.
     */
    Advanced_Profiling5__r: AdvancedProfiling__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.OrthoSpecialistRefTo__c}.
     */
    Advanced_Profiling6__r: AdvancedProfiling__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.LabUsedforCrownBridge__c}.
     */
    Advanced_Profiling7__r: AdvancedProfiling__c[];
    /**
     * The reciprocal relationship for {@link AdvancedProfiling__c.Account__c}.
     */
    Advanced_Profiling__r: AdvancedProfiling__c[];
    /**
     * <h3><b>Advanced Profiling</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link AdvancedProfiling__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AdvancedProfiling__c: string;
    /**
     * <h3><b>Advanced Profiling</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link AdvancedProfiling__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AdvancedProfiling__r: AdvancedProfiling__c;
    Advisory_Board_Article_Summaries__pc: boolean;
    Advisory_Board_Member__pc: boolean;
    Ankylos_User__pc: boolean;
    AnnualRevenue: number;
    Approval_Date__pc: Date;
    /**
     * The reciprocal relationship for {@link ApprovalSubmission.RelatedRecordId}.
     */
    ApprovalSubmissions: ApprovalSubmission[];
    /**
     * The reciprocal relationship for {@link ApprovalWorkItem.RelatedRecordId}.
     */
    ApprovalWorkItems: ApprovalWorkItem[];
    /**
     * The reciprocal relationship for {@link AssetAccountParticipant.AccountId}.
     */
    AssetAccountParticipantAccount: AssetAccountParticipant[];
    /**
     * The reciprocal relationship for {@link Asset.AccountId}.
     */
    Assets: Asset[];
    /**
     * The reciprocal relationship for {@link Asset.ShipToParty__c}.
     */
    Assets4__r: Asset[];
    /**
     * The reciprocal relationship for {@link Asset.MainPartner__c}.
     */
    Assets5__r: Asset[];
    /**
     * The reciprocal relationship for {@link Asset.AssetServicedById}.
     */
    AssetServicedBy: Asset;
    /**
     * <h3><b>Assigned User(s)</b></h3>
     * <p>Shows the ERP User IDs if ETM is in use, or the Account Owner Name is ETM is not yet in use. Used in serach layouts to allow for users with both ETM and Ownership to see information about the owners. Needed because only 10 fields available on global search layouts and not possible to remove one. This will replace the Owner field shown before.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(  ISBLANK(TerritoryUsers__c),  Owner.Full_Name__c , TerritoryUsers__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Assigned_User_s__c: string;
    /**
     * The reciprocal relationship for {@link AssociatedLocation.ParentRecordId}.
     */
    AssociatedLocations: AssociatedLocation[];
    Astra_Tech_User__pc: boolean;
    /**
     * <h3><b>ATIS EV Conversion Completed?</b></h3>
     * <p>To be updated by a workflow when all criterias for EV Conversion is completed. Also used to find converted customers that again starts buying &quot;non ATIS-EV&quot; implants.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    ATIS_EV_Conversion_Completed__c: string;
    /**
     * <h3><b>ATIS EV Training Completed?</b></h3>
     * <p>Updated using Workflow based on ATIS EV Training Completed Date.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    ATIS_EV_Training_Completed__c: string;
    /**
     * <h3><b>ATIS EV Training Completion Date</b></h3>
     * <p>Used during EV Launch Tracking Campaign.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ATIS_EV_Training_Completion_Date__c: Date;
    /**
     * <h3><b>ATL Abut Potential/Year</b></h3>
     * <p>Potential ATL abutments per year.
     * Required for Lab Segmentation</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(6,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    ATL_Abut_Potential_Year__c: number;
    /**
     * <h3><b>ATL Suprast Potential/Year</b></h3>
     * <p>Number of bars, bridges and hybrids (Number of Cases) produced per Year ( New!! we used to add the monthly potential but now directly add the yearly potential)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(6,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    ATL_ISUS_Potential_Year__c: number;
    /**
     * <h3><b>ATL Suprast Won/Loss Code CY (HQ)</b></h3>
     * <p>Used to calculate the net # of new ATL ISUS customers // Don&#39;t Delete used in Reports</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_ISUS_EndField__c, &quot;WON&quot;, IF (Year( LastWonEventYearMonth_ISUS__c )=YEAR(TODAY()),1,0), &quot;REWON&quot;, IF (Year( LastWonEventYearMonth_ISUS__c )=YEAR(TODAY()),1,0), &quot;LOST&quot;, IF(YEAR( LastLostEventYearMonth_ISUS__c )=YEAR(TODAY()),-1,0), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ATL_ISUS_Won_Loss_Code_CY_HQ__c: number;
    /**
     * <h3><b>ATL Suprast Won/Loss Code LY (HQ)</b></h3>
     * <p>Used to calculate the net # of new ATL ISUS customers // Don&#39;t Delete used in Reports</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_ISUS_EndField__c, &quot;WON&quot;, IF (Year( LastWonEventYearMonth_ISUS__c )=YEAR(TODAY())-1,1,0), &quot;REWON&quot;, IF (Year( LastWonEventYearMonth_ISUS__c )=YEAR(TODAY())-1,1,0), &quot;LOST&quot;, IF(YEAR( LastLostEventYearMonth_ISUS__c )=YEAR(TODAY())-1,-1,0), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ATL_ISUS_Won_Loss_Code_LY_HQ__c: number;
    /**
     * <h3><b>ATL Abut Customer (HQ)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISNULL(  WonLostStatus_Abutments_EndField__c ) , 0, IF( ( WonLostStatus_Abutments_EndField__c ) = &quot;Existing&quot;,1,0))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Atlantis_Customer__c: number;
    Atlantis_User__pc: boolean;
    /**
     * <h3><b>ATLANTIS Web Order Customer</b></h3>
     * <p>This field is checked when a customer is an Atlantis Web Order customer. This does not mean that the customer has placed an order in AWO, but that he is able to.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Atlantis_Web_Order_Customer__c: boolean;
    Atlantis_WebOrder_user_D__pc: boolean;
    /**
     * <h3><b>ATL Abut Won/Loss Code CY (HQ)</b></h3>
     * <p>Used to calculate the net # of new ATL Abut customers</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_Abutments_EndField__c, &quot;WON&quot;, IF (Year( LastWonEventYearMonth_Abutments__c )=YEAR(TODAY()),1,0), &quot;REWON&quot;, IF (Year( LastWonEventYearMonth_Abutments__c )=YEAR(TODAY()),1,0), &quot;LOST&quot;, IF(YEAR( Lost_Atlantis_Customer_Date__c )=YEAR(TODAY()),-1,0), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Atlantis_Won_Loss_Code_CY__c: number;
    /**
     * <h3><b>ATL Abut Won/Lost Code LY (HQ)</b></h3>
     * <p>Used to calculate the net # of new ATL Abut customers</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_Abutments_EndField__c, &quot;WON&quot;, IF (Year( LastWonEventYearMonth_Abutments__c )=YEAR(TODAY())-1,1,0), &quot;REWON&quot;, IF (Year( LastWonEventYearMonth_Abutments__c )=YEAR(TODAY())-1,1,0), &quot;LOST&quot;, IF(YEAR( Lost_Atlantis_Customer_Date__c )=YEAR(TODAY())-1,-1,0), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Atlantis_Won_Lost_Code_LY__c: number;
    AttachedContentDocuments: AttachedContentDocument[];
    AttachedContentNotes: AttachedContentNote[];
    Attachments: Attachment[];
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.ConsentGiverId}.
     */
    AuthorizationFormConsents: AuthorizationFormConsent[];
    /**
     * <h3><b>Auto Maintenance Renewal</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Auto_Maintenance_Renewal__c: boolean;
    /**
     * <h3><b>AWO Approval Date</b></h3>
     * <p>The Date when the Account was approved as an AWO-customer. This equals the date when it was entered on the customer in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AWO_Approval_Date__c: Date;
    Azento_Startup_Kit_Sales_Date__pc: Date;
    /**
     * <h3><b>Big Fish Account (Implants)</b></h3>
     * <p>Part of Implants Segmentation. Ticked automatically by the system when Implants Potential is 300 and more.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( Implants_Potential_Year__c &gt;= 300 || Sold_Implants_L12M__c &gt;= 300 , True, False)</code></td></tr>
     * </table>
     */
    Big_Fish_Account_Implants__c: boolean;
    /**
     * <h3><b>Billing State/Province</b></h3>
     * <p>Picklist dependent on Country</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(01) Ain</code></td><td>(01) Ain</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(02) Aisne</code></td><td>(02) Aisne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(03) Allier</code></td><td>(03) Allier</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(04) Alpes-de-Haute-Provence</code></td><td>(04) Alpes-de-Haute-Provence</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(05) Hautes-Alpes</code></td><td>(05) Hautes-Alpes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(06) Alpes-Maritimes</code></td><td>(06) Alpes-Maritimes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(07) Ardèche</code></td><td>(07) Ardèche</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(08) Ardennes</code></td><td>(08) Ardennes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(09) Ariège</code></td><td>(09) Ariège</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(10) Aube</code></td><td>(10) Aube</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(11) Aude</code></td><td>(11) Aude</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(12) Aveyron</code></td><td>(12) Aveyron</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(13) Bouches-du-Rhône</code></td><td>(13) Bouches-du-Rhône</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(14) Calvados</code></td><td>(14) Calvados</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(15) Cantal</code></td><td>(15) Cantal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(16) Charente</code></td><td>(16) Charente</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(17) Charente-Maritime</code></td><td>(17) Charente-Maritime</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(18) Cher</code></td><td>(18) Cher</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(19) Corrèze</code></td><td>(19) Corrèze</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(21) Côte-d'Or</code></td><td>(21) Côte-d&#39;Or</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(22) Côtes-d'Armor</code></td><td>(22) Côtes-d&#39;Armor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(23) Creuse</code></td><td>(23) Creuse</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(24) Dordogne</code></td><td>(24) Dordogne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(25) Doubs</code></td><td>(25) Doubs</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(26) Drôme</code></td><td>(26) Drôme</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(27) Eure</code></td><td>(27) Eure</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(28) Eure-et-Loir</code></td><td>(28) Eure-et-Loir</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(29) Finistère</code></td><td>(29) Finistère</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(2A) Corse-du-Sud</code></td><td>(2A) Corse-du-Sud</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(2B) Haute-Corse</code></td><td>(2B) Haute-Corse</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(30) Gard</code></td><td>(30) Gard</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(31) Haute-Garonne</code></td><td>(31) Haute-Garonne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(32) Gers</code></td><td>(32) Gers</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(33) Gironde</code></td><td>(33) Gironde</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(34) Hérault</code></td><td>(34) Hérault</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(35) Ille-et-Vilaine</code></td><td>(35) Ille-et-Vilaine</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(36) Indre</code></td><td>(36) Indre</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(37) Indre-et-Loire</code></td><td>(37) Indre-et-Loire</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(38) Isère</code></td><td>(38) Isère</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(39) Jura</code></td><td>(39) Jura</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(40) Landes</code></td><td>(40) Landes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(41) Loir-et-Cher</code></td><td>(41) Loir-et-Cher</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(42) Loire</code></td><td>(42) Loire</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(43) Haute-Loire</code></td><td>(43) Haute-Loire</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(44) Loire-Atlantique</code></td><td>(44) Loire-Atlantique</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(45) Loiret</code></td><td>(45) Loiret</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(46) Lot</code></td><td>(46) Lot</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(47) Lot-et-Garonne</code></td><td>(47) Lot-et-Garonne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(48) Lozère</code></td><td>(48) Lozère</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(49) Maine-et-Loire</code></td><td>(49) Maine-et-Loire</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(50) Manche</code></td><td>(50) Manche</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(51) Marne</code></td><td>(51) Marne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(52) Haute-Marne</code></td><td>(52) Haute-Marne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(53) Mayenne</code></td><td>(53) Mayenne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(54) Meurthe-et-Moselle</code></td><td>(54) Meurthe-et-Moselle</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(55) Meuse</code></td><td>(55) Meuse</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(56) Morbihan</code></td><td>(56) Morbihan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(57) Moselle</code></td><td>(57) Moselle</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(58) Nièvre</code></td><td>(58) Nièvre</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(59) Nord</code></td><td>(59) Nord</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(60) Oise</code></td><td>(60) Oise</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(61) Orne</code></td><td>(61) Orne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(62) Pas-de-Calais</code></td><td>(62) Pas-de-Calais</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(63) Puy-de-Dôme</code></td><td>(63) Puy-de-Dôme</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(64) Pyrénées-Atlantiques</code></td><td>(64) Pyrénées-Atlantiques</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(65) Hautes-Pyrénées</code></td><td>(65) Hautes-Pyrénées</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(66) Pyrénées-Orientales</code></td><td>(66) Pyrénées-Orientales</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(67) Bas-Rhin</code></td><td>(67) Bas-Rhin</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(68) Haut-Rhin</code></td><td>(68) Haut-Rhin</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(69) Rhône</code></td><td>(69) Rhône</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(70) Haute-Saône</code></td><td>(70) Haute-Saône</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(71) Saône-et-Loire</code></td><td>(71) Saône-et-Loire</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(72) Sarthe</code></td><td>(72) Sarthe</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(73) Savoie</code></td><td>(73) Savoie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(74) Haute-Savoie</code></td><td>(74) Haute-Savoie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(76) Seine-Maritime</code></td><td>(76) Seine-Maritime</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(77) Seine-et-Marne</code></td><td>(77) Seine-et-Marne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(78) Yvelines</code></td><td>(78) Yvelines</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(79) Deux-Sèvres</code></td><td>(79) Deux-Sèvres</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(80) Somme</code></td><td>(80) Somme</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(81) Tarn</code></td><td>(81) Tarn</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(82) Tarn-et-Garonne</code></td><td>(82) Tarn-et-Garonne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(83) Var</code></td><td>(83) Var</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(84) Vaucluse</code></td><td>(84) Vaucluse</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(85) Vendée</code></td><td>(85) Vendée</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(86) Vienne</code></td><td>(86) Vienne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(87) Haute-Vienne</code></td><td>(87) Haute-Vienne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(88) Vosges</code></td><td>(88) Vosges</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(89) Yonne</code></td><td>(89) Yonne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(90) Territoire de Belfort</code></td><td>(90) Territoire de Belfort</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(91) Essonne</code></td><td>(91) Essonne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(92) Hauts-de-Seine</code></td><td>(92) Hauts-de-Seine</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(93) Seine-Saint-Denis</code></td><td>(93) Seine-Saint-Denis</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(94) Val-de-Marne</code></td><td>(94) Val-de-Marne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(95) Val-d'Oise</code></td><td>(95) Val-d&#39;Oise</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(971) Guadeloupe</code></td><td>(971) Guadeloupe</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(972) Martinique</code></td><td>(972) Martinique</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(973) Guyane</code></td><td>(973) Guyane</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(974) La Réunion</code></td><td>(974) La Réunion</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(975) Saint-Pierre-et-Miquelon</code></td><td>(975) Saint-Pierre-et-Miquelon</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(976) Mayotte</code></td><td>(976) Mayotte</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(984) Terres Australes et Antarctiques</code></td><td>(984) Terres Australes et Antarctiques</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(986) Wallis et Futuna</code></td><td>(986) Wallis et Futuna</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(987) Polynésie Française</code></td><td>(987) Polynésie Française</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(988) Nouvelle-Calédonie</code></td><td>(988) Nouvelle-Calédonie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">75001  Paris</code></td><td>75001  Paris</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ACT</code></td><td>ACT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AK</code></td><td>AK</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AL</code></td><td>AL</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AR</code></td><td>AR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Auvergne Urology</code></td><td>Auvergne Urology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AZ</code></td><td>AZ</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bordeaux Dental</code></td><td>Bordeaux Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bourgogne</code></td><td>Bourgogne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bretagne</code></td><td>Bretagne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CA</code></td><td>CA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Centre Est FR</code></td><td>Centre Est FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Centre FR</code></td><td>Centre FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Champagne Dental</code></td><td>Champagne Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CO</code></td><td>CO</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CT</code></td><td>CT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DC</code></td><td>DC</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE</code></td><td>DE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Est FR</code></td><td>Est FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FL</code></td><td>FL</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GA</code></td><td>GA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HI</code></td><td>HI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IA</code></td><td>IA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ID</code></td><td>ID</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IDF</code></td><td>IDF</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IL</code></td><td>IL</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN</code></td><td>IN</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT00</code></td><td>IT00</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT101</code></td><td>IT101</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT102</code></td><td>IT102</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT103</code></td><td>IT103</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT104</code></td><td>IT104</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT105</code></td><td>IT105</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT106</code></td><td>IT106</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT107</code></td><td>IT107</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT108</code></td><td>IT108</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT109</code></td><td>IT109</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT110</code></td><td>IT110</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT16</code></td><td>IT16</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT201</code></td><td>IT201</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT202</code></td><td>IT202</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT203</code></td><td>IT203</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT204</code></td><td>IT204</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT205</code></td><td>IT205</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT206</code></td><td>IT206</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT207</code></td><td>IT207</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT208</code></td><td>IT208</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT209</code></td><td>IT209</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT210</code></td><td>IT210</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT211</code></td><td>IT211</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT300</code></td><td>IT300</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT301</code></td><td>IT301</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT302</code></td><td>IT302</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT303</code></td><td>IT303</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT304</code></td><td>IT304</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT305</code></td><td>IT305</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT306</code></td><td>IT306</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT307</code></td><td>IT307</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT308</code></td><td>IT308</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT309</code></td><td>IT309</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT401</code></td><td>IT401</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT402</code></td><td>IT402</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT403</code></td><td>IT403</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT404</code></td><td>IT404</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT405</code></td><td>IT405</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT406</code></td><td>IT406</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT407</code></td><td>IT407</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT408</code></td><td>IT408</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT409</code></td><td>IT409</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT50</code></td><td>IT50</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT501</code></td><td>IT501</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT502</code></td><td>IT502</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT503</code></td><td>IT503</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT504</code></td><td>IT504</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT505</code></td><td>IT505</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT506</code></td><td>IT506</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT507</code></td><td>IT507</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT508</code></td><td>IT508</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT509</code></td><td>IT509</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT51</code></td><td>IT51</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT510</code></td><td>IT510</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT511</code></td><td>IT511</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT53</code></td><td>IT53</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT54</code></td><td>IT54</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT55</code></td><td>IT55</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT56</code></td><td>IT56</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT59</code></td><td>IT59</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT60</code></td><td>IT60</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT601</code></td><td>IT601</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT602</code></td><td>IT602</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT603</code></td><td>IT603</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT604</code></td><td>IT604</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT605</code></td><td>IT605</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT606</code></td><td>IT606</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT607</code></td><td>IT607</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT608</code></td><td>IT608</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT61</code></td><td>IT61</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT62</code></td><td>IT62</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT63</code></td><td>IT63</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT64</code></td><td>IT64</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT65</code></td><td>IT65</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT66</code></td><td>IT66</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT67</code></td><td>IT67</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT69</code></td><td>IT69</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT70</code></td><td>IT70</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT701</code></td><td>IT701</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT702</code></td><td>IT702</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT703</code></td><td>IT703</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT704</code></td><td>IT704</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT705</code></td><td>IT705</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT706</code></td><td>IT706</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT707</code></td><td>IT707</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT708</code></td><td>IT708</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT709</code></td><td>IT709</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT71</code></td><td>IT71</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT72</code></td><td>IT72</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT73</code></td><td>IT73</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT74</code></td><td>IT74</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT80</code></td><td>IT80</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT82</code></td><td>IT82</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT83</code></td><td>IT83</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ITN08</code></td><td>ITN08</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">KS</code></td><td>KS</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">KY</code></td><td>KY</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LA</code></td><td>LA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Languedoc Urology</code></td><td>Languedoc Urology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Loire</code></td><td>Loire</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lorraine Urology</code></td><td>Lorraine Urology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lyon Dental</code></td><td>Lyon Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MA</code></td><td>MA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Marseille Corse</code></td><td>Marseille Corse</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Marseille Dental</code></td><td>Marseille Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MD</code></td><td>MD</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ME</code></td><td>ME</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MI</code></td><td>MI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MN</code></td><td>MN</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MO</code></td><td>MO</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Montpellier Dental</code></td><td>Montpellier Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MS</code></td><td>MS</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MT</code></td><td>MT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NC</code></td><td>NC</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ND</code></td><td>ND</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NE</code></td><td>NE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NH</code></td><td>NH</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nice-Corse Dental</code></td><td>Nice-Corse Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NJ</code></td><td>NJ</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NM</code></td><td>NM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord Est FR</code></td><td>Nord Est FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord FR</code></td><td>Nord FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord Ouest</code></td><td>Nord Ouest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord Ouest Surgery</code></td><td>Nord Ouest Surgery</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Normandie</code></td><td>Normandie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NSW</code></td><td>NSW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NT</code></td><td>NT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NV</code></td><td>NV</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NY</code></td><td>NY</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NZ</code></td><td>NZ</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OH</code></td><td>OH</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OK</code></td><td>OK</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OR</code></td><td>OR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PA</code></td><td>PA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Paca Urology</code></td><td>Paca Urology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Poitou-Charentes</code></td><td>Poitou-Charentes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QLD</code></td><td>QLD</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Remplacant</code></td><td>Remplacant</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rhone Alpes</code></td><td>Rhone Alpes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rhöne-Corse</code></td><td>Rhöne-Corse</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">RI</code></td><td>RI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Roitou</code></td><td>Roitou</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SA</code></td><td>SA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SC</code></td><td>SC</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SD</code></td><td>SD</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sud Est FR</code></td><td>Sud Est FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sud Ouest</code></td><td>Sud Ouest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TAS</code></td><td>TAS</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TN</code></td><td>TN</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Toulouse Dental</code></td><td>Toulouse Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TX</code></td><td>TX</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Up to 75020 Paris</code></td><td>Up to 75020 Paris</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UT</code></td><td>UT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">VA</code></td><td>VA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">VIC</code></td><td>VIC</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">VT</code></td><td>VT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WA</code></td><td>WA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WI</code></td><td>WI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WV</code></td><td>WV</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WY</code></td><td>WY</td><td nowrap>true</td></tr>
     * </table>
     */
    Billing_State_Province__c: string;
    Billing_State_Province__pc: string;
    BillingAddress: Address;
    BillingCity: string;
    BillingCountry: string;
    BillingGeocodeAccuracy: string;
    BillingLatitude: number;
    BillingLongitude: number;
    BillingPostalCode: string;
    BillingState: string;
    BillingStreet: string;
    /**
     * The reciprocal relationship for {@link FulfillmentOrder.BillToContactId}.
     */
    BillToContact: FulfillmentOrder;
    BouncedObject: EmailBounceEvent;
    /**
     * The reciprocal relationship for {@link BusinessCourtesy__c.Contact__c}.
     */
    Business_Courtesies__r: BusinessCourtesy__c[];
    /**
     * The reciprocal relationship for {@link Call_Recording__c.Account_Name__c}.
     */
    Call_Recordings__r: Call_Recording__c[];
    /**
     * The reciprocal relationship for {@link CampaignMember.Hotel__c}.
     */
    Campaign_Members1__r: CampaignMember[];
    /**
     * The reciprocal relationship for {@link CampaignMember.Account__c}.
     */
    Campaign_Members2__r: CampaignMember[];
    /**
     * The reciprocal relationship for {@link CampaignMember.Dealer__c}.
     */
    Campaign_Members3__r: CampaignMember[];
    /**
     * The reciprocal relationship for {@link CampaignMember.Payer_Movex_Account__c}.
     */
    Campaign_Members__r: CampaignMember[];
    CampaignMembers: CampaignMember[];
    /**
     * The reciprocal relationship for {@link Campaign.Primary_Contact_Person_at_Venue__c}.
     */
    Campaigns1__r: Campaign[];
    /**
     * The reciprocal relationship for {@link Campaign.Confirmed_Speaker__c}.
     */
    Campaigns2__r: Campaign[];
    /**
     * The reciprocal relationship for {@link Campaign.Confirmed_Moderator__c}.
     */
    Campaigns3__r: Campaign[];
    /**
     * The reciprocal relationship for {@link Campaign.Speaker__c}.
     */
    Campaigns__r: Campaign[];
    /**
     * The reciprocal relationship for {@link Campaign.NA_Co_Sponsor_of_Event__c}.
     */
    CampaignsSponsorship__r: Campaign[];
    Capitalized_Middle_Name__pc: string;
    /**
     * The reciprocal relationship for {@link CaseAccountRole__c.Account__c}.
     */
    CaseAccount__r: CaseAccountRole__c[];
    /**
     * The reciprocal relationship for {@link CaseAccountRole__c.Contact__c}.
     */
    CaseContactRolesCustom__r: CaseAccountRole__c[];
    Cases: Case[];
    /**
     * The reciprocal relationship for {@link Case.SiroforcePartner__c}.
     */
    CasesSiroforcePartner__r: Case[];
    /**
     * <h3><b># of CBCT referred out per month</b></h3>
     * <p>Number to determine how many CBCT (Cone-beam computed tomography, Xray cases) are referred out per month</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CBCTReferralsMonth__c: number;
    Ceram_x_Spectra_ST_Seeding__pc: boolean;
    /**
     * <h3><b>CFEs Current Month (All SBUs)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_CM__c: number;
    CFEs_All_CM__pc: number;
    /**
     * <h3><b>CFEs Last Year (All SBUs)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_CY_1__c: number;
    CFEs_All_CY_1__pc: number;
    /**
     * <h3><b>CFEs Current Year (All SBUs)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_CY__c: number;
    CFEs_All_CY__pc: number;
    /**
     * <h3><b>CFEs Last 12 Months (All SBUs)</b></h3>
     * <p>SBU: All SBUs. NOTE: Not the same as sum of all SBUs since one CFE can target multiple SBUs. Summarized by Cloud Jobs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_Last_12__c: number;
    CFEs_All_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (All SBUs)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_Last_6__c: number;
    CFEs_All_Last_6__pc: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (All SBUs)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_Last_7_12__c: number;
    CFEs_All_Last_7_12__pc: number;
    /**
     * <h3><b>Last CFE Date (All SBUs)</b></h3>
     * <p>SBU: Any, All Countries - last CFE date populated by Cloud Job together with CFE roll-up summaries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_Last_CFE_Date__c: Date;
    CFEs_All_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (All SBUs)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_LM__c: number;
    CFEs_All_LM__pc: number;
    /**
     * <h3><b>CFEs Next 6 Months (ALL SBUs)</b></h3>
     * <p>Planned Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_All_Next_6__c: number;
    CFEs_All_Next_6__pc: number;
    /**
     * <h3><b>CFEs Current Month (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_CY__c: number;
    CFEs_CAD_CAM_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_Last_7_12__c: number;
    /**
     * <h3><b>Last CFE Date (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_Last_CFE_Date__c: Date;
    CFEs_CAD_CAM_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (CDCM)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_CAD_CAM_Next_6__c: number;
    /**
     * <h3><b>CFEs Current Month (ENDO)</b></h3>
     * <p>SBU: ENDO, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_CM__c: number;
    CFEs_Endodontics_CM__pc: number;
    /**
     * <h3><b>CFEs Current Year (ENDO)</b></h3>
     * <p>SBU: ENDO, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_CY__c: number;
    CFEs_Endodontics_CY__pc: number;
    /**
     * <h3><b>CFEs Last 12 Months (ENDO)</b></h3>
     * <p>SBU: Endodontics, All Countries. Summarized by Cloud Jobs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_Last_12__c: number;
    CFEs_Endodontics_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (ENDO)</b></h3>
     * <p>SBU: Endo, all countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_Last_6__c: number;
    CFEs_Endodontics_Last_6__pc: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (ENDO)</b></h3>
     * <p>SBU: ENDO, All countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_Last_7_12__c: number;
    CFEs_Endodontics_Last_7_12__pc: number;
    /**
     * <h3><b>Last CFE Date (ENDO)</b></h3>
     * <p>SBU: ENDO, All Countries - last CFE date populated by Cloud Job together with CFE roll-up summaries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_Last_CFE_Date__c: Date;
    CFEs_Endodontics_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (ENDO)</b></h3>
     * <p>SBU: ENDO, All countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_LM__c: number;
    CFEs_Endodontics_LM__pc: number;
    /**
     * <h3><b>CFEs Next 6 Months (ENDO)</b></h3>
     * <p>SBU: ENDO, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Endodontics_Next_6__c: number;
    CFEs_Endodontics_Next_6__pc: number;
    /**
     * <h3><b>CFEs Current Month (IMAG)</b></h3>
     * <p>Updated via Daniel batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (IMAG)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (IMAG)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_CY__c: number;
    CFEs_Imaging_Systems_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (IMAG)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (IMAG)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_Last_7_12__c: number;
    /**
     * <h3><b>Last CFE Date (IMAG)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_Last_CFE_Date__c: Date;
    CFEs_Imaging_Systems_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (IMAG)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (IMAG)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Imaging_Systems_Next_6__c: number;
    /**
     * <h3><b>CFEs Current Month (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_CM__c: number;
    CFEs_Implants_CM__pc: number;
    /**
     * <h3><b>CFEs Last Year (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_CY_1__c: number;
    CFEs_Implants_CY_1__pc: number;
    /**
     * <h3><b>CFEs 2020 (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_CY_2__c: number;
    CFEs_Implants_CY_2__pc: number;
    /**
     * <h3><b>CFEs 2018 (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_CY_3__c: number;
    CFEs_Implants_CY_3__pc: number;
    CFEs_Implants_CY_4__pc: number;
    /**
     * <h3><b>CFEs Current Year (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_CY__c: number;
    CFEs_Implants_CY__pc: number;
    /**
     * <h3><b>CFEs Last 12 Months (IMPL)</b></h3>
     * <p>SBU: Implants, All Countries. Summarized by Cloud Jobs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_Last_12__c: number;
    CFEs_Implants_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_Last_6__c: number;
    CFEs_Implants_Last_6__pc: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_Last_7_12__c: number;
    CFEs_Implants_Last_7_12__pc: number;
    /**
     * <h3><b>Last CFE Date (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_Last_CFE_Date__c: Date;
    CFEs_Implants_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_LM__c: number;
    CFEs_Implants_LM__pc: number;
    /**
     * <h3><b>CFEs Next 6 Months (IMPL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Implants_Next_6__c: number;
    CFEs_Implants_Next_6__pc: number;
    /**
     * <h3><b>CFEs Current Month (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_CY__c: number;
    CFEs_Instruments_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_Last_7_12__c: number;
    /**
     * <h3><b>Last CFE Date (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_Last_CFE_Date__c: Date;
    CFEs_Instruments_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (INST)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Instruments_Next_6__c: number;
    /**
     * <h3><b>CFEs Current Month (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Orthodontics_CM__c: number;
    CFEs_Orthodontics_CM__pc: number;
    /**
     * <h3><b>CFEs Current Year (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Orthodontics_CY__c: number;
    CFEs_Orthodontics_CY__pc: number;
    CFEs_Orthodontics_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Orthodontics_Last_6__c: number;
    CFEs_Orthodontics_Last_6__pc: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Orthodontics_Last_7_12__c: number;
    CFEs_Orthodontics_Last_7_12__pc: number;
    /**
     * <h3><b>Last CFE Date (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Orthodontics_Last_CFE_Date__c: Date;
    CFEs_Orthodontics_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Orthodontics_LM__c: number;
    CFEs_Orthodontics_LM__pc: number;
    /**
     * <h3><b>CFEs Next 6 Months (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Orthodontics_Next_6__c: number;
    CFEs_Orthodontics_Next_6__pc: number;
    /**
     * <h3><b>CFEs Last 12 Months (ORTH)</b></h3>
     * <p>SBU: Orthodontics, All Countries. Summarized by Cloud Jobs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Othodontics_Last_12__c: number;
    /**
     * <h3><b>CFEs Current Month (P-R-E)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (P-R-E)</b></h3>
     * <p>Coverage by Preventive , Restorative and Endodontics SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (P-R-E)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_CY__c: number;
    /**
     * <h3><b>CFEs Last 12 Months (P-R-E)</b></h3>
     * <p>SBU: All in P-R-E. NOTE: Not the same as sum of all SBUs since one CFE can target multiple SBUs. Summarized by Cloud Jobs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_Last_12__c: number;
    /**
     * <h3><b>CFEs Last 6 Months (P-R-E)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (P-R-E)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_Last_7_12__c: number;
    /**
     * <h3><b>CFEs Last Month (P-R-E)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (P-R-E)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Pre_Next_6__c: number;
    /**
     * <h3><b>CFEs Current Month (P-R-E-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prep_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (P-R-E-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prep_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (P-R-E-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prep_CY__c: number;
    /**
     * <h3><b>CFEs Last 6 Months (P-R-E-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prep_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (P-R-E-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prep_Last_7_12__c: number;
    /**
     * <h3><b>CFEs Last Month (P-R-E-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prep_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (P-R-E-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prep_Next_6__c: number;
    /**
     * <h3><b>CFEs Current Month (PREV)</b></h3>
     * <p>SBU: Preventive, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Preventive_CM__c: number;
    CFEs_Preventive_CM__pc: number;
    /**
     * <h3><b>CFEs Current Year (PREV)</b></h3>
     * <p>SBU: Preventive, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Preventive_CY__c: number;
    CFEs_Preventive_CY__pc: number;
    CFEs_Preventive_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (PREV)</b></h3>
     * <p>SBU: Preventive, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Preventive_Last_6__c: number;
    CFEs_Preventive_Last_6__pc: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (PREV)</b></h3>
     * <p>SBU: Preventive, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Preventive_Last_7_12__c: number;
    CFEs_Preventive_Last_7_12__pc: number;
    /**
     * <h3><b>Last CFE Date (PREV)</b></h3>
     * <p>SBU: Preventive, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Preventive_Last_CFE_Date__c: Date;
    CFEs_Preventive_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (PREV)</b></h3>
     * <p>SBU: Preventive, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Preventive_LM__c: number;
    CFEs_Preventive_LM__pc: number;
    /**
     * <h3><b>CFEs Next 6 Months (PREV)</b></h3>
     * <p>SBU: Preventive, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Preventive_Next_6__c: number;
    CFEs_Preventive_Next_6__pc: number;
    /**
     * <h3><b>CFEs Current Month (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_CM__c: number;
    CFEs_Prosthetics_CM__pc: number;
    /**
     * <h3><b>CFEs Last Year (PROS)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_CY__c: number;
    CFEs_Prosthetics_CY__pc: number;
    /**
     * <h3><b>CFEs Last 12 Months (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries. Summarized by Cloud Jobs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_Last_12__c: number;
    CFEs_Prosthetics_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_Last_6__c: number;
    CFEs_Prosthetics_Last_6__pc: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_Last_7_12__c: number;
    CFEs_Prosthetics_Last_7_12__pc: number;
    /**
     * <h3><b>Last CFE Date (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_Last_CFE_Date__c: Date;
    CFEs_Prosthetics_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_LM__c: number;
    CFEs_Prosthetics_LM__pc: number;
    /**
     * <h3><b>CFEs Next 6 months (PROS)</b></h3>
     * <p>SBU: Prosthetics, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prosthetics_Next_6__c: number;
    CFEs_Prosthetics_Next_6__pc: number;
    /**
     * <h3><b>CFEs Current Month (P-R-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prp_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (P-R-P)</b></h3>
     * <p>Coverage by Prosthetics, Restorative and Preventive SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prp_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (P-R-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prp_CY__c: number;
    /**
     * <h3><b>CFEs Last 6 Months (P-R-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prp_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (P-R-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prp_Last_7_12__c: number;
    /**
     * <h3><b>CFEs Last Month (P-R-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prp_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (P-R-P)</b></h3>
     * <p>Coverage by all SBUs - Note not the same as the summary of each SBU coverage since one CFE can target multiple SBU. Populated by Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Prp_Next_6__c: number;
    /**
     * <h3><b>CFEs Current Month (REST)</b></h3>
     * <p>SBU: Restorative, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Restorative_CM__c: number;
    CFEs_Restorative_CM__pc: number;
    /**
     * <h3><b>CFEs Current Year (REST)</b></h3>
     * <p>SBU: Restorative, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Restorative_CY__c: number;
    CFEs_Restorative_CY__pc: number;
    CFEs_Restorative_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (REST)</b></h3>
     * <p>SBU: Restorative, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Restorative_Last_6__c: number;
    CFEs_Restorative_Last_6__pc: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (REST)</b></h3>
     * <p>SBU: Restorative, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Restorative_Last_7_12__c: number;
    CFEs_Restorative_Last_7_12__pc: number;
    /**
     * <h3><b>Last CFE Date (REST)</b></h3>
     * <p>SBU: Restorative, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Restorative_Last_CFE_Date__c: Date;
    CFEs_Restorative_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (REST)</b></h3>
     * <p>SBU: Restorative, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Restorative_LM__c: number;
    CFEs_Restorative_LM__pc: number;
    /**
     * <h3><b>CFEs Next 6 Months (REST)</b></h3>
     * <p>SBU: Restorative, All Countries</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Restorative_Next_6__c: number;
    CFEs_Restorative_Next_6__pc: number;
    /**
     * <h3><b>CFEs Current Month (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_CY__c: number;
    /**
     * <h3><b>CFEs Last 12 Months (M-A-N-T)</b></h3>
     * <p>SBU: Equipment (Imaging, Cad/Cam, Instruments, Treatment Centers), All Countries. Summarized by Cloud Jobs.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_Last_12__c: number;
    /**
     * <h3><b>CFEs Last 6 Months (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_Last_7_12__c: number;
    /**
     * <h3><b>Last CFE Date (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_Last_CFE_Date__c: Date;
    /**
     * <h3><b>CFEs Last Month (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (M-A-N-T)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Sirona_Next_6__c: number;
    /**
     * <h3><b>CFEs Current Month (TRCE)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_CM__c: number;
    /**
     * <h3><b>CFEs Last Year (TRCE)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_CY_1__c: number;
    /**
     * <h3><b>CFEs Current Year (TRCE)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_CY__c: number;
    CFEs_Treatment_Centers_Last_12__pc: number;
    /**
     * <h3><b>CFEs Last 6 Months (TRCE)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_Last_6__c: number;
    /**
     * <h3><b>CFEs Last 7-12 Months (TRCE)</b></h3>
     * <p>Set by Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_Last_7_12__c: number;
    /**
     * <h3><b>Last CFE Date (TRCE)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_Last_CFE_Date__c: Date;
    CFEs_Treatment_Centers_Last_CFE_Date__pc: Date;
    /**
     * <h3><b>CFEs Last Month (TRCE)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_LM__c: number;
    /**
     * <h3><b>CFEs Next 6 Months (TRCE)</b></h3>
     * <p>Set By Daniel Batch jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CFEs_Treatment_Centers_Next_6__c: number;
    ChannelProgramLevelName: string;
    /**
     * The reciprocal relationship for {@link ChannelProgramMember.PartnerId}.
     */
    ChannelProgramMembers: ChannelProgramMember[];
    ChannelProgramName: string;
    /**
     * The reciprocal relationship for {@link geopointe__Check_In__c.geopointe__Account__c}.
     */
    Check_Ins__r: geopointe__Check_In__c[];
    /**
     * The reciprocal relationship for {@link Account.ParentId}.
     */
    ChildAccounts: Account[];
    /**
     * <h3><b>Child Accounts Count</b></h3>
     * <p>This field represents the count of child accounts associated with the current account. It is automatically updated to reflect the number of direct and indirect child accounts in the account hierarchy. The count is used for reporting and analytical purposes to understand the size and structure of the account hierarchy.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(6,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    ChildAccountsCount__c: number;
    /**
     * The reciprocal relationship for {@link Account.Payer_Lookup__c}.
     */
    ChildtoPayer__r: Account[];
    /**
     * <h3><b>Account Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Awaiting Verification</code></td><td>Awaiting Verification</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Verified</code></td><td>Verified</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Active</code></td><td>Active</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Inactive</code></td><td>Inactive</td><td nowrap>true</td></tr>
     * </table>
     */
    CIM360_Status__c: string;
    /**
     * <h3><b>CIM360Id</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    CIM360Id__c: number;
    /**
     * <h3><b>CIM Key</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( RecordType.DeveloperName ,&quot;DNA_Distributor&quot; , &quot;SFDC_DNA&quot;, &quot;DNA_EndUser&quot;, &quot;SFDC_DNA&quot;, &quot;DNA_Event&quot;,&quot;SFDC_DNA&quot;,&quot;DNA_Internal&quot;,&quot;SFDC_DNA&quot;,&quot;CIM_Account&quot;, &quot;SFDC_0100&quot;, &quot;SFDC&quot; )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CIM_Key__c: string;
    /**
     * The reciprocal relationship for {@link CIMNote__c.Account__c}.
     */
    CIM_Notes__r: CIMNote__c[];
    /**
     * <h3><b>CimId</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    CimId__c: string;
    /**
     * <h3><b># of Clear Aligners per month</b></h3>
     * <p>Customer Profiling field used for SFE/Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ClearAlignersMonth__c: number;
    /**
     * <h3><b>Treatment Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bridge</code></td><td>Bridge</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Conservative dentistry</code></td><td>Conservative dentistry</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Crown</code></td><td>Crown</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Implants</code></td><td>Dental Implants</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Radiology</code></td><td>Dental Radiology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Denture</code></td><td>Denture</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Education Center</code></td><td>Education Center</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics</code></td><td>Endodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Esthetic</code></td><td>Esthetic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hotel</code></td><td>Hotel</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implant Restorations</code></td><td>Implant Restorations</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implant Surgery</code></td><td>Implant Surgery</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implantology</code></td><td>Implantology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">KOL</code></td><td>KOL</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lab</code></td><td>Lab</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oral Maxillofacial Surgery</code></td><td>Oral Maxillofacial Surgery</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oral Surgery</code></td><td>Oral Surgery</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics</code></td><td>Orthodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pediondontics/Pediatric Dentistry</code></td><td>Pediondontics/Pediatric Dentistry</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pedodontics</code></td><td>Pedodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Periodontics</code></td><td>Periodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive care</code></td><td>Preventive care</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive Care/ Prophylaxis</code></td><td>Preventive Care/ Prophylaxis</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthetics</code></td><td>Prosthetics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthodontics</code></td><td>Prosthodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Referral Clinic</code></td><td>Referral Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative</code></td><td>Restorative</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Test</code></td><td>Test</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Venue</code></td><td>Venue</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Veterinary</code></td><td>Veterinary</td><td nowrap>true</td></tr>
     * </table>
     */
    Clinic_Treatment_Focus__c: string;
    Clinical_Studies_Involvement_Area__pc: string;
    CombinedAttachments: CombinedAttachment[];
    Comminucation_By_Phone__pc: boolean;
    /**
     * The reciprocal relationship for {@link CommSubscriptionConsent.ConsentGiverId}.
     */
    CommSubscriptionConsents: CommSubscriptionConsent[];
    Communication_via_Email__pc: boolean;
    Communication_via_Sales_Reps_Visit__pc: boolean;
    /**
     * <h3><b>Company Type</b></h3>
     * <p>Type of Account (Dependent on Product Area)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bandagist</code></td><td>Bandagist</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Community Based Care & Service Org</code></td><td>Community Based Care &amp; Service Org</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cresco laboratory</code></td><td>Cresco laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Group Practice</code></td><td>Dental Group Practice</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Laboratory</code></td><td>Dental Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Single Practice</code></td><td>Dental Single Practice</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Specialist Clinic</code></td><td>Dental Specialist Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor</code></td><td>Distributor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Doctor's Practice</code></td><td>Doctor&#39;s Practice</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hospital</code></td><td>Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Insurer</code></td><td>Insurer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Municipality/country</code></td><td>Municipality/country</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Paediatric Hospital</code></td><td>Paediatric Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Patient Organization</code></td><td>Patient Organization</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pharmacy</code></td><td>Pharmacy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Practice Laboratory</code></td><td>Practice Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rehab Centre</code></td><td>Rehab Centre</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Reimbursement Body</code></td><td>Reimbursement Body</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Retailer</code></td><td>Retailer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Spinal Unit</code></td><td>Spinal Unit</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">University</code></td><td>University</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Wholesaler</code></td><td>Wholesaler</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Non Dental</code></td><td>Non Dental</td><td nowrap>true</td></tr>
     * </table>
     */
    Company_Type__c: string;
    /**
     * The reciprocal relationship for {@link Competitor__c.Competitor__c}.
     */
    Competitors1__r: Competitor__c[];
    /**
     * The reciprocal relationship for {@link Competitor__c.Account__c}.
     */
    Competitors__r: Competitor__c[];
    CompleteContact__pc: boolean;
    ConnectionReceived: PartnerNetworkConnection;
    ConnectionReceivedId: string;
    ConnectionSent: PartnerNetworkConnection;
    ConnectionSentId: string;
    Consent_to_store_data_obtained__pc: string;
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.ConsentGiverId}.
     */
    ConsentGiver: AuthorizationFormConsent;
    /**
     * <h3><b>Consignment Stock Customer</b></h3>
     * <p>If this is checked, the Customer has a Consignment Stock</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Consigment_Stock__c: boolean;
    /**
     * <h3><b>Consignment Stock Implant Balance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment_Stock__c.Account__c</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment_Stock__c.On_hand_Balance__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment_Stock__c.Product_Group_4_Code__c STARTS_WITH II11</code><br/>
     * </td></tr>
     * </table>
     */
    Consignment_Stock_Implant_Balance__c: number;
    /**
     * <h3><b>Consignment Stock Stock Abut&#39;s Balance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SUM</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment_Stock__c.Account__c</code></td></tr>
     * <tr><td nowrap><b>Summarized Field:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment_Stock__c.On_hand_Balance__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consignment_Stock__c.Product_Group_4_Code__c STARTS_WITH II12</code><br/>
     * </td></tr>
     * </table>
     */
    Consignment_Stock_Stock_Abut_s_Balance__c: number;
    /**
     * The reciprocal relationship for {@link AccountContactRelation.ContactId}.
     */
    Contact: AccountContactRelation;
    Contact_Assigned_Territories__pc: string;
    Contact_Card_link__pc: string;
    Contact_Consent_Date__pc: Date;
    Contact_Data_Quality_Score_D__pc: number;
    Contact_HQ__pc: number;
    /**
     * The reciprocal relationship for {@link Contact_Request__c.Account__c}.
     */
    Contact_Requests__r: Contact_Request__c[];
    contact_role_ORTHO__pc: string;
    Contact_s_Account_ID__pc: string;
    Contact_Status_icon__pc: string;
    Contact_Type__pc: string;
    /**
     * <h3><b>Contact Campaign ID List</b></h3>
     * <p>A comma-separated list of campaign IDs for all account contacts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(65535)</td></tr>
     * </table>
     */
    ContactCampaignIdList__c: string;
    ContactID18Digit__pc: string;
    /**
     * The reciprocal relationship for {@link ContactPointAddress.ParentId}.
     */
    ContactPointAddresses: ContactPointAddress[];
    /**
     * The reciprocal relationship for {@link ContactPointEmail.ParentId}.
     */
    ContactPointEmails: ContactPointEmail[];
    /**
     * The reciprocal relationship for {@link ContactPointPhone.ParentId}.
     */
    ContactPointPhones: ContactPointPhone[];
    /**
     * The reciprocal relationship for {@link ContactRequest.WhatId}.
     */
    ContactRequests: ContactRequest[];
    Contacts: Contact[];
    /**
     * The reciprocal relationship for {@link Contact.Distributor__c}.
     */
    Contacts4__r: Contact[];
    ContentDocumentLinks: ContentDocumentLink[];
    ContextRecord: FlowExecutionErrorEvent;
    /**
     * <h3><b>Continent</b></h3>
     * <p>Grouping Markets into Continent
     * US &amp; CA = North America
     * AU &amp; NZ &amp; JP = Asia/Pacific
     * Rest .... Europe</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE (Country__c, &quot;US&quot;, &quot;North America&quot;, &quot;CA&quot;, &quot;North America&quot;, &quot;AU&quot;, &quot;Asia/Pacific&quot;, &quot;NZ&quot; , &quot;Asia/Pacific&quot;, &quot;JP&quot;, &quot;Asia/Pacific&quot;, &quot;Europe&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Continent__c: string;
    Continent__pc: string;
    Contract_Line_Items__r: ContractLineItem[];
    /**
     * The reciprocal relationship for {@link Contract.AccountId}.
     */
    Contracts: Contract[];
    /**
     * The reciprocal relationship for {@link Contract.Contact__c}.
     */
    Contracts__r: Contract[];
    ConvertedAccount: Lead;
    ConvertedContact: Lead;
    /**
     * <h3><b>Copy Visiting to Billing Automatically</b></h3>
     * <p>Used in France to det</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    Copy_Visiting_to_Billing__c: boolean;
    /**
     * <h3><b>Corporation Name</b></h3>
     * <p>The group name of the account. Requested by and very important for Japan 2019-12-01</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(128)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CorporationName__c: string;
    Count__pc: number;
    /**
     * <h3><b>Country</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Country__c: string;
    Country__pc: string;
    /**
     * <h3><b>COVID Rebound Point of Contact</b></h3>
     * <p>Sales Representative that will take the lead in having the Rebound Initial Conversation with the Account, and will identify the Rebound Priorities for this account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    COVID_Rebound_Point_of_Contact__c: string;
    /**
     * <h3><b>COVID Rebound Point of Contact</b></h3>
     * <p>Sales Representative that will take the lead in having the Rebound Initial Conversation with the Account, and will identify the Rebound Priorities for this account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    COVID_Rebound_Point_of_Contact__r: User;
    /**
     * <h3><b>Create Account Plan</b></h3>
     * <p>Check this field to create an account plan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Create_Account_Plan__c: boolean;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    Credentials__pc: string;
    /**
     * <h3><b>Credit Limit 1</b></h3>
     * <p>Shows the Credit Limit 1. From the field OKCRLM in Movex.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Credit_Limit_1__c: number;
    /**
     * <h3><b>Credit Limit 2</b></h3>
     * <p>Only M3 integration
     * Shows Credit Limit 2. Comes from the field OKCRL2 in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Credit_Limit_2__c: number;
    /**
     * <h3><b>Credit Limit 3</b></h3>
     * <p>Only M3 integration
     * Shows Credit Limit 3. Comes from the field OKCRL3 in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Credit_Limit_3__c: number;
    /**
     * <h3><b>Overdue Days of Oldest Unpaid Invoice</b></h3>
     * <p>Credit Limit 4 = OKDUE in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Credit_Limit_4__c: number;
    /**
     * <h3><b>Credit Limit Type</b></h3>
     * <p>Values from AX
     * 0 – None
     * 1 – Balance
     * 2 – Balance &amp; Packing Slip
     * 3 – All
     * Show only to AX go-live countries : IT</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Credit_Limit_Type__c: string;
    /**
     * <h3><b>Cross-Sell Opportunity Exist?</b></h3>
     * <p>Used in relation with Implants Loss Type, to identify cross-sell opportunities beyond Implants, which could help wining back Implants business. If  Loss Type is added in combination with &quot;No&quot;, monthly CFEs &amp; GROW/KEEP AP&#39;s are not required.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>true</td></tr>
     * </table>
     */
    Cross_Sell_Opportunity_Exist__c: string;
    /**
     * <h3><b>CT Application Specialist</b></h3>
     * <p>This field is needed by Japan, to be able to look-up the respective users on Account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CT_Application_Specialist__c: string;
    /**
     * <h3><b>CT Application Specialist</b></h3>
     * <p>This field is needed by Japan, to be able to look-up the respective users on Account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CT_Application_Specialist__r: User;
    /**
     * <h3><b>Currency</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(CurrencyIsoCode , &quot;AUD&quot;, &quot;AUD&quot;, &quot;CAD&quot;, &quot;CAD&quot;, &quot;CHF&quot;,&quot;CHF&quot;, &quot;DKK&quot;,&quot;DKK&quot;, &quot;EUR&quot;,&quot;EUR&quot;, &quot;GBP&quot;,&quot;GBP&quot;, &quot;JPY&quot;,&quot;JPY&quot;, &quot;NOK&quot;,&quot;NOK&quot;, &quot;NZD&quot;,&quot;NZD&quot;, &quot;PLN&quot;,&quot;PLN&quot;, &quot;SEK&quot;,&quot;SEK&quot;, &quot;USD&quot;,&quot;USD&quot;, &quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Currency__c: string;
    CurrencyIsoCode: string;
    Current_Clinical_Studies_Ref__pc: string;
    /**
     * <h3><b>ETM2 Custom Owner (Generalist)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Custom_Owner_Generalist__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (Generalist)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Custom_Owner_Generalist__r: User;
    /**
     * <h3><b>ETM2 Custom Owner (Combined)</b></h3>
     * <p>Brings the username for the custom owners, used in the ETM criteria. To avoid using the users&#39; names. 18 digit id exceeded the formula compile size.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Custom_ETM2_Owner_Equipment__r.Username&amp;&quot;,&quot;&amp; Custom_ETM2_Custom_Owner_Generalist__r.Username&amp;&quot;,&quot;&amp; Custom_ETM2_Owner_IMPL__r.Username&amp;&quot;,&quot;&amp; Custom_ETM2_Owner_PREP__r.Username&amp;&quot;,&quot;&amp; Custom_ETM2_Owner_ORTH__r.Username&amp;&quot;,&quot;&amp; Custom_ETM2_Owner_LAB__r.Username&amp;&quot;,&quot;&amp; Custom_ETM2_Owner_SIMPLANT__r.Username&amp;&quot;,&quot;&amp; TEXT(Owner.Market__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_Combined__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (Equipment)</b></h3>
     * <p>IMPORTANT: THIS FIELD IS NOT INCLUDED in &quot;ETM2 Custom Owner (Combined)&quot; due to system limitations // Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_Equipment__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (Equipment)</b></h3>
     * <p>IMPORTANT: THIS FIELD IS NOT INCLUDED in &quot;ETM2 Custom Owner (Combined)&quot; due to system limitations // Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_Equipment__r: User;
    /**
     * <h3><b>ETM2 Custom Owner (IMPL)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_IMPL__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (IMPL)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_IMPL__r: User;
    /**
     * <h3><b>ETM2 Custom Owner (LAB)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_LAB__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (LAB)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_LAB__r: User;
    /**
     * <h3><b>ETM2 Custom Owner (ORTH)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_ORTH__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (ORTH)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_ORTH__r: User;
    /**
     * <h3><b>ETM2 Custom Owner (PREP)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_PREP__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (PREP)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_PREP__r: User;
    /**
     * <h3><b>ETM2 Custom Owner (SIMPLANT)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_SIMPLANT__c: string;
    /**
     * <h3><b>ETM2 Custom Owner (SIMPLANT)</b></h3>
     * <p>Adding user id here will override the territory rule and grant this user access.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Custom_ETM2_Owner_SIMPLANT__r: User;
    /**
     * <h3><b>Custom Segmentation (Implants)</b></h3>
     * <p>Custom segmentation to override the default logic :
     * 1- Segmentation N/A
     * 2- Educate
     * 3- Implants Starter
     * 4- Long Purchasing Cycle</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Educate</code></td><td>Educate</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants Starter</code></td><td>Implants Starter</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Long Purchasing Cycle >1 Year</code></td><td>Long Purchasing Cycle &gt;1 Year</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Segmentation N/A</code></td><td>Segmentation N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    Custom_Segmentation__c: string;
    /**
     * The reciprocal relationship for {@link CustomerAgreement__c.Account__c}.
     */
    Customer_Agreements__r: CustomerAgreement__c[];
    /**
     * <h3><b>Customer Blocked in ERP</b></h3>
     * <p>The field indicates whether customer order entry and printing of picking lists should be blocked for a customer with this associated payer.
     * 0 = No, do not block customer
     * 1 = Block partially. Picking lists may not be printed, but customer orders can be maintained and entered
     * 2 = Block picking lists and customer orders.
     * The check is done of the payer indicated in the order header. If no payer is indicated, the check will be done against the customer.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    Customer_Blocked_in_Movex__c: number;
    /**
     * <h3><b>Customer Group</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(40)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Group__c: string;
    /**
     * <h3><b>Customer Group Description</b></h3>
     * <p>Shows the explanation description of the Customr Group. Linked in Movex to the Customer Group field (which is a code)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Group_Description__c: string;
    /**
     * <h3><b>Customer Group Description (JP)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Direct</code></td><td>Direct</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other Dealer</code></td><td>Other Dealer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SASAKI</code></td><td>SASAKI</td><td nowrap>true</td></tr>
     * </table>
     */
    Customer_Group_Description_D_JP__c: string;
    /**
     * <h3><b>Customer Sub-Segment</b></h3>
     * <p>used manually in UK and France wants this integrated from AX. (Note that how it&#39;s used in UK and how France wants to use it might not be the same)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Customer_Sub_segment__c: string;
    CustomerAuthorizedBy: Order;
    /**
     * The reciprocal relationship for {@link Contract.CustomerSignedId}.
     */
    CustomerSigned: Contract;
    Customized_Course_ES__pc: boolean;
    /**
     * <h3><b>Custom Tier</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants Clinical - Tier 1</code></td><td>Implants Clinical - Tier 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants Clinical - Tier 2</code></td><td>Implants Clinical - Tier 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants Clinical - Tier 3</code></td><td>Implants Clinical - Tier 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants Clinical - Tier 4</code></td><td>Implants Clinical - Tier 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants Clinical - Tier 5</code></td><td>Implants Clinical - Tier 5</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants MIS - Tier 1</code></td><td>Implants MIS - Tier 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants MIS - Tier 2</code></td><td>Implants MIS - Tier 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants MIS - Tier 3</code></td><td>Implants MIS - Tier 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants MIS - Tier 4</code></td><td>Implants MIS - Tier 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants MIS - Tier 5</code></td><td>Implants MIS - Tier 5</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics - Tier 1</code></td><td>Endodontics - Tier 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics - Tier 2</code></td><td>Endodontics - Tier 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics - Tier 3</code></td><td>Endodontics - Tier 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics - Tier 4</code></td><td>Endodontics - Tier 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics - Tier 5</code></td><td>Endodontics - Tier 5</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics - Tier 1</code></td><td>Orthodontics - Tier 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics - Tier 2</code></td><td>Orthodontics - Tier 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics - Tier 3</code></td><td>Orthodontics - Tier 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics - Tier 4</code></td><td>Orthodontics - Tier 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics - Tier 5</code></td><td>Orthodontics - Tier 5</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS Lab - Tier 1</code></td><td>DS Lab - Tier 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS Lab - Tier 2</code></td><td>DS Lab - Tier 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS Lab - Tier 3</code></td><td>DS Lab - Tier 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS Lab - Tier 4</code></td><td>DS Lab - Tier 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS Lab - Tier 5</code></td><td>DS Lab - Tier 5</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative - Tier 1</code></td><td>Restorative - Tier 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative - Tier 2</code></td><td>Restorative - Tier 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative - Tier 3</code></td><td>Restorative - Tier 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative - Tier 4</code></td><td>Restorative - Tier 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative - Tier 5</code></td><td>Restorative - Tier 5</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive - Tier 1</code></td><td>Preventive - Tier 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive - Tier 2</code></td><td>Preventive - Tier 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive - Tier 3</code></td><td>Preventive - Tier 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive - Tier 4</code></td><td>Preventive - Tier 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive - Tier 5</code></td><td>Preventive - Tier 5</td><td nowrap>true</td></tr>
     * </table>
     */
    CustomTierLightning__c: string;
    CventEvents__AttendeeActivities__pr: CventEvents__AttendeeActivity__c[];
    CventEvents__Attendees__pr: CventEvents__Attendee__c[];
    CventEvents__ContactStub__pc: string;
    CventEvents__Nominations__pr: CventEvents__Nomination__c[];
    CventEvents__OpportunityConfigurations__pr: CventEvents__OpportunityConfiguration__c[];
    CventEvents__OpportunityConfigurations__r: CventEvents__OpportunityConfiguration__c[];
    CventEvents__Respondents__pr: CventEvents__Respondent__c[];
    CventId__pc: string;
    Data_Quality_Description__pc: string;
    Data_Quality_Score__pc: number;
    /**
     * <h3><b>ETM Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DC_ETM_Code__c: string;
    /**
     * The reciprocal relationship for {@link Opportunity.Dealer_s_Sales_Rep__c}.
     */
    Dealer_Opportunities__r: Opportunity[];
    Degree__pc: string;
    DelegatedAccounts: DelegatedAccount[];
    Deletion__pc: boolean;
    DeletionPrevention__pc: boolean;
    Dental_School_D_JP__pc: string;
    /**
     * <h3><b>Loyalty programs</b></h3>
     * <p>This field is used in JP to spot Accounts that are &quot;members&quot; and pay a membership fee. By doing that they could get discounts. This field is a multi-select field as more loyalty programs might be incuded in the future</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Our Member (ORTHO)</code></td><td>Our Member (ORTHO)</td><td nowrap>true</td></tr>
     * </table>
     */
    DentsplySirona_Member_Ortho__c: string;
    /**
     * <h3><b>DEPUniqueKey_CustomerMaster</b></h3>
     * <p>DEPUniqueKey_CustomerMaster</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DEPUniqueKey_CustomerMaster__c: string;
    Description: string;
    Description_Sirona__pc: string;
    DI_D4I__pc: boolean;
    /**
     * <h3><b>DI-Magazine (DE)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DI_Magazine_DE__c: number;
    /**
     * <h3><b># DI Scanners</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DI_Scanners__c: number;
    /**
     * <h3><b>Digital Rep</b></h3>
     * <p>Links the lab rep responsible to the account. Used for report purposes, by UK &amp; France.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Digital_Rep__c: string;
    /**
     * <h3><b>Digital Rep</b></h3>
     * <p>Links the lab rep responsible to the account. Used for report purposes, by UK &amp; France.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Digital_Rep__r: User;
    Direct_Dial__pc: string;
    /**
     * <h3><b>Direct Mailing?</b></h3>
     * <p>Requested by Japan as part of the Lightning project. used to keep track of Direct Mailings from marketing to Accounts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Require Confirmation</code></td><td>Require Confirmation</td><td nowrap>true</td></tr>
     * </table>
     */
    Direct_Mailing__c: string;
    /**
     * <h3><b>Discount Model</b></h3>
     * <p>Only for M3 Integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Discount_Model__c: string;
    /**
     * <h3><b>Discount Model Description</b></h3>
     * <p>M3 integration only
     * AX doesn&#39;t update this field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Discount_Model_Description__c: string;
    /**
     * The reciprocal relationship for {@link SBQQ__DiscountSchedule__c.SBQQ__Account__c}.
     */
    Discount_Schedules__r: SBQQ__DiscountSchedule__c[];
    Distributor__pc: string;
    Distributor__pr: Account;
    /**
     * <h3><b>Distributor Categories</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    DistributorCategories__c: string;
    /**
     * <h3><b>Dealer Not Allowed To Sell</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Extraoral Imaging</code></td><td>Extraoral Imaging</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Class II</code></td><td>Class II</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Consumables</code></td><td>Consumables</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Digital</code></td><td>Digital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Digital Group</code></td><td>Digital Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics</code></td><td>Endodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Equipment</code></td><td>Equipment</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Equipment & Imaging</code></td><td>Equipment &amp; Imaging</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants</code></td><td>Implants</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics</code></td><td>Orthodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthetics</code></td><td>Prosthetics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Root To Crown</code></td><td>Root To Crown</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Single Unit Crown</code></td><td>Single Unit Crown</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CAD/CAM</code></td><td>CAD/CAM</td><td nowrap>true</td></tr>
     * </table>
     */
    DistributorCategorisation__c: string;
    /**
     * The reciprocal relationship for {@link SBQQ__Quote__c.SBQQ__Distributor__c}.
     */
    DistributorQuotes__r: SBQQ__Quote__c[];
    /**
     * <h3><b>Do Not Call</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Do_Not_Call__c: boolean;
    /**
     * <h3><b>Do Not Fax</b></h3>
     * <p>If this field is checked, the Account has asked that it should not be communicated to via Fax</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Do_Not_Fax__c: boolean;
    Do_Not_Mail__pc: boolean;
    /**
     * <h3><b>Do Not Mail Account</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Do_Not_Mail_Account__c: boolean;
    /**
     * The reciprocal relationship for {@link DocumentEnvelope.ReferenceObjectId}.
     */
    DocEnvelopeRefObjects: DocumentEnvelope[];
    /**
     * <h3><b>Double Room Rate</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Double_Room__c: number;
    DScomUrlParam__pc: string;
    Dup_flow_info__pc: string;
    /**
     * <h3><b>Duplicate Check ID (HQ)</b></h3>
     * <p>This field should not be shown on any page layouts. It is used to track the master Account ID when performing duplicate checks.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(32)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Duplicate_Check_ID__c: string;
    Duplicate_Check_ID__pc: string;
    /**
     * <h3><b>Duplicate check Master? (HQ)</b></h3>
     * <p>This field should not be shown on any page layouts. It is used to track if this account is considered as Master when the merge is performed.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Duplicate_check_Master__c: number;
    Duplicate_check_Master__pc: number;
    Duplicate_Id__pc: string;
    /**
     * The reciprocal relationship for {@link DuplicateRecordItem.RecordId}.
     */
    DuplicateRecordItems: DuplicateRecordItem[];
    E_business_Contact__pc: boolean;
    e_commerce_id__pc: string;
    EAO_2015__pc: boolean;
    echosign_dev1__Agreements2__pr: echosign_dev1__SIGN_Agreement__c[];
    echosign_dev1__Agreements3__pr: echosign_dev1__SIGN_Agreement__c[];
    echosign_dev1__Agreements__pr: echosign_dev1__SIGN_Agreement__c[];
    echosign_dev1__Agreements__r: echosign_dev1__SIGN_Agreement__c[];
    echosign_dev1__Echosign_Recipients__pr: echosign_dev1__SIGN_Recipients__c[];
    echosign_dev1__Echosign_Recipients__r: echosign_dev1__SIGN_Recipients__c[];
    echosign_dev1__R00N70000001hM2OEAU__pr: echosign_dev1__SIGN_Agreement__c[];
    echosign_dev1__Recipient_Templates__pr: echosign_dev1__Recipient_Template__c[];
    Email_2_NA__pc: string;
    Email_Consent_collected__pc: string;
    Email_Consent_Date__pc: Date;
    Email_is_Populated__pc: number;
    Email_Last_Modified_By__pc: string;
    Email_Last_Modified_Date__pc: string;
    Email_Opt_In__pc: Date;
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    Emails: EmailMessage[];
    /**
     * The reciprocal relationship for {@link Emails__c.Contact__c}.
     */
    Emails__r: Emails__c[];
    /**
     * <h3><b>End Date of Active Contract</b></h3>
     * <p>The End date of the currently active contract. If the Customers doesn&#39;t have any purchasing contract this field should be blank</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    End_Date_of_Active_Contract__c: Date;
    /**
     * <h3><b># of Endo Cases referred out per month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    EndoReferralsMonth__c: number;
    /**
     * The reciprocal relationship for {@link MessagingSession.EndUserAccountId}.
     */
    EndUserAccount: MessagingSession;
    /**
     * The reciprocal relationship for {@link MessagingSession.EndUserContactId}.
     */
    EndUserContact: MessagingSession;
    EngagementInitiatingAttendee: EngagementInteraction[];
    EngagementRelatedPerson: EngagementTopic[];
    /**
     * The reciprocal relationship for {@link Entitlement.AccountId}.
     */
    Entitlements: Entitlement[];
    /**
     * The reciprocal relationship for {@link EquipmentBooking__c.Account__c}.
     */
    Equipment_Bookings__r: EquipmentBooking__c[];
    /**
     * <h3><b>ERP# (Ortho)</b></h3>
     * <p>Used in the Ortho implementation (approved by Michael)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Ortho__c: string;
    /**
     * <h3><b>ERP Reg Date</b></h3>
     * <p>AX registration date, M3 registration date will go to the filed &quot;Movex Reg&#39;s Date&quot;.
     * Show only for AX Go live countries : IT</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ERP_Reg_Date__c: Date;
    /**
     * <h3><b>Est ATL Growth CY &gt;5000€?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( (  Est_ATL_Growth_CY_EUR__c   &gt;5000), &quot;YES&quot;, &quot;NO&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_ATL_Growth_CY_5000__c: string;
    /**
     * <h3><b>Est Growth CY (ATL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( OR (ISBLANK(Est_ATL_Sales_CY__c), Est_ATL_Sales_CY__c =0), 0, Est_ATL_Sales_CY__c  -  TS_CY_1_D_DD_AllPCs_Atlantis__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_ATL_Growth_CY__c: number;
    /**
     * <h3><b>Est ATL Growth CY EUR</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISPICKVAL(CurrencyIsoCode, &quot;EUR&quot;), Est_Growth_CY_D__c , CASE( LEFT( Movex__c ,2), &quot;AU&quot; , (Est_ATL_Growth_CY__c*6.764074/9.095938), &quot;CA&quot; , (Est_ATL_Growth_CY__c*6.532850/9.095938), &quot;CH&quot; , (Est_ATL_Growth_CY__c*7.365051/9.095938), &quot;DK&quot; , (Est_ATL_Growth_CY__c*1.222179/9.095938), &quot;GB&quot; , (Est_ATL_Growth_CY__c*10.623158/9.095938), &quot;JP&quot; , (Est_ATL_Growth_CY__c*0.086185/9.095938), &quot;NO&quot;, (Est_ATL_Growth_CY__c*1.174793/9.095938), &quot;NZ&quot; , (Est_ATL_Growth_CY__c*6.7699/9.095938), &quot;PL&quot; , (Est_ATL_Growth_CY__c*2.056403/9.095938), &quot;SE&quot; , (Est_ATL_Growth_CY__c*1/9.095938), &quot;US&quot; , (Est_ATL_Growth_CY__c*6.672000/9.095938), 0)) &#47;&#42;NZD not updated since no budget rate exists 20120227&#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_ATL_Growth_CY_EUR__c: number;
    /**
     * <h3><b>Est Sales LY (ATL)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_ATL_Sales_2010__c: number;
    /**
     * <h3><b>Est Sales CY (ATL)</b></h3>
     * <p>Estimated total Dental ATLANTIS Sales for Account current year (CY).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_ATL_Sales_CY__c: number;
    /**
     * <h3><b>Est Growth CY &gt;5000 €?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ( Est_Growth_CY_D_EURO__c  &gt;5000), &quot;YES&quot;, &quot;NO&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Growth_CY_5000_Euro__c: string;
    /**
     * <h3><b>Est Growth CY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR (ISBLANK( Est_Sales_CY__c), Est_Sales_CY__c = 0), 0, Est_Sales_CY__c  -  TS_CY_1_D_AllPLs_AllPCs_AllBrands__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Growth_CY_D__c: number;
    /**
     * <h3><b>Est Growth CY EURO</b></h3>
     * <p>Calculated Est Growth CY to EURO using 2012 years budget rate.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISPICKVAL(CurrencyIsoCode, &quot;EUR&quot;), Est_Growth_CY_D__c , CASE( LEFT( Movex__c ,2), &quot;AU&quot; , (Est_Growth_CY_D__c*6.764074/9.095938), &quot;CA&quot; , (Est_Growth_CY_D__c*6.532850/9.095938), &quot;CH&quot; , (Est_Growth_CY_D__c*7.365051/9.095938), &quot;DK&quot; , (Est_Growth_CY_D__c*1.222179/9.095938), &quot;GB&quot; , (Est_Growth_CY_D__c*10.623158/9.095938), &quot;JP&quot; , (Est_Growth_CY_D__c*0.086185/9.095938), &quot;NO&quot;, (Est_Growth_CY_D__c*1.174793/9.095938), &quot;NZ&quot; , (Est_Growth_CY_D__c*6.7699/9.095938), &quot;PL&quot; , (Est_Growth_CY_D__c*2.056403/9.095938), &quot;SE&quot; , (Est_Growth_CY_D__c*1/9.095938), &quot;US&quot; , (Est_Growth_CY_D__c*6.672000/9.095938), 0)) &#47;&#42;NZD not updated since no budget rate exists 20120227&#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Growth_CY_D_EURO__c: number;
    /**
     * <h3><b>Est Growth CY EUR</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISPICKVAL(CurrencyIsoCode, &quot;EUR&quot;), Est_Growth_CY_D__c , CASE( LEFT( Movex__c ,2), &quot;AU&quot; , (Est_Growth_CY_D__c*6.764074/9.095938), &quot;CA&quot; , (Est_Growth_CY_D__c*6.532850/9.095938), &quot;CH&quot; , (Est_Growth_CY_D__c*7.365051/9.095938), &quot;DK&quot; , (Est_Growth_CY_D__c*1.222179/9.095938), &quot;GB&quot; , (Est_Growth_CY_D__c*10.623158/9.095938), &quot;JP&quot; , (Est_Growth_CY_D__c*0.086185/9.095938), &quot;NO&quot;, (Est_Growth_CY_D__c*1.174793/9.095938), &quot;NZ&quot; , (Est_Growth_CY_D__c*6.7699/9.095938), &quot;PL&quot; , (Est_Growth_CY_D__c*2.056403/9.095938), &quot;SE&quot; , (Est_Growth_CY_D__c*1/9.095938), &quot;US&quot; , (Est_Growth_CY_D__c*6.672000/9.095938), 0)) &#47;&#42;NZD not updated since no budget rate exists 20120227&#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Growth_CY_EUR__c: number;
    /**
     * <h3><b>Est Implant Growth CY &gt;20?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( (  Est_Implant_Growth_CY__c  &gt;20), &quot;YES&quot;, &quot;NO&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Implant_Growth_CY_20__c: string;
    /**
     * <h3><b>Est Implant Growth CY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Est_Implant_Volume_CY_D__c - TQ_CY_1_D_DI_Implants_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Implant_Growth_CY__c: number;
    /**
     * <h3><b>Est Implant Volume CY</b></h3>
     * <p>Used in Japan to conduct Forecast.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Implant_Volume_CY_D__c: number;
    /**
     * <h3><b>Est Implant Volume LY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Implant_Volume_LY_D__c: number;
    /**
     * <h3><b>Est Sales CY</b></h3>
     * <p>Used to define Est Sales CY in order to be able to do a Territory Forecast. Also used in the COS Pilot i US.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Sales_CY__c: number;
    /**
     * <h3><b>Est Sales LY</b></h3>
     * <p>Est Sales LY is a read only field with value copied from Est Sales CY in the end of each year</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Est_Sales_LY_D__c: number;
    /**
     * <h3><b>ETM2 Custom Address</b></h3>
     * <p>A new global field to replace old District/Territory picklist fields</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DK: Hovedstaden</code></td><td>DK: Hovedstaden</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DK: Midtjylland</code></td><td>DK: Midtjylland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DK: Nordjylland</code></td><td>DK: Nordjylland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DK: Sjælland</code></td><td>DK: Sjælland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DK: Syddanmark</code></td><td>DK: Syddanmark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Agra</code></td><td>IN: Agra</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Ahemdabad</code></td><td>IN: Ahemdabad</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Amritsar</code></td><td>IN: Amritsar</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Aurangabad</code></td><td>IN: Aurangabad</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Banaras</code></td><td>IN: Banaras</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bangalore I</code></td><td>IN: Bangalore I</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bangalore II</code></td><td>IN: Bangalore II</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bangalore III</code></td><td>IN: Bangalore III</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bangalore Institution</code></td><td>IN: Bangalore Institution</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bangalore IV</code></td><td>IN: Bangalore IV</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bangalore VDW</code></td><td>IN: Bangalore VDW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bhopal</code></td><td>IN: Bhopal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Bhuvneshwar</code></td><td>IN: Bhuvneshwar</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Calicut</code></td><td>IN: Calicut</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Central Kolkata</code></td><td>IN: Central Kolkata</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Central Mumbai I</code></td><td>IN: Central Mumbai I</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Central Mumbai II</code></td><td>IN: Central Mumbai II</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: CENTRAL MUMBAI III</code></td><td>IN: Central Mumbai III</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Chandigarh</code></td><td>IN: Chandigarh</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Chennai I</code></td><td>IN: Chennai I</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Chennai II</code></td><td>IN: Chennai II</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Chennai III</code></td><td>IN: Chennai III</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Chennai IV</code></td><td>IN: Chennai IV</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: CHENNAI V</code></td><td>IN: Chennai V</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Coimabutre</code></td><td>IN: Coimabutre</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: DelhiEquip</code></td><td>IN: DelhiEquip</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Delhi Institution</code></td><td>IN: Delhi Institution</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: DelhiLAB</code></td><td>IN: DelhiLAB</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: DELHI NCR</code></td><td>IN: DELHI NCR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: East Central Delhi</code></td><td>IN: East Central Delhi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: East Kolkata</code></td><td>IN: East Kolkata</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Emakulam</code></td><td>IN: Emakulam</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Gurgoan</code></td><td>IN: Gurgoan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Guwahati</code></td><td>IN: Guwahati</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Gwailor</code></td><td>IN: Gwailor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Hubli</code></td><td>IN: Hubli</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Hyderabad I</code></td><td>IN: Hyderabad I</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Hyderabad II</code></td><td>IN: Hyderabad II</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Hyderabad III</code></td><td>IN: Hyderabad III</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Hyderabad IV</code></td><td>IN: Hyderabad IV</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: HYDIMPLANT</code></td><td>IN: HYDIMPLANT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Indore</code></td><td>IN: Indore</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: IndoreLAB</code></td><td>IN: IndoreLAB</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Jaipur</code></td><td>IN: Jaipur</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: JaipurLAB</code></td><td>IN: JaipurLAB</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Jalandhar</code></td><td>IN: Jalandhar</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Jameshpur</code></td><td>IN: Jameshpur</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Jammu</code></td><td>IN: Jammu</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Jodhpur</code></td><td>IN: Jodhpur</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Karnataka</code></td><td>IN: Karnataka</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Kerala VDW</code></td><td>IN: Kerala VDW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Kohlapur</code></td><td>IN: Kohlapur</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: KolkataLAB</code></td><td>IN: KolkataLAB</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Kottayam</code></td><td>IN: Kottayam</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Lucknow</code></td><td>IN: Lucknow</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Ludhiana</code></td><td>IN: Ludhiana</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Madurai</code></td><td>IN: Madurai</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Maharastra</code></td><td>IN: Maharastra</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Malappuram</code></td><td>IN: Malappuram</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Mangalore</code></td><td>IN: Mangalore</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Mohali</code></td><td>IN: Mohali</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Mumbai</code></td><td>IN: Mumbai</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: MumbaiLAB</code></td><td>IN: MumbaiLAB</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Mumbai VDW</code></td><td>IN: Mumbai VDW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Muradabad</code></td><td>IN: Muradabad</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Nagpur</code></td><td>IN: Nagpur</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Nasik</code></td><td>IN: Nasik</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Navi Mumbai</code></td><td>IN: Navi Mumbai</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: New Delhi</code></td><td>IN: New Delhi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Noida</code></td><td>IN: Noida</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: North Delhi</code></td><td>IN: North Delhi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: North Kolkata</code></td><td>IN: North Kolkata</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Outer Delhi</code></td><td>IN: Outer Delhi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Panchkula</code></td><td>IN: Panchkula</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Patna</code></td><td>IN: Patna</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Pune I</code></td><td>IN: Pune I</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Pune II</code></td><td>IN: Pune II</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Pune III</code></td><td>IN: Pune III</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Punjab</code></td><td>IN: Punjab</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Raipur</code></td><td>IN: Raipur</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Rajkot</code></td><td>IN: Rajkot</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: South Delhi</code></td><td>IN: South Delhi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: South Kolkata</code></td><td>IN: South Kolkata</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: South Mumbai</code></td><td>IN: South Mumbai</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: South Mumbai I</code></td><td>IN: South Mumbai I</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Surat</code></td><td>IN: Surat</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Tamilnadu</code></td><td>IN: Tamilnadu</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Telangana</code></td><td>IN: Telangana</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Thane</code></td><td>IN: Thane</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: TRICHUR</code></td><td>IN: TRICHUR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Trivendrum</code></td><td>IN: Trivendrum</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Udaipur</code></td><td>IN: Udaipur</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: UP</code></td><td>IN: UP</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: UP VDW</code></td><td>IN: UP VDW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Uttranchal</code></td><td>IN: Uttranchal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Vadodara</code></td><td>IN: Vadodara</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Vanarasi</code></td><td>IN: Vanarasi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Vijayawada</code></td><td>IN: Vijayawada</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: Vizac</code></td><td>IN: Vizac</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: West Delhi</code></td><td>IN: West Delhi</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: West Delhi I</code></td><td>IN: West Delhi I</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IN: West Mumbai</code></td><td>IN: West Mumbai</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Akershus</code></td><td>NO: Akershus</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Aust-Agder</code></td><td>NO: Aust-Agder</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Buskerud</code></td><td>NO: Buskerud</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Finnmark</code></td><td>NO: Finnmark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hedmark</code></td><td>NO: Hedmark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hordaland</code></td><td>NO: Hordaland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Møre & Romsdal</code></td><td>NO: Møre &amp; Romsdal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nordland</code></td><td>NO: Nordland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord-Trøndelag</code></td><td>NO: Nord-Trøndelag</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oppland</code></td><td>NO: Oppland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oslo</code></td><td>NO: Oslo</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rogaland</code></td><td>NO: Rogaland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sogn & Fjordane</code></td><td>NO: Sogn &amp; Fjordane</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sør-Trøndelag</code></td><td>NO: Sør-Trøndelag</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Telemark</code></td><td>NO: Telemark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Troms</code></td><td>NO: Troms</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Vest-Agder</code></td><td>NO: Vest-Agder</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Vestfold</code></td><td>NO: Vestfold</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Østfold</code></td><td>NO: Østfold</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SA: Jeddah 1</code></td><td>SA: Jeddah 1 (Amer)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SA: Jeddah 2</code></td><td>SA: Jeddah 2 (Ehab A.)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SA: Jeddah 3</code></td><td>SA: Jeddah 3 (Sara)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Blekinge</code></td><td>SE: Blekinge</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dalarna</code></td><td>SE: Dalarna</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Gävleborg</code></td><td>SE: Gävleborg</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Gotland</code></td><td>SE: Gotland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Halland</code></td><td>SE: Halland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hela Sverige</code></td><td>SE: Hela Sverige</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Jämtland</code></td><td>SE: Jämtland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Jönköping</code></td><td>SE: Jönköping</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Kalmar</code></td><td>SE: Kalmar</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Kronoberg</code></td><td>SE: Kronoberg</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Norrbotten</code></td><td>SE: Norrbotten</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Örebro</code></td><td>SE: Örebro</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Östergötland</code></td><td>SE: Östergötland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Skåne</code></td><td>SE: Skåne</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Södermanland</code></td><td>SE: Södermanland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Stockholm</code></td><td>SE: Stockholm</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Uppsala</code></td><td>SE: Uppsala</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Värmland</code></td><td>SE: Värmland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Västerbotten</code></td><td>SE: Västerbotten</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Västernorrland</code></td><td>SE: Västernorrland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Västmanland</code></td><td>SE: Västmanland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Västra Götaland</code></td><td>SE: Västra Götaland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK/IE: Ireland 1</code></td><td>UK/IE: Ireland 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK/IE: Ireland 2</code></td><td>UK/IE: Ireland 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK/IE: Ireland 3</code></td><td>UK/IE: Ireland 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK/IE: Northern Ireland</code></td><td>UK/IE: Northern Ireland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">中四国</code></td><td>中四国</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">中部</code></td><td>中部</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">九州</code></td><td>九州</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">北海道</code></td><td>北海道</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">北関東</code></td><td>北関東</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">東京</code></td><td>東京</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">東北</code></td><td>東北</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">神奈川</code></td><td>神奈川</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">近畿</code></td><td>近畿</td><td nowrap>true</td></tr>
     * </table>
     */
    ETM2_Custom_Address__c: string;
    /**
     * <h3><b>ETM2 State&amp;City</b></h3>
     * <p>Don&#39;t add to layout used for Territory Management alignment</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( ISPICKVAL(Country__c, &quot;AD&quot;) , ISPICKVAL(Country__c, &quot;ES&quot;) , ISPICKVAL(Country__c, &quot;PT&quot;)), BLANKVALUE(ShippingState,BLANKVALUE(BillingState,PersonMailingState))&amp;&quot; &quot;&amp;BLANKVALUE(ShippingCity,BLANKVALUE(BillingCity,PersonMailingCity)), IF( ISPICKVAL(Country__c, &quot;JP&quot;) , BLANKVALUE(BillingState,BLANKVALUE(ShippingState,PersonMailingState))&amp;BLANKVALUE(BillingCity,BLANKVALUE(ShippingCity,PersonMailingCity)), BLANKVALUE(BillingState,BLANKVALUE(ShippingState,PersonMailingState))&amp;&quot; &quot;&amp;BLANKVALUE(BillingCity,BLANKVALUE(ShippingCity,PersonMailingCity))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ETM2_State_City__c: string;
    /**
     * <h3><b>ETM2 Street Address</b></h3>
     * <p>To bring the street addresses in one field, used for ETM2</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( ISPICKVAL(Country__c, &quot;AD&quot;) , ISPICKVAL(Country__c, &quot;ES&quot;) , ISPICKVAL(Country__c, &quot;PT&quot;)), BLANKVALUE(ShippingStreet , BLANKVALUE(BillingStreet , PersonMailingStreet)), BLANKVALUE(BillingStreet,BLANKVALUE(ShippingStreet,PersonMailingStreet)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ETM2_Street_Address__c: string;
    /**
     * <h3><b>ETM2 Zip Code</b></h3>
     * <p>To bring the zip codes in one field, used for ETM2,  MGS - Edited to take left 5 of Billing or Visiting Zip for USA - For US And CA ShippingPostalCode should be first due to this value being integrated from CIM. TFUS-000001508
     * Added french exception as per this request https://dentsplysirona.my.salesforce.com/5000J00001HEWEC?fId=0D50J00003nBohS
     * Added Iberia + DA to exceptions: TFUS-000002349 + TFUS-000002348
     * TFUS-000005020 : Removed the PersonMailingPostalCode as it&#39;s empty across all Account records and it&#39;s preventing us from indexing the ETM2_Zip_Code formula field.
     * Changed exception for the TFUS-000005242 for Iberia</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( ISPICKVAL(Country__c, &quot;AT&quot;) , ISPICKVAL(Country__c, &quot;CH&quot;) , ISPICKVAL(Country__c, &quot;DE&quot;) , ISPICKVAL(Country__c, &quot;FR&quot;)), Trim(BLANKVALUE(ShippingPostalCode,BillingPostalCode)), IF( ISPICKVAL(Country__c, &quot;CA&quot;) , Trim(BLANKVALUE(LEFT(ShippingPostalCode,3), LEFT(BillingPostalCode,3))), IF( ISPICKVAL(Country__c, &quot;US&quot;) , Trim(BLANKVALUE(LEFT(ShippingPostalCode,5), LEFT(BillingPostalCode,5))), Trim(BLANKVALUE(BillingPostalCode,ShippingPostalCode)))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ETM2_Zip_Code__c: string;
    /**
     * <h3><b>ETM2 ZipCode (Numeric)</b></h3>
     * <p>Same formula as ETM2 ZipCode but with a numeric representation. Works for Zip-code ranges</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISNUMBER(Trim(LEFT(BillingPostalCode,6))), VALUE(Trim(LEFT(BillingPostalCode,6))), IF(ISNUMBER(TRIM(LEFT(ShippingPostalCode,6))), VALUE(TRIM(LEFT(ShippingPostalCode,6))), IF(ISNUMBER(TRIM(LEFT(PersonMailingPostalCode,6))), VALUE(TRIM(LEFT(PersonMailingPostalCode,6))), null)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ETM2_ZipCode_Numeric__c: number;
    EventRelations: EventRelation[];
    Events: Event[];
    /**
     * <h3><b>Sold ATIS EV All</b></h3>
     * <p>NOTE: This field aggregates ALL sold ATIS EV products regardless of time, whereas the other EvLaunch_* fields aggregate only sold ATIS EV and ATIS TX Implants since the first ATIS EV tray sales date.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    EvLaunch_SoldAtisEvAll__c: number;
    /**
     * <h3><b>Sold ATIS EV Implants (EV Launch)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    EvLaunch_SoldAtisEvImplants__c: number;
    /**
     * <h3><b>Sold ATIS TX Implants (EV Launch)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    EvLaunch_SoldAtisImplants__c: number;
    Exhibition_CH__pc: string;
    /**
     * The reciprocal relationship for {@link Expense.AccountId}.
     */
    Expenses: Expense[];
    External_Identifier__pc: string;
    External_Identifier__pr: External_Identifier__c;
    ExternalAttendee: EngagementAttendeeChangeEvent;
    ExternalAttendees: EngagementAttendee[];
    Fax: string;
    /**
     * The reciprocal relationship for {@link Account.ParentId}.
     */
    Feeds: Account[];
    FeedSubscriptionsForEntity: EntitySubscription[];
    /**
     * The reciprocal relationship for {@link Field_Sales_Project_Members__c.Account__c}.
     */
    Field_Sales_Project_Members__r: Field_Sales_Project_Members__c[];
    /**
     * <h3><b>First Sales Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    First_Sales_Date__c: Date;
    /**
     * <h3><b>First Sales Date Before Movex</b></h3>
     * <p>Field to be set during initial Data Load of JP Accounts to acknowledge when Customer first bought from Astra Tech also before Movex. Also, used by DE.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    First_Sales_Date_Before_Movex_D_JP__c: Date;
    First_Year_of_Practive__pc: string;
    FirstName: string;
    FirstPublishLocation: ContentVersion;
    Flight_Requirement_Overseas__pc: string;
    FlowOrchestrationWorkItems: FlowOrchestrationWorkItem[];
    Follow_up_More_information__pc: string;
    /**
     * The reciprocal relationship for {@link Forecasting__c.Account__c}.
     */
    Forecasting__r: Forecasting__c[];
    Former_Employer__pc: string;
    /**
     * <h3><b>Free/Insurance Medical Care</b></h3>
     * <p>This is a field, requested from Japan - Needed to determine, if this clinic is mainly doing business for private or insuranced patients.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(2,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Free_Insurance_Medical_Care__c: number;
    From: EmailMessage;
    /**
     * The reciprocal relationship for {@link FulfillmentOrder.AccountId}.
     */
    FulfillmentOrders: FulfillmentOrder[];
    Full_Name__pc: string;
    /**
     * <h3><b>GDW Unique Key</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    GDWUniqueKey__c: string;
    /**
     * <h3><b>GDW Unique Key (Customer Master)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    GDWUniqueKey_CustomerMaster__c: string;
    Gender__pc: string;
    /**
     * <h3><b>General Info Email</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    General_Info_Email__c: string;
    /**
     * The reciprocal relationship for {@link GeneratedDocument.ReferenceObjectId}.
     */
    GeneratedDocRefObjects: GeneratedDocument[];
    GetFeedback_Aut__Answers__pr: GetFeedback_Aut__Answer__c[];
    GetFeedback_Aut__Responses__pr: GetFeedback_Aut__Response__c[];
    GetFeedback_Aut__Responses__r: GetFeedback_Aut__Response__c[];
    /**
     * The reciprocal relationship for {@link GTMJourney__c.Account__c}.
     */
    Go_To_Market_Journeys__r: GTMJourney__c[];
    Government_Practitioner_Type__pc: string;
    Graduation_year__pc: string;
    Greeting__pc: string;
    Greeting_Benelux__pc: string;
    Greeting_CH__pc: string;
    Greetings_DI_AT__pc: string;
    Health_Check__pc: Date;
    /**
     * <h3><b>Hidden</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Hidden__c: boolean;
    Histories: AccountHistory[];
    Honorarium_Comments__pc: string;
    HowCollected__pc: string;
    /**
     * <h3><b>Hyperion Customer Group</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(120)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Hyperion_Customer_Group__c: string;
    /**
     * <h3><b>I am Main Contact</b></h3>
     * <p>Dynamic Checkbox - checkbox ticked if logged in user is the main owner of the account. To allow reports and list views based on this.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( $User.Id ==  Main_DS_Contact__c , TRUE, FALSE)</code></td></tr>
     * </table>
     */
    IamMainContact__c: boolean;
    /**
     * <h3><b>Implant Brand Mix</b></h3>
     * <p>Pia Test</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LEFT( IF(TQ_CY_D_DI_Implants_Ankylos__c&gt;0,&quot;Ankylos, &quot;,&quot;&quot;) &amp; IF( TQ_CY_D_DI_Implants_AstraTech__c&gt;0,&quot;ATIS, &quot;,&quot;&quot;) &amp; IF(TQ_CY_D_DI_Implants_Xive__c &gt;0,&quot;XiVE, &quot;,&quot;&quot;) , LEN(IF(TQ_CY_D_DI_Implants_Ankylos__c&gt;0,&quot;Ankylos, &quot;,&quot;&quot;) &amp; IF( TQ_CY_D_DI_Implants_AstraTech__c&gt;0,&quot;ATIS, &quot;,&quot;&quot;) &amp; IF(TQ_CY_D_DI_Implants_Xive__c &gt;0,&quot;XiVE, &quot;,&quot;&quot;))-2 )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implant_Brand_Mix__c: string;
    /**
     * <h3><b># Approved Open Implant GROW AP/Opps</b></h3>
     * <p>Shows the number of OPEN Implant Grow APs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opportunity.AccountId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opportunity.Approved_by_Sales_Manager__c EQUALS Yes</code><br/>
     * <code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opportunity.RecordTypeId EQUALS Implant GROW &amp; KEEP AP</code><br/>
     * <code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opportunity.StageName EQUALS In Progress</code><br/>
     * </td></tr>
     * </table>
     */
    Implant_GROW_AP_Opps__c: number;
    /**
     * The reciprocal relationship for {@link Implant_Rescue_Service__c.Account__c}.
     */
    Implant_Rescue_Services__r: Implant_Rescue_Service__c[];
    /**
     * <h3><b>Implant Won/Loss Code CY</b></h3>
     * <p>Used in Reports/Dashboards to calculate the new won customers</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_Implants_EndField__c, &quot;WON&quot;, IF (Year( LastWonEventYearMonth_Implants__c)=YEAR(TODAY()),1,0), &quot;REWON&quot;, IF (Year( LastWonEventYearMonth_Implants__c )=YEAR(TODAY()),1,0), &quot;LOST&quot;, IF(YEAR( Lost_date_D__c )=YEAR(TODAY()),-1,0), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implant_Won_Loss_Code_CY__c: number;
    /**
     * <h3><b>Implant Won/Lost Code LY</b></h3>
     * <p>This field adds a &quot;1&quot; if the customer has its Won customer date Last Year, and a &quot;-1&quot; if the customer has a Lost customer date Last Year. Otherwhise this field is null</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_Implants_EndField__c, &quot;WON&quot;,  IF (Year( LastWonEventYearMonth_Implants__c)=YEAR(TODAY())-1,1,0), &quot;REWON&quot;, IF (Year( LastWonEventYearMonth_Implants__c )=YEAR(TODAY())-1,1,0), &quot;LOST&quot;, IF(YEAR( Lost_date_D__c  )=YEAR(TODAY())-1,-1,0), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implant_WonLost_Code_LY__c: number;
    /**
     * <h3><b>Implants KPI &quot;+30&quot; ACC</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ISPICKVAL(Status__c, &quot;20&quot;) &amp;&amp; ( MAX(Sold_Implants_L12M__c, TQ_CY_1_D_DI_Implants_AllBrands__c ) &gt;= 30 || ( Account_Strategy_Implants__c = &quot;GROW&quot; &amp;&amp; ISPICKVAL(Volume_Implants__c, &quot;High Usage&quot;) ) ) &amp;&amp; BLANKVALUE(Open_Account_Plan_Relations__c, 0) = 0 &amp;&amp; NOT( ISPICKVAL(Loss_Type_D__c, &quot;Surgeon retired/Left the clinic&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Solvency Issues - Product supply stopped&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Low ROI - Customer focus stopped&quot;) ) &amp;&amp; NOT ( ( ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost due to product complaints&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost on price to other Premium Brand&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost on price to Low Cost Brand&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost to competition&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Starter – chose another system after trialing DI&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Mature implantologist – trialed DI, but did not continue&quot;)|| ISPICKVAL(Loss_Type_D__c, &quot;Administrative Reason&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Other&quot;) ) &amp;&amp; ISPICKVAL(Cross_Sell_Opportunity_Exist__c, &quot;No&quot;) ) &#47;&#42; Old version, changed 13.7.2016 by Lisa IF (  ISPICKVAL( Status__c,&quot;20&quot;) &amp;&amp; NOT(ISPICKVAL( Loss_Type_D__c , &quot;Surgeon retired/Left the clinic&quot;)) &amp;&amp; NOT(ISPICKVAL( Loss_Type_D__c , &quot;Solvency Issues - Product supply stopped&quot;))  &amp;&amp; NOT(ISPICKVAL( Loss_Type_D__c , &quot;Low ROI - Customer focus stopped&quot;) )  &amp;&amp; BLANKVALUE(Open_Account_Plan_Relations__c, 0)=0   &amp;&amp; ( ( MAX(Sold_Implants_L12M__c, TQ_CY_1_D_DI_Implants_AllBrands_RUS_OLD__c )  &gt;=   30 &amp;&amp; MAX(Sold_Implants_L12M__c, TQ_CY_1_D_DI_Implants_AllBrands_RUS_OLD__c )  &gt;=   30 ) ) &amp;&amp; ( TEXT(Loss_Type_D__c)= &quot;&quot;|| ( ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost due to product complaints&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost on price to other Premium Brand&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost on price to Low Cost Brand&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost to competition&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Starter – chose another system after trialing DI&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Mature implantologist – trialed DI, but did not continue&quot;)|| ISPICKVAL( Loss_Type_D__c , &quot;Administrative Reason&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Other&quot;) &amp;&amp; TEXT(Cross_Sell_Opportunity_Exist__c) &lt;&gt; &quot;No&quot;)) , TRUE, FALSE ) &#42;&#47;</code></td></tr>
     * </table>
     */
    Implants_KPI_30_ACC__c: boolean;
    /**
     * <h3><b>Implants KPI +50/High Volume Grow ACC</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ISPICKVAL(Status__c, &quot;20&quot;) &amp;&amp; ( MAX(Sold_Implants_L12M__c, TQ_CY_1_D_DI_Implants_AllBrands__c ) &gt;= 50 || ( Account_Strategy_Implants__c = &quot;GROW&quot; &amp;&amp; ISPICKVAL(Volume_Implants__c, &quot;High Usage&quot;) ) ) &amp;&amp; BLANKVALUE(Open_Account_Plan_Relations__c, 0) = 0 &amp;&amp; NOT( ISPICKVAL(Loss_Type_D__c, &quot;Surgeon retired/Left the clinic&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Solvency Issues - Product supply stopped&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Low ROI - Customer focus stopped&quot;) ) &amp;&amp; NOT ( ( ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost due to product complaints&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost on price to other Premium Brand&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost on price to Low Cost Brand&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Former steady DI user – lost to competition&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Starter – chose another system after trialing DI&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Mature implantologist – trialed DI, but did not continue&quot;)|| ISPICKVAL(Loss_Type_D__c, &quot;Administrative Reason&quot;) || ISPICKVAL(Loss_Type_D__c, &quot;Other&quot;) ) &amp;&amp; ISPICKVAL(Cross_Sell_Opportunity_Exist__c, &quot;No&quot;) ) &#47;&#42; OLD Formulas IF (  ISPICKVAL( Status__c,&quot;20&quot;) &amp;&amp; NOT(ISPICKVAL( Loss_Type_D__c , &quot;Surgeon retired/Left the clinic&quot;)) &amp;&amp; NOT(ISPICKVAL( Loss_Type_D__c , &quot;Solvency Issues - Product supply stopped&quot;))  &amp;&amp; NOT(ISPICKVAL( Loss_Type_D__c , &quot;Low ROI - Customer focus stopped&quot;) )  &amp;&amp; BLANKVALUE(Open_Account_Plan_Relations__c, 0)=0   &amp;&amp; ( MAX(Sold_Implants_L12M__c, TQ_CY_1_D_DI_Implants_AllBrands_RUS__c )  &gt;=   50  || ( ISPICKVAL(Volume_Implants__c, &quot;High Usage&quot;) &amp;&amp; Account_Strategy_Implants__c = &quot;GROW&quot; ) ) &amp;&amp; ( TEXT(Loss_Type_D__c)= &quot;&quot;|| ( ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost due to product complaints&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost on price to other Premium Brand&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost on price to Low Cost Brand&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost to competition&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Starter – chose another system after trialing DI&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Mature implantologist – trialed DI, but did not continue&quot;)|| ISPICKVAL( Loss_Type_D__c , &quot;Administrative Reason&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Other&quot;) &amp;&amp; TEXT(Cross_Sell_Opportunity_Exist__c) &lt;&gt; &quot;No&quot;)) , TRUE, FALSE ) &#47;&#42; IF ( BLANKVALUE(Open_Account_Plan_Relations__c, 0)&gt;0 || NOT(ISPICKVAL( Status__c,&quot;20&quot;)) || ISPICKVAL( Loss_Type_D__c , &quot;Surgeon retired/Left the clinic&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Solvency Issues - Product supply stopped&quot;)  || ISPICKVAL( Loss_Type_D__c , &quot;Low ROI - Customer focus stopped&quot;)  || ( MAX(Sold_Implants_L12M__c, TQ_CY_1_D_DI_Implants_AllBrands_RUS__c )  &lt;  50  &amp;&amp; ( NOT(ISPICKVAL(Volume_Implants__c, &quot;High Usage&quot;))  || Account_Strategy_Implants__c &lt;&gt; &quot;GROW&quot; ) ) &amp;&amp; ( ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost due to product complaints&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost on price to other Premium Brand&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost on price to Low Cost Brand&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Former steady DI user – lost to competition&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Starter – chose another system after trialing DI&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Mature implantologist – trialed DI, but did not continue&quot;)|| ISPICKVAL( Loss_Type_D__c , &quot;Administrative Reason&quot;) || ISPICKVAL( Loss_Type_D__c , &quot;Other&quot;) &amp;&amp; TEXT(Cross_Sell_Opportunity_Exist__c) &lt;&gt; &quot;Yes&quot; ) , FALSE, TRUE ) &#42;&#47;</code></td></tr>
     * </table>
     */
    Implants_KPI_50High_Volume_Grow_ACC__c: boolean;
    Implants_Management_Notes__pc: string;
    /**
     * <h3><b>Implants Potential / Year</b></h3>
     * <p>Part of Implants Segmentation . The maximum number of implants that account might purchase from DI and other competitors within 12-months period (Year).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    Implants_Potential_Year__c: number;
    /**
     * <h3><b>Implants Potential / Year Modified By</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(45)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implants_Potential_Year_Last_Changed__c: string;
    /**
     * <h3><b>Implants Potential / Year Last Modified</b></h3>
     * <p>Updated by a Workflow</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Implants_Potential_Year_Last_Updated__c: string;
    /**
     * <h3><b>Important Note</b></h3>
     * <p>&quot;Don&#39;t use this new section for the new Implants segmentation unless you have received directions from the National Administrator in your country&quot;</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">&quot;Don&#39;t use this new section for the new Implants segmentation unless you have received directions from the National Administrator in your country&quot;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Important_Note__c: string;
    Inactive__pc: boolean;
    inactive_dedupe_HQ__pc: string;
    Industry: string;
    Industry_Sector__pc: string;
    Initials__pc: string;
    InitiatingAttendee: EngagementInteractionChangeEvent;
    /**
     * The reciprocal relationship for {@link Field_Sales_Project_Members__c.Contact__c}.
     */
    Initiative_Accounts__r: Field_Sales_Project_Members__c[];
    InsertEmailMarketingConsentCollected__pc: string;
    /**
     * <h3><b>Insurance Code (FR)</b></h3>
     * <p>Used by France to report on Mutual Insurances</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(36)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Insurance_Code_FR__c: string;
    Interested_in_Cerec__pc: boolean;
    Interested_in_Imaging__pc: boolean;
    Interested_in_Treatment_Centres__pc: boolean;
    Internal_Contact__pc: boolean;
    /**
     * The reciprocal relationship for {@link Internal_Orders__c.Account__c}.
     */
    InternalOrders__r: Internal_Orders__c[];
    International_Speaker__pc: boolean;
    /**
     * <h3><b>Invoice Account #</b></h3>
     * <p>Field Invoice Receiver from Movex.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Invoice_Movex__c: string;
    IsCustomerPortal: boolean;
    IsDeleted: boolean;
    IsExcludedFromRealign: boolean;
    /**
     * <h3><b>is Main DS Contact my Direct Report ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Main_DS_Contact__c = $User.ManagerId</code></td></tr>
     * </table>
     */
    isMainDScontactmydirectreport__c: boolean;
    IsMaster__pc: number;
    IsPartner: boolean;
    IsPersonAccount: boolean;
    /**
     * <h3><b>ISUS Connection Potential / Year</b></h3>
     * <p>Number of potential ISUS connection based on the yearly forecasting multiplied by 3 (The average number of implant connection)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ATL_ISUS_Potential_Year__c * 3</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ISUS_Connection_potential_Year__c: number;
    /**
     * <h3><b>is Zuora Customer?</b></h3>
     * <p>Roll-up summary field showing if an account has Zuora source records.
     * Used in page layout UI comonent filters to show DS Core information only for accounts that have a Zuora Account also.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Source_Record__c.CIM_Account__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Source_Record__c.Company_Code__c EQUALS ZUORA</code><br/>
     * </td></tr>
     * </table>
     */
    isZuoraCustomer__c: number;
    Jigsaw: string;
    JigsawCompany: SObject;
    JigsawCompanyId: string;
    /**
     * <h3><b>Key Account</b></h3>
     * <p>Identify important Accounts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Key_Account__c: boolean;
    /**
     * <h3><b>Key Account Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Big Fish GET</code></td><td>Big Fish GET</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Rest/Atlantis GET</code></td><td>Rest/Atlantis GET</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Surgical GET</code></td><td>Surgical GET</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Surgical GROW</code></td><td>Surgical GROW</td><td nowrap>true</td></tr>
     * </table>
     */
    Key_Account_Type__c: string;
    Key_Opinion_Leader_D_JP__pc: boolean;
    /**
     * The reciprocal relationship for {@link KOL_Contract__c.Account__c}.
     */
    KOL_Contracts__r: KOL_Contract__c[];
    /**
     * The reciprocal relationship for {@link Expert__c.Contact__c}.
     */
    KOL_information__r: Expert__c[];
    KOL_UK_IE__pc: boolean;
    /**
     * <h3><b>KOL Account</b></h3>
     * <p>Used to track the accounts that has KOLs associated.
     * Used in sharing rules to provide access to all KOLs globally for Clinical Affairs users.
     * Manually ticked at this time by CRM team</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    KOLAccount__c: boolean;
    KOLs__pc: number;
    Last_CSat__pc: number;
    Last_Csat_Value__pc: string;
    Last_Modified_User_Name__pc: string;
    Last_NPS__pc: number;
    Last_Qualtrics_Survey_Date__pc: Date;
    Last_Survey_Update__pc: Date;
    LastActivityDate: Date;
    /**
     * <h3><b>LastLostEvent YearMonth Abutments</b></h3>
     * <p>Set by Apex to the year/month when the last LostEvent occurred on the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastLostEventYearMonth_Abutments__c: Date;
    /**
     * <h3><b>LastLostEvent YearMonth Implants</b></h3>
     * <p>Set by Apex to the year/month when the last LostEvent occurred on the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastLostEventYearMonth_Implants__c: Date;
    /**
     * <h3><b>ATL Suprast Lost Date</b></h3>
     * <p>Set by Apex to the year/month when the last LostEvent occurred on the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastLostEventYearMonth_ISUS__c: Date;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    LastName: string;
    /**
     * <h3><b>LastNullEvent YearMonth Abutments</b></h3>
     * <p>Set by Apex to the year/month when the last NullEvent occurred on the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastNullEventYearMonth_Abutments__c: Date;
    /**
     * <h3><b>LastNullEvent YearMonth Implants</b></h3>
     * <p>Set by Apex to the year/month when the last NullEvent occurred on the Account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastNullEventYearMonth_Implants__c: Date;
    /**
     * <h3><b>LastNullEventYearMonth_ISUS</b></h3>
     * <p>Used in ISUS Win/Lost kogic</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastNullEventYearMonth_ISUS__c: Date;
    LastReferencedDate: string;
    LastSurveySentDate__pc: Date;
    LastViewedDate: string;
    /**
     * <h3><b>ATL Abut Won Date</b></h3>
     * <p>Set by Apex to the year/month when the last WonEvent occurred on the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastWonEventYearMonth_Abutments__c: Date;
    /**
     * <h3><b>LastWonEvent YearMonth Abutments Brands</b></h3>
     * <p>Set by Apex to a string containing the brands for which the last WonEvent occurred on the Account. Example: &quot;Ankylos;AstraTech;Xive&quot;</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastWonEventYearMonth_Abutments_Brands__c: string;
    /**
     * <h3><b>Implants Won Date</b></h3>
     * <p>Set by Apex to the year/month when the last WonEvent occurred on the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastWonEventYearMonth_Implants__c: Date;
    /**
     * <h3><b>Implants When Won</b></h3>
     * <p>Set by Apex to a string containing the brands for which the last WonEvent occurred on the Account. Example: &quot;Ankylos;AstraTech;Xive&quot;</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastWonEventYearMonth_Implants_Brands__c: string;
    /**
     * <h3><b>ATL Suprast Won Date</b></h3>
     * <p>Set by Apex to the year/month when the last WonEvent occurred on the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastWonEventYearMonth_ISUS__c: Date;
    /**
     * <h3><b>LastWonEventYearMonth_ISUS_Brands</b></h3>
     * <p>This field is created just to maintaine the Apex code,  so we might have no other practical use for it.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(30)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastWonEventYearMonth_ISUS_Brands__c: string;
    Launch_Qual__pc: boolean;
    LeadOrContact: CampaignMember;
    /**
     * <h3><b>Legacy System Id (IMPLANTS)</b></h3>
     * <p>This field shows the legacy Customer number if the Customer was migrated from  legacy ERP to new ERP
     * Friadent number if the customer migrated to Movex
     * Movex number if the customer migrated to AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(32)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Legacy_ERP_Customer_Number__c: string;
    Legacy_ID__pc: string;
    /**
     * <h3><b>Legacy System Id&#39;s (Others)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Legacy_System_Id_Others__c: string;
    LinkedEntity: ContentDocumentLinkChangeEvent;
    /**
     * <h3><b>Links</b></h3>
     * <p>TFUS-000003510 and TFUS-000003878 and TFUS-000005265 and TFUS-000005880</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&quot;https://app.powerbi.com/groups/me/apps/63f4e415-d7c5-4b87-8b38-644f8ac14d4a/reports/ed4941c6-c0ef-42f1-9cd7-e1591e9e7f18/ReportSection3ccf715137ad62d618a9?filter=Accounts%2FSfAccountId%20eq%20%27&quot;+OneSF_Id__c+&quot;%27&quot;, &quot;Healthy Practice Indicator&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Links__c: string;
    Links__pc: string;
    /**
     * The reciprocal relationship for {@link LiveChatTranscript.AccountId}.
     */
    LiveChatTranscripts: LiveChatTranscript[];
    Local_Speaker__pc: boolean;
    LocalRecord: PartnerNetworkRecordConnection;
    /**
     * <h3><b>Implants Loss Type</b></h3>
     * <p>Use this field to state the &quot;Loss Type&quot; of this Customer. If not considered a &quot;lost&quot; customer, instead only replaced by another Movex #, please select &quot;Administrative Reason&quot;. This will from Mars -10 also be set already in Movex by CS.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">-------</code></td><td>-------</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Administrative Reason</code></td><td>Administrative Reason</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Existing DI user with long purchasing cycle</code></td><td>Existing DI user with long purchasing cycle</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Former steady DI user – lost due to product complaints</code></td><td>Former steady DI user – lost due to product complaints</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Former steady DI user – lost on price to Low Cost Brand</code></td><td>Former steady DI user – lost on price to Low Cost Brand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Former steady DI user – lost on price to other Premium Brand</code></td><td>Former steady DI user – lost on price to other Premium Brand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Former steady DI user – lost to competition</code></td><td>Former steady DI user – lost to competition</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lost Atlantis Lab</code></td><td>Lost Atlantis Lab</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low ROI - Customer focus stopped</code></td><td>Low ROI - Customer focus stopped</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mature implantologist – trialed DI, but did not continue</code></td><td>Mature implantologist – trialed DI, but did not continue</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Solvency Issues - Product supply stopped</code></td><td>Solvency Issues - Product supply stopped</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Starter – chose another system after trialing DI</code></td><td>Starter – chose another system after trialing DI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Surgeon retired/Left the clinic</code></td><td>Surgeon retired/Left the clinic</td><td nowrap>true</td></tr>
     * </table>
     */
    Loss_Type_D__c: string;
    /**
     * <h3><b>ATL Abut Lost Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LastLostEventYearMonth_Abutments__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Lost_Atlantis_Customer_Date__c: Date;
    /**
     * <h3><b>Implants Lost Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LastLostEventYearMonth_Implants__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Lost_date_D__c: Date;
    /**
     * <h3><b>Lost Implant Period</b></h3>
     * <p>Shows the period when the Account was lost (IMPLANTS), The period is L12M, L13-24M or &quot;Older than 24 Months&quot;. if the field is blank, the Account is not yet lost.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISBLANK( Lost_date_D__c ) , null, IF(  TODAY()- Lost_date_D__c &lt; 365, &quot;L12M&quot;, IF(TODAY()- Lost_date_D__c  &gt;=  365  &amp;&amp; TODAY()- Lost_date_D__c  &lt; 730 , &quot;L13-24M&quot;, &quot;Older than 24 Months&quot;) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Lost_Implant_Period__c: string;
    /**
     * <h3><b>Share of Potential (ATL Abut)</b></h3>
     * <p>Automatically calculated.
     * Loyalty = (Sold ATL Abut in the last 365 days / ATL Abut Potential / Year )
     * Not Applicable (N/A) when the Movex status 90 .</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( OR(ATL_Abut_Potential_Year__c &lt;= 0, ISBLANK(ATL_ISUS_Potential_Year__c),ISPICKVAL(Status__c,&quot;90&quot;)),&quot;N/A&quot;, IF ( (TQ_CY_D_DD_Abuts_Atlantis__c + (TQ_CY_1_D_DD_Abuts_Atlantis__c - TQ_CY_1_TD_D_DD_Abuts_Atlantis__c))/ ATL_Abut_Potential_Year__c &gt;= 0.75, &quot;&gt;75%&quot;, IF ( AND((TQ_CY_D_DD_Abuts_Atlantis__c + (TQ_CY_1_D_DD_Abuts_Atlantis__c - TQ_CY_1_TD_D_DD_Abuts_Atlantis__c))/ ATL_Abut_Potential_Year__c &lt; 0.75, (TQ_CY_D_DD_Abuts_Atlantis__c + (TQ_CY_1_D_DD_Abuts_Atlantis__c - TQ_CY_1_TD_D_DD_Abuts_Atlantis__c))/ ATL_Abut_Potential_Year__c &gt; 0), &quot;&lt;75%&quot;, &quot;0%&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Loyalty_ATL_Abut__c: string;
    /**
     * <h3><b>Share of Potential (ATL Suprast)</b></h3>
     * <p>Automatically calculated.
     * Loyalty =  (Sold ATL ISUS in the last 365 days   /   ATL ISUS Potential / Year )</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( OR(ATL_ISUS_Potential_Year__c &lt;= 0, ISBLANK(ATL_ISUS_Potential_Year__c),ISPICKVAL(Status__c,&quot;90&quot;)),&quot;N/A&quot;, IF ( (TQ_CY_D_DD_IsusProsth_Isus__c + (TQ_CY_1_D_DD_IsusProsth_Isus__c - TQ_CY_1_TD_D_DD_IsusProsth_Isus__c))/ ATL_ISUS_Potential_Year__c &gt;= 0.75, &quot;&gt;75%&quot;, IF ( AND((TQ_CY_D_DD_IsusProsth_Isus__c + (TQ_CY_1_D_DD_IsusProsth_Isus__c - TQ_CY_1_TD_D_DD_IsusProsth_Isus__c))/ ATL_ISUS_Potential_Year__c &lt; 0.75, (TQ_CY_D_DD_IsusProsth_Isus__c + (TQ_CY_1_D_DD_IsusProsth_Isus__c - TQ_CY_1_TD_D_DD_IsusProsth_Isus__c))/ ATL_ISUS_Potential_Year__c &gt; 0), &quot;&lt;75%&quot;, &quot;0%&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Loyalty_ATL_ISUS__c: string;
    /**
     * <h3><b>Share Of Potential (Implants Basic)</b></h3>
     * <p>Loyalty selected manually, not part of the new Implants segmentation, but used mainly for Russia or countries with no Movex integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;"><25%</code></td><td>&lt;25%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">>75%</code></td><td>&gt;75%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0%</code></td><td>0%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">25% to 75%</code></td><td>25% to 75%</td><td nowrap>true</td></tr>
     * </table>
     */
    Loyalty_Implants_Basic__c: string;
    /**
     * <h3><b>Share of Potential Implants Text (HQ)</b></h3>
     * <p>This is a help field for the Implants Segmentation logic, don&#39;t add to layouts or use in reports</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( Implants_Potential_Year__c &lt;= 0 || IsBlank(Implants_Potential_Year__c),0, Case (Custom_Segmentation__c,&quot;Long Purchasing Cycle &gt;1 Year&quot;,( ((TQ_CY_1_D_DI_Implants_AllBrands__c - TQ_CY_1_TD_D_DI_Implants_AllBrands__c) + TQ_CY_D_DI_Implants_AllBrands__c) + ((TQ_CY_2_D_DI_Implants_AllBrands__c - TQ_CY_2_TD_D_DI_Implants_AllBrands__c) + TQ_CY_1_TD_D_DI_Implants_AllBrands__c))/ (Implants_Potential_Year__c *2),((TQ_CY_1_D_DI_Implants_AllBrands__c - TQ_CY_1_TD_D_DI_Implants_AllBrands__c) + TQ_CY_D_DI_Implants_AllBrands__c)/ Implants_Potential_Year__c))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Loyalty_Implants_Text__c: number;
    /**
     * <h3><b>Loyalty (SP Guides)</b></h3>
     * <p>Hidden field to be used in the Strategy logic, this will makeSimplant strategy consistent with other strategy logic but the Loyalty is defined automatically based on Sold Guides in the last 365 days</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (  SP_Guides_Potential_Year__c  &lt;= 0,Null, IF ( (TQ_CY_D_DD_Guides_Simplant__c + (TQ_CY_1_D_DD_Guides_Simplant__c - TQ_CY_1_TD_D_DD_Guides_Simplant__c))/ SP_Guides_Potential_Year__c &gt;= 0.75, &quot;&gt;75%&quot;, IF ( AND((TQ_CY_D_DD_Guides_Simplant__c + (TQ_CY_1_D_DD_Guides_Simplant__c - TQ_CY_1_TD_D_DD_Guides_Simplant__c))/ SP_Guides_Potential_Year__c &lt; 0.75, (TQ_CY_D_DD_Guides_Simplant__c + (TQ_CY_1_D_DD_Guides_Simplant__c - TQ_CY_1_TD_D_DD_Guides_Simplant__c))/ SP_Guides_Potential_Year__c &gt; 0), &quot;&lt;75%&quot;, &quot;0%&quot;)))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Loyalty_SP_Guides__c: string;
    /**
     * The reciprocal relationship for {@link LoyaltyProgramParticipant__c.Account__c}.
     */
    LoyaltyProgramParticipants__r: LoyaltyProgramParticipant__c[];
    Mail_to__pc: boolean;
    Mailing_Address_Other_Address__pc: boolean;
    /**
     * <h3><b>Main Competitor</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Main_Competitor_D__c: string;
    /**
     * <h3><b>Main Competitor</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Main_Competitor_D__r: Account;
    /**
     * <h3><b>Main Competitor (Text)</b></h3>
     * <p>Used as a &quot;help field&quot; in order to be able to set the Account Tags field to a combiationof Specialty, Main Competitor (look-up to Competitor (D) Record Type) and Account Strategy. takes the value in &quot;Main Competitor (D)&quot; and inputs the value as text into this field to be able to use it in a Workflow/Field Update.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Main_Competitor_D__r.Name</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Main_Competitor_D_Text__c: string;
    Main_Contact__pc: boolean;
    /**
     * <h3><b>Main DS Contact (Sales Rep)</b></h3>
     * <p>Used to set who is main responsible for the customer from DentsplySirona</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Main_DS_Contact__c: string;
    /**
     * <h3><b>Main DS Contact (Sales Rep)</b></h3>
     * <p>Used to set who is main responsible for the customer from DentsplySirona</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Main_DS_Contact__r: User;
    /**
     * <h3><b>Main DS Contact (Sales Rep) Team</b></h3>
     * <p>he USA Sales Team will begin to use the &quot;MAIN DS CONTACT&quot; on the Account such that the team can use prescriptive selling metrics and track KPIs regarding those metrics.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(Main_DS_Contact__r.Team__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MainDSContactTeam__c: string;
    /**
     * The reciprocal relationship for {@link MaintenancePlan.AccountId}.
     */
    MaintenancePlans: MaintenancePlan[];
    Majored_in_D_JP__pc: string;
    /**
     * The reciprocal relationship for {@link DelegatedAccount.TargetId}.
     */
    ManagedAccount: DelegatedAccount[];
    maps__AccountAutoAssignmentLogs__r: maps__DebugLog__c[];
    maps__AdvRouteVisitWindows__pr: maps__AdvRouteVisitWindows__c[];
    maps__AdvRouteVisitWindows__r: maps__AdvRouteVisitWindows__c[];
    maps__AdvRouteWaypoints__pr: maps__AdvRouteWaypoint__c[];
    maps__AdvRouteWaypoints__r: maps__AdvRouteWaypoint__c[];
    /**
     * <h3><b>Maps Assignment Rule</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AssignmentRule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AssignmentRule__c: string;
    /**
     * <h3><b>Maps Assignment Rule</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link maps__AssignmentRule__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    maps__AssignmentRule__r: maps__AssignmentRule__c;
    maps__LiveEventAssociations__pr: maps__LiveEventAssociation__c[];
    maps__LiveEventAssociations__r: maps__LiveEventAssociation__c[];
    maps__Maps_Waypoints__pr: maps__Waypoint__c[];
    maps__Maps_Waypoints__r: maps__Waypoint__c[];
    /**
     * <h3><b>Marked for Training</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Marked_for_Training__c: boolean;
    /**
     * <h3><b>Market</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AT</code></td><td>AT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AU</code></td><td>AU</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BeNeLux</code></td><td>BeNeLux</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BEX</code></td><td>BEX</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CEE</code></td><td>CEE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CH</code></td><td>CH</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CN</code></td><td>CN</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DACH (Ortho)</code></td><td>DACH (Ortho)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE</code></td><td>DE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DEX</code></td><td>DEX</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ES</code></td><td>ES</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FI</code></td><td>FI</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FR</code></td><td>FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HQ</code></td><td>HQ</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT</code></td><td>IT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">JP</code></td><td>JP</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MEA</code></td><td>MEA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NA</code></td><td>NA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nordics</code></td><td>Nordics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PL</code></td><td>PL</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">RU</code></td><td>RU</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SY</code></td><td>SY</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TR</code></td><td>TR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TW</code></td><td>TW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK</code></td><td>UK</td><td nowrap>true</td></tr>
     * </table>
     */
    Market__c: string;
    Market__pc: string;
    /**
     * The reciprocal relationship for {@link Master_Data_Management__c.Non_Master_Account__c}.
     */
    Master_Data_Management1__r: Master_Data_Management__c[];
    /**
     * The reciprocal relationship for {@link Master_Data_Management__c.Master_Customer_Name__c}.
     */
    Master_Data_Management__r: Master_Data_Management__c[];
    MasterContactID__pc: string;
    MasterID__pc: string;
    MasterRecord: Account;
    MasterRecordId: string;
    /**
     * <h3><b>Legacy System Id (Materialise)</b></h3>
     * <p>This SoftAdmin ID. In Movex it&#39;s called PIN-Code, it can&#39;t be Unique, because in SoftAdmin they don&#39;t give different ID&#39;s for Accounts with different sites, also we have some accounts with status 90 and another one with 20</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    MD_ERP_Legacy_ID__c: string;
    MDMStatus__pc: string;
    /**
     * The reciprocal relationship for {@link MessagingEndUser.AccountId}.
     */
    MessagingEndUsers: MessagingEndUser[];
    /**
     * The reciprocal relationship for {@link MessagingSession.EndUserAccountId}.
     */
    MessagingSessions: MessagingSession[];
    Middle_Name__pc: string;
    Mobile_2__pc: string;
    /**
     * <h3><b>Monthly Lab Spendings</b></h3>
     * <p>Amount of money that a clinic spends on Lab Services per month</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Monthly_Lab_Spendings__c: number;
    More_Information__pc: string;
    /**
     * <h3><b>ERP Number (Current)</b></h3>
     * <p>The current ERP number, AX or M3</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    Movex__c: string;
    Movex__pc: string;
    Movex_Contact__pc: string;
    /**
     * <h3><b>ERP District Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_District_Code__c: string;
    /**
     * <h3><b>ERP District Name</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_District_Name__c: string;
    /**
     * <h3><b>ERP District Name (Long)</b></h3>
     * <p>Used by AX integration to populate the district name</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_District_Name_Long__c: string;
    /**
     * <h3><b>ERP Email</b></h3>
     * <p>Email Address as stated on Customer in ERP.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Email</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Email__c: string;
    /**
     * <h3><b>ERP# - Name</b></h3>
     * <p>Concatenation of Movex - Name like &quot;US12345 - Black Dental Lab&quot;. To be used in reports, should not appear in any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&quot;/&quot; &amp; Id , IF( ISBLANK(Movex__c) , Name, Movex__c  &amp; &quot; - &quot; &amp;  Name),&quot;_self&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Name__c: string;
    /**
     * <h3><b>ERP Product Area (HQ)</b></h3>
     * <p>The value in the Product Area field in Movex (OKHAFE), or CHAIN from AX</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(6)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Product_Area_OKHAFE__c: string;
    /**
     * <h3><b>Movex# Reference</b></h3>
     * <p>The Referenced Movex#. This field is linked to Movex# Reference Reason, to track which account is replacing which.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Reference__c: string;
    /**
     * <h3><b>Movex# Reference Reason</b></h3>
     * <p>States if this customer is replacing/is a replacement of an old Movex#.
     * If 0= Customer is replacing an old customer. This means this is not a &quot;truly NEW&quot; customer.
     * If 1 =  This customer is being replaced. This means this is not a &quot;truly LOST customer&quot;
     * In Movex the field can also have 9 - default - but this is filtered in the integration to show up as &quot;null&quot; in SFDC.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(1,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Reference_Reason__c: number;
    /**
     * <h3><b>Movex Reg&#39;n Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Registration_Date__c: Date;
    /**
     * <h3><b>ERP User ID</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(25)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_SalesmanID__c: string;
    /**
     * <h3><b>ERP Status Icon</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(Status__c, &quot;Active&quot;,IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mqun&quot;, &quot;&quot;,20, 20), &quot;Inactive&quot;,IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mkdN&quot;, &quot;&quot; ,20, 20), &quot;Duplicate&quot;,IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mkdN&quot;, &quot;&quot; ,20, 20), &quot;20&quot;,IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mqun&quot;, &quot;&quot;,20, 20), &quot;10&quot;, IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mkdN&quot;, &quot;&quot; ,20, 20), &quot;11&quot;, IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mkdN&quot;, &quot;&quot; ,20, 20), &quot;90&quot;, IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000mkdN&quot;, &quot;&quot; ,20, 20), &quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Movex_Status_indicator__c: string;
    MSP_Participant__pc: boolean;
    /**
     * <h3><b>My Account?</b></h3>
     * <p>This formula field checks if the Account owner equals the current user and provides the values &quot;True&quot; or &quot;False&quot;. This field is created to cater for specific limitations in reports and views regarding &quot;My Accounts&quot;. Should not appear in any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OwnerId  =  $User.Id , &quot;True&quot;, &quot;False&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    My_Account__c: string;
    My_Contact__pc: boolean;
    /**
     * <h3><b>My Territories Account?</b></h3>
     * <p>This formula field checks if the Account is assigned to the territory of the user who is currently looking at the report and provides the values &quot;True&quot; or &quot;False&quot;. This field is created to cater for specific limitations in reports and views regarding &quot;My Accounts&quot; in ETM context. Should not appear in any page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( CONTAINS(TerritoryUsers__c, $User.Movex_Uer_ID__c ),&quot;True&quot;,&quot;False&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    My_Territories_Account__c: string;
    /**
     * <h3><b>NA: Account Specialty</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor</code></td><td>Distributor</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DSO</code></td><td>DSO</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontist</code></td><td>Endodontist</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General Practice</code></td><td>General Practice</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General Practice - Restores and Interested in Surgically Placing</code></td><td>General Practice - Restores and Interested in Surgically Placing</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General Practice - Restores Only</code></td><td>General Practice - Restores Only</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General Practice - Surgically Places and Restores</code></td><td>General Practice - Surgically Places and Restores</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GOV – Indian Affairs</code></td><td>GOV – Indian Affairs</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GOV – Other Government</code></td><td>GOV – Other Government</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GOV – Prisons</code></td><td>GOV – Prisons</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GOV – Veterans Administration</code></td><td>GOV – Veterans Administration</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hospital Account</code></td><td>Hospital Account</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Internal Sales Rep</code></td><td>Internal Sales Rep</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lab</code></td><td>Lab</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Multi-Specialty Group Account</code></td><td>Multi-Specialty Group Account</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oral/Maxillofacial Surgery</code></td><td>Oral/Maxillofacial Surgery</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Periodontics</code></td><td>Periodontics</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthodontics</code></td><td>Prosthodontics</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">University</code></td><td>University</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    NA_Account_Specialty__c: string;
    /**
     * <h3><b>NA Lab  Gain or Loss Reason</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Market</code></td><td>Market</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OEM 3i / Cad-Cam</code></td><td>OEM 3i / Cad-Cam</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OEM Cad-Cam</code></td><td>OEM Cad-Cam</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OEM Nobel / Cad-Cam</code></td><td>OEM Nobel / Cad-Cam</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OEM screw retained / Ti-base</code></td><td>OEM screw retained / Ti-base</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OEM Stock / custom cast</code></td><td>OEM Stock / custom cast</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OEM Straumann / Cad-Cam</code></td><td>OEM Straumann / Cad-Cam</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OEM Zimmer / Cad-Cam</code></td><td>OEM Zimmer / Cad-Cam</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Third party CMC</code></td><td>Third party CMC</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Third party Generic</code></td><td>Third party Generic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Third party Glidewell</code></td><td>Third party Glidewell</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Third party screw retained / Ti-base</code></td><td>Third party screw retained / Ti-base</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Third party stock / custom cast</code></td><td>Third party stock / custom cast</td><td nowrap>true</td></tr>
     * </table>
     */
    NA_Lab_Gain_Loss_Reason__c: string;
    NA_MKTG_Address_Line_1__pc: string;
    NA_MKTG_Address_Line_2__pc: string;
    NA_MKTG_Address_Line_3__pc: string;
    NA_MKTG_City__pc: string;
    NA_MKTG_Country__pc: string;
    NA_MKTG_Do_Not_Mail__pc: boolean;
    NA_MKTG_State_Province__pc: string;
    NA_MKTG_Zip_Postal_Code__pc: string;
    NA_NorthWest_Focus__pc: boolean;
    NA_reGET_Blitz__pc: boolean;
    NA_State_License_Number__pc: string;
    NA_State_Licensure__pc: string;
    Name: string;
    NameLocal: string;
    National_Speaker__pc: boolean;
    /**
     * The reciprocal relationship for {@link Contact_Network_Member__c.Contact_Network_Member__c}.
     */
    Network_Contact_Members__r: Contact_Network_Member__c[];
    /**
     * The reciprocal relationship for {@link Network__c.CEO__c}.
     */
    Networks1__r: Network__c[];
    /**
     * The reciprocal relationship for {@link Network__c.CFO__c}.
     */
    Networks2__r: Network__c[];
    /**
     * The reciprocal relationship for {@link Network__c.Clinic_Director__c}.
     */
    Networks3__r: Network__c[];
    /**
     * The reciprocal relationship for {@link Network__c.Purchasing_Manager__c}.
     */
    Networks4__r: Network__c[];
    /**
     * The reciprocal relationship for {@link Network__c.Hub_Account__c}.
     */
    Networks__r: Network__c[];
    Notes: Note[];
    NotesAndAttachments: NoteAndAttachment[];
    /**
     * <h3><b># of Abutments per month</b></h3>
     * <p>Track # of CAD CAM Abutments per month - (Manually entered)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NrOfAbutments__c: number;
    /**
     * <h3><b># of CAD CAM abutments</b></h3>
     * <p>Track # of CAD CAM Abutments per month - (Manually entered)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NrOfCADCAMabutments__c: number;
    NumberOfEmployees: number;
    ObjectTerritory2Associations: ObjectTerritory2Association[];
    ObjectUserTerritory2Views: ObjectUserTerritory2View[];
    /**
     * <h3><b># of BUYDS Accounts</b></h3>
     * <p>Roll-up summary field from Source Records, showing the number of BUY DS (the new Digital Transformation e-commerce) an account has.
     * Used to identify which accounts that has a Buy DS account setup and can use the new e-comemrce. Combined with a text box during launches to highlight even more in Lightning</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Source_Record__c.CIM_Account__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Source_Record__c.Company_Code__c CONTAINS BUYDS</code><br/>
     * </td></tr>
     * </table>
     */
    of_BUYDS_Accounts__c: number;
    /**
     * <h3><b># of Cad/Cam blocks per month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_cad_cam_blocks_per_month__c: number;
    /**
     * <h3><b># of CBCTs taken per month</b></h3>
     * <p>Number to determine how many CBCT (Cone-beam computed tomography, Xray cases) are taken per month</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_CBCTs_month__c: number;
    /**
     * <h3><b># of Dental Hygienists</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Dental_Hygienists__c: number;
    /**
     * <h3><b># of Dental Professionals</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Dental_Professionals__c: number;
    /**
     * <h3><b># of Dental Students/Year</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Dental_Students_Year__c: number;
    /**
     * <h3><b># of Technicians</b></h3>
     * <p>Requested by Asia (Benny) for Clinics, added also for Labs. Japan wanted to remove from ERP Account Page layout but decision for now to keep it for all.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Dental_Technicians__c: number;
    /**
     * <h3><b># of Dentists</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Dentists__c: number;
    /**
     * <h3><b># of Denturists</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Denturists__c: number;
    /**
     * <h3><b># of Endo Cases per month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Endo_Cases__c: number;
    /**
     * <h3><b># of Implants placed per month</b></h3>
     * <p>Note the API name is not in line with label due to label change.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Implant_Procedures__c: number;
    /**
     * <h3><b># of Implants Referred out per month</b></h3>
     * <p>Used to profile the customer with how many  referral procedure for Implants the clinic generates per month</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Implants_Referrals_month__c: number;
    /**
     * <h3><b># of Lab cases per month</b></h3>
     * <p>This field is used to record the number of lab cases. It can be used differently from country to country. In Japan, it will be used for their SFE efforts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Lab_cases_month__c: number;
    /**
     * <h3><b># of open Opportunities</b></h3>
     * <p>Summarize the number of open opportunities for the account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opportunity.AccountId</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opportunity.IsClosed EQUALS False</code><br/>
     * </td></tr>
     * </table>
     */
    of_open_Opportunities__c: number;
    /**
     * <h3><b># of Other Staffs</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Other__c: number;
    /**
     * <h3><b># of Preventive Patients per month</b></h3>
     * <p>Indicates the number of preventive (hygiene) patients that the practices sees per month</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(5,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Preventive_PatientsMonth__c: number;
    /**
     * <h3><b># of Prophylaxis Chairs</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Prophylaxis_Chairs__c: number;
    /**
     * <h3><b># of Restorative Cases per month</b></h3>
     * <p>Used to profile the Customer and understand the size of the clinic and the amount of restoration they do</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Restorative_Cases_month__c: number;
    /**
     * <h3><b># of Treatment Chairs</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_treatment_Chairs__c: number;
    /**
     * <h3><b># of Metal crowns/month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OfMetalCrownsMonth__c: number;
    /**
     * <h3><b># of Metal free crowns/month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OfMetalFreeCrownsMonth__c: number;
    /**
     * <h3><b># of Premium implants placed/month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OfPremiumImplantsPlacedMonth__c: number;
    /**
     * <h3><b># of Value implants placed/month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OfValueImplantsPlacedMonth__c: number;
    /**
     * <h3><b>Account Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Competitor</code></td><td>Competitor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Country</code></td><td>Country</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dealer Sell Out Data Region</code></td><td>Dealer Sell Out Data Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Clinic</code></td><td>Dental Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Laboratory</code></td><td>Dental Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Support Organization</code></td><td>Dental Support Organization</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DENTSPLY</code></td><td>DENTSPLY</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor</code></td><td>Distributor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DNA Distributor</code></td><td>DNA Distributor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Education</code></td><td>Education</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">End User</code></td><td>End User</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Events</code></td><td>Events</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">First letters of Zip/Postal Code</code></td><td>First letters of Zip/Postal Code</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General Practice</code></td><td>General Practice</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Geographical</code></td><td>Geographical</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Government</code></td><td>Government</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hospital</code></td><td>Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Insurance Care Center</code></td><td>Insurance Care Center</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Internal</code></td><td>Internal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lab within a Clinic</code></td><td>Lab within a Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medical</code></td><td>Medical</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Non Dental</code></td><td>Non Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Partner</code></td><td>Partner</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Patient</code></td><td>Patient</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Purchasing Group</code></td><td>Purchasing Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Region</code></td><td>Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Specialty</code></td><td>Specialty</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Student</code></td><td>Student</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">University</code></td><td>University</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Unknown/Other</code></td><td>Unknown/Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Wholesaler</code></td><td>Wholesaler</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Zip/Postal Code</code></td><td>Zip/Postal Code</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Multi_Dentist_Clinic</code></td><td>Multi_Dentist_Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Non-Dental</code></td><td>Non-Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Single_Dentist_Clinic</code></td><td>Single_Dentist_Clinic</td><td nowrap>true</td></tr>
     * </table>
     */
    OneAccount_Type__c: string;
    /**
     * <h3><b>OneSF Id</b></h3>
     * <p>This will be the main id to map accounts in SFDC with different integrations.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Auto Number</td></tr>
     * <tr><td nowrap><b>Display Format:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SF{0000000}</code></td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    OneSF_Id__c: string;
    OneSF_Id__pc: string;
    /**
     * <h3><b>Open Account Plan Relations</b></h3>
     * <p>Shows the number of open (in progress) Account Plan Relations for the account. Used to know which accounts to exclude from monthly CFEs and GROW/KEEP APs. This field is updated every hour by a cloud job.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Open_Account_Plan_Relations__c: number;
    /**
     * <h3><b># Approved Open Implant GET APs</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opportunity.AccountId</code></td></tr>
     * </table>
     */
    Open_Implant_GET_AP_Opps__c: number;
    /**
     * <h3><b>Open Invoices</b></h3>
     * <p>Sum of open amounts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(13,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Open_Invoices__c: number;
    /**
     * The reciprocal relationship for {@link OpenOrderLine__c.Account__c}.
     */
    Open_Order_Lines__r: OpenOrderLine__c[];
    OpenActivities: OpenActivity[];
    /**
     * <h3><b>Opening Times</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(280)</td></tr>
     * </table>
     */
    Opening_Times__c: string;
    OperatingHours: OperatingHours;
    OperatingHoursId: string;
    /**
     * The reciprocal relationship for {@link Opportunity.AccountId}.
     */
    Opportunities: Opportunity[];
    /**
     * The reciprocal relationship for {@link Opportunity.Dealer_Sales_Rep_secondary__c}.
     */
    Opportunities1__r: Opportunity[];
    /**
     * The reciprocal relationship for {@link Opportunity.Dealer__c}.
     */
    Opportunities__r: Opportunity[];
    /**
     * The reciprocal relationship for {@link OpportunityLineItem.Installed_by_external__c}.
     */
    Opportunity_Product__r: OpportunityLineItem[];
    OpportunityPartnersTo: OpportunityPartner[];
    /**
     * The reciprocal relationship for {@link Sales_Quarter__c.Account__c}.
     */
    Oral_Agreements__r: Sales_Quarter__c[];
    /**
     * The reciprocal relationship for {@link OrderItem.Account_for_Sample_in_AX__c}.
     */
    Order_Products__r: OrderItem[];
    /**
     * <h3><b>Order Value Not Invoiced</b></h3>
     * <p>Integrated from field OKTBLG in Movex</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Order_value_not_invoiced__c: number;
    Orders: Order[];
    /**
     * The reciprocal relationship for {@link Order.Distributor_contact__c}.
     */
    Orders1__r: Order[];
    /**
     * The reciprocal relationship for {@link Order.Contact__c}.
     */
    Orders__r: Order[];
    /**
     * <h3><b># of Orders CY w/o this month</b></h3>
     * <p>Number of unique order numbers during the current calendar year not including current month</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OrdersCY__c: number;
    /**
     * <h3><b># of Orders LM</b></h3>
     * <p>Number of unique order numbers during the previous calendar month.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OrdersLM__c: number;
    /**
     * <h3><b>Organisation Number</b></h3>
     * <p>AX Integration : populate org number
     * M3 Integration: populate CORG - Used in Sweden for Organisation Number</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(32)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Organisation_Number__c: string;
    /**
     * <h3><b>Ortho Case Starts perX year</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(10,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Ortho_Case_Starts_Year__c: number;
    /**
     * <h3><b># of Ortho case starts per month</b></h3>
     * <p>There is a duplicate field for this Ortho case Starts per year - that field is in use by US/CA but intention is to have US/CA move to this field in 2020 and the other one be deleted.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OrthoCaseStartsMonth__c: number;
    /**
     * The reciprocal relationship for {@link Other_Accounts_part_of_the_Account_Plan__c.Account_Part_of_the_Account_Plan__c}.
     */
    Other_Accounts_part_of_the_Account_Plan__r: Other_Accounts_part_of_the_Account_Plan__c[];
    /**
     * <h3><b>Other Phone</b></h3>
     * <p>Secondary phone used in France, mainly to be integrated with CTI</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Phone</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Other_Phone__c: string;
    /**
     * The reciprocal relationship for {@link Obligation.OtherPartyAccountId}.
     */
    OtherPartyAccount: Obligation;
    /**
     * <h3><b>Outstanding Invoice Amount</b></h3>
     * <p>The oustanding inovice amount.
     * For M3 markets: Taken from the field OKTOIN.
     * For AX markets: Calculated in the GDW and available only on the main Account (Payer) Includes all SBU&#39;s invoices</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Outstanding_Invoice_Amount__c: number;
    /**
     * <h3><b>Outstanding Invoice Amount IF Payer (JP)</b></h3>
     * <p>If this Account is Payer for one or several other Movex #, this field shows the total outstanding invoice Amount for all Accounts for which this Account is the Payer.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Outstanding_Invoice_Amount_Payer_D_JP__c: number;
    /**
     * <h3><b>Overdue Invoice Amount</b></h3>
     * <p>The oustanding inovice amount.
     * For M3 markets: Taken from the field OKTDIN.
     * For AX markets: Calculated in the GDW and available only on the main Account (Payer) Includes all SBU&#39;s invoices</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Overdue_Invoice_Amount__c: number;
    /**
     * <h3><b>Override ATL Abut Potential</b></h3>
     * <p>Override the ATL Abut potential in case the actual sold Abut in the last 12 months exceeded the potential</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (Sold_Atlantis_Abut_s_L12M__c &gt; IF (ISBLANK(ATL_Abut_Potential_Year__c),0,ATL_Abut_Potential_Year__c),&quot;True&quot;,&quot;False&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Override_ATL_Abut_Potential__c: string;
    /**
     * <h3><b>Override ATL Suprast Potential</b></h3>
     * <p>Override the ATL ISUS potential in case the actual sold ISUS in the last 12 months exceeded the potential</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (Sold_ATL_ISUS_L12M__c &gt; IF (ISBLANK(ATL_ISUS_Potential_Year__c),0,ATL_ISUS_Potential_Year__c),&quot;True&quot;,&quot;False&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Override_ATL_ISUS_Potential__c: string;
    /**
     * <h3><b>Override Simplant Potential</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (Sold_Guides_L12M__c = 0 || Sold_Guides_L12M__c =Null, &quot;False&quot;, IF (Sold_Guides_L12M__c &gt;= IF (ISBLANK(SP_Guides_Potential_Year__c),0,SP_Guides_Potential_Year__c),&quot;True&quot;,&quot;False&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Override_Simplant_Potential__c: string;
    /**
     * <h3><b>Overwrite Implants Potential Text (HQ)</b></h3>
     * <p>This is a help field for the Implants Segmentation logic, (Trigger a workflow) don&#39;t add to layouts or use in reports</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case (Custom_Segmentation__c,&quot;Long Purchasing Cycle &gt;1 Year&quot;,IF ( round((Sold_Implants_L12M__c + Sold_Implants_L13_24M__c)/2,0) &gt; IF (ISBLANK(Implants_Potential_Year__c),0,Implants_Potential_Year__c),&quot;True&quot;,&quot;False&quot;), IF (Sold_Implants_L12M__c &gt; IF (ISBLANK(Implants_Potential_Year__c),0,Implants_Potential_Year__c),&quot;True&quot;,&quot;False&quot;))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Overwrite_Implants_Potential__c: string;
    /**
     * <h3><b>Overwritten Implants Potential</b></h3>
     * <p>If Sold Implants L12M &gt; Implants Potential / Year, then   the system will overwrite current potential with the Sold Implants L12M value. And this checkbox will be ticked to mark this customer for review. Only on Customers layout.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISPICKval(Status__c,&quot;20&quot;),IF (ispickval(Custom_Segmentation__c,&quot;Long Purchasing Cycle &gt;1 Year&quot;), IF ((round((Sold_Implants_L12M__c + Sold_Implants_L13_24M__c)/2,0) = IF (ISBLANK(Implants_Potential_Year__c),0,Implants_Potential_Year__c)) &amp;&amp; Implants_Potential_Year__c!=0 ,True,False), IF ((Sold_Implants_L12M__c = IF (ISBLANK(Implants_Potential_Year__c),0,Implants_Potential_Year__c))&amp;&amp;Implants_Potential_Year__c!=0,True,False)),False)</code></td></tr>
     * </table>
     */
    Overwritten_Implants_Potential__c: boolean;
    Owner: User;
    OwnerId: string;
    Ownership: string;
    p3_Participant__pc: boolean;
    /**
     * <h3><b>PAR-ID</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18), case-insensitive</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    PAR_ID__c: string;
    Parent: Account;
    /**
     * <h3><b>Parent Account ERP#</b></h3>
     * <p>Shows the Parent Account Movex number. Used for analysis only, should not appear in any page layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Parent.Movex__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Parent_Account_Movex__c: string;
    /**
     * <h3><b>Parent Account OneSF #</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Parent.OneSF_Id__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Parent_Account_OneSF__c: string;
    /**
     * <h3><b>Parent Account Type</b></h3>
     * <p>Used to show the type of Parent Account associated. Important when parent is a DSO, Corporate account to notify about that</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(Parent.OneAccount_Type__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Parent_Account_Type__c: string;
    /**
     * <h3><b>Parent Geographical Area</b></h3>
     * <p>The parent Geographical Area of the Account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Parent_Geographical_Area__c: string;
    /**
     * <h3><b>Parent Geographical Area</b></h3>
     * <p>The parent Geographical Area of the Account</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Parent_Geographical_Area__r: Account;
    /**
     * <h3><b>Parent Account Information</b></h3>
     * <p>TFUS-000002871
     * TFUS-000002721</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Parent.Name &amp; IF(NOT(ISBLANK(TRIM(TEXT(Parent.OneAccount_Type__c)))), &quot; - &quot;&amp;TEXT(Parent.OneAccount_Type__c), &quot;&quot;) &amp; IF(NOT(ISBLANK(TRIM(Parent.OneSF_Id__c))), &quot; - &quot;&amp;Parent.OneSF_Id__c, &quot;&quot;) &amp; IF(NOT(ISBLANK(TRIM(Parent.ETM2_State_City__c))), &quot; - &quot;&amp;Parent.ETM2_State_City__c, &quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ParentAccountInformation__c: string;
    ParentEntities: NetworkActivityAudit[];
    ParentId: string;
    /**
     * The reciprocal relationship for {@link AssociatedLocation.ParentRecordId}.
     */
    ParentRecord: AssociatedLocation;
    /**
     * <h3><b>Partner Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Multiselect Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Accommodation</code></td><td>Accommodation</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Organizer</code></td><td>Organizer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Speaker</code></td><td>Speaker</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Venue</code></td><td>Venue</td><td nowrap>true</td></tr>
     * </table>
     */
    Partner_Type__c: string;
    PartnerAccount: Lead;
    /**
     * The reciprocal relationship for {@link PartnerFundAllocation.ChannelPartnerId}.
     */
    PartnerFundAllocations: PartnerFundAllocation[];
    /**
     * The reciprocal relationship for {@link PartnerFundClaim.ChannelPartnerId}.
     */
    PartnerFundClaims: PartnerFundClaim[];
    /**
     * The reciprocal relationship for {@link PartnerFundRequest.ChannelPartnerId}.
     */
    PartnerFundRequests: PartnerFundRequest[];
    /**
     * The reciprocal relationship for {@link PartnerMarketingBudget.ChannelPartnerId}.
     */
    PartnerMarketingBudgets: PartnerMarketingBudget[];
    /**
     * The reciprocal relationship for {@link SBQQ__Quote__c.SBQQ__Partner__c}.
     */
    PartnerQuotes__r: SBQQ__Quote__c[];
    PartnerRecord: PartnerNetworkRecordConnection;
    PartnersFrom: Partner[];
    PartnersTo: Partner[];
    Patients_per_Week__pc: number;
    /**
     * <h3><b># of Patients per month</b></h3>
     * <p>Used to track how many patients an Accounts serves a month - requested first by Japan</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PatientsMonth__c: number;
    /**
     * <h3><b>Payer Customer Group (JP)</b></h3>
     * <p>Sets Customer Group to the Customer Group of the Payer Lookup-Account. If Payer Lookup is empty, Customer Group from Account itself is used. For Japan only. To mark Account with SASAKI, Direct or Other Dealer.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (( Payer_Lookup__c = &quot;&quot;), Customer_Group__c, Payer_Lookup__r.Customer_Group__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Customer_Group_D_JP__c: string;
    /**
     * <h3><b>Payer Lookup</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Lookup__c: string;
    /**
     * <h3><b>Payer Lookup</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Lookup__r: Account;
    /**
     * <h3><b>Payer Account #</b></h3>
     * <p>Field Payer from Movex.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payer_Movex__c: string;
    /**
     * <h3><b>Payment Terms</b></h3>
     * <p>Payment Terms coming from OKTEPY from Movex. Shows a code corresponding to the payment terms for the customer</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payment_Terms_D_JP__c: string;
    /**
     * <h3><b>Payment Terms Description</b></h3>
     * <p>CSYtab.tepy</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(80)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Payment_Terms_Desrciption__c: string;
    PEERS_Member__pc: boolean;
    PersonAcceptedEventRelations: AcceptedEventRelation[];
    /**
     * The reciprocal relationship for {@link AccountContactRelation.ContactId}.
     */
    PersonAccountContactRelations: AccountContactRelation[];
    PersonAccountContactRoles: AccountContactRole[];
    PersonActivityHistories: ActivityHistory[];
    /**
     * The reciprocal relationship for {@link SocialPersona.ParentId}.
     */
    Personas: SocialPersona[];
    /**
     * The reciprocal relationship for {@link AssetContactParticipant.ContactId}.
     */
    PersonAssetContactParticipantContact: AssetContactParticipant[];
    /**
     * The reciprocal relationship for {@link Asset.ContactId}.
     */
    PersonAssets: Asset[];
    PersonAssistantName: string;
    PersonAssistantPhone: string;
    PersonBirthdate: Date;
    /**
     * The reciprocal relationship for {@link CampaignInfluence.ContactId}.
     */
    PersonCampaignInfluences: CampaignInfluence[];
    PersonCampaignMembers: CampaignMember[];
    PersonCaseContactRoles: CaseContactRole[];
    PersonCases: Case[];
    PersonContact: Contact;
    PersonContactId: string;
    /**
     * The reciprocal relationship for {@link ContactRequest.WhoId}.
     */
    PersonContactRequests: ContactRequest[];
    PersonContractContactRoles: ContractContactRole[];
    /**
     * The reciprocal relationship for {@link Contract.CustomerSignedId}.
     */
    PersonContractsSigned: Contract[];
    PersonConversationParticipants: ConversationParticipant[];
    PersonDeclinedEventRelations: DeclinedEventRelation[];
    PersonDepartment: string;
    /**
     * The reciprocal relationship for {@link DocumentRecipient.RecipientId}.
     */
    PersonDocumentRecipients: DocumentRecipient[];
    PersonDoNotCall: boolean;
    PersonEmail: string;
    PersonEmailBouncedDate: string;
    PersonEmailBouncedReason: string;
    PersonEmailMessageRelations: EmailMessageRelation[];
    PersonEmailStatuses: EmailStatus[];
    /**
     * The reciprocal relationship for {@link EntitlementContact.ContactId}.
     */
    PersonEntitlementContacts: EntitlementContact[];
    PersonEvents: Event[];
    PersonEventWhoRelations: EventWhoRelation[];
    PersonFirstNameLocal: string;
    /**
     * The reciprocal relationship for {@link FulfillmentOrder.BillToContactId}.
     */
    PersonFulfillmentOrders: FulfillmentOrder[];
    PersonHasOptedOutOfEmail: boolean;
    PersonHasOptedOutOfFax: boolean;
    PersonHomePhone: string;
    PersonIndividual: Individual;
    PersonIndividualId: string;
    PersonLastCURequestDate: string;
    PersonLastCUUpdateDate: string;
    PersonLastNameLocal: string;
    PersonLeadSource: string;
    PersonListEmailIndividualRecipients: ListEmailIndividualRecipient[];
    PersonListEmails: ListEmail[];
    /**
     * The reciprocal relationship for {@link LiveChatTranscript.ContactId}.
     */
    PersonLiveChatTranscripts: LiveChatTranscript[];
    PersonMailingAddress: Address;
    PersonMailingCity: string;
    PersonMailingCountry: string;
    PersonMailingGeocodeAccuracy: string;
    PersonMailingLatitude: number;
    PersonMailingLongitude: number;
    PersonMailingPostalCode: string;
    PersonMailingState: string;
    PersonMailingStreet: string;
    /**
     * The reciprocal relationship for {@link MaintenancePlan.ContactId}.
     */
    PersonMaintenancePlans: MaintenancePlan[];
    /**
     * The reciprocal relationship for {@link MessagingEndUser.ContactId}.
     */
    PersonMessagingEndUsers: MessagingEndUser[];
    /**
     * The reciprocal relationship for {@link MessagingSession.EndUserContactId}.
     */
    PersonMessagingSessions: MessagingSession[];
    PersonMobilePhone: string;
    PersonOpenActivities: OpenActivity[];
    PersonOpportunities: Opportunity[];
    /**
     * The reciprocal relationship for {@link OpportunityContactRole.ContactId}.
     */
    PersonOpportunityContactRoles: OpportunityContactRole[];
    PersonOtherAddress: Address;
    PersonOtherCity: string;
    PersonOtherCountry: string;
    PersonOtherGeocodeAccuracy: string;
    PersonOtherLatitude: number;
    PersonOtherLongitude: number;
    PersonOtherPhone: string;
    PersonOtherPostalCode: string;
    PersonOtherState: string;
    PersonOtherStreet: string;
    PersonPersonRecord: UserEmailPreferredPerson[];
    /**
     * The reciprocal relationship for {@link Quote.ContactId}.
     */
    PersonQuotes: Quote[];
    PersonRecord: UserEmailPreferredPersonChangeEvent;
    PersonRelatedPersons: VideoCallParticipant[];
    /**
     * The reciprocal relationship for {@link ReturnOrder.ContactId}.
     */
    PersonReturnOrders: ReturnOrder[];
    PersonServiceAppointments: ServiceAppointment[];
    /**
     * The reciprocal relationship for {@link ServiceContract.ContactId}.
     */
    PersonServiceContracts: ServiceContract[];
    /**
     * The reciprocal relationship for {@link Task.WhoId}.
     */
    PersonTasks: Task[];
    PersonTaskWhoRelations: TaskWhoRelation[];
    PersonTitle: string;
    PersonUndecidedEventRelations: UndecidedEventRelation[];
    PersonUsers: User[];
    PersonWorkOrders: WorkOrder[];
    Phone: string;
    Phone_and_mobile_is_populated__pc: boolean;
    PhoneAndMobile__pc: string;
    PhotoUrl: string;
    PortalAccount: UserRole;
    /**
     * <h3><b>Postal Code Info</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Postal_Codes__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Postal_Code_Info__c: string;
    /**
     * <h3><b>Postal Code Info</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Postal_Codes__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Postal_Code_Info__r: Postal_Codes__c;
    /**
     * <h3><b>Potential (SBU: ENDO)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Potential</code></td><td>No Potential</td><td nowrap>true</td></tr>
     * </table>
     */
    Potential_SBU_ENDO__c: string;
    /**
     * <h3><b>Potential (SBU: ORTH)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Potential</code></td><td>No Potential</td><td nowrap>true</td></tr>
     * </table>
     */
    Potential_SBU_ORTHO__c: string;
    /**
     * <h3><b>Potential (SBU: PREV)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Potential</code></td><td>No Potential</td><td nowrap>true</td></tr>
     * </table>
     */
    Potential_SBU_PREV__c: string;
    /**
     * <h3><b>Potential (SBU: PROS)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Potential</code></td><td>No Potential</td><td nowrap>true</td></tr>
     * </table>
     */
    Potential_SBU_PROS__c: string;
    /**
     * <h3><b>Potential (SBU: REST)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Potential</code></td><td>No Potential</td><td nowrap>true</td></tr>
     * </table>
     */
    Potential_SBU_RESTO__c: string;
    /**
     * <h3><b>Practice HRID</b></h3>
     * <p>SureSmile PracticeHRID from AX.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(25)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PracticeHRID__c: string;
    /**
     * <h3><b>Practice Id</b></h3>
     * <p>SureSmile Practice Id from AX.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(40)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    PracticeId__c: string;
    Practitioner_ID_NPI_in_US__pc: string;
    Practitioner_ID_Populated__pc: string;
    /**
     * <h3><b>Preferred Communication Channel</b></h3>
     * <p>What is the customer&#39;s preferred communication channel to be contacted?</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Email</code></td><td>Email</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Fax</code></td><td>Fax</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mail</code></td><td>Mail</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Phone</code></td><td>Phone</td><td nowrap>true</td></tr>
     * </table>
     */
    Preferred_Communication_Channel__c: string;
    Preferred_Days__pc: string;
    /**
     * The reciprocal relationship for {@link Preferred_dealer_item__c.Account__c}.
     */
    Preferred_dealer_items1__r: Preferred_dealer_item__c[];
    /**
     * The reciprocal relationship for {@link Preferred_dealer_item__c.Dealer__c}.
     */
    Preferred_dealer_items__r: Preferred_dealer_item__c[];
    Preferred_Hours__pc: string;
    Preferred_Language__pc: string;
    Preferred_Language_CH__pc: string;
    /**
     * <h3><b>Price List</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(36)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Price_List__c: string;
    /**
     * The reciprocal relationship for {@link SBQQ__PriceSchedule__c.SBQQ__Account__c}.
     */
    PriceSchedules__r: SBQQ__PriceSchedule__c[];
    Primary_Contact__pc: boolean;
    Primary_Lecture_Language__pc: string;
    PrimaryAccount: ActivityHistory;
    PrimaryAccountVisitingAddress__pc: string;
    PrimaryMethodOfContact__pc: string;
    PrimaryRecord: PendingServiceRoutingInteractionInfo;
    PrimaryWho: ActivityHistory;
    /**
     * <h3><b>Privacy (IT)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>true</td></tr>
     * </table>
     */
    Privacy__c: string;
    Privacy__pc: string;
    Privacy_Consent__pc: boolean;
    Private_NPD__pc: string;
    /**
     * The reciprocal relationship for {@link ProcedureProfiling__c.Account__c}.
     */
    Procedure_Profiling__r: ProcedureProfiling__c[];
    /**
     * The reciprocal relationship for {@link ProcedureTracker__c.Dealer__c}.
     */
    Procedure_Trackers__r: ProcedureTracker__c[];
    /**
     * The reciprocal relationship for {@link ProcedureTracker__c.Contact__c}.
     */
    Procedures__r: ProcedureTracker__c[];
    ProcessInstances: ProcessInstance[];
    ProcessSteps: ProcessInstanceHistory[];
    /**
     * <h3><b>Product Area</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental</code></td><td>Dental</td><td nowrap>true</td><td nowrap>true</td></tr>
     * </table>
     */
    Product_Area__c: string;
    Product_Area__pc: string;
    /**
     * The reciprocal relationship for {@link ProductInstruction__c.Account__c}.
     */
    Product_Instructions__r: ProductInstruction__c[];
    /**
     * The reciprocal relationship for {@link ProductRequestLineItem.AccountId}.
     */
    ProductRequestLineItems: ProductRequestLineItem[];
    /**
     * The reciprocal relationship for {@link ProductRequest.AccountId}.
     */
    ProductRequests: ProductRequest[];
    /**
     * The reciprocal relationship for {@link Consignment_Stock__c.Account__c}.
     */
    Products_in_Consignment_Stock__r: Consignment_Stock__c[];
    /**
     * The reciprocal relationship for {@link Product_Profiling__c.Account__c}.
     */
    Products_Profiling__r: Product_Profiling__c[];
    Profession__pc: string;
    Profession_CA__pc: string;
    Profession_D_CH__pc: string;
    Profession_DEX__pc: string;
    Profile__pc: string;
    /**
     * The reciprocal relationship for {@link Program_Participation__c.Contact__c}.
     */
    Program_Participations__r: Program_Participation__c[];
    /**
     * The reciprocal relationship for {@link Promotion_Material__c.Account__c}.
     */
    Promotion_Material__r: Promotion_Material__c[];
    /**
     * The reciprocal relationship for {@link Field_Sales_Project_Members__c.Dealer__c}.
     */
    Prospects__r: Field_Sales_Project_Members__c[];
    /**
     * <h3><b>Provider Sector</b></h3>
     * <p>Displays the sector of the Account - if it&#39;s state funded or public or both.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Private</code></td><td>Private</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Private/Public</code></td><td>Private/Public</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Public</code></td><td>Public</td><td nowrap>true</td></tr>
     * </table>
     */
    Provider_Sector__c: string;
    Publications__pc: string;
    /**
     * The reciprocal relationship for {@link Q_A__c.Account_Name__c}.
     */
    Q_A__r: Q_A__c[];
    Qualtrics_Survey__pc: string;
    /**
     * <h3><b>Questionnaire Link</b></h3>
     * <p>TBD soon - Majdi</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&quot;/apex/XSBUQuest?UserId=&quot;&amp;$User.Id&amp;&quot;&amp;Id=&quot;&amp;Id&amp;&quot;&amp;AccountCountry=&quot;&amp;Text(Country__c)&amp;&quot;&amp;QTYpe=xSBU&quot;, &quot;Cross-SBU Prospect&quot;) &#47;&#42;&amp;&quot;| &quot;&amp; HYPERLINK(&quot;/apex/XSBUQuest?UserId=&quot;&amp; $User.Id &amp;&quot;&amp;Id=&quot;&amp; Id &amp;&quot;&amp;AccountCountry=&quot;&amp; Text(Country__c)&amp;&quot;&amp;QTYpe=SmartFix Phase One&quot;, &quot;SmartFix Phase 1&quot;) &amp;&quot; | &quot;&amp; HYPERLINK(&quot;/apex/XSBUQuest?UserId=&quot;&amp; $User.Id &amp;&quot;&amp;Id=&quot;&amp; Id &amp;&quot;&amp;AccountCountry=&quot;&amp; Text(Country__c)&amp;&quot;&amp;QTYpe=SmartFix Phase Two&quot;, &quot;SmartFix Phase 2&quot;)&#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Questionnaire_Link__c: string;
    /**
     * <h3><b>Quick Links IMPL reports</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( Ispickval( $User.SF_Implementation_Level__c ,&quot;Sales Basic&quot;)||CONTAINS( RecordType.Name, &quot;Non-ERP&quot;) ,  &#47;&#42;if yes mean that they are in basic or is not ERP account so only we show reports in false. Probably this is covered with the profile and ERP layout but just in case I keep it&#42;&#47; &quot;&quot; , HYPERLINK(&quot;/00O20000004GGW3?pv0=&quot;&amp; Movex__c , &quot;YTD Sales Trends&quot;)&amp;&quot; | &quot;&amp; HYPERLINK(&quot;/00O20000004GGdJ?pv0=&quot;&amp; Movex__c, &quot;Full Year Sales Trends&quot;)&amp;&quot; | &quot;&amp; HYPERLINK(&quot;/00O20000002oy66?pv0=&quot;&amp; Movex__c, &quot;Sold Art / Month&quot;) &amp;&quot; | &quot;&amp; HYPERLINK(&quot;/00O0J000004xF5j?pv0=&quot;&amp; Movex__c, &quot;Sales Art / Month&quot;) &amp;&quot; | &quot;&amp; HYPERLINK(&quot;00O20000005Ge4z?pv0=&quot;&amp;Movex__c, &quot;Discount by brand Report&quot;) &amp;&quot; | &quot;&amp; IF (RecordType.Id=&quot;01220000000ckjZ&quot;, HYPERLINK(&quot;/00O20000004IDLa?pv0=&quot;&amp; Movex__c, &quot;Sold Implants by Brand&quot;) &amp;&quot; | &quot;&amp; HYPERLINK(&quot;/00O20000004IDLf?pv0=&quot;&amp; Movex__c, &quot;Sold Abut&#39;s by Brand&quot;) &amp;&quot; | &quot;&amp; HYPERLINK(&quot;/00O2000000338Tm?pv0=&quot;&amp; Movex__c, &quot;ATL by Manufacturer&quot;) , &quot;&quot; ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Quick_Links_IMPL_reports__c: string;
    /**
     * <h3><b>Quick Links</b></h3>
     * <p>Used in the Global layouts to replace the &quot;Useful Links&quot; header/. Dynamic formula to accommodate Basic profiles and Lab/Clinical Accounts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&quot;/00O20000004FEQo?pv0=&quot;&amp;If(ISBLANK(BillingPostalCode),&quot;null code&quot;,BillingPostalCode)&amp;If(ISBLANK(ShippingPostalCode),&quot;&quot;,&quot;,&quot;&amp;ShippingPostalCode)&amp;&quot;&amp;pv1=&quot;&amp;If(ISBLANK(ShippingPostalCode),&quot;null code&quot;,ShippingPostalCode)&amp;If(ISBLANK(BillingPostalCode),&quot;&quot;,&quot;,&quot;&amp;BillingPostalCode), &quot;Accounts in Postal Code&quot;)&amp;&quot;  |  &quot;&amp; HYPERLINK(&quot;/00O0J000007TLW9?pv0=&quot;&amp;If(ISBLANK(BillingCity),&quot;null code&quot;,BillingCity)&amp;If(ISBLANK(ShippingCity),&quot;&quot;,&quot;,&quot;&amp;ShippingCity)&amp;&quot;&amp;pv1=&quot;&amp;If(ISBLANK(ShippingCity),&quot;null code&quot;,ShippingCity)&amp;If(ISBLANK(BillingCity),&quot;&quot;,&quot;,&quot;&amp;BillingCity), &quot;Accounts in City&quot;) &amp;&quot;&quot;&amp; IF (   INCLUDES($User.Questionnaire_Access__c,&quot;xSBU&quot;) ,&quot;  |  &quot;&amp;HYPERLINK(&quot;/apex/XSBUQuest?UserId=&quot;&amp;$User.Id&amp;&quot;&amp;Id=&quot;&amp;Id&amp;&quot;&amp;AccountCountry=&quot;&amp;Text(Country__c)&amp;&quot;&amp;QTYpe=xSBU&quot;&amp;&quot;&amp;SourceId=&quot;&amp;Id , &quot;Cross-SBU Prospect&quot;) ,&quot;&quot;) &amp;&quot;&quot;&amp; IF (   INCLUDES($User.Questionnaire_Access__c,&quot;Survey&quot;) ,&quot;  |  &quot;&amp;HYPERLINK(&quot;/apex/XSBUQuest?UserId=&quot;&amp;$User.Id&amp;&quot;&amp;Id=&quot;&amp;Id&amp;&quot;&amp;AccountCountry=&quot;&amp;Text(Country__c)&amp;&quot;&amp;QTYpe=Survey&quot;&amp;&quot;&amp;SourceId=&quot;&amp;Id , &quot;Customer Survey&quot;) ,&quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Quick_Report_Links__c: string;
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLineGroup__c.SBQQ__Account__c}.
     */
    QuoteLineGroups__r: SBQQ__QuoteLineGroup__c[];
    Quotes__pr: Quote[];
    /**
     * The reciprocal relationship for {@link Quote.LeasingAccount__c}.
     */
    Quotes__r: Quote[];
    /**
     * The reciprocal relationship for {@link Location__c.Account__c}.
     */
    R00N20000000pU1jEAE__r: Location__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__ContractedPrice__c.SBQQ__Account__c}.
     */
    R00N70000001olI5EAI__r: SBQQ__ContractedPrice__c[];
    Rating: string;
    /**
     * <h3><b>Reason for Do Not Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bad Payer</code></td><td>Bad Payer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Black Listed</code></td><td>Black Listed</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Clinic bound by contract to organizations not buying our products</code></td><td>Clinic bound by contract to organizations not buying our products</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Do not accept onsite CFEs</code></td><td>Do not accept onsite CFEs</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low ROI</code></td><td>Low ROI</td><td nowrap>true</td></tr>
     * </table>
     */
    Reason_for_Do_Not_Contact__c: string;
    /**
     * The reciprocal relationship for {@link Rebound_Priorities__c.Account__c}.
     */
    Rebound_Priorities__r: Rebound_Priorities__c[];
    /**
     * The reciprocal relationship for {@link Rebound_Relationship__c.Account__c}.
     */
    Rebound_Relationships__r: Rebound_Relationship__c[];
    Record: CollaborationGroupRecordChangeEvent;
    RecordActionHistories: RecordActionHistory[];
    /**
     * The reciprocal relationship for {@link RecordAction.RecordId}.
     */
    RecordActions: RecordAction[];
    RecordAlertParent: RecordAlert[];
    RecordAlertWhat: RecordAlert[];
    RecordAssociatedGroups: CollaborationGroupRecord[];
    RecordType: RecordType;
    RecordTypeId: string;
    /**
     * <h3><b>Red Flag Candidate CM</b></h3>
     * <p>Updated by cloud job AggregateRedFlag.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    RedFlag_Candidate_CM__c: boolean;
    /**
     * <h3><b>Red Flag Candidate LM</b></h3>
     * <p>Updated by cloud job AggregateRedFlag.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    RedFlag_Candidate_LM__c: boolean;
    /**
     * <h3><b>Implants To Green Flag CM</b></h3>
     * <p>Updated by cloud job AggregateRedFlag.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    RedFlag_ImplantsToGreen_CM__c: number;
    /**
     * <h3><b>Referral Potential /Last Modified By</b></h3>
     * <p>updated by workflow</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Referral_Potential_Last_Modified_By__c: string;
    /**
     * <h3><b>Referral Potential / Year</b></h3>
     * <p>Part of Implants Segmentation . The maximum number of implants that this account might refer (including competitors systems) in 12 months period</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    Referral_Potential_Year__c: number;
    /**
     * <h3><b>Referral Potential / Year Last Modified</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Referral_Potential_Year_Last_Modified__c: string;
    /**
     * The reciprocal relationship for {@link Refined_pricebook_connection__c.Account__c}.
     */
    Refined_pricebook_connections__r: Refined_pricebook_connection__c[];
    /**
     * <h3><b>Region</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AT CEE Team</code></td><td>AT CEE Team</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AT DI Team</code></td><td>AT DI Team</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">AT WHC Team</code></td><td>AT WHC Team</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BE Dental</code></td><td>BE Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Canada</code></td><td>Canada</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Centro IT</code></td><td>Centro IT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Default (IT00)</code></td><td>Default (IT00)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Denmark</code></td><td>Denmark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DENTAL CENTRAL TEAM</code></td><td>DENTAL CENTRAL TEAM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DENTAL SOUTH TEAM</code></td><td>DENTAL SOUTH TEAM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dolnoslaskie</code></td><td>Dolnoslaskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DOM-TOM</code></td><td>DOM-TOM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Eastern Region</code></td><td>Eastern Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FR: DI Est</code></td><td>FR: DI Est</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FR: DI Nord</code></td><td>FR: DI Nord</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FR: DI Ouest</code></td><td>FR: DI Ouest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">FR: DI SudEst</code></td><td>FR: DI SudEst</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Healthcare Mitte</code></td><td>Healthcare Mitte</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Healthcare Nord</code></td><td>Healthcare Nord</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Healthcare Nord/West</code></td><td>Healthcare Nord/West</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Healthcare Süd</code></td><td>Healthcare Süd</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Healthcare Süd/Ost</code></td><td>Healthcare Süd/Ost</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hovedstaden</code></td><td>Hovedstaden</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT: DI Centro</code></td><td>IT: DI Centro</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT: DI Nord Est</code></td><td>IT: DI Nord Est</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT: DI Nord Ovest</code></td><td>IT: DI Nord Ovest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IT: DI Sud</code></td><td>IT: DI Sud</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Italy</code></td><td>Italy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">JP: DI - Chubu</code></td><td>JP: DI - Chubu</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">JP: DI - Kansai</code></td><td>JP: DI - Kansai</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">JP: DI - Kita-Kanto/Tohoku</code></td><td>JP: DI - Kita-Kanto/Tohoku</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">JP: DI - Kyushu</code></td><td>JP: DI - Kyushu</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">JP: DI - Minami-Kanto</code></td><td>JP: DI - Minami-Kanto</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">JP: DI - Tokyo/Hokkaido</code></td><td>JP: DI - Tokyo/Hokkaido</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Kujawsko-Pomorskie</code></td><td>Kujawsko-Pomorskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lodzkie</code></td><td>Lodzkie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LU Dental</code></td><td>LU Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lubelskie</code></td><td>Lubelskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lubuskie</code></td><td>Lubuskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Malopolskie</code></td><td>Malopolskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mazowieckie</code></td><td>Mazowieckie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Midtjylland</code></td><td>Midtjylland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mitte</code></td><td>Mitte</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NL Dental</code></td><td>NL Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NL Urology</code></td><td>NL Urology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord</code></td><td>Nord</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord Est IT</code></td><td>Nord Est IT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord FR</code></td><td>Nord FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nord Ovest IT</code></td><td>Nord Ovest IT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nordjylland</code></td><td>Nordjylland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Nordost</code></td><td>Nordost</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Norte</code></td><td>Norte</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">North East FR</code></td><td>North East FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">North West FR</code></td><td>North West FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NorthWest</code></td><td>NorthWest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Norway</code></td><td>Norway</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NSW Dental</code></td><td>NSW Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NSW Healthcare</code></td><td>NSW Healthcare</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NT Dental</code></td><td>NT Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NT Healthcare</code></td><td>NT Healthcare</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NZ</code></td><td>NZ</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Opolskie</code></td><td>Opolskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ost</code></td><td>Ost</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Paris Region</code></td><td>Paris Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PARISlle de France</code></td><td>PARISlle de France</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Podkarpackie</code></td><td>Podkarpackie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Podlaskie</code></td><td>Podlaskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pomorskie</code></td><td>Pomorskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QLD Dental</code></td><td>QLD Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QLD Healthcare</code></td><td>QLD Healthcare</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SA Dental</code></td><td>SA Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SA Healthcare</code></td><td>SA Healthcare</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sjælland</code></td><td>Sjælland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Slaskie</code></td><td>Slaskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">South East FR</code></td><td>South East FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">South West FR</code></td><td>South West FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SouthEast</code></td><td>SouthEast</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Southern Region</code></td><td>Southern Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sud Est FR</code></td><td>Sud Est FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sud IT</code></td><td>Sud IT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">SURGERY</code></td><td>SURGERY</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Surgery East</code></td><td>Surgery East</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Surgery West</code></td><td>Surgery West</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sweden</code></td><td>Sweden</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Swietokrzyskie</code></td><td>Swietokrzyskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Switzerland</code></td><td>Switzerland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Süd</code></td><td>Süd</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Syddanmark</code></td><td>Syddanmark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Südwest</code></td><td>Südwest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TAS Dental</code></td><td>TAS Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TAS Healthcare</code></td><td>TAS Healthcare</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Travel Zone 1</code></td><td>Travel Zone 1</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Travel Zone 2</code></td><td>Travel Zone 2</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Travel Zone 3</code></td><td>Travel Zone 3</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Travel Zone 4</code></td><td>Travel Zone 4</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Travel Zone 5</code></td><td>Travel Zone 5</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Travel Zone 6</code></td><td>Travel Zone 6</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK DI East Team</code></td><td>UK DI East Team</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK DI North Team</code></td><td>UK DI North Team</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK DI West Team</code></td><td>UK DI West Team</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UROLOGY CELTIC TEAM</code></td><td>UROLOGY CELTIC TEAM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Urology NE</code></td><td>Urology NE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UROLOGY NORTH TEAM</code></td><td>UROLOGY NORTH TEAM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Urology NW</code></td><td>Urology NW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Urology Paris</code></td><td>Urology Paris</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Urology SE</code></td><td>Urology SE</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UROLOGY SOUTH TEAM</code></td><td>UROLOGY SOUTH TEAM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Urology SW</code></td><td>Urology SW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WA Dental</code></td><td>WA Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WA Healthcare</code></td><td>WA Healthcare</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Warminsko-Mazurskie</code></td><td>Warminsko-Mazurskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">West</code></td><td>West</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">West Region FR</code></td><td>West Region FR</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Western Region</code></td><td>Western Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">VIC Dental</code></td><td>VIC Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">VIC Healthcare</code></td><td>VIC Healthcare</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Wielkopolskie</code></td><td>Wielkopolskie</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Zachodniopomorskie</code></td><td>Zachodniopomorskie</td><td nowrap>true</td></tr>
     * </table>
     */
    Region__c: string;
    /**
     * <h3><b>Region (DE)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CH DI Switzerland</code></td><td>CH DI Switzerland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 11</code></td><td>DE DI Region 11</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 12</code></td><td>DE DI Region 12</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 13</code></td><td>DE DI Region 13</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 14</code></td><td>DE DI Region 14</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 15</code></td><td>DE DI Region 15</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 21</code></td><td>DE DI Region 21</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 22</code></td><td>DE DI Region 22</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 23</code></td><td>DE DI Region 23</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 24</code></td><td>DE DI Region 24</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 25</code></td><td>DE DI Region 25</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 31</code></td><td>DE DI Region 31</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 32</code></td><td>DE DI Region 32</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 33</code></td><td>DE DI Region 33</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DE DI Region 34</code></td><td>DE DI Region 34</td><td nowrap>true</td></tr>
     * </table>
     */
    Region_D_DE__c: string;
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.RelatedRecordId}.
     */
    RelatedAuthorizationFormConsents: AuthorizationFormConsent[];
    RelatedPerson: EngagementTopicChangeEvent;
    /**
     * The reciprocal relationship for {@link AuthorizationFormConsent.RelatedRecordId}.
     */
    RelatedRecord: AuthorizationFormConsent;
    /**
     * The reciprocal relationship for {@link VoiceCall.RelatedRecordId}.
     */
    RelatedRecords: VoiceCall[];
    /**
     * The reciprocal relationship for {@link EmailMessage.RelatedToId}.
     */
    RelatedTo: EmailMessage;
    Relation: EventRelationChangeEvent;
    ReportsTo: ContactChangeEvent;
    /**
     * The reciprocal relationship for {@link RequestForm__c.ContactName__c}.
     */
    Request_Forms__r: RequestForm__c[];
    /**
     * The reciprocal relationship for {@link RequestForm__c.AccountName__c}.
     */
    RequestForms__r: RequestForm__c[];
    /**
     * The reciprocal relationship for {@link Engagement__c.Speaker__c}.
     */
    Requets__r: Engagement__c[];
    /**
     * <h3><b>Resistance Comment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Resistance_Comment__c: string;
    /**
     * <h3><b>Resistance Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High Resistance</code></td><td>High Resistance</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low Resistance</code></td><td>Low Resistance</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium Resistance</code></td><td>Medium Resistance</td><td nowrap>true</td></tr>
     * </table>
     */
    Resistance_Level__c: string;
    /**
     * The reciprocal relationship for {@link ResourcePreference.RelatedRecordId}.
     */
    ResourcePreferences: ResourcePreference[];
    /**
     * <h3><b># of Resto Cases referred out per month</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(4,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    RestoReferralsMonth__c: number;
    /**
     * The reciprocal relationship for {@link Return_Auth_NAImp__c.Account__c}.
     */
    Return_Authorizations__r: Return_Auth_NAImp__c[];
    /**
     * The reciprocal relationship for {@link ReturnOrder.AccountId}.
     */
    ReturnOrders: ReturnOrder[];
    RoleProfessionSpecialty__pc: string;
    /**
     * The reciprocal relationship for {@link Sales_Analytics__c.Account__c}.
     */
    Sales_Analytics__r: Sales_Analytics__c[];
    /**
     * <h3><b>Sales CY vs LYTD (Atlantis)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_D_DD_AllPCs_Atlantis__c  -  TS_CY_1_TD_D_DD_AllPCs_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_CY_vs_LYTD_Atlantis__c: number;
    /**
     * <h3><b>Sales CY vs LYTD (Atlantis) UP DOWN</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( Sales_CY_vs_LYTD_Atlantis__c &gt; 0, &quot;a. Up&quot;, &quot;b. Down&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_CY_vs_LYTD_Atlantis_UP_DOWN__c: string;
    /**
     * <h3><b>Sales Delta LY</b></h3>
     * <p>Shows Sales CY (D) - Sales LYTD (D). If positive, we have sold more to this customer this year, if negative sales CY is lower than LYTD.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_D_AllPLs_AllPCs_AllBrands__c - TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Delta_LY_D__c: number;
    /**
     * <h3><b>Sales Dental Trend</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( TS_CY_1_D_AllPLs_AllPCs_AllBrands__c &gt; 0, TS_CY_D_AllPLs_AllPCs_AllBrands__c /  TS_CY_1_D_AllPLs_AllPCs_AllBrands__c, null)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Dental_Trend__c: number;
    /**
     * <h3><b>Sales Flag</b></h3>
     * <p>If RED: Sales CY To Date compared with LY To Date is &lt;80%
     * If YELLOW: Sales CY To Date compared with LY To Date is &gt;80%
     * If GREEN: Sales CY To Date compared with LY To Date is &gt;100%</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&gt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&gt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c / TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c / TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000zblq&quot;, &quot;Yellow Flag&quot;), IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c / TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), null ) ) ) ) ) ) ) ) ) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Flag_D__c: string;
    /**
     * <h3><b>Sales Flag Picklist</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Green Flag</code></td><td>Green Flag</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Red Flag</code></td><td>Red Flag</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yellow Flag</code></td><td>Yellow Flag</td><td nowrap>true</td></tr>
     * </table>
     */
    Sales_Flag_Picklist_D__c: string;
    /**
     * <h3><b>Sales Flag Tag</b></h3>
     * <p>If RED: Sales CY To Date compared with LY To Date is &lt;80%
     * If YELLOW: Sales CY To Date compared with LY To Date is &gt;80%
     * If GREEN: Sales CY To Date compared with LY To Date is &gt;100%</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&gt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c&gt;0 &amp;&amp; TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c / TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),&quot;a. Green Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c / TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;b. Yellow Flag&quot;, IF((TS_CY_D_AllPLs_AllPCs_AllBrands__c / TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;c. Red Flag&quot;, null ) ) ) ) ) ) ) ) ) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_Flag_Tag_D__c: string;
    /**
     * The reciprocal relationship for {@link Sales_Forecast__c.Account_Name__c}.
     */
    Sales_Forecasts__r: Sales_Forecast__c[];
    /**
     * The reciprocal relationship for {@link Sales_History__c.Payer_Lookup__c}.
     */
    Sales_History__r: Sales_History__c[];
    /**
     * <h3><b>Sales ILY %</b></h3>
     * <p>Shows an index comparing Sales CY To Date and LY To Date.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR(TS_CY_D_AllPLs_AllPCs_AllBrands__c &lt; 0,TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c &lt;= 0),null, TS_CY_D_AllPLs_AllPCs_AllBrands__c / TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_ILY_D__c: number;
    /**
     * <h3><b>Sales ILY % (ATL)</b></h3>
     * <p>Shows an index comparing Sales ATL CY andSales ATL  LY To Date.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR(TS_CY_D_DD_AllPCs_Atlantis__c  &lt; 0,TS_CY_1_TD_D_DD_AllPCs_Atlantis__c &lt;= 0),null, TS_CY_D_DD_AllPCs_Atlantis__c / TS_CY_1_TD_D_DD_AllPCs_Atlantis__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_ILY_D_ATL__c: number;
    /**
     * <h3><b>Sales in Payer hierarchy</b></h3>
     * <p>Views one-click report that shows alla sales in the Payer Hierarchy. It is linked via the Payer Account field. The Sales on the payer is also included</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&quot;00O20000004ITC1?pv0=&quot; &amp;    Movex__c   &amp; &quot;&amp;pv1=&quot;&amp;   IF( ISBLANK(Payer_Movex__c) , Movex__c, Payer_Movex__c ) , &quot;ERP Report - Sold Prod/Quarter In Payer Hierarchy&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_in_Payer_hierarchy__c: string;
    /**
     * <h3><b>Sales IR12M%</b></h3>
     * <p>Shows an index comparing Sales L12M and Sales 13-24M.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR(Sales_L12M_D__c &lt; 0,Sales_L13_24M_D__c  &lt;= 0),null, Sales_L12M_D__c / Sales_L13_24M_D__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_IR12M__c: number;
    /**
     * <h3><b>Sales L12M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_D_AllPLs_AllPCs_AllBrands__c + ( TS_CY_1_D_AllPLs_AllPCs_AllBrands__c - TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_L12M_D__c: number;
    /**
     * <h3><b>Sales L13-24M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c + ( TS_CY_2_D_AllPLs_AllPCs_AllBrands__c - TS_CY_2_TD_D_AllPLs_AllPCs_AllBrands__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sales_L13_24M_D__c: number;
    Sales_Unit_B2B_project__pc: boolean;
    /**
     * The reciprocal relationship for {@link Sales_History__c.Account__c}.
     */
    SalesHistory__r: Sales_History__c[];
    /**
     * <h3><b>Sales History Count (Processed Abuts)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesHistoryCountWonLostPrc_Abutments__c: number;
    /**
     * <h3><b>Sales History Count (Processed Implants)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesHistoryCountWonLostPrc_Implants__c: number;
    /**
     * <h3><b>Sales History Count (Processed ISUS)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesHistoryCountWonLostPrc_ISUS__c: number;
    Salutation: string;
    Salutation_CH__pc: string;
    Same_Account_Owner_HQ__pc: string;
    /**
     * The reciprocal relationship for {@link Order.Account_for_Sample_in_AX__c}.
     */
    Sample_Orders__r: Order[];
    /**
     * <h3><b>SASAKI Branch Code (JP)</b></h3>
     * <p>Field taken from OKCFC4 in Movex. Includes the code of the SASAKI branch office.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(5)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SASAKI_Branch_Code_D_JP__c: string;
    /**
     * <h3><b>SASAKI Customer Code (JP)</b></h3>
     * <p>Field taken from OKCFC9 in Movex. Contains SASAKI Customer Code.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(5)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SASAKI_Customer_Code_D_JP__c: string;
    /**
     * <h3><b>Scientific Marketing Account (IT)</b></h3>
     * <p>Used by Italy to mark Accounts which have Contacts included in Scientific Marketing-activities.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Scientific_Marketing_Account_D_IT__c: boolean;
    Scientific_Marketing_D_IT__pc: boolean;
    /**
     * <h3><b>Scientific Marketing Hub Account (IT)</b></h3>
     * <p>Used by IT to set check which Accounts are Hub Accounts in specific Networks for which the Hub Account should be shared with all Regional Managers.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Scientific_Marketing_Hub_Account_D_IT__c: boolean;
    /**
     * The reciprocal relationship for {@link ScorecardAssociation.TargetEntityId}.
     */
    ScorecardAssociations: ScorecardAssociation[];
    Secondary_Lecture_Language__pc: string;
    Secondary_Specialty__pc: string;
    /**
     * <h3><b>Segment</b></h3>
     * <p>The Segment of the Account from an overall DentsplySirona level - value should be fed to us from CDW based on algortithm</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    Segment__c: string;
    /**
     * <h3><b>Segment - Ortho Clear Aligners</b></h3>
     * <p>Sub Segmentation - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    Segment_Ortho_Clear_Aligners__c: string;
    /**
     * <h3><b>Segment - CAD/CAM</b></h3>
     * <p>Sub Segment - for SFE and lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentCADCAMmanual__c: string;
    /**
     * <h3><b>Segment - Consumables</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HIGH</code></td><td>HIGH</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MEDIUM</code></td><td>MEDIUM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LOW</code></td><td>LOW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentConsumables__c: string;
    /**
     * <h3><b>Segment - Digital</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HIGH</code></td><td>HIGH</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MEDIUM</code></td><td>MEDIUM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LOW</code></td><td>LOW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentDigital__c: string;
    /**
     * <h3><b>Segment - Endodontics</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentEndodontics__c: string;
    /**
     * <h3><b>Segment - Equipment</b></h3>
     * <p>Sub Segmentation for SFE and Lightning Model.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HIGH</code></td><td>HIGH</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">MEDIUM</code></td><td>MEDIUM</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LOW</code></td><td>LOW</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentEquipment__c: string;
    /**
     * <h3><b>Segment - Imaging</b></h3>
     * <p>Sub Segment - for SFE and Lighting model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentImaging__c: string;
    /**
     * <h3><b>Segment - Implants</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentImplants__c: string;
    /**
     * <h3><b>Segment - Implants Digital</b></h3>
     * <p>Sub Segmentation - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentImplantsDigital__c: string;
    /**
     * <h3><b>Segment - Instruments</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentInstruments__c: string;
    /**
     * <h3><b>Segment - Lab</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentLab__c: string;
    /**
     * <h3><b>Segment - Orthodontics</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentOrthodontics__c: string;
    /**
     * <h3><b>Segment - Preventive</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentPreventive__c: string;
    /**
     * <h3><b>Segment - Restorative</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentRestorative__c: string;
    /**
     * <h3><b>Segment - Treatment Centers</b></h3>
     * <p>Sub Segment - for SFE and Lightning model</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">N/A</code></td><td>N/A</td><td nowrap>true</td></tr>
     * </table>
     */
    SegmentTreatmentCenters__c: string;
    Send_Survey__pc: string;
    ServiceAppointmentAccount: ServiceAppointment[];
    ServiceAppointments: ServiceAppointment[];
    /**
     * The reciprocal relationship for {@link ServiceContract.AccountId}.
     */
    ServiceContracts: ServiceContract[];
    /**
     * The reciprocal relationship for {@link Asset.AssetServicedById}.
     */
    ServicedAssets: Asset[];
    /**
     * The reciprocal relationship for {@link ServiceResource.AccountId}.
     */
    ServiceResources: ServiceResource[];
    /**
     * The reciprocal relationship for {@link Session_Participant__c.Contact__c}.
     */
    Session_Participants__r: Session_Participant__c[];
    SFDCId: MatchingInformation;
    /**
     * <h3><b>Share Of Potential (Implants)</b></h3>
     * <p>Automatically calculated based on Implants Potential / Year and Actual Sold implants in the last 12 months (L12M), refer to the training material for more details.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF ( Implants_Potential_Year__c &lt;= 0 || IsBlank(Implants_Potential_Year__c),&quot;N/A&quot;, IF ( Loyalty_Implants_Text__c &gt; 0.75, &quot;&gt;75%&quot;, IF ( AND(Loyalty_Implants_Text__c &lt;= 0.75, Loyalty_Implants_Text__c &gt; 0.25), &quot;26% to 75%&quot;, IF ( AND(Loyalty_Implants_Text__c &lt; 0.26, Loyalty_Implants_Text__c &gt; 0), &quot;1% to 25%&quot;, &quot;0%&quot;))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    share_of_potential_implants__c: string;
    /**
     * <h3><b>Share of Potential (SBU: ENDO)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">>75%</code></td><td>&gt;75%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0%</code></td><td>0%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1% to 25%</code></td><td>1% to 25%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">26% to 75%</code></td><td>26% to 75%</td><td nowrap>true</td></tr>
     * </table>
     */
    Share_of_Potential_SBU_ENDO__c: string;
    /**
     * <h3><b>Share of Potential (SBU: ORTH)</b></h3>
     * <p>Selected manually edited by ORTH reps and viewed by others.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">>75%</code></td><td>&gt;75%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0%</code></td><td>0%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1% to 25%</code></td><td>1% to 25%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">26% to 75%</code></td><td>26% to 75%</td><td nowrap>true</td></tr>
     * </table>
     */
    Share_of_Potential_SBU_ORTHO__c: string;
    /**
     * <h3><b>Share of Potential (SBU: PREV)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">>75%</code></td><td>&gt;75%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0%</code></td><td>0%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1% to 25%</code></td><td>1% to 25%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">26% to 75%</code></td><td>26% to 75%</td><td nowrap>true</td></tr>
     * </table>
     */
    Share_of_Potential_SBU_PREV__c: string;
    /**
     * <h3><b>Share of Potential (SBU: PROS)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">>75%</code></td><td>&gt;75%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0%</code></td><td>0%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1% to 25%</code></td><td>1% to 25%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">26% to 75%</code></td><td>26% to 75%</td><td nowrap>true</td></tr>
     * </table>
     */
    Share_of_Potential_SBU_PROS__c: string;
    /**
     * <h3><b>Share of Potential (SBU: REST)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">>75%</code></td><td>&gt;75%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0%</code></td><td>0%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1% to 25%</code></td><td>1% to 25%</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">26% to 75%</code></td><td>26% to 75%</td><td nowrap>true</td></tr>
     * </table>
     */
    Share_of_Potential_SBU_RESTO__c: string;
    Shares: AccountShare[];
    /**
     * <h3><b>Sharing Access</b></h3>
     * <p>To replace the Standard Sharing button (Global Field for sys Admins)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HYPERLINK(&quot;/p/share/AccSharingDetail?parentId=&quot; &amp; Id, &quot;Click Here for Details&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sharing_Access__c: string;
    ShippingAddress: Address;
    ShippingCity: string;
    ShippingCountry: string;
    ShippingGeocodeAccuracy: string;
    ShippingLatitude: number;
    ShippingLongitude: number;
    ShippingPostalCode: string;
    ShippingState: string;
    ShippingStreet: string;
    ShowpadForSF__Showpad_Activities__r: ShowpadForSF__Showpad_Activity__c[];
    ShowpadForSF__Showpad_Activity_Count__pc: number;
    ShowpadForSF__Showpad_Content_Views__pr: ShowpadForSF__Showpad_Content_View__c[];
    ShowpadForSF__Showpad_Last_Activity_Date__pc: string;
    ShowpadForSF__Showpad_Last_View_Date__pc: string;
    ShowpadForSF__Showpad_Last_Viewed_Content__pc: string;
    ShowpadForSF__Showpad_Last_Viewed_Content__pr: ShowpadForSF__Showpad_Content__c;
    ShowpadForSF__Showpad_View_Count__pc: number;
    Sic: string;
    SicDesc: string;
    /**
     * <h3><b>SimPlant Category</b></h3>
     * <p>Is it set by the Rep or Calculated based on Actual Sales?  Do you mean by SurgiGuide as Simplant product or all surgical guides including competitors. Wouldn’t be more accurate to have it on the contact level?</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Experienced/Large Volume  SurgiGuide user</code></td><td>Experienced/Large Volume  SurgiGuide user</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Intermediate  SugiGuide user</code></td><td>Intermediate  SugiGuide user</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Non-SurgiGuide Usees</code></td><td>Non-SurgiGuide Usees</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Starting SurgiGuide user</code></td><td>Starting SurgiGuide user</td><td nowrap>true</td></tr>
     * </table>
     */
    SimPlant_Category__c: string;
    /**
     * <h3><b>SIMPLANT Key Account (US)</b></h3>
     * <p>For SIMPLANT Specialists (North America) - to identify Key Accounts related to SIMPLANT</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SIMPLANT_Key_Account__c: boolean;
    /**
     * <h3><b>SIMPLANT Segmentation N/A</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Simplant_Segmentation_NA__c: boolean;
    SIMPLANT_User__pc: boolean;
    /**
     * <h3><b>Single Room Rate</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Single_Room_Rate__c: number;
    Sirona_Lead_Verification_Date__pc: Date;
    Site: string;
    /**
     * The reciprocal relationship for {@link SnapshotImplantsWonLoss__c.Account__c}.
     */
    Snapshot_Implants_WonLoss__r: SnapshotImplantsWonLoss__c[];
    SobjectLookupValue: AIInsightValue;
    /**
     * <h3><b>Sold ATL Abut&#39;s L12M (DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DD_Abuts_Atlantis_DI__c -  TQ_CY_1_TD_D_DD_Abuts_Atlantis_DI__c) +  TQ_CY_D_DD_Abuts_Atlantis_DI__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_ATL_Abut_s_L12M_DI_Systems__c: number;
    /**
     * <h3><b>Sold ATL Suprast Flag</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TQ_CY_D_DD_IsusProsth_Isus__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TQ_CY_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c / TQ_CY_1_TD_D_DD_IsusProsth_Isus__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c / TQ_CY_1_TD_D_DD_IsusProsth_Isus__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000zblq&quot;, &quot;Yellow Flag&quot;), IF((TQ_CY_D_DD_IsusProsth_Isus__c / TQ_CY_1_TD_D_DD_IsusProsth_Isus__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), null ) ) ) ) ) ) ) ) ) ) ) ) &#47;&#42;added this &#39;/servlet&#39; at the begining of all links to fix this issue https://dentsplysirona.my.salesforce.com/5000J00001GHkaE&#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_ATL_ISUS_Flag__c: string;
    /**
     * <h3><b>Sold ATL Suprast Flag Tag</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TQ_CY_D_DD_IsusProsth_Isus__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TQ_CY_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DD_IsusProsth_Isus__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c / TQ_CY_1_TD_D_DD_IsusProsth_Isus__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),&quot;a. Green Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c / TQ_CY_1_TD_D_DD_IsusProsth_Isus__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;b. Yellow Flag&quot;, IF((TQ_CY_D_DD_IsusProsth_Isus__c / TQ_CY_1_TD_D_DD_IsusProsth_Isus__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;c. Red Flag&quot;, null ) ) ) ) ) ) ) ) ) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_ATL_ISUS_Flag_Tag__c: string;
    /**
     * <h3><b>Sold ATL Suprast L12M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DD_IsusProsth_Isus__c - TQ_CY_1_TD_D_DD_IsusProsth_Isus__c) + TQ_CY_D_DD_IsusProsth_Isus__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_ATL_ISUS_L12M__c: number;
    /**
     * <h3><b>Sold Atlantis Abut&#39;s CY vs LYTD</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TQ_CY_D_DD_Abuts_Atlantis__c  -  TQ_CY_1_TD_D_DD_Abuts_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Atlantis_Abut_CY_vs_LYTD__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s Flag</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TQ_CY_D_DD_Abuts_Atlantis__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_Abuts_Atlantis__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TQ_CY_D_DD_Abuts_Atlantis__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DD_Abuts_Atlantis__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DD_Abuts_Atlantis__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_Abuts_Atlantis__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c=0 &amp;&amp; TQ_CY_1_TD_D_DD_Abuts_Atlantis__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DD_Abuts_Atlantis__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DD_Abuts_Atlantis__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c / TQ_CY_1_TD_D_DD_Abuts_Atlantis__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c / TQ_CY_1_TD_D_DD_Abuts_Atlantis__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000zblq&quot;, &quot;Yellow Flag&quot;), IF((TQ_CY_D_DD_Abuts_Atlantis__c / TQ_CY_1_TD_D_DD_Abuts_Atlantis__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), null ) ) ) ) ) ) ) ) ) ) ) ) &#47;&#42;added this &#39;/servlet&#39; at the begining of all links to fix this issue https://dentsplysirona.my.salesforce.com/5000J00001GHkaE&#42;&#47;</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Atlantis_Abut_Flag__c: string;
    /**
     * <h3><b>Sold ATL Abut&#39;s L12M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DD_Abuts_Atlantis__c -  TQ_CY_1_TD_D_DD_Abuts_Atlantis__c) +  TQ_CY_D_DD_Abuts_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Atlantis_Abut_s_L12M__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s L13-24M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_2_D_DD_Abuts_Atlantis__c - TQ_CY_2_TD_D_DD_Abuts_Atlantis__c) + TQ_CY_1_TD_D_DD_Abuts_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Atlantis_Abut_s_L13_24M__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s LY &amp; CY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TQ_CY_D_DD_Abuts_Atlantis__c + TQ_CY_1_D_DD_Abuts_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Atlantis_Abut_s_LY_CY__c: number;
    /**
     * <h3><b>Sold Guides L12M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TQ_CY_D_DD_Guides_Simplant__c + (TQ_CY_1_D_DD_Guides_Simplant__c - TQ_CY_1_TD_D_DD_Guides_Simplant__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Guides_L12M__c: number;
    /**
     * <h3><b>Sold Implant Delta L12M - L13-24M</b></h3>
     * <p>Used to set the Implant Deviation comparing L12M with L13-24. Used for a specific report requested by Matthias Kühner. Contact Pia before deleting.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sold_Implants_L12M__c - Sold_Implants_L13_24M__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implant_L12M_L13_24__c: number;
    /**
     * <h3><b>Sold Implants CM</b></h3>
     * <p>Updated by cloud job AggregateRedFlag.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_CM__c: number;
    /**
     * <h3><b>Sold Implants Flag</b></h3>
     * <p>If RED: Sold Implants CY compared with LY To Date is &lt;80%
     * If YELLOW: Sold Implants CY compared with LY To Date is &gt;80%
     * If GREEN: Sold Implants CY compared with LY To Date is &gt;100%</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TQ_CY_D_DI_Implants_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TQ_CY_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c / TQ_CY_1_TD_D_DI_Implants_AllBrands__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c / TQ_CY_1_TD_D_DI_Implants_AllBrands__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000zblq&quot;, &quot;Yellow Flag&quot;), IF((TQ_CY_D_DI_Implants_AllBrands__c / TQ_CY_1_TD_D_DI_Implants_AllBrands__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), null ) ) ) ) ) ) ) ) ) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_Flag__c: string;
    /**
     * <h3><b>Sold Implants Flag Tag</b></h3>
     * <p>If RED: Sold Implants CY compared with LY To Date is &lt;80%
     * If YELLOW: Sold Implants CY compared with LY To Date is &gt;80%
     * If GREEN: Sold Implants CY compared with LY To Date is &gt;100%</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TQ_CY_D_DI_Implants_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TQ_CY_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DI_Implants_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c / TQ_CY_1_TD_D_DI_Implants_AllBrands__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),&quot;a. Green Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c / TQ_CY_1_TD_D_DI_Implants_AllBrands__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;b. Yellow Flag&quot;, IF((TQ_CY_D_DI_Implants_AllBrands__c / TQ_CY_1_TD_D_DI_Implants_AllBrands__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;c. Red Flag&quot;, null ) ) ) ) ) ) ) ) ) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_Flag_Tag__c: string;
    /**
     * <h3><b>Sold Implants ILY%</b></h3>
     * <p>Shows an index comparing Sold Implants CY and LY To Date.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( TQ_CY_D_DI_Implants_AllBrands__c  &lt; 0, TQ_CY_1_TD_D_DI_Implants_AllBrands__c  &lt;= 0),null, TQ_CY_D_DI_Implants_AllBrands__c / TQ_CY_1_TD_D_DI_Implants_AllBrands__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_ILY__c: number;
    /**
     * <h3><b>Sold Implants IR12M%</b></h3>
     * <p>Shows an index comparing Sold Implants L12M and L13-24M.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( Sold_Implants_L12M__c &lt; 0,  Sold_Implants_L13_24M__c &lt;= 0),null, Sold_Implants_L12M__c /  Sold_Implants_L13_24M__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_IR12M__c: number;
    /**
     * <h3><b>Sold Implants L12M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DI_Implants_AllBrands__c - TQ_CY_1_TD_D_DI_Implants_AllBrands__c) + TQ_CY_D_DI_Implants_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L12M__c: number;
    /**
     * <h3><b>Sold Implants L12M (Ankylos)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DI_Implants_Ankylos__c - TQ_CY_1_TD_D_DI_Implants_Ankylos__c) + TQ_CY_D_DI_Implants_Ankylos__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L12M_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants L12M (ATIS)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DI_Implants_AstraTech__c - TQ_CY_1_TD_D_DI_Implants_AstraTech__c) + TQ_CY_D_DI_Implants_AstraTech__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L12M_ATIS__c: number;
    /**
     * <h3><b>Sold Implants L12M (XiVE)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DI_Implants_Xive__c - TQ_CY_1_TD_D_DI_Implants_Xive__c) + TQ_CY_D_DI_Implants_Xive__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L12M_XiVE__c: number;
    /**
     * <h3><b>Sold Implants L13-24M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_2_D_DI_Implants_AllBrands__c - TQ_CY_2_TD_D_DI_Implants_AllBrands__c) + TQ_CY_1_TD_D_DI_Implants_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L13_24M__c: number;
    /**
     * <h3><b>Sold Implants L13-24M (Ankylos)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_2_D_DI_Implants_Ankylos__c - TQ_CY_2_TD_D_DI_Implants_Ankylos__c) + TQ_CY_1_TD_D_DI_Implants_Ankylos__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L13_24M_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants L13-24M (ATIS)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_2_D_DI_Implants_AstraTech__c - TQ_CY_2_TD_D_DI_Implants_AstraTech__c) + TQ_CY_1_TD_D_DI_Implants_AstraTech__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L13_24M_ATIS__c: number;
    /**
     * <h3><b>Sold Implants L13-24M (XiVE)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_2_D_DI_Implants_Xive__c - TQ_CY_2_TD_D_DI_Implants_Xive__c) + TQ_CY_1_TD_D_DI_Implants_Xive__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_L13_24M_XiVE__c: number;
    /**
     * <h3><b>Sold Implants LY &amp; CY</b></h3>
     * <p>Summarizes sold implants from CY and LY. Used on Opportunities.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TQ_CY_1_D_DI_Implants_AllBrands__c + TQ_CY_D_DI_Implants_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_LY_CY__c: number;
    /**
     * <h3><b>Sold Implants R12M Flag Tag</b></h3>
     * <p>If RED: Sold Implants L12M compared with L13-24M is &lt;80%
     * If YELLOW: Sold Implants L12M compared with L13-24M is &gt;80%
     * If GREEN: Sold Implants L12M compared with L13-24M is &gt;100%</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((Sold_Implants_L12M__c=0 &amp;&amp; Sold_Implants_L13_24M__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((Sold_Implants_L12M__c&lt;0 &amp;&amp;  Sold_Implants_L13_24M__c &lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((Sold_Implants_L12M__c&lt;0 &amp;&amp; Sold_Implants_L13_24M__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((Sold_Implants_L12M__c=0 &amp;&amp; Sold_Implants_L13_24M__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;c. Red Flag&quot;, IF((Sold_Implants_L12M__c=0 &amp;&amp; Sold_Implants_L13_24M__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((Sold_Implants_L12M__c&gt;0 &amp;&amp; Sold_Implants_L13_24M__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((Sold_Implants_L12M__c&gt;0 &amp;&amp; Sold_Implants_L13_24M__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , &quot;a. Green Flag&quot;, IF((Sold_Implants_L12M__c / Sold_Implants_L13_24M__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),&quot;a. Green Flag&quot;, IF((Sold_Implants_L12M__c / Sold_Implants_L13_24M__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;b. Yellow Flag&quot;, IF((Sold_Implants_L12M__c / Sold_Implants_L13_24M__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), &quot;c. Red Flag&quot;, null ) ) ) ) ) ) ) ) ) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Implants_R12M_Flag_Tag__c: string;
    /**
     * <h3><b>Sold Stock Abut&#39;s Flag</b></h3>
     * <p>If RED: Sold Stock Abuts CY To Date compared with LY To Date is &lt;80%
     * If YELLOW: Sold Stock Abuts CY To Date compared with LY To Date is &gt;80%
     * If GREEN: Sold Stock Abuts CY To Date compared with LY To Date is &gt;100%</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF((ISPICKVAL(Status__c, &quot;10&quot;)) , null, IF((ISPICKVAL(Status__c, &quot;90&quot;)) , null, IF((TQ_CY_D_DI_StockAbuts_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , null, IF((TQ_CY_D_DI_StockAbuts_AllBrands__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c&lt;0 &amp;&amp; TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c&gt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c=0 &amp;&amp; TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c=0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c&gt;0 &amp;&amp; TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c&lt;0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;)) , IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c / TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c) &gt; 1.0 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;),IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK1&quot;,&quot;Green Flag.&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c / TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c) &gt; 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000zblq&quot;, &quot;Yellow Flag&quot;), IF((TQ_CY_D_DI_StockAbuts_AllBrands__c / TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c ) &lt;= 0.8 &amp;&amp; ISPICKVAL(Status__c, &quot;20&quot;), IMAGE(&quot;/servlet/servlet.FileDownload?file=01520000000yzK6&quot;, &quot;Red Flag&quot;), null ) ) ) ) ) ) ) ) ) ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Stock_Abut_s_Flag__c: string;
    /**
     * <h3><b>Sold Stock Abut&#39;s ILY%</b></h3>
     * <p>Shows an index of Sold Stock Abutments comparing CY with LYTD.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR(  TQ_CY_D_DI_StockAbuts_AllBrands__c  &lt; 0,  TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c  &lt;= 0),null, TQ_CY_D_DI_StockAbuts_AllBrands__c/ TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Stock_Abut_s_ILY__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s L12M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_1_D_DI_StockAbuts_AllBrands__c - TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c) + TQ_CY_D_DI_StockAbuts_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Stock_Abut_s_L12M__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s L13-24M</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">(TQ_CY_2_D_DI_StockAbuts_AllBrands__c - TQ_CY_2_TD_D_DI_StockAbuts_AllBrands__c) + TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Stock_Abut_s_L13_24M__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LY &amp; CY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TQ_CY_D_DI_StockAbuts_AllBrands__c + TQ_CY_1_D_DI_StockAbuts_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Sold_Stock_Abut_s_LY_CY__c: number;
    /**
     * The reciprocal relationship for {@link Source_Record__c.CIM_Account__c}.
     */
    Source_Records__r: Source_Record__c[];
    /**
     * <h3><b>SourceSystemName</b></h3>
     * <p>Source System Name</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SourceSystemName__c: string;
    /**
     * <h3><b>SP Guides Potential / Year</b></h3>
     * <p>Possible number of Simplant guides per year. The hidden field &quot;Volume&quot; (high, Medium, Low, No usage) depends on this number. High=&gt;15 , Medium=5-15 , Low &lt;5</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(6,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    SP_Guides_Potential_Year__c: number;
    Speaker__pc: boolean;
    Speaker_Biography__pc: string;
    Speaker_Email__pc: string;
    /**
     * The reciprocal relationship for {@link KOL_Contract__c.Contact__c}.
     */
    Speaker_KOL_Contracts__r: KOL_Contract__c[];
    /**
     * The reciprocal relationship for {@link Lecture__c.Speaker__c}.
     */
    Speaker_Lectures__r: Lecture__c[];
    /**
     * The reciprocal relationship for {@link Engagement__c.Hotel__c}.
     */
    Speaker_Moderator_Requests__r: Engagement__c[];
    Speaker_Phone__pc: string;
    Speaker_Type__pc: string;
    Special_Information__pc: string;
    Specialty__pc: string;
    /**
     * <h3><b>Specialty (Implants)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lab</code></td><td>Lab</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Restorative</code></td><td>Restorative</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Surgery</code></td><td>Surgery</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Surgery & Restorative</code></td><td>Surgery &amp; Restorative</td><td nowrap>true</td></tr>
     * </table>
     */
    Specialty_Dental__c: string;
    Spoken_Languages__pc: string;
    /**
     * The reciprocal relationship for {@link SSIS_TrackWise__c.Default_Account__c}.
     */
    SSIS_TrackWise__r: SSIS_TrackWise__c[];
    Standard_Honorarium_1_2_Day__pc: number;
    Standard_Honorarium_1_4_Day__pc: number;
    Standard_Honorarium_Full_Day__pc: number;
    /**
     * <h3><b>Start Date of Active Contract</b></h3>
     * <p>The Start Date of the Active Purhasing Contract</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Start_Date_of_Active_Contract__c: Date;
    /**
     * The reciprocal relationship for {@link StartUpPractice__c.Account__c}.
     */
    Start_Up_Practices__r: StartUpPractice__c[];
    /**
     * <h3><b>StartingEvent Quantity Abutments</b></h3>
     * <p>Set by Apex to the type, date and quantity of the first event that occurred on the Account within the retrospective sales horizon.
     * Also set manually to previously calculated values from older solution when deploying solution.
     * Read by Apex as the type, date and quantity of the last event that occurred on the Account beyond the retrospective sales horizon.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    StartingEventQuantity_Abutments__c: number;
    /**
     * <h3><b>StartingEvent Quantity Implants</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    StartingEventQuantity_Implants__c: number;
    /**
     * <h3><b>StartingEventQuantity_ISUS</b></h3>
     * <p>Used in ISUS won Lost Logic</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    StartingEventQuantity_ISUS__c: number;
    /**
     * <h3><b>StartingEvent Type Abutments</b></h3>
     * <p>Set by Apex to the type, date and quantity of the first event that occurred on the Account within the retrospective sales horizon.
     * Also set manually to previously calculated values from older solution when deploying solution.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LostEvent</code></td><td>LostEvent</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NullEvent</code></td><td>NullEvent</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WonEvent</code></td><td>WonEvent</td><td nowrap>true</td></tr>
     * </table>
     */
    StartingEventType_Abutments__c: string;
    /**
     * <h3><b>StartingEvent Type Implants</b></h3>
     * <p>Set by Apex to the type, date and quantity of the first event that occurred on the Account within the retrospective sales horizon.
     * Also set manually to previously calculated values from older solution when deploying solution.
     * Read by Apex as the type, date and quantity of the last event that occurred on the Account beyond the retrospective sales horizon.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LostEvent</code></td><td>LostEvent</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NullEvent</code></td><td>NullEvent</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WonEvent</code></td><td>WonEvent</td><td nowrap>true</td></tr>
     * </table>
     */
    StartingEventType_Implants__c: string;
    /**
     * <h3><b>StartingEventType_ISUS</b></h3>
     * <p>Used in ISUS WON/LOST Logic</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">LostEvent</code></td><td>LostEvent</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NullEvent</code></td><td>NullEvent</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">WonEvent</code></td><td>WonEvent</td><td nowrap>true</td></tr>
     * </table>
     */
    StartingEventType_ISUS__c: string;
    /**
     * <h3><b>StartingEvent Year Month Abutments</b></h3>
     * <p>Set by Apex to the type, date and quantity of the first event that occurred on the Account within the retrospective sales horizon.
     * Also set manually to previously calculated values from older solution when deploying solution.
     * Read by Apex as the type, date and quantity of the last event that occurred on the Account beyond the retrospective sales horizon.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    StartingEventYearMonth_Abutments__c: Date;
    /**
     * <h3><b>StartingEvent Year Month Implants</b></h3>
     * <p>Set by Apex to the type, date and quantity of the first event that occurred on the Account within the retrospective sales horizon.
     * Also set manually to previously calculated values from older solution when deploying solution.
     * Read by Apex as the type, date and quantity of the last event that occurred on the Account beyond the retrospective sales horizon.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    StartingEventYearMonth_Implants__c: Date;
    /**
     * <h3><b>StartingEventYearMonth_ISUS</b></h3>
     * <p>Used in ISUS Won/Lost Logic</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    StartingEventYearMonth_ISUS__c: Date;
    /**
     * <h3><b>State</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF (  BillingState=&quot;&quot;,  ShippingState , BillingState)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    State__c: string;
    /**
     * <h3><b>Statistical Customer</b></h3>
     * <p>From the Field Statistical Customer in Movex. Used for instance to link Movex End Users to Clinics or Prescribers</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Statistical_Customer__c: string;
    /**
     * <h3><b>ERP Status</b></h3>
     * <p>Used in Integration.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">10</code></td><td>10</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">20</code></td><td>20</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">90</code></td><td>90</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Active</code></td><td>Active</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Duplicate</code></td><td>Duplicate</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Inactive</code></td><td>Inactive</td><td nowrap>true</td></tr>
     * </table>
     */
    Status__c: string;
    /**
     * <h3><b>Status Reason</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Active</code></td><td>Active</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Death</code></td><td>Death</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New</code></td><td>New</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Office Closure</code></td><td>Office Closure</td><td nowrap>true</td></tr>
     * </table>
     */
    Status_Reason__c: string;
    /**
     * <h3><b>ATL Abut Sold Last 10-40 Days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    STST_TOT_L10_40_D_DD_Abut_Atlantis__c: number;
    /**
     * <h3><b>ATL Abut Sold Last 30 Days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    STST_TOT_L30_D_DD_Abut_Atlantis__c: number;
    /**
     * <h3><b>ATL Abut Sold Last 31-120 Days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    STST_TOT_L31_120_D_DD_Abut_Atlantis__c: number;
    Study_Group_Organiser_D_JP__pc: boolean;
    /**
     * <h3><b>Specialty</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Air Force</code></td><td>Air Force</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Army</code></td><td>Army</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">B2B/Indirect</code></td><td>B2B/Indirect</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">B2C/Direct</code></td><td>B2C/Direct</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Branch</code></td><td>Branch</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bureau of Indian Affairs</code></td><td>Bureau of Indian Affairs</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Coast Guard</code></td><td>Coast Guard</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Community College</code></td><td>Community College</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Community Dental Health</code></td><td>Community Dental Health</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Competitor</code></td><td>Competitor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Corporate</code></td><td>Corporate</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Correctional Facility</code></td><td>Correctional Facility</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Country</code></td><td>Country</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Crown & Bridge Laboratory</code></td><td>Crown &amp; Bridge Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dealer Sell Out Data Region</code></td><td>Dealer Sell Out Data Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Association</code></td><td>Dental Association</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Clinic</code></td><td>Dental Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Laboratory</code></td><td>Dental Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Office</code></td><td>Dental Office</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental School</code></td><td>Dental School</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Specialist</code></td><td>Dental Specialist</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dental Technician School</code></td><td>Dental Technician School</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dentsply</code></td><td>Dentsply</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DentsplySirona</code></td><td>DentsplySirona</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Denture Clinic</code></td><td>Denture Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Denture Laboratory</code></td><td>Denture Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Denturists</code></td><td>Denturists</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Digital</code></td><td>Digital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Discontinued</code></td><td>Discontinued</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor</code></td><td>Distributor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Distributor branch office</code></td><td>Distributor branch office</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Division</code></td><td>Division</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Domestic</code></td><td>Domestic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Education Center</code></td><td>Education Center</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontic Resident</code></td><td>Endodontic Resident</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Endodontics</code></td><td>Endodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">End User</code></td><td>End User</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Esthetic</code></td><td>Esthetic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Events</code></td><td>Events</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Export</code></td><td>Export</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Federal Government</code></td><td>Federal Government</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Federal Prison</code></td><td>Federal Prison</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">First Letters of Zip/Postal Code</code></td><td>First Letters of Zip/Postal Code</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Fixed Products</code></td><td>Fixed Products</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Franchise</code></td><td>Franchise</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Free Goods</code></td><td>Free Goods</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Full Service</code></td><td>Full Service</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Full Service Dental Laboratory</code></td><td>Full Service Dental Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General</code></td><td>General</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General Hospital</code></td><td>General Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General Practice</code></td><td>General Practice</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">General University</code></td><td>General University</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Geographical</code></td><td>Geographical</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Geographical Area</code></td><td>Geographical Area</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Government</code></td><td>Government</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Government Hospital</code></td><td>Government Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Government - Local</code></td><td>Government - Local</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GP Undergrad</code></td><td>GP Undergrad</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Group</code></td><td>Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Headquarter</code></td><td>Headquarter</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Health Clinic</code></td><td>Health Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Home Address</code></td><td>Home Address</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hospital</code></td><td>Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hospital Laboratory</code></td><td>Hospital Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Huge/National Group/Corporation</code></td><td>Huge/National Group/Corporation</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hygiene School</code></td><td>Hygiene School</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implants</code></td><td>Implants</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Indian Health</code></td><td>Indian Health</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Industrial</code></td><td>Industrial</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Institution</code></td><td>Institution</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Insurance</code></td><td>Insurance</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Insurance Care Center</code></td><td>Insurance Care Center</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Intercompany</code></td><td>Intercompany</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Internal</code></td><td>Internal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Internal Sales Rep</code></td><td>Internal Sales Rep</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">International</code></td><td>International</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lab</code></td><td>Lab</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lab Group</code></td><td>Lab Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Large/Regional Group</code></td><td>Large/Regional Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Large Group</code></td><td>Large Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Local Government</code></td><td>Local Government</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Manufacturer</code></td><td>Manufacturer</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Marines</code></td><td>Marines</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medical</code></td><td>Medical</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mid Market Group</code></td><td>Mid Market Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mix of Fixed & Removable Products</code></td><td>Mix of Fixed &amp; Removable Products</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Multi-Dentist Clinic</code></td><td>Multi-Dentist Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Navy</code></td><td>Navy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NDC</code></td><td>NDC</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NDC group of distributors</code></td><td>NDC group of distributors</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New</code></td><td>New</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NHS Foundation/Community Trust</code></td><td>NHS Foundation/Community Trust</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Non Dental</code></td><td>Non Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Non-Federal Prison</code></td><td>Non-Federal Prison</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oral Maxillofacial Surgery</code></td><td>Oral Maxillofacial Surgery</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ortho (retainers & appliances)</code></td><td>Ortho (retainers &amp; appliances)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Orthodontics</code></td><td>Orthodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other Non-Dental</code></td><td>Other Non-Dental</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other Oral Treatments</code></td><td>Other Oral Treatments</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other SBU</code></td><td>Other SBU</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Partner</code></td><td>Partner</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Patient</code></td><td>Patient</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pedodontics</code></td><td>Pedodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Periodontics</code></td><td>Periodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pharmacy</code></td><td>Pharmacy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Preventive</code></td><td>Preventive</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prison</code></td><td>Prison</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prisons</code></td><td>Prisons</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Private Hospital</code></td><td>Private Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Private Insurance</code></td><td>Private Insurance</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Professor</code></td><td>Professor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthetic Laboratory</code></td><td>Prosthetic Laboratory</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Prosthodontics</code></td><td>Prosthodontics</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Public Health</code></td><td>Public Health</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Public Insurance</code></td><td>Public Insurance</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Purchasing Group</code></td><td>Purchasing Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pvt University</code></td><td>Pvt University</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">QC Sales Account</code></td><td>QC Sales Account</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Radiology</code></td><td>Radiology</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Region</code></td><td>Region</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Removable (full & partial dentures)</code></td><td>Removable (full &amp; partial dentures)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Removable Products</code></td><td>Removable Products</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Residential</code></td><td>Residential</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sales Rep</code></td><td>Sales Rep</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">School Other</code></td><td>School Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">School - Other</code></td><td>School - Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Single Dentist Clinic</code></td><td>Single Dentist Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Small/Local Group</code></td><td>Small/Local Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Small Group</code></td><td>Small Group</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Social Enterprise</code></td><td>Social Enterprise</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Specialist Clinic</code></td><td>Specialist Clinic</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Specialized Hospital</code></td><td>Specialized Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">State Government</code></td><td>State Government</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Stock/Sample Account</code></td><td>Stock/Sample Account</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Student</code></td><td>Student</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Teaching Hospital</code></td><td>Teaching Hospital</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Technical School</code></td><td>Technical School</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Tooth Counter</code></td><td>Tooth Counter</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Undergraduate</code></td><td>Undergraduate</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">University</code></td><td>University</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">University Department</code></td><td>University Department</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Vendor</code></td><td>Vendor</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Veterans Affairs</code></td><td>Veterans Affairs</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Veterinary</code></td><td>Veterinary</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Wholesaler</code></td><td>Wholesaler</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Zip/Postal Code</code></td><td>Zip/Postal Code</td><td nowrap>true</td></tr>
     * </table>
     */
    Sub_Account_Type__c: string;
    Sub_Contact_Type__pc: string;
    /**
     * The reciprocal relationship for {@link SBQQ__Subscription__c.SBQQ__Account__c}.
     */
    Subscriptions__r: SBQQ__Subscription__c[];
    /**
     * The reciprocal relationship for {@link SubscriptionPlan__c.Account__c}.
     */
    Subscriptions_Plans__r: SubscriptionPlan__c[];
    Suffix__pc: string;
    /**
     * <h3><b>Support Level</b></h3>
     * <p>Used to define how we need to take care of the customer - if the customer requires extra attention or similar. Requested by Japan as part of their Lightning Project - mainly used for Equipment</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">A</code></td><td>A</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">B</code></td><td>B</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">C</code></td><td>C</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">D</code></td><td>D</td><td nowrap>true</td></tr>
     * </table>
     */
    Support_Level__c: string;
    /**
     * <h3><b>Suresmile Advanced Platform</b></h3>
     * <p>Information collected from Customer Interfaces table in AX (related table to Accounts) - set to true if an active record exists as Suresmile Advanced</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SuresmileAdvancedPlatform__c: boolean;
    /**
     * <h3><b>Suresmile Aligner Platform</b></h3>
     * <p>Information collected from Customer Interfaces table in AX (related table to Accounts) - set to true if an active record exists as Suresmile Aligner</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SuresmileAlignerPlatform__c: boolean;
    SuresmileClassificationColor__pc: string;
    SuresmileClassificationDate__pc: Date;
    SuresmileClassificationSalesRep__pc: string;
    SuresmileClassificationSalesRep__pr: User;
    /**
     * <h3><b>Suresmile Ortho Platform</b></h3>
     * <p>Information collected from Customer Interfaces table in AX (related table to Accounts) - set to true if an active record exists as Suresmile Ortho</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    SuresmileOrthoPlatform__c: boolean;
    /**
     * The reciprocal relationship for {@link SwarmMember.RelatedRecordId}.
     */
    SwarmMembers: SwarmMember[];
    /**
     * The reciprocal relationship for {@link Swarm.RelatedRecordId}.
     */
    Swarms: Swarm[];
    Symbios_User__pc: boolean;
    SystemModstamp: string;
    /**
     * The reciprocal relationship for {@link T_E_Attachements__c.Contact__c}.
     */
    T_E_Attachments__r: T_E_Attachements__c[];
    Tags: AccountTag[];
    Target: AIRecordInsight;
    Target_Type__pc: string;
    TargetObject: PendingServiceRoutingInteractionInfo;
    TaskRelations: TaskRelation[];
    /**
     * The reciprocal relationship for {@link Task.WhatId}.
     */
    Tasks: Task[];
    /**
     * The reciprocal relationship for {@link SBQQ__TaxExemptionCertificate__c.SBQQ__Account__c}.
     */
    Tax_Exemption_Certificates__r: SBQQ__TaxExemptionCertificate__c[];
    Territory2ObjectExclusions: Territory2ObjectExclusion[];
    /**
     * <h3><b>ETM2 Assigned Users</b></h3>
     * <p>Semicolon-separated list of all ERP User IDs associated with this account through territory assignment.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TerritoryUsers__c: string;
    TerritoryUsers__pc: string;
    /**
     * <h3><b>Country field</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    testInCountry1__Country_field__c: string;
    testInCountry1__Country_field__pc: string;
    TickerSymbol: string;
    Title_AT__pc: string;
    Title_BeNeLux__pc: string;
    /**
     * The reciprocal relationship for {@link ToothCabinetProduct__c.Account__c}.
     */
    Tooth_Cabinet_Products__r: ToothCabinetProduct__c[];
    /**
     * The reciprocal relationship for {@link ToothCabinet__c.Account__c}.
     */
    Tooth_Cabinets__r: ToothCabinet__c[];
    /**
     * The reciprocal relationship for {@link ToothCabinet__c.Dealer__c}.
     */
    Tooth_CabinetsDelaer__r: ToothCabinet__c[];
    TopicAssignments: TopicAssignment[];
    /**
     * <h3><b>Total Sales CY, LY, LY-1, LY-2</b></h3>
     * <p>Total Sales for all product groups CY, LY, LY-1 and LY-2. DO NOT DELETE. USED IN SALES DIFF REPORTS. CHECK WITH PIA FIRST.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_3_D_AllPLs_AllPCs_AllBrands__c + TS_CY_2_D_AllPLs_AllPCs_AllBrands__c + TS_CY_1_D_AllPLs_AllPCs_AllBrands__c + TS_CY_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Sales_All_Years__c: number;
    /**
     * <h3><b>Total Sales CY</b></h3>
     * <p>Total Sales CY for Dental</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Sales_CY__c: number;
    /**
     * <h3><b>Total Sales LY</b></h3>
     * <p>Total Sales LY for all product areas</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_1_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Sales_LY__c: number;
    /**
     * <h3><b>Total Sales LYTD</b></h3>
     * <p>Total Sales LYTD for Dental products</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Total_Sales_LYTD__c: number;
    /**
     * <h3><b>Sales LY (ATL) CURRENCY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_1_D_DD_AllPCs_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_1_D_ATL_CURRENCY__c: number;
    /**
     * <h3><b>Sales LY CURRENCY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_1_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_1_D_CURRENCY__c: number;
    /**
     * <h3><b>Sales LY EUR</b></h3>
     * <p>For analysis only</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISPICKVAL(CurrencyIsoCode, &quot;EUR&quot;),TS_CY_1_D_AllPLs_AllPCs_AllBrands__c, CASE( LEFT( Movex__c ,2), &quot;AU&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.165714*0.10725949), &quot;CA&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.154285*0.10725949), &quot;CH&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.148571*0.10725949), &quot;DK&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.731428*0.107259491), &quot;GB&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.077104*0.10725949), &quot;JP&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/13.142850*0.10725949), &quot;NO&quot;, (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.845714*0.10725949), &quot;NZ&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.202716*0.10725949), &quot;PL&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.407142*0.10725949), &quot;SE&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/1*0.10725949), &quot;US&quot; , (TS_CY_1_D_AllPLs_AllPCs_AllBrands__c/0.142857*0.10725949), 0))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_1_D_EUR__c: number;
    /**
     * <h3><b>Sales 2020 (ATL) CURRENCY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_2_D_DD_AllPCs_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_2_D_ATL_CURRENCY__c: number;
    /**
     * <h3><b>Sales 2020 CURRENCY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_2_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_2_D_CURRENCY__c: number;
    /**
     * <h3><b>Sales 2020 USD</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( LEFT( Movex__c ,2), &quot;AT&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;AU&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.165714*0.142857), &quot;BE&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;CA&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.154285*0.142857), &quot;CH&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.148571*0.142857), &quot;DE&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;DK&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.731428*0.142857), &quot;ES&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;FI&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;FR&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;GB&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.087143*0.142857), &quot;IT&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;JP&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/13.142850*0.142857), &quot;LU&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;NL&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;NO&quot;, (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.845714*0.142857), &quot;NZ&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.202716*0.142857), &quot;PL&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.407142*0.142857), &quot;PT&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/0.098571*0.142857), &quot;SE&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c/1*0.142857), &quot;US&quot; , (TS_CY_2_D_AllPLs_AllPCs_AllBrands__c), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_2_D_USD__c: number;
    /**
     * <h3><b>Sales 2019 (ATL) CURRENCY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_3_D_DD_AllPCs_Atlantis__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_3_D_ATL_CURRENCY__c: number;
    /**
     * <h3><b>Sales 2019 CURRENCY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TS_CY_3_D_AllPLs_AllPCs_AllBrands__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_3_D_CURRENCY__c: number;
    /**
     * <h3><b>Sales CY USD</b></h3>
     * <p>2012 budget rate</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( LEFT( Movex__c ,2), &quot;AT&quot; , ( TS_CY_D_AllPLs_AllPCs_AllBrands__c *9.095938/6.672000), &quot;AU&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*6.764074/6.672000), &quot;BE&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;CA&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*6.532850/6.672000), &quot;CH&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*7.365051/6.672000), &quot;DE&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;DK&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*1.222179/6.672000), &quot;ES&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;FI&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;FR&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;GB&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*10.623158/6.6720), &quot;IT&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;JP&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*0.086185/6.672000), &quot;LU&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;NL&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;NO&quot;, (TS_CY_D_AllPLs_AllPCs_AllBrands__c*1.174793/6.672000), &quot;NZ&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c/0.202716*0.142857), &quot;PL&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*2.056403/6.672000), &quot;PT&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*9.095938/6.672000), &quot;SE&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c*1/6.672000), &quot;US&quot; , (TS_CY_D_AllPLs_AllPCs_AllBrands__c), 0)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TotalSales_CY_D_USD__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s LY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DD_Abuts_Atlantis__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s LY (Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DD_Abuts_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s LY (DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DD_Abuts_Atlantis_DI__c: number;
    /**
     * <h3><b>Sold SP Guides LY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sold ATL Suprast LY</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(12,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DD_IsusProsth_Isus__c: number;
    /**
     * <h3><b>Sold Implants LY</b></h3>
     * <p>This field is a rollup summary field and used by many reports and included in many layouts</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_Implants_AllBrands__c: number;
    /**
     * <h3><b>Sold Implants LY (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_Implants_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants LY (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_Implants_AstraTech__c: number;
    /**
     * <h3><b>Sold Implants LY (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_Implants_Xive__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LY (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_StockAbuts_Ankylos__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LY (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_StockAbuts_AstraTech__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LY (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_D_DI_StockAbuts_Xive__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s LYTD</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DD_Abuts_Atlantis__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s LYTD (Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DD_Abuts_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s LYTD (DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DD_Abuts_Atlantis_DI__c: number;
    /**
     * <h3><b>Sold SP Guides LYTD</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sold ATL Suprast LYTD</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(12,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DD_IsusProsth_Isus__c: number;
    /**
     * <h3><b>Sold Implants LYTD</b></h3>
     * <p>Updated nightly by batch. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_Implants_AllBrands__c: number;
    /**
     * <h3><b>Sold Implants LYTD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_Implants_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants LYTD (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_Implants_AstraTech__c: number;
    /**
     * <h3><b>Sold Implants LYTD (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_Implants_Xive__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LYTD</b></h3>
     * <p>Updated nightly by batch. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LYTD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_StockAbuts_Ankylos__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LYTD (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_StockAbuts_AstraTech__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s LYTD (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_1_TD_D_DI_StockAbuts_Xive__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2020</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DD_Abuts_Atlantis__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2020 (Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DD_Abuts_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2020 (DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DD_Abuts_Atlantis_DI__c: number;
    /**
     * <h3><b>Sold SP Guides 2020</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sold ATL Suprast 2020</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DD_IsusProsth_Isus__c: number;
    /**
     * <h3><b>Sold Implants 2020</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_Implants_AllBrands__c: number;
    /**
     * <h3><b>Sold Implants 2020 (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_Implants_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants 2020 (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_Implants_AstraTech__c: number;
    /**
     * <h3><b>Sold Implants 2020 (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_Implants_Xive__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s 2020</b></h3>
     * <p>To be updated by batch job nightly. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s 2020 (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_StockAbuts_Ankylos__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s 2020 (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_StockAbuts_AstraTech__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s 2020 (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_D_DI_StockAbuts_Xive__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2020TD</b></h3>
     * <p>Updated nightly by batch. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_TD_D_DD_Abuts_Atlantis__c: number;
    /**
     * <h3><b>Sold Implants 2020TD</b></h3>
     * <p>Updated nightly by batch. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_TD_D_DI_Implants_AllBrands__c: number;
    /**
     * <h3><b>Sold Implants 2020TD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_TD_D_DI_Implants_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants 2020TD (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_TD_D_DI_Implants_AstraTech__c: number;
    /**
     * <h3><b>Sold Implants 2020TD (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_TD_D_DI_Implants_Xive__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s 2020TD</b></h3>
     * <p>Update nightly by batch APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_TD_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s 2020TD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_2_TD_D_DI_StockAbuts_Ankylos__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2019</b></h3>
     * <p>Updated by batch nightly. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DD_Abuts_Atlantis__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2019 (Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DD_Abuts_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2019 (DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DD_Abuts_Atlantis_DI__c: number;
    /**
     * <h3><b>Sold ATL Suprast 2019</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DD_IsusProsth_Isus__c: number;
    /**
     * <h3><b>Sold Implants 2019</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DI_Implants_AllBrands__c: number;
    /**
     * <h3><b>Sold Implants 2019 (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DI_Implants_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants 2019 (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DI_Implants_AstraTech__c: number;
    /**
     * <h3><b>Sold Implants 2019 (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DI_Implants_Xive__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s 2019</b></h3>
     * <p>To be updated by batch job nightly. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s 2019TD (DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_TD_D_DD_Abuts_Atlantis_DI__c: number;
    /**
     * <h3><b>Sold Implants 2019TD</b></h3>
     * <p>Updated nightly by batch. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_TD_D_DI_Implants_AllBrands__c: number;
    /**
     * <h3><b>Sold Implants 2019TD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_TD_D_DI_Implants_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants 2019TD (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_TD_D_DI_Implants_AstraTech__c: number;
    /**
     * <h3><b>Sold Implants 2019TD (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_3_TD_D_DI_Implants_Xive__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s CY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DD_Abuts_Atlantis__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s CY (Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DD_Abuts_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sold ATL Abut&#39;s CY (DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DD_Abuts_Atlantis_DI__c: number;
    /**
     * <h3><b>Sold SP Guides CY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sold ATL Suprast CY</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(12,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DD_IsusProsth_Isus__c: number;
    /**
     * <h3><b>Sold Implants CY</b></h3>
     * <p>Updated by the Azure jobs</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_Implants_AllBrands__c: number;
    /**
     * <h3><b>Sold Implants CY (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_Implants_Ankylos__c: number;
    /**
     * <h3><b>Sold Implants CY (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_Implants_AstraTech__c: number;
    /**
     * <h3><b>Sold Implants CY (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_Implants_Xive__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s CY</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s CY (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_StockAbuts_Ankylos__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s CY (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_StockAbuts_AstraTech__c: number;
    /**
     * <h3><b>Sold Stock Abut&#39;s CY (XiVE)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TQ_CY_D_DI_StockAbuts_Xive__c: number;
    /**
     * The reciprocal relationship for {@link TrackWise__c.Account__c}.
     */
    TrackWise__r: TrackWise__c[];
    Travel_Day_Honorarium__pc: number;
    Treatment_Procedure_Knowledge__pc: string;
    /**
     * <h3><b>Sales LY (D)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_AllPLs_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales LY (DD)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DD_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales LY (ATL Abut)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DD_AllPCs_Atlantis__c: number;
    /**
     * <h3><b>Sales LY (ATL Abut Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DD_AllPCs_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sales LY (ATL Abut DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DD_AllPCs_Atlantis_DI__c: number;
    /**
     * <h3><b>Sales LY (ATL Suprast)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DD_AllPCs_Isus__c: number;
    /**
     * <h3><b>Sales LY (SIMPLANT)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DD_AllPCs_Simplant__c: number;
    /**
     * <h3><b>Sales LY (SP Guides)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sales LY (DI)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DI_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales LY (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DI_AllPCs_Ankylos__c: number;
    /**
     * <h3><b>Sales LY (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DI_AllPCs_AstraTech__c: number;
    /**
     * <h3><b>Sales LY (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DI_AllPCs_Xive__c: number;
    /**
     * <h3><b>Sales LY (Stock Abutments)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sales LY (DR)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_D_DR_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales LYTD (D)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_AllPLs_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales LYTD (DD)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DD_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales LYTD (ATL Abut)</b></h3>
     * <p>Total Atlantis Abutment sales (Business area code DD1 ).. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DD_AllPCs_Atlantis__c: number;
    /**
     * <h3><b>Sales LYTD (ATL Abut Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DD_AllPCs_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sales LYTD (ATL Abut DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DD_AllPCs_Atlantis_DI__c: number;
    /**
     * <h3><b>Sales LYTD (ATL Suprast)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DD_AllPCs_Isus__c: number;
    /**
     * <h3><b>Sales LYTD (SIMPLANT)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DD_AllPCs_Simplant__c: number;
    /**
     * <h3><b>Sales LYTD (SP Guides)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sales LYTD (DI)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DI_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales LYTD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DI_AllPCs_Ankylos__c: number;
    /**
     * <h3><b>Sales LYTD (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DI_AllPCs_AstraTech__c: number;
    /**
     * <h3><b>Sales LYTD (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DI_AllPCs_Xive__c: number;
    /**
     * <h3><b>Sales LYTD (DR)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_1_TD_D_DR_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2020 (D)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_AllPLs_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2020 (DD)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DD_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2020 (ATL Abut)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DD_AllPCs_Atlantis__c: number;
    /**
     * <h3><b>Sales 2020 (ATL Abut Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DD_AllPCs_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sales 2020 (ATL Abut DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DD_AllPCs_Atlantis_DI__c: number;
    /**
     * <h3><b>Sales 2020 (ATL Suprast)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DD_AllPCs_Isus__c: number;
    /**
     * <h3><b>Sales 2020 (SIMPLANT)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DD_AllPCs_Simplant__c: number;
    /**
     * <h3><b>Sales 2020 (SP Guides)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sales 2020 (DI)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DI_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2020 (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DI_AllPCs_Ankylos__c: number;
    /**
     * <h3><b>Sales 2020 (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DI_AllPCs_AstraTech__c: number;
    /**
     * <h3><b>Sales 2020 (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DI_AllPCs_Xive__c: number;
    /**
     * <h3><b>Sales 2020 (Stock Abutments)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sales 2020 (DR)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_D_DR_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2020TD (D)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_TD_D_AllPLs_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2020TD (ATL Abut)</b></h3>
     * <p>Total Atlantis Abutment sales (Business area code DD1 ).. APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_TD_D_DD_AllPCs_Atlantis__c: number;
    /**
     * <h3><b>Sales 2020TD (ATL Suprast)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_TD_D_DD_AllPs_Isus__c: number;
    /**
     * <h3><b>Sales 2020TD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_TD_D_DI_AllPCs_Ankylos__c: number;
    /**
     * <h3><b>Sales 2020TD (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_TD_D_DI_AllPCs_AstraTech__c: number;
    /**
     * <h3><b>Sales 2020TD (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_2_TD_D_DI_AllPCs_Xive__c: number;
    /**
     * <h3><b>Sales 2019 (D)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_AllPLs_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2019 (DD)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DD_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2019 (ATL Abut)</b></h3>
     * <p>Total Atlantis Abutment sales (Business area code DD1 ). APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DD_AllPCs_Atlantis__c: number;
    /**
     * <h3><b>Sales 2019 (ATL Suprast)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DD_AllPCs_Isus__c: number;
    /**
     * <h3><b>Sales 2019 (SIMPLANT)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DD_AllPCs_Simplant__c: number;
    /**
     * <h3><b>Sales 2019 (DI)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DI_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2019 (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DI_AllPCs_Ankylos__c: number;
    /**
     * <h3><b>Sales 2019 (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DI_AllPCs_AstraTech__c: number;
    /**
     * <h3><b>Sales 2019 (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_D_DI_AllPCs_Xive__c: number;
    /**
     * <h3><b>Sales 2019TD</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_TD_D_AllPLs_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales 2019TD (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_TD_D_DI_AllPCs_Ankylos__c: number;
    /**
     * <h3><b>Sales 2019TD (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_3_TD_D_DI_AllPCs_Xive__c: number;
    /**
     * <h3><b>Sales CY (D)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_AllPLs_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales CY  (DD)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DD_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales CY (ATL Abut)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DD_AllPCs_Atlantis__c: number;
    /**
     * <h3><b>Sales CY (ATL Abut Comp Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DD_AllPCs_Atlantis_Comp__c: number;
    /**
     * <h3><b>Sales CY (ATL Abut DI Systems)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DD_AllPCs_Atlantis_DI__c: number;
    /**
     * <h3><b>Sales CY (ATL Suprast)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DD_AllPCs_Isus__c: number;
    /**
     * <h3><b>Sales CY (SIMPLANT)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DD_AllPCs_Simplant__c: number;
    /**
     * <h3><b>Sales CY (SP Guides)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DD_Guides_Simplant__c: number;
    /**
     * <h3><b>Sales CY (DI)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DI_AllPCs_AllBrands__c: number;
    /**
     * <h3><b>Sales CY  (Ankylos)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DI_AllPCs_Ankylos__c: number;
    /**
     * <h3><b>Sales CY (ATIS)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DI_AllPCs_AstraTech__c: number;
    /**
     * <h3><b>Sales CY (XiVe)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DI_AllPCs_Xive__c: number;
    /**
     * <h3><b>Sales CY (Stock Abutments)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DI_StockAbuts_AllBrands__c: number;
    /**
     * <h3><b>Sales CY (DR)</b></h3>
     * <p>APEX field</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TS_CY_D_DR_AllPCs_AllBrands__c: number;
    TTT_UK_IE__pc: boolean;
    Type: string;
    /**
     * <h3><b>DST Setting</b></h3>
     * <p>This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link tz__DST_Setting__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__DST_Setting__c: string;
    tz__DST_Setting__pc: string;
    tz__DST_Setting__pr: tz__DST_Setting__c;
    /**
     * <h3><b>DST Setting</b></h3>
     * <p>This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link tz__DST_Setting__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__DST_Setting__r: tz__DST_Setting__c;
    /**
     * <h3><b>Local Time</b></h3>
     * <p>Shows the current local time for the Account in 24-hr format.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(tz__UTC_Offset_F__c), &quot;Unknown&quot;, MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 6, 2 ) &amp; &quot;/&quot; &amp; MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 9, 2 ) &amp; &quot;/&quot; &amp; LEFT( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 4 ) &amp; &quot; &quot; &amp; MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) &amp;&quot;:&quot;&amp; MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 15, 2 ) &amp; &quot; &quot; &amp; IF( $Setup.tz__lt_app_settings__c.tz__Abbreviation__c, tz__Timezone_F__c,&quot;&quot;) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Local_Time_24__c: string;
    tz__Local_Time_24__pc: string;
    /**
     * <h3><b>Local Time</b></h3>
     * <p>Shows the current local time (without date) for the Account in 24-hr format.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(tz__UTC_Offset_F__c), &quot;Unknown&quot;, MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) &amp;&quot;:&quot;&amp; MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 15, 2 ) &amp; &quot; &quot; &amp; IF( $Setup.tz__lt_app_settings__c.tz__Abbreviation__c, tz__Timezone_F__c,&quot;&quot;) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Local_Time_24_Short__c: string;
    tz__Local_Time_24_Short__pc: string;
    /**
     * <h3><b>Local Time</b></h3>
     * <p>Shows the current local time for the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(tz__UTC_Offset_F__c), &quot;Unknown&quot;, MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 6, 2 ) &amp; &quot;/&quot; &amp; MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 9, 2 ) &amp; &quot;/&quot; &amp; LEFT( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 4 ) &amp; &quot; &quot; &amp; TEXT( IF( OR( VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) = 0, VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) = 12 ), 12, VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) - IF( VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) &lt; 12, 0, 12 ) ) ) &amp;&quot;:&quot;&amp; MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 15, 2 ) &amp;&quot; &quot;&amp; IF( VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) &lt; 12, &quot;AM&quot;, &quot;PM&quot; ) &amp; &quot; &quot; &amp; IF( $Setup.tz__lt_app_settings__c.tz__Abbreviation__c, tz__Timezone_F__c,&quot;&quot;) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Local_Time__c: string;
    tz__Local_Time__pc: string;
    /**
     * <h3><b>Local Time</b></h3>
     * <p>Shows the current local time (without date) for the Account.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(tz__UTC_Offset_F__c), &quot;Unknown&quot;, TEXT( IF( OR( VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) = 0, VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) = 12 ), 12, VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) - IF( VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) &lt; 12, 0, 12 ) ) ) &amp;&quot;:&quot;&amp; MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 15, 2 ) &amp;&quot; &quot;&amp; IF( VALUE( MID( TEXT( NOW()+ tz__UTC_Offset_F__c /24 ), 12, 2 ) ) &lt; 12, &quot;AM&quot;, &quot;PM&quot; ) &amp; &quot; &quot; &amp; IF( $Setup.tz__lt_app_settings__c.tz__Abbreviation__c, tz__Timezone_F__c,&quot;&quot;) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Local_Time_Short__c: string;
    tz__Local_Time_Short__pc: string;
    /**
     * <h3><b>Timezone Standard</b></h3>
     * <p>Timezone abbreviation when DST is off (PST, EST, etc.). This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone__c: string;
    tz__Timezone__pc: string;
    /**
     * <h3><b>Timezone DST</b></h3>
     * <p>Timezone abbreviation when DST is on (PDT, EDT, etc.). This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone_DST__c: string;
    tz__Timezone_DST__pc: string;
    /**
     * <h3><b>Timezone DST (Full)</b></h3>
     * <p>Full timezone name when the DST is on. This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(40)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone_DST_Full__c: string;
    tz__Timezone_DST_Full__pc: string;
    /**
     * <h3><b>Timezone</b></h3>
     * <p>Current timezone abbreviation (PST, EST,etc..)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( tz__DST_Setting__r.tz__DST__c , tz__Timezone_DST__c, tz__Timezone__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone_F__c: string;
    tz__Timezone_F__pc: string;
    /**
     * <h3><b>Timezone Standard (Full)</b></h3>
     * <p>Full timezone name when the DST is off. This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(40)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone_Full__c: string;
    tz__Timezone_Full__pc: string;
    /**
     * <h3><b>Timezone (Full)</b></h3>
     * <p>Current timezone full name.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( tz__DST_Setting__r.tz__DST__c , tz__Timezone_DST_Full__c, tz__Timezone_Full__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone_Full_F__c: string;
    tz__Timezone_Full_F__pc: string;
    /**
     * <h3><b>Timezone (IANA)</b></h3>
     * <p>Timezone as defined by Internet Assigned Numbers Authority (IANA).</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(35)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone_IANA__c: string;
    tz__Timezone_IANA__pc: string;
    /**
     * <h3><b>Timezone SFDC</b></h3>
     * <p>Salesforce IANA timezone.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(35)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__Timezone_SFDC__c: string;
    tz__Timezone_SFDC__pc: string;
    /**
     * <h3><b>UTC Offset DST</b></h3>
     * <p>UTC Offset when the DST is on. This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__UTC_Offset_DST__c: number;
    tz__UTC_Offset_DST__pc: number;
    /**
     * <h3><b>UTC Offset</b></h3>
     * <p>Current UTC timezone offset.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( tz__DST_Setting__r.tz__DST__c , tz__UTC_Offset_DST__c , tz__UTF_Offset__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__UTC_Offset_F__c: number;
    tz__UTC_Offset_F__pc: number;
    /**
     * <h3><b>UTC Offset Standard</b></h3>
     * <p>UTC Offset when the DST is off. This is a hidden field and should not be added to the page layouts.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    tz__UTF_Offset__c: number;
    tz__UTF_Offset__pc: number;
    /**
     * <h3><b>User Country</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Algeria</code></td><td>Algeria</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Armenia</code></td><td>Armenia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Australia</code></td><td>Australia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Austria</code></td><td>Austria</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Azerbaijan</code></td><td>Azerbaijan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bahrain</code></td><td>Bahrain</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Belgium</code></td><td>Belgium</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Brazil</code></td><td>Brazil</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cameroun</code></td><td>Cameroun</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Canada</code></td><td>Canada</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Denmark</code></td><td>Denmark</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DEX</code></td><td>DEX</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Egypt</code></td><td>Egypt</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Estonia</code></td><td>Estonia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Finland</code></td><td>Finland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">France</code></td><td>France</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Georgia</code></td><td>Georgia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Germany</code></td><td>Germany</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Holland</code></td><td>Holland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Hong Kong</code></td><td>Hong Kong</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">HQ</code></td><td>HQ</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Iran</code></td><td>Iran</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Iraq</code></td><td>Iraq</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Italy</code></td><td>Italy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ivory Coast</code></td><td>Ivory Coast</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Jordan</code></td><td>Jordan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Kuwait</code></td><td>Kuwait</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Latvia</code></td><td>Latvia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lebanon</code></td><td>Lebanon</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Libya</code></td><td>Libya</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lithuania</code></td><td>Lithuania</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Luxembourg</code></td><td>Luxembourg</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Maldives</code></td><td>Maldives</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Mauritius</code></td><td>Mauritius</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Morocco</code></td><td>Morocco</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New Zealand</code></td><td>New Zealand</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Norway</code></td><td>Norway</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Oman</code></td><td>Oman</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Pakistan</code></td><td>Pakistan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Poland</code></td><td>Poland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Portugal</code></td><td>Portugal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Qatar</code></td><td>Qatar</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Saudi Arabia</code></td><td>Saudi Arabia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Senegal</code></td><td>Senegal</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Singapore</code></td><td>Singapore</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">South Africa</code></td><td>South Africa</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Spain</code></td><td>Spain</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sweden</code></td><td>Sweden</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Switzerland</code></td><td>Switzerland</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Taiwan</code></td><td>Taiwan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Tunisia</code></td><td>Tunisia</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Turkey</code></td><td>Turkey</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">UK</code></td><td>UK</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">United Arab Emirates</code></td><td>United Arab Emirates</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">USA</code></td><td>USA</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yemen</code></td><td>Yemen</td><td nowrap>true</td></tr>
     * </table>
     */
    User_Country__c: string;
    User_Country__pc: string;
    /**
     * <h3><b>User&#39;s Region</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(Owner.Region__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    User_s_Region__c: string;
    UserDefinedLabelAssignments: UserDefinedLabelAssignment[];
    Users: User[];
    /**
     * <h3><b>Order Value Delivered not invoiced</b></h3>
     * <p>The Order value not invoiced with the order status = 66 (Delivered not invoiced)</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Value_Delivered_not_invoiced__c: number;
    /**
     * <h3><b>VAT Number</b></h3>
     * <p>filled by CIM integration</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(32)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    VAT_Number__c: string;
    /**
     * <h3><b>VAT Registration No</b></h3>
     * <p>VRNO</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(32)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Vat_Registration_No__c: string;
    /**
     * The reciprocal relationship for {@link VideoCall.RelatedRecordId}.
     */
    VideoRelatedRecords: VideoCall[];
    VIP__pc: boolean;
    /**
     * <h3><b>Visited Last 12 months?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR( CFEs_Implants_Last_6__c &gt;0, CFEs_Implants_Last_7_12__c &gt;0), &quot;YES&quot;, &quot;NO&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Visiter_Last_12_months_D__c: string;
    /**
     * <h3><b>Volume (ATL Abut)</b></h3>
     * <p>Automatically updated by SFDC based on ATL Abut Potential / Year and the Volume definition for your country.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High Usage</code></td><td>High Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low Usage</code></td><td>Low Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium Usage</code></td><td>Medium Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Usage</code></td><td>No Usage</td><td nowrap>true</td></tr>
     * </table>
     */
    Volume_ATL_Abut__c: string;
    /**
     * <h3><b>Volume (ATL Suprast)</b></h3>
     * <p>Automatically updated by SFDC based on ISUS Connection Potential / Year and the Volume definition of your country.
     * * ISUS Connection Potential / Year = (ATL Abut Potential / Year X Average number of connections per bar).
     * Average connection in US is 5  the ROW is 3</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High Usage</code></td><td>High Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low Usage</code></td><td>Low Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium Usage</code></td><td>Medium Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Usage</code></td><td>No Usage</td><td nowrap>true</td></tr>
     * </table>
     */
    Volume_ATL_ISUS__c: string;
    /**
     * <h3><b>Volume (Implants)</b></h3>
     * <p>Automatically calculated based on Implants Potential / Year and Actual Sold implants in the last 12 months (L12M), refer to the training material for more details.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High Usage</code></td><td>High Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low Usage</code></td><td>Low Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium Usage</code></td><td>Medium Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Usage</code></td><td>No Usage</td><td nowrap>true</td></tr>
     * </table>
     */
    Volume_Implants__c: string;
    /**
     * <h3><b>Volume (SP Guides)</b></h3>
     * <p>Not to be shown on layoutAutomatically updated based on SP Guides Potential / Year.
     * High Usage: &gt;15 Guides/ yr
     * Medium Usage: 5-15 Guides/yr
     * Low Usage : 0-5 Guides/yr
     * If Sold Guides L12M &gt; SP Guides Potential/ Year, the system will copy the sold guides to the Potential field.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High Usage</code></td><td>High Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low Usage</code></td><td>Low Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium Usage</code></td><td>Medium Usage</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No Usage</code></td><td>No Usage</td><td nowrap>true</td></tr>
     * </table>
     */
    Volume_Simplant__c: string;
    /**
     * The reciprocal relationship for {@link SBQQ__WebQuote__c.SBQQ__Account__c}.
     */
    WebQuotes__r: SBQQ__WebQuote__c[];
    Website: string;
    What: EventChangeEvent;
    WhenCollected__pc: string;
    WhereCollected__pc: string;
    Who: EventChangeEvent;
    /**
     * <h3><b>Implants Win Type</b></h3>
     * <p>Use this field to state the &quot;Win Type&quot; of this Customer. If not considered a &quot;new&quot; customer, but merely a replacement for an already existing customer, please select &quot;Administrative Reason&quot;.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Administrative Reason</code></td><td>Administrative Reason</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Competitive conversion</code></td><td>Competitive conversion</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Existing DI user with long purchasing cycle</code></td><td>Existing DI user with long purchasing cycle</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Implantology starter</code></td><td>Implantology starter</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * </table>
     */
    Win_Type_D__c: string;
    /**
     * <h3><b>Won Implant Period</b></h3>
     * <p>Shows the period when the Account was won (IMPLANTS), The period is L12M, L13-24M or &quot;Older than 24 Months&quot;. if the field is blank, the Account is not yet won.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( ISBLANK(LastWonEventYearMonth_Implants__c) , null, IF(  TODAY()- LastWonEventYearMonth_Implants__c &lt; 365, &quot;L12M&quot;, IF(TODAY()- LastWonEventYearMonth_Implants__c  &gt;=  365  &amp;&amp; TODAY()- LastWonEventYearMonth_Implants__c  &lt; 730 , &quot;L13-24M&quot;, &quot;Older than 24 Months&quot;) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Won_Implant_Period__c: string;
    /**
     * <h3><b>Won/Lost Code</b></h3>
     * <p>If the customer is Won Current Year, it gets a &quot;1&quot; in this field. If it is Lost this year, it gets a &quot;-1&quot;. For analysis only, should not appear in any page layout.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE( WonLostStatus_Implants_EndField__c, &quot;WON&quot;,1, &quot;REWON&quot;,1, &quot;LOST&quot;,-1, 0 )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Won_Lost_Code__c: number;
    /**
     * <h3><b>WonLostDump_Abutments</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    WonLostDump_Abutments__c: string;
    /**
     * <h3><b>WonLostDump_Implants</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(33768)</td></tr>
     * </table>
     */
    WonLostDump_Implants__c: string;
    /**
     * <h3><b>WonLostDump_ISUS</b></h3>
     * <p>To dump Apex calculation</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    WonLostDump_ISUS__c: string;
    /**
     * <h3><b>WonLostStatus_Abutments</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostStatus_Abutments__c: string;
    /**
     * <h3><b>ATL Abut Won/Lost Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_Abutments__c, &quot;Null&quot;, &quot;&quot;, &quot;Won&quot;, &quot;WON&quot;, &quot;Rewon&quot;, &quot;REWON&quot;, &quot;Lost&quot;, &quot;LOST&quot;, &quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostStatus_Abutments_EndField__c: string;
    /**
     * <h3><b>WonLostStatus_Implants</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostStatus_Implants__c: string;
    /**
     * <h3><b>Implants Won/Lost Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">&#47;&#42;CASE ( WonLostStatus_Implants__c, &quot;NULL&quot;, &quot;&quot;, &quot;WON&quot;, &quot;WON&quot;, &quot;REWON&quot;, &quot;REWON&quot;, &quot;LOST&quot;, &quot;LOST&quot;, &quot;&quot;)&#42;&#47; CASE ( WonLostStatus_Implants__c, &quot;Null&quot;, &quot;&quot;, &quot;Won&quot;, &quot;WON&quot;, &quot;Rewon&quot;, &quot;REWON&quot;, &quot;Lost&quot;, &quot;LOST&quot;, &quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostStatus_Implants_EndField__c: string;
    /**
     * <h3><b>WonLostStatus_ISUS</b></h3>
     * <p>Possible values : &quot;Blank&quot;, WON, REWON, LOST
     * Status re/calculation is done at the end of each month.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostStatus_ISUS__c: string;
    /**
     * <h3><b>ATL Suprast Won/Lost Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE ( WonLostStatus_ISUS__c, &quot;Null&quot;, &quot;&quot;, &quot;Won&quot;, &quot;WON&quot;, &quot;Rewon&quot;, &quot;REWON&quot;, &quot;Lost&quot;, &quot;LOST&quot;, &quot;&quot;)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostStatus_ISUS_EndField__c: string;
    /**
     * <h3><b>WonLostStatus_Simplant</b></h3>
     * <p>Possible values : &quot;Blank&quot;, WON, REWON, LOST
     * Status re/calculation is done at the end of each month.</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(18)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    WonLostStatus_Simplant__c: string;
    /**
     * The reciprocal relationship for {@link WorkflowProfiling__c.Account__c}.
     */
    Workflows_Profiling__r: WorkflowProfiling__c[];
    /**
     * The reciprocal relationship for {@link AgentWork.WorkItemId}.
     */
    WorkItem: AgentWork;
    WorkOrders: WorkOrder[];
    World_Congress_2012__pc: boolean;
    /**
     * <h3><b>%Est ATL Abut Growth</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR(TS_CY_1_D_DD_AllPCs_Atlantis__c = 0, Est_ATL_Sales_CY__c = 0) , 0, (( Est_ATL_Sales_CY__c - TS_CY_1_D_DD_AllPCs_Atlantis__c ) / TS_CY_1_D_DD_AllPCs_Atlantis__c))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    XEst_ATL_Growth__c: number;
    /**
     * <h3><b>%Est Growth</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF( OR(TS_CY_1_D_AllPLs_AllPCs_AllBrands__c = 0, Est_Sales_CY__c = 0) , 0, ((Est_Sales_CY__c - TS_CY_1_D_AllPLs_AllPCs_AllBrands__c ) / TS_CY_1_D_AllPLs_AllPCs_AllBrands__c))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    XEst_Growth__c: number;
    XiVE_User__pc: boolean;
}