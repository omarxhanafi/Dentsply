import { LightningElement, track, api, wire} from 'lwc';
import { showToast } from 'c/utils';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import ORDER_ITEM_OBJECT from '@salesforce/schema/OrderItem';
import DISCOUNT_FIELD from '@salesforce/schema/OrderItem.Discount_Percent__c';
import COUPON_FIELD from '@salesforce/schema/OrderItem.UseCoupon__c';
import QUANTITY_FIELD from '@salesforce/schema/OrderItem.Quantity';
import ID_FIELD from '@salesforce/schema/OrderItem.Id';
//Form Factor
import FORM_FACTOR from '@salesforce/client/formFactor';
//Apex Controllers
import getOrderItemsCounter from '@salesforce/apex/OrderManagement_CC.getOrderItemsCounter';
import getOrderItems from '@salesforce/apex/OrderManagement_CC.getOrderItems';
import updateOrderItems from '@salesforce/apex/OrderManagement_CC.insertOrderItems';
import deleteOrderItem from '@salesforce/apex/OrderManagement_CC.deleteOrderItem';
import refreshFormulas from '@salesforce/apex/OrderManagement_CC.refreshFormulas';
import getUserDecimalSeparator from '@salesforce/apex/OrderManagement_CC.getUserDecimalSeparator';
//import refreshOrderFormulas from '@salesforce/apex/OrderManagement_CC.refreshFormulasOrder';
//Custom Labels
import selectAll from '@salesforce/label/c.OM_Select_All';
import applyDiscount from '@salesforce/label/c.OM_Apply_Discount';
import enterDiscount from '@salesforce/label/c.OM_Enter_Discount';
import previous from '@salesforce/label/c.OM_Previous';
import next from '@salesforce/label/c.OM_Next';
import discountInstructions from '@salesforce/label/c.OM_Discount_Instructions';
import updateOrderItemsSuccessMessage from '@salesforce/label/c.OM_Update_Order_Items_Success_Message';
import isGreater from '@salesforce/label/c.OM_Discount_Greater_Message';
import addOneOrderItemAtLeast from '@salesforce/label/c.OM_Select_Order_Item_Validation';
import orderItemDeletedMessage from '@salesforce/label/c.OM_Order_Item_Deleted_Message';
import deleteConfirmMessage from '@salesforce/label/c.OM_Delete_Confirmation_Message';
import applyContractDiscount from '@salesforce/label/c.OM_Apply_Contract_Discount';
import applyCustomDiscount from '@salesforce/label/c.OM_Apply_Custom_Discount';
import orderItemsFound from '@salesforce/label/c.OM_Order_Items_Found';
import orderItemsSelected from '@salesforce/label/c.OM_Order_Items_Selected';
import orderItemClone from '@salesforce/label/c.OM_Order_Item_Clone';
import orderItemDelete from '@salesforce/label/c.OM_Order_Item_Delete';
import orderItemEdit from '@salesforce/label/c.OM_Order_Item_Edit';
import orderItemSave from '@salesforce/label/c.OM_Update_Order_Item_Save';
import orderItemCancel from '@salesforce/label/c.OM_Update_Order_Item_Cancel'
import messageWhenPatternMisMatch from '@salesforce/label/c.OM_Message_When_Discount_Pattern_MisMatch'
export default class OrderItemsOmLwc extends LightningElement {
    @api userUiTheme;
    @api order;
    @track maxDiscount = 100;
    @track itemToUpdate = '';
    @track totalOrderItems = 0;
    @track orderTotal = 0;
    @track discountTotal = 0;
    @track couponCount = 0; 
    @track orderRemainingQuota = 0;
    @track orderItems = [];
    @track orderItems_origin = [];
    @track pageSize = 200;
    @track pageNumber = 1;
    @track defaultValue = '';
    @track discountInputValue = this.isMobile ? 0 : '';
    @track discountInput = this.isMobile ? 0 : '';
    @track loading = true;
    @track selectAll = false;
    @track secondaryApprovalLevel = "No approval needed";
    @track approvalLevel = "No approval needed";
    patternMismatch = false;
    decimalSeparator = '.';
    discountPattern = "^\\d*\\.?\\d+$";

