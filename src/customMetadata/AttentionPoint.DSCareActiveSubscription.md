<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>DSCareActiveSubscription</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Product2.Name,StartDate,EndDate</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">case</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">ContractLineItem</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">Account__c</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">7.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">StartDate &lt;= TODAY
AND EndDate &gt;= TODAY
AND SubscriptionStartDate__c = LAST_N_DAYS:7
AND SubscriptionStatus__c = &apos;Active&apos;
AND Product2.GlobalSKUMapping__r.GPP_Code__c = &apos;DT&apos;</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">DSCareActiveSubscription</value>
    </values>
</CustomMetadata>
