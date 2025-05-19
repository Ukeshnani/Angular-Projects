import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesssService {

  public notificationSub = new BehaviorSubject<string>("hii thi is ukesh kasula");

  constructor() { }

  sendNotification(data: string){
    this.notificationSub.next(data)
  }
}
