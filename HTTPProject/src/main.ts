import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {
  MsalService,
  MsalBroadcastService,
  MSAL_INSTANCE,
  MsalGuard
} from '@azure/msal-angular';
import { MSALInstanceFactory } from './app/app.config';

// Create the msalInstance using the factory function
const msalInstance = MSALInstanceFactory();

async function main() {
  // 🟢 Wait until MSAL is initialized
  await msalInstance.initialize();

  await bootstrapApplication(AppComponent, {
    providers: [
      { provide: MSAL_INSTANCE, useValue: msalInstance },
      MsalService,
      MsalGuard,
      MsalBroadcastService,
      provideHttpClient(withInterceptors([])),
      provideRouter(routes),
    ],
  });
}

main().catch(err => console.error(err));