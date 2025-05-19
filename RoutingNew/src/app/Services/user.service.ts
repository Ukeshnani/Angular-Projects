import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    users = [
        {
            id:1,
            name:"ukesh",
            userName: "uk",
            password:"12345"
        },
        {
            id:2,
            name:"nani",
            userName:"na",
            password:"123"

        }
    ]
}