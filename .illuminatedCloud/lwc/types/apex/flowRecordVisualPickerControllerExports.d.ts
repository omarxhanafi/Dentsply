// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/flowRecordVisualPickerController.getRecords" {
    export default function getRecords(params: {recordId: string, queryString: string}): Promise<string>;
}

declare module "@salesforce/apex/flowRecordVisualPickerController.getRelatedContacts" {
    export default function getRelatedContacts(params: {recordId: string}): Promise<Contact[]>;
}