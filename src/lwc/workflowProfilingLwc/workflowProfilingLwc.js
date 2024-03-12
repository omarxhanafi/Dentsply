import { LightningElement, wire, api, track } from 'lwc';
import { subscribe, unsubscribe } from 'lightning/empApi';
import getWorkflows from '@salesforce/apex/WorkflowProfilingController.getWorkflows';
import getWorkflowProfilingsByAccount from '@salesforce/apex/WorkflowProfilingController.getWorkflowProfilingsByAccount';
import createOrUpdateWorkflowProfilings from '@salesforce/apex/WorkflowProfilingController.createOrUpdateWorkflowProfilings';
import getProductFamilyListByWorkflowId from '@salesforce/apex/WorkflowProfilingController.getProductFamilyListByWorkflowId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import HOT_ICON from '@salesforce/resourceUrl/HotIcon';
import COLD_ICON from '@salesforce/resourceUrl/ColdIcon';
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
    workflowProfilings = [];

    subscription = null;

    isProcessing = false;

    hotIconUrl = HOT_ICON;
    coldIconUrl = COLD_ICON;

    isMobile = FORM_FACTOR === 'Small' || (FORM_FACTOR === 'Medium' && window.innerWidth < window.innerHeight);

    // Custom labels
    labels = {
        WPHeader,
        WPHelpText,
        WPProductFamily,
        WPDSProducts,
        WPCompetitorProducts
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
                // Refresh the workflow profiling list upon PP creation
                this.fetchWorkflowProfilings();
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
            // Add the 'rating' property to each workflow
            this.workflowsList = data.map(workflow => ({
                ...workflow,
                isChecked: false,
                itemClass: 'disabled-td',
                isExpanded: false,
                accordionIcon: 'utility:chevronright',
                rating: 0
            }));

            // console.log("Workflows", JSON.parse(JSON.stringify(this.workflowsList)))

            // After getting workflows, fetch the workflowProfilings
            this.fetchWorkflowProfilings();
        }
    }

    // Custom method to fetch workflowProfilings
    fetchWorkflowProfilings() {
        // Fetch workflowProfilings based on this.recordId
        getWorkflowProfilingsByAccount({ accountId: this.recordId })
            .then(result => {
                this.workflowProfilings = result;
                // console.log('Workflow Profilings', this.workflowProfilings);

                // We update the ratings
                this.updateWorkflowsFromProfilings();
            })
            .catch(error => {
                console.error('Error fetching Workflow Profilings:', error);
            });
    }

    updateWorkflowsFromProfilings() {
        // Iterate through both lists and update ratings
        this.workflowsList.forEach(workflow => {
            const matchingProfiling = this.workflowProfilings.find(profiling => profiling.Workflow__c === workflow.Id);
            if (matchingProfiling) {
                if(!matchingProfiling.Inactive__c){
                    workflow.isChecked = true;
                    workflow.itemClass = ''
                }
            }
        });

        // console.log("Updated Workflows", JSON.parse(JSON.stringify(this.workflowsList)));
    }

    handleRowToggle(event) {
        const rowId = event.currentTarget.dataset.rowid;
        const isChecked = event.target.checked;

        this.workflowsList = this.workflowsList.map(workflow => {
            if (workflow.Id === rowId) {
                workflow.isChecked = isChecked;
                workflow.itemClass = isChecked ? '' : 'disabled-td';
            }
            return workflow;
        });

        // console.log("Changed Workflows after toggle", JSON.parse(JSON.stringify(this.workflowsList)));

        this.saveData(); // Save the data upon toggle change
    }


    saveData() {
        // Disable all toggles while the save/delete process is running
        this.isProcessing = true;

        // Filter the workflowsList for records to upsert and delete
        let recordsToUpsert = [];

        this.workflowsList.forEach(workflow => {
                // Create records for upsert with isChecked as true
                recordsToUpsert.push({
                    Account__c: this.recordId,
                    Workflow__c: workflow.Id,
                    Inactive__c: workflow.isChecked ? false : true
                });
        });

        // console.log('Workflow profilings to upsert', recordsToUpsert);

        if (recordsToUpsert.length > 0) {
            this.upsertWorkflowProfilings(recordsToUpsert);
        }

    }


    upsertWorkflowProfilings(recordsToUpsert) {
        // Call the Apex method to upsert Workflow Profilings
        createOrUpdateWorkflowProfilings({newRecords: recordsToUpsert})
            .then(() => {
                this.isProcessing = false; // Enabling the toggles
                console.log('Workflow profiles created or updated successfully.');
            })
            .catch(error => {
                this.showToast('Error', 'An error occurred while saving records', 'error');
                console.error('Error creating or updating workflow profiles:', error);
            });
    }

    get disabledToggleClass() {
        return this.isProcessing ? 'disabled-toggle' : '';
    }

    handleExpand(event) {
        const rowId = event.currentTarget.dataset.rowid;

        // We expand the selected workflow and collapse all the others
        this.workflowsList = this.workflowsList.map(workflow => {
            if (workflow.Id === rowId) {
                // If it's the selected workflow, we expand it
                return {
                    ...workflow,
                    isExpanded: !workflow.isExpanded,
                    accordionIcon: workflow.isExpanded ? 'utility:chevronright' : 'utility:chevrondown'
                };
            } else {
                // Collapse all other workflows
                return {
                    ...workflow,
                    isExpanded: false,
                    accordionIcon: 'utility:chevronright'
                };
            }
        });

        // Find the workflow in the list based on the rowId
        let selectedWorkflow = this.workflowsList.find(workflow => workflow.Id === rowId);

        if (selectedWorkflow && !selectedWorkflow.families) {
            // Retrieve the list of families / products only if they are not already loaded
            getProductFamilyListByWorkflowId({ workflowId: selectedWorkflow.Id, accountId: this.recordId })
                .then(result => {
                    // Assigning the families to the workflow
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

                    // console.log("Expanded workflow", JSON.parse(JSON.stringify(selectedWorkflow)));
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

            // console.log('Product found:', JSON.parse(JSON.stringify(foundProduct)));
        } else {
            console.log('No product found with the given ID.');
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

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    get collapsibleTextSize() {
        return this.isMobile ? 'font-size: 13px' : '';
    }
}
