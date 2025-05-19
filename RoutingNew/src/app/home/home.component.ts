import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router: Router = inject(Router)
  onSearch(val:string){
    this.router.navigate(['/Items'],{queryParams:{search: val}});

  }


}
