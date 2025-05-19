import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  router: Router = inject(Router) //by default absolute path
  activeRout: ActivatedRoute = inject(ActivatedRoute) //this for add relative to some route while navigating

  navigatePage(){
    // this.router.navigate(['Home'])
    // this.router.navigate(['Home'],{relativeTo: this.activeRout}) //Relative path
    this.router.navigateByUrl('Home')
  }

}
