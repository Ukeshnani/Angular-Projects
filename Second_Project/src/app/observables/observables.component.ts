import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {
  data:any[]=[]
  cm:string = ''


  // myData = new Observable((sub)=>{
  //   sub.next([1,2,3,4,5,6]);
  //   // sub.error(new Error("got an error"))
  //     sub.next(["ukesh","nani"])

  //   sub.complete()
    
  // });

  // myData = of('ukesh',10,20,[10,5,8],true)
  myData = from([1,2,4,6,88]) //iterates single single value from array, thats why it takes on argument that too iterable 

  onClick(){
    //old way
    // this.myData.subscribe((dat:any)=>{
    //   this.data.push(dat)

    // },
    // (err)=>{
    //   alert(err.message)

    // },
    // ()=>{
    //   alert("all the data finished")

    // })
    //new way 

    this.myData.subscribe({
      next:(val:any)=>{
        this.data.push(val)

      },
      error(err){
        alert(err.message)
      },
      complete:()=>{
        this.cm = "ok"
      }
    })


  }

}
