import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import './training'
import { Colors } from '../enums/Color';
import './collection';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MessageComponent } from '../message/message.component';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, MessageComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  storage: LocalStorageService = inject(LocalStorageService);

  loader: LoaderService = inject(LoaderService);



  isLoaded: boolean = false;

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
    this.loading();
    this.loader.hideLoader();
  }

  checkColor(color: Colors): boolean {
    return Object.values(Colors).includes(color);
  }

  private saveLastVisit(): void {
    this.storage.setItemLocalStorage('lastVisit', new Date().toLocaleString());
  }

  private saveVisitCount(): void {
    let count = this.storage.getItemLocalStorage<string, number>('visitCount') || 0;
    this.storage.setItemLocalStorage('visitCount', ++count);

  }

  private loading(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000)
  }

}
