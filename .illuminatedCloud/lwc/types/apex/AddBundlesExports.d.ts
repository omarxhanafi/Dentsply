// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/AddBundles.getPricebookBundles" {
    export default function getPricebookBundles(params: {pricebookId: string}): Promise<Product_bundle__c[]>;
}

declare module "@salesforce/apex/AddBundles.getPriceBooks" {
    export default function getPriceBooks(): Promise<Pricebook2[]>;
}

declare module "@salesforce/apex/AddBundles.insertQuoteBundles" {
    export default function insertQuoteBundles(params: {quoteBundlesToInsert: QuoteProductBundle__c[]}): Promise<boolean>;
}

declare module "@salesforce/apex/AddBundles.updateRecord" {
    export default function updateRecord(params: {quoteId: string, pricebookId: string}): Promise<boolean>;
}