// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/OrderManagement_CC.checkIfAllowToCreateOrder" {
    export default function checkIfAllowToCreateOrder(params: {parentId: string}): Promise<boolean>;
}

declare module "@salesforce/apex/OrderManagement_CC.cloneOrder" {
    export default function cloneOrder(params: {orderId: string, contractId: string}): Promise<Order>;
}

declare module "@salesforce/apex/OrderManagement_CC.cloneOrderItems" {
    export default function cloneOrderItems(params: {orderItemId: string}): Promise<OrderItem>;
}

declare module "@salesforce/apex/OrderManagement_CC.createOrder" {
    export default function createOrder(params: {pricebookId: string, parentId: string, currencyIsoCode: string, contractId: string, sourceRecordId: string, addressRecordId: string, accountId: string}): Promise<Order>;
}

declare module "@salesforce/apex/OrderManagement_CC.deleteOrderItem" {
    export default function deleteOrderItem(params: {orderItemId: string}): Promise<string>;
}

declare module "@salesforce/apex/OrderManagement_CC.getAccountRecordType" {
    export default function getAccountRecordType(params: {parentId: string}): Promise<string>;
}

declare module "@salesforce/apex/OrderManagement_CC.getAddressRecords" {
    export default function getAddressRecords(params: {parentId: string, pricebookId: string, accountId: string, sourceRecId: string}): Promise<Address__c[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getContracts" {
    export default function getContracts(params: {pricebookId: string, parentId: string, currencyIsoCode: string}): Promise<Contract[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getNavType" {
    export default function getNavType(): Promise<string>;
}

declare module "@salesforce/apex/OrderManagement_CC.getOrder" {
    export default function getOrder(params: {orderId: string}): Promise<Order>;
}

declare module "@salesforce/apex/OrderManagement_CC.getOrderItems" {
    export default function getOrderItems(params: {orderId: string, pageNumber: number, pageSize: number}): Promise<OrderItem[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getOrderItemsCounter" {
    export default function getOrderItemsCounter(params: {orderId: string}): Promise<number>;
}

declare module "@salesforce/apex/OrderManagement_CC.getPriceBooks" {
    export default function getPriceBooks(): Promise<Pricebook2[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getPriceBooksEntriesCurrencies" {
    export default function getPriceBooksEntriesCurrencies(params: {pricebookId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getProducts" {
    export default function getProducts(params: {pricebookId: string, parentId: string, keywordSearch: string, currencyIsoCode: string, valueDesc1: string, valueDesc2: string, valueDesc3: string, valueDesc4: string, pageNumber: number, pageSize: number, superProducts: boolean}): Promise<Product2[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getProductsCounter" {
    export default function getProductsCounter(params: {pricebookId: string, parentId: string, keywordSearch: string, currencyIsoCode: string, valueDesc1: string, valueDesc2: string, valueDesc3: string, valueDesc4: string, superProducts: boolean}): Promise<number>;
}

declare module "@salesforce/apex/OrderManagement_CC.getRelatedAccountsWithContact" {
    export default function getRelatedAccountsWithContact(params: {parentId: string}): Promise<AccountContactRelation[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getSBUDescriptions" {
    export default function getSBUDescriptions(params: {pricebookId: string, parentId: string, currencyIsoCode: string, superProducts: boolean}): Promise<string>;
}

declare module "@salesforce/apex/OrderManagement_CC.getSourceRecords" {
    export default function getSourceRecords(params: {parentId: string, pricebookId: string, accountId: string}): Promise<Source_Record__c[]>;
}

declare module "@salesforce/apex/OrderManagement_CC.getUserDecimalSeparator" {
    export default function getUserDecimalSeparator(): Promise<string>;
}

declare module "@salesforce/apex/OrderManagement_CC.insertOrderItems" {
    export default function insertOrderItems(params: {orderItems: OrderItem[]}): Promise<string>;
}

declare module "@salesforce/apex/OrderManagement_CC.ProdPricingERPCallOut" {
    export default function ProdPricingERPCallOut(params: {parentId: string, prodPriceRequests: ProductPricingERPCallOutWrapper.ProductEntry[]}): Promise<ProductPricingERPCallOutWrapper.ProductPricingResponse>;
}

declare module "@salesforce/apex/OrderManagement_CC.refreshFormulas" {
    export default function refreshFormulas(params: {om: OrderItem}): Promise<OrderItem>;
}

declare module "@salesforce/apex/OrderManagement_CC.uIThemeDisplayed" {
    export default function uIThemeDisplayed(): Promise<string>;
}