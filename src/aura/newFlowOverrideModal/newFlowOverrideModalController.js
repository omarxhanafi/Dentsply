({
    init : function(component, event, helper) {

        var input = component.get("v.inputVariables");
        var flow = component.find("flowData");
        var flowName = component.get("v.flowName");
        flow.startFlow(flowName, input);

    },

    flowStatusChange : function (cmp, event) {
        
        if (event.getParam('status') === "FINISHED") {
            console.log('Finishing flow');
            var flowEvent = $A.get("e.c:newFlowOverrideEvent");
            flowEvent.setParams({ "flowFinished" : true});
            flowEvent.fire();
        }
    }
})