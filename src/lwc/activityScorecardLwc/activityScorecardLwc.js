import { LightningElement, api, wire } from 'lwc';
import getAccountEventsJSON from '@salesforce/apex/ActivityScorecardController.getAccountActivityScorecard';
import FORM_FACTOR from '@salesforce/client/formFactor';


export default class ActivityScorecardLwc extends LightningElement {

    @api recordId;

    completedTasksBenchmark = 5;
    callsLoggedBenchmark = 5;
    emailsSentBenchmark = 5;
    eventsLoggedBenchmark = 10;

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
        let widthPercentage = this.activityScorecardResult?.completedTasksCount / this.completedTasksBenchmark * 100;
        widthPercentage = widthPercentage > 100 ? 100 : widthPercentage;
        return `width: ${widthPercentage}%`;
    }


    get callsLoggedWidth() {
        let widthPercentage = this.activityScorecardResult?.callsLoggedCount / this.callsLoggedBenchmark * 100;
        widthPercentage = widthPercentage > 100 ? 100 : widthPercentage;
        return `width: ${widthPercentage}%`;
    }

    get emailsSentWidth() {
        let widthPercentage = this.activityScorecardResult?.emailsSentCount / this.emailsSentBenchmark * 100;
        widthPercentage = widthPercentage > 100 ? 100 : widthPercentage;
        return `width: ${widthPercentage}%`;
    }

    get eventsLoggedWidth() {
        let widthPercentage = this.activityScorecardResult?.eventsLoggedCount / this.eventsLoggedBenchmark * 100;
        widthPercentage = widthPercentage > 100 ? 100 : widthPercentage;
        return `width: ${widthPercentage}%`;
    }

    get iconSize(){
        if(FORM_FACTOR == 'Large') {
            return 'large';
        }

        return 'small';
    }

}