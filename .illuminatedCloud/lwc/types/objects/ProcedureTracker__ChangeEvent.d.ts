// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ProcedureTracker__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Account Country</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT( PracticeAccount__r.Country__c )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    AccountCountry__c: string;
    /**
     * <h3><b>Activation Needed by</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Today() + 90</code></td></tr>
     * </table>
     */
    ActivationNeededby__c: Date;
    /**
     * <h3><b>Automatically Created?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    AutomaticallyCreated__c: boolean;
    /**
     * <h3><b>Barrier</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">My patients can't afford it</code></td><td>My patients can&#39;t afford it</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">I need marketing support to build awareness with patients</code></td><td>I need marketing support to build awareness with patients</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">My practice is already busy</code></td><td>My practice is already busy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">My practice is too busy</code></td><td>My practice is too busy</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">I don’t want to feel like a sales person (clear aligner)</code></td><td>I don’t want to feel like a sales person (clear aligner)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">I need more training/support on Treatment Planning</code></td><td>I need more training/support on Treatment Planning</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Not that many patients are ASKING for it</code></td><td>Not that many patients are ASKING for it</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">What cases are best for me and my practice?  "Tell me what is right for me</code></td><td>What cases are best for me and my practice?  &quot;Tell me what is right for me</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">I don’t want to learn another treatment planning software</code></td><td>I don’t want to learn another treatment planning software</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">How do I bring in more patients?" (New patients to the practice)</code></td><td>How do I bring in more patients?&quot; (New patients to the practice)</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">I need more opportunities to bring up the clear aligners conversation</code></td><td>I need more opportunities to bring up the clear aligners conversation</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Patients already know about clear aligners and will ask if interested</code></td><td>Patients already know about clear aligners and will ask if interested</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">1/3 GP's, currently not offering (or low volume) clear aligners don’t think they will make a profit</code></td><td>1/3 GP&#39;s, currently not offering (or low volume) clear aligners don’t think they will make a profit</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Need support for more complex cases (past Class I, relapse, and minor tooth movement cases)</code></td><td>Need support for more complex cases (past Class I, relapse, and minor tooth movement cases)</td><td nowrap>true</td></tr>
     * </table>
     */
    Barrier__c: string;
    /**
     * <h3><b>Business Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    BusinessAssessment__c: boolean;
    /**
     * <h3><b>Cancellation Reason</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Competition</code></td><td>Competition</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lack of training / knowledge</code></td><td>Lack of training / knowledge</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Lost interest</code></td><td>Lost interest</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Price</code></td><td>Price</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Unsatisfied with Product / Platform</code></td><td>Unsatisfied with Product / Platform</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Unsatisfied with the Support</code></td><td>Unsatisfied with the Support</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Workflow integration not possible</code></td><td>Workflow integration not possible</td><td nowrap>true</td></tr>
     * </table>
     */
    CancelationReason__c: string;
    /**
     * <h3><b>Case Selection &amp; Staff Roles</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CaseSelectionStaffRoles__c: boolean;
    /**
     * <h3><b>Chairside Patient Education</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ChairsidePatientEducation__c: boolean;
    ChangeEventHeader: ChangeEventHeader;
    /**
     * <h3><b>CIS</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CIS__c: string;
    /**
     * <h3><b>CIS</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CIS__r: User;
    /**
     * <h3><b>Clinical Development</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ClinicalDevelopment__c: boolean;
    /**
     * <h3><b>Clinical Education</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ClinicalEducation__c: boolean;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Contact__c: string;
    /**
     * <h3><b>Contact</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Contact})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Contact__r: Contact;
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    CurrencyIsoCode: string;
    /**
     * <h3><b>Dealer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Dealer__c: string;
    /**
     * <h3><b>Dealer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Account})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Dealer__r: Account;
    /**
     * <h3><b>Discovery, Goal Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    DiscoveryGoalAssessment__c: boolean;
    /**
     * <h3><b>Economics</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Economics__c: boolean;
    /**
     * <h3><b>Follow-Up Comments</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    FollowUpComments__c: string;
    /**
     * <h3><b>imaging Device Brand in Use ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Acteon</code></td><td>Acteon</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Carestream</code></td><td>Carestream</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Dentsply Sirona</code></td><td>Dentsply Sirona</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS</code></td><td>DS</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">iCAT</code></td><td>iCAT</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">KaVo</code></td><td>KaVo</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">KaVo Kerr</code></td><td>KaVo Kerr</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NewTom</code></td><td>NewTom</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Planmeca</code></td><td>Planmeca</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Ray</code></td><td>Ray</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Vatech</code></td><td>Vatech</td><td nowrap>true</td></tr>
     * </table>
     */
    imagingDeviceBrandin_Use__c: string;
    /**
     * <h3><b>Intraoral Scanner in Use ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Align – Itero Element 5 D</code></td><td>Align – Itero Element 5 D</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS - Omnican</code></td><td>DS - Omnican</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS - Primescan</code></td><td>DS - Primescan</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">DS - Primescan Conect</code></td><td>DS - Primescan Conect</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medit</code></td><td>Medit</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medit – i700</code></td><td>Medit – i700</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Other</code></td><td>Other</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Planmeca – Emerald S</code></td><td>Planmeca – Emerald S</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Trios</code></td><td>Trios</td><td nowrap>true</td></tr>
     * </table>
     */
    IntraoralScanner__c: string;
    /**
     * <h3><b>Last Activity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If (RecordType.DeveloperName = &#39;Clear_Aligners&#39;, IF(QBRHighL1toHighL2__c,&quot;QBR (High L1 to High L2)&quot;, IF(Peer2Peer__c,&quot;Peer 2 Peer&quot;, IF(MarketingM2H__c,&quot;Marketing (M 2 H)&quot;, IF(TeamCalibration__c,&quot;Team Calibration&quot;, IF(ClinicalDevelopment__c,&quot;Clinical Development&quot;, IF(PatientAcceptance__c,&quot;Patient Acceptance&quot;, IF(QBRMediumtoHighL1__c,&quot;QBR (Medium to High L1)&quot;, IF(Economics__c,&quot;Economics&quot;, IF(PatientEducation__c,&quot;Patient Education&quot;, IF(ProcessAssessment__c,&quot;Process Assessment&quot;, IF(BusinessAssessment__c,&quot;Business Assessment&quot;, IF(QBRLowtoMedium__c,&quot;QBR (Low to Medium)&quot;, IF(MarketingCampaign__c,&quot;Marketing Campaign&quot;, IF(ChairsidePatientEducation__c,&quot;Chairside Patient Education&quot;, IF(ProceduralEconomics__c,&quot;Procedural Economics&quot;, IF(ClinicalEducation__c,&quot;Clinical Education&quot;, IF(Whoisyouridealalignerpatient__c,&quot;Who is your ideal aligner patient?&quot;, IF(ResetTraining__c,&quot;Reset Training&quot;, IF(ProceduralAssessment__c,&quot;Procedural Assessment&quot;, IF(X3rdCaseReviewApproval__c,&quot;3rd Case Review/Approval&quot;, IF(TeamMeetingReviewProcesses__c,&quot;Team Meeting - Review Processes&quot;, IF(X3rdcasesubmission__c,&quot;3rd Case Submission&quot;, IF(X2ndCaseReviewApproval__c, &quot;2nd Case Review/Approval&quot;, IF(X2ndCaseSubmissionExternal__c, &quot;2nd Case Submission - External&quot;, IF(TeamTrainingOrthodonticBenefitsRDH__c, &quot;Team Training Ortho Benefits RDH&quot;, IF(X1stcasereviewapproval__c,&quot;1st Case Review/Approval&quot;, IF(X1stCaseSubmissionWorkflowMarketing__c, &quot;1st Case Submission,Workflow &amp; Mkt&quot;, IF(RecordsTrainingFinance__c, &quot;Records Training &amp; Finance&quot;, IF(CaseSelectionStaffRoles__c, &quot;Case Selection &amp; Staff Roles&quot;, IF(DiscoveryGoalAssessment__c, &quot;Discovery, Goal Assessment&quot;, IF(ObtainCreditCardInformation__c, &quot;Obtain Credit Card Information&quot;, &quot;None&quot;))))))))))))))))))))))))))))))) , IF(x23StartContinuousEducation__c,&quot;23. Start Continuous Education&quot;, IF(x22JoinSuresmileConnectionsProgram__c,&quot;22. Join SureSmile Connections Program&quot;, IF(x21ConnectwithSuresmileMentor__c,&quot;21. Connect with SureSmile Mentor&quot;, IF(x20JoinStartStudyClub__c,&quot;20. Join or Start Study Club&quot;, IF(x19ReviewCaseExpansion__c,&quot;19. Review Case Expansion&quot;, IF(x18ReviewPracticeIntegration__c,&quot;18. Review Practice Integration&quot;, IF(x17CompleteSureSmileBusinessReview__c,&quot;17. Complete SureSmile Business Review&quot;, IF(x16LaunchSureSmileDay__c,&quot;16. Launch SureSmile Day&quot;, IF(x15TrainCaseManagement__c,&quot;15. Train Case Management&quot;, IF(x14TrainClinicalAppsIntegrations__c,&quot;14. Train Clinical Apps &amp; Integrations&quot;, IF(x13TrainCompleteThirdCaseReview__c,&quot;13. Train &amp; Complete Third Case Review&quot;, IF(x12SubmitThirdCase__c,&quot;12. Submit Third Case&quot;, IF(x11TrainCompleteSecondCaseReview__c,&quot;11. Train &amp; Complete Second Case Review&quot;, IF(x10SubmitSecondCase__c,&quot;10. Submit Second Case&quot;, IF(x9TrainCompleteFirstCaseReview__c,&quot;9. Train &amp; Complete First Case Review&quot;, IF(x8TrainSubmitFirstCase__c,&quot;8. Train &amp; Submit First Case&quot;, IF(x7StartNewPracticeOnboarding__c,&quot;7. Start New Practice Onboarding&quot;, IF(x6HelpClinicFind3Patients__c,&quot;6. Help Clinic Find 3 Patients&quot;, IF(x5ConnectwithSureSmileAmbassador__c,&quot;5. Connect with SureSmile Ambassador&quot;, IF(x4CompleteSureSmileDiscovery__c,&quot;4. Complete SureSmile Discovery&quot;, IF(x3DeliverWelcometoSureSmileFamily__c,&quot;3. Deliver Welcome to SureSmile Family&quot;, IF(x2Register__c,&quot;2. Register&quot;, IF(x1ExperienceSureSmile__c,&quot;1. Experience SureSmile&quot;, &quot;None&quot;))))))))))))))))))))))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastActivity__c: string;
    /**
     * <h3><b>Last Activity Notes</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(QBRHighL1toHighL2__c, NOTESQBRHighL1toHighL2__c , IF(Peer2Peer__c, NOTESPeer2Peer__c , IF(MarketingM2H__c, NOTESMarketingM2H__c , IF(TeamCalibration__c, NOTESTeamCalibration__c , IF(ClinicalDevelopment__c, NOTESClinicalDevelopment__c , IF(PatientAcceptance__c, NOTESPatientAcceptance__c , IF(QBRMediumtoHighL1__c, NOTESQBRMediumtoHighL1__c , IF(Economics__c,  NOTESEconomics__c , IF(PatientEducation__c, NOTESPatientEducation__c , IF(ProcessAssessment__c, NOTESProcessAssessment__c, IF(BusinessAssessment__c, NOTESBusinessAssessment__c, IF(QBRLowtoMedium__c, NOTESQBRLowtoMedium__c , IF(MarketingCampaign__c,  NOTESMarketingCampaign__c , IF(ChairsidePatientEducation__c, NOTESChairsidePatientEducation__c , IF(ProceduralEconomics__c, NOTESProceduralEconomics__c  , IF(ClinicalEducation__c, NOTESClinicalEducation__c , IF(Whoisyouridealalignerpatient__c,  NOTESWhoisyouridealalignerpatient__c , IF(ResetTraining__c, NOTESResetTraining__c , IF(ProceduralAssessment__c, NOTESProceduralAssessment__c , IF(X3rdCaseReviewApproval__c, NOTES_3rdCaseReviewApproval__c , IF(TeamMeetingReviewProcesses__c,NOTES_TeamMeetingReviewProcesses__c , IF(X3rdcasesubmission__c, NOTES_3rdCaseSubmission__c , IF(X2ndCaseReviewApproval__c, NOTES_2ndCaseReviewApproval__c , IF(X2ndCaseSubmissionExternal__c, NOTES_2ndCaseSubmissionExternal__c  , IF(TeamTrainingOrthodonticBenefitsRDH__c,  NOTES_TeamTrainingOrthodonticBenefit__c , IF(X1stcasereviewapproval__c, NOTES_1stCaseReviewApproval__c , IF(X1stCaseSubmissionWorkflowMarketing__c,  NOTES_1stCaseSubmissionWorkflowMkt__c , IF(RecordsTrainingFinance__c,  NOTES_RecordsTrainingFinance__c , IF(CaseSelectionStaffRoles__c,   NOTES_CaseSelectionStaffRoles__c , IF(DiscoveryGoalAssessment__c,   NOTES_DiscoveryGoalAssessment__c , IF(ObtainCreditCardInformation__c,  NOTESObtainCreditCardInformation__c , &quot;&quot;)))))))))))))))))))))))))))))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    LastActivityNotes__c: string;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    /**
     * <h3><b>Marketing Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    MarketingCampaign__c: boolean;
    /**
     * <h3><b>Marketing (M 2 H)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    MarketingM2H__c: boolean;
    /**
     * <h3><b>My Tracker ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">OR(SalesRep__c =  $User.Id, CIS__c =  $User.Id)</code></td></tr>
     * </table>
     */
    MyTracker__c: boolean;
    Name: string;
    /**
     * <h3><b>Next Activity</b></h3>
     * <p>TFUS-000005060</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">If (RecordType.DeveloperName = &#39;Clear_Aligners&#39;, IF(QBRHighL1toHighL2__c,&quot;No next activity identified.&quot;, IF(Peer2Peer__c,&quot;QBR (High L1 to High L2)&quot;, IF(MarketingM2H__c,&quot;Peer 2 Peer&quot;, IF(TeamCalibration__c,&quot;Marketing (M 2 H)&quot;, IF(ClinicalDevelopment__c,&quot;Team Calibration&quot;, IF(PatientAcceptance__c,&quot;Clinical Development&quot;, IF(QBRMediumtoHighL1__c,&quot;Patient Acceptance&quot;, IF(Economics__c,&quot;QBR (Medium to High L1)&quot;, IF(PatientEducation__c,&quot;Economics&quot;, IF(ProcessAssessment__c,&quot;Patient Education&quot;, IF(BusinessAssessment__c,&quot;Process Assessment&quot;, IF(QBRLowtoMedium__c,&quot;Business Assessment&quot;, IF(MarketingCampaign__c,&quot;QBR (Low to Medium)&quot;, IF(ChairsidePatientEducation__c,&quot;Marketing Campaign&quot;, IF(ProceduralEconomics__c,&quot;Chairside Patient Education&quot;, IF(ClinicalEducation__c,&quot;Procedural Economics&quot;, IF(Whoisyouridealalignerpatient__c,&quot;Clinical Education&quot;, IF(ResetTraining__c,&quot;Who is your ideal aligner patient?&quot;, IF(ProceduralAssessment__c,&quot;Reset Training&quot;, IF(X3rdCaseReviewApproval__c,&quot;Procedural Assessment&quot;, IF(TeamMeetingReviewProcesses__c,&quot;3rd Case Review/Approval&quot;, IF(X3rdcasesubmission__c,&quot;Team Meeting - Review Processes&quot;, IF(X2ndCaseReviewApproval__c, &quot;3rd Case Submission&quot;, IF(X2ndCaseSubmissionExternal__c, &quot;2nd Case Review/Approval&quot;, IF(TeamTrainingOrthodonticBenefitsRDH__c, &quot;2nd Case Submission - External&quot;, IF(X1stcasereviewapproval__c,&quot;Team Training Ortho Benefits RDH&quot;, IF(X1stCaseSubmissionWorkflowMarketing__c, &quot;1st Case Review/Approval&quot;, IF(RecordsTrainingFinance__c, &quot;1st Case Submission,Workflow &amp; Mkt&quot;, IF(CaseSelectionStaffRoles__c, &quot;Records Training &amp; Finance&quot;, IF(DiscoveryGoalAssessment__c, &quot;Case Selection &amp; Staff Roles&quot;, IF(ObtainCreditCardInformation__c, &quot;Discovery, Goal Assessment&quot;, &quot;Obtain Credit Card Information&quot;))))))))))))))))))))))))))))))) , IF(x23StartContinuousEducation__c,&quot;No next activity identified.&quot;, IF(x22JoinSuresmileConnectionsProgram__c,&quot;23. Start Continuous Education&quot;, IF(x21ConnectwithSuresmileMentor__c,&quot;22. Join SureSmile Connections Program&quot;, IF(x20JoinStartStudyClub__c,&quot;21. Connect with SureSmile Mentor&quot;, IF(x19ReviewCaseExpansion__c,&quot;20. Join or Start Study Club&quot;, IF(x18ReviewPracticeIntegration__c,&quot;19. Review Case Expansion&quot;, IF(x17CompleteSureSmileBusinessReview__c,&quot;18. Review Practice Integration&quot;, IF(x16LaunchSureSmileDay__c,&quot;17. Complete SureSmile Business Review&quot;, IF(x15TrainCaseManagement__c,&quot;16. Launch SureSmile Day&quot;, IF(x14TrainClinicalAppsIntegrations__c,&quot;15. Train Case Management&quot;, IF(x13TrainCompleteThirdCaseReview__c,&quot;14. Train Clinical Apps &amp; Integrations&quot;, IF(x12SubmitThirdCase__c,&quot;13. Train &amp; Complete Third Case Review&quot;, IF(x11TrainCompleteSecondCaseReview__c,&quot;12. Submit Third Case&quot;, IF(x10SubmitSecondCase__c,&quot;11. Train &amp; Complete Second Case Review&quot;, IF(x9TrainCompleteFirstCaseReview__c,&quot;10. Submit Second Case&quot;, IF(x8TrainSubmitFirstCase__c,&quot;9. Train &amp; Complete First Case Review&quot;, IF(x7StartNewPracticeOnboarding__c,&quot;8. Train &amp; Submit First Case&quot;, IF(x6HelpClinicFind3Patients__c,&quot;7. Start New Practice Onboarding&quot;, IF(x5ConnectwithSureSmileAmbassador__c,&quot;6. Help Clinic Find 3 Patients&quot;, IF(x4CompleteSureSmileDiscovery__c,&quot;5. Connect with SureSmile Ambassador&quot;, IF(x3DeliverWelcometoSureSmileFamily__c,&quot;4. Complete SureSmile Discovery&quot;, IF(x2Register__c,&quot;3. Deliver Welcome to SureSmile Family&quot;, IF(x1ExperienceSureSmile__c,&quot;2. Register&quot;, &quot;1. Experience SureSmile&quot;))))))))))))))))))))))))</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NextActivity__c: string;
    /**
     * <h3><b>Notes: 0 - 30 days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Notes030days__c: string;
    /**
     * <h3><b>Notes: 120 days+</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Notes120plusdays__c: string;
    /**
     * <h3><b>Notes: 30 - 60 days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Notes3060days__c: string;
    /**
     * <h3><b>Notes: 60 - 90 days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Notes6090days__c: string;
    /**
     * <h3><b>Notes: 90 - 120 days</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    Notes90120days__c: string;
    /**
     * <h3><b>NOTES: 1st Case Review/Approval</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_1stCaseReviewApproval__c: string;
    /**
     * <h3><b>NOTES: 1st Case Submission,Workflow &amp;Mkt</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_1stCaseSubmissionWorkflowMkt__c: string;
    /**
     * <h3><b>NOTES: 2nd Case Review/Approval</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_2ndCaseReviewApproval__c: string;
    /**
     * <h3><b>NOTES: 2nd Case Submission - External</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_2ndCaseSubmissionExternal__c: string;
    /**
     * <h3><b>NOTES: 3rd Case Review/Approval</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_3rdCaseReviewApproval__c: string;
    /**
     * <h3><b>NOTES: 3rd Case Submission</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_3rdCaseSubmission__c: string;
    /**
     * <h3><b>NOTES: Case Selection &amp; Staff Roles</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_CaseSelectionStaffRoles__c: string;
    /**
     * <h3><b>NOTES: Discovery, Goal Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_DiscoveryGoalAssessment__c: string;
    /**
     * <h3><b>NOTES: Records Training &amp; Finance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_RecordsTrainingFinance__c: string;
    /**
     * <h3><b>NOTES: Team Meeting - Review Processes</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_TeamMeetingReviewProcesses__c: string;
    /**
     * <h3><b>NOTES: Team Training Ortho Benefits RDH</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTES_TeamTrainingOrthodonticBenefit__c: string;
    /**
     * <h3><b>NOTES: Business Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESBusinessAssessment__c: string;
    /**
     * <h3><b>NOTES: Chairside Patient Education</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESChairsidePatientEducation__c: string;
    /**
     * <h3><b>NOTES: Clinical Development</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESClinicalDevelopment__c: string;
    /**
     * <h3><b>NOTES: Clinical Education</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESClinicalEducation__c: string;
    /**
     * <h3><b>NOTES: Economics</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESEconomics__c: string;
    /**
     * <h3><b>NOTES: Marketing Campaign</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESMarketingCampaign__c: string;
    /**
     * <h3><b>NOTES: Marketing (M 2 H)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESMarketingM2H__c: string;
    /**
     * <h3><b>NOTES: Obtain Credit Card Information</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESObtainCreditCardInformation__c: string;
    /**
     * <h3><b>NOTES: Patient Acceptance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESPatientAcceptance__c: string;
    /**
     * <h3><b>NOTES: Patient Education</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESPatientEducation__c: string;
    /**
     * <h3><b>NOTES: Peer 2 Peer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESPeer2Peer__c: string;
    /**
     * <h3><b>NOTES: Procedural Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESProceduralAssessment__c: string;
    /**
     * <h3><b>NOTES: Procedural Economics</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESProceduralEconomics__c: string;
    /**
     * <h3><b>NOTES: Process Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESProcessAssessment__c: string;
    /**
     * <h3><b>NOTES: QBR (High L1 to High L2)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESQBRHighL1toHighL2__c: string;
    /**
     * <h3><b>NOTES: QBR (Low to Medium)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESQBRLowtoMedium__c: string;
    /**
     * <h3><b>NOTES: QBR (Medium to High L1)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESQBRMediumtoHighL1__c: string;
    /**
     * <h3><b>NOTES: Reset Training</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESResetTraining__c: string;
    /**
     * <h3><b>NOTES: Team Calibration</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESTeamCalibration__c: string;
    /**
     * <h3><b>NOTES: Who is your ideal aligner patient</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NOTESWhoisyouridealalignerpatient__c: string;
    /**
     * <h3><b>Obtain Credit Card Information</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ObtainCreditCardInformation__c: boolean;
    /**
     * <h3><b># of Cases Submitted the first 6 months</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    of_Cases_Submitted_the_first_6_months__c: number;
    /**
     * <h3><b>Other - Imaging Device Brand in Use ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OtherimagingDeviceBrand__c: string;
    /**
     * <h3><b>Other - Intraoral Scanner in Use ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(50)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OtherIntraoralScannerinUse__c: string;
    /**
     * <h3><b>Parent Account Information</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">PracticeAccount__r.ParentAccountInformation__c</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ParentAccountInformation__c: string;
    /**
     * <h3><b>Patient Acceptance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    PatientAcceptance__c: boolean;
    /**
     * <h3><b>Patient Education</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    PatientEducation__c: boolean;
    /**
     * <h3><b>Peer 2 Peer</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Peer2Peer__c: boolean;
    /**
     * <h3><b>Practice Account</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Account})</td></tr>
     * </table>
     */
    PracticeAccount__c: string;
    /**
     * <h3><b>Practice Account</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link Account})</td></tr>
     * </table>
     */
    PracticeAccount__r: Account;
    /**
     * <h3><b>Procedural Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ProceduralAssessment__c: boolean;
    /**
     * <h3><b>Procedural Economics</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ProceduralEconomics__c: boolean;
    /**
     * <h3><b>Procedure Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Clear Aligners</code></td><td>Clear Aligners</td><td nowrap>true</td><td nowrap>true</td></tr>
     * </table>
     */
    ProcedureType__c: string;
    /**
     * <h3><b>Process Assessment</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ProcessAssessment__c: boolean;
    /**
     * <h3><b>QBR (High L1 to High L2)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    QBRHighL1toHighL2__c: boolean;
    /**
     * <h3><b>QBR (Low to Medium)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    QBRLowtoMedium__c: boolean;
    /**
     * <h3><b>QBR (Medium to High L1)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    QBRMediumtoHighL1__c: boolean;
    /**
     * <h3><b>Records Training &amp; Finance</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    RecordsTrainingFinance__c: boolean;
    RecordType: RecordType;
    RecordTypeId: string;
    /**
     * <h3><b>Registration Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Today()</code></td></tr>
     * </table>
     */
    RegistrationDate__c: Date;
    ReplayId: string;
    /**
     * <h3><b>Reset Training</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    ResetTraining__c: boolean;
    /**
     * <h3><b>Sales Analytics</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Sales_Analytics__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesAnalytics__c: string;
    /**
     * <h3><b>Sales Analytics</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Sales_Analytics__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesAnalytics__r: Sales_Analytics__c;
    /**
     * <h3><b>Sales Rep</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesRep__c: string;
    /**
     * <h3><b>Sales Rep</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link User})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SalesRep__r: User;
    /**
     * <h3><b>Scanner / X-Ray Technologies in use ?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Scanner_X_Ray_Technologies_in_use__c: string;
    /**
     * <h3><b>Segment - Ortho Clear Aligners</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">TEXT(PracticeAccount__r.Segment_Ortho_Clear_Aligners__c)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SegmentClearAligner__c: string;
    /**
     * <h3><b>Stage</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">30 days</code></td><td>30 days</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">60 days</code></td><td>60 days</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">90 days</code></td><td>90 days</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High L1</code></td><td>High L1</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High L2</code></td><td>High L2</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Registration</code></td><td>Registration</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Welcome & Clinical Engagement</code></td><td>Welcome &amp; Clinical Engagement</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New Practice Onboarding</code></td><td>New Practice Onboarding</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Practice Integration & Growth Plan</code></td><td>Practice Integration &amp; Growth Plan</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Case Mentoring</code></td><td>Case Mentoring</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low: 30 days</code></td><td>Low: 30 days</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low: 60 days</code></td><td>Low: 60 days</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low: 90 days</code></td><td>Low: 90 days</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">New</code></td><td>New</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    Stage__c: string;
    /**
     * <h3><b>Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Active</code></td><td>Active</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Customer Registered</code></td><td>Customer Registered</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">In Progress</code></td><td>In Progress</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Successfully Onboarded</code></td><td>Successfully Onboarded</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Cancelled</code></td><td>Cancelled</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Customer Not Interested</code></td><td>Customer Not Interested</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Parked/On-Hold</code></td><td>Parked/On-Hold</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Canceled</code></td><td>Canceled</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    Status__c: string;
    /**
     * <h3><b>Team Calibration</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    TeamCalibration__c: boolean;
    /**
     * <h3><b>Team Meeting - Review Processes</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    TeamMeetingReviewProcesses__c: boolean;
    /**
     * <h3><b>Team Training Ortho Benefits RDH</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    TeamTrainingOrthodonticBenefitsRDH__c: boolean;
    /**
     * <h3><b>Who is your ideal aligner patient?</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    Whoisyouridealalignerpatient__c: boolean;
    /**
     * <h3><b>10. Submit Second Case</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x10SubmitSecondCase__c: boolean;
    /**
     * <h3><b>11. Train &amp; Complete Second Case Review</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x11TrainCompleteSecondCaseReview__c: boolean;
    /**
     * <h3><b>12. Submit Third Case</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x12SubmitThirdCase__c: boolean;
    /**
     * <h3><b>13. Train &amp; Complete Third Case Review</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x13TrainCompleteThirdCaseReview__c: boolean;
    /**
     * <h3><b>14. Train Clinical Apps &amp; Integrations</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x14TrainClinicalAppsIntegrations__c: boolean;
    /**
     * <h3><b>15. Train Case Management</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x15TrainCaseManagement__c: boolean;
    /**
     * <h3><b>16. Launch SureSmile Day</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x16LaunchSureSmileDay__c: boolean;
    /**
     * <h3><b>17. Complete SureSmile Business Review</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x17CompleteSureSmileBusinessReview__c: boolean;
    /**
     * <h3><b>18. Review Practice Integration</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x18ReviewPracticeIntegration__c: boolean;
    /**
     * <h3><b>19. Review Case Expansion</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x19ReviewCaseExpansion__c: boolean;
    /**
     * <h3><b>1. Experience SureSmile</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x1ExperienceSureSmile__c: boolean;
    /**
     * <h3><b>1st Case Review/Approval (CIS &amp; Rep)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    X1stcasereviewapproval__c: boolean;
    /**
     * <h3><b>1st Case Submission,Workflow &amp; Mkt</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    X1stCaseSubmissionWorkflowMarketing__c: boolean;
    /**
     * <h3><b>20. Join or Start Study Club</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x20JoinStartStudyClub__c: boolean;
    /**
     * <h3><b>21. Connect with SureSmile Mentor</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x21ConnectwithSuresmileMentor__c: boolean;
    /**
     * <h3><b>22. Join SureSmile Connections Program</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x22JoinSuresmileConnectionsProgram__c: boolean;
    /**
     * <h3><b>23. Start Continuous Education</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x23StartContinuousEducation__c: boolean;
    /**
     * <h3><b>2nd  Case Review/Approval (CIS &amp; Rep)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    X2ndCaseReviewApproval__c: boolean;
    /**
     * <h3><b>2nd Case Submission - External</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    X2ndCaseSubmissionExternal__c: boolean;
    /**
     * <h3><b>2. Register</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x2Register__c: boolean;
    /**
     * <h3><b>3. Deliver Welcome to SureSmile Family</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x3DeliverWelcometoSureSmileFamily__c: boolean;
    /**
     * <h3><b>3rd Case Review/Approval (CIS &amp; Rep)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    X3rdCaseReviewApproval__c: boolean;
    /**
     * <h3><b>3rd Case Submission</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    X3rdcasesubmission__c: boolean;
    /**
     * <h3><b>4. Complete SureSmile Discovery</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x4CompleteSureSmileDiscovery__c: boolean;
    /**
     * <h3><b>5. Connect with SureSmile Ambassador</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x5ConnectwithSureSmileAmbassador__c: boolean;
    /**
     * <h3><b>6. Help Clinic Find 3 Patients</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x6HelpClinicFind3Patients__c: boolean;
    /**
     * <h3><b>7. Start New Practice Onboarding</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x7StartNewPracticeOnboarding__c: boolean;
    /**
     * <h3><b>8. Train &amp; Submit First Case</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x8TrainSubmitFirstCase__c: boolean;
    /**
     * <h3><b>9. Train &amp; Complete First Case Review</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    x9TrainCompleteFirstCaseReview__c: boolean;
}