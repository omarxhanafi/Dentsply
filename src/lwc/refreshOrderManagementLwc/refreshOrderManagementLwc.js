import { LightningElement } from 'lwc';

export default class RefreshOrderManagementLwc extends LightningElement {
    
    goToNewOrder() {
        const refreshEvent = new CustomEvent('refreshordercreationevent');
        window.dispatchEvent(refreshEvent);
    }
}