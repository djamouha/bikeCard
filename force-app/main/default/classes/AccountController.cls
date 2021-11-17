public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static Account[] getAccounts(){
        try {
            return [Select Id, Name, Industry, Rating, Website, AnnualRevenue from Account LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}