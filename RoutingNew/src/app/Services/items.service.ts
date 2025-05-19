import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class Itemlist{
    bikeDetails =[
        { id: 1, name: 'Xtreme 200R', brand: 'Hero MotoCorp', price: 150000, type: 'Sport' },
        { id: 2, name: 'Pulsar NS200', brand: 'Bajaj', price: 160000, type: 'Naked' },
        { id: 3, name: 'Apache RTR 160', brand: 'TVS', price: 120000, type: 'Street' },
        { id: 4, name: 'Classic 350', brand: 'Royal Enfield', price: 190000, type: 'Cruiser' },
        { id: 5, name: 'Jawa 42', brand: 'Jawa', price: 185000, type: 'Cruiser' },
        { id: 6, name: 'FZ-S Fi', brand: 'Yamaha', price: 130000, type: 'Street' },
        { id: 7, name: 'Dominar 400', brand: 'Bajaj', price: 230000, type: 'Tourer' },
        { id: 8, name: 'Meteor 350', brand: 'Royal Enfield', price: 210000, type: 'Cruiser' },
        { id: 9, name: 'Raider 125', brand: 'TVS', price: 95000, type: 'Commuter' },
        { id: 10, name: 'Splendor Plus', brand: 'Hero MotoCorp', price: 80000, type: 'Commuter' }
    ]

    getAllbikes(){
        return new Observable((sub)=> {
            setTimeout(()=>{
                sub.next(this.bikeDetails)

            },1000)
        })
    }
}