({
	init : function(cmp, event, helper) {

        	var pageReference = cmp.get("v.pageReference");
        
            var flow = cmp.find('flowData');
        	var inputVariables = [
      			{
        			name : 'recordId',
        			type : 'String',
        			value : pageReference.state.c__testVar
      			}	
    			];
       		flow.startFlow('Product_Profiling_Create_Product_Profiling_from_Contact', inputVariables);
	},

	statusChange : function (cmp, event) {
		if (event.getParam('status') === "FINISHED") {
				// Flow has finished, redirect to the account page
				var navService = cmp.find("navService");
				var pageReference = {
					type: 'standard__recordPage',
					attributes: {
						recordId: cmp.get("v.pageReference").state.c__accountId, // Specify the Account Id you want to navigate to
						actionName: 'view'
					}
				};
				navService.navigate(pageReference);
		}
	}
})