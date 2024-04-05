<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>SourceRecordDeactivated</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Name,Combined_Fields__c,Status__c</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">solution</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">Source_Record__c</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">CIM_Account__c</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">6.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">Status__c = &apos;Inactive&apos; and LastModifiedDate &gt;= LAST_N_DAYS:10</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:type="xsd:string">Name,Combined_Fields__c,Unique_Source_Record_Id__c</value>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">SourceRecordDeactivated</value>
    </values>
</CustomMetadata>
