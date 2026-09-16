/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : loginInfoClass
 * Author          : <YourName>
 * Created Date    : Aug 26, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Aug 26, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Aug 26, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class loginInfoClass {
    //@AuraEnabled is used to expose an Apex method to the Lightning component's JavaScript (LWC/Aura).
    //Imperative
    @AuraEnabled  
	public static string createLogin(string input1, string input2, string input3, string input4, string input5, string input6){
         //DML(To create Record from apex)
		 //Apex syntax for creating a custom object record, instantiation of custom object

         //we can show error from apex also

         try{
            Login_Details__c loginRec = new Login_Details__c();
            loginRec.First_Name__c = input1;
            loginRec.Last_Name__c = input2;
            loginRec.Phone__c = input3;
            loginRec.Email__c = input4;
            loginRec.User_Name__c = input5;
            loginRec.Password__c = input6;
            insert loginRec;
         
             return 'success';
         } catch(Exception e){
            throw new AuraHandledException(e.getMessage());

         }
		 
	}
    //@AuraEnabled is used to expose an Apex method to the Lightning component's JavaScript (LWC/Aura).
    @AuraEnabled
    public static List<Login_Details__c> getLoginDetails(){
        List<Login_Details__c> loginDetailsList = [Select Id, Name, First_Name__c, Last_Name__c, Email__c from Login_Details__c ];
        return loginDetailsList;
    
    }


}