import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';

import doFieldServiceCalloutERP from '@salesforce/apex/FieldServiceCalloutERP.doFieldServiceCalloutERP';
import updateRecords from '@salesforce/apex/FieldServiceCalloutERP.updateRecord';
import checkIfSentBefore from '@salesforce/apex/FieldServiceCalloutERP.checkIfSentBefore';

import PROCESSING from '@salesforce/label/c.FieldServiceAXIntegrationProcessing';
import NODUPS from '@salesforce/label/c.FieldServiceAXIntegrationNoDups';

export default class DoFieldServiceCallout extends NavigationMixin(LightningElement) {
    @api availableActions = [] ;
    @api varRecordId;
    allIds = [];
    @track hideSpinner = false;
    @track responseERP;
    @track message;
    @track processingMessage;

    connectedCallback() {
        this.allIds.push(this.varRecordId);
        this.checkIfSentBefore();

    }

    checkIfSentBefore(){
        checkIfSentBefore({ recordId : this.varRecordId })
        .then(result => {
            if(result){
                this.processingMessage = result;
                if(result == 'processing'){
                    this.processingMessage = PROCESSING;
                      this.doFieldServiceCalloutERP();
                } 
                if(result == 'alreadySent'){
                    this.processingMessage = NODUPS;
                }
            }
        })
        .catch(error => {
           this.showToastMessage('Error', error.body.message + error.body.stackTrace , 'error' );
        });
    }

    

    doFieldServiceCalloutERP() {
        doFieldServiceCalloutERP({ recordIds : this.allIds })
        .then(result => {
            this.responseERP = result;
            const obj = JSON.parse(this.responseERP);
            if(obj && (obj.hasOwnProperty('SFDC_ACK') || obj.hasOwnProperty('ProductOrder_ACK'))){
                this.message = obj.hasOwnProperty('SFDC_ACK') ? obj.SFDC_ACK.Status : obj.ProductOrder_ACK.Status;
                this.updateRecords();

            }else{
                this.message = this.responseERP;
                this.showToastMessage('Error', this.responseERP , 'error' );
            }
            
            
        })
        .catch(error => {
            
            if(error.body.message ==='Read timed out'){
                this.message = 'Biztalk ' + error.body.message;
                this.updateRecords();            
            } else {
                this.showToastMessage('Error', error.body.message + error.body.stackTrace , 'error' );
            }
        });
    }

    updateRecords() {
        updateRecords({ recordIds : this.allIds, message : this.message })
        .then(result => {
            if(result){
                this.handleGoFinish();
            }
        })
        .catch(error => {
            this.showToastMessage('Error', error.body.message + error.body.stackTrace , 'error' );
        });
    }

    handleGoFinish() {
        // check if NEXT is allowed on this screen FlowNavigationFinishEvent
        if (this.availableActions.find((action) => action === 'FINISH')) {
            // navigate to the next screen
            const navigateToEnd = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateToEnd);
        }
        this.showToastMessage('Success', this.message , 'success' );
    }

    showToastMessage(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title, //'Toast Success Added Items',
            message: message,// this.numOfAddItems + 'Added Items',
            variant: variant,// 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}