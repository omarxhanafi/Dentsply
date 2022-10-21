import { LightningElement, track, api } from 'lwc';
import { NavigationMixin  } from "lightning/navigation";
import { showToast } from 'c/utils';
import warningMessage from '@salesforce/label/c.WarningMessage';

import getCases from '@salesforce/apex/GetCases.getCases';

export default class ShowDuplicateCasesWarning extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    @track dupCases = [];
    @track showMessage;
    @track message;

    connectedCallback() {
        this.getCases();
        this.message = warningMessage;
    }

    getCases() {
        getCases({caseId : this.recordId})
        .then(result => {
            this.showMessage = result.length > 0 ? true : false;
            this.dupCases = result;
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace , 'error');
        });
    }

    goToCase(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        let caseIdToOpen = evt.target.dataset.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: caseIdToOpen,
                objectApiName: 'Case',
                actionName: 'view'
            }
        });
    }
}