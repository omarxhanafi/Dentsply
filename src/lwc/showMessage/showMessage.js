import { LightningElement, track } from 'lwc';
import getLabeMessage from '@salesforce/label/c.InactiveAccountMessage';

export default class ShowMessage extends LightningElement {
    
    @track message;
    connectedCallback() {
        this.message = getLabeMessage;
    }
}