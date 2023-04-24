import { LightningElement, api, wire } from 'lwc';
import getAccountEventsJSON from '@salesforce/apex/ActivityScorecardController.getAccountActivityScorecard';


export default class ActivityScorecardLwc extends LightningElement {

    @api recordId;

    result;

    @wire(getAccountEventsJSON, { accountId: '$recordId' })
    wiredGetAccountEvents({ error, data }){
        if (data) {
            this.result = JSON.parse(data);
            console.log(this.result);
        } else if (error) {
            console.error(error);
        }
    }

    get completedTasksWidth() {
        return `width: ${this.result?.completedTasksCount}%`;
    }

    get callsLoggedWidth() {
        return `width: ${this.result?.callsLoggedCount}%`;
    }

    get emailsSentWidth() {
        return `width: ${this.result?.emailsSentCount}%`;
    }

    get eventsLoggedWidth() {
        return `width: ${this.result?.eventsLoggedCount}%`;
    }


}