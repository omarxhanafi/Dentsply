// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/EventMultiWhoController.getContacts" {
    export default function getContacts(params: {contactId: string}): Promise<LookupSearchResult[]>;
}

declare module "@salesforce/apex/EventMultiWhoController.getEventWhoIds" {
    export default function getEventWhoIds(params: {eventId: string}): Promise<LookupSearchResult[]>;
}

declare module "@salesforce/apex/EventMultiWhoController.search" {
    export default function search(params: {searchTerm: string, selectedIds: string[]}): Promise<LookupSearchResult[]>;
}

declare module "@salesforce/apex/EventMultiWhoController.setEventWhoIds" {
    export default function setEventWhoIds(params: {eventId: string, whoIdList: string[]}): Promise<any[]>;
}