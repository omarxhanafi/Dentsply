import { LightningElement, api, wire } from 'lwc';
import getAccountEventsJSON from '@salesforce/apex/ActivityScorecardController.getAccountActivityScorecard';


export default class ActivityScorecardLwc extends LightningElement {

    @api recordId;

    activityScorecardResult;

    @wire(getAccountEventsJSON, { accountId: '$recordId' })
    wiredGetAccountEvents({ error, data }){
        if (data) {
            this.activityScorecardResult = JSON.parse(data);
            console.log(this.activityScorecardResult);
        } else if (error) {
            console.error(error);
        }
    }

    get completedTasksWidth() {
        return `width: ${this.activityScorecardResult?.completedTasksCount}%`;
    }

    get callsLoggedWidth() {
        return `width: ${this.activityScorecardResult?.callsLoggedCount}%`;
    }

    get emailsSentWidth() {
        return `width: ${this.activityScorecardResult?.emailsSentCount}%`;
    }

    get eventsLoggedWidth() {
        return `width: ${this.activityScorecardResult?.eventsLoggedCount}%`;
    }


}