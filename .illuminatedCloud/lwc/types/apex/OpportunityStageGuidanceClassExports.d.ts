// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/OpportunityStageGuidanceClass.checkAccountPrograms" {
    export default function checkAccountPrograms(params: {recordId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OpportunityStageGuidanceClass.checkStageType" {
    export default function checkStageType(params: {stageName: string}): Promise<any>;
}

declare module "@salesforce/apex/OpportunityStageGuidanceClass.getOppStageGuidance" {
    export default function getOppStageGuidance(params: {recordId: string, objectType: string, stageField: string, countryField: string, categoryField: string, recordTypeDeveloperName: string}): Promise<OpportunityStageGuidanceClass.StageWrapper>;
}

declare module "@salesforce/apex/OpportunityStageGuidanceClass.updateStage2" {
    export default function updateStage2(params: {recordId: string, stageName: string, stageField: string}): Promise<string>;
}