({

    /*------------------------------------------------------------	
	Description:   	Init method to collect all non-ERP records active in the user's market,
    				and then check whether these products are profiled in the related account/contact
	------------------------------------------------------------*/    
    
init: function (cmp, event, helper) {
        cmp.set('v.showSpinner', true);    	

		var focusActions = [
            {label: 'Focus products', type: 'text', name:'focus', iconName:"utility:filterList", checked: cmp.get('v.focusFilter')},
            {label: 'Show all', type: 'text', name:'all', checked: false}
            ];
    	var competitorActions = [
            {label: 'DentsplySirona products', type: 'text', iconName:"utility:filterList", name:'focus'},
            {label: 'Show all', type: 'text', name:'all'}
            ];    
        	
    	cmp.set('v.gridWrapperColumns', 
            [
            {label: 'Product name', fieldName: 'nodeName', type: 'text'},
            {label: 'Focus product?', fieldName: 'focusProduct', type: 'boolean', actions: focusActions},
            {label: 'Manufacturer', fieldName: 'manufacturer', type: 'text', actions: competitorActions},
            {label: 'Product Group', fieldName: 'SBU', type: 'text'},    
            {label: 'Added?', fieldName: 'isProfiled', type: 'boolean'},
        ]);

  	   	var record = cmp.get("v.recordId");
		
		helper.getProductsWithHierarchyNew(cmp, event, record, '');
        helper.getProfilingData(cmp, event, record);
    	helper.getSBUs(cmp, event, "ProductGroupText__c", "v.options");
        helper.getWorkflows(cmp, event, "v.workflows");
        helper.getManufacturers(cmp, event, "Manufacturer__c", "v.manufacturers", '');
        helper.getLocalCategories(cmp, event, "Product_Category__c", "v.localCategories", '', '');
        helper.getProductProfilingRecords(cmp, event, record);

        var selectedProducts = cmp.get("v.currentSelectedRows");
        var productsWrapper = [];
                
        var rowsCount = 0;        
    
    	for(var prod in selectedProducts){
 			            
            var bundl = {};
            bundl.productId = selectedProducts[prod].Id;
            bundl.productName = selectedProducts[prod].Name;
            bundl.manufacturerName = selectedProducts[prod].Manufacturer__c;
            
            productsWrapper.push(bundl);
            rowsCount++;
           
    	}
    	cmp.set('v.currentSelectedRowWrapper', productsWrapper);
    	cmp.set('v.currentSelectedRowsCount', rowsCount);
                
        var formFactor = $A.get("$Browser.formFactor");            
            
        if(formFactor != 'DESKTOP'){
           //$A.enqueueAction(cmp.get('c.getRowsMobile'));
       	}
        else{
           cmp.set("v.hideFilters", false);
           $A.enqueueAction(cmp.get('c.getSelectedRows'));
        }             
    },
    
    /*------------------------------------------------------------	
	Description:   	Method to handle row selection
	------------------------------------------------------------*/    
        
    getSelectedRows: function(cmp, event, helper) {
        console.log('Launching getSelectedRows');

        var treeGridCmp = cmp.find('mytree');
        
        var selected = treeGridCmp.getSelectedRows();

        var products = cmp.get('v.currentSelectedRows');
                
        var currentView = cmp.get('v.gridWrapperFilteredData');
                
        var selectionMap = cmp.get("v.selectionMap");
                
        var selectedProductsNotInCurrentView = [];
                
        var currentViewArray = [];
        
        //Map of currently shown products
    	for(var currentProd in currentView){
        	var childRecords = currentView[currentProd]._children;
            for(var currentProdChild in childRecords){
                currentViewArray[childRecords[currentProdChild].node.Id] = childRecords[currentProdChild].node;
            }
            
    	}
            
    	//Map of selected rows in total
    	for(var prod in products){  
    		var selProductId = products[prod].Id;
    		selectionMap[selProductId] = products[prod];
        }
    	
    	var notShownSelectedProducts = [];
    
    	//Find all selected products that are not shown currently

    	for(var prod in products){
            var shownSelectedProduct = currentViewArray[products[prod].Id];
            if(shownSelectedProduct == undefined){
                notShownSelectedProducts.push(products[prod]);
            }
            
    	}    	 
    	    
        var expanded = treeGridCmp.getCurrentExpandedRows();
    
    	var selectedProductsInView = [];

        for(var row in selected){
               
            if(selected[row].isProfiled == true || selected[row].isCat == true){                
                
                if(selected[row].isCat == true){
                	alert("Sorry! You cannot add a category as a product profiling."); 
                }  
                else{
                    alert("Oops! This product has already been profiled.");
                }
                
            }
            else{
                var idToCheck = selected[row].node.Id;
				
				//Only add value in case it hasn't been added before                
                if(selectionMap[idToCheck] == undefined){                    
                        products.push(selected[row].node);
                }
                
                selectedProductsInView.push(selected[row].node);
                
                //Add all selected products in the current view to the list of not shown but selected products
                notShownSelectedProducts.push(selected[row].node);
            }
        }
		
        //cmp.find('mytree').set('v.expandedRows', expanded);
        cmp.set('v.currentSelectedRows', notShownSelectedProducts);
    	//helper.preFillhelper(cmp, event);
    
    	var productsWrapper = [];
        
        var rowsCount = 0;
    
    	for(var prod in notShownSelectedProducts){
 			            
            var bundl = {};
            bundl.productId = notShownSelectedProducts[prod].Id;
            bundl.productName = notShownSelectedProducts[prod].Name;
            
            productsWrapper.push(bundl);
            rowsCount++;
           
    	}
    	cmp.set('v.currentSelectedRowWrapper', productsWrapper);
        cmp.set('v.currentSelectedRowsCount', rowsCount);
    		
    },
    
   /*------------------------------------------------------------	
	Description:   	Method to get all selected rows in the mobile experience
	------------------------------------------------------------*/ 
    
        getRowsMobile : function(cmp, event, helper){
        console.log('Get rows mobile');
        var val = event.getSource().get("v.value");
        var selected = event.getSource().get("v.checked");
            
        var products = cmp.get('v.currentSelectedRows');
                        
        var currentView = cmp.get('v.gridWrapperFilteredData');
                                                            
        var currentViewArray = {};
        
        //Map of currently shown products
    	for(var currentProd in currentView){
        	var childRecords = currentView[currentProd]._children;
            for(var currentProdChild in childRecords){
                var childId = childRecords[currentProdChild].node.Id;
                currentViewArray[childId] = childRecords[currentProdChild].node;
            }
            
    	}
        var notShownSelectedProducts = [];
                                    
        if(selected == true){
            val.node.isSelected = true;
        	products.push(val.node);
        }
        else{
            for(var i in products){
                if(products[i].Id == val.node.Id){
                    products.splice(i, 1);
                }
            }   
        }
            
        for(var prod in products){
            notShownSelectedProducts.push(products[prod]);
        }       
                	            
        cmp.set('v.currentSelectedRows', notShownSelectedProducts);
            
        var productsWrapper = [];
        var rowsCount = 0;    
        
       for(var prod in notShownSelectedProducts){
 			            
            var bundl = {};
            bundl.productId = notShownSelectedProducts[prod].Id;
            bundl.productName = notShownSelectedProducts[prod].Name;
           	bundl.manufacturerName = notShownSelectedProducts[prod].Manufacturer__c;
            bundl.productFamilyLabel = notShownSelectedProducts[prod].ProductFamily__r.ProductFamilyLabel__c;
            
            productsWrapper.push(bundl);
            rowsCount++;
    	}    
                        
    	cmp.set('v.currentSelectedRowWrapper', productsWrapper);    
        cmp.set('v.currentSelectedRowsCount', rowsCount);
    },
 
    
    /*------------------------------------------------------------	
	Description:   	Method to expand all rows in the table
	------------------------------------------------------------*/ 
    
        expandAllRows: function(cmp, event) {
        var tree = cmp.find('mytree');
        if(tree){
            tree.expandAll();
        }
        else{
        	var shownRecords = cmp.get("v.gridWrapperFilteredData");
            var expanded = [];
            
            for(var i in shownRecords){
                if(shownRecords[i].isCat == true){
                    expanded.push(shownRecords[i].nodeName);
                }
            }
            cmp.set('v.expandedRows', expanded);
            
        }    
    },
    
    /*------------------------------------------------------------	
	Description:   	Method to collapse all rows in the table
	------------------------------------------------------------*/ 
    
        collapseAllRows: function(cmp, event) {
        var tree = cmp.find('mytree');
        tree.collapseAll();
    },
        
    /*------------------------------------------------------------	
	Description:   	Method to find records in the data table based on multiple filters
	------------------------------------------------------------*/      
        
    filterTable : function(cmp, event, helper){
		console.log('Launching filter table');        

        var filter = helper.createFilterObject(cmp, event);

        console.log('filter', filter);

        if((filter.manufacturer != '' && filter.focus == false && filter.competitor == false) || filter.searchString.length > 1 || filter.workflow != '' || filter.competitor != false || filter.focus != false){
            cmp.set("v.disableCollapse", false);
            helper.getChildProductsServer(cmp, event,'','',filter.manufacturer,filter.searchString,'',filter.competitor,filter.focus,'', filter.workflow);
        }
        else if(filter.searchString.length == 0){
            var completeData = cmp.get('v.gridWrapperData');
            var expanded = [];

            helper.getManufacturers(cmp, event, "Manufacturer__c", "v.manufacturers", '');

            cmp.set("v.disableCollapse", true);
            cmp.set('v.expandedRows', expanded);
            cmp.set('v.gridWrapperFilteredData', completeData);
            if(cmp.find('mytree')){
                cmp.find('mytree').set('v.expandedRows', expanded);
            }
        }
    },
    
    goToProduct: function(cmp, event){
        var navService = cmp.find("navService");
        
        if(event.currentTarget.id != ''){
            
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: event.currentTarget.id,
                objectApiName: 'Non_ERP_Products__c',
                actionName: 'view'
            }
        };    
        event.preventDefault();
        navService.navigate(pageReference);
        }
    },

	handleHeaderAction: function(cmp, event, helper){    
        // gives the selection header action name
        var actionName = event.getParam('action').name;      
        // gives selected column definition
    	var colDef = event.getParam('columnDefinition');
       	// assigning columns to new variable
    	var column = colDef.fieldName;
		var columns = cmp.get('v.gridWrapperColumns');
        var len = columns.length;
        var idx = 0;        
        
       	if (actionName !== undefined) {

            if(column == 'focusProduct'){
                
                 //Get index of the Focused column
                	for(var col in columns){
            			if(columns[col].fieldName == 'focusProduct'){
                			idx = col;
            			}
        			}
                
                //Get action within the Focused column
            	var focusActions = columns[idx].actions;               
                focusActions.forEach(function (action) {
                	action.checked = action.name === actionName;
            	});
                  
                //Check which action that was selected
                	if(actionName == 'all'){
                  		cmp.find('focusFilter').set('v.checked', false);
                    	cmp.set('v.activeFocusFilter', actionName);
     
                	}
                	else{
                    	cmp.find('focusFilter').set('v.checked', true);
                    	cmp.set('v.activeFocusFilter', actionName);
                	}               
               	  	$A.enqueueAction(cmp.get('c.filterTable'));
            }
            
            if(column == 'manufacturer'){
                //Get index of the Competitor column
                for(var col in columns){
            			if(columns[col].fieldName == 'competitor'){
                			idx = col;
            			}
        		}
                
                //Get available action on the Competitor column
                var compActions = columns[idx].actions;                
                compActions.forEach(function (action) {
                	action.checked = action.name === actionName;
            	});
                
                	//Check which action that was selected
                	if(actionName == 'all'){
                   	 	cmp.find('competitorFilter').set('v.checked', false);
                    	cmp.set('v.activeCompetitorFilter', actionName);
                	}
                	else{
                		cmp.find('competitorFilter').set('v.checked', true);
                    	cmp.set('v.activeCompetitorFilter', actionName);
                	}
                	$A.enqueueAction(cmp.get('c.filterTable'));
            }
            
            if(column == 'nodeName'){
                if(actionName == 'expandAll'){
                    $A.enqueueAction(cmp.get('c.expandAllRows'));
                }
                if(actionName == 'showAll'){
                    cmp.find('categoryFilter').set('v.value', '');
                    $A.enqueueAction(cmp.get('c.filterTable'));
                }
				
                var categories = cmp.get("v.categories");
                
                //Iterate through all categories
                for(var i in categories){
                	if(actionName == categories[i].value){
                    	cmp.find('categoryFilter').set('v.value', actionName);
                    	$A.enqueueAction(cmp.get('c.filterTable'));
                	}
                }    
                
            }
                
        
            cmp.set('v.gridWrapperColumns', columns);
        
        }
        
        
    },
    
    getChildren : function(cmp, event, helper){
        console.log('Expand/collapse');
        var expandActionLaunched = cmp.get('v.expandActionLaunched');
      	var rowName = event.getParam('name');
        var hasChildrenContent = event.getParam('hasChildrenContent');
        
        //Avoid recursion when records are found and sections are expanded
        if(expandActionLaunched == false){
        
        //Handle Mobile
        var openSections = event.getParam('openSections');
        console.log('Open sections? : ' + openSections);

        if(openSections){

            var filter = helper.createFilterObject(cmp, event);

            if(filter.searchString == '' && filter.manufacturer == '' && filter.focus == false && filter.competitor == false && filter.workflow == ''){
                var prevOpenSections = cmp.get("v.prevExpandedRows");
                for(var sectionKey in openSections){
                    var section = openSections[sectionKey];
                    
                    var existInList = false;
                    for(var prevSectionKey in prevOpenSections){
                        var prevSection = prevOpenSections[prevSectionKey];
                        if(prevSection == section){
                            existInList = true;
                        }
                    }
                    
                    if(section == null){
                        section = '';
                    }
                    if(existInList == false){
                        helper.getChildProductsServer(cmp, event, '','','','',section,filter.competitor,filter.focus,'', filter.workflow);
                    }
                }
                cmp.set("v.prevExpandedRows", openSections);
            }     
        }    
            
        }
    },
    
    searchKeyChange : function(component, event, helper) {
        
        var searchFilter = component.find('searchBox').get('v.value');
        console.log('Launching Search input: ' + searchFilter);
        
        var timer = component.get('v.timer');
        clearTimeout(timer);

        timer = setTimeout($A.getCallback(function(){
            var a = component.get('c.searchChildren');
            $A.enqueueAction(a);
        	}), 500);

        component.set('v.timer', timer);
    },
     
    searchChildren : function(cmp, event, helper){
        var searchFilter = cmp.find('searchBox').get('v.value');
        searchFilter = searchFilter.trim();

        cmp.set('v.showSpinner', true);

        //Check for any filterings
        var filter = helper.createFilterObject(cmp, event);
        
        if(searchFilter.length>1){
            cmp.set("v.disableCollapse", false);
            helper.getChildProductsServer(cmp, event, '','', filter.manufacturer, searchFilter,'', filter.competitor, filter.focus,'', filter.workflow);
        }
        else if((filter.manufacturer != '' && filter.focus == false && filter.competitor == false) || filter.focus == true || filter.competitor == true|| filter.workflow != ''){
            cmp.set("v.disableCollapse", false);
            searchFilter = '';
            helper.getChildProductsServer(cmp, event, '','',filter.manufacturer, searchFilter,'', filter.competitor, filter.focus,'', filter.workflow);
        }
        else if(searchFilter.length == 0){
            console.log('Resetting data');
            cmp.set("v.disableCollapse", true);

            var expanded = [];
            cmp.set('v.expandActionLaunched', true);
           	cmp.set('v.expandedRows', expanded);
            cmp.set('v.expandActionLaunched', false);
            
            var completeData = cmp.get('v.gridWrapperData');
            cmp.set('v.gridWrapperFilteredData', completeData);
            helper.getSBUs(cmp, event, "ProductGroupText__c", "v.options");
    		helper.getManufacturers(cmp, event, "Manufacturer__c", "v.manufacturers", '');
        	helper.getLocalCategories(cmp, event, "Product_Category__c", "v.localCategories", '', '');

            if(cmp.find('mytree')){
                var expanded = [];
            	cmp.set('v.expandedRows', expanded);
            	cmp.find('mytree').set('v.expandedRows', expanded);
            }
            cmp.set('v.showSpinner', false);
        }
        

    },
        
    changeFilterDisplay : function(cmp, event, helper){
        var hideFilters = cmp.get("v.hideFilters");
        //alert('Hide filters?: ' + hideFilters);
        if(hideFilters == false){
            cmp.set("v.hideFilters", true);
        }
        else{
           cmp.set("v.hideFilters", false); 
        }
    },
    
    changeSelectionDisplay : function(cmp, event, helper){
        var hideSelection = cmp.get("v.hideSelection");
        console.log('Show/hide selection');
        if(hideSelection == false){
            cmp.set("v.hideSelection", true);
        }
        else{
           cmp.set("v.hideSelection", false); 
        }
    },

    deleteSelectedProduct : function(cmp, event, helper){
        console.log('Delete ' + event.getSource().get("v.value"));

        var prodId = event.getSource().get("v.value");

        var selProdWrapper = cmp.get('v.currentSelectedRowWrapper');
        var selectedProducts = cmp.get('v.currentSelectedRows');
        var prodCount = cmp.get('v.currentSelectedRowsCount');
        for(var prod in selProdWrapper){
            if(selProdWrapper[prod].productId == prodId){
                selProdWrapper.splice(prod, 1);
                prodCount = prodCount -1;
            }
        }

        for(var p in selectedProducts){
            if(selectedProducts[p].Id == prodId){
                selectedProducts.splice(p, 1);
            }
        }


        cmp.set('v.currentSelectedRows', selectedProducts);
        cmp.set('v.currentSelectedRowWrapper', selProdWrapper);
        cmp.set('v.currentSelectedRowsCount', prodCount);

        $A.enqueueAction(cmp.get('c.filterTable'));
    },

    toggleCollapseAll : function(cmp, event, helper){
        var expandedRows = cmp.get('v.expandedRows');
        var gridWrapperFilteredData = cmp.get('v.gridWrapperFilteredData');

        if(expandedRows.length > 0){
            cmp.set('v.expandedRows', []);
        } else {
            var filter = helper.createFilterObject(cmp, event);

            if(filter.searchString != '' || filter.manufacturer != '' || filter.focus == true || filter.competitor == true || filter.workflow != ''){
                gridWrapperFilteredData.forEach(function(item) {
                    expandedRows.push(item.nodeName);
                });

                cmp.set("v.expandedRows", expandedRows);
            }
        }

    },


           
})