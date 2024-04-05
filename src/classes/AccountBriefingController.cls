public with sharing class AccountBriefingController {

    /**
     * @return List<AttentionPoints> - Wrapper of attention points
     */
    @AuraEnabled
    public static List<AttentionPoint> getAttentionPoints(String accountId)
    {
        List<AttentionPoint> attentionPoints;
        if(!String.isBlank(accountId))
        {
           attentionPoints = AccountBriefingUtils.getAttentionPoints(accountId);
        }

        return attentionPoints;
    }

    /**
     *
     */
    public class AttentionPoint {
        @AuraEnabled
        public String id;
        @AuraEnabled
        public String currencyIsoCode;
        @AuraEnabled
        public String title;
        @AuraEnabled
        public String objectType;
        @AuraEnabled
        public String iconName;
        @AuraEnabled
        public Integer relevance;
        @AuraEnabled
        public List<AccountBriefingUtils.FieldWrapper> fields;
        public AttentionPoint__mdt customMetadataRecord;

    }
}