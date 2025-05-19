import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './Models/user.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ApiSerice } from './services/API.service';
import { Subscription } from 'rxjs';
import { SecondComponent } from './second/second.component';
import { DetailsComponent } from './details/details.component';
import { HeadersComponent } from './headers/headers.component';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NgxSkeletonLoaderModule,SecondComponent,RouterLink,DetailsComponent,HeadersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  private msalService = inject(MsalService);
  login() {
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logoutRedirect();
  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getAllAccounts().length > 0;
  }

  getUsername(): string {
    return this.msalService.instance.getAllAccounts()[0]?.username || '';
  }
  
}
