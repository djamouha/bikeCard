import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; 

export default class AccountGrid extends LightningElement {
    accounts;
    handleAccounts(){
        getAccounts()
        .then(result => {
            this.accounts = result;
            this.error = undefined;
        })
        .catch(error => {
            // TODO Error handling
            this.error = error;
            this.accounts = undefined;
        });
    }
        
}