import { LightningElement, api } from 'lwc';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import WLREASON_FIELD from '@salesforce/schema/Opportunity.Win_Loss_Reason__c';
import WLDESC_FIELD from '@salesforce/schema/Opportunity.Win_Loss_Description__c';
import CATEGORY_FIELD from '@salesforce/schema/Opportunity.NA_Category__c';
import BRAND_FIELD from '@salesforce/schema/Opportunity.NA_Brand__c';

export default class OpportunityWinLossLwc extends LightningElement {

    stageField = STAGE_FIELD;
    wlReasonField = WLREASON_FIELD;
    wlDescriptionField = WLDESC_FIELD;
    categoryField = CATEGORY_FIELD;
    brandField = BRAND_FIELD;


    @api recordTypeId;
    @api stageName;
    @api winLossReason;
    @api winLossDescription;
    @api category;
    @api brand; 

    showWinLossFields = false;

    connectedCallback() {
        this.handleShowWinLossFields();
    } 
    
    renderedCallback(){
        //Validate fields after the component has refreshed, typically when the user
        //presses "Next" in a flow
        if(sessionStorage.getItem('showErrors')){
            setTimeout(() => this.validateFields());
        }
                      
    }

    handleStageNameChange(event) {
        this.stageName = event.target.value;
        this.handleShowWinLossFields();
    }

    handleShowWinLossFields() {
        if (this.stageName === 'Closed Won' || this.stageName === 'Closed Lost') {
            this.showWinLossFields = true;
        } else {
            this.showWinLossFields = false;
        }
    }

    handleWinLossReasonChange(event) {
        this.winLossReason = event.target.value;
        // You can pass the values of the fields to the flow using a flow action
    }

    handleWinLossDescriptionChange(event) {
        this.winLossDescription = event.target.value;
        // You can pass the values of the fields to the flow using a flow action
    }

    validateFields(){
        
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            element.reportValidity();
            console.log(element.reportValidity());
            if(element.reportValidity() == false){
                element.focus();
            }           
        });
    }

    @api
    validate() {
        //Checks in case the fields in the component are valid - if not an error is thrown that
        //indicates to the flow that it should not continue.
        let validity = true;
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
                let elValidity = element.reportValidity();
                console.log(elValidity);
                if(elValidity === false){
                    validity = false;
                }
        });

        if(validity === false){
            sessionStorage.setItem('showErrors', true);
            return { 
                isValid: false,
                errorMessage:''                  
            };
        }
        else{
            sessionStorage.setItem('showErrors', false);
        }

    }
}