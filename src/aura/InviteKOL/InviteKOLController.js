({
	init: function (cmp, event, helper) {
			console.log("Init CVENT component");
        	var action = cmp.get("c.getKOLdata");
        	
            action.setParams({
                recordId : cmp.get("v.recordId")
            });
        	
        	action.setCallback(this, function(response) {

            var state = response.getState();
                
            if (state === "SUCCESS") {
                cmp.set("v.KOL", response.getReturnValue());
                console.log('KOL response: ' + response.getReturnValue());
                
                        $A.createComponent(
                            "CventEvents:contactLeadManagementTab",
                            {
                                "aura:id": "service",
                                "recordId": response.getReturnValue().Contact__c,
                                "objectApiName": "Contact",
                                "isSalesforceClassic" : "false"
                            },
                            function(newButton, status, errorMessage){
                                //Add the new button to the body array
                                if (status === "SUCCESS") {
                                    var body = cmp.get("v.body");
                                    body.push(newButton);
                                    cmp.set("v.body", body);
                                }
                                else if (status === "INCOMPLETE") {
                                    console.log("No response from server or client is offline.")
                                    // Show offline error
                                }
                                else if (status === "ERROR") {
                                    console.log("Error: " + errorMessage);
                                    // Show error message
                                }
                            }
                        );

            }
        });
		$A.enqueueAction(action);
    }

})