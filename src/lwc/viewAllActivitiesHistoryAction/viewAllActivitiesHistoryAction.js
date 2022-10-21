import { LightningElement, api, wire } from 'lwc';
import getActivityHistoryDetails from '@salesforce/apex/ActivityHistoryController.getActivityHistory';
import {refreshApex} from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ViewAllActivitiesHistoryAction extends LightningElement {
   @api recordId;
    data = [];
    wiredRecords;
    wiredActivities;
    dataEndReached;
    loading = false;
    myActivitiesTicked = false;
    page = 0;

    scrollHandler(event) {
        var target = event.target;
        var lastTable = target.querySelector('table:last-child');
        if(this.isScrolledIntoView(target, lastTable) && !this.loading && !this.dataEndReached) {
            this.getActivities();
        }
    }
    connectedCallback(){
        this.getActivities();
    }
    getActivities() {
        this.loading = true;
        getActivityHistoryDetails({
            accountId: this.recordId,
            myActivityFilter: this.myActivitiesTicked,
            page: this.page
        }).then((result) => {
            if (result && result.length) {
                this.data = [].concat(this.data, result);
                this.page++;
            } else {
                this.dataEndReached = true;
            }
        }).catch((error) => {
            const evt = new ShowToastEvent({
                title: 'Error',
                message: error,
                variant: 'error',
                mode: 'dismissible'
            });
            this.dispatchEvent(evt);
        }).finally(() => {
            this.loading = false;
        })
    }

    toggleMyActivities() {
        this.myActivitiesTicked = !this.myActivitiesTicked;
        this.page = 0;
        this.data = [];
        this.getActivities();
    }

    isScrolledIntoView(parent, el) {
        var elementTop = el.offsetTop;
        // Only completely visible elements return true:
        var isVisible = elementTop <= parent.scrollTop + parent.offsetHeight;
        // Partially visible elements return true:
        return isVisible;
    }
}