import { LightningElement, api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getGuidance from '@salesforce/apex/GuidanceRendererController.getGuidanceDetails';
const FIELDS=['ProcedureTracker__c.NextActivity__c'];

export default class GuidanceRenderer extends LightningElement {

    @api recordId;
    @api playbookHeightInRem;

    guidanceDetails;
    nextActivity;
    currentNextActivity;
    isVisible = false;

    pdfLinkURL;
    pdfLinkLabel;


    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if (error) {
            console.log('error',error);
        }else if(data){
            this.currentNextActivity = data.fields.NextActivity__c.value
            if(!this.nextActivity){
                this.nextActivity = this.currentNextActivity;
                this.getGuidances();
            }
            if(this.nextActivity != this.currentNextActivity){
                this.getGuidances();
            }
        }
    }

    getGuidances(){
        getGuidance({parentId : this.recordId, nextActivity :this.currentNextActivity }).then((result) =>{
            if(!!result){
                this.guidanceDetails = result.Guidance_Content__c;
                this.pdfLinkLabel = result.PDFLinkLabel__c;
                this.pdfLinkURL = result.PDFLinkURL__c;
                this.isVisible = true
            }
        }).catch((error) => {
            console.log('error',error);
        })
    }

    get pdfHeight() {
        return 'height: ' + this.playbookHeightInRem + 'rem';
    }
}