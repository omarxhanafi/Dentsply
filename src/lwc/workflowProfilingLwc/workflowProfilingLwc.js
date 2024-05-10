import { LightningElement, wire, api, track } from 'lwc';
import getWorkflows from '@salesforce/apex/WorkflowProfilingController.getWorkflows';
import getProductProfiling from '@salesforce/apex/ProductProfilingHierarchyController.getProductProfiling';
import publishPPCreationEventWP from '@salesforce/apex/ProductProfilingHierarchyController.publishPPCreationEventWP';
import getProductFamilyListByWorkflowId from '@salesforce/apex/WorkflowProfilingController.getProductFamilyListByWorkflowId';
import FORM_FACTOR from '@salesforce/client/formFactor';
import {NavigationMixin} from "lightning/navigation";
import WPHeader from "@salesforce/label/c.WPHeader";
import WPHelpText from "@salesforce/label/c.WPHelpText";
import WPProductFamily from "@salesforce/label/c.WPProductFamily";
import WPDSProducts from "@salesforce/label/c.WPDSProducts";
import WPCompetitorProducts from "@salesforce/label/c.WPCompetitorProducts";



export default class WorkflowProfilingLwc extends NavigationMixin(LightningElement) {

    @api recordId; // Account record Id
    @track workflowsList = [];
    @track productProfilingRecords = [];

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
        WPCompetitorProducts
    };

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

            if (selectedWorkflow && !selectedWorkflow.families) {
                getProductFamilyListByWorkflowId({ workflowId: selectedWorkflow.Id, accountId: this.recordId })
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
        });
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
                    foundProduct = family.dsProducts.find(eachProduct => eachProduct.product.Id === productId);
                    if (foundProduct) break;

                    // Check in competitor products
                    foundProduct = family.competitorProducts.find(eachProduct => eachProduct.product.Id === productId);
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
                objectApiName: 'Non_ERP_Products__c',
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

            // Publishing a platform event to update the PP component
            publishPPCreationEventWP().then(() => {}).catch(error => {
                console.error('Error publishing platform event :', error);
            });
        }
    }

    handleMassUpdate(){
        // Closing the modal
        this.handleCloseModal();

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
                // Order the result by Product Family Label in ascending order
                result.sort((a, b) => (a.Product_Name__r.ProductFamily__r.ProductFamilyLabel__c > b.Product_Name__r.ProductFamily__r.ProductFamilyLabel__c) ? 1 : -1);

                this.isEditOpen = true;
                this.productProfilingRecords = result;
            })
            .catch(error => {
                console.error('Error fetching Product Profiling records:', error);
            });
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

    get rowHeaderClass(){
        return this.isMobile ? 'row-header-mobile' : 'row-header-desktop'
    }
}
