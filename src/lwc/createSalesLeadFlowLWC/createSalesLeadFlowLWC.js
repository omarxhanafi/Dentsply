import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class CreateSalesLeadFlowLwc extends NavigationMixin(LightningElement) {
    @api recordId;

    connectedCallback() {
        let flowAPI = 'Lead_Create_lead_from_account';
        let flowURL = 'salesforce1://sObject/'+ this.recordId +'/view';
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: flowURL
            },
        });
    }

}