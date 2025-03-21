import { LightningElement, api, wire } from 'lwc';
import cloneQuote from '@salesforce/apex/QuoteCloneController.cloneQuote';
import getQuoteDetails from '@salesforce/apex/QuoteCloneController.getQuoteDetails';
import checkPricingChanges from '@salesforce/apex/QuoteCloneController.checkPricingChanges';
import checkProductStructureChanges from '@salesforce/apex/QuoteCloneController.checkProductStructureChanges';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import OrderCloneConfirmation from '@salesforce/label/c.OrderCloneConfirmation';
import OrderCloneWarning from '@salesforce/label/c.OrderCloneWarning';
import QuoteCloneRejectedDenied from '@salesforce/label/c.QuoteCloneRejectedDenied';
import OrderCloneRejectedDeniedConfirmation from '@salesforce/label/c.OrderCloneRejectedDeniedConfirmation';
import OrderCloneHeader from '@salesforce/label/c.OrderCloneHeader';
import OrderCloneChangesDetected from '@salesforce/label/c.OrderCloneChangesDetected';
import OrderCloneAndSeparator from '@salesforce/label/c.OrderCloneAndSeparator';
import OrderClonePricingChanges from '@salesforce/label/c.OrderClonePricingChanges';
import OrderCloneStructuralChanges from '@salesforce/label/c.OrderCloneStructuralChanges';
import OrderCloneSeeMore from '@salesforce/label/c.OrderCloneSeeMore';
import OrderCloneSeeLess from '@salesforce/label/c.OrderCloneSeeLess';
import OrderClonePricingChangesHeader from '@salesforce/label/c.OrderClonePricingChangesHeader';
import OrderCloneStructuralChangesHeader from '@salesforce/label/c.OrderCloneStructuralChangesHeader';
import OrderCloneSuccessTitle from '@salesforce/label/c.OrderCloneSuccessTitle';
import QuoteCloneSuccessMessage from '@salesforce/label/c.QuoteCloneSuccessMessage';
import OrderCloneErrorTitle from '@salesforce/label/c.OrderCloneErrorTitle';
import QuoteCloneErrorMessage from '@salesforce/label/c.QuoteCloneErrorMessage';
import OrderClonePrepositionTo from '@salesforce/label/c.OrderClonePrepositionTo';
import OrderClonePrepositionFrom from '@salesforce/label/c.OrderClonePrepositionFrom';
import OrderCloneActionAdded from '@salesforce/label/c.OrderCloneActionAdded';
import OrderCloneActionRemoved from '@salesforce/label/c.OrderCloneActionRemoved';

export default class QuoteCloneLwc extends NavigationMixin(LightningElement) {
    @api recordId; // Quote Id passed from the Quick Action
    quoteName;
    quoteNumber;
    quoteStatus;

    redWarningVisible = false; // Displays a warning if the Quote is rejected or denied
    showDetails = false; // Controls the collapsible section

    pricingChanges = []; // Store pricing changes
    structureChanges = []; // Store product structure changes

    labels = {
        OrderCloneConfirmation,
        OrderCloneWarning,
        QuoteCloneRejectedDenied,
        OrderCloneRejectedDeniedConfirmation,
        OrderCloneHeader,
        OrderCloneChangesDetected,
        OrderClonePricingChanges,
        OrderCloneStructuralChanges,
        OrderCloneSeeMore,
        OrderCloneSeeLess,
        OrderClonePricingChangesHeader,
        OrderCloneStructuralChangesHeader,
        OrderCloneSuccessTitle,
        QuoteCloneSuccessMessage,
        OrderCloneErrorTitle,
        QuoteCloneErrorMessage,
        OrderCloneAndSeparator,
        OrderClonePrepositionTo,
        OrderClonePrepositionFrom,
        OrderCloneActionAdded,
        OrderCloneActionRemoved
    };

    // Getter to check if there are pricing changes
    get hasPricingChanges() {
        return this.pricingChanges && this.pricingChanges.length > 0;
    }

    // Getter to check if there are product structure changes
    get hasStructureChanges() {
        return this.structureChanges && this.structureChanges.length > 0;
    }

    // Getter to determine if the warning should be shown
    get warningVisible() {
        return this.hasPricingChanges || this.hasStructureChanges;
    }


    // Getter to generate the condensed message
    get condensedMessage() {
        let message = this.labels.OrderCloneChangesDetected;
        if (this.hasPricingChanges) {
            message += ' ' + this.labels.OrderClonePricingChanges;
        }
        if (this.hasStructureChanges) {
            message += this.hasPricingChanges ? ' ' + this.labels.OrderCloneAndSeparator + ' ' + this.labels.OrderCloneStructuralChanges : ' ' + this.labels.OrderCloneStructuralChanges;
        }
        message += '.';
        return message;
    }

    // Method to format prices with currency symbol
    formatPrice(price, currencyCode) {
        const formattedNumber = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(price);
        return `${currencyCode} ${formattedNumber}`;
    }

    @wire(getQuoteDetails, { quoteId: '$recordId' })
    wiredQuote({ error, data }) {
        if (data) {
            this.quoteNumber = data.QuoteNumber;
            this.quoteStatus = data.Status;
            this.quoteName = data.Name;

            // Show red warning only if status is Rejected or Denied
            if (this.quoteStatus === 'Rejected' || this.quoteStatus === 'Denied') {
                this.redWarningVisible = true;
            }

            // Check for pricing and structure changes after loading quote details
            this.loadPricingChanges();
            this.loadStructureChanges();
        } else if (error) {
            console.error('Error fetching Quote details:', error);
        }
    }

    // Method to load pricing changes
    loadPricingChanges() {
        checkPricingChanges({ quoteId: this.recordId })
            .then(data => {
                // Format prices with currency symbol
                this.pricingChanges = data.map(change => ({
                    ...change,
                    oldPrice: this.formatPrice(change.oldPrice, change.currencyCode),
                    newPrice: this.formatPrice(change.newPrice, change.currencyCode)
                }));
            })
            .catch(error => {
                console.error('Error fetching pricing changes:', error);
            });
    }

    // Method to load product structure changes
    loadStructureChanges() {
        checkProductStructureChanges({ quoteId: this.recordId })
            .then(data => {
                // Add a preposition field based on the action
                this.structureChanges = data.map(change => ({
                    ...change,
                    preposition: change.action === 'added' ? this.labels.OrderClonePrepositionTo : this.labels.OrderClonePrepositionFrom,
                    action: change.action === 'added' ? this.labels.OrderCloneActionAdded : this.labels.OrderCloneActionRemoved
                }));
            })
            .catch(error => {
                console.error('Error fetching product structure changes:', error);
            });
    }

    // Toggle the collapsible section
    toggleDetails() {
        this.showDetails = !this.showDetails;
    }

    handleYes() {
        this.cloneAndNavigate();
    }

    handleNo() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    // Add this getter to handle the "See more"/"See less" text
    get seeMoreText() {
        return this.showDetails ? this.labels.OrderCloneSeeLess : this.labels.OrderCloneSeeMore;
    }

    // Method to clone the Quote and navigate to the cloned record
    cloneAndNavigate() {
        cloneQuote({ quoteId: this.recordId })
            .then(clonedQuote => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: this.labels.OrderCloneSuccessTitle,
                        message: this.labels.QuoteCloneSuccessMessage.replace('{0}', clonedQuote.QuoteNumber).replace('{1}', clonedQuote.Name),
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
                        title: this.labels.OrderCloneErrorTitle,
                        message: this.labels.QuoteCloneErrorMessage,
                        variant: 'error',
                    })
                );
            });
    }
}
