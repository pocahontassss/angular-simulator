import { Component } from '@angular/core';
import { Colors } from '../enums/Color';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'Румтибет';

  numberCollection = new Collection<number>([1, 2, 3, 4, 5]);
  stringCollection = new Collection<string>(['Boston', 'London', 'Винница']);

  constructor() {
    this.saveLastVisit();
    this.saveNumberOfVisits();
    this.test();
    console.log(this.numberCollection.getAllElements());
    console.log(this.stringCollection.getAllElements());
  }

  isColorRGB(color: string): boolean {
    return Object.values(Colors).includes(color as Colors);
  }

  saveLastVisit() {
    const now = new Date();
    localStorage.setItem('last visit', now.toString());
  }

  saveNumberOfVisits() {
    const visits = localStorage.getItem('number of visits');

    let count = visits ? parseInt(visits) : 0;
    count++;
    localStorage.setItem('number of visits', count.toString());
  }

  test() {
    const redCheck = this.isColorRGB('red');
    const pinkCheck = this.isColorRGB('pink');
    console.log(redCheck, pinkCheck);
    return { redCheck, pinkCheck };
  }
}
