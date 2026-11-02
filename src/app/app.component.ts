import './training';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutHikeComponent } from './about-hike/about-hike.component';
import { ProgramsComponent } from './programs/programs.component';
import { Color } from '../enums/Color';
import { Collection } from '../collection';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, HeroComponent, AboutHikeComponent, ProgramsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  public readonly numberCollection = new Collection<number>([10, 20, 30]);
  public readonly colorCollection = new Collection<Color>([Color.Red, Color.Green, Color.Blue]);

  protected isLoading = true;

  private loadingTimeoutId: number | undefined;

  constructor() {
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
    localStorage.setItem('lastVisitDate', new Date().toISOString());
  }

  private saveVisitCount(): void {
    const savedCount = Number(localStorage.getItem('visitCount') ?? '0');
    localStorage.setItem('visitCount', String(savedCount + 1));
  }
}


