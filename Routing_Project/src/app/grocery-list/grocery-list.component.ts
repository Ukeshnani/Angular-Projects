import { Component, inject, input, Input } from '@angular/core';
import { GroceryService } from '../Services/grocery.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-grocery-list',
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  categoryID = input("categoryID")
  private groceryService = inject(GroceryService)
groceryToSignal = toSignal(this.groceryService.getGroceries())


 
}
