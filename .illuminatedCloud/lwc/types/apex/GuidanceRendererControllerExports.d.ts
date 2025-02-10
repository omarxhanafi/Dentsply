// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/GuidanceRendererController.getBestPractices" {
    export default function getBestPractices(params: {parentId: string}): Promise<ProcedureTrackingBestPractices__mdt[]>;
}

declare module "@salesforce/apex/GuidanceRendererController.getGuidanceDetails" {
    export default function getGuidanceDetails(params: {parentId: string, nextActivity: string}): Promise<GuidanceRenderer__mdt>;
}