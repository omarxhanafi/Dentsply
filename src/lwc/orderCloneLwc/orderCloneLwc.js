import { LightningElement, api, wire } from 'lwc';
import cloneOrder from '@salesforce/apex/OrderCloneController.cloneOrder';
import getOrderDetails from '@salesforce/apex/OrderCloneController.getOrderDetails';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import OrderCloneConfirmation from '@salesforce/label/c.OrderCloneConfirmation';
import OrderCloneWarning from '@salesforce/label/c.OrderCloneWarning';
import OrderCloneRejectedDenied from '@salesforce/label/c.OrderCloneRejectedDenied';
import OrderCloneRejectedDeniedConfirmation from '@salesforce/label/c.OrderCloneRejectedDeniedConfirmation';

export default class OrderCloneLwc extends NavigationMixin(LightningElement) {
    @api recordId; // Order Id passed from the Quick Action
    orderNumber;
    orderStatus;

    warningVisible = true;
    redWarningVisible = false;

    labels = {
        OrderCloneConfirmation,
        OrderCloneWarning,
        OrderCloneRejectedDenied,
        OrderCloneRejectedDeniedConfirmation
    };

    @wire(getOrderDetails, { orderId: '$recordId' })
    wiredOrder({ error, data }) {
        if (data) {
            this.orderNumber = data.OrderNumber;
            this.orderStatus = data.Status;

            // Show red warning only if status is Rejected or Denied
            if (this.orderStatus === 'Rejected' || this.orderStatus === 'Denied') {
                this.redWarningVisible = true;
            }
        } else if (error) {
            console.error('Error fetching Order details:', error);
        }
    }

    handleYes() {
        this.cloneAndNavigate();
    }

    handleNo() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    // Method to clone the Order and navigate to the cloned record
    cloneAndNavigate() {
        cloneOrder({ orderId: this.recordId })
            .then(clonedOrder => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Order \"' + clonedOrder.OrderNumber + '\" created successfully!',
                        variant: 'success',
                    })
                );

                // Navigate to the cloned Order
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: clonedOrder.Id,
                        actionName: 'view'
                    }
                });

                // Close the Quick Action
                this.handleNo();
            })
            .catch(error => {
                console.error('Error cloning Order:', error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'An error occurred while cloning the Order.',
                        variant: 'error',
                    })
                );
            });
    }
}
