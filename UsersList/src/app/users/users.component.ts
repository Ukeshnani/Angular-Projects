// import { Component, DestroyRef, inject, OnInit } from '@angular/core';
// import { ApiServicesService } from '../Services/api-services.service';
// import { User } from '../Models/Models/users.module';
// import { CommonModule } from '@angular/common';
// import { concatMap, from, interval, map, Subject, take, takeUntil } from 'rxjs';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// @Component({
//   selector: 'users',
//   imports: [CommonModule],
//   templateUrl: './users.component.html',
//   styleUrl: './users.component.scss',
// })
// export class UsersComponent implements OnInit {
//   private apiService = inject(ApiServicesService);
//   protected userList!: User[];
//   protected namesData$: Array<string> = [
//     'ukesh',
//     'nani',
//     'abhinay',
//     'jhon',
//     'david',
//     'frattin',
//     'joseph',
//     'domin',
//     'frank',
//   ];
//   private destroyRef = inject(DestroyRef)

//   protected unsub$ = new Subject()

//   ngOnInit() {
//     this.allUsers();
//   }

//   protected allUsers() {
//     this.apiService.getUserData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
//       next: (data) => {
//         this.userList = data;
//       },
//       error: (er) => {
//         console.log(er.error);
//       },
//     });
//   }
//   protected activeUsers() {
//     this.apiService
//       .getUserData()
//       .pipe(map((data) => data.filter((data) => data.isActive === true)))
//       .subscribe({
//         next: (data) => {
//           this.userList = data;
//         },
//       });
//   }
//   protected verifiedUsers() {
//     this.apiService
//       .getUserData()
//       .pipe(map((data) => data.filter((data) => data.isVerified === true)))
//       .subscribe({
//         next: (data) => {
//           this.userList = data;
//         },
//       });
//   }
//   protected takeUsers() {
//     // this.apiService.getUserData().pipe(take(3)).subscribe({
//     //   next:(data)=>{
//     //     this.userList = data
//     //   }
//     // })
//     from(this.namesData$)
//       .pipe(take(4))
//       .subscribe({
//         next: (data) => {
//           console.log(data);
//         },
//       });
//   };

//   protected takeUntilMethod(){
//     interval(1000).pipe(takeUntil(this.unsub$)).subscribe((data)=>{
//       console.log(data);

//     });
//     setTimeout(()=>{
//       this.unsub$.next(0)

//     },10000)

//   }
// }
