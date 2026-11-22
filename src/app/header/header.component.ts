import { Component, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  protected readonly links = [
    { label: 'Главная', path: '/' },
    { label: 'Пользователи', path: '/users' },
  ];
  protected readonly activeLinkOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'ignored',
    matrixParams: 'ignored',
    fragment: 'ignored',
  };

  protected readonly companyName = 'РУМТИБЕТ';
  protected currentDate = new Date().toLocaleString('ru-RU');
  protected clickCount = 0;
  protected isTimerVisible = true;

  private timerId: number | undefined;

  public ngOnInit(): void {
    this.timerId = window.setInterval(() => {
      this.currentDate = new Date().toLocaleString('ru-RU');
    }, 1000);
  }

  public ngOnDestroy(): void {
    window.clearInterval(this.timerId);
  }

  protected increaseCount(): void {
    this.clickCount += 1;
  }

  protected decreaseCount(): void {
    if (this.clickCount > 0) {
      this.clickCount -= 1;
    }
  }

  protected toggleWidget(): void {
    this.isTimerVisible = !this.isTimerVisible;
  }
}
