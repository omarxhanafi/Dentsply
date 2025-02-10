// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/quickCreateCampaignFromCventController.convertTempAttendeesToLeads" {
    export default function convertTempAttendeesToLeads(params: {cventCode: string}): Promise<quickCreateCampaignFromCventController.ResultWrapper>;
}

declare module "@salesforce/apex/quickCreateCampaignFromCventController.createCampaignFromCvent" {
    export default function createCampaignFromCvent(params: {cventCode: string, mainBrand: string, convertMembersToSalesLeads: boolean}): Promise<quickCreateCampaignFromCventController.ResultWrapper>;
}

declare module "@salesforce/apex/quickCreateCampaignFromCventController.createNewAttendeesFromLeads" {
    export default function createNewAttendeesFromLeads(params: {attendeeWrappers: AttendeeWrapper[]}): Promise<quickCreateCampaignFromCventController.ResultWrapper>;
}

declare module "@salesforce/apex/quickCreateCampaignFromCventController.getMembersCount" {
    export default function getMembersCount(params: {campaignId: string}): Promise<Campaign>;
}