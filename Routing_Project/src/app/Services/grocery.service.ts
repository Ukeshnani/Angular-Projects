import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GroceryService {
    public groceries = [
        {id: 1, name:"apple"},
        {id: 2, name:"Banana"},
        {id: 3, name:"Orange"}
    ];

    getGroceries(){
        return of(this.groceries)

    }

    getGroceryById(id:number):any{
        const grocery = this.groceries.find((item)=> item.id === id);
        // return of(grocery)
    }
}