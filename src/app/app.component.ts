import { FormsModule } from '@angular/forms';
import { Color } from '../enums/Color';
import { Collection } from './collection';
import './training';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';
  liveInput: string = '';
  isLoading: boolean = true;
  currentDate: string = '';
  activeMode: string = 'date';
  clickerCount: number = 0;



  tours = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconUrl: 'people',
    },

    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconUrl: 'shield',
    },

    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconUrl: 'tag',
    },
  ];

  companyTitle: string = 'РУМТИБЕТ';
  stringCollection: Collection<string> = new Collection<string>();
  numberCollection: Collection<number> = new Collection<number>();

  constructor() {
    this.saveLastVisitDate();
    this.trackVisitsCount();
    setInterval(() => { this.currentDate = new Date().toLocaleString() }, 1000);
    setTimeout(() => { this.isLoading = false }, 2000);
  }

  isPrimaryColor(color: Color): boolean {
    if (color === Color.RED || color === Color.GREEN || color === Color.BLUE) {
      return true;
    }
    return false;
  }

  private saveLastVisitDate(): void {
    localStorage.setItem('lastVisit', new Date().toISOString());
  }

  private trackVisitsCount(): void {
    const savedCount: string | null = localStorage.getItem('visitsCount');
    if (!savedCount) {
      localStorage.setItem('visitsCount', '1');
    } else {
      const currentCount = parseInt(savedCount ?? '0') + 1;
      localStorage.setItem('visitsCount', currentCount.toString());
    }
  }

}
