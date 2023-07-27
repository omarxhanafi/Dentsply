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

    customerNumber;

    showAccess = false;
    showLight = false;
    showStandard = false;
    showAdvanced = false;
    showDSCoreInactive = false;

    @wire(getAccountFlagsJSON, { accountId: '$recordId' })
    wiredGetAccountFlags({ error, data }){
        if (data) {
            this.accountFlagsResult = JSON.parse(data);
            console.log("this.accountFlagsResult", this.accountFlagsResult);

            // We only show the customer number if the flag is green, otherwise we only show the flag
            if(this.accountFlagsResult?.customerNumber?.itemId != null && this.accountFlagsResult?.customerNumber?.value == 1){
                this.customerNumber = this.accountFlagsResult?.customerNumber?.itemId;
            }

            if(this.accountFlagsResult?.dsCoreAdvanced?.value > 0){
                this.showAdvanced = true;
            } else if (this.accountFlagsResult?.dsCoreStandard?.value > 0){
                this.showStandard = true;
            } else if (this.accountFlagsResult?.dsCoreLight?.value > 0) {
                this.showLight = true;
            } else if (this.accountFlagsResult?.dsCoreAccess?.value > 0) {
                this.showAccess = true;
            } else {
                this.showDSCoreInactive = true;
            }

        } else if (error) {
            console.error(error);
        }
    }

    get kolClass() {
        return this.getFlag(this.accountFlagsResult?.kol?.value);
    }

    get customerNumberClass() {
        return this.getFlag(this.accountFlagsResult?.customerNumber?.value);
    }

    get dsCoreAccessClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreAccess?.value);
    }

    get dsCoreLightClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreLight?.value);
    }

    get dsCoreStandardClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreStandard?.value);
    }

    get dsCoreAdvancedClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreAdvanced?.value);
    }

    get dsCoreCareClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreCare?.value);
    }

    get dsComCLass() {
        return this.getFlag(this.accountFlagsResult?.dsCom?.value);
    }

    get sureSmileClass() {
        return this.getFlag(this.accountFlagsResult?.sureSmile?.value);
    }

    get awoClass() {
        return this.getFlag(this.accountFlagsResult?.awo?.value);
    }

    getFlag(flagValue){
        return 'flag-square ' + (flagValue == 1 ? 'flag-green' : (flagValue == 2 ? 'flag-red' : 'flag-white'));
    }
}