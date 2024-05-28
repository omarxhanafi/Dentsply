/**
 * @Author          Richard Trum
 * @Description     Controller handling custom lightning components related to Product Profiling.
 * @Test-Class      Test_ProductProfilingHierarchyController
 *
 * @History
 * 2019-11-27   Richard  Created ProductProfilingHierarchyController class
 * 2023-03-27   Omar     TFUS-000005477 / TFUS-000005470 - Included Procedure Tracker in the Product Profiling component as well as being able to select all countries for a Non_ERP_Products__c record.
 * 2024-05-14   Omar     TFUS-000006676 - Being able to exclude countries from the global definition of the product profiling

 */

public with sharing class ProductProfilingHierarchyController {
        
    /*------------------------------------------------------------  
    Description:    AuraEnabled method to collect all categories 
                    that are related to the user's assigned market
    Inputs:         
    ------------------------------------------------------------*/ 

    @AuraEnabled
    public static List<String> getAllCategories(String recordId, String SBU) {
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

    // TFUS-000006676 Excluding Germany, Austria and Switzerland from the global definition
    if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
        results = [SELECT COUNT(Id), ProductFamily__r.ProductFamilyLabel__c family
        FROM Non_ERP_Products__c
        WHERE Inactive__c = false AND (Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = true)
        AND ProductFamily__c != null
        GROUP BY ProductFamily__r.ProductFamilyLabel__c];
    } else {
        results = [SELECT COUNT(Id), ProductFamily__r.ProductFamilyLabel__c family
        FROM Non_ERP_Products__c
        WHERE Inactive__c = false
        AND ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))
        AND ProductFamily__c != null
        GROUP BY ProductFamily__r.ProductFamilyLabel__c];
    }

    List<String> uniqueNames = new List<String>();
        
    for (AggregateResult result : results) {
        if((String)result.get('family')!= null){
        	uniqueNames.add((String)result.get('family'));
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
            profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, InUseSince__c, Inactive__c, Source__c, Product_Name__r.ProductFamily__r.ProductFamilyLabel__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Contact__c =: recordId AND Product_Name__c!= null AND Product_Name__r.ProductFamily__c != null];
        }
        else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
            profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, InUseSince__c, Inactive__c, Source__c, Product_Name__r.ProductFamily__r.ProductFamilyLabel__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Account__c =: accId  AND Product_Name__c!= null AND Product_Name__r.ProductFamily__c != null ORDER BY Contact__c ASC NULLS FIRST]; // AND Contact__c =:''
        }else {
          	profilings = [SELECT Id, Product_Name__c, Quantity__c, Product_Category__c, InUseSince__c, Inactive__c, Source__c, Product_Name__r.ProductFamily__r.ProductFamilyLabel__c, Product_Name__r.Id, Product_Name__r.Manufacturer__c, Product_Name__r.Product_Category__c, Product_Name__r.Name, Product_Name__r.SBU__c, Product_Name__r.Competitor_Product__c, Product_Name__r.KeyProduct__c, Product_Name__r.ProductGroupText__c, Product_Name__r.QuantityUnitOfMeasure__c, Status__c, Account__c, Contact__c, Contact__r.FirstName, Contact__r.LastName FROM Product_Profiling__c WHERE Account__c =: recordId  AND Product_Name__c!= null AND Product_Name__r.ProductFamily__c != null ORDER BY Contact__c ASC NULLS FIRST]; // AND Contact__c =:''
        }
     
    return profilings;
        
    }

    /**
     * updateProductProfilingRecords Updates the provided list of Product_Profiling__c records
     * @author ohanafi@salesforce.com | 16-11-2023
     *
     * @param productProfilingList   List of Product_Profiling__c records
     *
     */
    @AuraEnabled
    public static void updateProductProfilingRecords(List<Product_Profiling__c> productProfilingList) {
        try {
            update productProfilingList;
        } catch (Exception e) {
            System.debug('Error occurred while updating product profiling records: ' + e.getMessage());
            throw new AuraHandledException('Error occurred while updating product profiling records: ' + e.getMessage());
        }
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

    	List<Non_ERP_Products__c> records = new List<Non_ERP_Products__c>();

        if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
            records = [SELECT Id, Name, Countries__c, SBU__c, Manufacturer__c, Competitor_Product__c, KeyProduct__c, Product_Category__c, ProductGroupText__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = false AND (Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = true)];
        } else {
            records = [SELECT Id, Name, Countries__c, SBU__c, Manufacturer__c, Competitor_Product__c, KeyProduct__c, Product_Category__c, ProductGroupText__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = false
            AND ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))];
        }
		
        for(Non_ERP_Products__c so : records){
            String fieldValue = (String) so.get(field_name);
            valList.add(fieldValue);
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
    public static List<HierarchyNode> getChildProducts(String recordId, String node, String manufacturer, String searchString, String category, Boolean competitor, Boolean focus, String localcat, String workflow) {

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

    Set<Id> productFamiliesSet = new Set<Id>();
    	        
    List<Non_ERP_Products__c> allProducts = new List<Non_ERP_Products__c>();    

        String query = 'SELECT Id, Name, Countries__c, SBU__c, Competitor_Product__c, KeyProduct__c, Product_Category__c, ProductFamily__r.ProductFamilyLabel__c, ProductFamily__c, Manufacturer__c, ProductGroupText__c, QuantityUnitOfMeasure__c FROM Non_ERP_Products__c';

        if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
            query += ' WHERE Inactive__c = FALSE AND (Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE) AND ProductFamily__c != NULL';
        } else {
            query += ' WHERE Inactive__c = FALSE AND ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country)))))) AND ProductFamily__c != NULL';
        }

        Boolean filterIsApplied = false;
        if(node != '' && node != null){
            node = String.EscapeSingleQuotes(node);
            query += ' AND ProductFamily__r.ProductFamilyLabel__c =: node';
            filterIsApplied = true;
        }    
        
        if(searchString != ''){
            searchString = '%' + searchString + '%';
            searchString = String.EscapeSingleQuotes(searchString);
            query += ' AND (Name LIKE: searchString OR Manufacturer__c LIKE :searchString)';
            filterIsApplied = true;
        }
        
        if(category != ''){
            category = String.EscapeSingleQuotes(category);
            query += ' AND ProductGroupText__c =: category';
            filterIsApplied = true;
        }
        
        if(manufacturer != ''){
            manufacturer = String.EscapeSingleQuotes(manufacturer);
            query += ' AND Manufacturer__c =: manufacturer';
            filterIsApplied = true;
        }
        
        if(localcat != '' && localcat != null){
            localcat = String.EscapeSingleQuotes(localcat);
            query += ' AND Product_Category__c =: localcat';
            filterIsApplied = true;
        }

        List<WorkflowLine__c> workflowLines = new List<WorkflowLine__c>();

        // Map to store ProductFamily__c and Order__c from workflowLines
        Map<Id, Integer> productOrderMap = new Map<Id, Integer>();

        // If a workflow filter is applied, we look for the product families through the workflow lines
        if(workflow != ''){
            workflowLines = [SELECT Id, ProductFamily__c, ProductFamily__r.ProductFamilyLabel__c, Order__c FROM WorkflowLine__c where Workflow__c = :workflow AND ProductFamily__c != null order by Order__c];

            for(WorkflowLine__c eachWorkflowLine : workflowLines){
                productFamiliesSet.add(eachWorkflowLine.ProductFamily__c);
            }

            if(!productFamiliesSet.isEmpty()){
                query += ' AND ProductFamily__c IN :productFamiliesSet';
            }

            for (WorkflowLine__c eachWorkflowLine : workflowLines) {
                productOrderMap.put(eachWorkflowLine.ProductFamily__c, (Integer) eachWorkflowLine.Order__c);
            }

            filterIsApplied = true;
        }
        
        if(competitor == true){
            query += ' AND Competitor_Product__c = FALSE';
            filterIsApplied = true;
        }
        
        if(focus == true){
            query += ' AND Competitor_Product__c = TRUE';
            filterIsApplied = true;
        }

        if(filterIsApplied == true){    
            allProducts = Database.query(query);
        }


        List<HierarchyNode> nodes = new List<HierarchyNode>();

        for (Non_ERP_Products__c a : allProducts) {
            if(workflow != ''){
                nodes.add(new HierarchyNode(a, false, productOrderMap.get(a.ProductFamily__c)));
            } else {
                nodes.add(new HierarchyNode(a, false));
            }
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

        List<AggregateResult> results = new List<AggregateResult>();

        if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
            results = [SELECT COUNT(Id), ProductGroupText__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = FALSE AND (Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE)
            GROUP BY ProductGroupText__c];
        } else {
            results = [SELECT COUNT(Id), ProductGroupText__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = FALSE
            AND ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))
            GROUP BY ProductGroupText__c];
        }

        List<String> uniqueNames = new List<String>();
        for (AggregateResult result : results) {
            uniqueNames.add((String)result.get('ProductGroupText__c'));
        }

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
                
        List<AggregateResult> results = new List<AggregateResult>();

        if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
            results = [SELECT COUNT(Id), Manufacturer__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = false AND (Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE)
            GROUP BY Manufacturer__c];
        } else {
            results = [SELECT COUNT(Id), Manufacturer__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = false
            AND ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))
            GROUP BY Manufacturer__c];
        }

        List<String> uniqueNames = new List<String>();
        for (AggregateResult result : results) {
            uniqueNames.add((String)result.get('Manufacturer__c'));
        }

        return uniqueNames;
        
    }

    /**
     * getWorkflows Return a list of Workflow__c records related to the provided Account Id
     * @author ohanafi@salesforce.com | 16-10-2023
     *
     * @param recordId   Id of the account
     *
     * @return List<Workflow__c> - List of workflows
     */
    @AuraEnabled(cacheable=true)
    public static List<Workflow__c> getWorkflows(String recordId) {
        String country = '';

        if (recordId.left(3) == '003'){
            Contact con = [SELECT Id, Account.Country__c FROM Contact WHERE Id =: recordId];
            country = con.Account.Country__c;
        } else if(recordId.startsWith('a5q')){
            String accId = [SELECT Account__c FROM  Account_Plan__c WHERE id =: recordId LIMIT 1][0].Account__c;
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: accId];
            country = acc.Country__c;
        } else{
            Account acc = [SELECT Id, Country__c FROM Account WHERE Id =: recordId];
            country = acc.Country__c;
        }

        if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
            return [SELECT Id, WorkflowLabel__c
            FROM Workflow__c
            WHERE Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE];
        } else {
            return [SELECT Id, WorkflowLabel__c
            FROM Workflow__c
            WHERE ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))];
        }

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
                
        List<AggregateResult> results = new List<AggregateResult>();

        if (!new List<String>{'AT', 'DE', 'CH'}.contains(country)) {
            results = [SELECT COUNT(Id), Product_Category__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = false AND (Countries__c INCLUDES (:country) OR GlobalProductShowtoallcountries__c = TRUE)
            GROUP BY Product_Category__c];
        } else {
            results = [SELECT COUNT(Id), Product_Category__c
            FROM Non_ERP_Products__c
            WHERE Inactive__c = false
            AND ((GlobalProductShowtoallcountries__c = false AND Countries__c INCLUDES (:country)) OR (GlobalProductShowtoallcountries__c = true AND (Countries__c = null OR (NOT(Countries__c INCLUDES (:country))))))
            GROUP BY Product_Category__c];
        }
        
        List<String> uniqueNames = new List<String>();
        for (AggregateResult result : results) {
            uniqueNames.add((String)result.get('Product_Category__c'));
        }

        return uniqueNames;
        
    }

    /**
     * getAccountFromProcedureTracker Get the practice account related to the provided procedure tracker
     * @author ohanafi@salesforce.com | 27-03-2023
     *
     * @param procedureTrackerId   Procedure Tracker id
     *
     * @return Id - Account id related to the procedure tracker
     */
    @AuraEnabled
    public static Id getAccountFromProcedureTracker(Id procedureTrackerId) {
        ProcedureTracker__c procedureTracker = [SELECT PracticeAccount__c FROM ProcedureTracker__c WHERE Id = :procedureTrackerId];
        return procedureTracker.PracticeAccount__c;
    }

    /**
     * publishPPCreationEvent Send a platform event to refresh the PP component upon the creation of PP records from the WP component
     * @author ohanafi@salesforce.com | 08-04-2024
     */
    @AuraEnabled
    public static void publishPPCreationEventWP() {
        PPCreationWP__e event = new PPCreationWP__e();
        // Publishing the event
        EventBus.publish(event);
    }


    public class HierarchyNode {
    @AuraEnabled public Non_ERP_Products__c node;
    @AuraEnabled public String nodeName;    
    @AuraEnabled public List<HierarchyNode> children;
    @AuraEnabled public Boolean isProfiled;
    @AuraEnabled public Integer familyOrder;
        HierarchyNode(Non_ERP_Products__c acc, Boolean isProfiling) {
            node = acc;
            nodeName = acc.Name;
            children = new List<HierarchyNode>();
            isProfiled = isProfiling;
        }
        HierarchyNode(Non_ERP_Products__c acc, Boolean isProfiling, Integer familyOrder) {
            node = acc;
            nodeName = acc.Name;
            children = new List<HierarchyNode>();
            isProfiled = isProfiling;
            this.familyOrder = familyOrder;
        }
    }
}