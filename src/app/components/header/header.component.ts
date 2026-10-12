import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  navLinks: NavLink[] = [
    { label: 'Главная', path: '/' },
    { label: 'Пользователи', path: '/users' }
  ]

  currentDateTime: string = '';
  clickCount: number = 0;
  taskFour: boolean = true;
  clockIntervalId: any;

  ngOnInit(): void {
    this.startClock();
  }

  ngOnDestroy(): void {
    if (this.clockIntervalId) {
      clearInterval(this.clockIntervalId);
    }
  }

  private startClock(): void {
    this.currentDateTime = new Date().toLocaleString('ru-RU');
    this.clockIntervalId = setInterval(() => {
      this.currentDateTime = new Date().toLocaleString('ru-RU');
    }, 1000);
  }

  public increment(): void {
    this.clickCount += 1;
  }

  public decrement(): void {
    if (this.clickCount > 0) {
      this.clickCount -= 1;
    }
  }

  public toggleTask(): void {
    this.taskFour = !this.taskFour;
  }
}