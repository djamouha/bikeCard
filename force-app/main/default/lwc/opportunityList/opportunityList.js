import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import getOpps from '@salesforce/apex/OpportunityController.getOpps';
const COLUMNS = [
    {label: 'Nom Opportunité', fieldName: NAME_FIELD.fieldApiName, type: 'text'},
    {label: 'Etape', fieldName: STAGENAME_FIELD.fieldApiName, type: 'text'},
    {label: 'Date clôture', fieldName: CLOSEDATE_FIELD.fieldApiName, type: 'date'}
]
export default class OpportunityList extends LightningElement {
    columns = COLUMNS;
    @wire(getOpps)
    opps;
}