    @track labels = {
        selectAll,
        applyDiscount,
        enterDiscount,
        previous,
        next,
        discountInstructions,
        updateOrderItemsSuccessMessage,
        isGreater,
        addOneOrderItemAtLeast,
        orderItemDeletedMessage,
        deleteConfirmMessage,
        applyContractDiscount,
        applyCustomDiscount,
        orderItemsFound,
        orderItemsSelected,
        orderItemClone,
        orderItemDelete,
        orderItemEdit,
        orderItemSave,
        orderItemCancel,
        messageWhenPatternMisMatch
    };
    // new
    @track orderItemTileActions = [
        {
            label: this.labels.orderItemEdit,
            value: 'edit',
            iconName: 'utility:edit'
        },
        {
            label: this.labels.orderItemClone,
            value: 'clone',
            iconName: 'utility:copy'
        },
        {
            label: this.labels.orderItemDelete,
            value: 'delete',
            iconName: 'utility:delete'
        }
    ];
    currentTileAction;
    @track orderItemObjectInfo;
    // end new

    connectedCallback() {
        this.getOrderItemsCounter();
        this.getDecimalSeparator();
    }

    /**
     * Detects the user decimal separator through apex method getUserDecimalSeparator
     * Sets the pattern to validate against the discount input
     */
    getDecimalSeparator(){
        getUserDecimalSeparator().then(result => {
                this.decimalSeparator = result;
                if(result === ',')
                {
                    this.discountPattern = "^\\d*,?\\d+$";
                }
        })
    }

    @wire(getObjectInfo, { objectApiName: ORDER_ITEM_OBJECT })
    orderItemObjectInfo;
    

