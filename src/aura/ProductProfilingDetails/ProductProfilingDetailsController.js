({
    init: function (cmp, event, helper) {

        var productMap = {};
        var productFamilyLabelMap = {};
        var productWrapperList = cmp.get("v.selectedProductsWrapper");


        for(var product in productWrapperList){
            var productId = productWrapperList[product].productId;
            productMap[productId] = productWrapperList[product].productName;
            productFamilyLabelMap[productId] = productWrapperList[product].productFamilyLabel;
        }

        var products = [];
        products = cmp.get("v.selectedProducts");


        for(var prod in products){
            var prodId = products[prod].Product_Name__c;
            products[prod].productName = productMap[prodId];
            products[prod].productFamilyLabel =productFamilyLabelMap[prodId];
        }
        
        cmp.set('v.columns', [
            {label: 'Product', fieldName: 'Non_ERP_Product_Id__c', type: 'text'}
        ]);

        cmp.set("v.outputProducts", products);

        // Get the current year
        var currentYear = new Date().getFullYear();

        // Create an array to store the last 15 years
        var yearOptions = [];
        for (var i = currentYear; i >= currentYear - 15; i--) {
            yearOptions.push({ label: '' + i, value: '' + i });
        }

        // Set the yearOptions attribute
        cmp.set('v.yearOptions', yearOptions);

        // Set a timeout to focus on the quantity field after a short delay
        setTimeout(function() {
            // Retrieve the first row's quantity field
            var firstRowQuantity = cmp.find("quantity")[0];

            // Check if the quantity field exists
            if (firstRowQuantity) {
                // Set focus to the quantity field
                firstRowQuantity.focus();
            }
        }, 100);
        
    }
})