// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/OrderDealer_CC.getDealers" {
    export default function getDealers(params: {orderId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OrderDealer_CC.getRecentlyViewed" {
    export default function getRecentlyViewed(): Promise<LookupSearchResult[]>;
}

declare module "@salesforce/apex/OrderDealer_CC.saveDealers" {
    export default function saveDealers(params: {distributors: string[], orderId: string}): Promise<any[]>;
}

declare module "@salesforce/apex/OrderDealer_CC.search" {
    export default function search(params: {searchTerm: string, selectedIds: string[]}): Promise<LookupSearchResult[]>;
}

declare module "@salesforce/apex/OrderDealer_CC.updateDealerInfo" {
    export default function updateDealerInfo(params: {dealerId: string, orderId: string}): Promise<string>;
}