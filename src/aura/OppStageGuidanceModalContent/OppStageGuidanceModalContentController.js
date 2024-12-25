({
    handleInit : function(component){
        
        //Replicate validation rule Completed_Sales_Lead where just a few countries are allowed to
        //close a Sales lead without an opportunity, order or account program member assigned
        let objtype = component.get("v.objectType");
        if(objtype != 'Opportunity'){
            let rec = component.get("v.loadedRecord");

            console.log('Rec: ' + rec);
            
            if(rec){
                let accCountry = rec.Account__r.Country__c;
                let countryList = ['BE','NL','LU','DE','AT','CA','US'];

                /*if(countryList.includes(accCountry)){
                    component.set("v.showCompleteSalesLead", true);
                }*/

                let salesRepId = rec.Sales_Rep__c;
                let managerId = rec.OwnerManagerId__c;

                console.log('Rep id: ' + salesRepId + ' Manager id: ' + managerId);
                var userId = $A.get("$SObjectType.CurrentUser.Id");

                console.log(userId);

                let salesLeadEdit = component.get("v.hasSalesLeadEditAccess");

                let currentUser = component.get("v.currentUser");

                console.log(JSON.stringify(currentUser));

                if(userId != salesRepId && userId != managerId){
                    if(salesLeadEdit == false){
                        component.set('v.allowedToEditSalesLead', false);
                    }

                    if(currentUser){
                        let profileName = currentUser.Profile.Name;
                        if(profileName.includes("#System:") || profileName.includes("CRM Analyst")){
                            component.set('v.allowedToEditSalesLead', true);
                        }
                    }

                }
                console.log('Allowed to edit sales lead?: ' + component.get('v.allowedToEditSalesLead'));   

            }
        }

    },

    handlePermissionCheck : function(component, event){
        var permissions = event.getParam('permissions');
        component.set("v.hasAccountProgramMemberAccess", permissions.get('AccountProgramMember'));
        component.set("v.hasOrderAccess", permissions.get('Order'));
        component.set("v.hasSalesLeadEditAccess", permissions.get('SalesLead'));
        console.log('Sales lead access?: ' + permissions.get('SalesLead'));
        component.set("v.showCompleteSalesLead", permissions.get('CompleteSalesLead'));
        console.log('Complete sales lead access?: ' + permissions.get('CompleteSalesLead'));

        if(permissions.get('AccountProgramMember') === true){        
            var action = component.get("c.checkAccountPrograms");
            action.setParams({
                recordId: component.get("v.recordId")
            });
            action.setCallback(this, function(data){
                var res = data.getReturnValue();
                console.log(res);
                console.log(res.length);
                if(res.length>0){
                    component.set("v.accountProgramsAvailable", true);
                }
            });
            $A.enqueueAction(action);
        }


    },

    handleLoad: function (component) {
        //var stageFieldValue = component.find("stageField").set("v.value", component.get("v.stepName"));

        //Set WinLossDescription as required for certain brands when closing an Opportunity
        if(component.get("v.objectType") == 'Opportunity'){
            let brand = component.find("brandField").get("v.value");

            if(brand == 'Primescan Connect'){
                component.set("v.winLossDescrRequired", true);
            }
        }

    },

    handleError : function(component, event){
        component.set("v.isLoading", false);
    },
    
    handleCancel: function (component) {
        console.log('Cancelling modal');
        component.set("v.modalSuccess", false);
        component.find('overlayLib').notifyClose();
    },
    
    handleSubmit: function (component, event, helper) {
        component.set("v.isLoading", true);
        event.preventDefault();
        var eventFields = event.getParam('fields');
        component.find('recordForm').submit(eventFields);
    },
    
    handleSuccess: function (component, event, helper) {
        // component.set("v.isLoading", false);
        component.set("v.modalSuccess", true);
        component.find('overlayLib').notifyClose();
    },

    launchConversionFlow : function(component) {
        component.set("v.modalSuccess", true);
        component.set("v.launchConvertLead", true);
        var runFlow = component.get("v.completedSalesLead");

            if(runFlow == true){
                var flow = component.find("flowData");
                var inputVariables = [
                    {
                        name : 'recordId',
                        type : 'String',
                        value : component.get("v.recordId")
                    }
                    ];
                flow.startFlow("Lead_Convert_lead", inputVariables);
            }

    },

    launchOrderCreation : function(component){
        component.set("v.modalSuccess", true);
        component.set("v.launchConvertLead", true);

        //Communicate to salesLeadCompletion that the order creation has been initiated
        var modalEvent = component.getEvent("hideCancelEvent");
        modalEvent.fire();

        $A.createComponent(
            "c:orderManagementCmp",
            {
                 "recordId" : component.get("v.recordId")
            },
            function(components, status, errorMessages){
                if(status === 'SUCCESS'){
                    console.log('Creating component');
                    component.set("v.body", components);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error message: " + errorMessages[0].message);
                }
            }

        );    
    },

    launchProgramRegistration : function(component) {
        component.set("v.modalSuccess", true);
        component.set("v.launchConvertLead", true);
        var runFlow = component.get("v.completedSalesLead");

        if(runFlow == true){

            var flow = component.find("flowData");
            var inputVariables = [
                {
                    name : 'recordId',
                    type : 'String',
                    value : component.get("v.recordId")
                }
                ];
            flow.startFlow("Account_Program_Member_Registration", inputVariables);

        }
        

    },

    completeSalesLead : function(component){
        component.set("v.completedSalesLead", false);
    },
})