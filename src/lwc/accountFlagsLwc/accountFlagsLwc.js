import { LightningElement, api, wire } from 'lwc';
import getAccountFlagsJSON from '@salesforce/apex/AccountFlagsController.getAccountFlagsJSON';
import {NavigationMixin} from "lightning/navigation";
import HEADER from '@salesforce/label/c.AccountFlagsHeader';
import ACCESS from '@salesforce/label/c.AccountFlagsAccess';
import LIGHT from '@salesforce/label/c.AccountFlagsLight';
import STANDARD from '@salesforce/label/c.AccountFlagsStandard';
import ADVANCED from '@salesforce/label/c.AccountFlagsAdvanced';
import ONLINE_ORDERING from '@salesforce/label/c.AccountFlagsOnlineOrdering';
import CUSTOMER_NUMBER from '@salesforce/label/c.AccountFlagsCustomerNumber';
import DS_CORE from '@salesforce/label/c.AccountFlagsDSCore';
import DS_CORE_LAB from '@salesforce/label/c.AccountFlagsDSCoreLab';
import DS_CORE_CARE from '@salesforce/label/c.AccountFlagsDSCoreCare';
import SURE_SMILE from '@salesforce/label/c.AccountFlagsSureSmile';
import AWO from '@salesforce/label/c.AccountFlagsAWO';
import DS_COM from '@salesforce/label/c.AccountFlagsDSCom';
import CEREC_CLUB from '@salesforce/label/c.AccountFlagsCerecClub';
import SIRO_FORCE from '@salesforce/label/c.AccountFlagsSiroForce';

export default class AccountFlagsLwc extends NavigationMixin(LightningElement) {

    @api recordId;

    accountFlagsResult;

    customerNumber;

    showAccess = false;
    showLight = false;
    showStandard = false;
    showAdvanced = false;
    showDSCoreInactive = false;

    customerNumberId;
    dsCoreAccessId;
    dsCoreLightId;
    dsCoreStandardId;
    dsCoreAdvancedId;
    dsCoreLabId
    dsCoreCareId;
    cerecClubId;
    dsComId;
    sureSmileId;
    awoId;
    siroForceId;

    isMouseOverCustomerNumber = false;
    isMouseOverDSCoreAccess = false;
    isMouseOverDSCoreLight = false;
    isMouseOverDSCoreStandard = false;
    isMouseOverDSCoreAdvanced = false;
    isMouseOverDSCoreLab = false;
    isMouseOverDSCoreCare = false;
    isMouseOverCerecClub = false;
    isMouseOverDSCom = false;
    isMouseOverSureSmile = false;
    isMouseOverAwo = false;
    isMouseOverSiroForce = false;

    labels = {
        HEADER,
        ACCESS,
        LIGHT,
        STANDARD,
        ADVANCED,
        ONLINE_ORDERING,
        CUSTOMER_NUMBER,
        DS_CORE,
        DS_CORE_LAB,
        DS_CORE_CARE,
        SURE_SMILE,
        AWO,
        DS_COM,
        CEREC_CLUB,
        SIRO_FORCE
    };

