// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/FieldServiceCalloutERP.checkIfSentBefore" {
    export default function checkIfSentBefore(params: {recordId: string}): Promise<string>;
}

declare module "@salesforce/apex/FieldServiceCalloutERP.doFieldServiceCalloutERP" {
    export default function doFieldServiceCalloutERP(params: {recordIds: string[]}): Promise<string>;
}

declare module "@salesforce/apex/FieldServiceCalloutERP.updateRecord" {
    export default function updateRecord(params: {recordIds: string[], message: string}): Promise<boolean>;
}