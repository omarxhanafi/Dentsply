// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SalesforcePayment extends SObject 
{
    AppliedAmount: number;
    AppliedDate: Date;
    ExternalId: string;
    Memo: string;
    PaymentCurrency: string;
    SalesforceInvoice: SalesforceInvoice;
    SalesforceInvoiceId: string;
    SalesforcePaymentName: string;
    SalesforcePaymentType: string;
}