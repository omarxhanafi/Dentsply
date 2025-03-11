// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/LeadController.getInitiatives" {
    export default function getInitiatives(): Promise<any[]>;
}

declare module "@salesforce/apex/LeadController.getSalesLeadSettings" {
    export default function getSalesLeadSettings(params: {category: string, country: string}): Promise<any[]>;
}

declare module "@salesforce/apex/LeadController.search" {
    export default function search(params: {searchTerm: string, selectedIds: string[], category: string}): Promise<LookupSearchResult[]>;
}