import { LightningElement, wire, api, track } from 'lwc';
import getWorkflows from '@salesforce/apex/WorkflowProfilingController.getWorkflows';
import getWorkflowProfilingsByAccount from '@salesforce/apex/WorkflowProfilingController.getWorkflowProfilingsByAccount';
import createOrUpdateWorkflowProfilings from '@salesforce/apex/WorkflowProfilingController.createOrUpdateWorkflowProfilings';
import deleteWorkflowProfilings from '@salesforce/apex/WorkflowProfilingController.deleteWorkflowProfilings';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import HOT_ICON from '@salesforce/resourceUrl/HotIcon';
import COLD_ICON from '@salesforce/resourceUrl/ColdIcon';


export default class WorkflowProfiling extends LightningElement {

    @api recordId; // Account record Id
    @track workflowsList = [];
    workflowProfilings = [];

    isProcessing = false;

    hotIconUrl = HOT_ICON;
    coldIconUrl = COLD_ICON;

    @wire(getWorkflows, { accountId: '$recordId' })
    wiredWorkflows({ error, data }) {
        if (data) {
            // Add the 'rating' property to each workflow
            this.workflowsList = data.map(workflow => ({
                ...workflow,
                isChecked: false,
                itemClass: 'disabled-td',
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
                console.log('Workflow Profilings', this.workflowProfilings);

                // We update the ratings
                this.updateWorkflowsWithRatings();
            })
            .catch(error => {
                console.error('Error fetching Workflow Profilings:', error);
            });
    }

    updateWorkflowsWithRatings() {
        // Iterate through both lists and update ratings
        this.workflowsList.forEach(workflow => {
            const matchingProfiling = this.workflowProfilings.find(profiling => profiling.Workflow__c === workflow.Id);
            if (matchingProfiling) {
                workflow.rating = matchingProfiling.Rating__c;
                workflow.icons = this.generateIcons(workflow.rating);
                workflow.isChecked = true;
                workflow.itemClass = ''
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


    handleSliderChange(event) {
        const workflowId = event.currentTarget.dataset.workflowid;
        const rating = event.target.value;

        // Update the 'rating' property based on the slider's value
        this.workflowsList = this.workflowsList.map(workflow => {
            if (workflow.Id === workflowId) {
                return { ...workflow, rating: rating};
            }
            return workflow;
        });

        setTimeout(() => {
            this.updateIcons();
        }, 300); // Adjust the delay time as needed

        // console.log('Changed workflows after slider change', JSON.parse(JSON.stringify(this.workflowsList)));

        // Save data upon change
        this.saveData();
    }

    updateIcons() {
        this.workflowsList = this.workflowsList.map(workflow => {
            workflow.icons = this.generateIcons(workflow.rating);
            return workflow;
        });
    }


    saveData() {
        // Disable all toggles while the save/delete process is running
        this.isProcessing = true;

        // Filter the workflowsList for records to upsert and delete
        let recordsToUpsert = [];
        let recordsToDelete = [];

        this.workflowsList.forEach(workflow => {
            if (workflow.isChecked) {
                // Create records for upsert with isChecked as true
                recordsToUpsert.push({
                    Account__c: this.recordId,
                    Workflow__c: workflow.Id,
                    Rating__c: workflow.rating
                });
            } else {
                // Add Ids of records to delete if isChecked is false
                const associatedWorkflowProfiling = this.workflowProfilings.find(profiling => profiling.Workflow__c === workflow.Id);
                if (associatedWorkflowProfiling) {
                    recordsToDelete.push(associatedWorkflowProfiling.Id);
                }
            }
        });

        // console.log('Workflow profilings to upsert', recordsToUpsert);
        // console.log('Workflow profilings to delete', recordsToDelete);

        if (recordsToUpsert.length > 0) {
            this.upsertWorkflowProfilings(recordsToUpsert);
        }
        else if (recordsToDelete.length > 0) {
            this.deleteWorkflowProfilings(recordsToDelete);
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

    deleteWorkflowProfilings(recordsToDelete) {
        // Call the delete method if there are records to delete
        deleteWorkflowProfilings({recordIdsToDelete: recordsToDelete})
            .then(() => {
                this.isProcessing = false; // Enabling the toggles
                console.log('Workflow profiles deleted successfully.');
            })
            .catch(deleteError => {
                console.error('Error deleting workflow profiles:', deleteError);
            });
    }

    generateIcons(rating) {
        const hotIconsCount = rating;
        const coldIconsCount = 5 - rating;

        const icons = [];

        // Add hot icons
        for (let i = 0; i < hotIconsCount; i++) {
            icons.push({ key: `hot${i}`, iconUrl: this.hotIconUrl });
        }

        // Add cold icons
        for (let i = 0; i < coldIconsCount; i++) {
            icons.push({ key: `cold${i}`, iconUrl: this.coldIconUrl });
        }

        return icons;
    }

    get disabledToggleClass() {
        return this.isProcessing ? 'disabled-toggle' : '';
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}
