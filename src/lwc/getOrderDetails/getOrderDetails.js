import { LightningElement, track, api } from 'lwc';
import { NavigationMixin  } from "lightning/navigation";
import { showToast } from 'c/utils';
//Import Apex 
import getOrderDetails from '@salesforce/apex/GetOrderStatusCallOut.getOrderStatusCallOut';
import getCountryCode from '@salesforce/apex/GetOrderStatusCallOut.getCountryCode';
import getOrderNumber from '@salesforce/apex/GetOrderStatusCallOut.getOrderNumber';
import uIThemeDisplayed from '@salesforce/apex/OrderManagement_CC.uIThemeDisplayed';

//import custom label
import GODTypeHereCountryCode from '@salesforce/label/c.GODTypeHereCountryCode';
import GODTypeHere from '@salesforce/label/c.GODTypeHere';
import GODShippedQty from '@salesforce/label/c.GODShippedQty';
import GODShipmentNumber from '@salesforce/label/c.GODShipmentNumber';
import GODRemainingQty from '@salesforce/label/c.GODRemainingQty';
import GODPendingOfDelivery from '@salesforce/label/c.GODPendingOfDelivery';
import GODOrderedQty from '@salesforce/label/c.GODOrderedQty';
import GODItemNumber from '@salesforce/label/c.GODItemNumber';
import GODInsertOrderToSearch from '@salesforce/label/c.GODInsertOrderToSearch';
import GODERPOrderNumber from '@salesforce/label/c.GODERPOrderNumber';
import GODEnterERPOrderNumber from '@salesforce/label/c.GODEnterERPOrderNumber';
import GODEnterCountryCodeWith2Characters from '@salesforce/label/c.GODEnterCountryCodeWith2Characters';
import GODCheckOrderStatus from '@salesforce/label/c.GODCheckOrderStatus';
import GODCheckOrderDetails from '@salesforce/label/c.GODCheckOrderDetails';
import GODShipmentTrack from '@salesforce/label/c.GODShipmentTrack'; 
import GODNoShipmentTrack from '@salesforce/label/c.GODNoShipmentTrack';
import GODSearchAgain from '@salesforce/label/c.GODSearchAgain';
import GODUndeliveryItems from '@salesforce/label/c.GODUndeliveryItems';
import GODTrackOrder from '@salesforce/label/c.GODTrackOrder';





export default class GetOrderDetails extends NavigationMixin( LightningElement  ) 
{
    @api recordId;
    @api objectApiName;
    @api prop1;
    @api prop2;
    @track userUiTheme;
    @track isMobile = false;
    @track orderNumber;
    @track countryCode;
    @track orderDetails;
    @track orderLines = [];
    @track shipmentsLines ;
    @track loading = false;
    @track showDetails= false;
    @track notSuccesfullReply;
    @track hideHeader = false;
    @track isSearchCompleted = false;
    @track disableButton = true;
    @track scrollClass = 'slds-scrollable_y';
    @track labels = {
        GODTypeHereCountryCode,
        GODTypeHere,
        GODShippedQty, 
        GODShipmentNumber, 
        GODRemainingQty, 
        GODPendingOfDelivery, 
        GODOrderedQty,
        GODItemNumber, 
        GODInsertOrderToSearch, 
        GODERPOrderNumber,
        GODEnterERPOrderNumber,
        GODEnterCountryCodeWith2Characters,
        GODCheckOrderStatus,
        GODCheckOrderDetails,
        GODShipmentTrack,
        GODNoShipmentTrack,
        GODSearchAgain,
        GODUndeliveryItems,
        GODTrackOrder
    };
    @track parameterId;

    
    connectedCallback() {
        this.uIThemeDisplayed();
        this.getCountryCode();
        if(this.objectApiName == 'OpenOrderLine__c' || this.objectApiName == 'Order'){
            this.getOrderNumber();
            this.disableButton = this.countryCode != '' && this.orderNumber != '' ? false : true ;
        }
    }

    closeQuickAction() {
        const closeQA = new CustomEvent('close');
        this.dispatchEvent(closeQA);
    }

    
    
