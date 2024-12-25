({
    checkValidity : function(cmp, event) {
        cmp.find('catField').reportValidity();
        cmp.find('dealerField').reportValidity();
    },

    clearDealerLookup : function(cmp, event) {
        var dealerLookupCmp = cmp.find("dealerField");
        if(dealerLookupCmp)
        {
            dealerLookupCmp.clearSelection();
            cmp.set("v.dealerOutput", null);
            cmp.set("v.dealerId", null);
            this.retrieveSuggestedUsers(cmp, event);
        }
    },

    checkDealerVisible : function(cmp, event){

        var action = cmp.get("c.getSalesLeadSettings");
        action.setParams({
            category: cmp.find("catField").get("v.value"),
            country: cmp.get("v.country")
        });

        action.setCallback(this, function(result){

            var state = result.getState();
            if (cmp.isValid() && state === "SUCCESS"){
                var resultList = result.getReturnValue();
                var hideDealer = false;

                resultList = resultList.filter(r => r.BrandsList__c.split(";").indexOf(cmp.find("brandField").get("v.value")) != -1);

                if(resultList.length>0){
                    if(resultList[0].ShowDistributor__c == false){
                        hideDealer = true;
                    } else {
                        cmp.set("v.isDealerMandatoryOutput", resultList[0].Dealer_Distributor_is_Mandatory__c);
                    }
                }

                cmp.set("v.hideDealer", hideDealer);

                cmp.find('catField').reportValidity();
                cmp.find('brandField').reportValidity();
            }
        });
        $A.enqueueAction(action);
    },

    checkValidity: function(cmp, event){
        //cmp.find('catField').reportValidity();
        //cmp.find('brandField').reportValidity();

        console.log("Session storage: " + sessionStorage);
        console.log("Assigning session storage");
        var categoryInput = cmp.find("catField").get("v.value");
        var brandInput = cmp.find("brandField").get("v.value");
        //var buydateInput =  cmp.find("buydateField").get("v.value");
        var userCountryInput =  cmp.find("userCountry").get("v.value");
        var hideDealer = cmp.get('v.hideDealer');
        var dealerInput = '';
        if(hideDealer == false){
            dealerInput = cmp.find("dealerField").get("v.value");
            //sessionStorage.setItem('dealer', dealerInput);
            //sessionStorage.setItem('showDealer', true);
        }else{
            //sessionStorage.setItem('showDealer', false);
        }

        /*sessionStorage.setItem('isCategoryValid',true);
        sessionStorage.setItem('category', categoryInput);
        sessionStorage.setItem('category', categoryInput);
        sessionStorage.setItem('brand', brandInput);
        sessionStorage.setItem('userCountry', userCountryInput);
        sessionStorage.setItem('buyDate', buydateInput);*/

        cmp.set('v.validate', function(){

            if(categoryInput == '') {
                console.log("Missing category");
                if(sessionStorage){
                    sessionStorage.setItem('validationfailed',true);
                    cmp.find('catField').reportValidity();
                }
                return { isValid: false, errorMessage: ''};
            }
            else {
                if(sessionStorage){
                    sessionStorage.setItem('validationfailed',false);
                }
                return { isValid: true};

            }
        })
    },
    checkManualAssignmentVisibility : function(cmp, event){
        var action = cmp.get("c.isManualAssignmentVisible");
        console.log('action isManualAssignmentVisible',action)
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
        console.log('helper retrieveSuggestedUsers starts');
        var action = cmp.get("c.getSuggestedUsers");
        console.log('action', action);

        let params = {
            accountId:       cmp.get("v.recordId"),
            categoryInput:  cmp.get("v.categoryOutput"),
            brandInput:     cmp.get("v.brandOutput"),
            dealerId:       cmp.get("v.dealerId")
        };

        console.log("params: " + JSON.stringify(params,null,2));

        action.setParams(params);

        action.setCallback(this, function (result)
        {
            var state = result.getState();
            if (cmp.isValid() && state === "SUCCESS") {
                cmp.set("v.isVisible", true);
                var resultList = result.getReturnValue();
                cmp.set("v.userList", resultList);
                console.log('result getSuggestedUsers: ' + JSON.stringify(resultList,null,2));

                if (resultList) {
                    for (var i = 0; i < resultList.length; i++) {
                        if (i == 0) {
                            resultList[i].isChecked = true;
                            var selectedMemberId = resultList[i].UserId;
                            cmp.set("v.ChoosenUserId", selectedMemberId);
                        } else {
                            resultList[i].isChecked = false;
                        }
                    }
                }
            }
        });
        $A.enqueueAction(action);

    }


})