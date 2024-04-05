({

    checkDealerVisible : function(cmp, event){

        var action = cmp.get("c.getOpportunitySettings");
        action.setParams({
            category: cmp.find("catField").get("v.value"),
            accountid: cmp.get("v.recordId")
        });

        action.setCallback(this, function(result){

            var state = result.getState();
            if (cmp.isValid() && state === "SUCCESS"){
                var resultList = result.getReturnValue();
                //console.log('Dealer list: ' + JSON.stringify(resultList, null, 2));
                var hideDealer = false;

                resultList = resultList.filter(r => r.BrandsList__c.split(";").indexOf(cmp.find("brandField").get("v.value")) != -1);

                if(resultList.length>0){
                    console.log(resultList);
                    if(resultList[0].ShowDistributor__c == false){
                        hideDealer = true;
                    } else {
                        cmp.set("v.isDealerMandatoryOutput", resultList[0].Dealer_Distributor_is_Mandatory__c);
                    }
                }

                cmp.set("v.hideDealer", hideDealer);


                let hideCategory = cmp.get('v.hideCategoryBrand');

                /*if(hideCategory == false){
                        cmp.find('catField').reportValidity();
                        cmp.find('brandField').reportValidity();
                }*/
            }
        });
        $A.enqueueAction(action);
    },

    checkValidity: function(cmp, event){
        
        let hideCategory = cmp.get('v.hideCategoryBrand');

        if(hideCategory == false){
        var categoryInput = cmp.find("catField").get("v.value");
        var brandInput = cmp.find("brandField").get("v.value");

        var hideDealer = cmp.get('v.hideDealer');
        var dealerInput = '';
        if(hideDealer == false){
            dealerInput = cmp.find("dealerField").get("v.value");
        }

        console.log('Category input: ' + categoryInput);

        if(categoryInput == '' || categoryInput == undefined){
            cmp.find('catField').reportValidity();
        }
        else if(brandInput == '' || brandInput == undefined){
            cmp.find('brandField').reportValidity();  
        }

        cmp.set('v.validate', function(){

            if(categoryInput == '' || categoryInput == undefined) {
                cmp.find('catField').reportValidity();
                return { isValid: false, errorMessage: ''};
            }
            else {
                if(brandInput == '' || brandInput == undefined){
                    return { isValid: false, errorMessage: ''};
                }   
                else{ 
                    return { isValid: true};
                }

            }
        })
        }
    },
    checkManualAssignmentVisibility : function(cmp, event){
        var action = cmp.get("c.isManualAssignmentVisible");
        //console.log('action isManualAssignmentVisible',action)
        action.setParams({
            recordId : cmp.get("v.recordId"),
            categoryInput: cmp.get("v.categoryOutput"),
            brandInput: cmp.get("v.brandOutput"),
            dealerId: cmp.get("v.dealerId")
        });
        action.setCallback(this, function(result){
            var state = result.getState();
            if (cmp.isValid() && state === "SUCCESS"){
                cmp.set("v.isManualAssignmentVisible", result.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    retrieveSuggestedUsers : function (cmp, event){
        //console.log('helper retrieveSuggestedUsers starts');
        var action = cmp.get("c.getSuggestedUsers");
        //console.log('action', action);
        //console.log('Record id: ' + cmp.get("v.recordId"));

        let params = {
            accountId:       cmp.get("v.recordId"),
            categoryInput:  cmp.get("v.categoryOutput"),
            brandInput:     cmp.get("v.brandOutput"),
            dealerId:       cmp.get("v.dealerId")
        };

        //console.log("params: " + JSON.stringify(params,null,2));

        action.setParams(params);

        action.setCallback(this, function (result)
        {
            var state = result.getState();
            if (cmp.isValid() && state === "SUCCESS") {
                cmp.set("v.isVisible", true);
                var resultList = result.getReturnValue();
                cmp.set("v.userList", resultList);
                //console.log('result getSuggestedUsers: ' + JSON.stringify(resultList,null,2));

                //Set running user as default for Opportunities
                let runningUserId = $A.get("$SObjectType.CurrentUser.Id");
                cmp.set("v.ChoosenUserId", runningUserId);

                let runningUserIndex = 0;
                if (resultList) {
                    for (var i = 0; i < resultList.length; i++) {
                        if(resultList[i].UserId == runningUserId){
                            resultList[i].isChecked = true;
                            runningUserIndex = i;
                        }
                        else{
                            resultList[i].isChecked = false;
                        }
                    }
                }

                /*let temp = resultList[0];
                resultList[0] = resultList[runningUserIndex];
                resultList[runningUserIndex] = temp;
                console.log(resultList);*/

                let temp = resultList[runningUserIndex];
                resultList.splice(runningUserIndex, 1);
                resultList.unshift(temp);
                //console.log(resultList);
                cmp.set("v.userList", resultList);

            }
        });
        $A.enqueueAction(action);

    }


})