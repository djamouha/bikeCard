import { api, LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {
    @api myholder="";
    tuClic(){
        this.myholder = "Youhou !!";
    }
}