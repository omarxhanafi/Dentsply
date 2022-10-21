public with sharing class GetOrderStatusCallOut {
    @AuraEnabled
    public static Map<String, Object> getOrderStatusCallOut(string country,string orderNumber) {
        HttpRequest req = new HttpRequest();


        PricingMicroServiceCallOut__mdt calloutDetail = [SELECT Client_ID__c, GetOrderDetailsLogicAppsURL__c, Scope__c, Secret_Id__c, TokenURL__c FROM PricingMicroServiceCallOut__mdt Limit 1];
        string token = getTokenId(calloutDetail);
        string orderDetailsEndpoint = calloutDetail.GetOrderDetailsLogicAppsURL__c;
        orderDetailsEndpoint = orderDetailsEndpoint.replace('#param1#', orderNumber);
        orderDetailsEndpoint = orderDetailsEndpoint.replace('#param2#', country);
        req.setEndpoint(orderDetailsEndpoint);
        req.setHeader('Content-Type', 'application/json;charset=UTF-8');
        req.setHeader( 'Authorization', 'Bearer ' +token );
        req.setMethod('GET');
        req.setTimeout(30000);

        // Create a new http object to send the request object
        // A response object is generated as a result of the request  
        Http http = new Http();
        if(!Test.isRunningTest()){
            HTTPResponse res = http.send(req);
            Integer calloutStatus = res.getStatusCode();
                Map<String, Object> results = (Map<String, Object>) 
                JSON.deserializeUntyped(res.getBody());
            return results;
        } else {
            Map<String, Object> fakeResponse = new Map<String, Object>();
            fakeResponse.put('hello','goodbye');
            return fakeResponse;
        }
    }
    public static string getTokenId( PricingMicroServiceCallOut__mdt calloutDetail){
        Http h = new Http();
        HttpRequest req1 = new HttpRequest();
        req1.setEndpoint(calloutDetail.TokenURL__c);
        req1.setMethod('POST');
        req1.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        req1.setHeader('Accept', 'application/json');
        req1.setBody('grant_type=client_credentials&response_type=token&scope=' + calloutDetail.Scope__c +'&client_id=' + calloutDetail.Client_ID__c +'&client_secret=' + calloutDetail.Secret_Id__c);
        
        if(!Test.isRunningTest()){
            HttpResponse res2 = h.send(req1);
            ProductPricingERPCallOutWrapper.DeserializeTokenResponse resp1 = (ProductPricingERPCallOutWrapper.DeserializeTokenResponse)JSON.deserialize(res2.getbody(),ProductPricingERPCallOutWrapper.DeserializeTokenResponse.class);
            return resp1.access_token;
        } else {
            String fakeResponse = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJhcGk6Ly81N2NjNTQwNS1lZTlmLTQyZGEtYmE4ZC0zZGMyOWRlOTIyZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iYzc0ZTU5Yy01ZmEzLTQxNTctOWMzNy02ZTUwNjNkMTFhNjIvIiwiaWF0IjoxNjM0ODU1OTYxLCJuYmYiOjE2MzQ4NTU5NjEsImV4cCI6MTYzNDg1OTg2MSwiYWlvIjoiRTJaZ1lHaHVDWGwydHVIRWdSL1BPamkzL1Rza0FRQT0iLCJhcHBpZCI6IjU3Y2M1NDA1LWVlOWYtNDJkYS1iYThkLTNkYzI5ZGU5MjJlNSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2JjNzRlNTljLTVmYTMtNDE1Ny05YzM3LTZlNTA2M2QxMWE2Mi8iLCJvaWQiOiI1ZjNiNmE3My1lM2FhLTRjNmUtYTMxYS1mNGE2ZGU0OTQwMTAiLCJyaCI6IjAuQVE0QW5PVjB2S05mVjBHY04yNVFZOUVhWWdWVXpGZWY3dHBDdW8wOXdwM3BJdVVPQUFBLiIsInN1YiI6IjVmM2I2YTczLWUzYWEtNGM2ZS1hMzFhLWY0YTZkZTQ5NDAxMCIsInRpZCI6ImJjNzRlNTljLTVmYTMtNDE1Ny05YzM3LTZlNTA2M2QxMWE2MiIsInV0aSI6ImpxZUlrNXU1dDBhRjE0SDF6Q0ZaQUEiLCJ2ZXIiOiIxLjAifQ.YvG6eanyC09s3ysVo7Gn41S1HbrBKQQoFwnudM2zDA-ROqmK5W-UmAtb90Y9mkmREGb9b6lo5zNVtwtOqxf72pTrNwEU7MmNNdtGgC42MX22CDDPN26y7UIysB0zZS7RlJmmaq0rVIhmxBmdC5HnylpUrYv02KgbIBaabcmkuLZmgCR7aF3zZL5McoaqtHKWXxZV_09u48yzx8uHYQsH5f8e0zxEyBA2DLqj62kOhFhl06R3k9xqonWWJFud1RuWtm1YspYBiY3ALqrCaUlxsZzT2vRCkLcZDbtg3R4EgRSjb1dnOnKpoBp2ZGplmBPdhuim9HqlRNWu6FhZlWU9fA';
            return fakeResponse;
        }
    }
    @AuraEnabled
    public static string getCountryCode() {
        Map<String, CountryCodeMap__mdt> userCountryAndCountryCodeMapping = new Map<String, CountryCodeMap__mdt>();
        //User country and Campaign Country mathc so we can use the same
        List<CountryCodeMap__mdt> countryMetadataList = [SELECT Campaign_Country__c, Country_Code_2_digit__c FROM CountryCodeMap__mdt];
        for (CountryCodeMap__mdt countryMetadata : countryMetadataList) {
            userCountryAndCountryCodeMapping.put(countryMetadata.Campaign_Country__c, countryMetadata);
        }
        user userDetails = new user();
        userDetails = [ SELECT Id, User_Country__c FROM user WHERE Id =: UserInfo.getUserId() LIMIT 1];
        string twoDigitsCountryCode = userCountryAndCountryCodeMapping.get(userDetails.User_Country__c).Country_Code_2_digit__c;
        return(twoDigitsCountryCode);
    }

    @AuraEnabled
    public static string getOrderNumber(String openOrderId , String objectType) {
        String idToReturn;
        if(objectType == 'OpenOrderLine__c'){
            OpenOrderLine__c openOrderLine = new OpenOrderLine__c();
            openOrderLine = [ SELECT CustomerOrderNo__c FROM OpenOrderLine__c WHERE Id =: openOrderId LIMIT 1];
            idToReturn = openOrderLine.CustomerOrderNo__c;
        }
        if(objectType == 'Order'){
            Order order = new Order();
            order = [ SELECT AX_Order_Number__c FROM order WHERE Id =: openOrderId LIMIT 1];
            idToReturn = order.AX_Order_Number__c;
        }

        return(idToReturn);
    }
}