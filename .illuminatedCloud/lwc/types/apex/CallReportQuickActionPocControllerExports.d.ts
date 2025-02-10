// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/CallReportQuickActionPocController.createEvent" {
    export default function createEvent(params: {callReportId: string, eventWhatId: string, coTravel: string, courseOrEventPromotion: boolean}): Promise<string>;
}

declare module "@salesforce/apex/CallReportQuickActionPocController.getPickListValuesIntoMap" {
    export default function getPickListValuesIntoMap(): Promise<any>;
}

declare module "@salesforce/apex/CallReportQuickActionPocController.getProcedureTrackerDataList" {
    export default function getProcedureTrackerDataList(params: {recordId: string}): Promise<ProcedureTracker__c>;
}