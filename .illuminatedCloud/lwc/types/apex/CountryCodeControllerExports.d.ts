// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/CountryCodeController.getThreeDigitCode" {
    export default function getThreeDigitCode(params: {twoDigitCode: string}): Promise<string>;
}

declare module "@salesforce/apex/CountryCodeController.getTwoDigitCode" {
    export default function getTwoDigitCode(params: {threeDigitCode: string}): Promise<string>;
}