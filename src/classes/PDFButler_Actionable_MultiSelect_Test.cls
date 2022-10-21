/**
 * Created by CloudCrossing - PDF Butler on 26/06/2020.
*/
@IsTest
global class PDFButler_Actionable_MultiSelect_Test {

    @IsTest
    global static void test_wrapper2List() {
        PDFButler_Actionable_MultiSelect agtdt = new PDFButler_Actionable_MultiSelect();
        
        //empty
        agtdt.wrapper2List(null);
        
        //SINGLE
        cadmus_core.SingleWrapper sw = new cadmus_core.SingleWrapper();
        Map<String,String> singleData = new Map<String,String>();
        sw.data = singleData;
        agtdt.wrapper2List(sw);
        
        //LIST
        cadmus_core.ListWrapper lw = new cadmus_core.ListWrapper();
        List<Map<String, Object>> listData = new List<Map<String, Object>>();
        lw.data = listData;
        agtdt.wrapper2List(lw);
        
        //Any object
        agtdt.wrapper2List(new PDFButler_Actionable_MultiSelect());
    }

    @IsTest()
    global static void test_executeNoRows() {
        PDFButler_Actionable_MultiSelect agtdt = new PDFButler_Actionable_MultiSelect();
        
        Map<String, Object> dsMap = new Map<String, Object>();
        cadmus_core__Actionable__c actionable = new cadmus_core__Actionable__c();
        actionable.MultiSelect_SourceField_API_Name__c = 'MyTestField';
        
        agtdt.execute(actionable, null, null, null, dsMap, null);
    }

    @IsTest()
    global static void test_execute() {
        PDFButler_Actionable_MultiSelect agtdt = new PDFButler_Actionable_MultiSelect();
        
        Map<String, Object> dsMap = new Map<String, Object>();
        
        cadmus_core.ListWrapper lw = new cadmus_core.ListWrapper();
        List<Map<String, Object>> listData = new List<Map<String, Object>>();
        Map<String,String> singleData = new Map<String,String>();
        singleData.put('MyTestField', 'fld1;fld2');
        listData.add(singleData);
        lw.data = listData;
        
        dsMap.put(null,lw);
        
        cadmus_core__Actionable__c actionable = new cadmus_core__Actionable__c();
        actionable.MultiSelect_SourceField_API_Name__c = 'MyTestField';
        
        agtdt.execute(actionable, null, null, null, dsMap, null);
    }

    @IsTest()
    global static void test_executeNullValue() {
        PDFButler_Actionable_MultiSelect agtdt = new PDFButler_Actionable_MultiSelect();
        
        Map<String, Object> dsMap = new Map<String, Object>();
        
        cadmus_core.ListWrapper lw = new cadmus_core.ListWrapper();
        List<Map<String, Object>> listData = new List<Map<String, Object>>();
        Map<String,String> singleData = new Map<String,String>();
        singleData.put('MyTestField', null);
        listData.add(singleData);
        lw.data = listData;
        
        dsMap.put(null,lw);
        
        cadmus_core__Actionable__c actionable = new cadmus_core__Actionable__c();
        actionable.MultiSelect_SourceField_API_Name__c = 'MyTestField';
        
        agtdt.execute(actionable, null, null, null, dsMap, null);
    }
}