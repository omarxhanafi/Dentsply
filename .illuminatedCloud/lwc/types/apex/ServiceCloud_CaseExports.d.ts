// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ServiceCloud_Case.findOrderDetails" {
    export default function findOrderDetails(params: {orderId: string}): Promise<any>;
}

declare module "@salesforce/apex/ServiceCloud_Case.findOrderRows" {
    export default function findOrderRows(params: {orderId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ServiceCloud_Case.findQuestions" {
    export default function findQuestions(): Promise<any[]>;
}

declare module "@salesforce/apex/ServiceCloud_Case.findSpecificQuestions" {
    export default function findSpecificQuestions(params: {Reason: string, Category: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ServiceCloud_Case.getCaseInfo" {
    export default function getCaseInfo(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/ServiceCloud_Case.getMyOpenCases" {
    export default function getMyOpenCases(): Promise<any[]>;
}

declare module "@salesforce/apex/ServiceCloud_Case.getOrders" {
    export default function getOrders(params: {accountId: string}): Promise<any[]>;
}