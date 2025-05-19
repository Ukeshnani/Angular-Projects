import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    isLogged: boolean=false;
    userService = inject(UserService)
    recentURL:string=''
    // constructor(list : UserService ){}

    logIn(username:string, password:string){
        let user = this.userService.users.find((u)=> u.userName===username && u.password===password)
        if(user===undefined){
            this.isLogged = false;
        }else{
            this.isLogged =true;
        }
        return user
    }

    logOut(){
        this.isLogged=false;
    }

    isAuthenticated(){
        return this.isLogged;
    }
    
}