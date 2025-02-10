// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConsumptionSchedule extends SObject 
{
    CreatedBy: User;
    CreatedById: string;
    CreatedDate: string;
    IsDeleted: boolean;
    LastModifiedBy: User;
    LastModifiedById: string;
    LastModifiedDate: string;
    Name: string;
    /**
     * The reciprocal relationship for {@link SBQQ__OrderItemConsumptionSchedule__c.SBQQ__ConsumptionSchedule__c}.
     */
    OrderItemConsumptionSchedules__r: SBQQ__OrderItemConsumptionSchedule__c[];
    /**
     * The reciprocal relationship for {@link SBQQ__QuoteLineConsumptionSchedule__c.SBQQ__ConsumptionSchedule__c}.
     */
    QuoteLineConsumptionSchedules__r: SBQQ__QuoteLineConsumptionSchedule__c[];
    SBQQ__Category__c: string;
    /**
     * The reciprocal relationship for {@link SBQQ__SubscriptionConsumptionSchedule__c.SBQQ__ConsumptionSchedule__c}.
     */
    SubscriptionConsumptionSchedules__r: SBQQ__SubscriptionConsumptionSchedule__c[];
    UnitOfMeasure: string;
}