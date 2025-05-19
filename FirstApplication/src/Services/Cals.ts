import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})

export class sericeFile{
    add(x:number,y:number){
        return x+y
    }

    sub(x:number,y:number){
        return x-y
    }

}
