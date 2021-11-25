import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

export default class OpportunityCreator extends LightningElement {
    objectApiName = OBJECT;
    fields = [NAME_FIELD,STAGE_FIELD,CLOSEDATE_FIELD];
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title:"Opportunity created",
            message: "Record ID : "+ event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}