import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child2/child2.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ObservablesComponent } from './observables/observables.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import {
  concatMap,
  debounce,
  debounceTime,
  delay,
  from,
  interval,
  mergeMap,
  of,
  Subject,
  switchMap,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Child2Component,
    ContentParentComponent,
    ObservablesComponent,
    NewTaskComponent,
    ShowTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Second_Project';

  array1 = ['remo', 'mohan', 'jhon', 'ramu'];
  some = interval(1000);
  array1$ = of(this.array1);
  ab:number = 6000

  ngOnInit(): void {
    // this.array1$.pipe(concatMap((data)=> from(data).pipe(tap((data)=>console.log(data))))).subscribe();
    // this.array1$.pipe( debounceTime(3000)).subscribe(data=>console.log('data')
    // )

    // const subject$ = new Subject<string>();
    // subject$.pipe(debounceTime(5000)).subscribe((value) => {
    //   console.log('Debounced Output:', value);
    // });
    // subject$.next('a');
    // setTimeout(() => subject$.next('abc'));
    // setTimeout(() => subject$.next(Date.now()+'abcd'), 4000);
    // setTimeout(() => subject$.next(Date.now()+'ab'), 10000);

    const subject$ = new Subject<string>();
    subject$.pipe(debounce(()=>timer(this.ab))).subscribe((value) => {
      console.log('Debounced Output:', value);
    });
    subject$.next('a');
    setTimeout(() => subject$.next('abc'));
    setTimeout(() => subject$.next(Date.now()+" "+'abcd'), 4000);
    setTimeout(() => subject$.next(Date.now()+" "+'ab'), 11000);
    

    // setTimeout(() => subject$.next('abc'), 200);
    // setTimeout(() => subject$.next('abcd'), 600);
    // setTimeout(() => subject$.next('abcde'), 700);
    this.array1$.pipe(debounceTime(500)).subscribe((data) => console.log(data));
  }
}
