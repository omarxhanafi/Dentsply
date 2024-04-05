<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>Opportunity Recently Won</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Name,Amount,CloseDate</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">opportunity</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">Opportunity</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">AccountId</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">1.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">Closedate &lt; TODAY AND Closedate &gt;= LAST_N_DAYS:30 AND isWon = true order by Closedate DESC</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">OpportunityRecentlyWon</value>
    </values>
</CustomMetadata>
