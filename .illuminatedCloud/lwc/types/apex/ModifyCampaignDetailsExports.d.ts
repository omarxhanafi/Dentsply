// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ModifyCampaignDetails.createTask" {
    export default function createTask(params: {task: any, selectedRecordsIds: string[], accountId: string}): Promise<void>;
}

declare module "@salesforce/apex/ModifyCampaignDetails.filterSelectedRecords" {
    export default function filterSelectedRecords(params: {lstRecordId: string[], accountId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ModifyCampaignDetails.getCampaignDetails" {
    export default function getCampaignDetails(params: {accountId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ModifyCampaignDetails.getPickValues_Act" {
    export default function getPickValues_Act(): Promise<string[]>;
}

declare module "@salesforce/apex/ModifyCampaignDetails.getPickValues_Stat" {
    export default function getPickValues_Stat(): Promise<string[]>;
}

declare module "@salesforce/apex/ModifyCampaignDetails.getPickValues_Typ" {
    export default function getPickValues_Typ(): Promise<string[]>;
}

declare module "@salesforce/apex/ModifyCampaignDetails.setReminderDate" {
    export default function setReminderDate(params: {dueDate: string}): Promise<string>;
}

declare module "@salesforce/apex/ModifyCampaignDetails.updateTask" {
    export default function updateTask(params: {data: string, accountId: string}): Promise<void>;
}