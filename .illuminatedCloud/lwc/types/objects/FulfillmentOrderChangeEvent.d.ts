// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FulfillmentOrderChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivatedDate?: string;
    BillToContact?: Contact;
    BillToContactId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ClosedDate?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrencyIsoCode?: string;
    DeliveryMethod?: OrderDeliveryMethod;
    DeliveryMethodId?: string;
    FulfilledFromLocation?: Location;
    FulfilledFromLocationId?: string;
    FulfilledToAddress?: Address;
    FulfilledToCity?: string;
    FulfilledToCountry?: string;
    FulfilledToEmailAddress?: string;
    FulfilledToGeocodeAccuracy?: string;
    FulfilledToLatitude?: number;
    FulfilledToLongitude?: number;
    FulfilledToName?: string;
    FulfilledToPhone?: string;
    FulfilledToPostalCode?: string;
    FulfilledToState?: string;
    FulfilledToStreet?: string;
    FulfillmentOrderNumber?: string;
    GrandTotalAmount?: number;
    IsReship?: boolean;
    IsSuspended?: boolean;
    ItemCount?: number;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Order?: Order;
    OrderId?: string;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    Status?: string;
    StatusCategory?: string;
    TaxLocaleType?: string;
    TotalAdjustmentAmount?: number;
    TotalAdjustmentAmtWithTax?: number;
    TotalAdjustmentTaxAmount?: number;
    TotalAmount?: number;
    TotalDeliveryAdjustAmount?: number;
    TotalDeliveryAdjustAmtWithTax?: number;
    TotalDeliveryAdjustTaxAmount?: number;
    TotalDeliveryAmount?: number;
    TotalDeliveryAmtWithTax?: number;
    TotalDeliveryTaxAmount?: number;
    TotalFeeAdjustAmount?: number;
    TotalFeeAdjustAmtWithTax?: number;
    TotalFeeAdjustTaxAmount?: number;
    TotalFeeAmount?: number;
    TotalFeeAmtWithTax?: number;
    TotalFeeTaxAmount?: number;
    TotalProductAmount?: number;
    TotalProductAmtWithTax?: number;
    TotalProductTaxAmount?: number;
    TotalTaxAmount?: number;
    Type?: string;
    TypeCategory?: string;
}