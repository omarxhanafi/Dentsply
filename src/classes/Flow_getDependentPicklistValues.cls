/*------------------------------------------------------------	
	Author: 		Richard Trum (Glimt) 2022-02-24	
	Description:   	Class used for getting data on picklist values dependencies inside flows
	Test class: 	Test_FlowGenericMethods
	------------------------------------------------------------*/ 

public class Flow_getDependentPicklistValues {
     
    @InvocableMethod
    public static List<List<String>> checkParentValues(List<List<String>> input){
    
        List<String> inputList = input[0];
    	List<String> objectInput = new List<String>();
		objectInput.add(inputList[0]);
        
        String fieldInput = inputList[1];
        
		List<DescribeSObjectResult> res = Schema.describeSObjects(objectInput);
		
		DescribeSObjectResult obj = res[0];
		Map<String, Schema.SObjectField> flds = obj.fields.getMap();

		Schema.SObjectField F = flds.get(fieldInput);
		Schema.DescribeFieldResult Fdes = F.getDescribe();
		Schema.sObjectField dependentField = Fdes.getSObjectField(); 
        Map<Object,List<String>> dependentPicklistValues = new Map<Object,List<String>>();
        //Get dependent field result
        Schema.DescribeFieldResult dependentFieldResult = dependentField.getDescribe();
        //Get dependent field controlling field 
        Schema.sObjectField controllerField = dependentFieldResult.getController();
        //Check controlling field is not null
        if(controllerField == null){
           	System.debug('Controller field null');
        } 
        //Get controlling field result
        Schema.DescribeFieldResult controllerFieldResult = controllerField.getDescribe();
        //Get controlling field picklist values if controlling field is not a checkbox
        List<Schema.PicklistEntry> controllerValues = (controllerFieldResult.getType() == Schema.DisplayType.Boolean ? null : controllerFieldResult.getPicklistValues());
         
        //It is used to decode the characters of the validFor fields. 
        String base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
         
        for (Schema.PicklistEntry entry : dependentFieldResult.getPicklistValues()){
            if (entry.isActive()){
            //The PicklistEntry is serialized and deserialized using the Apex JSON class and it will check to have a 'validFor' field
                List<String> base64chars = String.valueOf(((Map<String,Object>)JSON.deserializeUntyped(JSON.serialize(entry))).get('validFor')).split('');
                for (Integer i = 0; i < controllerValues.size(); i++){
                    Object controllerValue = (controllerValues == null ? (Object) (i == 1) : (Object) (controllerValues[i].isActive() ? controllerValues[i].getLabel() : null));
                    Integer bitIndex = i / 6;
                    Integer bitShift = 5 - Math.mod(i, 6 );
                    if(bitIndex <= (base64chars.size()-1)){
                        if(controllerValue == null || (base64map.indexOf(base64chars[bitIndex]) & (1 << bitShift)) == 0){
                            continue;
                        }
                    }    
                    if (!dependentPicklistValues.containsKey(controllerValue)){
                        dependentPicklistValues.put(controllerValue, new List<String>());
                    }
                    dependentPicklistValues.get(controllerValue).add(entry.getLabel());
                }
            }
        }
		System.debug(dependentPicklistValues.keySet());
        
        Set<Object> parentValuesSet = dependentPicklistValues.keySet();
        
        List<Object> parentValuesList = new List<Object>(parentValuesSet);
        
        List<String> rsult = new List<String>(); 
        for(Object o : parentValuesList){
            String r = (String)o;
            rsult.add(r);
        }
        
        List<List<String>> resultList = new List<List<String>>();
        resultList.add(rsult);
        System.debug(resultList);
        return resultList;
    }
}