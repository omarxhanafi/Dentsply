// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/LeadController.getInitiatives" {
    export default function getInitiatives(): Promise<Field_Sales_Project__c[]>;
}

declare module "@salesforce/apex/LeadController.getSalesLeadSettings" {
    export default function getSalesLeadSettings(params: {category: string, country: string}): Promise<LeadOpportunitySetting__mdt[]>;
}

declare module "@salesforce/apex/LeadController.search" {
    export default function search(params: {searchTerm: string, selectedIds: string[], category: string}): Promise<LookupSearchResult[]>;
}