({
    checkCancelOrderPermission: function(component) {
        var action = component.get("c.checkCancelOrderPermission");

        action.setCallback(this, function (response) {
            var state = response.getState();

            if (state === "SUCCESS") {
                var hasCancelOrderPermission = response.getReturnValue();
                component.set("v.hasCancelOrderPermission", hasCancelOrderPermission);
            }
        });
        $A.enqueueAction(action);
    },

    getStageGuidance: function(component) {
        return new Promise(
          $A.getCallback((resolve, reject) => {
            var action = component.get("c.getStageGuidance");
            action.setParams({ orderId: component.get("v.recordId") });
            action.setCallback(this, function (response) {
                
                var state = response.getState();
                if (state === "SUCCESS") {
                    var setting = JSON.parse(response.getReturnValue());
                    

                    if (setting ) {
                        var keyFields = setting.KeyFields__c ? JSON.parse(setting.KeyFields__c) : [];
                        var keyFieldsReadOnly = setting.KeyFieldsReadOnly__c ? JSON.parse(setting.KeyFieldsReadOnly__c) : [];
                        var keyFieldsOptional = setting.KeyFieldsOptional__c ? JSON.parse(setting.KeyFieldsOptional__c) : [];
                        var keyFieldsWithAttributeDetailsLocal = component.get('v.keyFieldsWithAttributeDetails');
                        var keyFieldsEditRequiredLocal = component.get('v.keyFieldsEditRequired');
                        var keyFieldsAllRequied = component.get('v.keyFieldsAllRequied');
                        component.set("v.showGuidance", true);
                        var calculateKeyFieldsOnlyOnce = component.get('v.calculateKeyFieldsOnlyOnce');
                        if(calculateKeyFieldsOnlyOnce){
                            component.set("v.calculateKeyFieldsOnlyOnce", false);
                            component.set("v.stageGuidanceSetting", setting);
                            component.set("v.keyFields", keyFields);
                            component.set("v.keyFieldsReadOnly", keyFieldsReadOnly);
                            component.set("v.showKeyFields", keyFields.length > 0 );
                            for (var i=0; i<keyFields.length; ++i){ 
                                let fieldAttributes ={ APIName : keyFields[i],
                                                    Required : keyFieldsOptional.includes(keyFields[i]) ? false : true,
                                                    ReadOnly : keyFieldsReadOnly.includes(keyFields[i]) ? true : false };
                                let editRequired = (keyFieldsOptional.includes(keyFields[i])) ? null : keyFields[i];
                                let readRequired = ! ((keyFieldsOptional.includes(keyFields[i]))) && keyFieldsReadOnly.includes(keyFields[i]) ? keyFields[i] : null;
                                if(readRequired != null){
                                    keyFieldsAllRequied.push(readRequired);
                                }
                                if(editRequired != null){
                                    keyFieldsEditRequiredLocal.push(editRequired);
                                    keyFieldsAllRequied.push(editRequired);
                                }
                                
                                if (!keyFieldsWithAttributeDetailsLocal.includes(fieldAttributes)) {
                                    keyFieldsWithAttributeDetailsLocal.push(fieldAttributes);
                                }
                            }
                            
                            component.set('v.keyFieldsWithAttributeDetails', keyFieldsWithAttributeDetailsLocal);
                            component.set('v.keyFieldsEditRequired', keyFieldsEditRequiredLocal);
                            component.set('v.keyFieldsAllRequied', keyFieldsAllRequied);
                        }
                    } else {
                        component.set("v.showGuidance", false);
                    }
                    resolve(setting);
                } else {
                    component.set("v.showGuidance", false);
                    reject(response.getError());
                }
            });
            $A.enqueueAction(action);
          })
        );
      },


    toggleSpinner: function (component) {
        var spinner = component.find("mySpinner");

        $A.util.toggleClass(spinner, "slds-hide");
    },

    createModal: function (component, mode, header) {
        var modalBody;
        var modalFooter;

        $A.createComponents(
            [
                [
                    "c:ModalContentOm",
                    { recordId: component.get("v.recordId"), mode: mode }
                ],
                ["c:ModalFooterOm", {}]
            ],
            function (components, status) {
                if (status === "SUCCESS") {
                    modalBody = components[0];
                    modalFooter = components[1];
                    component.find("overlayLib").showCustomModal({
                        header: header,
                        body: modalBody,
                        footer: modalFooter,
                        showCloseButton: true,
                        cssClass: "mymodal",
                        closeCallback: function () {
                            // Do nothing
                        }
                    });
                }
            }
        );
    }
});