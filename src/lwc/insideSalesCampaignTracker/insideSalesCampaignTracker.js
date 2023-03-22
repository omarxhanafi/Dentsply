import { LightningElement,track, api, wire } from 'lwc';
import getCampaings from '@salesforce/apex/InsideSalesCampaignTrackerController.getCampaignDetails';
import getActivityResultPicklist from '@salesforce/apex/InsideSalesCampaignTrackerController.getActityResultPicklistValues';
import getContactTypePicklist from '@salesforce/apex/InsideSalesCampaignTrackerController.getContactTypePicklistValues';
import getMemberStatusePicklist from '@salesforce/apex/InsideSalesCampaignTrackerController.getMembersStatusPickValues';
import createTaskForCampaignMember from '@salesforce/apex/InsideSalesCampaignTrackerController.createTaskforCampaignMember';
import createFollowUpTask from '@salesforce/apex/InsideSalesCampaignTrackerController.createFollowUpTask';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { step1Columns, step2Columns } from './tablesColumnsDefinitions';
import {refreshApex} from '@salesforce/apex';
import { NavigationMixin } from 'lightning/navigation';

import missingDateSubject from '@salesforce/label/c.DueDateAndSubjectMandatory';
import missingcontactountType from '@salesforce/label/c.ContactTypeMandatory';
import datesMustFutureDates from '@salesforce/label/c.DatesMustBeFutureDates';

export default class InsideSalesCampaignTracker extends NavigationMixin(LightningElement) {

    label = {
        missingDateSubject,
        missingcontactountType,
        datesMustFutureDates
    };



    @api recordId;
    selectedStep = 'start';
    selectedRows = [];
    wiredRecords;
    step3Value = '';
    selectedCampaignCount = 0;
    activityResultOptions;
    contactTypeOptions;
    memberStatusOptions;
    steps = [
        {label: 'Select Campaigns', value: 1},
        {label: 'Notes/Status', value: 2},
        {label: 'Follow Up', value: 3},
    ]
    data = [];
    mappedCampaignsData = [];
    step1Columns = step1Columns;
    step2Columns = step2Columns;
    draftValues = [];
    nonSelectedCampaignError = false;
    missingContactType = 0;
    displayFollowUpTask = false;
    showContactError = false;
    showDateError = false;
    dueDate;
    Step3Error ;
    min;
    displayFinish = false;
    followUpvalidation = '';
    isLoading = false;
    isStep2Loading = false;
    isComplete = false;
    isFinished = false;
    isCancelled = false;

    mapCampaignsData() {
        this.mappedCampaignsData = this.data.map(function (campaign) {
            var mappedCampaign = {
                id: campaign.Id, 
                name: campaign.Name
            };
            if (campaign.CampaignMembers) {
                mappedCampaign.memberStatus = campaign.CampaignMembers[0].Status;
                mappedCampaign.memberId = campaign.CampaignMembers[0].Id;
            }
            if (campaign.Campaign_Offer_Codes__r) {
                mappedCampaign.offerCodes = campaign.Campaign_Offer_Codes__r.reduce(function (
                    previousCodes,
                    offerCode,
                    index
                ) {
                    return previousCodes + (index == 0 ? '' : '\r\n') + offerCode.Offer_Code__r.Name
                }, '');
            }
            mappedCampaign.isUnrelatedCampaign = false;
            return mappedCampaign;
            console.log('mappedCampaign',mappedCampaign);
        })

        this.mappedCampaignsData.unshift({
            id:'Unrelated',
            memberId:'test',
            name:'Activity Unrelated to a Campaign',
            memberStatus:'Not Available',
            isUnrelatedCampaign : true
        });
        
    }

    @wire(getCampaings, { accountId: '$recordId'})
    wiredRecords(result) {
        this._wiredCampaigns = result;
        if (result.data) {
            this.data = result.data;
            this.mapCampaignsData();
        }
        if (result.error) {
        }
    }

    @wire(getActivityResultPicklist)
    wiredActivitiesResult(result) {
        if (result.data) {
            let options = [];
            result.data.forEach(r => {
                options.push({
                    label: r,
                    value: r,
                  });
                });
            this.activityResultOptions = options;
            } 
    }

    @wire(getContactTypePicklist)
    wiredContactTypes(result) {
        if (result.data) {
            let options = [];
            result.data.forEach(r => {
                options.push({
                    label: r,
                    value: r,
                  });
                });
            this.contactTypeOptions = options;
        } 
    }

    handleContactTypeChange(event) {
        this.contactType = event.target.value;
    }

    @wire(getMemberStatusePicklist)
    wiredStatus(result) {
        if (result.data) {
            let options = [];
            result.data.forEach(r => {
                options.push({
                    label: r,
                    value: r,
                  });
                });
            this.memberStatusOptions = options;
        }
    }

    handleMemberStatusChange(event) {
        this.memberStatus = event.target.value;
    }

    handleCampaignSelection(event){
        this.selectedRows = event.detail.selectedRows.map(row => row.id);
        this.selectedCampaignCount = this.selectedRows.length;
    }

    get selectedRowsDetails() {
        return this.mappedCampaignsData.filter(campaign => this.selectedRows.find(id => id == campaign.id));
    }

    resetErrors(){
        this.nonSelectedCampaignError = false;
        this.showContactError = false;
        this.missingContactType = 0;
        this.showDateError = false;
        this.followUpvalidation = '';
    }

