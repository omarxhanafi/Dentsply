// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/OrderPath_CC.checkCancelOrderPermission" {
    export default function checkCancelOrderPermission(): Promise<boolean>;
}

declare module "@salesforce/apex/OrderPath_CC.getStageGuidance" {
    export default function getStageGuidance(params: {orderId: string}): Promise<string>;
}

declare module "@salesforce/apex/OrderPath_CC.orderCancel" {
    export default function orderCancel(params: {orderId: string, comment: string}): Promise<string>;
}

declare module "@salesforce/apex/OrderPath_CC.submitForApproval" {
    export default function submitForApproval(params: {orderId: string, comment: string}): Promise<string>;
}