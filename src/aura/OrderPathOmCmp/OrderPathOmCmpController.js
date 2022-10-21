({
    
    init: function (component, event, helper) {
        helper.checkCancelOrderPermission(component);
        helper.getStageGuidance(component).then((result) => {
            if(result){
                component.find("recordLoader").reloadRecord(true);
            }
        })
        .catch(error => {

        });
    },
    updateShowFields: function (component, event, helper) {
        
            component.set("v.showEditButton", false);
            component.set("v.showSubmitButton", true);
        
    },
    updateSwitchShowFields: function (component, event, helper) {
        
        component.set("v.showEditButton", true);
        component.set("v.showSubmitButton", false);
    
    },

    handleOrderLoaded: function (component, event, helper) {
        var eventParams = event.getParams();

        if (eventParams.changeType === "LOADED") {
            var orderStatus = component.get("v.orderRecord.Status");
            var showKeyFields = component.get("v.showKeyFields");

            if (showKeyFields !== undefined && showKeyFields === false) {
                component.set("v.disableSubmit", orderStatus !== "Created" && orderStatus !== 'Rejected');
            }
            component.set("v.disableCancel", orderStatus === "Rejected");
        }
    },

    handleFormLoad: function (component, event, helper) {
        var record = event.getParams().records[component.get("v.recordId")];
        
        if (record) {
            var keyFields = component.get("v.keyFieldsAllRequied");
            keyFields = keyFields.flatMap(function (field) {
                return field === "ShippingAddress"
                    ? ["ShippingCity", "ShippingStreet"]
                    : field;
            });
            var hasNullFields = keyFields.some(function (field) {
                let disableApprobalButton = record.fields[field] ? record.fields[field].value === null || record.fields[field].value == "" : false;
                 return disableApprobalButton;
            });
    
            if (record.fields.Status.value === "Created") {
                component.set("v.disableSubmit", hasNullFields);
            }
        }
    },
    
    handleCancel: function (component, event, helper) {
        helper.createModal(component, "cancel", "Order Cancellation");
    },

    handleSubmitForApproval: function (component, event, helper) {
        helper.createModal(component, "submit", "Submit for Approval");
    }
});