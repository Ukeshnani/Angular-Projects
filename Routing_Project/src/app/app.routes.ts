import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { EditGroceryItemComponent } from './edit-grocery-item/edit-grocery-item.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },
    {
        path:'h',
        redirectTo:'Home'

    },
    {
        path: 'groceries',
        component: GroceryListComponent,
        children:[
            
            {
                path:'details/:groceryId',
                component: EditGroceryItemComponent
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent
    }
   
];
