// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/GetOrderStatusCallOut.getCountryCode" {
    export default function getCountryCode(): Promise<string>;
}

declare module "@salesforce/apex/GetOrderStatusCallOut.getOrderNumber" {
    export default function getOrderNumber(params: {openOrderId: string, objectType: string}): Promise<string>;
}

declare module "@salesforce/apex/GetOrderStatusCallOut.getOrderStatusCallOut" {
    export default function getOrderStatusCallOut(params: {country: string, orderNumber: string}): Promise<any>;
}