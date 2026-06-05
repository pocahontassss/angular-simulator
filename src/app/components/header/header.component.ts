import { Component } from '@angular/core';
import { Mode } from '../../../enums/Mode'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigation } from '../../interfaces/INavigation';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  count: number = 0;
  modeType: typeof Mode = Mode; 
  currentMode: Mode = Mode.DATE;
  currentTime!: string;
  companyName: string = 'РУМТИБЕТ';

  navigations: INavigation[] = [
    {
      name: 'Главная',
      link: '/'
    }, 
    { 
      name: 'Пользователи',
      link: '/users'
    }
  ]
  
  constructor() {
    setInterval(() => {
      const now: Date = new Date();
      this.currentTime = now.toLocaleString();
    }, 1000);
  }
  
  toggleMode(mode: Mode): void {
    this.currentMode = mode;
  }
  
  decrease(): void {
    if (this.count > 0) {
      this.count--;
    }
  }
  
  increase(): void {
    this.count++;
  }
  
}