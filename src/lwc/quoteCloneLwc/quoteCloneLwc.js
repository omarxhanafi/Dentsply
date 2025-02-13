import { LightningElement, api } from 'lwc';
import cloneQuote from '@salesforce/apex/QuoteCloneController.cloneQuote';
import { NavigationMixin } from 'lightning/navigation';

export default class QuoteCloneLwc extends NavigationMixin(LightningElement) {
    @api recordId; // Quote Id

    handleClone() {
        cloneQuote({ quoteId: this.recordId })
            .then(clonedQuoteId => {
                // Navigate to the cloned Quote
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: clonedQuoteId,
                        actionName: 'view'
                    }
                });
            })
            .catch(error => {
                console.error('Error cloning Quote:', error);
            });
    }
}