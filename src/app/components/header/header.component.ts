import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container header-inner">
        <a routerLink="/" class="logo">ГОРНЫЙ СЛЕД</a>
        <nav class="nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            Главная
          </a>
          <a routerLink="/users" routerLinkActive="active">
            Пользователи
          </a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header { background: #0b2638; color: #fff; padding: 16px 0; }
    .header-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; }
    .logo { color: #fbd784; font-weight: 700; text-decoration: none; font-size: 20px; }
    .nav { display: flex; gap: 24px; }
    .nav a { color: #fff; text-decoration: none; font-weight: 600; transition: 0.2s; }
    .nav a:hover, .nav a.active { color: #fbd784; }
  `]
})
export class HeaderComponent {}