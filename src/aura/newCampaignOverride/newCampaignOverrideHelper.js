({
    helperMethod: function (component, event, helper) {

        // Find the component whose aura:id is “flowData”

        var flow = component.find("flowData");
 
        var passRecordTypeIdToFlow = '';
        if(component.get("v.pageReference").state.recordTypeId == undefined){
            passRecordTypeIdToFlow = component.get("v.pageReference").state.c__passedRecordTypeId;
            } 
            else {
                passRecordTypeIdToFlow = component.get("v.pageReference").state.recordTypeId;
            }  
        var passRecordIdToFlow = '';
        if(component.get("v.pageReference").state.c__passedRecordId != undefined){
            passRecordIdToFlow = component.get("v.pageReference").state.c__passedRecordId;   
        }

        var inputVariables = [{
            name: "recordTypeIdFromAura",
            type: "String",
            value: passRecordTypeIdToFlow 
        },
        {
             name : "recordIdFromAura",
             type : "String",
             value :passRecordIdToFlow 
        }];
        // In that component, start your flow. Reference the flow’s Unique Name.
        flow.startFlow("CampaignNewOverrideAction", inputVariables);
        
        //this to show the backend URL in desktop
        helper.setBackgroundContext(component, event, helper); 

    },
    setBackgroundContext: function (component, event, helper) {
  
        var navService = component.find("navService");
        var pageReference = Object.assign(component.get("v.pageReference"));
        if(component.get("v.pageReference").state.c__passedRecordId == undefined ){
            pageReference.state.backgroundContext = '/lightning/o/Campaign/list?filterName=Recent';
        } else{
            pageReference.state.backgroundContext = '/lightning.force.com/lightning/r/Campaign/' + component.get("v.pageReference").state.c__passedRecordId + '/view';
        }         
        navService.navigate(pageReference, true);
        
    }
})