// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/ObjectivesController_OGSM.cloneObjective" {
    export default function cloneObjective(params: {objectiveId: string, currentAccPlan: string}): Promise<string>;
}

declare module "@salesforce/apex/ObjectivesController_OGSM.deleteObjective" {
    export default function deleteObjective(params: {objectiveId: string}): Promise<void>;
}

declare module "@salesforce/apex/ObjectivesController_OGSM.fetchObjectives" {
    export default function fetchObjectives(params: {accountPlanId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/ObjectivesController_OGSM.updateObjectives" {
    export default function updateObjectives(params: {data: any}): Promise<void>;
}