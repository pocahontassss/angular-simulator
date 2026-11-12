import { Component, inject } from '@angular/core';
import { ToastService } from '../app/toast.service';
import { MessageType } from '../enums/MessageType';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavItem } from '../interfaces/INavItem';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

toastService: ToastService = inject(ToastService);  
  companyTitle: string = 'РУМТИБЕТ';
  isLoading: boolean = true;
  activeMode: string = 'date';
  currentDate: string = '';
  clickerCount: number = 0;
  messageType: typeof MessageType = MessageType;

  navItems: INavItem[] = [
    { title: 'Главная', link: '' },
    { title: 'Пользователи', link: 'users' }
  ];

  constructor() {
    setInterval(() => { this.currentDate = new Date().toLocaleString() }, 1000);
    setTimeout(() => { this.isLoading = false }, 2000);
  }

}
