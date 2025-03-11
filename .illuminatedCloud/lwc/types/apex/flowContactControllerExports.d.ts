// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/flowContactController.executeSoql" {
    export default function executeSoql(params: {fieldName: string, childObject: string, objectName: string, recordId: string}): Promise<SObject[]>;
}

declare module "@salesforce/apex/flowContactController.getRelatedContacts" {
    export default function getRelatedContacts(params: {recordId: string, sObjectName: string, accountField: string, contactFields: string}): Promise<Contact[]>;
}