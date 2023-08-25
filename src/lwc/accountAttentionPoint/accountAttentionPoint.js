import {LightningElement, api} from 'lwc';
import {NavigationMixin} from "lightning/navigation";

export default class AccountAttentionPoint extends NavigationMixin(LightningElement) {

    @api attentionPoint;
    @api userUiTheme;
    @api isMobile;

    columns = 2;
    mode = 'readonly';
    isMouseOver = false;


    connectedCallback() {

    }

    // Attention Point Getters
    get title(){
        return this.attentionPoint.title;
    }
    get iconName(){
        return this.attentionPoint.iconName;
    }
    get objectType(){
        return this.attentionPoint.objectType;
    }
    get id(){
        return this.attentionPoint.id;
    }
    get isObjectSupported() {
        return !['Event','Field_Sales_Project_Members__c'].includes(this.objectType);
    }

    get name(){ // First field
        return this.attentionPoint.fields[0].value;
    }
    get fields(){ // Rest of fields
        return this.attentionPoint.fields.slice(1);
    }

    // Icon Constructors
    get iconUrl(){
        return "/apexpages/slds/latest/assets/icons/standard-sprite/svg/symbols.svg#" + this.iconName;
    }

    get iconClasses(){
        return "slds-icon_container slds-icon-standard-" + this.iconName;
    }

    handleMouseOver() {
        this.isMouseOver = true;
    }

    handleMouseOut() {
        this.isMouseOver = false;
    }

    handleRedirection(event){
        event.preventDefault();
        console.log('redirect to record id : ' + this.attentionPoint.id);

        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
                objectApiName: this.objectType,
                actionName: "view",
                recordId: this.attentionPoint.id
            }
        });
    }
}