import {LightningElement, track, api}   from 'lwc';
import retrieveAttentionPoints          from '@salesforce/apex/AccountBriefingController.getAttentionPoints';
import getLabel                         from "@salesforce/apex/AccountBriefingUtils.getLabel";
import uIThemeDisplayed                 from '@salesforce/apex/OrderManagement_CC.uIThemeDisplayed';
import locale                           from '@salesforce/i18n/locale';
import ACCOUNT_DEBRIEFING               from '@salesforce/label/c.AccountDeBriefing';
import NO_DATA_MESSAGE                  from '@salesforce/label/c.NoDataMessage';
import Id from "@salesforce/user/Id";

export default class AccountBriefing extends LightningElement {

    @api recordId;
    @track accountBriefing;

    noData      = false;
    isLoading   = true;
    isMobile    = false;

    labels = {
        ACCOUNT_DEBRIEFING,
        NO_DATA_MESSAGE,
    }

    gridView = true; // Default state for grid view
    listView = false; // Default state for list view

    get buttonClassOne() {
        return `slds-button slds-button_icon-small slds-button_icon-border-filled ${this.listView ? 'slds-is-selected' : ''}`;
    }

    get buttonClassTwo() {
        return `slds-button slds-button_icon-small slds-button_icon-border-filled ${this.gridView ? 'slds-is-selected' : ''}`;
    }

    handleButtonClickOne() {
        this.gridView = false; // Set grid view to false
        this.listView = true; // Set list view to true
    }

    handleButtonClickTwo() {
        this.gridView = true; // Set grid view to true
        this.listView = false; // Set list view to false
    }

    get containerClass() {
        return `slds-col ${this.gridView ? 'slds-size_1-of-1 slds-large-size_1-of-2' : 'slds-size_1-of-1'} slds-p-around_small`;
    }

    /**
     * Connected Call back
     */
    connectedCallback() {
        this.uIThemeDisplayed();
        this.getAttentionPoints();
    }


    /**
     * Detects the user device
     */
    uIThemeDisplayed() {
        uIThemeDisplayed()
            .then(result => {
                if(result === 'Theme4t'){
                    this.isMobile = true;
                }
            })
            .catch(error => {
                console.error(JSON.stringify(error,null,2));
                this.isMobile = true;
            });
    }

    /**
     * Retrieves the account briefing's attention points
     * @returns {Promise<void>}
     */
    async getAttentionPoints() {
        try
        {
            let accountBriefingServerResponse = await retrieveAttentionPoints({accountId:this.recordId});

            if(accountBriefingServerResponse?.length > 0) {
                await Promise.all(
                    accountBriefingServerResponse.map(async (attentionPoint) => {
                        attentionPoint.title = await this.getLabelValue(attentionPoint.title);

                        attentionPoint.fields = attentionPoint.fields.map((field) => {
                            let formattedValue = field.value;

                            if (field.type === 'CURRENCY') {
                                // FORMATTING DATE OR CURRENCY FIELD VALUES
                                const currencyValue = Number(field.value).toLocaleString( ''+locale, {
                                    style: 'currency',
                                    currency: attentionPoint.currencyIsoCode
                                });
                                formattedValue = `${attentionPoint.currencyIsoCode} ${currencyValue}`;
                            } else if (field.type === 'DATE' || field.type === 'DATETIME') {
                                formattedValue = new Date(field.value).getTime();
                            }

                            return {
                                ...field,
                                isTypeDateOrDateTime: field.type === 'DATE' || field.type === 'DATETIME',
                                formattedValue: formattedValue,
                                isCurrency: field.type === 'CURRENCY'
                            };
                        });
                    })
                );


                // Sort the array using the custom comparison function
                this.accountBriefing = accountBriefingServerResponse.sort(this.compare);
                console.log('accountBriefing: ' + JSON.stringify(this.accountBriefing,null,2));
            }
            else{
                this.noData = true;
            }
        }
        catch (e)
        {
            console.error('exception : ' + JSON.stringify(e,null,2));
        }

        this.isLoading = false;
    }

    /**
     * Retrieves the label value using a visual force page through apex. It's the only way supported as of now
     * @param labelName Label api name
     * @returns {Promise<*>} Value of the custom label
     */
    async getLabelValue(labelName) {
        let labelValue;
        try {
            const label = labelName; // Label Name Provided in Custom Metadata Record
            const labelJSONValue = await getLabel({label}); // JSON Of Visual force page with custom label written as content
            const labelJSONValueFormatted = labelJSONValue.replace(/\\'/g, "'"); // Formatted content in any case we have special characs

            labelValue = JSON.parse(labelJSONValueFormatted).value;
        } catch (e) {
            console.error('Unable to retrieve label value of ' + labelName );
            console.error(e);

            labelValue = 'Unable to read custom label value';
        }
        return labelValue;
    }

    /**
     * comparison function for sorting
     * @param a first element
     * @param b second element
     * @returns {number}
     */
    compare(a, b) {
        if (a.relevance === b.relevance) {
            // Randomly sort items with the same relevance
            return Math.random() - 0.5;
        }
        // Sort by relevance in ascending order
        return a.relevance - b.relevance;
    }

}