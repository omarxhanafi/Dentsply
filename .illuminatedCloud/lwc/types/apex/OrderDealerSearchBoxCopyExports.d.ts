// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.CheckPermission" {
    export default function CheckPermission(): Promise<boolean>;
}

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.fetchLookUpValues" {
    export default function fetchLookUpValues(params: {pageNumber: number, pageSize: number, searchKeyWord: string, orderId: string}): Promise<OrderDealerSearchBoxCopy.AccountDataTableWrapper>;
}

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.getAllPdeList" {
    export default function getAllPdeList(params: {orderId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.getUpdateFromOrder" {
    export default function getUpdateFromOrder(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.Initialize" {
    export default function Initialize(params: {ordrId: string}): Promise<any>;
}

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.saveDealer" {
    export default function saveDealer(params: {accList: any[], orderId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.updateDealerInfoToOrder" {
    export default function updateDealerInfoToOrder(params: {dealrId: string, orderRec: any}): Promise<any>;
}

declare module "@salesforce/apex/OrderDealerSearchBoxCopy.updateOrder" {
    export default function updateOrder(params: {orderRec: any}): Promise<any>;
}