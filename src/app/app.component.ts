import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/color'
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  constructor() {
    this.saveLastVisit();
    this.saveVisitsCount();

    const users = new Collection<string>(['Лев', 'Максимильян', 'Марат', 'Яков', 'Григорий ']);
    console.log(users.getAll());
    console.log(users.getDeterminate(2));
    users.replace(1, 'Жан-Поль');
    users.remove(0);
    console.log(users.getAll());
  }

  companyName: string = 'румтибет';

  isPrimaryColor(color: Color): boolean {
    return (
      color === Color.RED ||
      color === Color.GREEN ||
      color === Color.BLUE
    );
  }

  saveLastVisit(): void {
    localStorage.setItem('lastVisit', new Date().toISOString());
  }

  saveVisitsCount(): void {
    const visits = Number(localStorage.getItem('visits')) || 0;

    localStorage.setItem('visits', String(visits + 1));
  }
}