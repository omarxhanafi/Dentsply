import { LightningElement, api, wire } from 'lwc';
import cloneOrder from '@salesforce/apex/OrderCloneController.cloneOrder';
import getOrderDetails from '@salesforce/apex/OrderCloneController.getOrderDetails';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class OrderCloneLwc extends NavigationMixin(LightningElement) {
    @api recordId; // Order Id passed from the Quick Action
    orderNumber;

    @wire(getOrderDetails, { orderId: '$recordId' })
    wiredOrder({ error, data }) {
        if (data) {
            this.orderNumber = data.OrderNumber;
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
