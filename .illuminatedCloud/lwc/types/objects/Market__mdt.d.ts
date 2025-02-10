// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Market</b></h3>
 */
declare interface Market__mdt extends SObject 
{
    /**
     * The reciprocal relationship for {@link Country_Configuration__mdt.Market__c}.
     */
    Countries__r: Country_Configuration__mdt[];
    DeveloperName: string;
    Label: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string;
    QualifiedApiName: string;
    SystemModstamp: string;
}