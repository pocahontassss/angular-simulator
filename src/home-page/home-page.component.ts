import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../app/toast.service';
import { Color } from '../enums/Color';
import { Collection } from '../app/collection';
import { ITour } from '../interfaces/ITour';
import { IDestination } from '../interfaces/IDestination';
import { IArticle } from '../interfaces/IArticle';
import { IMessage } from '../interfaces/IMessage';
import { MessageType } from '../enums/MessageType';



@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})

export class HomePageComponent {

  toastService: ToastService = inject(ToastService)

  messages: IMessage[] = [
    { type: MessageType.Success, message:'Успешно!', id: 1 },
    { type: MessageType.Info, message:'Инфо', id: 2 },
    { type: MessageType.Warn, message: 'Предупреждение', id: 3 },
    { type: MessageType.Error, message: 'Ошибка', id: 4 },
  ];

  messageType: typeof MessageType = MessageType;
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedDestinationId: number | null = null;
  selectedParticipants: string = '';
  liveInput: string = '';
  isLoading: boolean = true;
  currentDate: string = '';
  activeMode: string = 'date';
  clickerCount: number = 0;


  tours: ITour [] = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'people',
    },

    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'shield',
    },

    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: 'tag',
    },
  ];

  destinations: IDestination[] = [
    {
      id: 1,
      title: 'Озеро возле гор',
      image: 'lake_mountains',
      description: 'романтическое приключение',
      rating: 4.9,
      price: 480
    },

    {
      id: 2,
      title: 'Ночь в горах',
      image: 'night_mountains',
      description: 'в компании друзей',
      rating: 4.5,
      price: 500
    },

    {
      id: 3,
      title: 'Растяжка в горах',
      image: 'rock_mountains',
      description: 'для тех, кто забоится о себе',
      rating: 5.0,
      price: 230
    },
  ];

  articles: IArticle[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      image: 'blog_card_coast',
      date: '01/04/2023',
    },

    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих....',
      image: 'blog_card_plane',
      date: '01/04/2023',
    },

    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку? ',
      description: 'Для современного мира базовый вектор развития предполагает.',
      image: 'blog_card_street',
      date: '01/04/2023',
    },

    {
      id: 4,
      title: 'Для современного мира базовый вектор развития предполагает.',
      description: 'Для современного мира базовый.',
      image: 'blog_card_mosque',
      date: '01/04/2023',
    },
  ];

  impressionImages: string[] = [
  'photographer',
  'travel-map',
  'hotel-by-sea',
  'sea-coast',
  'canyon-view',
  'travel-diary'
  ];


  companyTitle: string = 'РУМТИБЕТ';
  stringCollection: Collection<string> = new Collection<string>();
  numberCollection: Collection<number> = new Collection<number>();
  
  servicesList = [
    { id: 1, text: 'Прогулки в горы летом', link: '#' },
    { id: 2, text: 'Зимние походы в горы', link: '#' },
    { id: 3, text: 'Посещение храмов в горах', link: '#' },
    { id: 4, text: 'Экстремальные виды туризма', link: '#' },
    { id: 5, text: 'Походы в джунглях Амазонки', link: '#' },
    { id: 6, text: 'Поездка в Африку', link: '#' }
  ];

  articlesList = [
    { id: 1, text: 'Как собрать в долгий поход?', link: '#' },
    { id: 2, text: 'Жизненно важные предметы для похода', link: '#' },
    { id: 3, text: 'Медицинская страховка, гарантия безопасности', link: '#' },
    { id: 4, text: 'Если вы врач - загляните сюда', link: '#' }
  ];

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
      const currentCount: number = parseInt(savedCount ?? '0') + 1;
      localStorage.setItem('visitsCount', currentCount.toString());
    }
  }

}
