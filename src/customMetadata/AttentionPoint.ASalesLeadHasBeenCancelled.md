<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>ASalesLeadHasBeenCancelled</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Name,CancelledAssignedDate__c,Sales_Rep__r.Name</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">announcement</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">Field_Sales_Project_Members__c</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">Account__c</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">2.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">Status__c = &apos;Cancelled&apos; and CancelledAssignedDate__c &gt;= LAST_N_DAYS:30 order by CancelledAssignedDate__c DESC</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">ASalesLeadHasBeenCancelled</value>
    </values>
</CustomMetadata>
