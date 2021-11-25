public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static Opportunity[] getOpps(){
        try {
            return [Select Id, Name, StageName, CloseDate from Opportunity WITH SECURITY_ENFORCED order by createddate DESC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
