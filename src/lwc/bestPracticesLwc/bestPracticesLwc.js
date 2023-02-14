import { LightningElement, api,wire } from 'lwc';
import getBestPractices from '@salesforce/apex/GuidanceRendererController.getBestPractices';


export default class BestPracticesLwc extends LightningElement {

    @api recordId;
    @api playbookHeightInRem;

    isVisible = true;

    activeSections = [];

    bestPractices;
    pdfLinkURL;
    pdfLinkLabel;

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
                // Once found, we assign the URL/label to be displayed
                this.pdfLinkURL = this.bestPractices[playbookIndex].PDFLinkURL__c;
                this.pdfLinkLabel = this.bestPractices[playbookIndex].PDFLinkLabel__c;

                // We remove the playbook from the best practices list as it is displayed differently
                this.bestPractices.splice(playbookIndex, 1);
            }
        } else if (error) {
            this.error = error;
            console.log("error", error);
        }
    }
}