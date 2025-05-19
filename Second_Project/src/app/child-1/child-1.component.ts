import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, output, ViewChild, viewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-1',
  imports: [CommonModule,FormsModule],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component {
  alllist:string[]=["Ukesh","pavan","pranay","rahul","david","kevin"]
  listOfstrings:string[]=[...this.alllist]
  @Input() name:string = ''
  @Output() sendData = new EventEmitter<string>()
  val:string[]  = []
  @ViewChild('searched') searched!: ElementRef ;
  userName = ''
  todayDate: any = Date.now()

  onclicked(value:string){
    this.sendData.emit(value)


  }

  onEvent(value:string){
    this.userName = value

  }
  searchedval() {
    const searchLower = this.searched.nativeElement.value.trim().toLowerCase();
    if(searchLower===''){
      this.listOfstrings = [...this.alllist]
    }else{
      this.listOfstrings = this.listOfstrings.filter(item =>
        item.toLowerCase().includes(searchLower)
      );
    }
  
    
  }
  


}
