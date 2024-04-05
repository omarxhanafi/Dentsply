import { LightningElement, track, api, wire } from 'lwc';
import getLeadDetails from '@salesforce/apex/leadContactController.getLeadDetails';
import getContactDetails from '@salesforce/apex/leadContactController.getContactDetails';

const columns = [
    { label: 'Field name', fieldName: 'name' },
    { label: 'Lead', fieldName: 'lead', type: 'string' },
    { label: 'Contact', fieldName: 'contact', type: 'string' }
];

export default class CompareLeadContact extends LightningElement {
    @api leadId;
    @api contactId;
    @api updatePhone = false;
    @api updateEmail = false;
    @api updateFirstName = false;
    @api updateLastName = false;
    @api updateSalutation = false;
    @api updateProfession = false;
    @api updateSpecialty = false;
    @api updateLanguage = false;
    @api lead;
    @api contact;
    phoneDiff = false;
    emailDiff = false;
    firstnameDiff = false;
    lastnameDiff = false;
    salutationDiff = false;
    professionDiff = false;
    specialtyDiff = false;
    languageDiff = false;

    contactPhoneEmpty = false;
    contactEmailEmpty = false;
    contactFirstnameEmpty = false;
    contactLastnameEmpty = false;
    contactSalutationEmpty = false;
    contactProfessionEmpty = false;
    contactSpecialtyEmpty = false;
    contactLanguageEmpty = false;

    data = [];
    columns = columns;

    connectedCallback() {
        this.getLead();
    }

    renderedCallback(){
        
    }

    getLead(){
        console.log('Getting lead data for ' + this.leadId);
        getLeadDetails({leadId: this.leadId})
        .then(result => {
            console.log(result);
            this.lead = result;
            this.getContact();
        })
        .catch(error => {
            console.log('Could not load lead: ' + error.body.messsage);
        })
    }

    get leadFirstName() {
        if(this.lead){
            return this.lead.FirstName;
        }
        else{
            return null;
        }
    }

    get leadLastName() {
        if(this.lead){
            return this.lead.LastName;
        }
        else{
            return null;
        }
    }

    get leadEmail() {
        if(this.lead){
            return this.lead.Email;
        }
        else{
            return null;
        }
    }

    get leadPhone() {

        if(this.lead){
            return this.lead.Phone;
        }
        else{
            return null;
        }
    }

    get leadSalutation() {
        if(this.lead){
            return this.lead.Salutation;
        }
        else{
            return null;
        }
    }

    get leadProfession() {
        if(this.lead){
            return this.lead.RoleProfession__c;
        }
        else{
            return null;
        }
    }

    get leadSpecialty() {
        if(this.lead){
            return this.lead.Specialty__c;
        }
        else{
            return null;
        }
    }

    get leadLanguage() {
        if(this.lead){
            return this.lead.PreferredLanguage__c;
        }
        else{
            return null;
        }
    }

    getContact(){
        console.log('Getting contact data for ' + this.contactId);
        getContactDetails({contactId: this.contactId})
        .then(result => {
            console.log(result);
            this.contact = result;
            this.compareRecords();
        })
        .catch(error => {
            console.log('Could not load contact: ' + error.body.messsage);
        })
    }

    get contactFirstName() {
        if(this.contact){
            return this.contact.FirstName;
        }
        else{
            return null;
        }
    }

    get contactLastName() {
        if(this.contact){
            return this.contact.LastName;
        }
        else{
            return null;
        }
    }

    get contactEmail() {
        if(this.contact){
            return this.contact.Email;
        }
        else{
            return null;
        }
    }

    get contactPhone() {
        if(this.contact){
            return this.contact.Phone;
        }
        else{
            return null;
        }
    }

    get contactSalutation() {
        if(this.contact){
            return this.contact.Salutation;
        }
        else{
            return null;
        }
    }

    get contactProfession() {
        if(this.contact){
            return this.contact.Profession__c;
        }
        else{
            return null;
        }
    }

