import {LightningElement, track, api}   from 'lwc';
import retrieveAttentionPoints          from '@salesforce/apex/AccountBriefingController.getAttentionPoints';
import getLabel                         from "@salesforce/apex/AccountBriefingUtils.getLabel";
import uIThemeDisplayed                 from '@salesforce/apex/OrderManagement_CC.uIThemeDisplayed';
import ACCOUNT_DEBRIEFING               from '@salesforce/label/c.AccountDeBriefing';
import NO_DATA_MESSAGE                  from '@salesforce/label/c.NoDataMessage';

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
                            return {
                                ...field,
                                isTypeDateOrDateTime: field.type === 'DATE' || field.type === 'DATETIME',
                                formattedValue: field.type === 'DATE' || field.type === 'DATETIME' ? new Date(field.value).getTime() : null
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
        try {
            const label = labelName;
            return JSON.parse(await getLabel({label})).value;
        } catch (e) {
            console.error('Couldn\'t retrieve label value of' + label + '. Error:' + JSON.stringify(e));
        }
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