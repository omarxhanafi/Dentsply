({
    handleCancel : function(component, event, helper) {
        //component.find('overlayLib').notifyClose();
        $A.get("e.force:closeQuickAction").fire();
    },

    hideCancel : function(component, event, helper) {
        component.set("v.showCancel", false);
    }
})