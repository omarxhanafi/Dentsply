import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';

import getPricebookBundles from '@salesforce/apex/AddBundles.getPricebookBundles';
import getPriceBooksList from '@salesforce/apex/AddBundles.getPriceBooks';
import updateRecord from '@salesforce/apex/AddBundles.updateRecord';
import insertQuoteBundles from '@salesforce/apex/AddBundles.insertQuoteBundles';
import uIThemeDisplayed from '@salesforce/apex/OrderManagement_CC.uIThemeDisplayed';

import SEARCH from '@salesforce/label/c.search_bundle';
import PRICEBOOK from '@salesforce/label/c.pricebook';
import UPDATE_QUOTE from '@salesforce/label/c.update_quote';
import INSERT_BUNDLES from '@salesforce/label/c.insert_bundles';
import SUCCESS from '@salesforce/label/c.success_bundles';
import ERROR from '@salesforce/label/c.error_bundles';
import ADDED_ITEMS from '@salesforce/label/c.added_bundles';
import NONE from '@salesforce/label/c.none_bundles';



export default class AddBundles extends NavigationMixin(LightningElement) {
    @api availableActions = [] ;
    varRecordId ;
    pricebookId ;

    @api quoteRecord ;

    defQuantity=0;
    @track bundles;
    @track filterWord = '';
    @track isMobile = false;
    showPriceBookmenu;
    selectedPricebookId = '';
    lockUpdateButton = true;
    numOfAddItems = 0;
    @track disableInsertButton = true;
    @track showSpinner = true;
    pricebooks = [];
    optionNull = ({ label: NONE, value: null});
    quoteProductBundlesToinsert = [];

    labels = {
        SEARCH,
        PRICEBOOK,
        UPDATE_QUOTE,
        INSERT_BUNDLES,
        SUCCESS,
        ERROR,
        ADDED_ITEMS,
        NONE,
    };
    connectedCallback() {
        this.varRecordId = this.quoteRecord.Id;
        this.pricebookId = this.quoteRecord.Pricebook2Id;
        this.showPriceBookmenu = this.pricebookId ? false : true;
        this.uIThemeDisplayed();
        this.getPriceBooksList();
        this.getPricebookBundles();
        this.showSpinner = false;
    }

    uIThemeDisplayed() {
        uIThemeDisplayed()
            .then(result => {
                this.userUiTheme = result;
                if(this.userUiTheme === 'Theme4t'){
                    this.isMobile = true;
                }
            })
            .catch(error => {
                this.showSuccessAddedItemsToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });
    }

    updateRecord() {
        this.getPricebookBundles();
        updateRecord({quoteId : this.varRecordId, pricebookId : this.selectedPricebookId})
            .then(result => {
                this.showPriceBookmenu = result;
            })
            .catch(error => {
                this.showSuccessAddedItemsToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );

            });
    }

    getPricebookBundles() {
        let pbId = this.pricebookId ? this.pricebookId : this.selectedPricebookId;
        getPricebookBundles({pricebookId : pbId})
            .then(result => {
                this.bundles = result;
                if(this.bundles){
                    for(let i=0 ; i< this.bundles.length ; i++){
                        this.bundles[i].quantity = this.defQuantity;
                        this.bundles[i].isSelected= false;
                        this.bundles[i].showMaterials=false;
                        this.bundles[i].ind=i;
                        this.bundles[i].hideFilteredItem = false;
                        this.bundles[i].fileId = this.bundles[i].hasOwnProperty('AttachedContentDocuments') ? this.bundles[i].AttachedContentDocuments[0].ContentDocumentId : null ;
                        this.bundles[i].disableFileId = this.bundles[i].hasOwnProperty('AttachedContentDocuments') ? false : true ;
                        if(this.bundles[i].hasOwnProperty('AttachedContentDocuments')){
                            this.bundles[i].fileId = this.bundles[i].AttachedContentDocuments[0].ContentDocumentId ;
                        } else {
                            this.bundles[i].fileId = null;
                        }
                    }
                }
            })
            .catch(error => {
                this.showSuccessAddedItemsToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );

            });
    }

    get pricebooksOptions() {
        const options = this.pricebooks.map(entry => {
            return ({ label: entry.Name , value: entry.Id })
        });
        return [].concat(this.optionNull, options);
    }



    handlePricebookChange(event) {
        this.lockUpdateButton = false;
        this.selectedPricebookId = event.detail.value;
    }

    getPriceBooksList() {
        getPriceBooksList()
            .then(result => {
                if(result) {
                    this.pricebooks = result;
                }
            })
            .catch(error => {
                this.showSuccessAddedItemsToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );

            });
    }

    handleSelectChange(event) {
        let index = event.target.dataset.index;
        let isSelected = event.target.checked;
        this.numOfAddItems = isSelected ? this.numOfAddItems + 1 : this.numOfAddItems - 1;

        this.disableInsertButton = this.numOfAddItems > 0 ? false : true;
        this.bundles[index].isSelected = isSelected;
        this.bundles[index].quantity = isSelected ? 1 : this.defQuantity;
    }

    handleInsertRecords() {
        this.showSpinner = true;
        this.disableInsertButton = true;
        for(let i = 0; i < this.bundles.length; i++) {

            if(this.bundles[i].isSelected && this.bundles[i].quantity > 0){
                this.bundles[i].isSelected = false;
                let quoteProductBundle = { BundlePrice__c : this.bundles[i].Total_price__c,
                    Quantity__c : this.bundles[i].quantity,
                    ProductBundle__c : this.bundles[i].Id,
                    Quote__c : this.varRecordId,
                    CurrencyIsoCode : this.quoteRecord.CurrencyIsoCode}
                this.quoteProductBundlesToinsert.push(quoteProductBundle);
            }
        }
        this.insertQuoteBundles();
    }

    insertQuoteBundles() {
        insertQuoteBundles({quoteBundlesToInsert : this.quoteProductBundlesToinsert})
            .then(result => {
                this.disableInsertButton = result;
                this.showSpinner = false;
                this.showSuccessAddedItemsToast(this.labels.SUCCESS, this.numOfAddItems + ' ' + this.labels.ADDED_ITEMS, 'success' );
                this.numOfAddItems = 0;
                this.handleGoFinish();
            })
            .catch(error => {
                this.showSuccessAddedItemsToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );

            });

    }
    handleFilterChange(event){
        this.filterWord = event.target.value;
        for(let i=0 ; i< this.bundles.length ; i++){
            this.bundles[i].hideFilteredItem = this.filterWord.length > 2 && this.bundles[i].Name.toUpperCase().includes(this.filterWord.toUpperCase())== false  ? true : false;
        }
    }

    handleShowDetails(event) {
        let ind = event.target.dataset.index;
        this.bundles[ind].showMaterials = this.bundles[ind].showMaterials ? false : true;
    }

    handleDownload(event){

        let ind = event.target.dataset.index;

        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'filePreview',
                actionName: 'view',
            },
            state:{
                selectedRecordId: this.bundles[ind].fileId
            }
        })
    }

    showSuccessAddedItemsToast(vTitle, vMessage, vVariant) {
        const evt = new ShowToastEvent({
            title: vTitle,
            message: vMessage,
            variant: vVariant,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    handleGoFinish() {
        // check if NEXT is allowed on this screen FlowNavigationFinishEvent
        if (this.availableActions.find((action) => action === 'FINISH')) {
            // navigate to the next screen
            const navigateToEnd = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateToEnd);
        }
    }
}