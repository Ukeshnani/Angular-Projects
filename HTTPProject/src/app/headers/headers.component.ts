import { Component, inject, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiSerice } from '../services/API.service';
import { User } from '../Models/user.model';
import { Subscription } from 'rxjs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-headers',
  imports: [NgxSkeletonLoaderModule,CommonModule,DetailsComponent],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent implements OnDestroy {
   title = 'HTTPProject';
  http: HttpClient = inject(HttpClient);
  apiservice: ApiSerice = inject(ApiSerice);
  url: any;
  users!: User[];
  isloading!: boolean;
  errmessage:string | null = null
  srrsub!: Subscription
  singleVal!:any

  postData() {
    this.apiservice.postData().subscribe((res) => {
      this.users.push(res);
    });
  }

  getData() {
    this.isloading = true;
    this.apiservice.getdata().subscribe({
      next:(data) => {
      this.users = data;
      this.isloading = false;
    },
    error:(error)=>{
      this.showerror(error)
      this.isloading = false
     

    }
  });
  this.srrsub = this.apiservice.errorSubject.subscribe((error)=>{
    this.showerror(error)

  })
  }

  private showerror(err: HttpErrorResponse){
    console.log(err)
    if(err.status===404){
      this.errmessage = "this problem from our end please try again later"
    }
    setTimeout(()=>{
      this.errmessage = null
    },3000)

  }
  deleteUser(val: number) {
    this.apiservice.deleteuser(val)
  }


  viewUser(id:number){
    this.apiservice.singleuserData(id).subscribe((data)=>{
      this.singleVal = data
      console.log(data)

    })

  }
  ngOnDestroy(): void {
      this.srrsub.unsubscribe()
  }
}


