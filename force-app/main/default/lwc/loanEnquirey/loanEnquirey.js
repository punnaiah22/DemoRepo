import { LightningElement } from 'lwc';
export default class LoanEnquirey extends LightningElement {
    name;
    phone;
    email;
    company;
    pan;
    aadhar;
    salary;
    salarydate;
    cibilscore; 
    obligation;

    handleLoanformData(event){
        if(event.target.name == 'custName'){
            this.name = event.target.value;
        }

        if(event.target.name == 'custPhone'){
            this.phone = event.target.value
        }
        
        if(event.target.name == 'custPan'){
            this.pan = event.target.value
        }

        if(event.target.label == 'Aadhar'){
            this.aadhar = event.target.value
        }

        if(event.target.label == 'Email'){
            this.email = event.target.value
        }


        if(event.target.label == 'What is your Salary'){
            this.salary = event.target.value
        }

        if(event.target.label == 'What is your Salary date'){
            this.salarydate = event.target.value
        }

        if(event.target.label == 'What is Your CIBIL score'){
            this.cibilscore = event.target.value
        }

        if(event.target.label == 'What is your Company'){
            this.company = event.target.value
        }
        
        if(event.target.label == 'What is Your Current Obligations'){
            this.obligation = event.target.value
        }
    }

}