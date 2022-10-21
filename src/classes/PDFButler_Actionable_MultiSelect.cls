/**
 * Created by CloudCrossing - PDF Butler on 26/06/2020.
 */
global with sharing class PDFButler_Actionable_MultiSelect implements cadmus_core.AbstractBeforeWithDataSourcesActionable{

    global List<Map<String,Object>> wrapper2List(Object wrapper){
        if(wrapper==null) return null;

        List<Map<String,Object>> richFieldsRows=new List<Map<String, Object>>();

        if(wrapper instanceof cadmus_core.SingleWrapper){
            cadmus_core.SingleWrapper richFieldsRowsDsSingle =(cadmus_core.SingleWrapper)wrapper;
            richFieldsRows.add(richFieldsRowsDsSingle.data);
        }
        else if (wrapper instanceof cadmus_core.ListWrapper){
            cadmus_core.ListWrapper richFieldsRowsDsSingle =(cadmus_core.ListWrapper)wrapper;
            richFieldsRows.addAll(richFieldsRowsDsSingle.data);
        }else{
            richFieldsRows = null;
        }
        return richFieldsRows;
    }

    global void execute(cadmus_core__Actionable__c actionable, Id docConfig, Id objectId, Map<String, Object> inputMap, Map<String, Object> dsMap, cadmus_core.ConvertController.ConvertDataModel cdm) {

        System.debug('Starting!');
        System.debug(dsMap);
        String sourceGuid = actionable.MultiSelect_Source_Guid__c;
        String targetGuid = actionable.MultiSelect_Target_Guid__c;
        

        System.debug(sourceGuid);
        System.debug(targetGuid);

        Object sourceRowsDs =  dsMap.get(sourceGuid);
        System.debug('MultiSelect sourceRowsDs: ' + sourceRowsDs);
        List<Map<String,Object>> sourceRows = wrapper2List(sourceRowsDs);
        System.debug(sourceRows);

        if(sourceRows==null){
            System.debug('Missing input map for actionable DS GUID: '+sourceGuid);
            return;
        }
        List<Map<String,Object>> targetData = new List<Map<String, Object>>();


        //loop through all records
        for (Map<String,Object> sourceRow : sourceRows) {
            System.debug(sourceRow);
            System.debug('MultiSelect_SourceField_API_Name__c: ' + actionable.MultiSelect_SourceField_API_Name__c);
            // get the RichText Field
            String allVal = String.valueOf(sourceRow.get(actionable.MultiSelect_SourceField_API_Name__c));
            //Split the val on ";"
            if(allVal == null) {
                continue;
            }
            List<String> vals = allVal.split(';');
            for (String val : vals) {
                Map<String,String> valRow = new Map<String,String>();
                valRow.put('parentId',String.valueOf(sourceRow.get('Id')));
                valRow.put('value',val);
                targetData.add(valRow);
            }
        }
            
        cadmus_core.ListWrapper dsTarget = new cadmus_core.ListWrapper();
		dsTarget.data = targetData;
        dsMap.put(targetGuid,dsTarget);
    }
}