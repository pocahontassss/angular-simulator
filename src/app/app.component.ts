import { Component, NgModule } from '@angular/core';
import './training';
import { IService } from '../interfaces/IService';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentDateTime: string = '';
  selectedServiceId: number = 2;
  tourLocation: string = '';
  tourDate: string = '';
  tourParticipants: string = '';
  clickCount: number = 0;
  taskFour: boolean = true;
  inputValue: string = '';
  isLoading: boolean = true;

  services: IService[] = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      image: '/images/guide.png'
    },
    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      image: '/images/safe.png'
    },
    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      image: '/images/price.png'
    }
  ]

  constructor() {
    this.saveLastVisit();
    this.saveNumberOfVisits();
    this.startClock();
  }


  //3. Далее создать метод, которая сохраняет в локальное хранилище дату последнего захода на страницу. Вызывать ее в конструкторе.
  private saveLastVisit(): void {
    const date = new Date().toString();
    localStorage.setItem('lastVisit', date);
  }

  //4. Далее создать метод, которая сохраняет в localStorage количество заходов на страницу.  Вызывать ее в конструкторе.
  private saveNumberOfVisits(): void {
    let currentVisits = 0;
    if (localStorage.getItem('visit') === null) {
      currentVisits = 1;
    } else {
      currentVisits = Number(localStorage.getItem('visit')) + 1;
    }
    localStorage.setItem('visit', currentVisits.toString());
  }

  public selectService(serviceId: number): void {
    this.selectedServiceId = serviceId;
  }

  private startClock(): void {
    this.currentDateTime = new Date().toLocaleString('ru-RU');

    setInterval(() => {
      this.currentDateTime = new Date().toLocaleString('ru-RU');
    }, 1000)
  }

  increment() {
    this.clickCount += 1;
  }

  decrement() {
    if (this.clickCount > 0) {
      this.clickCount -= 1;
    }
  }

  toggleTask() {
    this.taskFour = !this.taskFour;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }

}
