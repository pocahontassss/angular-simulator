import { Component } from '@angular/core';
import './training';
import './collection';
import { Colors } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

//2. Создать папку enums в папке src, в ней файл Color.ts, который экспортирует enum различных цветов (обязательно красный, зеленый, синий (RGB)). Создать метод внутри app.component, который проверяет, является ли переданный цвет основным, а основных у нас 3 цвета (красный, синий, зеленый) и возвращает нам true/false 
export class AppComponent {
  constructor() {
    this.saveLastVisit();
    this.saveNumberOfVisits();
  }
  check(color: string): boolean {
    return color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE;
  }

  //3. Далее создать метод, которая сохраняет в локальное хранилище дату последнего захода на страницу. Вызывать ее в конструкторе.
  saveLastVisit(): void {
    const date = new Date().toString();
    localStorage.setItem('lastVisit', date);
  }

  //4. Далее создать метод, которая сохраняет в localStorage количество заходов на страницу.  Вызывать ее в конструкторе.
  saveNumberOfVisits(): void {
    let currentVisits = 0;
    if (localStorage.getItem('visit') === null) {
      currentVisits = 1;
    } else {
      currentVisits = Number(localStorage.getItem('visit')) + 1;
    }
    localStorage.setItem('visit', currentVisits.toString());
  }
}



