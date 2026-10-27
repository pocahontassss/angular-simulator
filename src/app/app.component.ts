import './training';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from './enums/Color';
import { Collection } from './collection';
import { DatePipe } from '@angular/common';

interface Card {
    image: string;
    title: string;
    description: string;
  }


@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent implements OnInit, OnDestroy{
  companyName: string = 'РУМТИБЕТ';
  currentDate: Date = new Date();
  private timerId: any;
  count: number = 0;
  showTimer:boolean = true;
  inputText:string = "";
  isLoading:boolean = true;
  increment(): void {
    this.count++;
  }
  decrement(): void {
    if (this.count > 0)
      this.count--;
  }
  toggleView(): void {
    this.showTimer = !this.showTimer
  }
  public selectedLocation: string = '';
  public selectedDate: string = '';
  public selectedParticipants: string = '';
  guidesCollection: Collection<string> = new Collection<string>(['Иван', 'Петя', 'Сарра']);
  pricesCollection: Collection<number> = new Collection<number>([100, 200, 300]);
  isPrimaryColor(checkColor: Color): boolean {
    return checkColor === Color.Red || checkColor === Color.Green || checkColor === Color.Blue;
  }

  saveLastVisitDate(): void {
    const currentDate: string = new Date().toISOString();
    localStorage.setItem('lastVisitDate', currentDate);
  }

  incrementVisitCount(): void {
    const storedCount: string | null = localStorage.getItem('visitCount');
    let count: number = storedCount ? parseInt(storedCount, 10) : 0;
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
  ngOnInit() {
    this.timerId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  ngOnDestroy() {
    clearInterval(this.timerId)
  }
  cards: Card[] = [
    {
      image: 'guide-img',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      image: 'safety-img',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      image: 'price-rag',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ];
}