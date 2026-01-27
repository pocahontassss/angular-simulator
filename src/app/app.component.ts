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

  private readonly primaryColors: Color[] = [
    Color.RED,
    Color.GREEN,
    Color.BLUE
  ];

  private wordCollection: Collection<string> = new Collection<string>;
  private numberCollection: Collection<number> = new Collection<number>;

  constructor() {
    this.initCollections();

    const isRedPrimary = this.isPrimaryColor(Color.RED);
    const isBlackPrimary = this.isPrimaryColor(Color.BLACK);
    const isBluePrimary = this.isPrimaryColor(Color.BLUE);
    const isWhitePrimary = this.isPrimaryColor(Color.WHITE);

    console.log('RED:', isRedPrimary);
    console.log('BLACK', isBlackPrimary);
    console.log('BLUE', isBluePrimary);
    console.log('WHITE', isWhitePrimary);

    console.log('Слова:', this.wordCollection.getAll());
    console.log('Числа:', this.numberCollection.getAll());

    this.saveLastVisitDate();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    return this.primaryColors.includes(color);
  }

  initCollections() {
    localStorage.setItem('words', JSON.stringify(['кот', 'собака', 'дом']));
    localStorage.setItem('numbers', JSON.stringify([10, 20, 30]));
    
    this.wordCollection = new Collection<string>(
      JSON.parse(localStorage.getItem('words') || '[]')
    );
    this.numberCollection = new Collection<number>(
      JSON.parse(localStorage.getItem('numbers') || '[]')
    );
  }
  
  saveLastVisitDate() {
    const now = new Date().toISOString();
    localStorage.setItem('lastVisit', now);
    console.log('Последний визит:', now);
  }

  saveVisitCount() {
  const currentCount = parseInt(localStorage.getItem('visitCount') || '0');
  const newCount = currentCount + 1;
  localStorage.setItem('visitCount', newCount.toString());
  console.log('Заходов:', newCount);
  }
}
