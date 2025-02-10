// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/RelatedRecordWidget_CC.completeEvent" {
    export default function completeEvent(params: {recordId: string}): Promise<string>;
}

declare module "@salesforce/apex/RelatedRecordWidget_CC.getEventRecord" {
    export default function getEventRecord(params: {recordId: string, fields: string}): Promise<SObject>;
}