import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';

@Component({
  selector: 'app-child2',
  imports: [Child1Component],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  userName:string="ukeshnani"
  momo: string = ''
  datasent(value:string){
    this.momo = value
  }
  fullName:string = ''

  @ViewChildren('inputel') inputElement!: QueryList<ElementRef>;

  getFullname(){
    this.inputElement.forEach((item)=>{
      let namee:string = item.nativeElement.value
      console.log(namee)
      this.fullName += " "+ namee
      

    })


    
  }


}
