<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>ContactNewCreation</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Full_Name__c,RoleProfessionSpecialty__c,createdDate</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">contact</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">Contact</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">AccountId</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">9.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">LastModifiedDate &gt;= LAST_N_DAYS:10 order by createddate DESC</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">ContactNewCreation</value>
    </values>
</CustomMetadata>
