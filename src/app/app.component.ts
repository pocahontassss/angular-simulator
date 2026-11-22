import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import { Collection } from '../collection';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  logoName: string = 'РУМТИБЕТ';
  location: string = '';
  date: string = '';
  participants: string = '';
  currentDate: Date = new Date();
  isDateVisible: boolean = false;
  counter: number = 0;
  isCounterVisible: boolean = false;
  userText: string = '';
  isLoading: boolean = true;
  features = [
  {
    Image: 'images/peopleImage.svg',
    title: 'Опытный гид',
    description: `Для современного мира базовый вектор развития предполагает
независимые способы реализации соответствующих условий активизации.`,
  },
  {
    Image: 'images/supportImage.svg',
    title: 'Безопасный поход',
    description: `Для современного мира базовый вектор развития предполагает
независимые способы реализации соответствующих условий активизации.`,
  },
  {
    Image: 'images/pricesImage.svg',
    title: 'Лояльные цены',
    description: `Для современного мира базовый вектор развития предполагает
независимые способы реализации соответствующих условий активизации.`,
  }
  ];


  constructor() {
    this.saveLastVisit();
    this.saveQuantityVisits(); 

  setTimeout(() => {
  this.isLoading = false;
  }, 2000);

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

    // Первый источник данных  
    const products: Collection<string> = new Collection<string>([
      'Ноутбук',
      'Мышь',
      'Клавиатура'
    ]);

    // Второй источник данных  
    const prices: Collection<number> = new Collection<number>([
      75000,
      1500,
      4000
    ]);
  }
  // - конструктор

  isPrimaryColor(color: Color): boolean {
    return [
      Color.RED,
      Color.GREEN,
      Color.BLUE
    ].includes(color);
  }

  saveLastVisit(): void {
    localStorage.setItem('lastVisit', new Date().toISOString());
  }

  saveQuantityVisits(): void {
    const visits: number = Number(localStorage.getItem('visits')) || 0;
    localStorage.setItem('visits', String(visits + 1));
  }
  showDate(): void {
  this.isDateVisible = !this.isDateVisible;
  }  
  showCounter(): void {
  this.isCounterVisible = !this.isCounterVisible;
  }
  increaseCounter(): void {
    this.counter++;
  }
  decreaseCounter(): void {
    this.counter--;
  }
}



 