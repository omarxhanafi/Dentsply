import { LightningElement, track, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import STREET_FIELD from '@salesforce/schema/Account.BillingStreet';
import POSTALCODE_FIELD from '@salesforce/schema/Account.BillingPostalCode';
import CITY_FIELD from '@salesforce/schema/Account.BillingCity';

export default class LeadMatchRecord extends LightningElement {

    @api recordid;
    @api accountid;
    @api progressValue;
    @api con;
    @api confidence;
    @track recordLoadError;
    @api objecttype;
    @api reasons;

    connectedCallback(){
        console.log('Collected accountId: ' + this.accountid);
        console.log('Contact: ' + this.con);
        console.log('Reasons: ' + this.reasons);
        if(this.con != null){
            console.log('Collected contact: ' + this.con.FirstName + ' ' + this.con.LastName);
        }
    }

    get isContact(){
        if(this.con != null){
            return true;
        }
        else{
            return false;
        }
    }

    @wire(getRecord, { recordId: '$accountid', fields: [NAME_FIELD], optionalFields: [STREET_FIELD, POSTALCODE_FIELD, CITY_FIELD] })
    account;

     get name() {
        return getFieldValue(this.account.data, NAME_FIELD);
    }

    get street() {
        return getFieldValue(this.account.data, STREET_FIELD);
    }
    
    get postalcode() {
        return getFieldValue(this.account.data, POSTALCODE_FIELD);
    }

    get city() {
        return getFieldValue(this.account.data, CITY_FIELD);
    }

    get iconStrength(){
        if(this.confidence == 'Low'){
            return "-1";
        }
        else if(this.confidence == 'High'){
            return "3";
        }
        else{
            return "2";
        }
    }


    selectRecord(event){
        console.log(this.recordid);
        this.progressValue = this.recordid;

        const selectedEvent = new CustomEvent("progressvaluechange", {
            detail: this.progressValue
        });
        this.dispatchEvent(selectedEvent);
    }

}