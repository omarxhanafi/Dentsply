// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/MetadataRecordDataController.createCountryRecord" {
    export default function createCountryRecord(params: {recordLabel: string, TeamSetup: string, Cmp: string, Visible: boolean}): Promise<string>;
}

declare module "@salesforce/apex/MetadataRecordDataController.loadRecord" {
    export default function loadRecord(params: {fullName: string, fields: string, Country: string}): Promise<SObject[]>;
}

declare module "@salesforce/apex/MetadataRecordDataController.upsertRecord" {
    export default function upsertRecord(params: {record: SObject}): Promise<string>;
}