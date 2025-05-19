import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidate } from '../Validators/noSpace.validator';


@Component({
  selector: 'reactive-forms',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent  implements OnInit{
  formstatus:string =''
  genders =[
    {gender:"male",display:"male"},
    {gender:"female",display:"female"},
    {gender:"other",display:"other"},
  ]
  formData:any={}
  ishow:boolean=false

  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required,CustomValidate.noSpaceAllowed]),
      lastname: new FormControl('',Validators.required),
      gender: new FormControl('male'),
      email: new FormControl('',[Validators.email,Validators.required,]),
      username: new FormControl(''),
      skills: new FormArray([
        new FormControl(null,Validators.required),
      ]),
      experience: new FormArray([
      ])

    })
//valuechange event this is single input or controle
    // this.reactiveForm.get('firstname')?.valueChanges.subscribe((value)=>{
    //   console.log(value)
    // })
    //overall form changes 

    // this.reactiveForm.valueChanges.subscribe((val)=>{
    //   console.log(val)

    // })
    //state changes 
    this.reactiveForm.statusChanges.subscribe((val)=>{
      this.formstatus = val;

    })

      
  }
  get skillsControls() {
    return (<FormArray>this.reactiveForm.get('skills')).controls;
  }
  get expControls() {
    return (<FormArray>this.reactiveForm.get('experience')).controls;
  }
  onFormSubmit(){
    console.log(this.reactiveForm)
    this.formData = this.reactiveForm.value
    this.ishow= !this.ishow
    this.reactiveForm.reset({
      gender:'male'
    })

  }

  addSkills(){
    (this.reactiveForm.get('skills') as FormArray)
    .push(new FormControl(null,Validators.required))
  }
  removeSkill(val:number){
    (this.reactiveForm.get("skills")as FormArray).removeAt(val)
    

  }
  addExp(){
    const formgroup = new FormGroup({
      companyName: new FormControl(''),
      start: new FormControl(''),
      end: new FormControl('')

    });
    (<FormArray>this.reactiveForm.get("experience"))
    .push(formgroup)
  }
  deleteExp(val:number){
    (<FormArray>this.reactiveForm.get("experience")).removeAt(val)

  }

  onCheckUserName(){
    let userName = ''
    const fname:string = this.reactiveForm.get('firstname')?.value
    const lname:string = this.reactiveForm.get('lastname')?.value
    const num: number = Math.floor(Math.random()*1000)
    if(fname.length>=3){
      userName+=fname.slice(0,3)
    }else{
      userName += fname
    }
    if(lname.length>=3){
      userName += lname.slice(0,3)
    }else{
      userName += lname
    }

    userName+= num

    //set va;lue method
    // this.reactiveForm.get('username')?.setValue(userName)
    

    this.reactiveForm.patchValue({
      username: userName
      
    })

  
  }

  

}
