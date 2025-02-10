// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/LightningSelfRegisterController.getExtraFields" {
    export default function getExtraFields(params: {extraFieldsFieldSet: string}): Promise<any[]>;
}

declare module "@salesforce/apex/LightningSelfRegisterController.selfRegister" {
    export default function selfRegister(params: {firstname: string, lastname: string, email: string, password: string, confirmPassword: string, accountId: string, regConfirmUrl: string, extraFields: string, startUrl: string, includePassword: boolean}): Promise<string>;
}

declare module "@salesforce/apex/LightningSelfRegisterController.setExperienceId" {
    export default function setExperienceId(params: {expId: string}): Promise<string>;
}