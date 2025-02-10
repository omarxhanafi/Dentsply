// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/UsersInAccountTerritories.getLeadOppSettingsByCountryAndBrand" {
    export default function getLeadOppSettingsByCountryAndBrand(params: {countryInput: string, brandInput: string}): Promise<LeadOpportunitySetting__mdt>;
}

declare module "@salesforce/apex/UsersInAccountTerritories.getOpportunitySettings" {
    export default function getOpportunitySettings(params: {category: string, accountid: string}): Promise<LeadOpportunitySetting__mdt[]>;
}

declare module "@salesforce/apex/UsersInAccountTerritories.getSalesLeadSettings" {
    export default function getSalesLeadSettings(params: {category: string, country: string}): Promise<LeadOpportunitySetting__mdt[]>;
}

declare module "@salesforce/apex/UsersInAccountTerritories.getSuggestedUsers" {
    export default function getSuggestedUsers(params: {accountId: string, categoryInput: string, brandInput: string, dealerId: string}): Promise<UserTerritory2Association[]>;
}

declare module "@salesforce/apex/UsersInAccountTerritories.getUsers" {
    export default function getUsers(params: {recordId: string, categoryInput: string, brandInput: string, dealerId: string}): Promise<UserTerritory2Association[]>;
}

declare module "@salesforce/apex/UsersInAccountTerritories.getUsersFromMultipleAccounts" {
    export default function getUsersFromMultipleAccounts(params: {recordIds: string[]}): Promise<any>;
}

declare module "@salesforce/apex/UsersInAccountTerritories.isManualAssignmentVisible" {
    export default function isManualAssignmentVisible(params: {recordId: string, categoryInput: string, brandInput: string}): Promise<boolean>;
}