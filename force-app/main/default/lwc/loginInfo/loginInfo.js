import { LightningElement } from 'lwc';
//Calling Apex From js
import LoginMethod from '@salesforce/apex/loginInfoClass.createLogin';
import getLoginDetails from '@salesforce/apex/loginInfoClass.getLoginDetails';
import Toast from 'lightning/toast';
export default class LoginInfo extends LightningElement {
      showSignin = true;
      showSignup = false;
      showSubmitButton = false;
      firstNameFromUi;
      lastNameFromUi;
      phoneFromUi;
      emailFromUi;
      userNameFromUi;
      passwordFromUi


    handleLogin(event) {
      this.showSignin = true;
      this.showSignup = false;
      this.showSubmitButton = false;

    }

    handleSignup(event) {
      this.showSignin = false;
      this.showSignup = true;
      this.showSubmitButton = true;
    
    }

    handleInputChange(event) {
      if (event.target.name == 'input1') {
        this.firstNameFromUi = event.target.value;
      }
      if (event.target.name == 'input2') {
        this.lastNameFromUi = event.target.value;
      }

      if (event.target.name == 'input3') {
        this.phoneFromUi = event.target.value;
      }


      if (event.target.name == 'input4') {
        this.emailFromUi = event.target.value;
      }

      if (event.target.name == 'input5') {
        this.userNameFromUi = event.target.value;
      }

      if (event.target.name == 'input6') {
        this.passwordFromUi = event.target.value;
      }

    }

    handleSubmit(event) {
      LoginMethod({ input1: this.firstNameFromUi, input2: this.lastNameFromUi, input3: this.phoneFromUi, input4: this.emailFromUi, input5: this.userNameFromUi, input6: this.passwordFromUi })
      .then((result)=>{
        this.showSubmitButton = false;
        this.showSignin = true;
        this.showSignup = false;

        Toast.show(
            {
                label: 'Record Created',
                message: 'Details Saved into DB',
                variant: 'success',
                mode: 'dismissible',
            },
            this,
        );

      
      }).catch((error)=>{

        console.log('error:::'+JSON.stringify(error));
        console.log('error:::'+error);

      Toast.show(
            {
                label: 'Record Creation Failed',
                message: 'Seems There are Error:::'+error.body.message,
                variant: 'error',
                mode: 'dismissible',
            },
            this,
        );


      });

    
    }

    getAllRecords(){
      getLoginDetails().then(result=>{
        console.log('Result:::'+JSON.stringify(result));

      }).catch(error=>{

      });
        
      }

}