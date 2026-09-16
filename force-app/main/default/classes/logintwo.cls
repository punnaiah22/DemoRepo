/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : logintwo
 * Author          : <YourName>
 * Created Date    : Aug 27, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Aug 27, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Aug 27, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class logintwo {

	@AuraEnabled
	public static void doSomething() {
		// Your logic here
         //These are hardcode values
		Login_Details__c loginRec = new Login_Details__c();
         loginRec.First_Name__c = 'Daniel';
         loginRec.Last_Name__c = 'Srihari';
         loginRec.Phone__c = '9676452692';
         loginRec.Email__c = 'gantadannie@gmail.com';
         loginRec.User_Name__c = 'gantadannie@gmail.com';
         loginRec.Password__c = 'Punnaiah@123';
         insert loginRec;
	}

}