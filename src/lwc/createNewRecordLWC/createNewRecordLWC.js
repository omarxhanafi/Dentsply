import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';


 
export default class Lwcform extends NavigationMixin(LightningElement) {
    @api availableActions = [] ;
    @api difaultFieldValues;
    @api recordTypeId;
    @api objectApiName;

    connectedCallback(){
        this.createRecordWithDefaultValues();
    }

    createRecordWithDefaultValues() {
       //Go to create record view
       
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: this.objectApiName,
                actionName: 'new',
            },
            state: {
                recordTypeId : this.recordTypeId,
                defaultFieldValues: this.difaultFieldValues
            }
        });
        this.closeFlow();
    }

    closeFlow() {
        // check if NEXT is allowed on this screen FlowNavigationFinishEvent
        if (this.availableActions.find((action) => action === 'FINISH')) {
            // navigate to the next screen
            const navigateToEnd = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateToEnd);
        }
    }
}