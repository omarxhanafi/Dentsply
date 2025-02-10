// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ChangeEventHeader 
{
    changedFields: string[];
    changeOrigin: string;
    changeType: string;
    commitNumber: number;
    commitTimestamp: number;
    commitUser: string;
    diffFields: string[];
    entityName: string;
    nulledFields: string[];
    recordIds: string[];
    sequenceNumber: number;
    transactionKey: string;
}