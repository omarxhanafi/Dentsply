import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';

import doFieldServiceCalloutERP from '@salesforce/apex/FieldServiceCalloutERP.doFieldServiceCalloutERP';
import updateRecords from '@salesforce/apex/FieldServiceCalloutERP.updateRecord';
import updateJSONVersion from '@salesforce/apex/FieldServiceCalloutERP.updateJSONVersion';

export default class DoFieldServiceCallout extends NavigationMixin(LightningElement) {
    @api availableActions = [] ;
    @api varRecordId;
    allIds = [];
    @track hideSpinner = false;
    @track responseERP;
    @track message;

    connectedCallback() {
        this.allIds.push(this.varRecordId);
        this.updateJSONVersion();
        //this.doFieldServiceCalloutERP();
    }

    updateJSONVersion(){
        updateJSONVersion({ recordIds : this.allIds })
        .then(result => {
            console.log('kaixo0');
            if(result){
                console.log('kaixo00');
                this.doFieldServiceCalloutERP();
            }
        })
        .catch(error => {
           this.showToastMessage('Error', error.body.message + error.body.stackTrace , 'error' );
        });

    }

    doFieldServiceCalloutERP() {
        doFieldServiceCalloutERP({ recordIds : this.allIds })
        .then(result => {
            console.log('kaixo1');
            this.responseERP = result;
            let successResult;
            const obj = JSON.parse(this.responseERP);
            if(result && (obj.hasOwnProperty('SFDC_ACK') || obj.hasOwnProperty('ProductOrder_ACK'))){
                console.log('kaixo2');
                //successResult = success;
                this.message = obj.hasOwnProperty('SFDC_ACK') ? obj.SFDC_ACK.Status : obj.ProductOrder_ACK.Status;
                this.updateRecords();

            }else{
                console.log('kaixo3');
                //successResult = error;
                this.message = this.responseERP;
                this.showToastMessage('Error', this.responseERP , 'error' );
            }


            //this.responseERP = result;
            /*if( this.responseERP.includes("Fault")) {
                this.showToastMessage('Error', this.responseERP , 'error' );
            } else {
                this.updateRecords();
            }*/

            
            
        })
        .catch(error => {
           this.showToastMessage('Error', error.body.message + error.body.stackTrace , 'error' );
        });
    }

    updateRecords() {
        updateRecords({ recordIds : this.allIds, message : this.message })
        .then(result => {
            console.log(result);
            console.log('kaixo4' + this.message);

            //this.showToastMessage('Success', this.message , 'success' );
            if(result){
                console.log('kaixo7');

                this.handleGoFinish();


            }
            console.log('kaixo6');

        })
        .catch(error => {
            console.log('kaixo5');

            this.showToastMessage('Error', error.body.message + error.body.stackTrace , 'error' );
        });
    }

    handleGoFinish() {
        // check if NEXT is allowed on this screen FlowNavigationFinishEvent
        if (this.availableActions.find((action) => action === 'FINISH')) {
            console.log('agur');
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
        //this.handleGoFinish();          
    }
}