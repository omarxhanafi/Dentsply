import { LightningElement, api,wire } from 'lwc';
import getBestPractices from '@salesforce/apex/GuidanceRendererController.getBestPractices';

export default class BestPracticesLwc extends LightningElement {

    @api recordId;
    isVisible = true;

    activeSections = [];
    bestPractices;
    error;

    @wire(getBestPractices, { parentId: '$recordId' })
    wiredBestPractices({ error, data }) {
        if (data) {
            this.bestPractices = data;
            if(this.bestPractices.length > 0){
                // this.activeSections.push(this.bestPractices[0].Id);
            }
        } else if (error) {
            this.error = error;
            console.log("error", error);
        }
    }
}