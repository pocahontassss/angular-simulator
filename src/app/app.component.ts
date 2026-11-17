import { Component, inject } from '@angular/core';
import { StorageService } from './services/storage.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { LoaderComponent } from '../loader/loader.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MessageComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  private themeService: ThemeService = inject(ThemeService);
  private storageService: StorageService = inject(StorageService);

  constructor() {
    this.storageService.setItem('lastVisit', new Date());
    const visitCount: number = this.storageService.getItem<number>('visitCount');
    const count: number = Number(visitCount) || 0;
    this.storageService.setItem('visitCount', count + 1);
  }

}
