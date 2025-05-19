import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "../Models/user.model";
import { Subject } from "rxjs";
import { ɵnormalizeQueryParams } from "@angular/common";

@Injectable({
    providedIn:'root'
})
export class ApiSerice{
    http:HttpClient = inject(HttpClient)
    fake ={ 
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
        }
      }
      errorSubject = new Subject<HttpErrorResponse>()
     
   
    getdata(){
        
        return  this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
    
    }

    postData(){
        
        const headers = new HttpHeaders ({'my-header':'hello'})
        return this.http.post<User>("https://jsonplaceholder.typicode.com/users",this.fake,{headers:headers})
    }

    deleteuser(val:number){
        this.http.delete("https://jsonplaceholder.typicode.com/user/"+val+".json").subscribe({error:(err)=>{
            this.errorSubject.next(err)
            
        }}   )
    }

    singleuserData(id: number){
        let headers = new HttpHeaders();
       headers =  headers.set('content-type',"appilcation/json")
       headers = headers.set('Access-Control-Allow-Origin','*')
       let QuearyParams = new HttpParams
       QuearyParams = QuearyParams.set('name','ukesh')
       return  this.http.get<User[]>("https://jsonplaceholder.typicode.com/users",{headers:headers,params:QuearyParams,observe:'events'})
    }


}