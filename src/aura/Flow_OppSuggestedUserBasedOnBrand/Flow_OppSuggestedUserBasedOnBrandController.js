({
    /**
     * Init Function
     * @author naoussar@salesforce.com | 23-09-2022
     *
     * @param event     Event captured
     * @param helper    Helper Class
     */
    init: function (cmp, event, helper) {

        if (sessionStorage) {

            if (sessionStorage.getItem('validationfailed')) {
                if (sessionStorage.getItem('isCategoryValid')) {

                    if (sessionStorage.getItem('category') != null) {
                        cmp.find('catField').set('v.value', sessionStorage.getItem('category'));
                    }
                    if (sessionStorage.getItem('brand') != null) {
                        cmp.find('brandField').set('v.value', sessionStorage.getItem('brand'));
                    }

                    /*if(sessionStorage.getItem('buyDate')!='undefined' && sessionStorage.getItem('buyDate')!='null'){
                        cmp.find('buydateField').set('v.value',sessionStorage.getItem('buyDate'));
                    }*/
                    if (sessionStorage.getItem('showDealer') == true) {
                        cmp.find('dealerField').set('v.value', sessionStorage.getItem('dealer'));
                    }
                    //Submit form to store values if the user does not do any changes
                    $A.enqueueAction(cmp.get('c.submitTest'));
                }
            }
        }

        helper.checkDealerVisible(cmp, event);

        helper.checkValidity(cmp, event);

        if(cmp.get("v.brand") != null){
            var a = cmp.get('c.submitForm');
            $A.enqueueAction(a);
        }
        if(cmp.get("v.hideCategoryBrand") === true){
            //var h = cmp.get('c.hideCategoryBrandFields');
            //$A.enqueueAction(h);
            cmp.set("v.categoryBrandClass", "slds-hide");
        }

    },

    /**
     * @author naoussar@salesforce.com | 23-09-2022
     *
     * @param event     Event captured
     * @param helper    Helper Class
     */
    submitForm: function (cmp, event, helper) {
        var categoryOutput = cmp.find("catField").get("v.value");

        if (categoryOutput != '') {
            helper.checkDealerVisible(cmp, event);

            var brandOutput = cmp.find("brandField").get("v.value");
            var subCategoryOutput = cmp.find("subCatField").get("v.value");

            cmp.set("v.categoryOutput", categoryOutput);
            cmp.set("v.brandOutput", brandOutput);
            cmp.set("v.subCategoryOutput", subCategoryOutput);

            var objType = cmp.get("v.objType");
            var buydateOutput = null;
            if (objType != 'Opportunity') {
                buydateOutput = cmp.find("buydateField").get("v.value");
            }
            var hideDealer = cmp.get("v.hideDealer");
            if (hideDealer == false) {
                var dealerOutput = cmp.find("dealerField").get("v.value");
                console.log('Dealer: ', dealerOutput);
            }
            if (buydateOutput != null) {
                cmp.set("v.buydateOutput", buydateOutput);
            }
            if (dealerOutput != null) {
                //cmp.set("v.dealerOutput", dealerOutput);
            }
            console.log("The following values are assigned: Category - " + cmp.get("v.categoryOutput"));
            helper.checkValidity(cmp, event);
        } else {
            //When no Category return null.
            cmp.set("v.categoryOutput", null);
            cmp.set("v.brandOutput", null);
        }

        cmp.set("v.isManualAssignmentChecked", false);

        helper.checkManualAssignmentVisibility(cmp, event);
        helper.retrieveSuggestedUsers(cmp, event);

        //cmp.find('catField').reportValidity();
        //cmp.find('brandField').reportValidity();

    },


    /**
     * @author          naoussar@salesforce.com | 23-09-2022
     * @modifiedBy      hadib@salesforce.com    | 02-12-2022  | added the execution of retrieveSuggestedUsers
     *
     * @param event     Event captured
     * @param helper    Helper Class
     */
    submitDealer: function (cmp, event, helper)
    {
        var data = event.getParam('data');
        var dataString = JSON.stringify(data);


        if (dataString != '[]')
        {
            // Dealer value is entered
            var dealerId = data[0].id;
            cmp.set("v.dealerOutput", dealerId);
            cmp.set("v.dealerId", dealerId);
            helper.checkValidity(cmp, event);
            helper.retrieveSuggestedUsers(cmp, event);
        }
        else
        {
            // Dealer value is cleared
            cmp.set("v.dealerOutput", null);
            cmp.set("v.dealerId", null);
            helper.retrieveSuggestedUsers(cmp, event);
        }

    },

    /**
     * @author naoussar@salesforce.com | 23-09-2022
     *
     * @param component This Component
     * @param event     Event captured
     * @param helper    Helper Class
     */
    handleSelectedContacts: function (component, event, helper)
    {
        var checkboxes = document.getElementsByName('checkbox');
        var selectedMemberId = event.target.id;
        console.log(checkboxes);
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            checkbox.checked = checkbox.id === selectedMemberId;
        }
        component.set("v.ChoosenUserId", selectedMemberId);
    },

    /**
     * @author naoussar@salesforce.com | 23-09-2022
     *
     * @param component This Component
     * @param event     Event captured
     * @param helper    Helper Class
     */
    testlookup: function (component, event, helper)
    {
        var userId = event.getParam("value")[0];

        component.set("v.ChoosenUserId", userId);
    },

    /**
     * @owner @author naoussar@salesforce.com | 23-09-2022
     *
     * @param component
     * @param event
     * @param helper
     */
    getToggleButtonValue: function (component, event, helper)
    {
        var isManualAssignmentChecked = component.find("isManualAssignmentNeeded").get("v.checked");
        component.set("v.isManualAssignmentChecked", isManualAssignmentChecked);
    },

    /**
     * @owner @author richard.trum@glimt.se | 2023-08-29
     */

    hideSpinner : function(component, event){

        component.set('v.loaded', true);

    }  


})