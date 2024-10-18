import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getRecord } from 'lightning/uiRecordApi';
import { CloseActionScreenEvent } from 'lightning/actions';

const FIELDS = ['WorkOrder.AccountId'];

export default class CreateSalesLeadFlowLwc extends NavigationMixin(LightningElement) {
    @api recordId;
    accountId;

    // Wire the getRecord method to fetch the AccountId from the WorkOrder object
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredWorkOrder({ error, data }) {
        if (data) {
            this.accountId = data.fields.AccountId.value;
            this.navigateToAccount();
        } else if (error) {
            console.error('Error fetching work order: ', error);
        }
    }

    navigateToAccount() {
        if (this.accountId) {
            let url = 'salesforce1://sObject/'+ this.accountId +'/view';
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: url
                },
            });

            // Close the quick action after navigation
            this.closeQuickAction();
        }
    }

    closeQuickAction() {
        // Dispatch the CloseActionScreenEvent to close the quick action
        this.dispatchEvent(new CloseActionScreenEvent());
    }

}