import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AuthServices {
    isLoggedin: boolean = false

    login(){
    }
}