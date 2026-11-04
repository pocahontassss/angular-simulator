import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IHeaderLinks } from '../../interfaces/interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  companyName: string = 'румтибет';

  headerLinks: IHeaderLinks[] = [
    {
      id: 1,
      linkName: 'Главная',
      href: '',
    },
    {
      id: 2,
      linkName: 'Пользователи',
      href: '/users',
    },
  ];

  interactive: 'counter' | 'date' = 'counter';
  count: number = 0;
  currentDate = new Date();
  private dateTimerId?: ReturnType<typeof setInterval>;

  showDate(): void {
    this.currentDate = new Date();
    this.interactive = 'date';
    clearInterval(this.dateTimerId);

    this.dateTimerId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  showCounter(): void {
    clearInterval(this.dateTimerId);
    this.interactive = 'counter';
  }
}
