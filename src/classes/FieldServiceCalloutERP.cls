/*-------------------------------------------------------------------------------------------------------
Author:             Roberto Narbona 20220824
Description:    This is a controller for Biztalk integration.
History         Tobas Nygren 20220905: Added LocationId, WorkOrderNumber and Discount (Products Consumed) to query for additional info sent to AX.
                Tobias Nygren 20220920: Added Service_Type__c on Work Order Header, and removed Service_Type__c on WorkOrderLineItem level.
                Tobias Nygren 20221014: Replaced Duration for Quantity on Work Order Line Item.
                Roberto Narbona 29221028: Added product name, Asset Serial number and order description in workOrdersToSend query.
--------------------------------------------------------------------------------------------------------*/

public with sharing class FieldServiceCalloutERP {

    @AuraEnabled
    public static String doFieldServiceCalloutERP( List<Id> recordIds ) {
        //This method is actually doing the callout. 
        String objectType = String.valueOf(recordIds[0].getSObjectType());
        String query = '';
        List< WorkOrder > workOrdersToSend = new List<WorkOrder>();
        List< ProductRequest > productRequestsToSend = new List<ProductRequest>();
        if(objectType == 'WorkOrder'){
            workOrdersToSend = [SELECT Id, ERPJSONVersion__c, WorkOrderNumber, ServiceType__c, SourceRecord__r.Company_Code__c , SourceRecord__r.Customer_Id__c, SourceRecord__r.Location_Id__c, CurrencyIsoCode, EndDate, Status, Describewhathasbeendone__c, WorkType.Name, Asset.Name, Asset.Product2.Article__c, Asset.Product2.Name, Asset.SerialNumber, Description, (SELECT Id, CurrencyIsoCode, Discount, Quantity,  WorkOrderId, Product2.Article__c, Product2.Company_Code__c FROM WorkOrderLineItems ), (SELECT Id, CurrencyIsoCode, QuantityConsumed, Discount, WorkOrderId, Product2.Article__c, Product2.Company_Code__c, ProductItem.SerialNumber__c, ProductItem.BatchNumber__c, ProductItem.Location.ERPWarehouseId__c, ProductItem.ERPWarehouse__c FROM ProductsConsumed) FROM WorkOrder WHERE id IN: recordIds];
        }
        if(objectType == 'ProductRequest'){
            productRequestsToSend = [ SELECT Id, ERPJSONVersion__c, ProductRequestNumber, TF_CustomerRequestNumber__c, DestinationLocation.ERPWarehouseId__c, SourceLocation.ERPWarehouseId__c, DestinationLocation.ParentLocation.ERPWarehouseId__c, (SELECT Id, ProductRequestLineItemNumber, ParentId, Product2.Article__c, Product2.Company_Code__c, QuantityRequested, Status FROM ProductRequestLineItems) FROM ProductRequest WHERE id IN: recordIds ];
        }

        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        if(objectType == 'WorkOrder'){
            request.setEndpoint('callout:FSBiztalkIntegrationWorkOrder');
        }
        if(objectType == 'ProductRequest'){
            request.setEndpoint('callout:FSBiztalkIntegrationProductRequest');
        }
        
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json;charset=UTF-8');
        // Set the body as a JSON object
        if(objectType == 'WorkOrder'){
            Map<String, List<WorkOrder>> mapforERP = new Map<String, List<WorkOrder>> ();
            mapforERP.put('records', workOrdersToSend);
            request.setBody(JSON.serialize(mapforERP, false));
        }
        if(objectType == 'ProductRequest'){
            Map<String, List<ProductRequest>> mapforERP = new Map<String, List<ProductRequest>> ();
            mapforERP.put('records', productRequestsToSend);
            request.setBody(JSON.serializePretty(mapforERP, false));
        }

        if(!Test.isRunningTest()){
            HttpResponse response = http.send(request);
            return response.getBody();
        } else {
            String fakeResponse = 'FaekeResponse';
            return fakeResponse;
        }
        
    }

    @AuraEnabled
    public static Boolean updateRecord( List<Id> recordIds, string message) {
        //This method is actually updating a field in the object after callout happened.
        List< WorkOrder > workOrdersToSend = new List<WorkOrder>();
        List< ProductRequest > productRequestsToSend = new List<ProductRequest>();
        try {
            String objectType = String.valueOf(recordIds[0].getSObjectType());
            for(String recId : recordIds) {
                if(objectType == 'WorkOrder'){
                    WorkOrder workOrderToUpdate = new WorkOrder(ID = recId , ERPReturnMessage__c = message , SendToERPDate__C = Datetime.Parse(Datetime.now().format()));
                    workOrdersToSend.add(workOrderToUpdate);
                }
                if(objectType == 'ProductRequest'){
                    ProductRequest productRequestToUpdate = new ProductRequest(ID = recId , ERPReturnMessage__c = message , SendToERPDate__C = Datetime.Parse(Datetime.now().format()));
                    productRequestsToSend.add(productRequestToUpdate);
                }
            }
            if (workOrdersToSend.isempty() == false){
                update workOrdersToSend;
            }
            if (productRequestsToSend.isempty() == false){
                update productRequestsToSend;
            }            
            return(true);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'FieldServiceCalloutERP.updateRecord');
            throw new AuraHandledException(e.getMessage());    
        }
    }


    @AuraEnabled
    public static Boolean updateJSONVersion( List<Id> recordIds) {
        List< WorkOrder > workOrdersToUpdate = new List<WorkOrder>();
        List< WorkOrder > updatedWorkOrders = new List<WorkOrder>();

        List< ProductRequest > productRequestsToUpdate = new List<ProductRequest>();
        List< ProductRequest > updatedProductRequests = new List<ProductRequest>();

        try {
            String objectType = String.valueOf(recordIds[0].getSObjectType());
            if(objectType == 'WorkOrder'){
                workOrdersToUpdate = [ SELECT Id, ERPJSONVersion__c FROM WorkOrder WHERE id IN: recordIds];
                for( WorkOrder wO : workOrdersToUpdate){
                    WorkOrder orderToAdd = new WorkOrder( Id = wO.Id, ERPJSONVersion__c = wO.ERPJSONVersion__c == null ? 1 : wO.ERPJSONVersion__c + 1, ERPReturnMessage__c = '' , ERPOrderStatus__c = '', ERPOrderNumber__c = '');
                    updatedWorkOrders.add(orderToAdd);
                }
                update updatedWorkOrders;

            }
            if(objectType == 'ProductRequest'){
                productRequestsToUpdate = [ SELECT Id, ERPJSONVersion__c FROM ProductRequest WHERE id IN: recordIds];
                for( ProductRequest pR : productRequestsToUpdate){
                    ProductRequest prodRequestToAdd = new ProductRequest( Id = pR.Id, ERPJSONVersion__c = pR.ERPJSONVersion__c == null ? 1 : pR.ERPJSONVersion__c + 1, ERPReturnMessage__c = '', ERPOrderStatus__c = '', ERPOrderNumber__c = '');
                    updatedProductRequests.add(prodRequestToAdd);
                }
                update updatedProductRequests;
            }

            return(true);
        }
        catch (Exception e) {
            DebugLog.addException(e, 'FieldServiceCalloutERP.updateRecord');
            throw new AuraHandledException(e.getMessage());    
        }
    }
}