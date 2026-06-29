import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Colors } from '../enums/Color';
import { LocalStorageService } from './services/local-storage-service';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import './training';
import './collection';
import { HomePage } from './home-page/home-page';
import { ShowMessageService } from './services/show-message-service';
import { ToastMessages } from './toast-messages/toast-messages';
import { LoaderComponent } from './loader/loader-component/loader-component';
import { LoaderService } from './services/loader-service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, Footer, Header, ToastMessages, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  private loaderService: LoaderService = inject(LoaderService);
  
  constructor() {
    this.saveLastVisitDate();
    this.quantityVisits();
    
    this.showLoader();
  }
  
  isRgbColor(color: Colors): boolean {
    return color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE;
  }
  
  private saveLastVisitDate(): void {
    const lastVisit = this.localStorageService.getValue<string>('lastPageVisit');
    
    if (lastVisit) {
      console.log(`С возвращением, вам последний визит был ${lastVisit}`)
    } else {
      console.log('Добро пожаловать! Это ваш превый визит');
    }
    
    const now = new Date().toLocaleString();
    this.localStorageService.setValue('lastPageVisit', now);
  }
  
  private quantityVisits() {
    const rawVisits = this.localStorageService.getValue<string>('numberVisits');
    
    const currentVisits = Number(rawVisits) || 1;
    
    if(currentVisits > 1) {
      console.log(`Приветствую вас снова, это ваш ${currentVisits} визит`);
    } else {
      console.log('Добро пожаловать, это ваш первый визит');
    }
    
    this.localStorageService.setValue('numberVisits', (currentVisits+1).toString())
  }
  
  showLoader() {
    this.loaderService.showLoader();
  }
  
  hideLoader() {
    this.loaderService.hideLoader();
  }
}