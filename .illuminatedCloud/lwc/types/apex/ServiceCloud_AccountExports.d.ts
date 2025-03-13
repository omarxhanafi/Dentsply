// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ServiceCloud_Account.getAccountInfo" {
    export default function getAccountInfo(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/ServiceCloud_Account.getCaseFieldLabels" {
    export default function getCaseFieldLabels(): Promise<any>;
}

declare module "@salesforce/apex/ServiceCloud_Account.getOpenCases" {
    export default function getOpenCases(params: {recordId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ServiceCloud_Account.getTerritoryInfo" {
    export default function getTerritoryInfo(params: {recordId: string}): Promise<any[]>;
}