import { LightningElement, api, wire } from 'lwc';
import getAccountEventsJSON from '@salesforce/apex/ActivityScorecardController.getAccountActivityScorecard';
import FORM_FACTOR from '@salesforce/client/formFactor';
import LOCALE from '@salesforce/i18n/locale';



export default class ActivityScorecardLwc extends LightningElement {

    @api recordId;

    activityScorecardResult;

    completedTasksBenchmark = 5;
    callsLoggedBenchmark = 5;
    emailsSentBenchmark = 5;
    eventsLoggedBenchmark = 10;

    completedTasksPercentage;
    callsLoggedPercentage;
    emailsSentPercentage;
    eventsLoggedPercentage;

    @wire(getAccountEventsJSON, { accountId: '$recordId' })
    wiredGetAccountEvents({ error, data }){
        if (data) {
            this.activityScorecardResult = JSON.parse(data);

            // Adapt the benchmark if the value is higher than the threshold
            if (this.activityScorecardResult?.completedTasksCount > this.completedTasksBenchmark){
                this.completedTasksBenchmark = this.activityScorecardResult?.completedTasksCount;
            }

            if (this.activityScorecardResult?.callsLoggedCount > this.callsLoggedBenchmark){
                this.callsLoggedBenchmark = this.activityScorecardResult?.callsLoggedCount;
            }

            if (this.activityScorecardResult?.emailsSentCount > this.emailsSentBenchmark){
                this.emailsSentBenchmark = this.activityScorecardResult?.emailsSentCount;
            }

            if (this.activityScorecardResult?.eventsLoggedCount > this.eventsLoggedBenchmark){
                this.eventsLoggedBenchmark = this.activityScorecardResult?.eventsLoggedCount;
            }

            // Calculating percentages
            this.completedTasksPercentage = this.activityScorecardResult?.completedTasksCount / this.completedTasksBenchmark * 100;
            this.callsLoggedPercentage = this.activityScorecardResult?.callsLoggedCount / this.callsLoggedBenchmark * 100;
            this.emailsSentPercentage = this.activityScorecardResult?.emailsSentCount / this.emailsSentBenchmark * 100;
            this.eventsLoggedPercentage = this.activityScorecardResult?.eventsLoggedCount / this.eventsLoggedBenchmark * 100;

            // Format first event's date to the user’s locale
            const dateObject = new Date(this.activityScorecardResult?.firstEventDate);
            this.activityScorecardResult.firstEventDate = dateObject.toLocaleDateString(LOCALE);
        } else if (error) {
            console.error(error);
        }
    }

    get completedTasksWidth() {
        return `width: ${this.completedTasksPercentage}%`;
    }

    get callsLoggedWidth() {
        return `width: ${this.callsLoggedPercentage}%`;
    }

    get emailsSentWidth() {
        return `width: ${this.emailsSentPercentage}%`;
    }

    get eventsLoggedWidth() {
        return `width: ${this.eventsLoggedPercentage}%`;
    }

    get iconSize(){
        if(FORM_FACTOR == 'Large') {
            return 'large';
        }

        return 'small';
    }

}