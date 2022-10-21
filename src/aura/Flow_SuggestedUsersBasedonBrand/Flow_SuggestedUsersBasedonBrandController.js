({
    init : function(cmp, event, helper) {
       	if(sessionStorage){
            console.log('Validation log: ' + sessionStorage);
            
            console.log('Validation check: ' + sessionStorage.getItem('validationfailed'));
            if(sessionStorage.getItem('validationfailed')){
                console.log('Session storage true');
                if(sessionStorage.getItem('isCategoryValid')){
					
                    if(sessionStorage.getItem('category')!=null){
            	        cmp.find('catField').set('v.value',sessionStorage.getItem('category'));
           	     	}
                    if(sessionStorage.getItem('brand')!=null){
                        cmp.find('brandField').set('v.value',sessionStorage.getItem('brand'));
                    }

                    /*if(sessionStorage.getItem('buyDate')!='undefined' && sessionStorage.getItem('buyDate')!='null'){
                        cmp.find('buydateField').set('v.value',sessionStorage.getItem('buyDate'));
                    }*/
					if(sessionStorage.getItem('showDealer')==true){
                        cmp.find('dealerField').set('v.value',sessionStorage.getItem('dealer'));
                    }    
                    //Submit form to store values if the user does not do any changes
					$A.enqueueAction(cmp.get('c.submitTest'));
                }
       		}
        }
        
        helper.checkDealerVisible(cmp, event);
                          
       	helper.checkValidity(cmp, event);
             
	},
    
    submitForm : function(cmp, event, helper) {    
        var categoryOutput = cmp.find("catField").get("v.value");
        
        if(categoryOutput != ''){
        	helper.checkDealerVisible(cmp, event);
		   
        	var brandOutput = cmp.find("brandField").get("v.value");
            var subCategoryOutput = cmp.find("subCatField").get("v.value");
            
            cmp.set("v.categoryOutput", categoryOutput);
        	cmp.set("v.brandOutput", brandOutput);
            cmp.set("v.subCategoryOutput", subCategoryOutput);
            
            var objType = cmp.get("v.objType");
            var buydateOutput = null;
            if(objType != 'Opportunity'){
                buydateOutput = cmp.find("buydateField").get("v.value");
            }
            var hideDealer = cmp.get("v.hideDealer");
            if(hideDealer == false){
            	var dealerOutput = cmp.find("dealerField").get("v.value");
                console.log('Dealer: ', dealerOutput);
            }
            if(buydateOutput != null){
                cmp.set("v.buydateOutput", buydateOutput);
            }    
            if(dealerOutput != null){
            	//cmp.set("v.dealerOutput", dealerOutput);
            }    
        	console.log("The following values are assigned: Category - " + cmp.get("v.categoryOutput"));
        	helper.checkValidity(cmp, event);
        } else {
            //When no Category return null.
            cmp.set("v.categoryOutput", null);
        	cmp.set("v.brandOutput", null);
        }
          cmp.set("v.isManualAssignmentChecked",false);
          helper.checkManualAssignmentVisibility(cmp, event);
          var action = cmp.get("c.getSuggestedUsers");
          console.log('action',action)
          action.setParams({
            recordId : cmp.get("v.recordId"),
            categoryInput: cmp.get("v.categoryOutput"),
            brandInput: cmp.get("v.brandOutput"),
            dealerId: cmp.get("v.dealerId")
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (cmp.isValid() && state === "SUCCESS"){
                cmp.set("v.isVisible", true);
                var resultList = result.getReturnValue();                
                cmp.set("v.userList", resultList);
                console.log('resultList',resultList);
                for(var i=0 ; i<=resultList.length ; i++){
                    if(i == 0){
                        resultList[i].isChecked = true; 
                        var selectedMemberId = resultList[i].UserId;
                        cmp.set("v.ChoosenUserId", selectedMemberId);
                    }else{
                        resultList[i].isChecked = false; 
                    }
                }
               
            }
        });
        $A.enqueueAction(action);
        
    },
    
  
    
    submitDealer : function(cmp, event, helper) {
        var data = event.getParam('data');
        var dataString = JSON.stringify(data);
        if(dataString != '[]'){
            var dealerId = data[0].id;            
            cmp.set("v.dealerOutput", dealerId);
            helper.checkValidity(cmp, event);
        }
        else{
            cmp.set("v.dealerOutput", null);  
        }
        
    },
    
    doInit : function(component, event, helper) {
    },

    handleSelectedContacts: function(component, event, helper) {
     	var selectedMemberId;
        var checkboxes = document.getElementsByName('checkbox');
        var selectedMemberId = event.target.id;
        
        for(var i = 0; i < checkboxes.length; i++){
            var checkbox = checkboxes[i];
            checkbox.checked = checkbox.id === selectedMemberId;
        }
        component.set("v.ChoosenUserId", selectedMemberId);
	},

    testlookup : function(component, event, helper) {
          var userId = event.getParam("value")[0];
          console.log('userId',userId);
          component.set("v.ChoosenUserId", userId);
    },

    getToggleButtonValue : function(component, event, helper) {
        var isManualAssignmentChecked = component.find("isManualAssignmentNeeded").get("v.checked");
        component.set("v.isManualAssignmentChecked",isManualAssignmentChecked);
    }

})