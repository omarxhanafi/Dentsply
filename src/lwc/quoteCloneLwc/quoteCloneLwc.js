import { LightningElement, api, wire } from 'lwc';
import cloneQuote from '@salesforce/apex/QuoteCloneController.cloneQuote';
import getQuoteDetails from '@salesforce/apex/QuoteCloneController.getQuoteDetails';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class QuoteCloneLwc extends NavigationMixin(LightningElement) {
    @api recordId; // Quote Id passed from the Quick Action
    quoteName;

    @wire(getQuoteDetails, { quoteId: '$recordId' })
    wiredQuote({ error, data }) {
        if (data) {
            this.quoteName = data.Name;
        } else if (error) {
            console.error('Error fetching Quote details:', error);
        }
    }

    handleYes() {
        this.cloneAndNavigate();
    }

    handleNo() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    // Method to clone the Quote and navigate to the cloned record
    cloneAndNavigate() {
        cloneQuote({ quoteId: this.recordId })
            .then(clonedQuoteId => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Quote \"' + this.quoteName + '\" created successfully!',
                        variant: 'success',
                    })
                );

                // Navigate to the cloned Quote
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: clonedQuoteId,
                        actionName: 'view'
                    }
                });

                // Close the Quick Action
                this.handleNo();
            })
            .catch(error => {
                console.error('Error cloning Quote:', error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'An error occurred while cloning the Quote.',
                        variant: 'error',
                    })
                );
            });
    }
}