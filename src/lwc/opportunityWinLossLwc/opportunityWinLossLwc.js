import { LightningElement, api } from 'lwc';

export default class OpportunityWinLossLwc extends LightningElement {

    @api recordTypeId;
    @api stageName;
    @api winLossReason;
    @api winLossDescription;

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