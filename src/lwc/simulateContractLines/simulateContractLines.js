import { LightningElement, api, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTRACT_ITEM_OBJECT from '@salesforce/schema/ContractItem__c';

//custom Labels
import REFRESH_SIMULATION from '@salesforce/label/c.RefreshSimulationNewLWCPricingLabels';
import SELECT_PRODUCT from '@salesforce/label/c.SelectProductNewLWCPricingLabels';
import SELECT_SOURCE_RECORD from '@salesforce/label/c.SelectSourceRecordNewLWCPricingLabels';
import SIMULATE_CONTRACT from '@salesforce/label/c.SimulateContractTypeNewLWCPricingLabels';
import ALREADY_ADDED_iTEMS from '@salesforce/label/c.AlreadyAddedItemsNewLWCPricingLabels';
import PG_DISTRIBUTION from '@salesforce/label/c.PGDistributionNewLWCPricingLabels';
import SAVE_CONTRACT from '@salesforce/label/c.SaveContractSimulationNewLWCPricingLabels';
import YEARS from '@salesforce/label/c.YearsNewLWCPricingLabels';
import ERROR from '@salesforce/label/c.ErrorNewLWCPricingLabels';

//import SUCCESS from '@salesforce/label/c.YearsNewLWCPricingLabels';




//Apex Class 
import getUserDecimalSeparator from '@salesforce/apex/OrderManagement_CC.getUserDecimalSeparator';
import getDiscountModels from '@salesforce/apex/SimulateContractLineController.getDiscountModels';
import insertOrUpdateContractItem from '@salesforce/apex/SimulateContractLineController.insertOrUpdateContractItem';
import getSorceRecords from '@salesforce/apex/SimulateContractLineController.getSorceRecords';
import getSalesData from '@salesforce/apex/SimulateContractLineController.getSalesData';
import getContractItem from '@salesforce/apex/SimulateContractLineController.getContractItem';
import getRelatedDiscount from '@salesforce/apex/SimulateContractLineController.getRelatedDiscount';
import getAlreadyAddedContractItems from '@salesforce/apex/SimulateContractLineController.getAlreadyAddedContractItems';




export default class SimulateContractInQouteLines  extends NavigationMixin(LightningElement) {
    @api contractRecord ;
    @api availableActions = [] ;
    @api recordId;
    @track labels = {
        REFRESH_SIMULATION,
        SELECT_PRODUCT,
        SELECT_SOURCE_RECORD, 
        SIMULATE_CONTRACT, 
        ALREADY_ADDED_iTEMS, 
        PG_DISTRIBUTION, 
        SAVE_CONTRACT,
        YEARS,
        ERROR, 
    };
    @track trueVar = true;
    @track disableSaveButtonAndShowComment = false;
    @track numberTGManualUpdates = 0;
    @track discountManualUpdate = 0;
    @track commentAdded = false;
    @track maxDiscountToOffer = 100;
    @track isDiscountNumberValid = true;


    @api objectApiName;
    @track contractItemObjectInfo;
    @wire(getObjectInfo, { objectApiName: CONTRACT_ITEM_OBJECT })
    contractItemObjectInfo;
    discountPattern = "^\\d*\\.?\\d+$";
    varRecordId;

    @track showSelectDiscountModel;
    @track discountModelOptionsToSelect=[];

    @track contractItemDescription;
    @track errorMessage;
    @track showMessageLine = false;
    @track numOfSelectedItems = 0;
    @track disableSimulateButton = true;
    @track selectedDiscountModelProduct;
    @track showSimulationTable = false;
    @track contractItem;
    @track selectedItem;
    @track showSelectDiscounSourceRecords;
    @track sourceRecords=[];
    @track currentlyAddedItems=[];
    @track showCurrentlyAddedItems = false;
    @track showSalesCalculation = false;
    @track noDiscountsToSelect = false;
    @track showButtons = false;
    isInsert = true;
    SALESCALCULATIONMESSAGE = 'We are calculating sales and discounts. Please wait';
    
    connectedCallback() 
    {
        this.getDecimalSeparator();
        if(this.recordId){
            this.isInsert = false;
            this.getContractItem();
        }
        else{
            this.varRecordId = this.contractRecord.Id;
            this.showButtons = this.contractRecord.Status == 'Draft' ? true : false;
            this.getAlreadyAddedContractItems();

        }
        
    }

    getDecimalSeparator(){
        getUserDecimalSeparator().then(result => {
                this.decimalSeparator = result;
                if(result === ',')
                {
                    this.discountPattern = "^\\d*,?\\d+$";
                }
        })
    }

    

    getContractItem() {
        getContractItem({contractLineId : this.recordId})
            .then(result => {
                this.contractItem = result;
                this.maxDiscountToOffer = this.contractItem.DiscountModel__r.MaxDiscountToOffer__c;
                this.showButtons = this.contractItem.Contract__r.Status == 'Draft' ? true : false;
                this.getRelatedDiscount();
            })
            .catch(error => {
                this.errorMessage = error.body.message + error.body.stackTrace;
                this.showToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });
    }
    

    getRelatedDiscount() {
        getRelatedDiscount({discountModelId : this.contractItem.DiscountModel__c})
            .then(result => {
                this.discountPlan = result;
                this.showSimulationTable = true;
            })
            .catch(error => {
                this.errorMessage = error.body.message + error.body.stackTrace;
                this.showToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });
    }

    getAlreadyAddedContractItems() {
        getAlreadyAddedContractItems({contractId : this.varRecordId})
            .then(result => {
                this.currentlyAddedItems = result;
                this.getDiscountModels();
                
            })
            .catch(error => {
                this.errorMessage = error.body.message + error.body.stackTrace;
                this.showToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });
    }

    getDiscountModels() {
        this.showSelectDiscountModel = true;
        let accId = this.contractRecord.AccountId;
        let tempdscountModels = [];
        getDiscountModels({accountId : accId})
            .then(result => {
                if(this.currentlyAddedItems.length > 0 ){
                    this.showCurrentlyAddedItems = true;
                    tempdscountModels = result;
                    for(let i=0 ; i< this.tempdscountModels.length ; i++){
                        this.tempdscountModels[i].isSelected= false;
                        for(let j=0; j < this.currentlyAddedItems.length; j++){
                            if(tempdscountModels[i].Product__c == this.currentlyAddedItems[j].Name){
                                this.discountModelOptionsToSelect.push(tempdscountModels[i]);
                                this.noDiscountsToSelect = true;
                            }
                        }
                    }
                } else {
                    this.discountModelOptionsToSelect = result;
                    if(this.discountModelOptionsToSelect){
                        for(let i=0 ; i< this.discountModelOptionsToSelect.length ; i++){
                            this.discountModelOptionsToSelect[i].isSelected= false;
                            this.noDiscountsToSelect = true;
                        }
                    }

                }
                
            })
            .catch(error => {
                this.errorMessage = error.body.message + error.body.stackTrace;
                this.showToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });
    }

    getSorceRecords() {
        this.showSelectDiscounSourceRecords = true;
        let accId = this.contractRecord.AccountId;
        let codes = this.selectedDiscountModelProduct.CompanyCodes__c;
        
        this.maxDiscountToOffer = this.selectedDiscountModelProduct.MaxDiscountToOffer__c;
        getSorceRecords({accountId : accId, companyCodes : codes })
            .then(result => {
                this.sourceRecords = result;
                if(this.sourceRecords){
                    for(let i=0 ; i< this.sourceRecords.length ; i++){
                        this.sourceRecords[i].isSelected= false;
                    }
                }
            })
            .catch(error => {
                this.errorMessage = error.body.message + error.body.stackTrace;
                this.showToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });
    }

    handleSelectChange(event) {
        let index = event.target.dataset.index;
        let isSelected = event.target.checked;
        this.numOfSelectedItems = isSelected ? this.numOfSelectedItems + 1 : this.numOfSelectedItems - 1;
        this.disableSimulateButton = this.numOfSelectedItems > 0 ? false : true;
        this.discountModelOptionsToSelect[index].isSelected = isSelected;
        this.contractItem = {Name : this.discountModelOptionsToSelect[index].Product__c,
                            CurrencyIsoCode: this.contractRecord.CurrencyIsoCode,
                            DiscountModel__c: this.discountModelOptionsToSelect[index].Id,
                            Contract__c : this.contractRecord.Id,
                            UniqueContractItemKey__c : this.discountModelOptionsToSelect[index].Product__c + '*' + this.contractRecord.Id};
        this.selectedDiscountModelProduct = this.discountModelOptionsToSelect[index];
        this.getSorceRecords();
    }

    handleSelectChangeRecords(event){
        let index = event.target.dataset.index;
        let isSelected = event.target.checked;
        this.sourceRecords[index].isSelected = isSelected;

    }

    handleSelectPrimescan(event){
        this.showMessageLine = true;
        let isSelected = event.target.checked;
        this.contractItem.PGsPurchased__c = isSelected == true ? this.contractItem.PGsPurchased__c + 1 : this.contractItem.PGsPurchased__c - 1;
        this.contractItem.TGPrimescanManuallyUpdated__c = isSelected == true ? true : false;
        this.numberTGManualUpdates = this.contractItem.TGPrimescanManuallyUpdated__c != this.contractItem.TGPrimescan__c ? this.numberTGManualUpdates +1 : this.numberTGManualUpdates -1;
        this.disableSaveButtonAndShowComment = this.numberTGManualUpdates > 0 ? true : false;
        this.calculateDiscounts();
    }

    handleSelectCBCT(event){
        this.showMessageLine = true;
        let isSelected = event.target.checked;
        this.contractItem.PGsPurchased__c = isSelected == true ? this.contractItem.PGsPurchased__c + 1 : this.contractItem.PGsPurchased__c - 1;
        this.contractItem.TGCBCTManuallyUpdated__c = isSelected == true ? true : false;
        this.numberTGManualUpdates = this.contractItem.TGCBCTManuallyUpdated__c != this.contractItem.TGCBCT__c ? this.numberTGManualUpdates +1 : this.numberTGManualUpdates -1;
        this.disableSaveButtonAndShowComment = this.numberTGManualUpdates > 0 ? true : false;
        this.calculateDiscounts();
    }

    handleSelectSimplant(event){
        this.showMessageLine = true;
        let isSelected = event.target.checked;
        this.contractItem.PGsPurchased__c = isSelected == true ? this.contractItem.PGsPurchased__c + 1 : this.contractItem.PGsPurchased__c - 1;
        this.contractItem.TGSimplantManuallyUpdated__c = isSelected == true ? true : false;
        this.numberTGManualUpdates = this.contractItem.TGSimplantManuallyUpdated__c != this.contractItem.TGSimplant__c ? this.numberTGManualUpdates +1 : this.numberTGManualUpdates -1;
        this.disableSaveButtonAndShowComment = this.numberTGManualUpdates > 0 ? true : false;
        this.calculateDiscounts();
    }

    handleSelectAtlantis(event){
        this.showMessageLine = true;
        let isSelected = event.target.checked;
        this.contractItem.PGsPurchased__c = isSelected == true ? this.contractItem.PGsPurchased__c + 1 : this.contractItem.PGsPurchased__c - 1;
        this.contractItem.TGAtlantisManuallyUpdated__c = isSelected == true ? true : false;
        this.numberTGManualUpdates = this.contractItem.TGAtlantisManuallyUpdated__c != this.contractItem.TGAtlantis__c ? this.numberTGManualUpdates +1 : this.numberTGManualUpdates -1;
        this.disableSaveButtonAndShowComment = this.numberTGManualUpdates > 0 ? true : false;
        this.calculateDiscounts();
    }

    

    simulateContract(){
        this.showSalesCalculation = true;
        this.showSelectDiscountModel = false;
        this.doSAQLQueryCallOut();
    }

    doSAQLQueryCallOut(){

        let accId = this.isInsert ? this.contractRecord.AccountId : this.contractItem.Contract__r.AccountId;
        let saql =this.isInsert ? this.selectedDiscountModelProduct.SAQLQuery__c : this.discountPlan.SAQLQuery__c;
        getSalesData({accountId : accId, querySAQL : saql})
            .then(result => {
                let salesData = result;
                this.contractItem.TotalNetSales2YAgo__c = salesData.results.records.length > 0 ? salesData.results.records[0].NetSalesPR12M : 0; 
                this.contractItem.TotalNetSales__c =  salesData.results.records.length > 0 ? salesData.results.records[0].NetSales : 0;
                this.contractItem.PGsPurchased__c = salesData.results.records.length > 0 ? salesData.results.records[0].PGs : 0;
                this.contractItem.Growth__c = salesData.results.records.length > 0 ? salesData.results.records[0].Growth : 0;
                this.contractItem.ofYearsPurchasingFromDS__c = salesData.results.records.length > 0 ? salesData.results.records[0].NumberOfYearsBuying : 0;
                this.contractItem.TGAtlantis__c = salesData.results.records.length > 0 && salesData.results.records[0].Atlantis > 0 ? true : false ;
                this.contractItem.TGAtlantisManuallyUpdated__c = salesData.results.records.length > 0 ? this.contractItem.TGAtlantis__c : 0;
                this.contractItem.TGCBCT__c = salesData.results.records.length > 0 && salesData.results.records[0].CBCT > 0 ? true : false ;
                this.contractItem.TGCBCTManuallyUpdated__c = salesData.results.records.length > 0 ? this.contractItem.TGCBCT__c : 0;
                this.contractItem.TGImplantSystem__c = salesData.results.records.length > 0 && salesData.results.records[0].ImplantSystem > 0 ? true : false ;
                this.contractItem.TGOssix__c = salesData.results.records.length > 0 && salesData.results.records[0].Ossix > 0 ? true : false ;
                this.contractItem.TGPrimescan__c = salesData.results.records.length > 0 && salesData.results.records[0].Primescan > 0 ? true : false ;
                this.contractItem.TGPrimescanManuallyUpdated__c = salesData.results.records.length > 0 ? this.contractItem.TGPrimescan__c : 0;
                this.contractItem.TGSimplant__c = salesData.results.records.length > 0 && salesData.results.records[0].Simplant > 0 ? true : false ;
                this.contractItem.TGSimplantManuallyUpdated__c = salesData.results.records.length > 0 ? this.contractItem.TGSimplant__c : 0;



                this.calculateDiscounts();
                this.showSalesCalculation = false;

            })
            .catch(error => {
                this.showSalesCalculation = false;
                this.errorMessage = error.body.message + error.body.stackTrace;
                this.showToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });






    }

    calculateDiscounts(){   
                if(this.isInsert == true){
                    this.discountPlan = this.selectedDiscountModelProduct;
                    this.contractItem.DiscountModel__c = this.discountPlan.Id; //not needed to update
                }
                this.contractItem.Segmentation__c = '';
                this.contractItem.SegmentationDiscount__c = 0;
                this.contractItem.TotalNetSalesDiscount__c = 0;
                this.contractItem.PGsPurchasedDiscount__c = 0;
                this.contractItem.GrowthDiscount__c = 0;
                this.contractItem.ofYearsPurchasingFromDSDiscount__c = 0;
                for(let i = 0; i < this.discountPlan.Discount_row__r.length; i++) {
                    this.contractItem.Segmentation__c = this.discountPlan.Discount_row__r[i].Discount_lever__c == 'Segment base' && this.contractItem.TotalNetSales__c >= this.discountPlan.Discount_row__r[i].MinNumber__c && this.contractItem.TotalNetSales__c < this.discountPlan.Discount_row__r[i].MaxNumber__c  && this.contractItem.TotalNetSales__c > this.discountPlan.Discount_row__r[i].MinTotalSalesNet__c  ? this.discountPlan.Discount_row__r[i].TextMatchResult__c : this.contractItem.Segmentation__c;
                    this.contractItem.SegmentationDiscount__c = this.discountPlan.Discount_row__r[i].Discount_lever__c == 'Segment base' &&  this.contractItem.TotalNetSales__c >= this.discountPlan.Discount_row__r[i].MinNumber__c && this.contractItem.TotalNetSales__c < this.discountPlan.Discount_row__r[i].MaxNumber__c  && this.contractItem.TotalNetSales__c > this.discountPlan.Discount_row__r[i].MinTotalSalesNet__c  ? this.discountPlan.Discount_row__r[i].Allowed_discount__c : this.contractItem.SegmentationDiscount__c;
                    this.contractItem.TotalNetSalesDiscount__c = this.discountPlan.Discount_row__r[i].Discount_lever__c == 'Total Net Sales' && this.contractItem.TotalNetSales__c >= this.discountPlan.Discount_row__r[i].MinNumber__c && this.contractItem.TotalNetSales__c < this.discountPlan.Discount_row__r[i].MaxNumber__c && this.contractItem.TotalNetSales__c > this.discountPlan.Discount_row__r[i].MinTotalSalesNet__c ? this.discountPlan.Discount_row__r[i].Allowed_discount__c : this.contractItem.TotalNetSalesDiscount__c;
                    this.contractItem.PGsPurchasedDiscount__c = this.discountPlan.Discount_row__r[i].Discount_lever__c == 'Workflow coverage' && this.contractItem.PGsPurchased__c >= this.discountPlan.Discount_row__r[i].MinNumber__c && this.contractItem.PGsPurchased__c < this.discountPlan.Discount_row__r[i].MaxNumber__c && this.contractItem.TotalNetSales__c > this.discountPlan.Discount_row__r[i].MinTotalSalesNet__c ? this.discountPlan.Discount_row__r[i].Allowed_discount__c : this.contractItem.PGsPurchasedDiscount__c;
                    this.contractItem.GrowthDiscount__c = this.discountPlan.Discount_row__r[i].Discount_lever__c == 'Growth' && this.contractItem.Growth__c >= this.discountPlan.Discount_row__r[i].MinNumber__c && this.contractItem.Growth__c < this.discountPlan.Discount_row__r[i].MaxNumber__c && this.contractItem.TotalNetSales__c > this.discountPlan.Discount_row__r[i].MinTotalSalesNet__c ? this.discountPlan.Discount_row__r[i].Allowed_discount__c : this.contractItem.GrowthDiscount__c;
                    this.contractItem.ofYearsPurchasingFromDSDiscount__c = this.discountPlan.Discount_row__r[i].Discount_lever__c == 'Loyalty' && this.contractItem.ofYearsPurchasingFromDS__c >= this.discountPlan.Discount_row__r[i].MinNumber__c && this.contractItem.ofYearsPurchasingFromDS__c < this.discountPlan.Discount_row__r[i].MaxNumber__c && this.contractItem.TotalNetSales__c > this.discountPlan.Discount_row__r[i].MinTotalSalesNet__c ? this.discountPlan.Discount_row__r[i].Allowed_discount__c : this.contractItem.ofYearsPurchasingFromDSDiscount__c;
                }
                this.contractItem.RecommendedDiscount__c = this.contractItem.SegmentationDiscount__c +  this.contractItem.TotalNetSalesDiscount__c + this.contractItem.PGsPurchasedDiscount__c + this.contractItem.GrowthDiscount__c + this.contractItem.ofYearsPurchasingFromDSDiscount__c;
                
                this.contractItem.OfferedDiscount__c = this.contractItem.RecommendedDiscount__c;
                this.showSimulationTable= true;

    }  

    get disableSavebutton(){
        return ((this.disableSaveButtonAndShowComment || this.discountManualUpdate ) && !this.commentAdded) || !this.isDiscountNumberValid ;
    }

    get enableCommentSection(){
        return (this.disableSaveButtonAndShowComment || this.discountManualUpdate) ;
    }

    handleDiscountUpdate(event) {
        this.showMessageLine = true;
        
        if(this.decimalSeparator === ',')
        {
            let formattedInput = event.target.value;
            if(event.target.value.indexOf(',') != -1)
            {
                formattedInput = formattedInput.replace(/,/g,'.');
            }
            this.contractItem.OfferedDiscount__c = parseFloat(formattedInput);
        }
        else
        {
            this.contractItem.OfferedDiscount__c = event.detail.value; 
        }
        this.isDiscountNumberValid = event.target.validity.valid == true ? true : false;
        this.discountManualUpdate = this.contractItem.OfferedDiscount__c >  this.contractItem.RecommendedDiscount__c ;
    } 

    handleInputMassageChange(event){
        this.contractItem.Comments__c = event.detail.value;
        this.commentAdded = true ;
    }

 
    handleSaveSimulation() {
        for(let i=0 ; i< this.sourceRecords.length ; i++){
            if(this.sourceRecords[i].isSelected== true){
                this.contractItem.SourceRecords__c = this.contractItem.SourceRecords__c == null ? this.sourceRecords[i].Source_Id__c + ',' + this.sourceRecords[i].Company_Code__c + ',' + this.sourceRecords[i].Customer_Id__c + '\r\n' : this.contractItem.SourceRecords__c + this.sourceRecords[i].Source_Id__c + ',' + this.sourceRecords[i].Company_Code__c + ',' + this.sourceRecords[i].Customer_Id__c + '\r\n';
            }
        }
        this.insertOrUpdateContractItem();
    }
    
    insertOrUpdateContractItem(){
        insertOrUpdateContractItem({contractLine : this.contractItem, isInsert : this.isInsert})
            .then(result => {
            //let contractLineInserted = result;
            
            if(this.isInsert){
                this.handleCloseFlow(); //close the flow
            } else {
                this.updateRecordView(this.recordId);
            }

            })
            .catch(error => {
                this.errorMessage = error.body.message + error.body.stackTrace;
                this.showToast(this.labels.ERROR, error.body.message + error.body.stackTrace, 'error' );
            });
    }

    handleCloseFlow() {
        // check if NEXT is allowed on this screen FlowNavigationFinishEvent
        if (this.availableActions.find((action) => action === 'FINISH')) {
            // navigate to the next screen
            const navigateToEnd = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateToEnd);
        }
    }

    updateRecordView(recordId) {
        updateRecord({fields: { Id: recordId }});
        
    }

    goToContractItem(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        let contractItemIdToGo = evt.target.dataset.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: contractItemIdToGo,
                objectApiName: 'ContractItem__c',
                actionName: 'view'
            }
        });
    }
    
    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

}