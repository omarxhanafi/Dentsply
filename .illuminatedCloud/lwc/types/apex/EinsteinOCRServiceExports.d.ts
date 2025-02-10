// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/EinsteinOCRService.logActivity" {
    export default function logActivity(params: {recordId: string, accountId: string}): Promise<string>;
}

declare module "@salesforce/apex/EinsteinOCRService.readBusinessCardBase64" {
    export default function readBusinessCardBase64(params: {sampleBusinessCard: string, objectName: string, recordId: string}): Promise<EinsteinOCRService.AuraResponseWrapper>;
}

declare module "@salesforce/apex/EinsteinOCRService.readTextFromImageByBase64" {
    export default function readTextFromImageByBase64(params: {sample: string}): Promise<string>;
}