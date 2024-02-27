import { LightningElement, api, wire } from 'lwc';
import getAccountEventsJSON from '@salesforce/apex/ActivityScorecardController.getAccountActivityScorecard';
import FORM_FACTOR from '@salesforce/client/formFactor';
import LOCALE from '@salesforce/i18n/locale';
import TASKS_COMPLETED from '@salesforce/label/c.ActivityScoreboardTasksCompleted';
import CALLS_LOGGED from '@salesforce/label/c.ActivityScoreboardCallsLogged';
import EMAILS_SENT from '@salesforce/label/c.ActivityScoreboardEmailsSent';
import EVENTS_LOGGED from '@salesforce/label/c.ActivityScoreboardEventsLogged';
import FIRST_EVENT_DATE from '@salesforce/label/c.ActivityScorecardFirstEventDate';
import REPORTED_LAST_MONTHS from '@salesforce/label/c.ActivityReported12LastMonths';
import PLANNED_CFES from '@salesforce/label/c.ActivityScorecardPlannedCFEs';

export default class ActivityScorecardLwc extends LightningElement {

    @api recordId;

    activityScorecardResult;

    eventsLoggedBenchmark = 10;

    eventsLoggedPercentage;

    labels = {
        TASKS_COMPLETED,
        CALLS_LOGGED,
        EMAILS_SENT,
        EVENTS_LOGGED,
        FIRST_EVENT_DATE,
        REPORTED_LAST_MONTHS,
        PLANNED_CFES
    };

    @wire(getAccountEventsJSON, { accountId: '$recordId' })
    wiredGetAccountEvents({ error, data }){
        if (data) {
            this.activityScorecardResult = JSON.parse(data);

            // Adapt the benchmark if the value is higher than the threshold
            if (this.activityScorecardResult?.eventsLoggedCount > this.eventsLoggedBenchmark){
                this.activityScorecardResult.eventsLoggedCount = this.eventsLoggedBenchmark;
            }

            // Calculating percentages
            this.eventsLoggedPercentage = this.activityScorecardResult?.eventsLoggedCount / this.eventsLoggedBenchmark * 100;

            // Format first event's date to the user’s locale
            const dateObject = new Date(this.activityScorecardResult?.firstEvent);
            this.activityScorecardResult.firstEvent = this.activityScorecardResult?.firstEvent != null ? dateObject.toLocaleDateString(LOCALE) : null;
        } else if (error) {
            console.error(error);
        }
    }

    get eventsLoggedWidth() {
        return `width: ${this.eventsLoggedPercentage}%`;
    }

    get iconSize(){
        if(FORM_FACTOR == 'Large') {
            return 'medium';
        }

        return 'small';
    }

}