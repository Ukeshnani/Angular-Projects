import { Routes } from '@angular/router';
import { AboteComponent } from './abote/abote.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogInComponent } from './log-in/log-in.component';
import { canActivate, resolve} from './authgaurd'
import { Component } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    {
        path:"",
        component:LogInComponent

    },
    {
        path:"Home",
        loadComponent: () => import('./home/home.component').then(m=>m.HomeComponent),
        canActivate:[canActivate],
        title:"Home"
    },
    {
        path:"About",
        component: AboteComponent,
        canActivate:[canActivate],
        title:"About"
    },
    {
        path:"Items",
        component:ItemListComponent,
        canActivate:[canActivate],
        resolve: {items: resolve },
        title:"Items",
    },
    {
        path:"Items",
        children:[
            {
                path:':id',
                component:EditItemComponent,
                title:"items list"
            }

        ],
        canActivateChild:[canActivate]
    },
    // {
    //     path:"Items/:id",
    //     component:EditItemComponent
    // },
    {
        path:"login",
        component:LogInComponent,
        title:"Login"

    },
    {
        path:"checkout",
        component: CheckoutComponent,
        // data:{name:"gt650",cc:650}

    },
    {
        path:"**",
        component: NotFoundComponent,
        title:"not found"
    }
];
