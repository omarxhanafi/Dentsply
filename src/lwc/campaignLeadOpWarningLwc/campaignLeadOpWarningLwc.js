import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getTwoDigitCode from '@salesforce/apex/CountryCodeController.getTwoDigitCode';
import getLeadOppSettingsByCountryAndBrand from '@salesforce/apex/UsersInAccountTerritories.getLeadOppSettingsByCountryAndBrand';
import headerLabel from '@salesforce/label/c.Sales_Opportunity_Territory_Assignment';
import descriptionLabel from '@salesforce/label/c.Sales_Opportunity_Territory_Assignment_Description';
import warningLabel from '@salesforce/label/c.Sales_Opportunity_Territory_Assignment_Warning';

const CAMPAIGN_FIELDS = ['Campaign.Country__c', 'Campaign.Brands__c'];

export default class CampaignLeadOpWarningLwc extends LightningElement {
    @api recordId;

    leadOppSettings;

    label = {
        headerLabel,
        descriptionLabel,
        warningLabel
    };

    // Wire the getRecord function to fetch the campaign record with specific fields
    @wire(getRecord, { recordId: '$recordId', fields: CAMPAIGN_FIELDS })
    wiredRecord({ error, data }) {
        if (error) {
            console.log('error',error);
        } else if(data) {
            // Extract the Country and Brands field values from the fetched campaign record
            let countryThreeDigit = data.fields.Country__c.value;
            let brand = data.fields.Brands__c.value;

            // Call the Apex method to fetch the two-digit code of the country
            getTwoDigitCode({ threeDigitCode: countryThreeDigit })
                .then(result => {
                    let countryTwoDigit = result;

                    // Call the Apex method to fetch the lead and opportunity settings based on country and brand
                    getLeadOppSettingsByCountryAndBrand({
                        countryInput : countryTwoDigit,
                        brandInput : brand
                    })
                        .then((result) => {
                            this.leadOppSettings = result;
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
