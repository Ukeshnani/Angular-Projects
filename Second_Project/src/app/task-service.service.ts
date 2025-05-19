import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

// createNewTask: EventEmitter<string> = new EventEmitter<string>();
createNewTask = new BehaviorSubject<string>("hii");

onCreateTask(value:string){
  this.createNewTask.next(value)
}
  
}
