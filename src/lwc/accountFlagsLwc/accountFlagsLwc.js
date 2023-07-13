import { LightningElement, api, wire } from 'lwc';
import getAccountFlagsJSON from '@salesforce/apex/AccountFlagsController.getAccountFlagsJSON';
// import FORM_FACTOR from '@salesforce/client/formFactor';
// import LOCALE from '@salesforce/i18n/locale';
// import TASKS_COMPLETED from '@salesforce/label/c.ActivityScoreboardTasksCompleted';
// import CALLS_LOGGED from '@salesforce/label/c.ActivityScoreboardCallsLogged';
// import EMAILS_SENT from '@salesforce/label/c.ActivityScoreboardEmailsSent';
// import EVENTS_LOGGED from '@salesforce/label/c.ActivityScoreboardEventsLogged';

export default class AccountFlagsLwc extends LightningElement {

    @api recordId;

    accountFlagsResult;

    showLight = false;
    showStandard = false;
    showAdvanced = false;

    @wire(getAccountFlagsJSON, { accountId: '$recordId' })
    wiredGetAccountFlags({ error, data }){
        if (data) {
            this.accountFlagsResult = JSON.parse(data);
            console.log("this.accountFlagsResult", this.accountFlagsResult);

            if(this.accountFlagsResult?.dsCoreAdvanced != 0){
                this.showAdvanced = true;
            } else if (this.accountFlagsResult?.dsCoreStandard != 0){
                this.showStandard = true;
            } else {
                this.showLight = true;
            }

        } else if (error) {
            console.error(error);
        }
    }

    get dsCoreLightClass() {
        return 'flag-square ' + (this.accountFlagsResult?.dsCoreLight == 1 ? 'flag-green' : (this.accountFlagsResult?.dsCoreLight == 2 ? 'flag-red' : 'flag-white'));
    }

    get dsCoreStandardClass() {
        return 'flag-square ' + (this.accountFlagsResult?.dsCoreStandard == 1 ? 'flag-green' : (this.accountFlagsResult?.dsCoreStandard == 2 ? 'flag-red' : 'flag-white'));
    }

    get dsCoreAdvancedClass() {
        return 'flag-square ' + (this.accountFlagsResult?.dsCoreAdvanced == 1 ? 'flag-green' : (this.accountFlagsResult?.dsCoreAdvanced == 2 ? 'flag-red' : 'flag-white'));
    }

    get dsCoreCareClass() {
        return 'flag-square ' + (this.accountFlagsResult?.dsCoreCare == 1 ? 'flag-green' : (this.accountFlagsResult?.dsCoreCare == 2 ? 'flag-red' : 'flag-white'));
    }
}