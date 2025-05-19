import { Component, signal,WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DEmoComponent} from './demo/demo.component';

import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CommonModule } from '@angular/common';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DEmoComponent,FormsModule,DirectivesComponent,CommonModule,LifeCycleHooksComponent,RxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'FirstApplication';
  name: string  = 'Angular 17';
  message1: string = 'Hello from AppComponent';
  personAge: number = 25;
  num = signal<number>(1);
  userName: WritableSignal<string>= signal('John Doe');
  msg: string = ''
  myName: string=""

  inputVal: string[]=[]
  toDestroy: boolean= false 
  
  constructor(){
    console.log("app")
  }
  good() {
    this.userName.set('Ukesh') ; 
  }
  onVolumeChanged(value: number) {
    this.num.update((currentValue) =>  value);
    console.log("📢 Parent got volume:", value);
  }

  parentEmittt(msg: string) :void {
    this.msg = msg 

  }

  onClickEvent(inputE1: HTMLInputElement){
    this.inputVal.push(inputE1.value)
  }
  toDestroyC(){
    this.toDestroy = !this.toDestroy
  }


  
}
