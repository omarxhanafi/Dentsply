({
    init: function (cmp, event, helper) {
		// cmp.set("v.showSpinner", true);

        // var products = cmp.get("v.selectedProducts");
        //
        // var currentOrder = true;
		// products.sort(function(a,b) {
        //     var t1 = a.Product_Name__r.Name == b.Product_Name__r.Name, t2 = a.Product_Name__r.Name < b.Product_Name__r.Name;
        //     return t1? 0: (currentOrder?-1:1)*(t2?1:-1);
        // });

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
    //
    // sortProducts: function(cmp, event){
    //     console.log("here?");
    //
    //     var products = cmp.get("v.selectedProducts");
    //
    //     var currentOrder = true;
    //     products.sort(function(a,b) {
    //         var t1 = a.Product_Name__r.Name == b.Product_Name__r.Name, t2 = a.Product_Name__r.Name < b.Product_Name__r.Name;
    //         return t1? 0: (currentOrder?-1:1)*(t2?1:-1);
    //     });
    //
    //     cmp.set("v.selectedProducts", products);
    // },
    
    hideSpinner: function(cmp, event, helper){
      	console.log('Hide spinner');
        var recordId = event.getSource().get("v.recordId");
        var loadedRecords = cmp.get("v.productsLoaded");
        loadedRecords[recordId] = true;
        cmp.set("v.productsLoaded", loadedRecords);
        
		let keys = Reflect.ownKeys(loadedRecords);
        
        console.log(keys.length);
        
        var products = cmp.get("v.selectedProducts");
        
        console.log(products.length);
        
        //if(keys.length == products.length){
        	cmp.set("v.showSpinner", false);
        //}    
    },
    
    handleError: function(cmp, event, helper){
      cmp.set("v.showSpinner", false);
      console.log(event.getParameters());      
    },

    setValues: function(cmp, event, helper){
        var products = cmp.get("v.selectedProducts");

        console.log("Products to update", products);

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
        console.log('Record to delete: ' + recordId);
       	var cmpEvent = cmp.getEvent('cmpEvent');
        cmpEvent.setParams({"message" : recordId});  
        
        //Delete record from array in component
        var allRecords = cmp.get("v.selectedProducts");
        var recordToDelete = {};
        
        for(var i in allRecords){
        	console.log(allRecords[i]);
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
                console.log('Delete successful: ' + result);	
        		//cmpEvent.fire(); 
        		cmp.set("v.selectedProducts", allRecords);
        		             
            }    
        });
        $A.enqueueAction(action);
 
    },    
})