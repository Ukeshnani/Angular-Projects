import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-one-1',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-one-1.component.html',
  styleUrl: './form-one-1.component.css'
})
export class FormOne1Component {

  fullName: string =''
  useremail:string =''
  UserName:any;
  gender:string=''
  iscard:boolean = false
  isAggreed:boolean = false

  @ViewChild("regform") form!: NgForm;

  genders=[
    {id:'1',gender:"male",display:"Male"},
    {id:'2',gender:"female",display:"Female"},
    {id:'3',gender:"other",display:"other"}

    
  ]
  onSubmit(){
    console.log(this.form)
    this.fullName = this.form.value.name
    this.useremail = this.form.value.email
    this.UserName = this.form.value.username
    this.gender = this.form.value.gender
    this.iscard = !this.iscard
    this.form.reset();
  }

  generateUsername(){
    let username= ''
    if(this.form.value.name.length >= 3){
      username += this.form.value.name.slice(0,3)
    }else{
      username += this.form.value.name
    }
    if(this.form.value.email.length >= 4){
      username += this.form.value.email.slice(0,4)
    }else{
      username += this.form.value.email
    }

    username += Math.floor(Math.random() * 100)

    //basically we have to add that user in input 

    // this.form.controls['username'].value = username 

    // that ,value throw an erroe because that values are only readonly type
    //if we want change that we have to use setvalue() and patchvalue() methods 


    //this strucure shoud be same as value object in form 

    // this.form.setValue({    
    //   email:this.useremail,
    //   name:this.fullName,
    //   gender:this.form.value.gender,         //we ca set values like this 
    //   username:username
      
    // })

    //patchvalue()  //dimple method this do not bneed structure 
    this.form.form.patchValue({    
      username:username

    })



  }

}
