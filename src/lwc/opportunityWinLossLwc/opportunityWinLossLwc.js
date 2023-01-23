import { LightningElement, api } from 'lwc';

export default class OpportunityWinLossLwc extends LightningElement {

    @api recordTypeId;
    @api stageName;
    @api winLossReason;
    @api winLossDescription;

    showWinLossFields = false;

    handleStageNameChange(event) {
        this.stageName = event.target.value;
        if (this.stageName === 'Closed Won' || this.stageName === 'Closed Lost') {
            this.showWinLossFields = true;
        } else {
            this.showWinLossFields = false;
        }
    }

    handleWinLossReasonChange(event) {
        this.winLossReason = event.target.value;
        // You can pass the values of the fields to the flow using a flow action
    }

    handleWinLossDescriptionChange(event) {
        this.winLossDescription = event.target.value;
        // You can pass the values of the fields to the flow using a flow action
    }
}
