import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
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
