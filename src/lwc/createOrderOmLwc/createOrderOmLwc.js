import { LightningElement, track, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { showToast } from 'c/utils';
// Current User Id
import currentUserId from '@salesforce/user/Id';
// Schema
import USER_CURRENCY_FIELD from '@salesforce/schema/User.DefaultCurrencyIsoCode';
//Apex Controllers
import getPriceBooksEntriesCurrencies from '@salesforce/apex/OrderManagement_CC.getPriceBooksEntriesCurrencies';
import getPriceBooksList from '@salesforce/apex/OrderManagement_CC.getPriceBooks';
import getContracts from '@salesforce/apex/OrderManagement_CC.getContracts';
import getSourceRecords from '@salesforce/apex/OrderManagement_CC.getSourceRecords';
import getAddressRecords from '@salesforce/apex/OrderManagement_CC.getAddressRecords';
import getRelatedAccountsWithContact from '@salesforce/apex/OrderManagement_CC.getRelatedAccountsWithContact';
import getAccountRecordType from '@salesforce/apex/OrderManagement_CC.getAccountRecordType';
import checkIfAllowToCreateOrder from '@salesforce/apex/OrderManagement_CC.checkIfAllowToCreateOrder';
import apexSearch from '@salesforce/apex/flowLookupLwcController.search';

// Custom Labels
import createOrderLabel from '@salesforce/label/c.OM_Create_Order';
import createOrderInstructionsLabel from '@salesforce/label/c.OM_Create_Order_Instructions';
import cancelLabel from '@salesforce/label/c.OM_Cancel';
import selectCurrency from '@salesforce/label/c.OM_Select_Currency';
import selectPricebook from '@salesforce/label/c.OM_Select_Pricebook';
import selectContract from '@salesforce/label/c.OM_Select_Contract';
import noPricebooksAccess from '@salesforce/label/c.OMNoPricebookAccess';
import noAvailablePricebooks from '@salesforce/label/c.OM_No_Available_Pricebooks';
import noAvailableCurrencies from '@salesforce/label/c.OM_No_Available_Currencies';
import OMCanNotCreateOrder from '@salesforce/label/c.OMCanNotCreateOrder';
import noneCustomLabel from '@salesforce/label/c.OMnoneCustomLabel';
import searchLabel from '@salesforce/label/c.OD_Search';

export default class CreateOrderOmLwc extends LightningElement {
    @api userUiTheme;
    @api parentId;
    @track currentUserId = currentUserId;
    @track selectedCurrency = '';
    @track currencies = [];
    @track selectedPricebookId = '';
    @track pricebooks = [];
    @track contracts = [];
    @track selectedContractId = '';
    @track sourceRecords = []; 
    @track selectedSourceRecordId = '';
    @track autoSelectedSourceName = '';
    @track showAutoSelectedSourceRecord = false;
    showNoAccessPriceBookError = false;
    @track addressRecords = [];
    @track selectedAddressRecordId = '';
    allowedToCreateOrder = false;
    @track relatedAccountsWithContact = []; 
    @track selectedAccountsWithContactId = '';
    @track isMicroserviceCallOutPricebook = false;  
    sourceRecordMandatory = false;
    @track loading = true;
    @track labels = {
        createOrderLabel, 
        createOrderInstructionsLabel, 
        cancelLabel,
        selectCurrency, 
        selectPricebook, 
        selectContract,
        noPricebooksAccess,
        noAvailablePricebooks,
        noAvailableCurrencies,
        OMCanNotCreateOrder,
        noneCustomLabel,
        searchLabel
    };
    @track optionNull = ({ label: this.labels.noneCustomLabel, value: null});
    @track initialSelection = [];
    @track errors = [];
    @track recentlyViewed = [];
    @track isMultiEntry = false;

    @track newRecordOptions = [ ];
    @track objectsToSearch = [ ];
    @track displayAccountSelection = false;

    @wire(getRecord, { recordId: '$currentUserId', fields: [USER_CURRENCY_FIELD] })
    currentUser;

    get currentUserCurrencyIsoCode() {
        return getFieldValue(this.currentUser.data, USER_CURRENCY_FIELD);
    }
    //call back
    connectedCallback() {
        this.getAccountRecordType();
        this.getRelatedAccountsWithContact();
        if(this.parentId == null){
            this.displayAccountSelection = true;
        }
    }
    //method where we get user available pricebooks
    getPriceBooksList() {
		getPriceBooksList()
			.then(result => {
                if(result) {
                    this.pricebooks = result;
                    if (this.pricebooks.length === 1) {
                        this.selectedPricebookId = this.pricebooks[0].Id;
                        this.getPriceBooksEntriesCurrencies();
                    } else {
                        this.loading = false;
                    }
                } else {
                    showToast(this, this.userUiTheme, 'Info', this.labels.noAvailablePricebooks, 'info');
                    this.loading = false;
                }
			})
			.catch(error => {
                showToast(this, this.userUiTheme, 'Info', error.body.message + error.body.stackTrace, 'info');
                this.loading = false;
			});
    }
    //method to get pricebook currencies
    getPriceBooksEntriesCurrencies() {
		getPriceBooksEntriesCurrencies({pricebookId : this.selectedPricebookId})
			.then(result => {
                if (result) {
                    this.currencies = result;
                    for(let i = 0; i < this.pricebooks.length; i++){
                        if(this.selectedPricebookId == this.pricebooks[i].Id){
                            this.isMicroserviceCallOutPricebook = this.pricebooks[i].ShowPricingfromMicroServiceOM__c;
                            this.sourceRecordMandatory = this.pricebooks[i].SourceId__c ? true : false;
                            continue;
                        }
                    }
                    if (this.currencies.length === 1) {
                        this.selectedCurrency = this.currencies[0].CurrencyIsoCode;
                        this.getSourceRecords()
                    } else if (this.currencies.length > 1) {
                        const filteredCurrencies = this.currencies.filter(currency => currency.CurrencyIsoCode === this.currentUserCurrencyIsoCode);
                        if (filteredCurrencies.length === 1) {
                            this.selectedCurrency = filteredCurrencies[0].CurrencyIsoCode;
                            this.getSourceRecords()
                        } else {
                            this.loading = false;
                        }
                    } else {
                        this.loading = false;
                    }
                    this.loading = false;
                } else {
                    showToast(this, this.userUiTheme, 'Info', this.labels.noAvailableCurrencies, 'info');
                    this.loading = false;
                }
			})
			.catch(error => {
                showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace, 'error');
                this.loading = false;
			});
    }
    //get the accounts to pick the accountsrelated with the contact
    getRelatedAccountsWithContact() { 
        getRelatedAccountsWithContact({parentId : this.parentId})
        .then(result => {
            if(result) {
                this.relatedAccountsWithContact = result;
                if (this.relatedAccountsWithContact.length === 1) {
                    this.selectedAccountsWithContactId = this.relatedAccountsWithContact[0].AccountId;
                    this.checkIfAllowToCreateOrder();
                } else {
                    this.loading = false;
                }
            } else {
                this.checkIfAllowToCreateOrder();
            }
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace, 'error');
            this.loading = false;
        });
    }
    //check permission to create order based on country rule
    checkIfAllowToCreateOrder() { 
        let accId;

        if(this.parentId){
        accId = this.selectedAccountsWithContactId? this.selectedAccountsWithContactId : this.parentId;
        checkIfAllowToCreateOrder({parentId : accId})
        .then(result => {
            if(result) {
                this.allowedToCreateOrder = result;
                if(! this.allowedToCreateOrder){
                    this.getPriceBooksList(); 
                } else{
                    this.loading = false;
                }
                
            } else {
                this.getPriceBooksList();
            }
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace, 'error');
            this.loading = false;
        });
        }
        else{
            this.loading = false;
        }
    }
    //get source records related from the account
    getSourceRecords() { 
        getSourceRecords({parentId : this.parentId, pricebookId: this.selectedPricebookId, accountId : this.selectedAccountsWithContactId})
        .then(result => {
            if(result) {
                this.sourceRecords = result;
                if (this.sourceRecords.length === 1) {
                    this.selectedSourceRecordId = this.sourceRecords[0].Id;
                    this.autoSelectedSourceName = this.sourceRecords[0].Combined_Fields__c;
                    this.showAutoSelectedSourceRecord = true;
                    this.getAddressRecords();
                } else 
                    if (this.sourceRecords.length > 1) {
                        this.loading = false;
                    } else {
                        this.getAddressRecords();
                        this.loading = false;
                    }
            } else {
                this.getAddressRecords();
            }
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace, 'error');
            this.loading = false;
        });
    }
    //get address related from source record customer Id
    getAddressRecords() { 
        getAddressRecords({parentId : this.parentId, pricebookId: this.selectedPricebookId, accountId : this.selectedAccountsWithContactId, sourceRecId : this.selectedSourceRecordId})
        .then(result => {
            if(result) {
                this.addressRecords = result;
                if (this.addressRecords.length === 1) {
                    this.selectedAddressRecordId = this.addressRecords[0].Id;
                    this.getContracts();
                } else 
                    if (this.addressRecords.length > 1) {
                        this.loading = false;
                    } else {
                        this.getContracts();
                        this.loading = false;
                    }
            } else {
                this.getContracts();
            }
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace, 'error');
            this.loading = false;
        });
    }
    //get contract related from accounts
    getContracts() {
        getContracts({pricebookId: this.selectedPricebookId,
                        parentId : this.parentId,
                        currencyIsoCode : this.selectedCurrency})
        .then(result => {
            if(result) {
                this.contracts = result;
                if (this.contracts.length === 0 && this.pricebooks.length === 1 && this.selectedCurrency) {
                    this.createOrder();
                } else {
                    this.loading = false;
                }
            } else {
                if (this.pricebooks.length === 1 && this.selectedCurrency) {
                    this.createOrder();
                } else {
                    this.loading = false;
                }
            }
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace, 'error');
            this.loading = false;
        });
    }
    //set pricebook picklist to select from UI
    get pricebooksOptions() {
        const options = this.pricebooks.map(entry => {
            return ({ label: entry.Name , value: entry.Id })
        });
        return [].concat(this.optionNull, options);
    }
    //set currencies picklist to select from UI
    get currenciesOptions() {
        const options = this.currencies.map(entry => {
            return ({ label: entry.CurrencyIsoCode , value: entry.CurrencyIsoCode })
        });
        return [].concat(this.optionNull, options);
    }

    //set contract picklist to select from UI
    get contractsOptions() {
        const options = this.contracts.map(entry => {
            return ({ label: entry.Name + ' - ' +  entry.Discount_Type__c + ' - ' + entry.Discount__c + '%', value: entry.Id })
        });
        return [].concat(this.optionNull, options);
    }
    //set accounts picklist to select from UI
    get relatedAccountsWithContactOptions() {
        const options = this.relatedAccountsWithContact.map(entry => {
            return ({ label: entry.Account.Name, value: entry.AccountId })
        });
        return [].concat(this.optionNull, options);
    }
    //set source records picklist to select from UI
    get soruceRecordOptions() { 
        const options = this.sourceRecords.map(entry => {
            return ({ label: entry.Combined_Fields__c , value: entry.Id })
        });
        return [].concat(this.optionNull, options);
    }
    //set address picklist to select from UI
    get addressRecordsOptions() { 
        const options = this.addressRecords.map(entry => {
            return ({ label: entry.CombinedFieldsOrder__c , value: entry.Id })
        });
        return [].concat(this.optionNull, options);
    }

    //store user pricebook selection from UI in variable
    handlePricebookChange(event) {
        this.selectedPricebookId = event.detail.value;
        this.loading = true;
        this.currencies = [];
        this.selectedCurrency = '';
        this.contracts = [];
        this.selectedContractId = '';
        this.sourceRecords = []; 
        this.selectedSourceRecordId = '';
        this.addressRecords = [];
        this.selectedAddressRecordId = '';
        this.getPriceBooksEntriesCurrencies();
    }
    //store user currency selection from UI in variable
    handleCurrencyChange(event) {
        this.selectedCurrency = event.detail.value;
        this.loading = true;
        this.contracts = []; 
        this.selectedContractId = '';
        this.sourceRecords = []; 
        this.selectedSourceRecordId = '';
        this.addressRecords = [];
        this.selectedAddressRecordId = '';
        this.getSourceRecords();
    }
    //store account selection from UI in variable
    handlerelatedAccountsWithContactChange(event) { 
        this.selectedAccountsWithContactId = event.detail.value;
        this.loading = true;
        this.pricebooks = [];
        this.selectedPricebookId = '';
        this.currencies = [];
        this.selectedCurrency = '';
        this.contracts = []; 
        this.selectedContractId = '';
        this.sourceRecords = []; 
        this.selectedSourceRecordId = '';
        this.addressRecords = [];
        this.selectedAddressRecordId = '';
        this.checkIfAllowToCreateOrder();
    }
    //store user source record selection from UI in variable
    handleSourceRecordChange(event) { 
        this.selectedSourceRecordId = event.detail.value;
        this.loading = true;
        this.addressRecords = [];
        this.selectedAddressRecordId = '';
        this.contracts = []; 
        this.selectedContractId = '';
        this.getAddressRecords();
    }
    //store user address selection from UI in variable
    handleAddressChange(event) { 
        this.selectedAddressRecordId = event.detail.value;
        this.loading = true;
        this.contracts = []; 
        this.selectedContractId = '';
        this.getContracts();
    }
    //store user contract selection from UI in variable
    handleContractChange(event) {
        this.selectedContractId = event.detail.value;
    }

    async handleAccountSearch(event) {
        let searchTerm = event.detail;
    
            try
            {
                const searchResults = await apexSearch({searchTerm:     searchTerm.searchTerm,
                    contactAccountId:      this.accountId,
                    searchObjects:  this.objectsToSearch});
    
                this.template.querySelector('c-lookup').setSearchResults(searchResults);
            }
            catch (error)
            {
                console.error('Lookup error', JSON.stringify(error));
                this.errors = [error];
            }
    
    }

    handleAccountChange(event) {
        this.errors = [];
        const selection = this.template.querySelector('c-lookup').getSelection();
        
        // Enforcing required field
        if (selection.length === 0) {
            this.errors.push({ message: 'Please make a selection.' });
        }
        const value = this.template.querySelector('c-lookup').getSelection();
        this.parentId = value[0].id;
        this.getAccountRecordType();
        //this.getPriceBooksList();
        this.getRelatedAccountsWithContact();

    }

    //show currency picklist in UI
    get displayCurrenciesCombo() {
        return this.currencies.length > 1;
    }
    //show currency pricebook in UI
    get displayPricebooksCombo() {
        this.showNoAccessPriceBookError = !this.pricebooks.length > 0 && !this.allowedToCreateOrder ;
        return this.pricebooks.length > 0 ;
    }
    //show error when no pricebooks available in UI
    get displayPricebookError() {
        return (this.pricebooks.length > 0 && !this.allowedToCreateOrder);
    }
    //show contract picklist in UI
    get displayContractsCombo() {
        return this.contracts.length > 0;
    }
    //show source records picklist in UI
    get displaySourceRecordsCombo() { 
        return this.sourceRecords.length > 1 ;
    }
    //show address picklist in UI
    get displayAddressCombo() { 
        return this.addressRecords.length > 1 ;
    }


    //show account picklist in UI
    get displayRelatedAccountsWithContactCombo() { 
        return this.relatedAccountsWithContact.length > 1;
    }
    //this is to create the order from selected parameters
    createOrder() {
        this.loading = true;
       
        const objectDetails = {
            detail : {'contractId' : this.selectedContractId,
                      'pricebookId' : this.selectedPricebookId,
                      'currency' : this.selectedCurrency,
                      'sourceRecordId' : this.selectedSourceRecordId,
                      'addressRecordId' : this.selectedAddressRecordId,
                      'selectedAccountsWithContactId' : this.selectedAccountsWithContactId,
                      'accountId' : this.parentId} 
        }
        const selectEvent = new CustomEvent('createorder',objectDetails );
        this.dispatchEvent(selectEvent);
    }
    //when required parameters are selected allows create button to be click
    get enableCreateButton() {
        return !this.selectedPricebookId || !this.selectedCurrency || ((this.isMicroserviceCallOutPricebook || this.sourceRecordMandatory) && !this.selectedSourceRecordId && this.accountRecordType =='CIM_Account');
    }
    //handle cancel action
    cancel() {
        const selectEvent = new CustomEvent('cancel', {
        });
        this.dispatchEvent(selectEvent);
    }

    //get account record type
    getAccountRecordType() {

        if(this.parentId){
            getAccountRecordType({parentId : this.parentId })
                .then(result => {
                    if(result) {
                        this.accountRecordType = result;
                    } 
                })
                .catch(error => {
                    showToast(this, this.userUiTheme, 'Info', error.body.message + error.body.stackTrace, 'info');
                    this.loading = false;
                });
        }
        else{
            this.newRecordOptions.push({ value: 'Account', label: 'New Account' });
            this.objectsToSearch.push('Account');
        }    
    }

}