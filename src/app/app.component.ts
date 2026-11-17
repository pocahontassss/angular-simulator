import './training';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MessageType } from './models/message';
import { MessageService } from './services/message.service';
import { StorageService } from './services/storage.service';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutHikeComponent } from './about-hike/about-hike.component';
import { ProgramsComponent } from './programs/programs.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TravelBlogComponent } from './travel-blog/travel-blog.component';
import { Color } from '../enums/Color';
import { Collection } from '../collection';

@Component({
  selector: 'app-root',
  imports: [DestinationsComponent, TravelBlogComponent, NgTemplateOutlet, NavbarComponent, RouterOutlet, HeroComponent, AboutHikeComponent, ProgramsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  public readonly numberCollection = new Collection<number>([10, 20, 30]);
  public readonly colorCollection = new Collection<Color>([Color.Red, Color.Green, Color.Blue]);

  protected readonly messageType = MessageType;

  protected isLoading = true;

  private loadingTimeoutId: number | undefined;

  constructor(
    protected readonly messageService: MessageService,
    private readonly storage: StorageService,
  ) {
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


