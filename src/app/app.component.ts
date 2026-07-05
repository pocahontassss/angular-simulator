import './training';
import { Component } from '@angular/core';
import { Color } from './enums/Color';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  companyName = 'РУМТИБЕТ'
  guidesCollection = new Collection<string>(['Иван', 'Петя', 'Сарра']);
  pricesCollection = new Collection<number>([ 100 , 200, 300]);
  isPrimaryColor(checkColor: Color): boolean {
  return checkColor === Color.Red || checkColor === Color.Green || checkColor === Color.Blue ; 
}

saveLastVisitDate(): void {
  const now  = new Date().toISOString();
  localStorage.setItem('lastVisitDate', now);
}

incrementVisitCount(): void {
  const storedCount = localStorage.getItem('visitCount');
  let count = storedCount ? parseInt(storedCount, 10) : 0 ;
  count++;
  localStorage.setItem('visitCount', count.toString());
}

constructor() {
  this.saveLastVisitDate();
  this.incrementVisitCount();

  console.log(this.isPrimaryColor(Color.Red));
  console.log(this.isPrimaryColor(Color.Green));

  console.log(this.guidesCollection.getAll());
  console.log(this.guidesCollection.get(1));

  this.pricesCollection.replace(0, 500);
  console.log(this.pricesCollection.getAll());
}
}
