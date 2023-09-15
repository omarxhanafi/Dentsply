import { LightningElement, wire, api } from 'lwc';
import getWorkflowsByExcludingCountry from '@salesforce/apex/WorkflowProfilingController.getWorkflowsByExcludingCountry';

export default class WorkflowProfiling extends LightningElement {

    @api recordId; // Account record Id
    workflowsList = [];

    @wire(getWorkflowsByExcludingCountry, { accountId: '$recordId' })
    wiredWorkflows({ error, data }) {
        if (data) {
            // Add the 'isSelected' property to each workflow
            this.workflowsList = data.map(workflow => ({
                ...workflow,
                isSelected: false // Initially not selected
            }));
            console.log('Workflows', this.workflowsList);
        }
    }

    // Handle checkbox change event
    handleCheckboxChange(event) {
        const workflowId = event.currentTarget.dataset.workflowid;
        const isChecked = event.target.checked;

        // Update the 'isSelected' property based on checkbox status
        this.workflowsList = this.workflowsList.map(workflow => {
            if (workflow.Id === workflowId) {
                return { ...workflow, isSelected: isChecked };
            }
            return workflow;
        });

        console.log('Changed workflows', this.workflowsList);
    }
}
