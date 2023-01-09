import { LightningElement, wire,api,track } from 'lwc';
import fetchObjectives from '@salesforce/apex/ObjectivesController_OGSM.fetchObjectives';
import updateObjectives from '@salesforce/apex/ObjectivesController_OGSM.updateObjectives';
import deleteObjective from '@salesforce/apex/ObjectivesController_OGSM.deleteObjective';
import cloneUncompleteObjective from '@salesforce/apex/ObjectivesController_OGSM.cloneObjective';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { getObjectInfo  } from 'lightning/uiObjectInfoApi';
import OBJECTIVE_OBJECT from '@salesforce/schema/Objective__c';

import { loadStyle } from 'lightning/platformResourceLoader';
import ogsmStyle from '@salesforce/resourceUrl/ogsmObjectivesTableCSS'

const actions = [
    { label: 'Delete', name: 'delete' },
    { label: 'View', name: 'view' },
   /*commented the clone action once uncommented the clone will work */
   // { label: 'Clone', name: 'clone' },
];




export default class OgsmObjectivesTable extends NavigationMixin(LightningElement) {
   // columns = columns;
    @track columns = [];
    records;
    wiredRecords;
    error;
    tempValues;
    @api recordId;

    connectedCallback() {
        loadStyle(this, ogsmStyle);
        //used to reload data after a new objective is created 
        window.document.addEventListener('recordactionsave', () => {
            refreshApex(this.provisionedValue);  
        },true)
        //used to reload data after manyobjectives are created 
        window.document.addEventListener('recordactionsaveandnew', () => {
            refreshApex(this.provisionedValue);  
        },true)
        
        
    }
    getDataTable() {
        return this.template.querySelector('c-custom-datatable');
    }
    set draftValues(value) {
        const dataTableElement = this.getDataTable();
        if (dataTableElement) dataTableElement.draftValues = value;
    }
    get draftValues(){
        const dataTableElement = this.getDataTable();
        if (!dataTableElement) return undefined;
        return dataTableElement.draftValues;
    }


    @wire(getObjectInfo, { objectApiName: OBJECTIVE_OBJECT } )
    objectivesInfo({ data, error }) {
        if (data) {
             this.columns = [
                 {label: "#", fieldName: 'Name', type: 'richText', typeAttributes:
                 { iseditable: true },editable : true,wrapText: true, fixedWidth : 100},
                {label: data.fields.Objective__c.label, fieldName: 'Objective__c', type: 'richText', typeAttributes:
                { iseditable: true },editable : true,wrapText: true, initialWidth : 120},
                {label: data.fields.Goals__c.label, fieldName: 'Goals__c', type: 'richText', typeAttributes:
                { iseditable: true },editable : true,wrapText: true},
                {label: data.fields.Initiatives__c.label, fieldName: 'Initiatives__c', type: 'richText', editable : true, typeAttributes:
                { iseditable: true },wrapText: true},
                {label: data.fields.Measures__c.label, fieldName: 'Measures__c', type: 'richText', typeAttributes:
                { iseditable: true },editable : true,wrapText: true},
                {label: data.fields.Status__c.label, fieldName: 'Status__c', type: 'colors', typeAttributes:
                { ispicklisteditable: true , iconName: { fieldName: 'statusIcon' },
                    iconAlternativeText: 'Status Icon' }},
               /* {label: data.fields.StatusNotes__c.label, fieldName: 'StatusNotes__c', type: 'richText', typeAttributes:
                { iseditable: true },editable : true,wrapText: true},
               */  
                {label: data.fields.IndicatedActions__c.label, fieldName: 'IndicatedActions__c', type: 'richText', typeAttributes:
                { iseditable: true },editable : true,wrapText: true},
               {
                    type: 'action',
                    typeAttributes: { rowActions: actions }
                },
            ];
        }
    }
    
    @wire( fetchObjectives,{accountPlanId: '$recordId'} )  
    wiredObjectives(provisionedValue) {
   // wiredObjectives({ error, data }) {
        //this.wiredRecords = value; 
        this.provisionedValue = provisionedValue; // track the provisioned value
        const { data, error } = provisionedValue; // destructure it for convenience
        console.log('this.objValues',data)

        if ( data ) {
            let objValues = data.map(element => ({...element}));
            objValues.forEach(objectiveRec => {
            if(objectiveRec.Status__c === 'Green'){
                objectiveRec.statusIcon = 'action:new_task';
            } else if (objectiveRec.Status__c === 'Yellow'){
                objectiveRec.statusIcon = 'action:new_case';
            } else if(objectiveRec.Status__c === 'Red'){
                objectiveRec.statusIcon = 'action:close';
            } else if(objectiveRec.Status__c === 'Achieved'){
                objectiveRec.statusIcon = 'action:check';
            }  else if(objectiveRec.Status__c === 'Open'){
                objectiveRec.statusIcon = 'action:follow';
            }
        });
       
            this.records = objValues;
            this.error = undefined;
        } else if ( error ) {
            this.error = error;
            console.log('this.error',error)
            this.records = undefined;

        }
    }

