import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StorageService } from '../interfaces/localStorage.service';
import { MessageComponent } from './components/message/message.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MessageComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private storageService: StorageService) {
    this.saveLastVisit();
    this.saveNumberOfVisits();
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  private saveLastVisit(): void {
    const date = new Date().toString();
    this.storageService.setItem<string>('lastVisit', date);
  }

  private saveNumberOfVisits(): void {
    const visits = this.storageService.getItem<number>('visits') || 0;
    this.storageService.setItem<number>('visits', visits + 1);
  }
}