({
    init: function (cmp, event, helper) {
        // Get the current year
        var currentYear = new Date().getFullYear();

        // Create an array to store the last 15 years
        var yearOptions = [];
        for (var i = currentYear; i >= currentYear - 15; i--) {
            yearOptions.push({ label: '' + i, value: '' + i });
        }

        // Set the yearOptions attribute
        cmp.set('v.yearOptions', yearOptions);
    },

    
    hideSpinner: function(cmp, event, helper){
        var recordId = event.getSource().get("v.recordId");
        var loadedRecords = cmp.get("v.productsLoaded");

        loadedRecords[recordId] = true;

        cmp.set("v.productsLoaded", loadedRecords);

        cmp.set("v.showSpinner", false);
    },
    
    handleError: function(cmp, event, helper){
      cmp.set("v.showSpinner", false);
    },

    setValues: function(cmp, event, helper){
        var products = cmp.get("v.selectedProducts");

        cmp.set("v.showSpinner", true);

        var action = cmp.get("c.updateProductProfilingRecords");

        // Prepare the list of records to update
        action.setParams({
            "productProfilingList": products
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Handle success response
                cmp.set("v.showSpinner", false);

                var cmpEvent = cmp.getEvent('cmpEvent');
                cmpEvent.fire();

            } else if (state === "ERROR") {
                // Handle error response
                var errors = response.getError();
                if (errors) {
                    console.error("Error message: " + errors[0].message);
                } else {
                    console.error("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
    },

	deleteProduct: function(cmp, event){
        
        var recordId = event.getSource().get("v.name");
       	var cmpEvent = cmp.getEvent('cmpEvent');
        cmpEvent.setParams({"message" : recordId});  
        
        //Delete record from array in component
        var allRecords = cmp.get("v.selectedProducts");
        var recordToDelete = {};
        
        for(var i in allRecords){
            if(allRecords[i].Id == recordId){
               allRecords.splice(i, 1); 
            }
        }
        
		//Delete record from server        
       	var action = cmp.get("c.deleteProductProfilingRecord");
        	
        action.setParams({
           recordId : recordId
        });
        	
       	action.setCallback(this, function(response) {
         	var state = response.getState();
            
            if (state === "SUCCESS") {
                var result=response.getReturnValue();
        		cmp.set("v.selectedProducts", allRecords);
        		             
            }    
        });
        $A.enqueueAction(action);
 
    },
        navigateToRecord : function(cmp, event, helper) {
            // Retrieve the recordId from the clicked element's data attribute
            var recordId = event.target.dataset.recordid;

            // Create the event to navigate to the record
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                "recordId": recordId,
                "slideDevName": "detail"
            });
            navEvt.fire();
        }
})