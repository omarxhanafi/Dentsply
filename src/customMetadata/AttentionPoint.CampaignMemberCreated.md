<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>CampaignMemberCreated</label>
    <protected>false</protected>
    <values>
        <field>Active__c</field>
        <value xsi:type="xsd:boolean">true</value>
    </values>
    <values>
        <field>FieldsToShow__c</field>
        <value xsi:type="xsd:string">Campaign.Name,Status,Campaign_End_Date__c</value>
    </values>
    <values>
        <field>Icon__c</field>
        <value xsi:type="xsd:string">campaign</value>
    </values>
    <values>
        <field>ObjectType__c</field>
        <value xsi:type="xsd:string">CampaignMember</value>
    </values>
    <values>
        <field>RelationshipField__c</field>
        <value xsi:type="xsd:string">Account__c</value>
    </values>
    <values>
        <field>Relevance__c</field>
        <value xsi:type="xsd:double">5.0</value>
    </values>
    <values>
        <field>SOQLQuery__c</field>
        <value xsi:type="xsd:string">CreatedDate &gt;= Last_N_Days:10 order by createddate DESC</value>
    </values>
    <values>
        <field>TechnicalComments__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>Title__c</field>
        <value xsi:type="xsd:string">CampaignMemberCreated</value>
    </values>
</CustomMetadata>
