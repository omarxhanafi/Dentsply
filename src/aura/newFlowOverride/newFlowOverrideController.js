({
    init : function (component,event,helper) {
  
        var pageRef = component.get("v.pageReference");
        var passRecordIdToFlow = '';

        let objName = '';
        let actionName = '';

        if(pageRef){
            var state = pageRef.state;
            if(state){
                var base64Context = state.inContextOfRef;

                if(base64Context){
                    if (base64Context.startsWith("1\.")) {
                        base64Context = base64Context.substring(2);
                    }
                    var addressableContext = JSON.parse(window.atob(base64Context));

                    if(addressableContext.attributes.recordId != null){
                        component.set("v.passRecordIdToFlow", addressableContext.attributes.recordId);
                        passRecordIdToFlow = addressableContext.attributes.recordId;
                    }
                }
            }

            objName = pageRef.attributes.objectApiName;
            actionName = pageRef.attributes.actionName;
        }

        var flow = component.find("flowData");
        
        if(component.get("v.pageReference") && component.get("v.pageReference").state.c__passedRecordId != undefined && passRecordIdToFlow == ''){
            passRecordIdToFlow = component.get("v.pageReference").state.c__passedRecordId;   
        }
        else if(component.get("v.parentFieldId")){
            //Handle the situation where a Sales Lead is created from a CMDT Enhanced Related List on Sales Leads (mobile)
            passRecordIdToFlow = component.get("v.parentFieldId");
            objName = 'Field_Sales_Project_Members__c';
            actionName = 'new';

        }

        var inputVariables = [];

        if(passRecordIdToFlow!=''){
            inputVariables = [
                {
                    name : "recordId",
                    type : "String",
                    value :passRecordIdToFlow 
                }];
        }

        var action = component.get("c.getFlowOverride");
        action.setParams({
            "objname": objName,
            "actionname": actionName
        });
        action.setCallback(this, function(response) {
    
            if (response.getState() === "SUCCESS") {  
                    var res = response.getReturnValue();
                    var flowName = res.FlowName__c;

                    var parentFieldId = component.get("v.parentFieldId");

                    var formFactor = $A.get("$Browser.formFactor");

                    if(formFactor == 'DESKTOP' || parentFieldId){
                        var modalBody;
                        $A.createComponent("c:newFlowOverrideModal", {"inputVariables":inputVariables, "flowName":flowName},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   modalBody = content;
                                   component.find('overlayLib').showCustomModal({
                                       body: modalBody,
                                       showCloseButton: true,
                                       closeCallback: function() {
                                            if(component.get("v.flowFinished") == false){
                                                console.log('Returning to previous page');
                                                window.history.back();
                                            }
                                       }
                                   })
                               }
                           });
                    }
                    else{
                        // In that component, start your flow. Reference the flow’s Unique Name.
                        flow.startFlow(flowName, inputVariables);
                    } 

            } else if (response.getState() === "ERROR") {
            
            }
        });
        $A.enqueueAction(action);    
       
    },

    pageRefChange: function (component,event,helper) {
        var a = component.get('c.init');
        $A.enqueueAction(a);
    },
    
    handleFlowEvent : function(component, event, helper){
        console.log('Catching flow event');
        console.log(JSON.stringify(event));
        component.set("v.flowFinished", true);
    }
})