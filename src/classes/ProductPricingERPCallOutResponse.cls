/*-------------------------------------------------------------------------------------------------------
Author:         Roberto Narbona 20210716
Description:    This is a class created to be used for ERP call out

History:	Updated By:	Update Description:
TFUS-000006850            S4Hana callout introduced
----------------------------------------------------------------------------------------*/

public with sharing class ProductPricingERPCallOutResponse {
    /* this method does a callout against the ERP to get prices */
    public static ProductPricingERPCallOutWrapper.productPricingResponse  prodsToPriceERPCallOut(string accERPId, List<ProductPricingERPCallOutWrapper.ProductEntry> prodsToPrice, order orderDetails) {
        final String S4_COMPANY_CODE = '92';
        final Integer DEF_QUANTITY = 1;
        String strJson = '';
        final JSONGenerator jsGen = JSON.createGenerator(true);
        jsGen.writeStartObject();
        jsGen.writeStringField('accountId', accERPId); //query in source records to get AX ID
        jsGen.writeStringField('currency', orderDetails.CurrencyIsoCode);
        jsGen.writeStringField('dataAreaId', orderDetails.Pricebook2.CompanyCode__c); //AX company that only is expose so it could be hard coded but also we should be able to get it from products company code field
        
        if(orderDetails.Pricebook2.SourceId__c == S4_COMPANY_CODE){
            jsGen.writeStringField('salesChannel', orderDetails.Pricebook2.SalesChannel__c);
        }
        jsGen.writeFieldName('entries');
        jsGen.writeStartArray();

        for(ProductPricingERPCallOutWrapper.ProductEntry prod :prodsToPrice){ //loop of products that we need to get
            jsGen.writeStartObject();
            jsGen.writeStringField('productId', prod.productId); //Article__c in products
            if(prod.quantity > DEF_QUANTITY){
                jsGen.writeNumberField('quantity', prod.quantity ); //Quanty of produts to get price
            } else{
                jsGen.writeNumberField('quantity', 1); //Quanty of produts to get price
            }            
            jsGen.writeEndObject();
        }
        jsGen.writeEndArray();
        jsGen.writeEndObject();
        strJson = jsGen.getAsString();
        
        final PricingMicroServiceCallOut__mdt calloutDetail = [SELECT Client_ID__c, S4HanaPricingLogicAppsURL__c, Logic_Apps_URL__c, Scope__c, 
                                                              Secret_Id__c, TokenURL__c FROM PricingMicroServiceCallOut__mdt Limit 1];
        //Callout to get token ID   
        final Http getToken = new Http();
        final HttpRequest req = new HttpRequest();
        req.setEndpoint(calloutDetail.TokenURL__c);
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.setHeader('Accept', 'application/json');
        req.setBody('grant_type=client_credentials&response_type=token&scope=' + calloutDetail.Scope__c +'&client_id=' + 
                    calloutDetail.Client_ID__c +'&client_secret=' + calloutDetail.Secret_Id__c);
        final  HttpResponse res = getToken.send(req);

        
        final ProductPricingERPCallOutWrapper.DeserializeTokenResponse resp1 = (ProductPricingERPCallOutWrapper.DeserializeTokenResponse)JSON.deserialize
                                                                         (res.getbody(),ProductPricingERPCallOutWrapper.DeserializeTokenResponse.class);
        //Real callout to Logic Apps
        final Http http = new Http();
        final HttpRequest request = new HttpRequest();

        if(orderDetails.Pricebook2.SourceId__c == S4_COMPANY_CODE){
            request.setEndpoint(calloutDetail.S4HanaPricingLogicAppsURL__c);
        } else {
            request.setEndpoint(calloutDetail.Logic_Apps_URL__c);
        }
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json;charset=UTF-8');
        request.setHeader( 'Authorization', 'Bearer ' +resp1.access_token );
        request.setTimeout(24000);
            // Set the body as a JSON object
        request.setBody(strJson);
        final HttpResponse response = http.send(request);
        
        final ProductPricingERPCallOutWrapper.ProductPricingResponse prodResponse = (ProductPricingERPCallOutWrapper.ProductPricingResponse)JSON.deserialize
                                                                              (response.getBody(), ProductPricingERPCallOutWrapper.ProductPricingResponse.class);
        return prodResponse;
    }
}