    get orderItemDiscountLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.Discount_Percent__c.label : '';
    }
    get orderItemQuantityLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.Quantity.label : '';
    }
    get orderItemUnitPriceLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.UnitPrice.label : '';
    }
    get orderItemRetailPriceLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.AXRetailPrice__c.label : '';
    }
    get orderItemTotalLineItemPriceLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.Total_Line_Item_Price__c.label : '';
    }
    get orderItemFOCLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.Free_of_Charge_Delivery__c.label : '';
    }
    get orderItemDiscountAmountLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.DiscountedAmount__c.label : '';
    }
    get orderItemApprovalLevelLabel() {
        return this.orderItemObjectInfo ? this.orderItemObjectInfo.data.fields.ApprovalLevel__c.label : '';
    }

    getOrderItemsCounter() {
        getOrderItemsCounter({orderId : this.order.Id}).then(result => {
            this.totalOrderItems = result;
            this.loading = false;
            this.getOrderItems();
        })
        .catch(error => {
            this.loading = false;
            showToast(this, this.userUiTheme, 'ERROR', error.body.message + error.body.stackTrace, 'error');
        });
    }
    // test
    getOrderItems() {
        this.loading = true;
        let orderTotal = this.orderTotal;
        getOrderItems({orderId : this.order.Id,
                     pageNumber : this.pageNumber,
                     pageSize : this.pageSize})
			.then(result => {
                if(result.length > 0) {
                    this.orderItems = [];
                    for(let i = 0; i < result.length; i++) {
                        
                        let orderItem = { Id : result[i].Id,
                                        Quantity : result[i].Quantity, 
                                        Product2Id : result[i].Id,
                                        Currency : result[i].Order.CurrencyIsoCode,
                                        Article__c : result[i].Product2.Article__c,
                                        Name : result[i].Product2.Name,
                                        Free_of_Charge_Delivery__c : result[i].Free_of_Charge_Delivery__c,
                                        Discount_Percent__c : result[i].Discount_Percent__c,
                                        Total_Line_Item_Price__c : result[i].Total_Line_Item_Price__c,
                                        //UnitPrice : parseFloat(result[i].UnitPrice).toFixed(2),
                                        //AXRetailPrice__c : parseFloat(result[i].AXRetailPrice__c).toFixed(2),
                                        UnitPrice : result[i].UnitPrice,
                                        AXRetailPrice__c : result[i].AXRetailPrice__c,
                                        AXDiscount__c : result[i].AXDiscount__c,
                                        DiscountedAmount : result[i].DiscountedAmount__c,
                                        LocalProductDescription__c : result[i].PricebookEntry.LocalProductDescription__c,
                                        Url : `/${result[i].Id}`,
                                        isSelected : false,
                                        ApprovalLevel__c : result[i].ApprovalLevel__c,
                                        UseCoupon__c : result[i].UseCoupon__c,
                                        AvailableCouponCode__c : result[i].AvailableCouponCode__c,
                                        EditMode : false,
                                        LineApprovalLevel__c : result[i].LineApprovalLevel__c,
                                        Primary: result[i].PricebookEntry.Primary__c,
                                        AppLev1 : result[i].PricebookEntry.ApprovalLevel1__c,
                                        AppLev2 : result[i].PricebookEntry.ApprovalLevel2__c,
                                        AppLev3 : result[i].PricebookEntry.ApprovalLevel3__c,
                                        CustomUnitPrice : Math.round(result[i].UnitPrice * (1-result[i].Discount_Percent__c/100)*100)/100
                                        };

                                        if(this.order.Pricebook2.ShowApprovalLevelOrderLine__c){
                                            orderItem.Threshold = result[i].PricebookEntry.FreeProductThreshold__c;
                                        }
                                        else{
                                            orderItem.Threshold = null;
                                        }

                                        if(result[i].Offer_Code_dna__c != null){
                                            orderItem.Offer_Code_dna__c = result[i].Offer_Code_dna__c;
                                            orderItem.OfferQuantity = result[i].Offer_Code_dna__r.QuantityLimit__c;
                                        }
                                        else{
                                            //orderItem.Offer_Code_dna__c = null;
                                            //orderItem.OfferQuantity = null;
                                        }

                                        if(orderItem.Free_of_Charge_Delivery__c != null){
                                            orderItem.FOC = true;
                                        }
                                        else{
                                            orderItem.FOC = false;
                                        }
                                        

                                        if(orderItem.Primary == true){
                                            if(result[i].LineApprovalLevel__c == '' || result[i].LineApprovalLevel__c == null){
                                                orderItem.NoApprovalNeeded = true;
                                            }
                                            else{
                                                orderItem.NoApprovalNeeded = false;
                                            }
                                        }

                                        if(orderItem.Primary == false){
                                            //console.log(this.secondaryApprovalLevel);
                                            if(this.secondaryApprovalLevel === 'No approval needed'){
                                                orderItem.NoApprovalNeeded = true;
                                            }
                                            else{
                                                orderItem.NoApprovalNeeded = false;
                                            }
                                        }

                                            if(orderItem.Threshold > 0){
                                                if((orderTotal - orderItem.Total_Line_Item_Price__c >= orderItem.Threshold* orderItem.Quantity) && orderItem.Threshold>0){
                                                    orderItem.showCoupon = true;
                                                    if(orderItem.UseCoupon__c == true){
                                                        orderItem.couponApproval = true;
                                                    }
                                                    else{
                                                        orderItem.couponApproval = false;  
                                                    }
                                                }
                                                else{
                                                    orderItem.showCoupon = false;
                                                    orderItem.couponApproval = false;
                                                }
                                            }
                                            else{
                                                orderItem.showCoupon = false;
                                                orderItem.couponApproval = false;
                                            }          
                                        
                        this.orderItems.push(orderItem);
                        
                    } 
                }
                this.handleCouponApproval();
                this.loading = false;
                this.orderItems_origin = JSON.parse(JSON.stringify(this.orderItems));
			})
			.catch(error => {
                this.loading = false;
				showToast(this, this.userUiTheme, 'ERROR', error.body.message + error.body.stackTrace, 'error');
			});
    }
    setCustomDiscount() {
        if(this.discountInput <= this.maxDiscount) {
            let orderItems = this.applyDiscount(this.discountInput);
            if(orderItems.length > 0) {
                this.updateOrderItems(orderItems);
            } else {
                showToast(this, this.userUiTheme, 'WARNING', this.labels.addOneOrderItemAtLeast , 'warning');
            }
        } else {
            showToast(this, this.userUiTheme, 'WARNING', this.discountInput + ' ' + this.labels.isGreater + this.maxDiscount + ' %', 'warning');
        }
    }
    setContractDiscount() {
        let orderItems = this.applyDiscount(this.order.Contract.Discount__c);
        if(orderItems.length > 0) {
            this.updateOrderItems(orderItems);
        } else {
            showToast(this, this.userUiTheme, 'WARNING', this.labels.addOneOrderItemAtLeast , 'warning');
        }
    }
    updateOrderItems(orderItems) {
        this.loading = true;
        console.log('Updating order items: ' + JSON.stringify(orderItems));
        updateOrderItems({ orderItems : orderItems })
        .then(result => {
            if(result === 'SUCCESS') {
                showToast(this, this.userUiTheme, 'Success', orderItems.length + ' ' + this.labels.updateOrderItemsSuccessMessage, 'success');
                this.getOrderItemsCounter();
                this.discountInputValue = this.isMobile ? 0 : '';
                this.discountInput = this.isMobile ? 0 : '';
            } else {
                showToast(this, this.userUiTheme, 'ERROR', result, 'error');
            }
            this.loading = false;
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'ERROR', error.body.message + error.body.stackTrace, 'error');
            this.loading = false;
        });
    }
    deleteOrderItem(index) {
        this.loading = true;
        let orderItem = this.orderItems[index];
        deleteOrderItem({orderItemId : orderItem.Id})
        .then(result => {
            this.getOrderItemsCounter();
            showToast(this, this.userUiTheme,'Success', this.labels.orderItemDeletedMessage,'success');
            this.loading = false;
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error',  error.body.message + error.body.stackTrace,'error');
            this.loading = false;
        });
    }
    handleNext() {
        if((this.pageNumber * this.pageSize) < this.totalOrderItems) {
            this.pageNumber++;
            this.getOrderItems();
        }
    }
    handlePrevious() {
        if(this.pageNumber > 1) {
            this.pageNumber--;
            this.getOrderItems();
        }
    }
    handleSelectChange(event) {
        var index = event.target.dataset.index;
        this.orderItems[index].isSelected = event.target.checked;
        this.selectAll = this.orderItems.every(orderItem => orderItem.isSelected);
    }
    applyDiscount(discount) {
        var orderItemsToInsert = [];
        for(let i = 0; i < this.orderItems.length; i++) {
            if(this.orderItems[i].isSelected) {
                this.orderItems[i].isSelected = false;
                this.orderItems[i].Discount_Percent__c = discount;
                let item = {};
                Object.assign(item, this.orderItems[i]);
                delete item.Article__c;
                delete item.Name;
                delete item.Currency;
                delete item.isSelected;
                orderItemsToInsert.push(item);

            }
        }
        this.selectAll = false;
        return orderItemsToInsert;
    }
    get isOrderItemsSelected() {
        return !this.orderItems.some(orderItem => orderItem.isSelected);
    }
    get isDiscountSelected(){
        return !(this.discountInput && !this.isOrderItemsSelected) || this.discountInput > this.maxDiscount || this.patternMismatch;
    }
    get isContractSelected() {
        return !this.order.Contract;
    }
    get enableSelection() {
        return false;//this.isDiscountSelected && this.isContractSelected;
    }
    get orderItemsCounter() {
        const selectedOrderItems = this.orderItems ? this.orderItems.filter(orderItem => orderItem.isSelected).length : 0;
        return selectedOrderItems === 0 ? `${this.totalOrderItems} ${this.labels.orderItemsFound}` : `${selectedOrderItems} ${this.labels.orderItemsSelected}`;
    }
    handleSelectAllChange() {
        this.selectAll = !this.selectAll;
        for(let i = 0; i < this.orderItems.length; i++) {
            this.orderItems[i].isSelected = this.selectAll;
        }
    }

    /**
     * 'onchange' Event Handle for Discount input
     * If the user enters an invalid input, we update this.patternMismatch, therefore the Apply button is deactivated
     * Supports Special case to parse comma separated floats
     * @param event - onchange event
     */
    handleChangeDiscountInput(event)
    {
        // Disable 'Apply Custom Discount' if pattern is mismatching
        let regexPattern = new RegExp(this.discountPattern);
        this.patternMismatch = !regexPattern.test(event.target.value);

        // Parsing the input value
        if(this.decimalSeparator === ',')
        {
            let formattedInput = event.target.value;
            if(event.target.value.indexOf(',') != -1)
            {
                formattedInput = formattedInput.replace(/,/g,'.');
            }
            this.discountInput = parseFloat(formattedInput);
        }
        else
        {
            this.discountInput = parseFloat(event.target.value);
        }
    }

    openUpdateOrderItemForm(event) {
        this.itemToUpdate = this.orderItems[event.target.dataset.index];
    }
    handleOrderItemUpdated() {
        this.itemToUpdate = '';
        this.getOrderItemsCounter();
        this.getOrderItems();
    }
    handleDeleteOrderItem(event) {
        if (confirm(this.labels.deleteConfirmMessage)) {
            let index = event.target.dataset.index;
            this.deleteOrderItem(index);
        }
    }
    // goToOrderItem(event) {
    //     window.open('/' + this.orderItems[event.target.dataset.index].Id);
    // }

    get getTotalPages() {
        let total = Math.ceil(this.totalOrderItems / this.pageSize);
        return total > 0 ? total : 1;
    }
    // new stuff 201005
    get isMobile() {
        return this.userUiTheme === 'Theme4t';
    }

    handleOrderItemTileAction(event) {
        // Get the value of the selected action
        const tileAction = event.detail.value;
        this.currentTileAction = tileAction;

        if (tileAction === 'edit' || tileAction === 'clone') {
            this.openUpdateOrderItemForm(event);
        } else if (tileAction === 'delete') {
            this.handleDeleteOrderItem(event);
        }
    }

    handleQuantityChange(event) {
        let quantity = event.target.value;
        let index = event.target.dataset.index;
        if(quantity > 0) {
            this.orderItems[index].Quantity = quantity;
            
            this.loading = true;
            
                let orderItem = this.orderItems[index];
                orderItem.Product2Id = null;

                refreshFormulas({om : orderItem})
                .then(result => {

                    this.orderItems[index].DiscountedAmount = result.DiscountedAmount__c;
                    this.orderItems[index].Total_Line_Item_Price__c = result.Total_Line_Item_Price__c;
                    this.orderItems[index].ApprovalLevel__c = result.ApprovalLevel__c;
                    this.orderItems[index].LineApprovalLevel__c = result.LineApprovalLevel__c;

                    this.handleCouponApproval();

                })
                .catch(error => {
                    showToast(this, this.userUiTheme, 'Error',  error.body.message + error.body.stackTrace,'error');
                    this.loading = false;
                });   

        }
    }

    handleDiscountChange(event) {
        let discount = event.target.value;
        let index = event.target.dataset.index;
        
            if(this.orderItems[index].Free_of_Charge_Delivery__c != null){
                discount = 100;                
            }

            this.orderItems[index].Discount_Percent__c = (discount*100)/100;

            var unitPrice = this.orderItems[index].UnitPrice;
            var customUnitPrice = (1  - (discount / 100)) * unitPrice;
            this.orderItems[index].CustomUnitPrice = Math.round(100*customUnitPrice)/100;

            if(discount <= 0){
                this.orderItems[index].CustomUnitPrice = unitPrice; 
            }

            this.loading = true;

                let orderItem = this.orderItems[index];
                orderItem.Product2Id = null;
                refreshFormulas({om : orderItem})
                .then(result => {

                    this.orderItems[index].DiscountedAmount = result.DiscountedAmount__c;
                    this.orderItems[index].Total_Line_Item_Price__c = result.Total_Line_Item_Price__c;
                    this.orderItems[index].ApprovalLevel__c = result.ApprovalLevel__c;
                    this.orderItems[index].AvailableCouponCode__c = result.AvailableCouponCode__c;
                    this.orderItems[index].LineApprovalLevel__c = result.LineApprovalLevel__c;
                    
                    this.handleCouponApproval();

                })
                .catch(error => {
                    showToast(this, this.userUiTheme, 'Error',  error.body.message + error.body.stackTrace,'error');
                    this.loading = false;
                });
        
    }

    handleCouponChange(event) {
        let couponAdded = event.target.selected;
        let index = event.target.dataset.index;
        if(this.orderItems[index].UseCoupon__c == false) {
            this.orderItems[index].UseCoupon__c = true;
            this.orderItems[index].Discount_Percent__c = 100;
            this.orderItems[index].CustomUnitPrice = 0;
            //this.orderItems[index].DiscountedAmount = result.DiscountedAmount__c;
            this.orderItems[index].Total_Line_Item_Price__c = 0;
        }
        else{
            this.orderItems[index].UseCoupon__c = false;
            this.orderItems[index].Discount_Percent__c = 0;
            this.orderItems[index].CustomUnitPrice = this.orderItems[index].UnitPrice;
            this.orderItems[index].Total_Line_Item_Price__c = this.orderItems[index].UnitPrice * this.orderItems[index].Quantity;
        }
        
        console.log('Line item price after coupon: ' + this.orderItems[index].Total_Line_Item_Price__c);

        this.loading = true;
        let orderItem = this.orderItems[index];
        orderItem.Product2Id = null;
 
        refreshFormulas({om : orderItem})
        .then(result => {

            //this.orderItems[index].Total_Line_Item_Price__c = result.Total_Line_Item_Price__c;
            this.orderItems[index].ApprovalLevel__c = result.ApprovalLevel__c;
            this.orderItems[index].AvailableCouponCode__c = result.AvailableCouponCode__c;
            this.orderItems[index].LineApprovalLevel__c = result.LineApprovalLevel__c;

            this.handleCouponApproval();

        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error',  error.body.message + error.body.stackTrace,'error');
            this.loading = false;
        });
    }

    handleUnitPriceChange(event) {
        let untPr = event.target.value;
        let index = event.target.dataset.index;

        this.orderItems[index].CustomUnitPrice = untPr;
        var pr = this.orderItems[index].UnitPrice;
        var discount = (1 - untPr / pr)*100;


        if(this.orderItems[index].Free_of_Charge_Delivery__c != null){
            discount = 100;                
        }

        this.orderItems[index].Discount_Percent__c = Math.round(100*discount)/100;

        this.loading = true;
        
        let orderItem = this.orderItems[index];
        orderItem.Product2Id = null;

        refreshFormulas({om : orderItem})
        .then(result => {

            this.orderItems[index].Total_Line_Item_Price__c = result.Total_Line_Item_Price__c;
            this.orderItems[index].ApprovalLevel__c = result.ApprovalLevel__c;
            this.orderItems[index].AvailableCouponCode__c = result.AvailableCouponCode__c;
            this.orderItems[index].LineApprovalLevel__c = result.LineApprovalLevel__c;
            this.orderItems[index].DiscountedAmount = result.DiscountedAmount__c;
            this.loading = false;

            this.handleCouponApproval();

        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error',  error.body.message + error.body.stackTrace,'error');
            this.loading = false;
        });

    }

    handleCouponApproval(){


        let orderTotal = 0;
        let couponCount = 0;
        let discountTotal = 0;

        let secondaryOrderValue = 0;
        let secondaryApprovalLevel1 = 0;
        let secondaryApprovalLevel2 = 0;
        let secondaryApprovalLevel3 = 0;

        let approvalLevelInt = 0;

        for(var i in this.orderItems){    
                orderTotal = orderTotal + this.orderItems[i].Total_Line_Item_Price__c;
                discountTotal = discountTotal + this.orderItems[i].Discount_Percent__c * 0.01 * this.orderItems[i].Quantity * this.orderItems[i].UnitPrice;
                
                if(this.orderItems[i].UseCoupon__c == true){
                    let itemCount = this.orderItems[i].Quantity * this.orderItems[i].Threshold;
                    couponCount = couponCount + itemCount;
                }

                if(this.orderItems[i].Primary == true){
                    let lineApprovalLevel = 0;
                    switch(this.orderItems[i].ApprovalLevel__c){
                        case "Manager":
                            lineApprovalLevel = 1;
                            break;
                        case "Area Director":
                            lineApprovalLevel = 2;
                            break;
                        case "Sales Director":
                            lineApprovalLevel = 3;
                    }

                    if(lineApprovalLevel > approvalLevelInt){
                        approvalLevelInt = lineApprovalLevel;   
                    }

                }

        }
        this.orderTotal = orderTotal;
        this.couponCount = couponCount;
        this.discountTotal = discountTotal;

        for(var n in this.orderItems){

            if(this.orderItems[n].Primary == false && (this.orderItems[n].UseCoupon__c == false || this.couponCount > this.orderTotal) && (this.orderItems[n].Offer_Code_dna__c == null || this.orderItems[n].OfferQuantity < this.orderItems[n].Quantity)){
                
                secondaryOrderValue = secondaryOrderValue + this.orderItems[n].Total_Line_Item_Price__c;
                secondaryApprovalLevel1 = secondaryApprovalLevel1 + this.orderItems[n].AppLev1 * this.orderItems[n].Quantity;
                secondaryApprovalLevel2 = secondaryApprovalLevel2 + this.orderItems[n].AppLev2 * this.orderItems[n].Quantity;
                secondaryApprovalLevel3 = secondaryApprovalLevel3 + this.orderItems[n].AppLev3 * this.orderItems[n].Quantity;
            }

        }

        let secondaryApprovalLevel = "No approval needed";
        let secondaryApprovalLevelInt = 0;

        //console.log('Secondary order value: ' + secondaryOrderValue);

        if(secondaryOrderValue < secondaryApprovalLevel1){

            if(secondaryOrderValue < secondaryApprovalLevel2){
                if(secondaryOrderValue < secondaryApprovalLevel3){
                    secondaryApprovalLevel = "Sales Director";
                    secondaryApprovalLevelInt = 3;
                }
                else{
                    secondaryApprovalLevel = "Area Director";
                    secondaryApprovalLevelInt = 2;    
                }
            }
            else{
                secondaryApprovalLevel = "Manager";
                secondaryApprovalLevelInt = 1;
            }
        }

        console.log('Secondary approval level: ' + secondaryApprovalLevel);

        this.secondaryApprovalLevel = secondaryApprovalLevel;

        if(secondaryApprovalLevelInt > approvalLevelInt){
            approvalLevelInt = secondaryApprovalLevelInt;
        }


        //Adjust approval levels in case the discount percentage is high but the discount value is low
    
            var sourceId = '';
            if(this.order.Pricebook2.SourceId__c != null){
                sourceId = this.order.Pricebook2.SourceId__c;
            };
            
            if(sourceId == '1'){

                
                if(discountTotal <10000 && approvalLevelInt > 3){
                    approvalLevelInt = 3;
                }
                
                if(discountTotal <2000 && approvalLevelInt > 2){
                    approvalLevelInt = 2;
                }
                
                if(discountTotal < 1000 && approvalLevelInt > 1){
                    approvalLevelInt = 1;
                }
                
            }
            
            if(sourceId == '2'){
                if(discountTotal <3500 && approvalLevelInt > 3){
                    approvalLevelInt = 3;
                }
                
                if(discountTotal <900 && approvalLevelInt > 2){
                    approvalLevelInt = 2;
                }
                
                if(discountTotal < 500 && approvalLevelInt > 1){
                    approvalLevelInt = 1;
                }
            }

            if(this.order.Waive_Shipping_Charges__c == true && approvalLevelInt == 0){
                approvalLevelInt = 1;
            }

        let approvalLevel = "No approval needed";

        switch(approvalLevelInt){
            case 1:
                approvalLevel = "Manager";
                break;
            case 2:
                approvalLevel = "Area Director";
                break;
            case 3:
                approvalLevel = "Sales Director";
        }

        this.approvalLevel = approvalLevel;

        for(var j in this.orderItems){
            //console.log('Check threshold: ' + this.orderItems[j].Threshold);
            if(this.orderItems[j].Threshold >0){
                //console.log('After threshold check');
                if((orderTotal - this.orderItems[j].Total_Line_Item_Price__c >= this.orderItems[j].Threshold* this.orderItems[j].Quantity) || this.orderItems[j].UseCoupon__c == true){
                    //console.log('Set show coupon');
                    this.orderItems[j].showCoupon = true;
                    if(this.orderItems[j].UseCoupon__c == true){
                        if(orderTotal - this.orderItems[j].Total_Line_Item_Price__c >= this.orderItems[j].Threshold* this.orderItems[j].Quantity){
                            this.orderItems[j].couponApproval = true;
                            //console.log('No approval needed for coupon code');
                        }
                        else{
                            this.orderItems[j].couponApproval = false;
                        }
                    }
                    else{
                        //console.log('Set hide coupon');
                        this.orderItems[j].couponApproval = false;
                    }
                }
                else{
                    //console.log('Set hide coupon');
                    this.orderItems[j].showCoupon = false;
                    this.orderItems[j].couponApproval = false;
                }
            }

            if(this.orderItems[j].LineApprovalLevel__c == '' || this.orderItems[j].LineApprovalLevel__c == null){
                    this.orderItems[j].NoApprovalNeeded = true;
            }
            else{
                this.orderItems[j].NoApprovalNeeded = false;
            }
            
        }

        this.loading = false;
    }


    get pagination() {
        return this.totalOrderItems > this.pageSize;
    }
    get orderItemsBoxClass() {
        const defaultClasses = 'slds-grid slds-wrap slds-theme_shade';
        return this.isMobile ? `${defaultClasses}` : `${defaultClasses} slds-box`;
    }
    get orderItemsInnerBoxClass() {
        const defaultClasses = 'slds-theme_shade'; //slds-text-align_center 
        if (this.isMobile) {
            return `${defaultClasses}`;
        } else if (this.userUiTheme === 'Theme3') {
            return `${defaultClasses} slds-box custom-box container-vf-height slds-scrollable`;
        } else {
            return `${defaultClasses} slds-box custom-box`;
        }
    }
    get selectAllCheckboxClass() {
        const defaultClasses = 'slds-form-element slds-float_left';
        return this.isMobile ? `${defaultClasses}` : `${defaultClasses} slds-m-left_x-small`;
    }
    get isSmallScreen() {
        return window.innerWidth < 768;
    }
    get marginTopNegativeClass() {
        return this.isMobile ? `m-top-negative slds-size_8-of-12 slds-m-top_xx-small` : `slds-col slds-size_10-of-12 slds-m-top_xx-small slds-text-align_center`;
    }
    get paginationTablet() {
        return this.pagination && this.isMobile && !this.isSmallScreen;
    }
    get contractDiscountLabel() {
        return `${this.labels.applyContractDiscount} (${this.order.Contract.Discount__c}%)`
    }
    get contractDiscountLabelCompact() {
        return `(${this.order.Contract.Discount__c}%)`
    }

    handleEditChange(event) {
        let rec = event.target.value;
        let index = event.target.dataset.index;

        if (this.orderItems[index].EditMode == false){
            this.orderItems[index].EditMode = true;
        }
        else{
            this.orderItems[index].EditMode = false;
            this.orderItems[index] = JSON.parse(JSON.stringify(this.orderItems_origin[index]));
            this.handleCouponApproval();
        }

    }
    
    updateOrderItem(event) {
        let index = event.target.dataset.index;
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.orderItems[index].Id;
        fields[DISCOUNT_FIELD.fieldApiName] = this.orderItems[index].Discount_Percent__c;
        fields[QUANTITY_FIELD.fieldApiName] = this.orderItems[index].Quantity;

        if(this.order.Pricebook2.ShowApprovalLevelOrderLine__c == true){
            fields[COUPON_FIELD.fieldApiName] = this.orderItems[index].UseCoupon__c;
        }

        const recordInput = { fields };

        this.loading = true;

        const allValid = [
            ...this.template.querySelectorAll('lightning-input'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
            }, true);
        
        if (!allValid) {
            //alert('Please update the invalid form entries and try again.');
            this.loading = false;
        }
        else{    
            updateRecord(recordInput)
            .then((result) => {

                this.orderItems_origin[index] = this.orderItems[index];
                // Display fresh data in the form
                if (this.orderItems[index].EditMode == false){
                    this.orderItems[index].EditMode = true;
                }
                else{
                    this.orderItems[index].EditMode = false;
                }

                this.loading = false;
                
            })
            .catch(error => {
                console.log(error);
            });
        }

    }

    /*refreshOrderFormulas(){

        console.log('Refreshing order');
        let order = this.order;

        refreshOrderFormulas({o : order})
        .then(result => {

            //this.orderItems[index].DiscountedAmount = result.DiscountedAmount__c;
            //this.orderItems[i].Total_Line_Item_Price__c = result.Total_Line_Item_Price__c;
            //this.orderItems[i].ApprovalLevel__c = result.ApprovalLevel__c;
            //this.orderItems[i].AvailableCouponCode__c = result.AvailableCouponCode__c;
            this.order.Order_Amount_global__c = result.Order_Amount_global__c;
            this.order.ApprovalLevel__c = result.ApprovalLevel__c;
            this.loading = false;
        })
        .catch(error => {
            showToast(this, this.userUiTheme, 'Error',  error.body.message + error.body.stackTrace,'error');
            this.loading = false;
        });

    }*/

}