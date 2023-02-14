import { LightningElement, track, api, wire} from 'lwc';
import { showToast, goToRecord } from 'c/utils';
import apexSearch from '@salesforce/apex/flowLookupLwcController.search';
import getRecentlyViewed from '@salesforce/apex/flowLookupLwcController.getRecentlyViewed';

export default class Flow_lookupLwc extends LightningElement {

    @api recordId;
    @api accountId;
    // Use alerts instead of toast to notify user
    @api notifyViaAlerts = false;
    @api label;
    @api sObjectName;
    @api isMultiEntry;
    @api maxSelectionSize;
    @track loading = false;
    @track keyword = '';

    initialSelection = [];
    errors = [];
    recentlyViewed = [];

    newRecordOptions = [ ];
    objectsToSearch = [ ];


    /**
     * Loads recently viewed records and set them as default lookup search results (optional)
     */
    @wire(getRecentlyViewed, {accountId: '$accountId', recordId: '$recordId'})
    getRecentlyViewed({data}) {
        console.log('Recently viewed: ', data);
        if (data) {
            this.recentlyViewed = data;
            this.initLookupDefaultResults();
        }
    }

    connectedCallback(){
        this.initLookup();
        //this.initLookupDefaultResults();
    }

    /**
     * Initializes the lookup component by adding new record options and objects to search based on the sObjectName attribute.
     */
    initLookup(){
        if (this.sObjectName.includes('Contact'))
        {
            this.newRecordOptions.push({ value: 'Contact', label: 'New Contact' });
            this.objectsToSearch.push('Contact');
        }
        if (this.sObjectName.includes('Account'))
        {
            this.newRecordOptions.push({ value: 'Account', label: 'New Account' });
            this.objectsToSearch.push('Account');
        }
    }

    /**
     * Handles a lookup search by calling the apexSearch method and passing it the searchTerm, accountId, and objectsToSearch.
     * It then sets the search results on the lookup component.
     * @param event - The search event
     */
    async handleLookupSearch(event) {
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

    /**
     * Handles a change in the selection of the lookup component by checking for errors and storing the value in the recordId attribute.
     * @param event - The selection change event
     */
    handleLookupSelectionChange(event) {
        this.checkForErrors();
        const value = this.template.querySelector('c-lookup').getSelection();
        console.log(value);
        const valueString = JSON.stringify(value);
        this.recordId = value[0].id;
        console.log('Assigned the following id: ' + this.recordId);

    }

    /**
     * Initializes the default results for the lookup component based on the recentlyViewed attribute.
     * If the length of the recentlyViewed list is 1, it sets the initialSelection attribute on the lookup component.
     * If the length of the recentlyViewed list is greater than 1, it sets the default results on the lookup component.
     */
    initLookupDefaultResults() {
        // Make sure that the lookup is present and if so, set its default results
        const lookup = this.template.querySelector('c-lookup');
        if (lookup) {
            console.log('Recently viewed length', this.recentlyViewed.length);
            if(this.recentlyViewed.length == 1){
                this.initialSelection = [{
                    id: this.recentlyViewed[0].id,
                    sObjectType: this.recentlyViewed[0].sObjectType,
                    icon: this.recentlyViewed[0].icon,
                    title: this.recentlyViewed[0].name
                }];
                lookup.initialSelection = this.initialSelection;
            }
            else if(this.recentlyViewed.length>1){
                lookup.setDefaultResults(this.recentlyViewed);
            }
        }
    }

    /**
     * Validates the current selection of the c-lookup component.
     * If the selection is empty or if the selection is larger than the maxSelectionSize property, it shows errors
     */
    checkForErrors() {
        this.errors = [];
        const selection = this.template.querySelector('c-lookup').getSelection();
        // Custom validation rule
        if (this.isMultiEntry && selection.length > this.maxSelectionSize) {
            this.errors.push({ message: `You may only select up to ${this.maxSelectionSize} items.` });
        }
        // Enforcing required field
        if (selection.length === 0) {
            this.errors.push({ message: 'Please make a selection.' });
        }
    }



}