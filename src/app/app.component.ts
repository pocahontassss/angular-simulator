import { Component } from '@angular/core';
import { Color } from '../enums/color';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';
  private readonly primaryColors: Color[] = [Color.Red, Color.Green, Color.Blue];
  private static readonly LAST_VISIT_KEY = 'lastVisitDate';
  private static readonly VISIT_COUNT_KEY = 'visitCount';

  constructor() {
    this.saveLastVisitDate();
    this.saveVisitCount();

    // 1-я коллекция: цвета
    const colorsCollection = new Collection<Color>([Color.Red, Color.Green, Color.Blue]);
    console.log('Коллекция цветов:', colorsCollection.getAll());

    // 2-я коллекция: числа
    const numbersCollection = new Collection<number>([10, 20, 30, 40]);
    console.log('Коллекция чисел:', numbersCollection.getAll());

    numbersCollection.removeItem(1);
  }

  // Проверяет, является ли переданный цвет основным (Red, Green, Blue).
  isPrimaryColor(color: Color): boolean {
    return this.primaryColors.includes(color);
  }

  // Сохраняет в localStorage дату текущего захода на страницу.
  saveLastVisitDate(): void {
    const now = new Date().toISOString();
    localStorage.setItem(AppComponent.LAST_VISIT_KEY, now);
  }

  // Увеличивает и сохраняет в localStorage количество заходов на страницу.
  saveVisitCount(): void {
    const currentCount = Number(localStorage.getItem(AppComponent.VISIT_COUNT_KEY)) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem(AppComponent.VISIT_COUNT_KEY, newCount.toString());

    console.log('Текущее количество заходов (до):', currentCount);
    console.log('Новое количество заходов (после):', newCount);
  }
}
