<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>AT_IMPL_DS_Created</label>
    <protected>false</protected>
    <values>
        <field>KeyFieldsOptional__c</field>
        <value xsi:type="xsd:string">[&quot;Communication_to_Customer_Service__c&quot;]</value>
    </values>
    <values>
        <field>KeyFieldsReadOnly__c</field>
        <value xsi:nil="true"/>
    </values>
    <values>
        <field>KeyFieldsTitle__c</field>
        <value xsi:type="xsd:string">Pflichtfelder</value>
    </values>
    <values>
        <field>KeyFields__c</field>
        <value xsi:type="xsd:string">[&quot;Order_Source__c&quot;,&quot;Communication_to_Customer_Service__c&quot;]</value>
    </values>
    <values>
        <field>OrderStatus__c</field>
        <value xsi:type="xsd:string">Created</value>
    </values>
    <values>
        <field>Pricebook2Id__c</field>
        <value xsi:type="xsd:string">01s6M000002zOk7</value>
    </values>
    <values>
        <field>StageGuidanceTitle__c</field>
        <value xsi:type="xsd:string">Bestellanleitung/Genehmigungsstufen</value>
    </values>
    <values>
        <field>StageGuidance__c</field>
        <value xsi:type="xsd:string">Bevor Auftrag versendet werden kann, muss die Auftragsherkunft erfasst werden. Danach wird die Bestellung nach folgenden Genehmigungsstufen direkt an den Kundenservice versendet.
// Auftragsrabatt gesamt &gt; EUR 20.000,- (Commercial Director + Area Sales Manager + Finance)
// Auftragsrabatt gesamt &lt;= EUR 20.000,- (Area Sales Manager ODER Commercial Director)
// Auftragswert &lt;= EUR 10.000,- mit maximalem Auftragsrabatt 25% (Regionalverkaufsleiter ODER Commercial Manager)
// Auftragsrabatt gesamt &lt;= EUR 1.000,- (Regionalverkaufsleiter ODER Commercial Manager)
// Auftragsrabatt gesamt &lt;= EUR 300,- (keine Genehmigung erforderlich)
// Aufträge mit &lt;= 3% Webshoprabatt Auftragsherkunft &quot;Webshop&quot; (Regionalverkaufsleiter ODER Customer Service Manager)</value>
    </values>
</CustomMetadata>
