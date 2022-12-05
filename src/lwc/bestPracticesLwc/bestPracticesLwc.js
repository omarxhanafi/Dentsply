import { LightningElement, api,wire } from 'lwc';
import getBestPractices from '@salesforce/apex/GuidanceRendererController.getBestPractices';
import openPlaybook from '@salesforce/label/c.Procedure_Tracker_BP_Open_Playbook';


export default class BestPracticesLwc extends LightningElement {

    @api recordId;
    @api playbookHeightInRem;

    isVisible = true;

    activeSections = [];

    bestPractices;
    playbookUrl;

    error;

    get pdfHeight() {
        return 'height: ' + this.playbookHeightInRem + 'rem';
    }

    @wire(getBestPractices, { parentId: '$recordId' })
    wiredBestPractices({ error, data }) {
        if (data) {
            this.bestPractices = [...data];

            // Searching for the playbook record
            let playbookIndex = this.bestPractices.findIndex(bp => bp.DeveloperName?.includes('SureSmile_Commercial_Playbook'));

            if(playbookIndex != -1) {
                // Once found, we assign the URL to be displayed
                this.playbookUrl = this.bestPractices[playbookIndex].BestPracticeContent__c;

                // We remove the playbook from the best practices list as it is displayed differently
                this.bestPractices.splice(playbookIndex, 1);
            }
        } else if (error) {
            this.error = error;
            console.log("error", error);
        }
    }
}