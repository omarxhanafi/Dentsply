import { LightningElement, wire, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import { subscribe, unsubscribe } from 'lightning/empApi';
import getWorkflows from '@salesforce/apex/WorkflowProfilingController.getWorkflows';
import getProductProfiling from '@salesforce/apex/ProductProfilingHierarchyController.getProductProfiling';
import publishPPCreationEventWP from '@salesforce/apex/ProductProfilingHierarchyController.publishPPCreationEventWP';
import getProductFamilyListByWorkflowId from '@salesforce/apex/WorkflowProfilingController.getProductFamilyListByWorkflowId';
import createProductProfiling from '@salesforce/apex/WorkflowProfilingController.createProductProfiling';
import FORM_FACTOR from '@salesforce/client/formFactor';
import {NavigationMixin} from "lightning/navigation";
import WPHeader from "@salesforce/label/c.WPHeader";
import WPHelpText from "@salesforce/label/c.WPHelpText";
import WPProductFamily from "@salesforce/label/c.WPProductFamily";
import WPDSProducts from "@salesforce/label/c.WPDSProducts";
import WPCompetitorProducts from "@salesforce/label/c.WPCompetitorProducts";
import WPConfirmationHeader from "@salesforce/label/c.WPConfirmationHeader";
import WPConfirmationText1 from "@salesforce/label/c.WPConfirmationText1";
import WPConfirmationText2 from "@salesforce/label/c.WPConfirmationText2";
import WPSuccessText1 from "@salesforce/label/c.WPSuccessText1";
import WPSuccessText2 from "@salesforce/label/c.WPSuccessText2";



export default class WorkflowProfilingLwc extends NavigationMixin(LightningElement) {

    @api recordId; // Account record Id
    @track workflowsList = [];
    @track productProfilingRecords = [];

    @track showAddModal = false;
    @track productToAddId;
    @track productToAddName;

    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    account;

    get accountName() {
        return getFieldValue(this.account.data, ACCOUNT_NAME_FIELD);
    }

    subscription = null;

    isNewOpen = false;
    isEditOpen = false;

    isMobile = FORM_FACTOR === 'Small' || (FORM_FACTOR === 'Medium' && window.innerWidth < window.innerHeight);

    // Custom labels
    labels = {
        WPHeader,
        WPHelpText,
        WPProductFamily,
        WPDSProducts,
        WPCompetitorProducts,
        WPConfirmationHeader,
        WPConfirmationText1,
        WPConfirmationText2,
        WPSuccessText1,
        WPSuccessText2
    };

    async connectedCallback() {
        // Subscribe to the platform event
        this.subscribeToPlatformEvent();
    }

    disconnectedCallback() {
        // Unsubscribe from the platform event
        this.unsubscribeFromPlatformEvent();
    }

    subscribeToPlatformEvent() {
        const messageCallback = (response) => {
            if (response) {
                // Refreshing the workflow products
                this.workflowsList.forEach(eachWorkflow => {
                    this.getWorkflowProducts(eachWorkflow);
                })
            }
        };

        // Subscribe to the platform event
        subscribe('/event/PPCreation__e', -1, messageCallback)
            .then(response => {
                this.subscription = response;
            })
            .catch(error => {
                console.error('Error subscribing to platform event:', JSON.stringify(error));
            });
    }

    unsubscribeFromPlatformEvent() {
        // Unsubscribe from the platform event
        if (this.subscription) {
            unsubscribe(this.subscription, response => {
                console.log('Unsubscribed from platform event:', JSON.stringify(response));
            });
        }
    }

    @wire(getWorkflows, { accountId: '$recordId' })
    wiredWorkflows({ error, data }) {
        if (data) {
            this.workflowsList = data.map(workflow => ({
                ...workflow,
                families: null
            }));
        }
    }

    handleExpand(event) {
        const openSections = event.detail.openSections;

        openSections.forEach(workflowId => {
            const selectedWorkflow = this.workflowsList.find(workflow => workflow.Id === workflowId);

            this.getWorkflowProducts(selectedWorkflow);
        });
    }

    getWorkflowProducts(selectedWorkflow) {
        if (selectedWorkflow) {
            getProductFamilyListByWorkflowId({workflowId: selectedWorkflow.Id, accountId: this.recordId})
                .then(result => {
                    selectedWorkflow.families = result;

                    selectedWorkflow.families.forEach(family => {
                        // Initialize flags
                        family.hasDSCoreProduct = false;
                        family.hasCompetitorProduct = false;

                        family.dsProducts.forEach(product => {
                            if (product.active) {
                                family.hasDSCoreProduct = true;
                                return;
                            }
                        });

                        family.competitorProducts.forEach(product => {
                            if (product.active) {
                                family.hasCompetitorProduct = true;
                                return;
                            }
                        });
                    });
                })
                .catch(error => {
                    console.error('Error fetching Product Families & Products:', error);
                });
        }
    }

    handleMouseOver(event) {
        this.handleMouseEvent(event, true);
    }

    handleMouseOut(event) {
        this.handleMouseEvent(event, false);
    }

    handleMouseEvent(event, isOver) {
        const productId = event.target.dataset.productid;
        const workflowId = event.target.dataset.workflowid;
        let foundProduct = null;

        // Iterate through each workflow to find the hovered over product
        for (let workflow of this.workflowsList) {
            if(workflow.Id == workflowId){
                // Iterate through each family
                for (let family of workflow.families) {
                    // Check in DS products
                    foundProduct = family.dsProducts.find(eachProduct => eachProduct.productProfilingId === productId);
                    if (foundProduct) break;

                    // Check in competitor products
                    foundProduct = family.competitorProducts.find(eachProduct => eachProduct.productProfilingId === productId);
                    if (foundProduct) break;
                }
                if (foundProduct) break;
            }
        }

        if (foundProduct) {
            // Display or hide the related popover
            foundProduct.isMouseOver = isOver;
        }
    }


    handleRedirection(event){
        event.preventDefault();

        const productId = event.target.dataset.productid;

        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
                objectApiName: 'Product_Profiling__c',
                actionName: "view",
                recordId: productId
            }
        });
    }

    handleNewPP() {
        // If on desktop we open the PP creation flow on a modal dialog
        if(!this.isMobile){
            this.isNewOpen = true;
        } else { // Otherwise we redirect to the flow on mobile
            this[NavigationMixin.Navigate]({
                type: 'standard__component',
                attributes: {
                    componentName: 'c__ProductProfilingFlow'
                },
                state: {
                    c__recordId: this.recordId,
                    c__testVar: this.recordId
                }
            });
        }
    }

    handleUpdatePP(){
        this.fetchProductProfilingRecords();
    }

    get inputVariables() {
        return [
            {
                name : 'recordId',
                type : 'String',
                value : this.recordId
            }
        ];
    }

    handleStatusChange(event) {
        if (event.detail.status === 'FINISHED') {
            // Closing the modal
            this.handleCloseModal();

            // Refreshing the workflow products
            this.workflowsList.forEach(eachWorkflow => {
                this.getWorkflowProducts(eachWorkflow);
            })

            // Publishing a platform event to update the PP component
            publishPPCreationEventWP().then(() => {}).catch(error => {
                console.error('Error publishing platform event :', error);
            });
        }
    }

    handleMassUpdate(){
        // Closing the modal
        this.handleCloseModal();

        // Refreshing the workflow products
        this.workflowsList.forEach(eachWorkflow => {
            this.getWorkflowProducts(eachWorkflow);
        })

        // Publishing a platform event to update the PP component
        publishPPCreationEventWP().then(() => {}).catch(error => {
            console.error('Error publishing platform event :', error);
        });
    }

    // CLose the modal dialog after flow completion
    handleCloseModal(){
        this.isNewOpen = false;
        this.isEditOpen = false;
    }

    // Method to fetch PP records
    fetchProductProfilingRecords() {
        // Fetch workflowProfilings based on this.recordId
        getProductProfiling({ recordId: this.recordId })
            .then(result => {
                // Filter out records where Integrated__c is true
                const filteredResult = result.filter(record => !record.Integrated__c);

                // Order the filtered result by Product Family Label in ascending order
                filteredResult.sort((a, b) => (a.Product_Name__r.ProductFamily__r.ProductFamilyLabel__c > b.Product_Name__r.ProductFamily__r.ProductFamilyLabel__c) ? 1 : -1);

                this.isEditOpen = true;
                this.productProfilingRecords = filteredResult;
            })
            .catch(error => {
                console.error('Error fetching Product Profiling records:', error);
            });
    }

    handleAddPPRecord(event) {
        this.productToAddId = event.target.dataset.productid;

        this.handleModalYes();

        // this.showAddModal = true;

        let workflowId = event.target.dataset.workflowid;
        let familyId = event.target.dataset.familyid;

        // Searching for the productName to display in the modal dialog
        this.findProductName(workflowId, familyId);
    }

    findProductName(workflowId, familyId) {
        // Find the workflow in workflowsList with matching workflowId
        const workflow = this.workflowsList.find(workflow => workflow.Id === workflowId);
        if (workflow) {
            // Find the family within the workflow's families array with matching familyId
            const family = workflow.families.find(family => family.productFamily.Id === familyId);

            if (family) {
                // Find the product within the family's dsProducts or competitorProducts array with matching productId
                let product = family.dsProducts.find(dsProduct => dsProduct.product.Id === this.productToAddId);
                if (!product) {
                    product = family.competitorProducts.find(compProduct => compProduct.product.Id === this.productToAddId);
                }

                if (product) {
                    // Log the product's name
                    this.productToAddName = product.product.Name;
                } else {
                    console.error('Product not found for productId:', productId);
                }
            } else {
                console.error('Family not found for familyId:', familyId);
            }
        } else {
            console.error('Workflow not found for workflowId:', workflowId);
        }
    }

    handleModalYes() {
        // Creating the PP record
        createProductProfiling({
            accountId: this.recordId,
            nonErpProductId: this.productToAddId
        })
            .then(() => {
                // Refreshing the workflow products
                this.workflowsList.forEach(eachWorkflow => {
                    this.getWorkflowProducts(eachWorkflow);
                })
                // Close the modal
                this.showAddModal = false;
                // Show toast
                const evt = new ShowToastEvent({
                    title: 'Success',
                    message: this.labels.WPSuccessText1 + ' ' + this.productToAddName + ' ' + this.labels.WPSuccessText2 + ' ' + this.accountName,
                    variant: 'success',
                });
                this.dispatchEvent(evt);
            })
            .catch(error => {
                // Handle error
                console.error('Error creating Product Profiling record: ', error);

                // Close the modal
                this.showAddModal = false;
            });
    }

    handleModalNo() {
        // Close the modal
        this.showAddModal = false;
    }

    handleModalClose() {
        // Handle modal close action (similar to No button action)
        this.handleModalNo();
    }

    get collapsibleTextSize() {
        return this.isMobile ? 'font-size: 13px' : '';
    }

    get wrapperClass() {
        return this.isMobile ? '' : 'slds-box slds-p-around_medium slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none';
    }

    get headerClass() {
        return this.isMobile ? 'slds-grid slds-wrap slds-p-around_medium slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none' : 'slds-grid slds-wrap';
    }
}