import { InjectionToken } from '@angular/core';
import { AppConfig } from './interfaces/IAppConfig';

export const APP_CONFIG: InjectionToken<AppConfig> = new InjectionToken<AppConfig>('APP_CONFIG');
