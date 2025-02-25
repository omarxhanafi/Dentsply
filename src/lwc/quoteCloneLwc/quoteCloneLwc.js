import { LightningElement, api, wire } from 'lwc';
import cloneQuote from '@salesforce/apex/QuoteCloneController.cloneQuote';
import getQuoteDetails from '@salesforce/apex/QuoteCloneController.getQuoteDetails';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import QuoteCloneConfirmation from '@salesforce/label/c.QuoteCloneConfirmation';
import QuoteCloneWarning from '@salesforce/label/c.QuoteCloneWarning';
import QuoteCloneRejectedDenied from '@salesforce/label/c.QuoteCloneRejectedDenied';

export default class QuoteCloneLwc extends NavigationMixin(LightningElement) {
    @api recordId; // Quote Id passed from the Quick Action
    quoteName;
    quoteNumber;
    quoteStatus;

    warningVisible = true;
    redWarningVisible = false;

    // Custom labels
    labels = {
        QuoteCloneConfirmation,
        QuoteCloneWarning,
        QuoteCloneRejectedDenied
    };

    @wire(getQuoteDetails, { quoteId: '$recordId' })
    wiredQuote({ error, data }) {
        if (data) {
            this.quoteName = data.Name;
            this.quoteNumber = data.QuoteNumber;
            this.quoteStatus = data.Status;

            // Show red warning only if status is Rejected or Denied
            if (this.quoteStatus === 'Rejected' || this.quoteStatus === 'Denied') {
                this.redWarningVisible = true;
            }
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
            .then(clonedQuote => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Quote \"' + clonedQuote.Name + '\" - \"' + clonedQuote.QuoteNumber + '\" created successfully!',
                        variant: 'success',
                    })
                );

                // Navigate to the cloned Quote
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: clonedQuote.Id,
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

    closeWarning() {
        this.warningVisible = false;
    }

    closeRedWarning() {
        this.redWarningVisible = false;
    }
}