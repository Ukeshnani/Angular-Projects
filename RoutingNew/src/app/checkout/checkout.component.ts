import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  activeroute: ActivatedRoute = inject(ActivatedRoute)
  booomm:any;

  ngOnInit(){
    // this.activeroute.data.subscribe((data)=>{
    //   this.booomm = data

    // })
    this.booomm = history.state
  }

}
