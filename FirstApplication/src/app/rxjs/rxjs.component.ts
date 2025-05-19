import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit {

  ngOnInit(): void {

     const observable = new Observable(subscriber => {
            subscriber.next(Math.random());
        });
        observable.subscribe(b => console.log(b))
        observable.subscribe(b=>console.log(b))
//---------------------------------------------------------------------------------
        
        const subject = new Subject<any>();

        subject.subscribe(data => console.log('User A:', data));
        subject.subscribe(data => console.log('User B:', data));
        
        subject.next("🚀 Launching");
        subject.next("🔥 Blasting");
        subject.next(Math.random())
//--------------------------------------------------------------------

        const bsub = new BehaviorSubject<string>("this is behaviour sub")
        bsub.next("value1")
        bsub.next("valu2")
        bsub.next("value3")
        bsub.next("value4")

        bsub.subscribe(d => console.log(d))
        bsub.next("value 5")
        bsub.subscribe(d => console.log(d))

  //-------------------------------------------------------------------------
      const Rsub = new ReplaySubject<string>()
      Rsub.next("r1")
      Rsub.next("r2")
      Rsub.next("r3")
      Rsub.next("r4")

      Rsub.subscribe(s => console.log('sub1'+s))

      Rsub.next("r1")
      Rsub.next("r2")
      Rsub.next("r3")

      Rsub.subscribe(s => console.log('sub2'+s))

//------------------------------------------------------------

const Asub = new AsyncSubject()
Asub.next('A1')
Asub.next('A2')
Asub.next('A3')
Asub.next('A4')
Asub.complete()
Asub.subscribe(d => console.log(d))

Asub.next("a3")
Asub.complete()

Asub.subscribe(d => console.log(d))

        
  }
  
    


}
