// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/AccountChangeRequest.createRecord" {
    export default function createRecord(params: {accountcreate: Account_Create_Change_Request__c}): Promise<string>;
}

declare module "@salesforce/apex/AccountChangeRequest.getAccountDetails" {
    export default function getAccountDetails(params: {accountid: string}): Promise<Account>;
}

declare module "@salesforce/apex/AccountChangeRequest.getselectOptions" {
    export default function getselectOptions(): Promise<string[]>;
}