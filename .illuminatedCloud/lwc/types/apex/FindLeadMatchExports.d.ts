// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/FindLeadMatch.executeLeadMatchSearch" {
    export default function executeLeadMatchSearch(params: {input: string[][]}): Promise<FindLeadMatch.leadMatchResult[]>;
}

declare module "@salesforce/apex/FindLeadMatch.getRelatedContacts" {
    export default function getRelatedContacts(params: {leadId: string, accountId: string}): Promise<FindLeadMatch.leadMatchResult[]>;
}