    updateDraftValues(updateItem) {
        let draftValueChanged = false;
        let copyDraftValues = [...this.draftValues];
        console.log('draft',copyDraftValues);
        copyDraftValues.forEach(item => {
            if (item.Id === updateItem.Id) {
                // eslint-disable-next-line guard-for-in
                for (let field in updateItem) {
                    item[field] = updateItem[field];
                }
                draftValueChanged = true;
            }
        });

        if (draftValueChanged) {
            this.draftValues = [...copyDraftValues];
        } else {
            this.draftValues = [...copyDraftValues, updateItem];
        }
    }
    
    richTextChengeHandle(event) {
        event.stopPropagation();
        const value = event.detail.value;
        const fieldName = event.detail.fieldName;
        const rowKeyValue = event.detail.rowKeyValue;
        let updatedItem = { [fieldName]: value, id: rowKeyValue };
        this.updateDraftValues(updatedItem);
      }

    picklistChangeHandle(event) {
        event.stopPropagation();
        const value = event.detail.value;
        const fieldName = event.detail.fieldName;
        const rowKeyValue = event.detail.rowKeyValue;
        let updatedItem = { [fieldName]: value, id: rowKeyValue };
        this.updateDraftValues(updatedItem);
   
 }
    
    async handleSave( event ) {
        const updatedFields = event.detail.draftValues.map((object) => {
            object.id = this.records[parseInt(object.id.split('-')[1], 10)].Id;
            return object;
        });
        

        await updateObjectives( { data: updatedFields } )
            .then( result => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Objective(s) updated',
                        variant: 'success'
                    })
                );
                this.draftValues = [];
                return refreshApex(this.provisionedValue);      

            }).catch( error => {

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error updating or refreshing records',
                        message: error.body.message,
                        variant: 'error'
                    })
                );

            });

    }
    newObjectiveHandle() {
        return refreshApex(this.provisionedValue);  
    }
    handleRowAction(event) {
        const actionName = event.detail.action.name;
        switch (actionName) {
            case 'delete':
                this.deleteRow(event.detail.row);
                break;
            case 'view':
                this.viewRow(event.detail.row);
                break;
            case 'clone':
                this.cloneRow(event.detail.row);
                break;
            default:
        }
    }

    deleteRow(item) {
        let newData = JSON.parse(JSON.stringify(this.records));
		newData = newData.filter((row) => row.Id !== item.Id);
        deleteObjective({objectiveId : item.Id}).then( () => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Objective Deleted',
                    variant: 'success'
                })
            );

            return refreshApex(this.provisionedValue);  
        }).catch( error => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error Deleting objective',
                    message: error.body.message,
                    variant: 'error'
                })
            );

        });
		newData.forEach((element, index) => (element.Id = index + 1));
        this.records = newData;
    }

    viewRow(item) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: item.Id,
                objectApiName: 'Objective__c',  
                actionName: 'view'
            }
        });
    }

    cloneRow(item) {
        if(item.Status__c != 'Achieved'){
        // call backend clone to create a copy of the current obj 
        cloneUncompleteObjective({objectiveId:item.Id,
                                  currentAccPlan:this.recordId
                                }).then((clonedObjective) =>{
                                    this.dispatchEvent(
                                        new ShowToastEvent({
                                            title: 'Success',
                                            message: 'Objective Cloned',
                                            variant: 'success'
                                        })
                                    );
                                    console.log('here is ',clonedObjective);
                                    this[NavigationMixin.Navigate]({
                                        type: 'standard__recordPage',
                                        attributes: {
                                            recordId: clonedObjective,
                                            objectApiName: 'Objective__c',  
                                            actionName: 'view'
                                        }
                                    });
                                    
                                }).catch((error) => {
                                    this.dispatchEvent(
                                        new ShowToastEvent({
                                            title: 'Error Cloning Objective',
                                            message: error,
                                            variant: 'error'
                                        })
                                    );
                                });
        } else {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Cannot Clone Objective that is already Achieved',
                    variant: 'error'
                })
            );
        }
        //get id of the new obj copy then redirect to the edit 
        
    }

}