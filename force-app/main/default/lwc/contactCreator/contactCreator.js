import { LightningElement, api } from 'lwc';
import OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactCreator extends LightningElement {
    // Expose a field to make it available in the template
    fields = [FIRSTNAME, LASTNAME, EMAIL ];

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName=OBJECT;

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title:"Contact created",
            message: "Record ID : "+ event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}