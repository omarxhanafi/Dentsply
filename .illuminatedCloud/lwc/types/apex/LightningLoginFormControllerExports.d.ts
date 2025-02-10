// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/LightningLoginFormController.getForgotPasswordUrl" {
    export default function getForgotPasswordUrl(): Promise<string>;
}

declare module "@salesforce/apex/LightningLoginFormController.getIsSelfRegistrationEnabled" {
    export default function getIsSelfRegistrationEnabled(): Promise<boolean>;
}

declare module "@salesforce/apex/LightningLoginFormController.getIsUsernamePasswordEnabled" {
    export default function getIsUsernamePasswordEnabled(): Promise<boolean>;
}

declare module "@salesforce/apex/LightningLoginFormController.getSelfRegistrationUrl" {
    export default function getSelfRegistrationUrl(): Promise<string>;
}

declare module "@salesforce/apex/LightningLoginFormController.login" {
    export default function login(params: {username: string, password: string, startUrl: string}): Promise<string>;
}

declare module "@salesforce/apex/LightningLoginFormController.setExperienceId" {
    export default function setExperienceId(params: {expId: string}): Promise<string>;
}