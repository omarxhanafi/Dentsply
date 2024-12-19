public with sharing class EventMultiWhoController {
    private final static Integer MAX_RESULTS = 5;
    private final static String CONTACT_ICON = 'standard:contact';
    private final static String CONTACT_API_NAME = 'contact';
    private final static String SALES_LEAD_API_NAME = 'Field_Sales_Project_Members__c';
    private final static String OPPORTUNITY_API_NAME = 'Opportunity';
    private final static String ICON = 'icon';

    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> search(String searchTerm, List<String> selectedIds) {
        // Prepare results
        List<LookupSearchResult> results = new List<LookupSearchResult>();
        try {
            // Prepare query paramters
            searchTerm += '*';
    
            // Execute search query
            List<List<SObject>> searchResults = [
                FIND :searchTerm
                IN ALL FIELDS
                RETURNING
                    Contact(Id, Name, Email, Account.Name WHERE Id NOT IN :selectedIds)
                LIMIT :MAX_RESULTS
            ];
    
            // Extract Contacts & convert them into LookupSearchResult
            String contactIcon = CONTACT_ICON;
            Contact[] contacts = ((List<Contact>) searchResults[0]);
            for (Contact contact : contacts) {
                results.add(new LookupSearchResult(
                        contact.Id
                        , CONTACT_API_NAME
                        , contactIcon
                        , contact.Name
                        , contact.Account.Name/* 'Contact • ' + contact.Email */
                        , ICON
                ));
            }
        } catch (Exception e) {
            DebugLog.addException(e, 'search');
            throw new AuraHandledException(e.getMessage());
        }

        return results;
    }

    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> getContacts(Id contactId) {
        List<LookupSearchResult> results = new List<LookupSearchResult>();
        try {
            List<Contact> ContactList = new List<Contact>([
                SELECT Id, Name, Email, Account.Name 
                FROM Contact 
                WHERE Id = :contactId
            ]); 
            // Prepare results
            for (Contact contactRecord : ContactList) {
                LookupSearchResult searchResult = new LookupSearchResult(
                    contactRecord.Id
                    , CONTACT_API_NAME
                    , CONTACT_ICON
                    , contactRecord.Name
                    , contactRecord.Account.Name /* 'Contact • ' + contactRecord.Email */
                    , ICON
                );
                results.add(searchResult);
            }
        } catch (Exception e) {
            DebugLog.addException(e, 'getEventWhoids');
            throw new AuraHandledException(e.getMessage());
        }
        return results;
    }

    /**
     * Make get contacts supports multiple object types
     * @author hadib@salesforce.com | 02-12-2024
     * @param sObjectName Object Type
     * @param recordId The object recordId
     *
     * @return List<LookupSearchResult> - Search result
     */
    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> getContact(String sObjectName, Id recordId) {
        List<LookupSearchResult> results = new List<LookupSearchResult>();

        try {
            if (sObjectName == CONTACT_API_NAME) {
                Contact contactRecord = [
                        SELECT Id, Name, Email, Account.Name
                        FROM Contact
                        WHERE Id = :recordId
                        LIMIT 1
                ];
                results.add(new LookupSearchResult(
                        contactRecord.Id,
                        CONTACT_API_NAME,
                        CONTACT_ICON,
                        contactRecord.Name,
                        contactRecord.Account.Name,
                        ICON
                ));
            } else if (sObjectName == SALES_LEAD_API_NAME) {
                Field_Sales_Project_Members__c fieldSales = [
                        SELECT Contact__c, Contact__r.Name, Contact__r.Account.Name
                        FROM Field_Sales_Project_Members__c
                        WHERE Id = :recordId
                        LIMIT 1
                ];
                if (fieldSales.Contact__c != null) {
                    results.add(new LookupSearchResult(
                            fieldSales.Contact__c,
                            CONTACT_API_NAME,
                            CONTACT_ICON,
                            fieldSales.Contact__r.Name,
                            fieldSales.Contact__r.Account.Name,
                            ICON
                    ));
                }
            } else if (sObjectName == OPPORTUNITY_API_NAME) {
                Opportunity opp = [
                        SELECT Primary_Contact__c, Primary_Contact__r.Name, Primary_Contact__r.Account.Name
                        FROM Opportunity
                        WHERE Id = :recordId
                        LIMIT 1
                ];
                if (opp.Primary_Contact__c != null) {
                    results.add(new LookupSearchResult(
                            opp.Primary_Contact__c,
                            CONTACT_API_NAME,
                            CONTACT_ICON,
                            opp.Primary_Contact__r.Name,
                            opp.Primary_Contact__r.Account.Name,
                            ICON
                    ));
                }
            } else {
                throw new AuraHandledException('Unsupported sObjectName: ' + sObjectName);
            }
        } catch (Exception e) {
            DebugLog.addException(e, 'getContacts');
            throw new AuraHandledException('Error retrieving contacts: ' + e.getMessage());
        }

        return results;
    }


    @AuraEnabled(Cacheable=true)
    public static List<LookupSearchResult> getEventWhoIds(Id eventId) {
        List<LookupSearchResult> results = new List<LookupSearchResult>();
        try {
            List<EventRelation> eventRelationList = new List<EventRelation>([
                SELECT RelationId, Relation.Name, Relation.Email, Account.Name, Event.WhoId 
                FROM EventRelation 
                WHERE EventId=:eventId AND isParent=true AND isWhat=false AND Relation.Type=:CONTACT_API_NAME
            ]); 
            
            for (EventRelation eventRelation : eventRelationList) {
                LookupSearchResult searchResult = new LookupSearchResult(
                    eventRelation.RelationId
                    , CONTACT_API_NAME
                    , CONTACT_ICON
                    , eventRelation.Relation.Name
                    , eventRelation.Account.Name /* 'Contact • ' + eventRelation.Relation.Email */
                    , ICON
                );
                if (eventRelation.Event.WhoId.equals(eventRelation.RelationId) && !results.isEmpty()) {
                    results.add(0, searchResult);
                } else {
                    results.add(searchResult);
                }
            }
        } catch (Exception e) {
            DebugLog.addException(e, 'getEventWhoids');
            throw new AuraHandledException(e.getMessage());
        }
        return results;
    }

    @AuraEnabled
    public static List<EventRelation> setEventWhoIds(Id eventId, List<Id> whoIdList) {
        List<Event> eventList = new List<Event>([SELECT Id, WhoId FROM Event WHERE Id=:eventId]);
        List<EventRelation> existingEventRelationList = new List<EventRelation>([
            SELECT Id, EventId, RelationId, IsParent, IsWhat
            FROM EventRelation
            WHERE EventId=:eventId AND isParent=true AND isWhat=false
        ]);
        Map<String, EventRelation> contactEvRelationMap = new Map<String, EventRelation>();
        for (EventRelation evRelationRecord : existingEventRelationList) {
            contactEvRelationMap.put(evRelationRecord.RelationId, evRelationRecord);
        }
        List<EventRelation> deleteEventRelationList = new List<EventRelation>();
        List<EventRelation> newEventRelationList = new List<EventRelation>();
        for (Id whoId : whoIdList) {
            if (null != contactEvRelationMap.get(whoId)) {
                newEventRelationList.add(contactEvRelationMap.get(whoId));
            } else {
                newEventRelationList.add(new EventRelation(
                    EventId = eventId
                    , RelationId = whoId
                    , IsParent = true
                    , isWhat = false
                ));
            }
        }
        for (EventRelation existingEvRelation : existingEventRelationList) {
            if (!newEventRelationList.contains(existingEvRelation)) {
                deleteEventRelationList.add(existingEvRelation);
            }
        }
        try {
            upsert newEventRelationList;
            delete deleteEventRelationList;
            eventList[0].WhoId = newEventRelationList[0].RelationId;
            update eventList;
        } catch (Exception e) {
            DebugLog.addException(e, 'EventMultiWhoController');
            throw new AuraHandledException(e.getMessage());
        }
        return newEventRelationList;
    }
}