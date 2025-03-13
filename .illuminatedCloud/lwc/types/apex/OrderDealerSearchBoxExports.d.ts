// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/OrderDealerSearchBox.CheckPermission" {
    export default function CheckPermission(): Promise<boolean>;
}

declare module "@salesforce/apex/OrderDealerSearchBox.fetchLookUpValues" {
    export default function fetchLookUpValues(params: {pageNumber: number, pageSize: number, searchKeyWord: string, orderId: string}): Promise<OrderDealerSearchBox.AccountDataTableWrapper>;
}

declare module "@salesforce/apex/OrderDealerSearchBox.getAllPdeList" {
    export default function getAllPdeList(params: {orderId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OrderDealerSearchBox.Initialize" {
    export default function Initialize(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/OrderDealerSearchBox.saveDealer" {
    export default function saveDealer(params: {accList: any[], orderId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OrderDealerSearchBox.updateDealerInfo" {
    export default function updateDealerInfo(params: {dealerId: string, orderRec: any}): Promise<string>;
}