import './training';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './message/message.component';
import { Color } from '../enums/Color';
import { Collection } from '../collection';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MessageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  public readonly numberCollection = new Collection<number>([10, 20, 30]);
  public readonly colorCollection = new Collection<Color>([Color.Red, Color.Green, Color.Blue]);

  protected isLoading = true;

  private loadingTimeoutId: number | undefined;

  constructor(private readonly storage: StorageService) {
    this.saveLastVisitDate();
    this.saveVisitCount();
  }

  public ngOnInit(): void {
    this.loadingTimeoutId = window.setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  public ngOnDestroy(): void {
    window.clearTimeout(this.loadingTimeoutId);
  }

  public isPrimaryColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

  private saveLastVisitDate(): void {
    this.storage.setItem('lastVisitDate', new Date().toISOString());
  }

  private saveVisitCount(): void {
    const savedCount = Number(this.storage.getItem<number>('visitCount') ?? 0);
    this.storage.setItem('visitCount', (Number.isFinite(savedCount) ? savedCount : 0) + 1);
  }
}


