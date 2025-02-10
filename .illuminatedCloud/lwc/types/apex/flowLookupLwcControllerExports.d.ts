// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/flowLookupLwcController.getRecentlyViewed" {
    export default function getRecentlyViewed(params: {accountId: string, recordId: string}): Promise<LookupSearchResult[]>;
}

declare module "@salesforce/apex/flowLookupLwcController.prePopulateContact" {
    export default function prePopulateContact(params: {contactId: string}): Promise<LookupSearchResult>;
}

declare module "@salesforce/apex/flowLookupLwcController.search" {
    export default function search(params: {searchTerm: string, idsNotToInclude: string[], contactAccountId: string, searchObjects: string[]}): Promise<LookupSearchResult[]>;
}