    getCountryCode() {
        getCountryCode()
        .then(result => {
            this.countryCode = result;

        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace , 'error');
        });
    }

    getOrderNumber() {
        getOrderNumber({openOrderId : this.recordId ,
                        objectType : this.objectApiName})
        .then(result => {
            this.orderNumber = result;
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace , 'error');

        });
    }


    uIThemeDisplayed() {
        uIThemeDisplayed()
        .then(result => {
            this.userUiTheme = result;
            if(this.userUiTheme === 'Theme4t'){
                this.isMobile = true;
                this.scrollClass = '';
            }
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error', error.body.message + error.body.stackTrace , 'error');
        });
    }

    shipmentTrackClick(event) {
        let openUrl = event.target.dataset.id;
        const config = {
            type: 'standard__webPage',
            attributes: {
                url: openUrl
            }
        };
        this[NavigationMixin.Navigate](config);
    }
    
    searchAgain() {
        this.isSearchCompleted= false;
        this.orderDetails = undefined;
        this.showDetails = false;
        
    }


    async handleCheckOrder() {
        this.loading = true;
        this.isSearchCompleted= true;
        this.orderDetails = await this.getOderDetails();
        if( this.orderDetails.hasOwnProperty('orderDetails')){
            this.notSuccesfullReply = null;
            this.hideHeader = this.orderDetails.orderDetails.orderNumber.substring(0,1) == 'E'? true : false ;
            for(let i = 0; i < this.orderDetails.orderDetails.orders.length; i++){
                this.orderDetails.orderDetails.orders[i].labelToShow = this.orderDetails.orderDetails.orders[i].orderStatus == 'Shipped' ? this.labels.GODUndeliveryItems : this.labels.GODPendingOfDelivery ;
                let notFullyDelivered = false;
                for(let j = 0; j < this.orderDetails.orderDetails.orders[i].lines.length; j++){
                    this.orderDetails.orderDetails.orders[i].lines[j].isDelivered = this.orderDetails.orderDetails.orders[i].lines[j].shippedQty == "" || this.orderDetails.orderDetails.orders[i].lines[j].orderedQty > this.orderDetails.orderDetails.orders[i].lines[j].shippedQty ? false : true;
                    notFullyDelivered = (this.orderDetails.orderDetails.orders[i].lines[j].shippedQty == "" || this.orderDetails.orderDetails.orders[i].lines[j].orderedQty > this.orderDetails.orderDetails.orders[i].lines[j].shippedQty) && notFullyDelivered != true ? true : notFullyDelivered;
                }
                this.orderDetails.orderDetails.orders[i].notFullyDelivered = notFullyDelivered;
                for(let z = 0; z < this.orderDetails.orderDetails.orders[i].shipments.length; z++){
                    for(let j = 0; j < this.orderDetails.orderDetails.orders[i].shipments[z].trackingDetails.length; j++){
                        this.orderDetails.orderDetails.orders[i].shipments[z].trackingDetails[j].ButtonLabel = this.orderDetails.orderDetails.orders[i].shipments[z].trackingDetails[j].trackingURL == "" ? this.labels.GODNoShipmentTrack : this.labels.GODShipmentTrack;
                        this.orderDetails.orderDetails.orders[i].shipments[z].trackingDetails[j].ButtonDisable = this.orderDetails.orderDetails.orders[i].shipments[z].trackingDetails[j].trackingURL == "" ? true : false ;
                    }
                }

            }
            
            this.showDetails = true;
        } else {
            this.notSuccesfullReply = this.orderDetails.details;

        }


        
        this.loading = false;
    }

    changeOrderNumber(event) {
        this.orderNumber = event.target.value;
        this.disableButton = this.countryCode != '' && this.orderNumber != '' ? false : true ;

    }

    changeCountryCode(event) {
        this.countryCode = event.target.value;
        this.disableButton = this.countryCode != '' && this.orderNumber != '' ? false : true ;

    }
    

    async getOderDetails(){
        try{
            let orderDetailsWithOnlyNonShippedLines = [];
            const orderDetails = await getOrderDetails({country : this.countryCode,
            orderNumber : this.orderNumber});
            orderDetailsWithOnlyNonShippedLines.push(orderDetails);
            return orderDetails;
        } catch (error){
            this.loading = false;
            showToast(this, this.userUiTheme, 'ERROR',  error.body.message + error.body.stackTrace, 'error');
        }
    }

}