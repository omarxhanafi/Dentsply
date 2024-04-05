<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>ContractExpired</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Name,Status,EndDate</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">contract</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">Contract</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">AccountId</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">10.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">EndDate = NEXT_N_DAYS:30 Order by EndDate ASC</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">ContractExpired</value>
    </values>
</CustomMetadata>
