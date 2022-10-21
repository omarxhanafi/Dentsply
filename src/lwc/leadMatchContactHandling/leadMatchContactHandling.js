import { LightningElement, track, api, wire } from 'lwc';
import findContacts from '@salesforce/apex/FindLeadMatch.executeLeadMatchSearch';
import findRelatedContacts from '@salesforce/apex/FindLeadMatch.getRelatedContacts';

import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_STREET from '@salesforce/schema/Account.BillingStreet';
import ACCOUNT_POSTALCODE from '@salesforce/schema/Account.BillingPostalCode';
import ACCOUNT_CITY from '@salesforce/schema/Account.BillingCity';

import LEAD_FIRSTNAME from '@salesforce/schema/Lead.FirstName';
import LEAD_LASTNAME from '@salesforce/schema/Lead.LastName';
import LEAD_EMAIL from '@salesforce/schema/Lead.Email';
import LEAD_SALUTATION from '@salesforce/schema/Lead.Salutation';
import LEAD_PROFESSION from '@salesforce/schema/Lead.Profession__c';
import LEAD_LANGUAGE from '@salesforce/schema/Lead.PreferredLanguage__c';

export default class LeadMatchContactHandling extends LightningElement {
    @api recordId;
    @track matchContactList = [];
    @track matchRelatedContactList = [];
    @track shownContactList = [];
    @track ld;
    @track recordLoadError;
    @track newRecord;
    @track existingRecordId;
    @track recordToCreate;
    @track recordTypes;
    @track recordTypeOptions;
    @track selectedRecordTypeId;
    @track outputFirstName;
    @track outputLastName;
    @track progressValue;
    @track accountSelected;
    @api selectedAccountId;
    @api createContact;
    @api selectedContactId;
    @track showMoreContacts;
    @api newContact = {};
    @api contactfields = '';
    @track contactSelected;
    @track showSpinner = true;

    connectedCallback(){
        this.accountSelected = false;
        this.contactSelected = false;
        this.showMoreContacts = false;

        console.log('Connected callback');
        console.log('Record id: ' + this.recordId);
        let input = [];
        input.push(this.recordId);
        input.push('Contact');

        console.log(input);

        let inputList = [];

        inputList.push(input);

        let d1 = new Date();

        findContacts({input: inputList})
            .then(result => {
                this.showSpinner = false;
                
                console.log('time elapsed :' + (new Date().getTime() - d1.getTime()) / 1000);

                console.log(result);
                

                for(var i in result){
                    if(i<=2){
                        this.shownContactList.push(result[i]);
                    }
                    else{
                        this.matchContactList.push(result[i]);
                    }
                }

                console.log('Shown accounts: ' + this.shownContactList);

                if(result[0].matchConfidence > 75){
                        this.selectedAccountId = result[0].matchRecord.Id;
                        this.accountSelected = true;

                        let accId = result[0].matchRecord.Id;
                        let leadId = this.recordId;

                        findRelatedContacts({leadId: leadId, accountId: accId})
                        .then(result => {
                            console.log(result);
                            this.matchRelatedContactList = result;
                            this.accountSelected = true;

                            console.log(result[0]);

                            console.log('Record to select: ' + result[0].matchRecord.Id);

                            if(result[0].matchConfidence > 75){
                                this.contactSelected = true;
                                this.selectedContactId = result[0].matchRecord.Id;
                            }  

                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }

    @wire(getRecord, { recordId: '$selectedAccountId', fields: [ACCOUNT_NAME], optionalFields: [ACCOUNT_STREET, ACCOUNT_POSTALCODE, ACCOUNT_CITY] })
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

    @wire(getRecord, { recordId: '$recordId', fields: [LEAD_FIRSTNAME, LEAD_LASTNAME, LEAD_EMAIL]})
    lead;

    get leadFirstName() {
        return getFieldValue(this.lead.data, LEAD_FIRSTNAME);
    }

    get leadLastName() {
        return getFieldValue(this.lead.data, LEAD_LASTNAME);
    }

    get leadEmail() {
        return getFieldValue(this.lead.data, LEAD_EMAIL);
    }

    get leadSalutation() {
        return getFieldValue(this.lead.data, LEAD_SALUTATION);
    }

    get leadProfession() {
        return getFieldValue(this.lead.data, LEAD_PROFESSION);
    }

    get leadLanguage() {
        return getFieldValue(this.lead.data, LEAD_LANGUAGE);
    }

    handleAccountSelection(event) {
      this.progressValue = event.detail;
      this.selectedAccountId = event.detail;
      console.log('Collected progress value: ' + this.progressValue);
      
      var leadId = this.recordId;
      var accId = this.progressValue;

      findRelatedContacts({leadId: leadId, accountId: accId})
      .then(result => {
          console.log(result);
          this.matchRelatedContactList = result;
          this.accountSelected = true;
      })
      .catch((error) => {
          console.log(error);
      });

    }

    handleAccountLookupSelection(event) {
        this.selectedAccountId = String(event.detail.value);
        console.log('Collected account lookup value: ' + this.selectedAccountId);
        
        var leadId = this.recordId;
        var accId = String(event.detail.value);

        console.log('Lead: ' + leadId);
        console.log('Account: ' + accId);
  
        findRelatedContacts({leadId: leadId, accountId: accId})
        .then(result => {
            console.log(result);
            this.matchRelatedContactList = result;
            this.accountSelected = true;
        })
        .catch(error => {
            console.log(error);
        });
  
      }


    changeAccount(event){
        this.accountSelected = false;
    }

    changeContact(event){
        this.contactSelected = false;
        this.selectedContactId = null;
    }

    handleNewContact(event){
       console.log('New contact: ' + event.target.checked);
       if(event.target.checked == true){ 
            this.createContact = true;
            this.selectedContactId = null;

            const fields = {};
            fields['FirstName']=this.leadFirstName;
            fields['LastName']=this.leadLastName;
            fields['Email']=this.leadEmail;
            fields['Salutation']=this.leadSalutation;
            fields['Profession__c']=this.leadProfession;
            fields['Preferred_Language__c']=this.leadLanguage;

            this.newContact = fields;
            console.log(this.newContact);

       }
       else{
            this.createContact = false;
       } 
    }

    handleContactSelection(event){
        this.selectedContactId = event.detail;
        this.contactSelected = true;
    }

    handleShowMoreContacts(event){
        if(this.showMoreContacts === true){
            this.showMoreContacts = false;
        }
        else{
            this.showMoreContacts = true;
        }
    }

    updateNewContact(event){
        console.log('Updating new contact');
        console.log(event.target.value);
        console.log(event.target.fieldName);
        let fieldName = event.target.fieldName;
        let fieldValue = event.target.value;

        const fields = this.newContact;
        console.log(fields);
        fields[fieldName] = fieldValue;

        this.newContact = fields;
        console.log(fields);
    }
}