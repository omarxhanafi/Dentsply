import { LightningElement, api, wire, track } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_STREET from '@salesforce/schema/Account.BillingStreet';
import ACCOUNT_POSTALCODE from '@salesforce/schema/Account.BillingPostalCode';
import ACCOUNT_CITY from '@salesforce/schema/Account.BillingCity';

import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';

import SALESLEAD_NAME from '@salesforce/schema/Field_Sales_Project_Members__c.Name';

import OPPORTUNITY_NAME from '@salesforce/schema/Opportunity.Name';

export default class LeadConvertSuccess extends LightningElement {
    @api contactid;
    @api accountid;
    @api salesleadid;
    @api campaignmemberid;
    @api opportunityid;
    @track rec;
    @track acc;
    @track recordLoadError;

    @wire(getRecord, { recordId: '$accountid', fields: [ACCOUNT_NAME], optionalFields: [ACCOUNT_STREET, ACCOUNT_POSTALCODE, ACCOUNT_CITY] })
    selectedAccount;

    get accountName() {
        return getFieldValue(this.selectedAccount.data, ACCOUNT_NAME);
    }

    get accountStreet() {
        return getFieldValue(this.selectedAccount.data, ACCOUNT_STREET);
    }
    
    get accountPostalcode() {
        return getFieldValue(this.selectedAccount.data, ACCOUNT_POSTALCODE);
    }

    get accountCity() {
        return getFieldValue(this.selectedAccount.data, ACCOUNT_CITY);
    }

    @wire(getRecord, { recordId: '$contactid', fields: [CONTACT_FIRSTNAME, CONTACT_LASTNAME], optionalFields: [CONTACT_EMAIL, CONTACT_PHONE] })
    selectedContact;

    get contactFirstName() {
        return getFieldValue(this.selectedContact.data, CONTACT_FIRSTNAME);
    }

    get contactLastName() {
        return getFieldValue(this.selectedContact.data, CONTACT_LASTNAME);
    }

    get contactName() {
        var cName = getFieldValue(this.selectedContact.data, CONTACT_FIRSTNAME) + ' ' + getFieldValue(this.selectedContact.data, CONTACT_LASTNAME); 
        return cName;
    }
    
    get contactEmail() {
        return getFieldValue(this.selectedContact.data, CONTACT_EMAIL);
    }

    get contactPhone() {
        return getFieldValue(this.selectedContact.data, CONTACT_PHONE);
    }
    
    get contactUrl(){
        var cUrl = '/' + this.contactid;
        return cUrl;
    }

    get accountUrl(){
        var aUrl = '/' + this.accountid;
        return aUrl;
    }

    get salesLeadUrl(){
        var sUrl = '/' + this.salesleadid;
        return sUrl;
        
    }

    
    @wire(getRecord, { recordId: '$salesleadid', fields: [SALESLEAD_NAME] })
    salesLead;

    get salesLeadName() {
        return getFieldValue(this.salesLead.data, SALESLEAD_NAME);
    }

    @wire(getRecord, { recordId: '$opportunityid', fields: [OPPORTUNITY_NAME] })
    opportunity;

    get opportunityName() {
        return getFieldValue(this.opportunity.data, OPPORTUNITY_NAME);
    }

    get opportunityUrl(){
        var oUrl = '/' + this.opportunityid;
        return oUrl;
    }

    get campaignMemberUrl(){
        var cmUrl = '/' + this.campaignmemberid;
        return cmUrl;
    }

}