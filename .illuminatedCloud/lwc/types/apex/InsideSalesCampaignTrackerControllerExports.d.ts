// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/InsideSalesCampaignTrackerController.createFollowUpTask" {
    export default function createFollowUpTask(params: {accountId: string, dueDate: string, reminderDate: string, subject: string, comments: string}): Promise<void>;
}

declare module "@salesforce/apex/InsideSalesCampaignTrackerController.createTaskforCampaignMember" {
    export default function createTaskforCampaignMember(params: {data: string, accountId: string, selectedCampaignIds: string[]}): Promise<string>;
}

declare module "@salesforce/apex/InsideSalesCampaignTrackerController.getActityResultPicklistValues" {
    export default function getActityResultPicklistValues(): Promise<string[]>;
}

declare module "@salesforce/apex/InsideSalesCampaignTrackerController.getCampaignDetails" {
    export default function getCampaignDetails(params: {accountId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/InsideSalesCampaignTrackerController.getContactTypePicklistValues" {
    export default function getContactTypePicklistValues(): Promise<string[]>;
}

declare module "@salesforce/apex/InsideSalesCampaignTrackerController.getMembersStatusPickValues" {
    export default function getMembersStatusPickValues(): Promise<string[]>;
}