import { Component } from '@angular/core';
import { INavigationLinks } from '../../interfaces/INavigationLinks';
import { UrlCodec } from '@angular/common/upgrade';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  companyName: string = 'румтибет';
  isClickerMode: boolean = true;
  clickCount: number = 0;
  currentDate: string = '';
  
  navigationLinks: INavigationLinks[] = [
    {
      id: 1,
      name: 'Главная',
      url: ''
    },
    {
      id: 2,
      name: 'Пользователи',
      url: 'users'
    }
  ]
  
  constructor() {
    this.currentDate = new Date().toLocaleString();
    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);
  }
  
  increment(): void {
    this.clickCount++;
  }
  
  decrement(): void {
    if (this.clickCount > 0) {
      this.clickCount--;
    }
  }
  
  toggleMode(): void {
    this.isClickerMode = !this.isClickerMode;
  }
}
