({
	init : function(component, event, helper){

		var pageRef = component.get("v.pageReference");
		var recordId = component.get("v.recordId");
		var device = $A.get("$Browser.formFactor");

		//Get recordId when the action is launched from a record's related list
		if(!recordId && pageRef && device == 'DESKTOP'){
			component.set("v.showModal", true);

			var state = pageRef.state;
            if(state){

                var base64Context = state.inContextOfRef;

				var parentRecordId = state.c__parentRecordId;

                if(base64Context){
                    if (base64Context.startsWith("1\.")) {
                        base64Context = base64Context.substring(2);
                    }

                    var addressableContext = JSON.parse(window.atob(base64Context));

                    if(addressableContext.attributes.recordId != null){
                        component.set("v.recordId", addressableContext.attributes.recordId);
						component.set("v.sObjectName", addressableContext.attributes.objectApiName);

                    }
                }
				else if(parentRecordId){
					component.set("v.recordId", parentRecordId);
				}
            }

			var modalBody;
			$A.createComponent("c:orderManagementLwc", {"recordId" : component.get("v.recordId"), "sobjectName" : component.get("v.sObjectName"), "lightningOut": component.get("v.lightningOut")},
			   function(content, status) {
				   if (status === "SUCCESS") {
					   modalBody = content;
					   component.find('overlayLib').showCustomModal({
						   body: modalBody,
						   showCloseButton: true,
						   closeCallback: function() {
									console.log('Returning to previous page');
									window.history.back();
						   }
					   })
				   }
			   });

		}

	},

    closeQA : function(component, event, helper) {
		$A.get("e.force:closeQuickAction").fire();
	},

	pageRefChange: function (component,event,helper) {
        var a = component.get('c.init');
        $A.enqueueAction(a);
    },
})