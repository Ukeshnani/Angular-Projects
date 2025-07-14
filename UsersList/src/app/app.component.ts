import { Component, inject, OnDestroy, OnInit } from '@angular/core';
// import { UsersComponent } from './users/users.component';
import { ApiFacadeService } from './Services/api-facade.service';
import { forkJoin, Subject } from 'rxjs';
import { CreateMessageModel } from './Services/hrx-api.service';
export interface Body {
  userID: string;
  grantedBy: string;
  title: string;
  projectName: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  protected title = 'UsersList';

  #destroy$: Subject<void> = new Subject();
  #apiFacade = inject(ApiFacadeService);

  static body: Body = {
    grantedBy: "",
    userID: '',
    title: '',
    projectName: ''
  }

  body: Body = {
    userID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    grantedBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'string',
    projectName: 'string',
  };
  public ngOnInit(): void {
    // this.apiFacade.getAiChat().subscribe((data)=>{
    //   console.log(data)
    // })
    // this.apiFacade
    //   .gteAiChatv2({
    //     session_id: 'b5275071-09f3-43b2-becf-08dd70e2f7c6',
    //     user_Text: 'kfsosf',
    //   } as CreateMessageModel)
    //   .pipe(takeUntil(this.#destroy$))
    //   .subscribe((d) => console.log(d));

    forkJoin([
      this.#apiFacade.getAiChatv2({
        session_id: 'b5275071-09f3-43b2-becf-08dd70e2f7c6',
        user_Text: 'kfsosf',
      } as CreateMessageModel),
      this.#apiFacade.getAiChatv2({
        session_id: 'b5275071-09f3-43b2-becf-08dd70e2f7c6',
        user_Text: 'kfsosf',
      } as CreateMessageModel),
    ])
      .pipe()
      .subscribe(([d1, d2]) => {
        console.log(d1, d2);
      });
  }

  public ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }
}