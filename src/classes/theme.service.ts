import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToggleSwitchDesignTokens } from '@primeuix/themes/types/toggleswitch';
import { LocalStorageService } from './local-storage.service';
import { inject, Injectable } from '@angular/core';
import { IThemeOption } from '../interfaces/IThemeOptions';
import { APP_CONFIG } from '../config.token';
import { usePreset } from '@primeuix/themes';
import { AppConfig } from '../interfaces/IAppConfig';
import { Theme } from '../enums/Theme';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  localStorageService: LocalStorageService = inject(LocalStorageService);
  APP_CONFIG: AppConfig = inject(APP_CONFIG);

  private readonly MODE_KEY: string = 'mode';
  private readonly THEME_KEY: string = 'theme';

  html: HTMLElement = document.documentElement;

  themeOptions: IThemeOption[] = [
    {
      name: 'Aura',
      value: Theme.AURA,
      preset: Aura,
    },
    {
      name: 'Lara',
      value: Theme.LARA,
      preset: Lara,
    },
    {
      name: 'Nora',
      value: Theme.NORA,
      preset: Nora,
    },
  ];

  savedMode: boolean = this.localStorageService.getItem<boolean>(this.MODE_KEY) ?? false;
  private darkModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.savedMode);
  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable()
    .pipe(
      tap((isDarkMode: boolean) => this.html.classList.toggle('dark', isDarkMode))
    );

  savedTheme: Theme = this.localStorageService.getItem<Theme>(this.THEME_KEY) ?? Theme.AURA;
  private themeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.savedTheme);
  theme$: Observable<Theme> = this.themeSubject.asObservable();

  setDarkMode(isDarkMode: boolean): void {
    if (!this.APP_CONFIG.enableTheming) {
      return;
    }
    this.darkModeSubject.next(isDarkMode);
    this.localStorageService.setItem(this.MODE_KEY, isDarkMode);
    this.html.classList.toggle('dark', isDarkMode);
  }

  setTheme(theme: Theme): void {
    if (!this.APP_CONFIG.enableTheming) return;
    this.themeSubject.next(theme);
    this.localStorageService.setItem(this.THEME_KEY, theme);

    const option: IThemeOption | undefined = this.themeOptions.find(
      (option: IThemeOption) => option.value === theme,
    );

    if (option) {
      usePreset(option.preset);
    }
  }

  customStyle: Partial<ToggleSwitchDesignTokens> = {
    colorScheme: {
      light: {
        root: {
          background: '{lime.300}',
          checkedBackground: '{amber.500}',
        },
      },
      dark: {
        root: {
          background: '{blue.700}',
          checkedBackground: '{amber.400}',
        },
      },
    },
  };

}
