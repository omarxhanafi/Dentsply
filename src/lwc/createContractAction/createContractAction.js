import { LightningElement ,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class CreateContractAction extends NavigationMixin(LightningElement) {
    
    @api navigateToStdNewContract() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contract',
                actionName: 'new'
            }
        });
    }
}