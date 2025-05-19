import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { HeadingsComponent } from './headings/headings.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,HeadingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'RoutingNew';
  showLoader: boolean = false;
  router: Router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.showLoader = false;
      }
    });
  }
}
