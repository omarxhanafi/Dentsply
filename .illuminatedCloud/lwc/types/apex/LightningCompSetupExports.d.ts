// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/LightningCompSetup.getCurrentApplication" {
    export default function getCurrentApplication(): Promise<string>;
}

declare module "@salesforce/apex/LightningCompSetup.getPickListValuesIntoList" {
    export default function getPickListValuesIntoList(params: {CmpName: string, fldName: string}): Promise<string[]>;
}

declare module "@salesforce/apex/LightningCompSetup.getUserList" {
    export default function getUserList(params: {searchStr: string, Country: string, Team: string}): Promise<any[]>;
}

declare module "@salesforce/apex/LightningCompSetup.loadRelatedRecord" {
    export default function loadRelatedRecord(params: {fullName: string, fields: string}): Promise<SObject[]>;
}

declare module "@salesforce/apex/LightningCompSetup.updateUser" {
    export default function updateUser(params: {Usr2Upd: any, Team2Upd: string}): Promise<string>;
}

declare module "@salesforce/apex/LightningCompSetup.upsertCmp" {
    export default function upsertCmp(params: {record: string, Descr: string, Status: string, Manager: string}): Promise<string>;
}

declare module "@salesforce/apex/LightningCompSetup.upsertTeam" {
    export default function upsertTeam(params: {record: string, Country: string, Descr: string, Status: string}): Promise<string>;
}