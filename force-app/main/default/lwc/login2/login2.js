import { LightningElement } from 'lwc';
import LoginMethod from '@salesforce/apex/logintwo.doSomething';
import Toast from 'lightning/toast';
export default class LoginInfo extends LightningElement {
      showSignin = true;
      showSignup = false;
      /*firstNameFromUi;
      lastNameFromUi;
      phoneFromUi;
      emailFromUi;
      userNameFromUi;
      passwordFromUi */


    handleLogin(event) {
      this.showSignin = true;
      this.showSignup = false;

    }

    handleSignup(event) {
      this.showSignin = false;
      this.showSignup = true;
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
        LoginMethod()

      .then((result)=>{

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
                message: 'Seems There are Error:::'+error.body.pageErrors[0].message,
                variant: 'error',
                mode: 'dismissible',
            },
            this,
        );


      });
    
    }

}