import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { usePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Preset } from '@primeuix/themes/types';
import { Theme } from '../enums/Theme';
import { IThemeOption } from '../interfaces/IThemeOption';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private localStorageService: LocalStorageService = inject(LocalStorageService);
  private themeNameSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.getDefaultTheme());
  private isDarkSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getDefaultDarkMode());

  theme$: Observable<Theme> = this.themeNameSubject.asObservable();
  isDarkMode$: Observable<boolean> = this.isDarkSubject.asObservable().pipe(
    tap((isDark: boolean) => {
      document.documentElement.classList.toggle('my-app-dark', isDark);
      this.localStorageService.saveData<boolean>('theme', isDark);
    })
  );

  themeOptions: IThemeOption[] = [
    { label: 'Aura', value: Theme.AURA },
    { label: 'Lara', value: Theme.LARA },
    { label: 'Nora', value: Theme.NORA },
  ];
 
  private readonly PRESETS: Record<Theme, Preset> = {
    [Theme.AURA]: Aura,
    [Theme.LARA]: Lara,
    [Theme.NORA]: Nora,
  };

  private getDefaultTheme(): Theme {
    return this.localStorageService.getItem<Theme>('theme-name') ?? Theme.AURA;
  }

  private getDefaultDarkMode(): boolean {
    return this.localStorageService.getItem<boolean>('dark-mode') ?? false;
  }

  toggleDarkMode(isDark: boolean): void {
    this.isDarkSubject.next(isDark);
  }

  setTheme(theme: Theme): void {
    this.themeNameSubject.next(theme);
    const preset: Preset = this.PRESETS[theme];
    if (preset) {
      usePreset(preset);
    }
    this.localStorageService.saveData<Theme>('theme-name', theme);
  }

}