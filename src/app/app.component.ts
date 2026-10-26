import { FormsModule } from '@angular/forms';
import { Component, inject, OnDestroy } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from './collection';
import { IAdvantage } from '../interfaces/IAdvantage';
import { IDestination } from '../interfaces/IDestination';
import { IArticle } from '../interfaces/IArticle';
import { MessageService } from '../services/message.service';
import { MessageType } from '../enums/MessageType';
import { NgTemplateOutlet } from '@angular/common';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnDestroy {

  messageService: MessageService = inject(MessageService);

  private storageService: StorageService = inject(StorageService);

  messageType: typeof MessageType = MessageType;
  companyName: string = 'РумТибет';
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';
  currentTime: string = new Date().toLocaleString('ru-RU').replace(',', '');
  clickCount: number = 0;
  showClock: boolean = true;
  liveText: string = '';
  isLoading: boolean = true;
  advantages: IAdvantage[] = [
    {
      id: 1,
      icon: 'guide',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: 'safety',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      icon: 'price',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];
  offerImages: string[] = [
    'offer-lake',
    'offer-hiker',
    'offer-snowmobile',
    'offer-valley',
  ];
  destinations: IDestination[] = [
    {
      id: 1,
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      image: 'destination-lake',
      price: 480,
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      image: 'destination-night',
      price: 500,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Растяжка в горах',
      subtitle: 'для тех, кто заботится о себе',
      image: 'destination-stretching',
      price: 230,
      rating: 5.0,
    },
  ];

  articles: IArticle[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      image: 'blog-italy',
      date: '01/04/2023',
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      image: 'blog-flight',
      date: '01/04/2023',
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку?',
      description:
        'Для современного мира базовый вектор развития предполагает.',
      image: 'blog-solo',
      date: '01/04/2023',
    },
    {
      id: 4,
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      image: 'blog-india',
      date: '01/04/2023',
    },
  ];

  private clockIntervalId: number | undefined;
  private loadingTimeoutId: number | undefined;

  constructor() {
    this.saveLastVisitDate();
    this.saveVisitCount();
    this.startClock();
    this.startLoading();

    const numberCollection: Collection<number> = new Collection<number>(
      [10, 20, 30]
    );

    const textCollection: Collection<string> = new Collection<string>(
      ['Чай', 'Кофе', 'Лимонад']
    );

    numberCollection.removeItem(1);
    textCollection.removeItem(1);

    numberCollection.replaceItem(0, 100);
    textCollection.replaceItem(0, 'Матча');

    numberCollection.clear();
    textCollection.clear();

  }

  ngOnDestroy(): void {
    window.clearInterval(this.clockIntervalId);
    window.clearTimeout(this.loadingTimeoutId);
  }

  private startClock(): void {
    this.clockIntervalId = window.setInterval((): void => {
      this.currentTime = new Date().toLocaleString('ru-RU').replace(',', '');
    }, 1000);
  }

  private startLoading(): void {
    this.loadingTimeoutId = window.setTimeout((): void => {
      this.isLoading = false;
    }, 2000);
  }

  private isPrimaryColor(color: Color): boolean {
    return color === Color.RED || color === Color.GREEN || color === Color.BLUE;
  }

  private saveLastVisitDate(): void {
    const date: Date = new Date();

    this.storageService.setItem<string>('lastVisit', date.toISOString());
  }

  private saveVisitCount(): void {
    const visitCount: number =
      this.storageService.getItem<number>('visitCount') ?? 0;

    this.storageService.setItem<number>('visitCount', visitCount + 1);
  }

}