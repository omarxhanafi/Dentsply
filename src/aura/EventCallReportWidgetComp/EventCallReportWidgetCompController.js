({
    refresh: function (component, event, helper) {
        $A.get('e.force:refreshView').fire();
    },
    reload: function (component, event, helper) {
        location.reload();
    },
})