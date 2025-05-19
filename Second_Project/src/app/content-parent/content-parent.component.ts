import { Component } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';
import { CommonModule } from '@angular/common';
import { PercentagePipe } from '../Pipes/percentage.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../Pipes/Filter.pipe';

@Component({
  selector: 'app-content-parent',
  imports: [ContentChildComponent,CommonModule,PercentagePipe,FormsModule,FilterPipe],
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.css'
})
export class ContentParentComponent {

  public productsOne =[
    { id: 1, name: 'Laptop', price: 59999 },
    { id: 2, name: 'Smartphone', price: 24999 },
    { id: 3, name: 'Bluetooth Headphones', price: 1999 },
    { id: 4, name: 'Smartwatch', price: 3499 },
    { id: 5, name: 'Tablet', price: 17999 },
    ]
  
  public productsTwo =[
    { id: 6, name: 'Gaming Mouse', price: 1299 },
    { id: 7, name: 'Mechanical Keyboard', price: 3499 },
    { id: 8, name: 'USB-C Charger', price: 899 },
    { id: 9, name: 'External Hard Drive', price: 4499 },
    { id: 10, name: 'Wireless Speaker', price: 2999 }
  ]

  curVal:number = 505
  totalVal:number = 900
  isshow:boolean=false

  showPerc(){
    this.isshow = !this.isshow
  }
}
