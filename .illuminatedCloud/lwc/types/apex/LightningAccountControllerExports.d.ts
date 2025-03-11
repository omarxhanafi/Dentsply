// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/LightningAccountController.getAccountInfo" {
    export default function getAccountInfo(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/LightningAccountController.getContacts" {
    export default function getContacts(params: {recordId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/LightningAccountController.getTeamSetup" {
    export default function getTeamSetup(): Promise<any[]>;
}

declare module "@salesforce/apex/LightningAccountController.getUserAccess" {
    export default function getUserAccess(params: {ComponentName: string}): Promise<boolean>;
}

declare module "@salesforce/apex/LightningAccountController.getUserInfo" {
    export default function getUserInfo(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/LightningAccountController.getUserSBUAccess" {
    export default function getUserSBUAccess(params: {ComponentName: string}): Promise<any>;
}

declare module "@salesforce/apex/LightningAccountController.saveAccount" {
    export default function saveAccount(params: {recordId: string, Implants_potential: string}): Promise<string>;
}

declare module "@salesforce/apex/LightningAccountController.saveUser" {
    export default function saveUser(params: {ThisUser: any}): Promise<string>;
}