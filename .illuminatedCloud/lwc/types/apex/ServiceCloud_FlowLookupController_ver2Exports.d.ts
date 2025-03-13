// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ServiceCloud_FlowLookupController_ver2.getCaseInfo" {
    export default function getCaseInfo(params: {recordId: string}): Promise<any>;
}

declare module "@salesforce/apex/ServiceCloud_FlowLookupController_ver2.searchDB" {
    export default function searchDB(params: {objectName: string, fld_API_Text: string, fld_API_Val: string, lim: number, fld_API_Search: string, searchText: string, fld_API_Rel: string}): Promise<string>;
}

declare module "@salesforce/apex/ServiceCloud_FlowLookupController_ver2.searchDBexact" {
    export default function searchDBexact(params: {objectName: string, fld_API_Text: string, fld_API_Val: string, lim: number, fld_API_Search: string, searchText: string, fld_API_Rel: string}): Promise<string>;
}