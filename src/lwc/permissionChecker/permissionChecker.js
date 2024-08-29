import { LightningElement, api} from 'lwc';
import accountProgramMember from '@salesforce/customPermission/AccountProgramMember';
import orderAccess from '@salesforce/customPermission/Order';
import salesLeadAccess from '@salesforce/customPermission/canEditSalesLeads';
import completeSalesLeadAccess from '@salesforce/customPermission/CanCompleteSalesLeadWoOrderOpp';

export default class PermissionChecker extends LightningElement {

    connectedCallback(){

        const permissions = new Map();
        let accMember = false;
        let ordr = false;
        let salesLead = false;
        let completeSalesLead = false;

        if(accountProgramMember == true){
            accMember = true;
        }
        if(orderAccess === true){
            ordr = true;
        }
        if(salesLeadAccess == true){
            salesLead = true;
        }
        if(completeSalesLeadAccess == true){
            completeSalesLead = true;
        }
        permissions.set('AccountProgramMember', accMember);
        permissions.set('Order', ordr);
        permissions.set('SalesLead', salesLead);
        permissions.set('CompleteSalesLead', completeSalesLead);

        //console.log(permissions);
        const permissionCheckEvent = new CustomEvent('permissioncheck', {
            detail: { permissions },
        });
        // Fire the custom event
        this.dispatchEvent(permissionCheckEvent);
    }
}