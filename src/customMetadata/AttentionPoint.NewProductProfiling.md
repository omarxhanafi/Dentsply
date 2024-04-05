<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>New Product Profiling</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">ProductName__c,Manufacturer__c,InUseSince__c</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">goals</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">Product_Profiling__c</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">Account__c</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">8.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">createddate &gt;= LAST_N_DAYS:10 and createddate &lt;= TODAY</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">NewProductProfiling</value>
    </values>
</CustomMetadata>
