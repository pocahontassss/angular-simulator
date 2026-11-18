import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { Color } from '../enums/color';
import { Collection } from '../collection';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  imports: [AboutComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isPrimaryColor(color: Color): boolean {
    if (color === Color.Red || color === Color.Green || color === Color.Blue) {
      return true;
    }
    return false;
  }

  saveLastVisit() {
    const now = new Date();
    localStorage.setItem('lastVisitDate', now.toString());
  }

  saveVisitCount() {
    const savedCount = localStorage.getItem('visitCount');

    if (savedCount) {
      const newCount = Number(savedCount) + 1;
      localStorage.setItem('visitCount', newCount.toString());
    } else {
      localStorage.setItem('visitCount', '1');
    }
  }

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
    console.log('Красный основной:', this.isPrimaryColor(Color.Red));

    console.log('Жёлтый основной:', this.isPrimaryColor(Color.Yellow));

    const numberCollection = new Collection<number>();
    numberCollection.add(10);
    numberCollection.add(20);
    numberCollection.add(30);

    console.log('числа', numberCollection.getAll());
    numberCollection.remove(1);
    console.log('После удаления:', numberCollection.getAll());
    console.log('Первый элемент чисел:', numberCollection.getItem(0));

    const stringCollection = new Collection<string>();
    console.log('Первый элемент строк:', stringCollection.getItem(0));

    stringCollection.add('Привет');
    stringCollection.add('Ангуляр');
    console.log('Первый элемент строк:', stringCollection.getItem(0));
    stringCollection.replace(0, 'Пока');
    console.log('Строки:', stringCollection.getAll());
    stringCollection.clear();
    console.log('После очистки:', stringCollection.getAll());
  }
}
