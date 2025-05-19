import { Component, inject, input, Input } from '@angular/core';
import { GroceryService } from '../Services/grocery.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-grocery-item',
  imports: [CommonModule],
  templateUrl: './edit-grocery-item.component.html',
  styleUrl: './edit-grocery-item.component.css'
})
export class EditGroceryItemComponent {
  categoryID = input("categoryID")
  groceryId = input("groceryId")
  grocery$!: Observable<any>;
  private groceryService = inject(GroceryService)
  activateRout: ActivatedRoute = inject(ActivatedRoute)
  @Input() set id(groceryId: string){
    this.grocery$ = this.groceryService.getGroceryById(Number(groceryId))
    
  }
  

}
