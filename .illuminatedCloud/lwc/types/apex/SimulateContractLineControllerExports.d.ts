// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/SimulateContractLineController.getAlreadyAddedContractItems" {
    export default function getAlreadyAddedContractItems(params: {contractId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/SimulateContractLineController.getContractItem" {
    export default function getContractItem(params: {contractLineId: string}): Promise<any>;
}

declare module "@salesforce/apex/SimulateContractLineController.getDiscountModels" {
    export default function getDiscountModels(params: {accountId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/SimulateContractLineController.getRelatedDiscount" {
    export default function getRelatedDiscount(params: {discountModelId: string}): Promise<any>;
}

declare module "@salesforce/apex/SimulateContractLineController.getSalesData" {
    export default function getSalesData(params: {accountId: string, querySAQL: string}): Promise<any>;
}

declare module "@salesforce/apex/SimulateContractLineController.getSorceRecords" {
    export default function getSorceRecords(params: {accountId: string, companyCodes: string[]}): Promise<any[]>;
}

declare module "@salesforce/apex/SimulateContractLineController.insertOrUpdateContractItem" {
    export default function insertOrUpdateContractItem(params: {contractLine: any, isInsert: boolean}): Promise<any>;
}