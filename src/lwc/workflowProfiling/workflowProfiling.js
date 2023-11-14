import { LightningElement, wire, api, track } from 'lwc';
import getWorkflows from '@salesforce/apex/WorkflowProfilingController.getWorkflows';
import getWorkflowProfilingsByAccount from '@salesforce/apex/WorkflowProfilingController.getWorkflowProfilingsByAccount';
import createOrUpdateWorkflowProfilings from '@salesforce/apex/WorkflowProfilingController.createOrUpdateWorkflowProfilings';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import HOT_ICON from '@salesforce/resourceUrl/HotIcon';
import COLD_ICON from '@salesforce/resourceUrl/ColdIcon';



export default class WorkflowProfiling extends LightningElement {

    @api recordId; // Account record Id
    @track workflowsList = [];
    workflowProfilings = [];

    hotIconUrl = HOT_ICON;
    coldIconUrl = COLD_ICON;

    @wire(getWorkflows, { accountId: '$recordId' })
    wiredWorkflows({ error, data }) {
        if (data) {
            // Add the 'rating' property to each workflow
            this.workflowsList = data.map(workflow => ({
                ...workflow,
                rating: 0 // Default rating to 0
            }));
            console.log('Workflows', this.workflowsList);

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
            }
        });

        console.log("Updated Worklows", this.workflowsList);
    }

    handleSliderChange(event) {
        const workflowId = event.currentTarget.dataset.workflowid;
        const rating = event.target.value;

        // Update the 'rating' property based on the slider's value
        this.workflowsList = this.workflowsList.map(workflow => {
            if (workflow.Id === workflowId) {
                return { ...workflow, rating: rating };
            }
            return workflow;
        });

        console.log('Changed workflows', this.workflowsList);

        // Save data upon change
        this.saveData();
    }

    saveData() {
        // Create WorkflowProfiling objects by filtering the list of workflows with a rating higher than 0
        let workflowProfilingsToCreate = this.workflowsList.map(workflow => ({
            Account__c: this.recordId,
            Workflow__c: workflow.Id,
            Rating__c: workflow.rating
        }));

        console.log('Worfklow profilings to create', workflowProfilingsToCreate);

        if (workflowProfilingsToCreate.length > 0) {
            // Call the Apex method to save Workflow Profilings
            createOrUpdateWorkflowProfilings({ newRecords: workflowProfilingsToCreate })
                .then(result => {
                    // this.showToast('Success', 'Records saved successfully', 'success');
                    console.log('Workflow profiles created or updated successfully.');
                })
                .catch(error => {
                    this.showToast('Error', 'An error occurred while saving records', 'error');
                    console.error('Error creating or updating workflow profiles:', error);
                });
        } else {
            console.log('No workflow profiles to create or update.');
        }
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
