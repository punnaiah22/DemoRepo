import { LightningElement } from 'lwc';
export default class Calculator extends LightningElement {

    input1;
    input2;
    output;

    handleInput1(event){
       this.input1 = event.target.value; 
    }

    handleInput2(event){
        this.input2 = event.target.value;

    }
    handleAddition(event){
        this.output = parseInt(this.input1) + parseInt(this.input2);
    }

    handleSubstraction(event){
        this.output = parseInt(this.input1) - parseInt(this.input2);
    }
     
    handleMultiplication(event){
        this.output = parseInt(this.input1) * parseInt(this.input2);
    }

    handleDivision(event){
        this.output = parseInt(this.input1) / parseInt(this.input2);
 
    }

}