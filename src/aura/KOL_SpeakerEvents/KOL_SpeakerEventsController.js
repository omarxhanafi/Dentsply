({
	init : function(component, event, helper) {
		component.set("v.columns",[
            				{ label: 'Event', fieldName: 'EventUrl', type: 'url', sortable: true, typeAttributes: {label: { fieldName: 'Name' }} },
                         	{ label: 'Contract', fieldName: 'Contract' },
                         	{ label: 'Contracted speaker', fieldName: 'Speaker' },
            				{ label: 'Start date', fieldName: 'StartDate', type: 'date-local', sortable: true},
							{ label: 'End date', fieldName: 'EndDate', type: 'date-local'}
                     ]);	
        helper.loadSpeakerEvents(component, event);
        
	},
    
    handleSort: function(cmp, event, helper) {
        var sortedBy = String(event.getParam('fieldName'));
        helper.sortBy(cmp, sortedBy);

    }
})