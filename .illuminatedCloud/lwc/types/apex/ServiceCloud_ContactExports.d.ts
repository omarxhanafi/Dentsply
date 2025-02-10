// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ServiceCloud_Contact.getCaseFieldLabels" {
    export default function getCaseFieldLabels(): Promise<any>;
}

declare module "@salesforce/apex/ServiceCloud_Contact.getContactInfo" {
    export default function getContactInfo(params: {recordId: string}): Promise<Contact>;
}

declare module "@salesforce/apex/ServiceCloud_Contact.getOpenCases" {
    export default function getOpenCases(params: {recordId: string}): Promise<Case[]>;
}