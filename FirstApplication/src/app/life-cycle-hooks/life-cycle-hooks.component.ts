import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [CommonModule],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent implements OnInit, OnChanges, DoCheck{
  title:string= "Hello this is hooks"
  @Input() message1: string[] = [];
   constructor(){
    console.log("thi is hook 1") //in this face the component intial value triggers, not detect, input updated values and changes 
    console.log(this.title)
    console.log(this.message1) //this only consoles empty not data from parent 
   }


   ngOnChanges(){
    console.log("Onchanges hoook is called")
    console.log(this.message1) //when that input is assigned this hook will trigger 
    
   }

   ngOnInit(): void {
       console.log("onINit")
   }
   ngDoCheck(){
    console.log("docheck called")


   }

}
