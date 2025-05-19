import { Component,Input, signal,computed,output, Output, EventEmitter, inject} from '@angular/core';
import { ServicesssService } from '../../Services/servicesss.service';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DEmoComponent {
  @Input() message: string | undefined;
  @Input() age: number | undefined;
  @Input() name: string | undefined;
  price = signal<number>(250);
  quantity = signal<number>(1);

  @Output() volumeChanged = new EventEmitter<number>();
  @Output() childMessage = new EventEmitter<string>();
  total = computed(() => {
    return this.price() * this.quantity();
  })
  fullName = computed(()=>{
    return this.message + "😎😎" +this.name
  })

  increamnet(){
    this.quantity.update((a) => Math.min(a+1,12) )
  }

  decrement(){
    this.quantity.update((a) => Math.max(a-1,0) )
  }
  count(){
    const  c: number = 50
    this.volumeChanged.emit(c)
  }
  sendMessage(){
    this.childMessage.emit("hello this msg from child")

  }
  private notificationS = inject(ServicesssService)

sendMsg(data: { value: string; }){
  this.notificationS.sendNotification(data.value)

}

ngOnDestroy(){
  console.log("app-demo destroyed")
}




 


}
