import { LightningElement, api } from 'lwc';
import getAccountEventsJSON from '@salesforce/apex/ActivityScorecardController.getAccountActivityScorecard';
import FORM_FACTOR from '@salesforce/client/formFactor';
import TASKS_COMPLETED from '@salesforce/label/c.ActivityScoreboardTasksCompleted';
import CALLS_LOGGED from '@salesforce/label/c.ActivityScoreboardCallsLogged';
import EMAILS_SENT from '@salesforce/label/c.ActivityScoreboardEmailsSent';
import EVENTS_LOGGED from '@salesforce/label/c.ActivityScoreboardEventsLogged';
import LAST_EVENT_DATE from '@salesforce/label/c.ActivityScorecardLastEventDate';
import MY_LAST_EVENT_DATE from '@salesforce/label/c.ActivityScorecardMyLastEventDate';
import REPORTED_LAST_MONTHS from '@salesforce/label/c.ActivityReported12LastMonths';
import PLANNED_CFES from '@salesforce/label/c.ActivityScorecardPlannedCFEs';
import NOT_AVAILABLE from '@salesforce/label/c.ActivityScoreboardNotAvailable';

export default class ActivityScorecardLwc extends LightningElement {

    @api recordId;

    activityScorecardResult;

    isMobile = FORM_FACTOR === 'Small' || (FORM_FACTOR === 'Medium' && window.innerWidth < window.innerHeight);

    labels = {
        TASKS_COMPLETED,
        CALLS_LOGGED,
        EMAILS_SENT,
        EVENTS_LOGGED,
        LAST_EVENT_DATE,
        MY_LAST_EVENT_DATE,
        REPORTED_LAST_MONTHS,
        PLANNED_CFES,
        NOT_AVAILABLE
    };

    async connectedCallback() {
        try {
            const result = await getAccountEventsJSON({ accountId: this.recordId });
            this.activityScorecardResult = JSON.parse(result);

            // Format first event's date to the user’s locale
            const dateObject = new Date(this.activityScorecardResult?.lastEventDate);
            this.activityScorecardResult.lastEventDate = this.activityScorecardResult?.lastEventDate != null ? dateObject.toLocaleDateString() : null;
        } catch (error) {
            console.error(error);
        }
    }

    get iconSize(){
        if(FORM_FACTOR == 'Large') {
            return 'medium';
        }

        return 'small';
    }

}