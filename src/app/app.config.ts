import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';

import { Preset } from '@primeuix/themes/types';
import { Theme } from '../enums/Theme';
import { loggingInterceptor } from '../interceptors/logging-interceptor';
import { httpErrorInterceptor } from '../interceptors/http-error-interceptor';
import { authInterceptor } from '../features/auth/auth.interceptor';
import { AuthService } from '../features/auth/auth.service';
import { DATE_FORMAT } from '../date-format.token';
import { APP_CONFIG } from '../config.token';

function getThemePresetFromStorage(): Preset {
  const themeMap: Record<Theme, Preset> = {
    [Theme.AURA]: Aura,
    [Theme.LARA]: Lara,
    [Theme.NORA]: Nora,
  };

  const saved: Theme = localStorage.getItem('theme') as Theme;

  const theme: Theme = saved && saved in themeMap ? saved : Theme.AURA;

  return themeMap[theme];
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([loggingInterceptor, httpErrorInterceptor, authInterceptor]),
    ),
    provideRouter(routes),
    provideZoneChangeDetection(),
    providePrimeNG({
      theme: {
        preset: getThemePresetFromStorage(),
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => () => authService.checkAuth(),
      deps: [AuthService],
      multi: true,
    },
    {
      provide: DATE_FORMAT,
      useValue: 'dd.MM.yyyy HH:mm',
    },
    {
      provide: APP_CONFIG,
      useValue: {
        companyName: 'румтибет',
        enableLogs: true,
        enableNotifications: true,
        enableTheming: true,
        sessionTimeout: 30,
      },
    },
  ],
};
