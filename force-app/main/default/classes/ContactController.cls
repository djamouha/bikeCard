public with sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static Contact[] getContacts(){
        try {
            throw new AuraHandledException('problème');//return [Select Id, FirstName, LastName, Email from Contact WITH SECURITY_ENFORCED ORDER BY CREATEDDATE];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
