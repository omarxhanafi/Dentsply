import { LightningElement, api } from 'lwc';
import updateProductProfilingRecords from '@salesforce/apex/ProductProfilingHierarchyController.updateProductProfilingRecords';
import deleteProductProfilingRecord from '@salesforce/apex/ProductProfilingHierarchyController.deleteProductProfilingRecord';

export default class ProductProfilingEditLwc extends LightningElement {
    @api selectedProducts = [];
    showSpinner = false;
    yearOptions = [];

    connectedCallback() {
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 15; i--) {
            this.yearOptions.push({ label: '' + i, value: '' + i });
        }
    }

    handleQuantityChange(event) {
        const recordId = event.target.dataset.recordid;
        const updatedQuantity = event.target.value;

        // Update the corresponding selected product's quantity
        const updatedProducts = this.selectedProducts.map(item => {
            if (item.Id === recordId) {
                return { ...item, Quantity__c: updatedQuantity };
            }
            return item;
        });

        this.selectedProducts = updatedProducts;
    }

    handleInUseSinceChange(event) {
        const recordId = event.target.dataset.recordid;
        const updatedInUseSince = event.target.value;

        // Update the corresponding selected product's InUseSince field
        const updatedProducts = this.selectedProducts.map(item => {
            if (item.Id === recordId) {
                return { ...item, InUseSince__c: updatedInUseSince };
            }
            return item;
        });

        this.selectedProducts = updatedProducts;
    }

    handleInactiveChange(event) {
        const recordId = event.target.dataset.recordid;
        const updatedInactive = event.target.checked;

        // Update the corresponding selected product's Inactive field
        const updatedProducts = this.selectedProducts.map(item => {
            if (item.Id === recordId) {
                return { ...item, Inactive__c: updatedInactive };
            }
            return item;
        });

        this.selectedProducts = updatedProducts;
    }


    updateRecords() {
        this.showSpinner = true;
        updateProductProfilingRecords({ productProfilingList: this.selectedProducts })
            .then(() => {
                this.showSpinner = false;
                this.dispatchEvent(new CustomEvent('save'));
            })
            .catch(error => {
                this.showSpinner = false;
                console.error('Error updating records:', error);
            });
    }

    deleteRecord(event) {
        const recordId = event.target.dataset.recordid;
        const updatedProducts = this.selectedProducts.filter(item => item.Id !== recordId);

        this.selectedProducts = updatedProducts;

        // Deleting the PP record
        deleteProductProfilingRecord({ recordId: recordId })
            .then(() => {
            })
            .catch(error => {
                console.error('Error deleting record:', error);
            });
    }

    navigateToRecord(event) {
        const recordId = event.target.dataset.recordid;
        this.dispatchEvent(new CustomEvent('navigate', { detail: { recordId: recordId } }));
    }
}
