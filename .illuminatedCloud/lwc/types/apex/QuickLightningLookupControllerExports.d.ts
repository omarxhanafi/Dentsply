// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/QuickLightningLookupController.getFieldValue" {
    export default function getFieldValue(params: {obj: string, objId: string, label: string}): Promise<QuickLightningLookupController.LookupRecords>;
}

declare module "@salesforce/apex/QuickLightningLookupController.getHelpText" {
    export default function getHelpText(params: {field: string}): Promise<string>;
}

declare module "@salesforce/apex/QuickLightningLookupController.getRecords" {
    export default function getRecords(params: {sObjectName: string, valueFieldName: string, displayedFieldName: string, otherFields: string, whereClause: string, filteredFieldName: string, filterFieldValue: string}): Promise<QuickLightningLookupController.LookupRecords>;
}

declare module "@salesforce/apex/QuickLightningLookupController.getReference" {
    export default function getReference(params: {field: string}): Promise<string>;
}