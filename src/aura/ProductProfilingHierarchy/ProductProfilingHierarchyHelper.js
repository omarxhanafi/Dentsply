({    

    /*------------------------------------------------------------	
	Description:   	Helper method to check if non-ERP Products are profiled in the related account/contact
    Inputs:			@param recordId
	------------------------------------------------------------*/     
    
    getProfilingData : function(cmp, event, recordId) { 
        	console.log('Launching getProfilingData');
			var action = cmp.get("c.getProductProfilingMap");
        	
            action.setParams({
                recordId : cmp.get("v.recordId")
            });
        	
        	action.setCallback(this, function(response) {

            var state = response.getState();
            if (state === "SUCCESS") {
                var result=response.getReturnValue();
                var data = JSON.parse(JSON.stringify(cmp.get('v.gridWrapperData')));
                
                var selectedRows = cmp.get('v.currentSelectedRows');
                
                for (var prodKey in result){
				
                    for(var key in data){
                        
                        var children = data[key]._children;

                    	for (var childKey in children){
                        	var childId = children[childKey].node.Id
         
                            if(prodKey == childId){
                                
                            	children[childKey].isProfiled = true;
                                children[childKey].isSelected = true;
                            	data[key].isProfiled = true;          
                        	}
                            
                            for(var selectedKey in selectedRows){
                                if(selectedRows[selectedKey].Id == childId){
                                    children[childKey].isSelected = true;
                                }
                            }
                        
                    	}
                        
                    }
					                    
                }
                cmp.set('v.gridWrapperData', data);
                cmp.set('v.gridWrapperFilteredData', data);
                cmp.set('v.productProfilingData', result);   
            }
                
            else if(state === "ERROR")
            {
                console.log('Problem with connection. Please try again.');
            }
                
           
            
        });
        $A.enqueueAction(action);
        
    },
    
    getProductProfilingRecords : function(cmp, event, recordId){
        
        	var action = cmp.get("c.getProductProfiling");
        	
            action.setParams({
                recordId : cmp.get("v.recordId")
            });
        	
        	action.setCallback(this, function(response) {

            var state = response.getState();
            if (state === "SUCCESS") {
                var result=response.getReturnValue();
                cmp.set("v.productProfilingRecords", result);
            }
            });
        	$A.enqueueAction(action);
        
    },
    
    /*------------------------------------------------------------	
	Description:   	Helper method to find non-ERP products and create a parent level based on the found records' category
    Inputs:			@param recordId
	------------------------------------------------------------*/     

	getProductsWithHierarchyNew : function(cmp, event, recordId, SBU) { 
        console.log('Launching getProductsWithHierarchy');
		var action = cmp.get("c.getAllCategories");
            action.setParams({
                recordId : cmp.get("v.recordId"),
                SBU: SBU
            });
        action.setCallback(this, function(response) {
            var state = response.getState();
            var data = cmp.get("v.gridWrapperData");
            var fullData = cmp.get("v.completeDataSet");
            var dataToAdd = [];
            var fullDataToAdd = [];
            var recordsWOCat = [];
            var int = 0;
            var formFactor = $A.get("$Browser.formFactor");            
            var selectedProducts = cmp.get('v.currentSelectedRows');
            
            var expanded = [];
            
            if (state === "SUCCESS") {
                var result=response.getReturnValue();
                var categories = {};
                var categoriesToExpand = {};
                
                console.log('Result length: ' + result.length);
                
                for(var key in result){
                    
                    var recordToAdd = {};
					recordToAdd.nodeName = result[key];
                    recordToAdd.isCat = true;
                    recordToAdd.nodeId = result[key];
                    
                    var childrenToAdd = [];
                    recordToAdd._children = [];
                    
                    dataToAdd.push(recordToAdd);
                    
                }
                
                data = dataToAdd;
                fullData = dataToAdd;
				                    
                //Handle records that do not have a category assigned
                /*if(recordsWOCat.length > 0){
                    
                    var othersCat = {};
                    othersCat.nodeName = "Without Category";
                    othersCat._children = recordsWOCat;
                    dataToAdd.push(othersCat);
                    fullDataToAdd.push(othersCat);
                };*/
                                   
                //data = dataToAdd;
                //fullData = fullDataToAdd;
                
                //Sort node records ascending 
                this.sortTable(cmp, event, true, data, "nodeName");
                this.sortTable(cmp, event, true, fullData, "nodeName");
                
                cmp.set('v.gridWrapperData', data);
                cmp.set('v.gridWrapperFilteredData', data);
                cmp.set('v.expandedRows', expanded);
                cmp.set('v.categories', categories);
                
               	
                //Handle header actions in the first column of the table
                var columns = cmp.get('v.gridWrapperColumns');
				var idx = 0;
                
                for(var col in columns){
	
                    if(columns[col].fieldName == 'nodeName'){
                			idx = col;
            			}
        		}
                
                var actions = [ ];
                
                /*this.getDistinctValues(cmp, event, "Product_Category__c", "v.categories"); 
                
                var categories = cmp.get("v.categories");
                    
                var cat = categories[0];
                	
                for(var i in cat){
                    var actionToAdd = 
                        {label: cat[i], type: 'text', name:cat[i], checked: false, iconName: 'utility:filterList'}
            			;
                    actions.push(actionToAdd);
                }
                this.sortTable(cmp, event, true, actions, "label");
                actions.push({label: 'Show all', type: 'text', name: 'showAll', checked: false});
                actions.unshift({label: 'Expand all', type: 'text', name:'expandAll', checked: false, iconName: 'utility:expand_all'});
                columns[idx].actions = actions;*/
                
                cmp.set('v.gridWrapperColumns', columns);
                  
            }else if(state === "ERROR"){
                console.log('error',response.getError());
                alert('Problem with connection. Please try again.');
            }
         cmp.set('v.showSpinner', false);
         this.preFillhelper(cmp, event);
            
         
        });
		$A.enqueueAction(action);
              
    },

    preFillhelper: function(cmp, event) {
      	console.log('Launching PreFill Helper');
        var expanded = cmp.get('v.expandedRows');
                  
        if(expanded.length>0){
             if(cmp.find('mytree')){
                cmp.find('mytree').set('v.expandedRows', expanded);
             }    
        }          
                
        var selectedRows = cmp.get('v.currentSelectedRows');
        var shownRows = cmp.get('v.gridWrapperFilteredData');
        var records = [];
        var expandedNodes = [];

        if(selectedRows.length > 0){

            for(var i in selectedRows){
				
                //Check if selected row is currently displayed in the table
                var getElementIndex = shownRows.indexOf(selectedRows);
                if(getElementIndex == -1){
                	records.push(selectedRows[i].Id);
                    //expandedNodes.push(selectedRows[i].Product_Category__c);
                }    
            }	
            
            if(cmp.find('mytree')){
                cmp.find('mytree').set('v.selectedRows', records);
                //cmp.find('mytree').set('v.expandedRows', expandedNodes);
            }
        
        }

        
    },

    getDistinctValues: function(cmp, event, fieldName, varToAssign){
        
       var action = cmp.get("c.getDistinctValues");
       var recordId = cmp.get("v.recordId"); 
       action.setParams({
           		field_name: fieldName,
           		recordId: recordId
            });
        action.setCallback(this, function(response) {
        	var result=response.getReturnValue();
            var plList = [];
            var plDef = {};
            plDef.label="";
            plDef.value="";
            plList.push(plDef);
            for(var res in result){
                var plVal = {};
                plVal.label = result[res];
                plVal.value = result[res];
                plList.push(plVal);
            }
			
            //Sort values ascending
            this.sortTable(cmp, event, true, plList, "label"); 
            cmp.set(varToAssign, plList);
            
        });
        $A.enqueueAction(action);
        
    },
    
    getSBUs: function(cmp, event, fieldName, varToAssign){
        
       var action = cmp.get("c.getSBUs");
       var recordId = cmp.get("v.recordId"); 
       action.setParams({
           		recordId: recordId
            });
        action.setCallback(this, function(response) {
        	var result=response.getReturnValue();
            var plList = [];
            var plDef = {};
            plDef.label="";
            plDef.value="";
            plList.push(plDef);
            for(var res in result){
                var plVal = {};
                plVal.label = result[res];
                plVal.value = result[res];
                plList.push(plVal);
            }
			
            //Sort values ascending
            this.sortTable(cmp, event, true, plList, "label"); 
            cmp.set(varToAssign, plList);
            
        });
        $A.enqueueAction(action);
        
    },

    getManufacturers: function(cmp, event, fieldName, varToAssign, SBU){

        var action = cmp.get("c.getManufacturers");
        var recordId = cmp.get("v.recordId");
        action.setParams({
            recordId: recordId,
            SBU: SBU
        });
        action.setCallback(this, function(response) {
            var result=response.getReturnValue();
            var plList = [];
            var plDef = {};
            plDef.label="";
            plDef.value="";
            plList.push(plDef);
            for(var res in result){
                var plVal = {};
                plVal.label = result[res];
                plVal.value = result[res];
                plList.push(plVal);
            }

            //Sort values ascending
            this.sortTable(cmp, event, true, plList, "label");
            cmp.set(varToAssign, plList);

        });
        $A.enqueueAction(action);

    },

    getWorkflows: function(cmp, event, varToAssign){

        var action = cmp.get("c.getWorkflows");
        var recordId = cmp.get("v.recordId");
        action.setParams({
            recordId: recordId,
        });
        action.setCallback(this, function(response) {
            var result=response.getReturnValue();
            var plList = [];
            var plDef = {};
            plDef.label="";
            plDef.value="";
            plList.push(plDef);

            for(var res in result){
                var plVal = {};
                plVal.label = result[res].WorkflowLabel__c;
                plVal.value = result[res].Id;
                plList.push(plVal);
            }

            //Sort values ascending
            this.sortTable(cmp, event, true, plList, "label");
            cmp.set(varToAssign, plList);
        });
        $A.enqueueAction(action);

    },
    
    getLocalCategories: function(cmp, event, fieldName, varToAssign, SBU, manufacturer){
        
       var action = cmp.get("c.getLocalCategories");
       var recordId = cmp.get("v.recordId"); 
       action.setParams({
           		recordId: recordId,
           		SBU: SBU,
           		manufacturer: manufacturer,
            });
        action.setCallback(this, function(response) {
        	var result=response.getReturnValue();
            var plList = [];
            var plDef = {};
            plDef.label="";
            plDef.value="";
            plList.push(plDef);
            for(var res in result){
                var plVal = {};
                plVal.label = result[res];
                plVal.value = result[res];
                plList.push(plVal);
            }
			
            //Sort values ascending
            this.sortTable(cmp, event, true, plList, "label"); 
            cmp.set(varToAssign, plList);
            
        });
        $A.enqueueAction(action);
        
    },
   
    sortTable : function(cmp, event, sortAsc, dataSet, sortField){
                	try{
                    	dataSet.sort(function(a,b){
						var t1 = a[sortField] == b[sortField],
                			t2 = a[sortField] > b[sortField];
            				return t1? 0: (sortAsc?-1:1)*(t2?-1:1);                        
                    	})
                		}
                	catch(e){
                    	console.error(e);
                	}   
    },
    
    /*------------------------------------------------------------	
	Description:   	Helper method to find non-ERP products and create a parent level based on the found records' category
    Inputs:			@param recordId
	------------------------------------------------------------*/     
    
    getChildProductsServer : function(cmp, event, recordId, category, manufacturer, searchString, nodeName, competitor, focus, localcat, workflow) {
        console.log('Launching getChildProducts');
        cmp.set('v.showSpinner', true);
                
        if(nodeName == null){
            nodeName = '';
        }
                    
		var action = cmp.get("c.getChildProducts");
            action.setParams({
                recordId : cmp.get("v.recordId"),
                node : nodeName,
                manufacturer : manufacturer,
                searchString : searchString,
                category: category,
                competitor: competitor,
                focus: focus,
                localcat : localcat,
                workflow : workflow
            });
        action.setCallback(this, function(response) {
            var state = response.getState();
            var data = cmp.get("v.gridWrapperData");
            var dataToAdd = [];
            var filteredData = [];
            var categories = {};
            var recordsWOCat = [];
            var int = 0;
            var catCount = 0;
            var formFactor = $A.get("$Browser.formFactor");            
            var selectedProducts = cmp.get('v.currentSelectedRows');
            var manufacturerSet = {};

            var expanded = [];
            
            if (state === "SUCCESS") {
                var result=response.getReturnValue();
                //Find all categories
                for(var prodKey in result){					   
					var cat = result[prodKey].node.ProductFamily__r.Name;
                    categories[cat] = cat;
                }

                for(var catKey in categories){
                    
                    var categ= categories[catKey];
                	var recordToAdd = {};
                
                    for(var cat in data){
                        if(data[cat].nodeName == categ){ 	
                               recordToAdd = data[cat];
                            
                            if(manufacturer != '' || workflow != '' || localcat != '' || searchString != '' || nodeName != '' || focus != false || competitor != false){
                               expanded.push(categ);	
                            }
                            else{
                                catCount = catCount +1;
                            }

                        }
                    }
                                
                    var childrenToAdd = [];
                    
                    var selectedRows = cmp.get("v.currentSelectedRows");
                    
                    var profiledRows = cmp.get("v.productProfilingRecords");
                    
					for(var key in result){					   
                       var record = result[key];
                       record.competitor = record.node.Competitor_Product__c;
					   record.focusProduct = record.node.KeyProduct__c;
                       record.SBU = record.node.ProductGroupText__c; 
                       record.isCat = false; 
                       record.nodeId = record.node.Id;
                       record.manufacturer = record.node.Manufacturer__c;
                       manufacturerSet[record.manufacturer] = record.manufacturer; 
                       record.category =  record.node.ProductFamily__r.Name;
                        
                        for(var k in selectedRows){
                            if(selectedRows[k].Id == record.nodeId){
                                record.isSelected = true;
                            }
                        }
                        
                        for(var n in profiledRows){
                            if(profiledRows[n].Product_Name__c == record.nodeId){
                                record.isProfiled = true;
                            }
                        }
                        
                        if(record.category == categ){
                       		childrenToAdd.push(record);
                        }    
                                                                   
                   }
                    
				   recordToAdd._children = childrenToAdd;

                   //Sort child records ascending 
                   this.sortTable(cmp, event, true, childrenToAdd, "nodeName");                                 
				  	                
                  //Add children as records
                   dataToAdd.push(recordToAdd);
                   filteredData.push(recordToAdd);
                   data[categ] =  dataToAdd;
                }
                
   				//Expand children if only one category is included             
                if(catCount == 1){
                    for(var i in categories){
                    	expanded.push(categories[i]);
                    }    
                }
                                
                //Sort node records ascending 
                this.sortTable(cmp, event, true, data, "nodeName");
                this.sortTable(cmp, event, true, filteredData, "nodeName");
                   
                cmp.set('v.gridWrapperData', data);
                
                if(searchString.length>1 || category != '' || manufacturer != '' || workflow != '' || localcat != ''){
                    cmp.set('v.gridWrapperFilteredData', filteredData);
                    
                    if(manufacturer == ''){
                        var manufacturers = [];
                        var mDef = {};
                        mDef.label = '';
                        mDef.value = '';
                        manufacturers.push(mDef);
                        
                        for(var k in manufacturerSet){
                            var m = {};
                            m.label = manufacturerSet[k];
                            m.value = manufacturerSet[k];
                            manufacturers.push(m);
                        }
                        this.sortTable(cmp, event, true, manufacturers, "label");
                        cmp.set('v.manufacturers', manufacturers);
                    }
                    
                    if(localcat == ''){
                        var localcategories = [];
                        
                        var lDef = {};
                        lDef.value='';
                        lDef.label='';
                        localcategories.push(lDef);
                        
                        for(var n in categories){
                            var l = {};
                            l.value = categories[n];
                            l.label = categories[n];
                            localcategories.push(l);
                        }
                        this.sortTable(cmp, event, true, localcategories, "label");
                        cmp.set('v.localCategories', localcategories);
                    }
                    
                }
                else if(searchString.length==0){
                    cmp.set('v.gridWrapperFilteredData', data);
                }
                console.log('Expanded: ' + expanded);
                cmp.set('v.expandActionLaunched', true);
                cmp.set('v.expandedRows', expanded);
                cmp.find("accordion").set('v.activeSectionName', expanded);
                cmp.set('v.expandActionLaunched', false);
                cmp.set('v.showSpinner', false);
                                  
            }else if(state === "ERROR"){
                console.log('error',response.getError());
                alert('Problem with connection. Please try again.');
            }
            
         //this.preFillhelper(cmp, event);   
         
        });
		$A.enqueueAction(action);        
    },
    
})