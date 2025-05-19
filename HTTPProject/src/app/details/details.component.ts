import { Component, Input } from '@angular/core';
import { User } from '../Models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 @Input() singleData!: User[]
 ngOnChanges(){
  console.log(this.singleData)
 }


}
