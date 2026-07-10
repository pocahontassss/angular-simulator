import { Component, inject } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { Theme } from '../enums/Theme';
import { INavItem } from '../interfaces';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleSwitchChangeEvent, ToggleSwitchModule} from 'primeng/toggleswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AuthService } from '../features/auth/auth.service';
import { Observable } from 'rxjs';
import { IAuthUser } from '../features/auth/interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, RouterLink, SelectButtonModule, ToggleSwitchModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  themeService: ThemeService = inject(ThemeService)
  companyName: string = 'Румтибет';
  currentWidget: 'counter' | 'dateTime' = 'dateTime';
  counter: number = 0;
  formattedDateTime: string = new Date().toLocaleDateString('ru-Ru');
  
  user$: Observable<IAuthUser | null>= this.authService.user$;

  navItems: INavItem[] = [
    { 
      id: "main-page",
      title: "Главная", 
      link: "/"
    },
    {
      id: "users-page",
      title: "Пользователи", 
      link: "/users-page"
    },
    {
      id: 'posts-page',
      title: 'Posts',
      link: '/posts'
    },
  ];
  
  constructor() {
    setInterval(() => {
      this.formattedDateTime = new Date().toLocaleString('ru-RU');
    }, 1000);
  }

  setWidget(widget: 'counter' | 'dateTime'): void {
    this.currentWidget = widget;
  }

  incrementCounter(): void {
    this.counter++;
  }

  decrementCounter(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  toggleMode(event: ToggleSwitchChangeEvent): void {
    const isDark: boolean = event.checked;
    this.themeService.toggleDarkMode(isDark);
  }

  toggleTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}