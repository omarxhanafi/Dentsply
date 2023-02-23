/*----------------------------------------------------------------------------------------
Author:         Roberto Narbona  20230209
Description:    test class for the SimulateContractLineController class
History:        


----------------------------------------------------------------------------------------*/
@isTest
public with sharing class SimulateContractLineControllerTest {
    @testSetup
    private static void setup() {
        TestDataFactory.createBypassCustomSetting();
        List<User> userList = TestDataFactory.returnUsers(1, '#System: System Administrator');
        insert userList;
        TestDataFactory.createGlobalIntegrationSettings(userList);
        TestDataFactory.createDefaultOrgLevelBypassPB();
    } 
    
    
    @isTest
    public static void insertOrUpdateContractItem(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
            List<Discount_Model__c> discountModels = TestDataFactory.returnDiscountModels(1, testUser.Id);
            discountModels[0].Name = 'Implants';
            insert discountModels;
            List<Account> accountList = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            accountList.get(0).Country__c = 'DE';
            insert accountList;
            List<Contract> contracts = TestDataFactory.createContracts( 1, 'DiscountContract', testUser.Id, accountList);
            List<ContractItem__c> contractItem= TestDataFactory.returnContractItems(discountModels, 'Standard', contracts[0]);
            Test.startTest();
                ContractItem__c insertedContractItem = SimulateContractLineController.insertOrUpdateContractItem(contractItem[0], true);
                ContractItem__c insertedContractItem2 = SimulateContractLineController.insertOrUpdateContractItem(contractItem[0], false);
            Test.stopTest();
            List<ContractItem__c> allContractItems = [SELECT Id FROM ContractItem__c ];
            
            System.assertEquals(1, allContractItems.size(), '1 Contract Item has been inserted and updated');
        }
    }

    @isTest
    public static void getContractItem(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
            List<Discount_Model__c> discountModels = TestDataFactory.returnDiscountModels(1, testUser.Id);
            discountModels[0].Name = 'Implants';
            insert discountModels;
            List<Account> accountList = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            accountList.get(0).Country__c = 'DE';
            insert accountList;
            List<Contract> contracts = TestDataFactory.createContracts( 1, 'DiscountContract', testUser.Id, accountList);
            List<ContractItem__c> contractItem= TestDataFactory.createContractItems(discountModels, 'Standard', contracts[0]);
            Test.startTest();
                ContractItem__c insertedContractItem = SimulateContractLineController.getContractItem(contractItem[0].Id);
            Test.stopTest();
            List<ContractItem__c> allContractItems = [SELECT Id FROM ContractItem__c ];
            
            System.assertEquals(1, allContractItems.size(), '1 Contract Item has been found');
        }
    }

    @isTest
    public static void getAlreadyAddedContractItems(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
            List<Discount_Model__c> discountModels = TestDataFactory.returnDiscountModels(1, testUser.Id);
            discountModels[0].Name = 'Implants';
            insert discountModels;
            List<Account> accountList = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            accountList.get(0).Country__c = 'DE';
            insert accountList;
            List<Contract> contracts = TestDataFactory.createContracts( 1, 'DiscountContract', testUser.Id, accountList);
            List<ContractItem__c> contractItem= TestDataFactory.createContractItems(discountModels, 'Standard', contracts[0]);
            Test.startTest();
                List<ContractItem__c> insertedContractItem = SimulateContractLineController.getAlreadyAddedContractItems(contracts[0].Id);
            Test.stopTest();
            List<ContractItem__c> allContractItems = [SELECT Id FROM ContractItem__c ];
            
            System.assertEquals(1, allContractItems.size(), '1 Contract Item has been found in the contract');
        }
    }

    @isTest
    public static void getRelatedDiscount(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
            List<Discount_Model__c> discountModels = TestDataFactory.returnDiscountModels(1, testUser.Id);
            discountModels[0].Name = 'Implants';
            insert discountModels;
            List<Account> accountList = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            accountList.get(0).Country__c = 'DE';
            insert accountList;
            List<Contract> contracts = TestDataFactory.createContracts( 1, 'DiscountContract', testUser.Id, accountList);
            List<ContractItem__c> contractItem= TestDataFactory.createContractItems(discountModels, 'Standard', contracts[0]);
            Test.startTest();
                Discount_model__c foundDiscount = SimulateContractLineController.getRelatedDiscount(contractItem[0].DiscountModel__c);
            Test.stopTest();
            List<Discount_model__c> allDiscountModelItems = [SELECT Id FROM Discount_model__c ];
            
            System.assertEquals(1, allDiscountModelItems.size(), '1 Discount Model Has been found');
        }
    }

    @isTest
    public static void getDiscountModels(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
            List<Discount_Model__c> discountModels = TestDataFactory.returnDiscountModels(1, testUser.Id);
            discountModels[0].Name = 'Implants';
            discountModels[0].Country__c = 'DE';
            discountModels[0].ActivationDate__c = Date.today().addDays(-1);
            insert discountModels;
            List<Account> accountList = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            accountList.get(0).Country__c = 'DE';
            insert accountList;
            
            Test.startTest();
                List<Discount_model__c> foundDiscounts = SimulateContractLineController.getDiscountModels(accountList[0].Id);
            Test.stopTest();
            
            System.assertEquals(foundDiscounts.size(), 1, '1 German Discounts Found');
        }
    }

    
    @isTest
    public static void getSorceRecords(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
            List<Account> accountList = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            accountList.get(0).Country__c = 'DE';
            insert accountList;
            List<Source_Record__c> sourceRec = TestDataFactory.returnSourceRecords(1);
            sourceRec[0].CIM_Account__c = accountList[0].Id;
            sourceRec[0].Status__c = 'Active';
            sourceRec[0].Company_Code__c = '155';
            insert sourceRec;
            List<String> companyCodes = new List<String>{'155', 'EU', 'DE'};
            Test.startTest();
                List<Source_Record__c> relatedSourceRec = SimulateContractLineController.getSorceRecords( accountList[0].Id, companyCodes);
            Test.stopTest();
           
            System.assertEquals(1, relatedSourceRec.size(), '1 Source record found');
        }
    }

    @isTest
    public static void getSalesData(){
        
        User testUser = [SELECT Id FROM User WHERE Alias = 'test1'];
        System.runas(testUser) {
            List<Account> accountList = TestDataFactory.returnAccounts(1, 'CIM_Account', testUser.Id);
            accountList.get(0).Country__c = 'DE';
            String querySAQL = 'q1 = load "*replaceAccountSalesDetail*";';
            querySAQL = querySAQL + 'q2 = load "*replaceAssets*";';
            querySAQL = querySAQL + 'q1 = filter q1 by \'OneSF_Id__c\' == "*replaceSFDCOneId*";';
            querySAQL = querySAQL + 'q2 = filter q2 by \'ac.OneSF_Id__c\' == "*replaceSFDCOneId*";';
            querySAQL = querySAQL + 'q1_SimplantR12M = filter q1 by \'Product2Sales.Global.PG1_Code__c\' == "ID8" && \'time.isCR12\' == "1";';
            querySAQL = querySAQL + 'q1_OssixR12M = filter q1 by \'Product2Sales.Global.PG2_Code__c\' == "IR30" && \'time.isCR12\' == "1";';
            querySAQL = querySAQL + 'q1_AtlantisR12M = filter q1 by \'Product2Sales.Global.PG1_Code__c\' in ["ID2", "ID4"] && \'time.isCR12\' == "1";';
            querySAQL = querySAQL + 'q1_ImplantSystemR12M = filter q1 by \'Product2Sales.Global.PG1_Code__c\' == "II1" && \'time.isCR12\' == "1";';
            querySAQL = querySAQL + 'q1_NetSalesPR12M = filter q1 by \'Product2Sales.Global.SBU_Name__c\' == "Implants" && \'time.isPR12\' == "1";';
            querySAQL = querySAQL + 'q1_NetSales = filter q1 by \'Product2Sales.Global.SBU_Name__c\' == "Implants" && \'time.isCR12\' == "1";';
            querySAQL = querySAQL + 'q1_NetSalesLY = filter q1 by \'Product2Sales.Global.SBU_Name__c\' == "Implants" && date(\'Invoice_Date__c_Year\', \'Invoice_Date__c_Month\', \'Invoice_Date__c_Day\') in ["1 year ago".."1 year ago"];';
            querySAQL = querySAQL + 'q1_NetSales2YAgo = filter q1 by \'Product2Sales.Global.SBU_Name__c\' == "Implants" && date(\'Invoice_Date__c_Year\', \'Invoice_Date__c_Month\', \'Invoice_Date__c_Day\') in ["2 year ago".."2 year ago"];';
            querySAQL = querySAQL + 'q1_NetSales3YAgo = filter q1 by \'Product2Sales.Global.SBU_Name__c\' == "Implants" && date(\'Invoice_Date__c_Year\', \'Invoice_Date__c_Month\', \'Invoice_Date__c_Day\') in ["3 year ago".."3 year ago"];';
            querySAQL = querySAQL + 'q1_NetSales4YAgo = filter q1 by \'Product2Sales.Global.SBU_Name__c\' == "Implants" && date(\'Invoice_Date__c_Year\', \'Invoice_Date__c_Month\', \'Invoice_Date__c_Day\') in ["4 year ago".."4 year ago"];';
            querySAQL = querySAQL + 'q1_NetSales5YAgo = filter q1 by \'Product2Sales.Global.SBU_Name__c\' == "Implants" && date(\'Invoice_Date__c_Year\', \'Invoice_Date__c_Month\', \'Invoice_Date__c_Day\') in ["5 year ago".."5 year ago"];';
            querySAQL = querySAQL + 'q2_CBCTUnits = filter q2 by \'Name\' matches "Orthophos";';
            querySAQL = querySAQL + 'q2_PrimescanUnits = filter q2 by \'Name\' matches "primescan";';
            querySAQL = querySAQL + 'q1 = cogroup q1_SimplantR12M by (\'OneSF_Id__c\', \'CurrencyIsoCode\') full, q1_OssixR12M by (\'OneSF_Id__c\', \'CurrencyIsoCode\') full, q1_AtlantisR12M by (\'OneSF_Id__c\', \'CurrencyIsoCode\') full, q1_ImplantSystemR12M by (\'OneSF_Id__c\', \'CurrencyIsoCode\') full, q1_NetSalesPR12M by (\'OneSF_Id__c\', \'CurrencyIsoCode\') full, q1_NetSales by (\'OneSF_Id__c\', \'CurrencyIsoCode\'), q1_NetSalesLY by (\'OneSF_Id__c\', \'CurrencyIsoCode\'), q1_NetSales2YAgo by (\'OneSF_Id__c\', \'CurrencyIsoCode\'), q1_NetSales3YAgo by (\'OneSF_Id__c\', \'CurrencyIsoCode\'), q1_NetSales4YAgo by (\'OneSF_Id__c\', \'CurrencyIsoCode\'), q1_NetSales5YAgo by (\'OneSF_Id__c\', \'CurrencyIsoCode\');';
            querySAQL = querySAQL + 'q1 = foreach q1 generate coalesce(q1_SimplantR12M.\'OneSF_Id__c\', q1_OssixR12M.\'OneSF_Id__c\', q1_AtlantisR12M.\'OneSF_Id__c\', q1_ImplantSystemR12M.\'OneSF_Id__c\', q1_NetSalesPR12M.\'OneSF_Id__c\', q1_NetSales.\'OneSF_Id__c\', q1_NetSalesLY.\'OneSF_Id__c\', q1_NetSales2YAgo.\'OneSF_Id__c\', q1_NetSales3YAgo.\'OneSF_Id__c\', q1_NetSales4YAgo.\'OneSF_Id__c\', q1_NetSales5YAgo.\'OneSF_Id__c\') as \'OneSF_Id__c\', coalesce(q1_SimplantR12M.\'CurrencyIsoCode\', q1_OssixR12M.\'CurrencyIsoCode\', q1_AtlantisR12M.\'CurrencyIsoCode\', q1_ImplantSystemR12M.\'CurrencyIsoCode\', q1_NetSalesPR12M.\'CurrencyIsoCode\', q1_NetSales.\'CurrencyIsoCode\', q1_NetSalesLY.\'CurrencyIsoCode\', q1_NetSales2YAgo.\'CurrencyIsoCode\', q1_NetSales3YAgo.\'CurrencyIsoCode\', q1_NetSales4YAgo.\'CurrencyIsoCode\', q1_NetSales5YAgo.\'CurrencyIsoCode\') as \'CurrencyIsoCode\', coalesce(sum(q1_SimplantR12M.\'Total_Value__c\'),0) as \'SimplantR12M\', coalesce(sum(q1_OssixR12M.\'Total_Value__c\'),0) as \'OssixR12M\', coalesce(sum(q1_AtlantisR12M.\'Total_Value__c\'),0) as \'AtlantisR12M\', coalesce(sum(q1_ImplantSystemR12M.\'Total_Value__c\'),0) as \'ImplantSystemR12M\', coalesce(sum(q1_NetSalesPR12M.\'Total_Value__c\'),0) as \'NetSalesPR12M\', coalesce(sum(q1_NetSales.\'Total_Value__c\'),0) as \'NetSales\', coalesce(sum(q1_NetSalesLY.\'Total_Value__c\'),0) as \'NetSalesLY\', coalesce(sum(q1_NetSales2YAgo.\'Total_Value__c\'),0) as \'NetSales2YAgo\', coalesce(sum(q1_NetSales3YAgo.\'Total_Value__c\'),0) as \'NetSales3YAgo\', coalesce(sum(q1_NetSales4YAgo.\'Total_Value__c\'),0) as \'NetSales4YAgo\', coalesce(sum(q1_NetSales5YAgo.\'Total_Value__c\'),0) as \'NetSales5YAgo\';';
            querySAQL = querySAQL + 'q2 = cogroup q2_CBCTUnits by \'ac.OneSF_Id__c\' full, q2_PrimescanUnits by \'ac.OneSF_Id__c\';';
            querySAQL = querySAQL + 'q2 = foreach q2 generate coalesce(q2_CBCTUnits.\'ac.OneSF_Id__c\', q2_PrimescanUnits.\'ac.OneSF_Id__c\') as \'ac.OneSF_Id__c\', coalesce(count(q2_CBCTUnits),0) as \'CBCTUnits\', coalesce(count(q2_PrimescanUnits),0) as \'PrimescanUnits\';';
            querySAQL = querySAQL + 'q = cogroup q1 by \'OneSF_Id__c\' full, q2 by \'ac.OneSF_Id__c\';';
            querySAQL = querySAQL + 'q = foreach q generate coalesce(q1.\'OneSF_Id__c\', q2.\'ac.OneSF_Id__c\') as \'OneSF_Id__c\', first(q1.\'CurrencyIsoCode\') as \'CurrencyIsoCode\', first(q1.\'SimplantR12M\') as \'SimplantR12M\', first(q1.\'OssixR12M\') as \'OssixR12M\', first(q1.\'AtlantisR12M\') as \'AtlantisR12M\', first(q1.\'ImplantSystemR12M\') as \'ImplantSystemR12M\', first(q1.\'NetSalesPR12M\') as \'NetSalesPR12M\', first(q1.\'NetSales\') as \'NetSales\', first(q1.\'NetSalesLY\') as \'NetSalesLY\', first(q1.\'NetSales2YAgo\') as \'NetSales2YAgo\', first(q1.\'NetSales3YAgo\') as \'NetSales3YAgo\', first(q1.\'NetSales4YAgo\') as \'NetSales4YAgo\', first(q1.\'NetSales5YAgo\') as \'NetSales5YAgo\', first(q2.\'CBCTUnits\') as \'CBCTUnits\', first(q2.\'PrimescanUnits\') as \'PrimescanUnits\';';
            querySAQL = querySAQL + 'q = foreach q generate \'OneSF_Id__c\', \'CurrencyIsoCode\', \'NetSales\', \'NetSalesPR12M\', round(((NetSales / NetSalesPR12M))*100,2) as \'Growth\', \'NetSalesLY\', \'NetSales2YAgo\', \'NetSales3YAgo\', \'NetSales4YAgo\', \'NetSales5YAgo\', case when \'NetSalesLY\' <= 100000 then 0 when \'NetSales2YAgo\' <= 100000 then 1 when \'NetSales3YAgo\' <= 100000 then 2 when \'NetSales4YAgo\' <= 100000 then 3 when \'NetSales5YAgo\' <=100000 then 4 else 5 end as \'NumberOfYearsBuying\', \'ImplantSystemR12M\', \'AtlantisR12M\', \'OssixR12M\', \'SimplantR12M\', \'PrimescanUnits\', \'CBCTUnits\', case when ImplantSystemR12M>1000 then 1 else 0 end as \'ImplantSystem\', case when AtlantisR12M>1000 then 1 else 0 end as \'Atlantis\', case when OssixR12M>1000 then 1 else 0 end as \'Ossix\', case when SimplantR12M>1000 then 1 else 0 end as \'Simplant\', case when PrimescanUnits>0 then 1 else 0 end as \'Primescan\', case when CBCTUnits>0 then 1 else 0 end as \'CBCT\', (case when ImplantSystemR12M>1000 then 1 else 0 end)+(case when AtlantisR12M>1000 then 1 else 0 end)+(case when OssixR12M>1000 then 1 else 0 end)+(case when SimplantR12M>1000 then 1 else 0 end)+(case when PrimescanUnits>0 then 1 else 0 end)+(case when CBCTUnits>0 then 1 else 0 end) as \'PGs\';';
            querySAQL = querySAQL + 'q = order q by \'OneSF_Id__c\' asc;';
            querySAQL = querySAQL + 'q = limit q 2000;';
            insert accountList;
            Test.startTest();
                Map<String,Object> saqlResponse = SimulateContractLineController.getSalesData( accountList[0].Id, querySAQL);
            Test.stopTest();
            System.assertEquals( String.valueOf(saqlResponse), '{id=56789, results={records=({ImplantUnitsQty=30, NetAmount=3000}, {ImplantUnitsQty=40, NetAmount=2000})}}' , 'check response value');
        }
    }


}