    get contactSpecialty() {
        if(this.contact){
            return this.contact.Specialty__c;
        }
        else{
            return null;
        }
    }

    get contactLanguage() {
        if(this.contact){
            return this.contact.Preferred_Language__c;
        }
        else{
            return null;
        }
    }

    handleFirstNameChange(event){
        console.log('Value: ' + event.target.value);

        if(event.target.value == 'leadFirstName'){
            this.updateFirstName = true;
        }
        else{
            this.updateFirstName = false;
        }
    }

    handleLastNameChange(event){
        console.log('Value: ' + event.target.value);

        if(event.target.value == 'leadLastName'){
            this.updateLastName = true;
        }
        else{
            this.updateLastName = false;
        }
    }

    handlePhoneChange(event){
        console.log('Value: ' + event.target.value);

        if(event.target.value == 'leadPhone'){
            this.updatePhone = true;
        }
        else{
            this.updatePhone = false;
        }

    }

    handleEmailChange(event){
        console.log('Value: ' + event.target.value);

        if(event.target.value == 'leadEmail'){
            this.updateEmail = true;
        }
        else{
            this.updateEmail = false;
        }
    }

    handleSalutationChange(event){

        if(event.target.value == 'leadSalutation'){
            this.updateSalutation = true;
        }
        else{
            this.updateSalutation = false;
        }

    }

    handleProfessionChange(event){

        if(event.target.value == 'leadProfession'){
            this.updateProfession = true;
        }
        else{
            this.updateProfession = false;
        }
    }

    handleSpecialtyChange(event){

        if(event.target.value == 'leadSpecialty'){
            this.updateSpecialty = true;
        }
        else{
            this.updateSpecialty = false;
        }
    }

    handleLanguageChange(event){

        if(event.target.value == 'leadLanguage'){
            this.updateLanguage = true;
        }
        else{
            this.updateLanguage = false;
        }
    }

    compareRecords(){
        console.log('Comparing records');
        console.log(this.lead);
        console.log(this.contact);
        if(this.lead && this.contact){

            if(this.lead.Email != null && this.lead.Email != this.contact.Email){
                this.emailDiff = true;
                if(this.contact.Email == null){
                    this.contactEmailEmpty = true;
                }
            }
            if(this.lead.Phone != null && this.lead.Phone != this.contact.Phone){
                this.phoneDiff = true;
                if(this.contact.Phone == null){
                    this.contactPhoneEmpty = true;
                }
            }
            if(this.lead.FirstName != null && this.lead.FirstName != this.contact.FirstName){
                this.firstnameDiff = true;
                if(this.contact.FirstName == null){
                    this.contactFirstnameEmpty = true;
                }
            }
            if(this.lead.LastName != null && this.lead.LastName != this.contact.LastName){
                this.lastnameDiff = true;
                if(this.contact.LastName == null){
                    this.contactLastnameEmpty = true;
                }
            }
            if(this.lead.Salutation != null && this.lead.Salutation != this.contact.Salutation){
                this.salutationDiff = true;
                if(this.contact.Salutation == null){
                    this.contactSalutationEmpty = true;
                }
            }
            if(this.lead.RoleProfession__c != null && this.lead.RoleProfession__c != this.contact.Profession__c){
                this.professionDiff = true;
                if(this.contact.Profession__c == null){
                    this.contactProfessionEmpty = true;
                }
            }
            if(this.lead.Specialty__c != null && this.lead.Specialty__c != this.contact.Specialty__c){
                this.specialtyDiff = true;
                if(this.contact.Specialty__c == null){
                    this.contactSpecialtyEmpty = true;
                }
            }
            if(this.lead.PreferredLanguage__c != null && this.lead.PreferredLanguage__c != this.contact.Preferred_Language__c){
                this.languageDiff = true;
                if(this.contact.Preferred_Language__c == null){
                    this.contactLanguageEmpty = true;
                }
            }

        }
    }


}