    handleNext() {
        this.resetErrors();
        this.memberStatus = null;
        if(this.isStep1Active && !this.selectedCampaignCount){
            this.nonSelectedCampaignError = true;
            return;
        }
        this.selectedStep = (+this.selectedStep || 1) + 1;
    }
    
    handleCompleteandFollowUp () { 
        this.resetErrors();
        this.displayFollowUpTask = true;
        this.displayFinish = true;
        this.validateStep2();
        if(this.missingContactType != 0){
            this.showContactError = true;
            return;
        } 
        this.selectedStep = (+this.selectedStep || 1) + 1;

    }

    handleComplete() { 
        this.resetErrors();
        this.isComplete = true;
        this.validateStep2();
        if(this.missingContactType != 0){
            this.showContactError = true;
            return;
        }
    }

    handlePrev() {
        this.resetErrors();
        this.selectedStep = Math.max(1, --this.selectedStep);
    }
    handleFinish() {
        this.resetErrors();
        this.isFinished = true;
        if(this.isStep3Active) { 
           this.validateStep3();
            
            
        }
    }

    get isStep1Active () {
        return this.selectedStep === 1 || this.selectedStep === 'start';
    }

    get isStep2Active () {
        return this.selectedStep === 2;
    }

    get isStep3Active () {
        return this.selectedStep === 3;
    }

    get isFollowTaskNeeded () { 
        console.log('this.displayFollowUpTask',this.displayFollowUpTask);
        return ( !this.displayFollowUpTask && this.selectedStep === 2)
    }   

    validateStep2() {
        console.log('validateStep2');
        const selectedCampaigns = this.template.querySelectorAll('.selected-campaigns .selected-campaign');
        const tasksData = [];
        if(selectedCampaigns && selectedCampaigns.length) {
            selectedCampaigns.forEach(function (campaign){
                const taskData = {}
                campaign.querySelectorAll('.slds-form-element').forEach((input, idx) => {
                    taskData[input.name] = input.value;
                });
                tasksData.push(taskData);
            })
            tasksData.forEach(element => {
                const contactTypevar = element.contactType;
                if(contactTypevar == undefined){
                    this.missingContactType ++;
                }
            })
        }
        if( this.missingContactType == 0){
            this.isStep2Loading = true; 
            createTaskForCampaignMember({data: JSON.stringify(tasksData), accountId: this.recordId, selectedCampaignIds: this.selectedRows})
            .then((result) => {
                //check if the result is an ID of 18 char
                if(result.length == 18){
                    this[NavigationMixin.GenerateUrl]({
                        type: 'standard__recordPage',
                        attributes: {
                            recordId: result,
                            actionName: 'view',
                        },
                    }).then((link) => {
                        const event = new ShowToastEvent({
                            title: 'Success!',
                            variant: 'success',
                            mode: 'dismissible',
                            message: '{0} Created successfully {1} !',
                            messageData: [
                                'Call',
                                {
                                    url: link,
                                    label: 'Record link',
                                },
                            ],
                        });
                        this.dispatchEvent(event);
                    });
                } else {
                    const event = new ShowToastEvent({
                        title: 'Success',
                        message: result+' Tasks have been Created successfully',
                        variant: 'success',
                        mode: 'dismissible'
                    });
                    this.dispatchEvent(event);
                }
                this.refreshData();
                }).catch((error) => { 
                    this.isStep2Loading = true;
                    this.isLoading = false;
                    console.log(error);
                    const evt = new ShowToastEvent({
                        title: 'Error while trying to create the Task',
                        message:error,
                        variant: 'error',
                        mode: 'dismissible'
                    });
                    this.dispatchEvent(evt);
                });
        }
    }

    handleDueDateChange(event) {
        this.dueDate = event.target.value;
    }

    handleReminderTimeChange(event) {
        this.reminderTime = event.target.value;
    }

    subjectChange(event) { 
        this.subject = event.target.value;
    }

    commentsChange(event) { 
        this.comments = event.target.value;
    }

    validateStep3() { 
        this.resetErrors();
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        if((!this.dueDate || !this.subject) ){ 
            this.showDateError = true;
            this.followUpvalidation = missingDateSubject;
        } else {
            this.isLoading = true;   
            createFollowUpTask({
                accountId : this.recordId, 
                dueDate : this.dueDate, 
                reminderDate : this.reminderTime, 
                subject : this.subject, 
                comments :this.comments
             }).then((result) => {
                    const followup = new ShowToastEvent({
                            title: 'Follow up task Created ',
                            message: 'Follow up task successfully',
                            variant: 'success',
                            mode: 'dismissible'
                    });
                    this.dispatchEvent(followup);
                    this.refreshData();
                }).catch((error) => { 
                    this.isLoading = false;
                    const evt = new ShowToastEvent({
                        title: 'Error',
                        message:error,
                        variant: 'error',
                        mode: 'dismissible'
                    });
                    this.dispatchEvent(evt);
                });
        }
    }

    handleCancel () {
        this.isCancelled = true;
        this.refreshData();
    }
    
    refreshData() {
        console.log('refreshData');
        return refreshApex(this._wiredCampaigns).then((test)=>{
            if((this.isStep2Active && this.isComplete) || this.isFinished || this.isCancelled){
                this.selectedStep = 'start';
                this.mapCampaignsData();
            }
            
        }).finally(()=>{
            this.isLoading = false;
            this.isStep2Loading = false;
            this.isComplete = false;
            this.isFinished = false;
            this.isCancelled = false;
        })
    }


}