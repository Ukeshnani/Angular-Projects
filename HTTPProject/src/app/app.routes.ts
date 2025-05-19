import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { SecondComponent } from './second/second.component';
import { HeadersComponent } from './headers/headers.component';
import { LogOnComponent } from './log-on/log-on.component';
import { MsalGuard } from '@azure/msal-angular';

const msalGuard = () => (route: any, state: any) =>
  (inject(MsalGuard) as MsalGuard).canActivate(route, state)

export const routes: Routes = [{
    path:"second",
    component:SecondComponent,

    canActivate:[msalGuard]
},
{
    path:"first",
    component:HeadersComponent,
    canActivate: [msalGuard]
},
{
    path:"login",
    component:LogOnComponent
}
];
