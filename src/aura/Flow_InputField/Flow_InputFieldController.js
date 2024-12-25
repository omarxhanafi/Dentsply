({
	init : function(component, event, helper) {
        
        var fieldValue = component.get("v.fieldVal");        
        var fieldValueNumber = 0;
        if(fieldValue == null || fieldValue == ''){
            fieldValueNumber = component.get("v.fieldValNumber");
            component.find("fieldValue").set("v.value", fieldValueNumber);
        }
        else{
            component.find("fieldValue").set("v.value", component.get("v.fieldVal"));            
        }

        component.set("v.resId", component.find("fieldValue").get("v.value"));

        component.set('v.validate', function() {

            var input = component.find("fieldValue").get("v.value");

            if(input && input.length>0){
                return {isValid:true};
            }
            else if(component.get("v.required") == false){
                return {isValid:true};
            }
            else{
                return {isValid: false, errorMessage: ''};
            }
        });   
        
	},
        
    upd: function(component, event, helper) {
        event.preventDefault();

        component.set("v.resId", component.find("fieldValue").get("v.value"));
        
        component.find("fieldValue").reportValidity();

        var err = component.find("fieldValue").reportValidity();
        console.log('Error check: ' + err);
        
        component.set('v.validate', function() {

            var input = component.find("fieldValue").get("v.value");

            if(input && input.length>0){
                return {isValid:true};
            }
            else if(component.get("v.required") == false){
                return {isValid:true};
            }
            else{
                return {isValid: false, errorMessage: ''};
            }
        });

    },

    hideSpinner : function(component, event){

        component.set('v.loaded', true);

        if(component.get('v.firstScreenVisit') == false){
            event.preventDefault();

            var delay=300; //0.3 seconds
            setTimeout(function() {
            var errCheck = component.find("fieldValue").reportValidity();
            console.log(errCheck);
            }, delay);
        }
        else{
            component.set('v.firstScreenVisit', false);
        }
    }    
})