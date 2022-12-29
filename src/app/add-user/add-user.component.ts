import { Component , OnInit , AfterViewInit} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DataInteractionService } from '../shared/data-interaction.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit , AfterViewInit{
    constructor(
      public dataService:DataInteractionService
    ){}

    addUserForm = new FormGroup<any>({
      name : new FormControl("",{validators: Validators.required,}),
      email: new FormControl("",{validators: [Validators.required,Validators.email]}),
      score : new FormControl("",{validators: Validators.required,}),
      age : new FormControl("",{validators: Validators.required,})
    })    

  ngOnInit(){
     
    
  }
  ngAfterViewInit(){
    
    let inputFileds = document.querySelectorAll(".mat-mdc-text-field-wrapper")
    inputFileds.forEach((element,index)=>{
      element.classList.add("inputField")
    })
  }
   handleSubmision = ()=>{

    if(this.addUserForm.valid){
      console.log("form submitted")
    
      this.dataService.AddApiCall(this.addUserForm.value)
      this.addUserForm.reset()
    }
    else{
      console.log("Please Provie Valid Inputs")
    }
   
   }
   matcher = new MyErrorStateMatcher();
}
