/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : calculatorClass
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

public class calculatorClass {
     // These are variable Declarations
	 /*
	 In Apex, the access-level hierarchy from highest to lowest is:
     global → public → protected → private
     */
	private integer age = 18;
	public string emailid= 'puli@gmail.com';
	protected string phone = '9949902276';
	//global id accountrecordid = '001g90000jhuhn0'; (because of the access-level hierarchy.)
	public static integer age1 = 27;


	public void addnumbers(){

		//integer age = 29;
		System.debug(age);

		calculatorClass.doLogic();
    }

	private static integer doLogic(){

		System.debug(age1);

		integer additionResult = 1+2;
		return additionResult;
	}

}