/**
 * Created by hadib on 18/1/2023.
 * Enhanced by hadib to display a link to the debug log on 21/12/2023.
 */

import {LightningElement, api} from 'lwc';
import {NavigationMixin} from "lightning/navigation";

import NOT_STARTED      from '@salesforce/label/c.Not_Started';
import IN_PROGRESS      from '@salesforce/label/c.In_Progress';
import COMPLETED        from '@salesforce/label/c.Completed';
import VIEW_ERROR_LOGS  from '@salesforce/label/c.View_Error_Logs';
import ERROR            from '@salesforce/label/c.Error';


export default class CreateCampaignFromCventStatusLwc extends NavigationMixin(LightningElement) {

    @api stage = { name: "Stage Name", notStarted: true, inProgress: false, completed: false, error: false }
    @api debugLogId;

    labels = {
        NOT_STARTED,
        IN_PROGRESS,
        COMPLETED,
        VIEW_ERROR_LOGS,
        ERROR
    }

    /**
     * Handles when the user wants to access the error log errors
     */
    handleRedirectToErrorLog(event) {
        event.preventDefault();
        event.stopPropagation();
        if(this.debugLogId)
        {
            const url = `/${this.debugLogId}`;
            const redirected = window.open(url, '_blank');
            if (!redirected) {
                //Pop-up blocked
                this.fallbackFunction(this.debugLogId);
            }
        }
        else
        {
            console.error('Error link not functioning..');
        }
    }

    /**
     * Handles when the user browser doesn't allow pop-ups
     */
    fallbackFunction(recordId) {
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
                objectApiName: "DebugLog__c",
                actionName: "view",
                recordId: recordId
            }
        });
    }

    /**
     * If we have a debug log Id then it's a system error logged in debug log record.
     * @returns {*}
     */
    get isSystemError(){
        return this.debugLogId;
    }
}