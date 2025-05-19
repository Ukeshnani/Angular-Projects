import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptor/auth.interceptor';
import { isurlpath } from './interceptor/isurlpath.interceptor';
import { PublicClientApplication } from '@azure/msal-browser';
import { MSAL_INSTANCE, MsalService, MsalBroadcastService } from '@azure/msal-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
     provideHttpClient(
      withInterceptors([authInterceptor,isurlpath])
    )
  ]
};
export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: 'fa9d01a2-badc-4cc9-93d4-0ffa59f97304',
      authority: 'https://login.microsoftonline.com/8f6bd982-92c3-4de0-985d-0e287c55e379',
      redirectUri: 'http://localhost:4200/',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true
    }
  });
}
export const msalInstance = MSALInstanceFactory();