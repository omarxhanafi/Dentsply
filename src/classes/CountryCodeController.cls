/**
 * @Author          Omar (ohanafi@salesforce.com)
 * @Description     Apex controller for the CountryCodeMap__mdt metadata
 * @Test-Class      Test_CountryCodeController
 *
 * @History
 * 22-03-2023   Omar     Created CountryCodeController Class
 */
public with sharing class CountryCodeController {

    /**
         * getThreeDigitCode Return a the 3-digit code associated to the provided 2-digit code
         * @author ohanafi@salesforce.com | 22-03-2023
         *
         * @param twoDigitCode   2-digit code
         *
         * @return String - 3 digit code
         */
    @AuraEnabled
    public static String getThreeDigitCode(String twoDigitCode) {

        List<CountryCodeMap__mdt> codeMaps = [SELECT Country_Code_3_digit__c FROM CountryCodeMap__mdt WHERE Country_Code_2_digit__c = :twoDigitCode LIMIT 1];

        if (!codeMaps.isEmpty()) {
            return codeMaps[0].Country_Code_3_digit__c;
        }

        return null;

    }

    /**
         * getTwoDigitCode Return a the 2-digit code associated to the provided 3-digit code
         * @author ohanafi@salesforce.com | 22-03-2023
         *
         * @param threeDigitCode   3-digit code
         *
         * @return String - 2 digit code
         */
    @AuraEnabled
    public static String getTwoDigitCode(String threeDigitCode) {

        List<CountryCodeMap__mdt> codeMaps = [SELECT Country_Code_2_digit__c FROM CountryCodeMap__mdt WHERE Country_Code_3_digit__c = :threeDigitCode LIMIT 1];

        if (!codeMaps.isEmpty()) {
            return codeMaps[0].Country_Code_2_digit__c;
        }

        return null;

    }
}