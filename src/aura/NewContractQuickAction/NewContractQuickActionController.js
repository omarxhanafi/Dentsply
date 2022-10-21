({
	doInit : function(component, event, helper) {
		var action = component.get("c.isUserEligibleForCustomContractCreation");
        var recordId = component.get('v.recordId'); 
        action.setParams({ recordId : recordId});
        action.setCallback(this, function(result){
            var state = result.getState();
            var isUserEligible = result.getReturnValue();
            if (state === "SUCCESS"){
                if(isUserEligible === true){
                   //rediredt to flow 
                    var inputVariables = [{
                        name : "recordId",
                        type : "String",
                        value : recordId 
                    }];
                   const flow = component.find("flowData");
        		   flow.startFlow("Contract_NewPricingContract",inputVariables);
                }else{
                    //redirect to std new 
                    component.find('createContractAction').navigateToStdNewContract();
                } 
            }
       });
       $A.enqueueAction(action);
	}
})