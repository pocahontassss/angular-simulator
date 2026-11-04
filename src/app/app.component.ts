import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import './training';
import { Color } from '../enums/color';
import './collection';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MessagesComponent } from '../layout/messages/messages.component';
import { LoaderComponent } from '../layout/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    MessagesComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  LocalStorageService: LocalStorageService = inject(LocalStorageService);

  constructor() {
    this.saveLastVisit();
    this.saveNumberOfVisits();
    console.log(this.LocalStorageService.getItem('lastVisitTime'));
    console.log(this.LocalStorageService.getItem('NumberOfVisits'));
  }

  private isPrimaryColor(color: string): boolean {
    return color === Color.RED || color === Color.GREEN || color === Color.BLUE;
  }

  private saveLastVisit(): void {
    const time = new Date().toLocaleString();
    this.LocalStorageService.setItem('lastVisitTime', time);
  }

  private saveNumberOfVisits(): void {
    const numberOfVisitsBefore = Number(this.LocalStorageService.getItem('NumberOfVisits')) || 0;
    this.LocalStorageService.setItem('NumberOfVisits', String(numberOfVisitsBefore + 1));
  }
}
