import { LightningElement, api,wire } from 'lwc';
import getBestPractices from '@salesforce/apex/GuidanceRendererController.getBestPractices';

export default class BestPracticesLwc extends LightningElement {

    @api recordId;
    @api playbookHeightInRem;

    isVisible = true;

    activeSections = [];
    bestPractices;
    error;

    @wire(getBestPractices, { parentId: '$recordId' })
    wiredBestPractices({ error, data }) {
        if (data) {
            this.bestPractices = data;
        } else if (error) {
            this.error = error;
            console.log("error", error);
        }
    }
}