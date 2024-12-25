({
	loadSpeakerEvents : function(component, event) {
		var action2 =component.get("c.getSpeakerEvents");
        action2.setParams({
            recordId: component.get("v.recordId")
        });
        action2.setCallback(this, function(response){
            	var state = response.getState();
				if (state === "SUCCESS") {
					var result = response.getReturnValue();
                    
                    var eventsToAdd = component.get("v.eventList");                    
                    for(var i in result){
                        var event = {};
                        event.Id = result[i].Id;
                        event.Name = result[i].CventEvents__pkg_Title__c;
                        event.Contract = result[i].ActualCategory__c;
                        event.Speaker = result[i].ContractedSpeaker__c;
                        event.EventUrl = '/lightning/r/CventEvents__Event__c/' + result[i].Id + '/view/';
                        event.StartDate = result[i].CventEvents__pkg_StartDate__c;
                        event.EndDate = result[i].CventEvents__pkg_EndDate__c;
                        eventsToAdd.push(event);
                    }
                    
                    component.set("v.eventList", eventsToAdd);
                    this.sortBy(component, "StartDate");
                    
                }
        		else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
       
        });
		$A.enqueueAction(action2);
	},
    
    loadDeliverables : function(component, event){
        
        var action = component.get("c.getDeliverables");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            	var state = response.getState();
				if (state === "SUCCESS") {
					var result = response.getReturnValue();
					
					var eventsToAdd = component.get("v.eventList");                    
                    for(var i in result){
                        var event = {};
                        event.Id = result[i].CventEventUpd__c;
                        event.Name = result[i].CventEventUpd__r.CventEvents__pkg_Title__c;
                        event.Contract = result[i].KOL_Contract__r.Name;
                        event.Speaker = result[i].CventEventUpd__r.ContractedSpeaker__c;
                        event.EventUrl = '/lightning/r/CventEvents__Event__c/' + result[i].CventEventUpd__c + '/view/';
						event.StartDate = result[i].CventEventUpd__r.CventEvents__pkg_StartDate__c,                    
                        eventsToAdd.push(event);
                    }
                    
                    component.set("v.eventList", eventsToAdd);
                    
                }
        		else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
       
        });
        
		$A.enqueueAction(action);
        
    },
    
    sortBy: function(component, field) {
        var sortAsc = component.get("v.sortAsc"),
            sortField = component.get("v.sortedBy"),
            records = component.get("v.eventList");

        if(sortField == 'EventUrl'){
            sortField = 'Name';
        }
        if(field == 'EventUrl'){
            field = 'Name';
        }

        if(sortAsc == true){
            component.set("v.sortDirection", "asc");
            sortAsc = false;
         }
         else{
            component.set("v.sortDirection", "desc");
            sortAsc = true;
         }

        records.sort(function(a,b){
            var t1 = a[field] == b[field],
                t2 = a[field] > b[field];
            return t1? 0: (sortAsc?-1:1)*(t2?-1:1);
        });
        
        component.set("v.sortAsc", sortAsc);
        component.set("v.sortedBy", field);
        component.set("v.eventList", records);
    }
})