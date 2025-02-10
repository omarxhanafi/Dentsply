// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/KOLInfoController.getDeliverables" {
    export default function getDeliverables(params: {recordId: string}): Promise<KOL_Contract_Deliverable__c[]>;
}

declare module "@salesforce/apex/KOLInfoController.getKOLdata" {
    export default function getKOLdata(params: {recordId: string}): Promise<Expert__c>;
}

declare module "@salesforce/apex/KOLInfoController.getKOLlist" {
    export default function getKOLlist(): Promise<Expert__c[]>;
}

declare module "@salesforce/apex/KOLInfoController.getMyCventEvents" {
    export default function getMyCventEvents(): Promise<CventEvents__Event__c[]>;
}

declare module "@salesforce/apex/KOLInfoController.getReportLink" {
    export default function getReportLink(): Promise<string>;
}

declare module "@salesforce/apex/KOLInfoController.getSpeakerEvents" {
    export default function getSpeakerEvents(params: {recordId: string}): Promise<CventEvents__Event__c[]>;
}