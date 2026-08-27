import { Component, OnInit } from '@angular/core';
import './training';
import { Color } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  // Задание 1: Свойство компонента для интерполяции в HTML
  public companyName: string = 'РумТибет';

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.saveLastVisitDate();
      this.trackVisitCount();
    }
  }

  ngOnInit(): void {
    console.log('Красный цвет основной?', this.isPrimaryColor(Color.Red));
    console.log('Синий цвет основной?', this.isPrimaryColor(Color.Blue));
  }

  // Задание 2: Проверка на основной цвет
  isPrimaryColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

  // Задание 3: Сохранение даты последнего визита
  saveLastVisitDate(): void {
    const dataStr = new Date().toISOString();
    localStorage.setItem('lastVisitDate', dataStr); 
  }

  // Задание 4: Подсчет и сохранение количества заходов
  trackVisitCount(): void {
    const currentCount = localStorage.getItem('visitCount');
    
    // Если визитов еще не было, ставим 0, иначе парсим строку в число
    const newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;
    
    localStorage.setItem('visitCount', newCount.toString());
  }
}

