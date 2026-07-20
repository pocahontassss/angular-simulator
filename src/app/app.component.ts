import { Component, input, ɵresetIncrementalHydrationEnabledWarnedForTests, OnInit} from '@angular/core';
import { user } from './training';
import { Colors } from '../enum/Color';
import { HttpTestingController } from '@angular/common/http/testing';
import { timestamp } from 'rxjs';
import { Collection } from './collections';
import { FormsModule } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';


interface User {
  name: string;
  id: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  public companyName: string = "РУМТИБЕТ"
  public location: string = '';
  public date: string = '';
  public participants: string = '';
  public currentTime: string = '';
  public counter: number = 0;
  public showTimer: boolean = true;
  public liveText: string = "";
  public isLoading: boolean = true;
  public featuresList = [
    {
      icon: "/images/guide-icon.svg ",
      title: "Опытный гид ",
      description: "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации. "
    },
    {
      icon: "/images/security-icon.svg ",
      title: "Безопасный поход ",
      description: "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации. "
    },
    {
      icon: "/images/price-icon.svg ",
      title: "Лояльные цены ",
      description: "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации. "
    }
  ];

  constructor() {
    this.saveSunsetTime();
    this.quantityVisitToSite();
    this.initCollections();

    // таймер в шапке 16 дз, 4 задание
    this.updateClock();

    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  // 8 задание загрузка страницы 

  private ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  public isPrimaryColors(color: Colors): boolean {
    if (color === Colors.BLUE || color === Colors.GREEN || color === Colors.RED) {
      return true;
    } else {
      return false;
    };
  };

  public testColors() {
    console.log(this.isPrimaryColors(Colors.BLUE))
    console.log(this.isPrimaryColors(Colors.GREEN))
    console.log(this.isPrimaryColors(Colors.RED))
  };

  public saveSunsetTime(): void {
    const time = new Date();
    const timeString = time.toISOString();
    localStorage.setItem('last_visit_time', timeString)
  }

  private quantityVisitToSite(): void {
    const storageKey = 'visit_to_site';
    const currentVisitToSite = localStorage.getItem(storageKey);

    let newCount: number;

    if ( currentVisitToSite === null) {
      newCount = 1;
    } else {
      newCount = parseInt(currentVisitToSite, 10) + 1;
    }

    localStorage.setItem(storageKey, newCount.toString());
    
    console.log(`Кол-во заходов ${newCount}`);
  }

  
  private initCollections() {
    const numbersCollection = new Collection<number>([10,20,30])

    console.log(numbersCollection.getAll());

    const userCollection: User[] = [
    {name: 'Vlad', id: 1},
    {name: "Oleg", id: 2}
  ]

  const usersCollection = new Collection<User>(userCollection);

  console.log(usersCollection.getAll())
  };

  // таймер в шапке 

  private updateClock() {
    const now = new Date();

    this.currentTime = now.toLocaleString();
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--
    }
  }
  
  // 6 задание 16 дз

  public toggleWidget() {
    this.showTimer = !this.showTimer;
  }

  // 7 задание 16 дз 

  public updateText(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.liveText = inputElement.value;
  }
};


console.log(user);