    @wire(getAccountFlagsJSON, { accountId: '$recordId' })
    wiredGetAccountFlags({ error, data }){
        if (data) {
            this.accountFlagsResult = JSON.parse(data);
            console.log("this.accountFlagsResult", this.accountFlagsResult);

            // We only show the customer number if the flag is green, otherwise we only show the flag
            if(this.accountFlagsResult?.customerNumber?.itemId != null && this.accountFlagsResult?.customerNumber?.value == 1){
                this.customerNumber = this.accountFlagsResult?.customerNumber?.customerNumber;
                this.customerNumberId = this.accountFlagsResult?.customerNumber?.itemId;
            }

            if(this.accountFlagsResult?.dsCoreAdvanced?.value > 0){
                this.showAdvanced = true;
                this.dsCoreAdvancedId = this.accountFlagsResult?.dsCoreAdvanced?.itemId;
            } else if (this.accountFlagsResult?.dsCoreStandard?.value > 0){
                this.showStandard = true;
                this.dsCoreStandardId = this.accountFlagsResult?.dsCoreStandard?.itemId;
            } else if (this.accountFlagsResult?.dsCoreLight?.value > 0) {
                this.showLight = true;
                this.dsCoreLightId = this.accountFlagsResult?.dsCoreLight?.itemId;
            } else if (this.accountFlagsResult?.dsCoreAccess?.value > 0) {
                this.showAccess = true;
                this.dsCoreAccessId = this.accountFlagsResult?.dsCoreAccess?.itemId;
            } else {
                this.showDSCoreInactive = true;
            }

            if(this.accountFlagsResult?.dsCoreLab?.value > 0){
                this.dsCoreLabId = this.accountFlagsResult?.dsCoreLab?.itemId;
            }

            if(this.accountFlagsResult?.dsCoreCare?.value > 0){
                this.dsCoreCareId = this.accountFlagsResult?.dsCoreCare?.itemId;
            }

            if(this.accountFlagsResult?.cerecClub?.value > 0){
                this.cerecClubId = this.accountFlagsResult?.cerecClub?.itemId;
            }

            if(this.accountFlagsResult?.dsCom?.value > 0){
                this.dsComId = this.accountFlagsResult?.dsCom?.itemId;
            }

            if(this.accountFlagsResult?.sureSmile?.value > 0){
                this.sureSmileId = this.accountFlagsResult?.sureSmile?.itemId;
            }

            if(this.accountFlagsResult?.awo?.value > 0){
                this.awoId = this.accountFlagsResult?.awo?.itemId;
            }

            if(this.accountFlagsResult?.awo?.value > 0){
                this.siroForceId = this.accountFlagsResult?.siroForce?.itemId;
            }

        } else if (error) {
            console.error(error);
        }
    }

    get kolClass() {
        return this.getFlag(this.accountFlagsResult?.kol?.value);
    }

    get customerNumberClass() {
        return this.getFlag(this.accountFlagsResult?.customerNumber?.value);
    }

    get dsCoreAccessClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreAccess?.value);
    }

    get dsCoreLightClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreLight?.value);
    }

    get dsCoreStandardClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreStandard?.value);
    }

    get dsCoreAdvancedClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreAdvanced?.value);
    }

    get dsCoreLabClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreLab?.value);
    }

    get dsCoreCareClass() {
        return this.getFlag(this.accountFlagsResult?.dsCoreCare?.value);
    }

    get cerecClubClass() {
        return this.getFlag(this.accountFlagsResult?.cerecClub?.value);
    }

    get dsComCLass() {
        return this.getFlag(this.accountFlagsResult?.dsCom?.value);
    }

    get sureSmileClass() {
        return this.getFlag(this.accountFlagsResult?.sureSmile?.value);
    }

    get awoClass() {
        return this.getFlag(this.accountFlagsResult?.awo?.value);
    }

    get siroForceClass() {
        return this.getFlag(this.accountFlagsResult?.siroForce?.value);
    }

    getFlag(flagValue){
        return 'flag-square ' + (flagValue == 1 ? 'flag-green' : (flagValue == 2 ? 'flag-red' : 'flag-white'));
    }

    handleMouseOver(event) {
        this.handleMouseEvent(event, true);
    }

    handleMouseOut(event) {
        this.handleMouseEvent(event, false);
    }

    handleMouseEvent(event, isOver){
        const flagType = event.target.dataset.flagtype;
        switch (flagType) {
            case 'customerNumber':
                this.isMouseOverCustomerNumber = isOver;
                break;
            case 'dsCoreAccess':
                this.isMouseOverDSCoreAccess = isOver;
                break;
            case 'dsCoreLight':
                this.isMouseOverDSCoreLight = isOver;
                break;
            case 'dsCoreStandard':
                this.isMouseOverDSCoreStandard = isOver;
                break;
            case 'dsCoreAdvanced':
                this.isMouseOverDSCoreAdvanced = isOver;
                break;
            case 'dsCoreLab':
                this.isMouseOverDSCoreLab = isOver;
                break;
            case 'dsCoreCare':
                this.isMouseOverDSCoreCare = isOver;
                break;
            case 'cerecClub':
                this.isMouseOverCerecClub = isOver;
                break;
            case 'dsCom':
                this.isMouseOverDSCom = isOver;
                break;
            case 'sureSmile':
                this.isMouseOverSureSmile = isOver;
                break;
            case 'awo':
                this.isMouseOverAwo = isOver;
                break;
            case 'siroForce':
                this.isMouseOverSiroForce = isOver;
                break;
        }
    }

    handleRedirection(event){
        event.preventDefault();

        const itemId = event.target.dataset.itemid;

        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
                objectApiName: 'ContractLineItem',
                actionName: "view",
                recordId: itemId
            }
        });
    }
}