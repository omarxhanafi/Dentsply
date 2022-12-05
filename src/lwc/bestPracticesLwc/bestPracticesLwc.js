import { LightningElement, api,wire } from 'lwc';
import getBestPractices from '@salesforce/apex/GuidanceRendererController.getBestPractices';

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
            let playbookIndex = this.bestPractices.findIndex(bp => bp.DeveloperName?.includes('SureSmile_Commercial_Playbook'));
            if(playbookIndex != -1) {
                this.playbookUrl = this.bestPractices[playbookIndex].BestPracticeContent__c;
                this.bestPractices.splice(playbookIndex, 1);
            }
        } else if (error) {
            this.error = error;
            console.log("error", error);
        }
    }
}