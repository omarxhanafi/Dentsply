import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import COUNTRY_FIELD from '@salesforce/schema/User.User_Country__c';
import getMycallstoMake from '@salesforce/apex/InsideSalesMyCallsToMakeController.getMyCallsToMakeReport';

export default class InsideSalesMyCallsToMake extends NavigationMixin(LightningElement) {

    userId = Id;
    userCountry;
    reportInfo;
    @wire(getRecord, { recordId: '$userId', fields: [COUNTRY_FIELD] }) 
    wiredRecord({ error, data }) {
        if(data){
            this.userCountry = data.fields.User_Country__c.value;
        }
    }

    @wire(getMycallstoMake, { userCountry : '$userCountry'})
    reportDetails(result){
        this.reportInfo = result.data;
    }

    redirectToreport(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:this.reportInfo.Report_Id__c,
                objectApiName: 'Report',
                actionName: 'view'
            }
        });
    }
    

}