<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>AccountChangeRequestCompleted</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Name,Request_Type__c,status__c</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">relationship</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">Account_Create_Change_Request__c</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">Existing_Account__c</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">7.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">status__c = &apos;Processing&apos; and LastModifiedDate &lt;= LAST_N_DAYS:10</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">AccountChangeRequestCompleted</value>
    </values>
</CustomMetadata>
