import { LightningElement } from 'lwc';
import Toast from 'lightning/toast';
export default class StudentEnrollment extends LightningElement {
    stuName;
    stuPhone;
    stuEducation;
    stuEmail;

    
    handleNameChange(event){
       this.stuName = event.target.value;
    }

    handlePhoneChange(event){
        this.stuPhone = event.target.value;
      // throw erro
      
    }

    handlePhoneblur(event){
        //throw error if phone number is enter with country code or special character
        if(this.stuPhone.includes('+')){
            Toast.show(
            {
                label: 'Invalid Phone Number',
                message: 'Phone Number can not have country code or special character',
                variant: 'error',
                mode: 'dismissible',
            },
            this,
        );
        
          }


       //throw error if phone number is > or < 10 
         if(this.stuPhone.length !== 10 ){ 
        Toast.show(
            {
                label: 'Invalid Phone Number',
                message: 'Phone Number Should be 10 digits',
                variant: 'error',
                mode: 'dismissible',
            },
            this,
        );

          }
    }

    handleEducationChange(event){
        this.stuEducation = event.target.value;
    }

    handleEmailChange(event){
        this.stuEmail = event.target.value;
    }

    

}