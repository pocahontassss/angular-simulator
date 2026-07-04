import { FormsModule } from '@angular/forms';
import { Collection } from '../collection';
import { Colors } from '../enums/Color';
import { Component } from '@angular/core';
import './training';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isLoading = true;
  public liveText = '';
  public count = 0;
  public showTask4 = true;
  public currentDate = new Date().toLocaleString();
  public companyName = 'РУМТИБЕТ';
  public location = '';
  public date = '';
  public participants = '';
  public items = [
    {
      id: 1,
      title: 'Опытный гид',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'icon-guide.png',
    },
    {
      id: 2,
      title: 'Безопасный поход',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'icon-shield.png',
    },
    {
      id: 3,
      title: 'Лояльные цены',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'icon-price.png',
    },
  ];
  constructor() {
    console.log(this.isMainColor(Colors.Red));
    console.log(this.isMainColor(Colors.Yellow));
    this.saveLastVisit();
    this.countVisits();
    const colors = new Collection([Colors.Red, Colors.Green, Colors.Blue]);
    const visits = new Collection([localStorage.getItem('visitCount')]);
    console.log(colors.getAll());
    console.log(visits.getAll());
    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  private isMainColor(color: Colors): boolean {
    if (color === Colors.Red || color === Colors.Green || color === Colors.Blue) {
      return true;
    } else {
      return false;
    }
  }
  private countVisits() {
    if (localStorage.getItem('visitCount') === null) {
      localStorage.setItem('visitCount', '1');
    } else {
      let count = Number(localStorage.getItem('visitCount'));
      count = count + 1;
      localStorage.setItem('visitCount', String(count));
    }
  }
  private saveLastVisit() {
    localStorage.setItem('lastVisit', new Date().toString());
  }
}
