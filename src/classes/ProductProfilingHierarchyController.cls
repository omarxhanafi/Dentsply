/*------------------------------------------------------------  
Author:         Richard Trum (Glimt) 2019-11-27     
Description:    Controller handling custom lightning components related to Product Profiling
------------------------------------------------------------*/

public with sharing class ProductProfilingHierarchyController {
        
    /*------------------------------------------------------------  
    Description:    AuraEnabled method to collect all categories 
                    that are related to the user's assigned market
    Inputs:         
    ------------------------------------------------------------*/ 

    @AuraEnabled
    public static List<String> getAllCategories(String recordId, String SBU) {
    System.debug(SBU);
    String country = '';    
        if(recordId.left(3) == '003'){
            Contact con = [SELECT Id, Account.Country__c FROM Contact WHERE Id =: recordId];
        	country = con.Account.Country__c;
        } else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: accId];
            country = acc.Country__c;
        }else{
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            country = acc.Country__c;
        }
    	        
	//Collect all top nodes in the hierarchy    
    List<AggregateResult> results = new List<AggregateResult>();
        
        if(SBU != '' && SBU != null){
    		results = [SELECT count(Id), Product_Category__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND Countries__c INCLUDES (:country) AND ProductGroupText__c =: SBU GROUP BY Product_Category__c];   //OR (Valid_in_my_Market__c =: true AND Market__c != '')                         
        }   
        else{
    		results = [SELECT count(Id), Product_Category__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND Countries__c INCLUDES (:country) GROUP BY Product_Category__c];                
        }
        
        
    List<String> uniqueNames = new List<String>();
        
    for (AggregateResult result : results) {
        if((String)result.get('Product_Category__c')!= null){
        	uniqueNames.add((String)result.get('Product_Category__c'));
        }    
    }
        
    return uniqueNames;
        
    }
    
    
    /*------------------------------------------------------------  
    Description:    AuraEnabled method to collect all Product Profiling records 
                    related to either an account or a contact
    Inputs:         @param recordId - The account's or contact's recordId
    ------------------------------------------------------------*/ 
    
    @AuraEnabled
    public static List<Product_Profiling__c> getProductProfiling(String recordId){
    List<Product_Profiling__c> profilings = new List<Product_Profiling__c>();
        
        if(recordId.startsWith('003')){
            profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Contact__c =: recordId AND Product_Name__c!= null];    
        }
        else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
            profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Account__c =: accId  AND Product_Name__c!= null ORDER BY Contact__c ASC NULLS FIRST]; // AND Contact__c =:''    
        }else {
          	profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Account__c =: recordId  AND Product_Name__c!= null ORDER BY Contact__c ASC NULLS FIRST]; // AND Contact__c =:''    
        }
     
    return profilings;
        
    }
    
    /*------------------------------------------------------------  
    Description:    AuraEnabled method to collect all Product Profiling records 
                    related to either an account or a contact
    Inputs:         @param recordId - The account's or contact's recordId
    ------------------------------------------------------------*/ 
    
    @AuraEnabled
    public static Map<Id, Product_Profiling__c> getProductProfilingMap(String recordId) {
    List<Product_Profiling__c> profilings = new List<Product_Profiling__c>();
        
        if(recordId.startsWith('003')){
            profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Contact__c =: recordId AND Product_Name__c != null];    
        }else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
   			profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Account__c =: accId AND Product_Name__c != null];    
        }else{
            profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Account__c =: recordId AND Product_Name__c != null];    
        }
    
    Map<Id, Product_Profiling__c> profilingMap = new Map<Id, Product_Profiling__c>();
           
    For(Product_Profiling__c p : profilings)
        {
            profilingMap.put(p.Product_Name__c, p);
        }
     
    return profilingMap;
        
    }    
    
    @AuraEnabled
    public static String[] getDistinctValues(String field_name, String recordId) {
        Set<String> valList = new Set<String>();
        
            String country = '';    
        if(recordId.left(3) == '003'){
            Contact con = [SELECT Id, Account.Country__c FROM Contact WHERE Id =: recordId];
        	country = con.Account.Country__c;
        }else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
   			Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: accId];
            country = acc.Country__c;
        }else{
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            country = acc.Country__c;
        }
                
    	List<Non_ERP_Products__c> records = [SELECT Id, Name, Countries__c, SBU__c, Manufacturer__c, Competitor_Product__c, KeyProduct__c, Product_Category__c, ProductGroupText__c 
                                             FROM Non_ERP_Products__c WHERE Inactive__c = false AND Countries__c INCLUDES (:country) ]; //OR Valid_in_my_Market__c =: true
		
        for(Non_ERP_Products__c so : records){
            String fieldValue = (String) so.get(field_name);
            valList.add(fieldValue);
            System.debug(fieldValue);
        }
        
        List<String> results = new List<String>();
        
        for(String s : valList){
          results.add(s);  
        }
        
        return results;
        
    }
    
    @AuraEnabled
    public static Boolean deleteProductProfilingRecord(String recordId) {
			
        Product_Profiling__c ppRecord = [SELECT Id, Name FROM Product_Profiling__c WHERE Id =: recordId];
        Boolean success = true;
        try{
            delete ppRecord;
        }catch(Exception e){
            System.debug('An error occured when trying to delete a Product Profiling record: ' + e);
            success = false;    
        }
		
        return success;
        
    }
    
    /*------------------------------------------------------------  
    Description:    AuraEnabled method to collect all Non-ERP products 
                    that are related to a specific category/manufacturer/searchstring
    Inputs:         @recordId - Id of current account
					@node - current local category selected
					@manufacturer - current manufacturer selected
					@searchString - current search string applied
					@category - current global category selected
					@competitor - 
					@focus - 
    ------------------------------------------------------------*/ 

    @AuraEnabled
    public static List<HierarchyNode> getChildProducts(String recordId, String node, String manufacturer, String searchString, String category, Boolean competitor, Boolean focus, String localcat) {
    
    System.debug('Record Id: ' + recordId);
    System.debug('Manufacturer: ' + manufacturer);
    System.debug('Search string: ' + searchString);
    System.debug('Category: ' + category);
    System.debug('Node name: ' + node);
    System.debug('Local categ: ' + localcat);
    System.debug('Competitor: ' + competitor);
        
    String country = '';    
        if(recordId.left(3) == '003'){
            Contact con = [SELECT Id, Account.Country__c FROM Contact WHERE Id =: recordId];
        	country = con.Account.Country__c;
        }else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
   			Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: accId];
            country = acc.Country__c;
        
        }else{
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            country = acc.Country__c;
        }
    	        
    List<Non_ERP_Products__c> allProducts = new List<Non_ERP_Products__c>();    
    
    Boolean validInMyMarket = true;
    Boolean inactiveProduct = false;    
    
    String query = 'SELECT Id, Name, Countries__c, SBU__c, Competitor_Product__c, KeyProduct__c, Product_Category__c, Manufacturer__c, ProductGroupText__c, QuantityUnitOfMeasure__c FROM Non_ERP_Products__c';
    query = query + ' WHERE Inactive__c =: inactiveProduct AND Countries__c INCLUDES (:country)'; //OR Valid_in_my_Market__c =: validInMyMarket)
     
        
    Boolean filterIsApplied = false;    
        if(node != '' && node != null){
            node = String.EscapeSingleQuotes(node);
            query = query + ' AND Product_Category__c =: node';
            filterIsApplied = true;
        }    
        
        if(searchString != ''){
            searchString = '%' + searchString + '%';
            searchString = String.EscapeSingleQuotes(searchString);
            query = query + ' AND Name LIKE: searchString';
            filterIsApplied = true;
        }
        
        if(category != ''){
            category = String.EscapeSingleQuotes(category);
            query = query + ' AND ProductGroupText__c =: category';
            filterIsApplied = true;
        }
        
        if(manufacturer != ''){
            manufacturer = String.EscapeSingleQuotes(manufacturer);
            query = query + ' AND Manufacturer__c =: manufacturer';
            filterIsApplied = true;
        }
        
        if(localcat != '' && localcat != null){
            localcat = String.EscapeSingleQuotes(localcat);
            query = query + ' AND Product_Category__c =: localcat';
            filterIsApplied = true;
        }
        
        if(competitor == true){
            competitor = false;
            query = query + ' AND Competitor_Product__c =: competitor';
            filterIsApplied = true;
        }
        
        if(focus == true){
            query = query + ' AND KeyProduct__c =: focus';
            filterIsApplied = true;
        }
        
        if(filterIsApplied == true){    
            allProducts = Database.query(query);
        }
    /*if(searchString != ''){
    
      	Map<String, Non_ERP_Products__c> recordMap = new Map<String, Non_ERP_Products__c>();
        
        for(Non_ERP_Products__c so : allProducts){
            if(category != '' && category != null){
                if(so.ProductGroupText__c == category){
                    recordMap.put(so.Id, so);
                }
            }
            if(manufacturer != '' && manufacturer != null){
                if(so.Manufacturer__c == manufacturer){
                    recordMap.put(so.Id, so);
                }
            }
            
        }
        if(recordMap.values().size()>0){
        	allProducts = recordMap.values();
        }    
        
        System.debug(allProducts);
    }*/
        
        
    List<HierarchyNode> nodes = new List<HierarchyNode>();
 
    for (Non_ERP_Products__c a : allProducts) { 
        nodes.add(new HierarchyNode(a, false));        
    }
        
    return nodes;
    }
        
    @AuraEnabled
    public static String[] getSBUs(String recordId) {
        Set<String> valList = new Set<String>();
        
            String country = '';    
        if(recordId.left(3) == '003'){
            Contact con = [SELECT Id, Account.Country__c FROM Contact WHERE Id =: recordId];
        	country = con.Account.Country__c;
        }else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
   			Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: accId];
            country = acc.Country__c;
        
        }else{
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            country = acc.Country__c;
        }
                
        AggregateResult[] results = [SELECT count(Id), ProductGroupText__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND Countries__c INCLUDES (:country) GROUP BY ProductGroupText__c]; //OR Valid_in_my_Market__c =: true)
        List<String> uniqueNames = new List<String>();
        for (AggregateResult result : results) {
            uniqueNames.add((String)result.get('ProductGroupText__c'));
        }
        system.debug(uniqueNames);           
        
        return uniqueNames;
        
    }
    
    @AuraEnabled
    public static String[] getManufacturers(String recordId, String SBU) {
        Set<String> valList = new Set<String>();
        
        String country = '';    
        if(recordId.left(3) == '003'){
            Contact con = [SELECT Id, Account.Country__c FROM Contact WHERE Id =: recordId];
        	country = con.Account.Country__c;
        }else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
   			Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: accId];
            country = acc.Country__c;
        }else{
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            country = acc.Country__c;
        }
                
        AggregateResult[] results = [SELECT count(Id), Manufacturer__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND Countries__c INCLUDES (:country) GROUP BY Manufacturer__c]; //OR Valid_in_my_Market__c =: true)
        
        if(SBU != ''){
        	    results = [SELECT count(Id), Manufacturer__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND ProductGroupText__c =: SBU AND Countries__c INCLUDES (:country) GROUP BY Manufacturer__c]; //OR Valid_in_my_Market__c =: true)
        }
        
        List<String> uniqueNames = new List<String>();
        for (AggregateResult result : results) {
            uniqueNames.add((String)result.get('Manufacturer__c'));
        }
        system.debug(uniqueNames);           
        
        return uniqueNames;
        
    }
    
    @AuraEnabled
    public static String[] getLocalCategories(String recordId, String SBU, String manufacturer) {
        Set<String> valList = new Set<String>();
        
        String country = '';    
        if(recordId.left(3) == '003'){
            Contact con = [SELECT Id, Account.Country__c FROM Contact WHERE Id =: recordId];
        	country = con.Account.Country__c;
        }else if(recordId.left(3) =='a5q'){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
   			Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: accId];
            country = acc.Country__c;
        }else{
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            country = acc.Country__c;
        }
                
        AggregateResult[] results = [SELECT count(Id), Product_Category__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND Countries__c INCLUDES (:country) GROUP BY Product_Category__c]; //OR Valid_in_my_Market__c =: true)
        
        if(SBU != '' && (manufacturer == '' || manufacturer == null)){
        	  results = [SELECT count(Id), Product_Category__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND ProductGroupText__c =: SBU AND Countries__c INCLUDES (:country) GROUP BY Product_Category__c]; //OR Valid_in_my_Market__c =: true)
        }
        
        if(manufacturer != '' && (SBU == '' || SBU == null)){
             results = [SELECT count(Id), Product_Category__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND Manufacturer__c =: manufacturer AND Countries__c INCLUDES (:country) GROUP BY Product_Category__c]; //OR Valid_in_my_Market__c =: true)
        }
        
        if(SBU != '' && SBU != null && manufacturer != '' && manufacturer != null){
             results = [SELECT count(Id), Product_Category__c FROM Non_ERP_Products__c WHERE Inactive__c = false AND Manufacturer__c =: manufacturer AND ProductGroupText__c =: SBU AND Countries__c INCLUDES (:country) GROUP BY Product_Category__c]; //OR Valid_in_my_Market__c =: true)           
        }
        
        List<String> uniqueNames = new List<String>();
        for (AggregateResult result : results) {
            uniqueNames.add((String)result.get('Product_Category__c'));
        }
        system.debug(uniqueNames);           
        
        return uniqueNames;
        
    }


    public class HierarchyNode {
    @AuraEnabled public Non_ERP_Products__c node;
    @AuraEnabled public String nodeName;    
    @AuraEnabled public List<HierarchyNode> children;
    @AuraEnabled public Boolean isProfiled;
    HierarchyNode(Non_ERP_Products__c acc, Boolean isProfiling) {
        node = acc;
        nodeName = acc.Name;
        children = new List<HierarchyNode>();
        isProfiled = isProfiling;
    }        
	}
}