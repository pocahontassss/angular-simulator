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

  companyName: string = 'Румтибет';

  numberCollection: Collection<number> = new Collection<number>([1, 2, 3, 4, 5]);
  stringCollection: Collection<string> = new Collection<string>(['Boston', 'London', 'Винница']);

  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    const mainColors: Color[] = [Color.RED, Color.GREEN, Color.BLUE];
    return mainColors.includes(color);
  }

  saveLastVisit(): void {
    const LAST_VISIT_KEY: string = 'last-visit';
    const now: Date = new Date();
    localStorage.setItem(LAST_VISIT_KEY, now.toString());
  }

  saveVisitCount(): void {
    const VISIT_COUNT_KEY: string = 'visit-count';
    const visits: string | null = localStorage.getItem(VISIT_COUNT_KEY);

    let count: number = visits ? parseInt(visits) : 0;
    count++;

    localStorage.setItem(VISIT_COUNT_KEY, count.toString());
  }

}
