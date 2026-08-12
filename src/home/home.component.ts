import {
  faAnglesDown,
  IconDefinition,
  faSpinner,
  faStar,
  faCirclePlay,
  faPeopleGroup,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
import { Component, inject, InjectionToken } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ITravelEssential } from '../interfaces/ITravelEssential';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { MessageService } from '../classes/message.service';
import { IDestination } from '../interfaces/IDestination';
import { IPhotoReport } from '../interfaces/IPhotoReport';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ITravelBlog } from '../interfaces/ITravelBlog';
import { Collection } from '../collection';
import { ITourForm } from '../interfaces/ITourForm';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { IService } from '../interfaces/IService';
import { IMessage } from '../interfaces/IMessage';
import { DATE_FORMAT } from '../date-format.token';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, FontAwesomeModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  messageService: MessageService = inject(MessageService);
  DATE_FORMAT: string = inject(DATE_FORMAT);

  companyName: string = 'румтибет';
  companyIP: string = 'ИП Константинопольский К.К., 2023';
  currentDateAndTime: Date = new Date();
  isDateView: boolean = true;
  isLoading: boolean = true;
  liveInputValue!: string;
  count: number = 0;
  form: ITourForm = {};
  faAnglesDown: IconDefinition = faAnglesDown;
  faCalendarDays: IconDefinition = faCalendarDays;
  faSpinner: IconDefinition = faSpinner;
  faStar: IconDefinition = faStar;
  faCirclePlay: IconDefinition = faCirclePlay;

  tours: Collection<string> = new Collection<string>([
    'Поход в горы',
    'Прогулка по парку',
    'Поход к реке',
  ]);

  prices: Collection<number> = new Collection<number>([500, 600, 700]);

  services: IService[] = [
    {
      id: 1,
      icon: faPeopleGroup,
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: faShield,
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      icon: faShopify,
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];

  popularDestination: IDestination[] = [
    {
      id: 1,
      image: 'boat-on-lake',
      nameTour: 'Озеро возле гор',
      tourDescription: 'романтическое приключение',
      tourPrice: '480',
      tourEvaluation: 4.9,
    },
    {
      id: 2,
      image: 'night-in-mountains',
      nameTour: 'Ночь в горах',
      tourDescription: 'в компании друзей',
      tourPrice: '500',
      tourEvaluation: 4.5,
    },
    {
      id: 3,
      image: 'yoga-in-mountains',
      nameTour: 'Йога в горах',
      tourDescription: 'для тех, кто забоится о себе',
      tourPrice: '230',
      tourEvaluation: 5.0,
    },
  ];

  travelBlog: ITravelBlog[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      content:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      imege: 'italy',
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      content:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих',
      imege: 'pallet',
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку? ',
      content: 'Для современного мира базовый вектор развития предполагает.',
      imege: 'traveling-alone',
    },
    {
      id: 4,
      title: 'Индия ... летим?',
      content: 'Для современного мира базовый.',
      imege: 'india',
    },
  ];

  photoReport: IPhotoReport[] = [
    { id: 1, img: 'balloons' },
    { id: 2, img: 'travel-map' },
    { id: 3, img: 'skyscraper' },
    { id: 4, img: 'coastal-zone' },
    { id: 5, img: 'canyon' },
    { id: 6, img: 'thing-for-travel' },
  ];

  travelEssentials: ITravelEssential[] = [
    { title: 'Как собрать в долгий поход?' },
    { title: 'Жизненно важные предметы для похода' },
    { title: 'Медицинская страховка, гарантии безопасности' },
    { title: 'Если вы врач - загляните сюда' },
  ];

  constructor() {
    this.saveLastVisitDate();
    this.saveVisitCount();
    this.prices.replace(2, 550);
    this.tours.remove(1);
    this.tours.clearCollection();

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    setInterval(() => {
      this.currentDateAndTime = new Date();
    }, 1000);

    this.initializeCountFromStorage();
  }

  private saveCount(): void {
    localStorage.setItem('count', this.count.toString());
  }

  private initializeCountFromStorage(): void {
    const storedCount: string | null = localStorage.getItem('count');
    this.count = storedCount ? Number(storedCount) : 0;
  }

  private saveLastVisitDate(): void {
    localStorage.setItem('last-visit', new Date().toISOString());
  }

  private saveVisitCount(): void {
    const current = Number(localStorage.getItem('visit-count') || 0);
    localStorage.setItem('visit-count', String(current + 1));
  }

  toggleBlock(): void {
    this.isDateView = !this.isDateView;
  }

  incrementCount(): void {
    this.count++;
    this.saveCount();
  }

  decrementCount(): void {
    this.count--;
    this.saveCount();
  }

  openDatePicker(input: HTMLInputElement): void {
    input.showPicker();
  }

  isFormValid(): boolean {
    return !!(this.form.location && this.form.date && this.form.persons);
  }

  openSelect(select: HTMLSelectElement | null): void {
    select?.click();
  }

  closeMessage(message: IMessage): void {
    this.messageService.closeMessage(message);
  }
}
