import { LightningElement, track, api, wire} from 'lwc';
import searchApex from '@salesforce/apex/LeadController.search';

export default class DealerLookup extends LightningElement {

    // Exposed Values
    @api recordId;
    @api category;
    @api dealerOutput;
    @api required;

    // Configuration of The Component
    loading = false;
    isMultiEntry = false;
    maxSelectionSize = 1;
    initialSelection = [];
    errors = [];

    @api
    clearSelection(){
        this.dealerOutput = [];
        const lookup = this.template.querySelector('c-lookup');
        if (lookup) {
            lookup.handleClearSelection();
        }
    }

    /**
     * Handles the lookup search event.
     * Calls the server to perform the search and returns the resuls to the lookup.
     * param event `search` event emitted by the lookup
     */
    handleLookupSearch(event) {
        // Call Apex endpoint to search for records and pass results to the lookup
        searchApex({searchTerm: event.detail.searchTerm, category : this.category})
            .then((results) => {
                this.template.querySelector('c-lookup').setSearchResults(results);
            })
            .catch((error) => {
                //this.notifyUser('Lookup Error', 'An error occurred while searching with the lookup field.', 'error');
                // eslint-disable-next-line no-console
                this.errors = [error];
            });
    }

    /**
     * Handles the lookup selection change
     * @param {event} event `selectionchange` event emmitted by the lookup.
     * The event contains the list of selected ids.
     */
    // eslint-disable-next-line no-unused-vars
    handleLookupSelectionChange(event)
    {
        this.checkForErrors();
        const value = this.template.querySelector('c-lookup').getSelection();
        const valueString = JSON.stringify(value);
        if (valueString != '[]') {
            this.dealerOutput = value;
        }
        else{
            this.dealerOutput = [];
        }
        const valueChangeEvent = new CustomEvent("valuechange", {
            detail: { data: this.dealerOutput }
        });
        // Fire the custom event
        this.dispatchEvent(valueChangeEvent);
    }

    checkForErrors() {
        this.errors = [];
        const selection = this.template.querySelector('c-lookup').getSelection();
        // Custom validation rule
        if (this.isMultiEntry && selection.length > this.maxSelectionSize) {
            this.errors.push({ message: `You may only select up to ${this.maxSelectionSize} items.` });
        }
        // Enforcing required field
        if (selection.length === 0 && this.required) {
            this.errors.push({ message: 'Please make a selection.' });
        }
    }

}