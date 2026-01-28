import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companyName: string = 'РУМТИБЕТ';

  private wordCollection: Collection<string> = new Collection<string>([]);
  private numberCollection: Collection<number> = new Collection<number>([]);

  constructor() {
    this.initCollections();

    const isRedPrimary: boolean = this.isPrimaryColor(Color.RED);
    const isBlackPrimary: boolean = this.isPrimaryColor(Color.BLACK);
    const isBluePrimary: boolean = this.isPrimaryColor(Color.BLUE);
    const isWhitePrimary: boolean = this.isPrimaryColor(Color.WHITE);

    this.saveLastVisitDate();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [
      Color.RED,
      Color.GREEN,
      Color.BLUE
    ];
    return primaryColors.includes(color);
  }

  initCollections(): void {
    localStorage.setItem('words', JSON.stringify(['кот', 'собака', 'дом']));
    localStorage.setItem('numbers', JSON.stringify([10, 20, 30]));
    
    this.wordCollection = new Collection<string>(
      JSON.parse(localStorage.getItem('words') || '[]')
    );
    this.numberCollection = new Collection<number>(
      JSON.parse(localStorage.getItem('numbers') || '[]')
    );
  }
  
  saveLastVisitDate(): void {
    const now: string = new Date().toISOString();
    localStorage.setItem('lastVisit', now);
  }

  saveVisitCount(): void {
  const currentCount: number = parseInt(localStorage.getItem('visitCount') || '0');
  const newCount: number = currentCount + 1;
  localStorage.setItem('visitCount', newCount.toString());
  }
}
