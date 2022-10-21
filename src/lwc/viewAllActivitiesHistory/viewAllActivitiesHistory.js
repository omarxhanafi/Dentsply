import { LightningElement, api } from 'lwc';

export default class ViewAllActivitiesHistory extends LightningElement {
    @api invoke() {
        console.log("Hi, I'm an action.");
    }
}