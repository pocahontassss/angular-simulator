import './training';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from '../enums/Color';
import { Collection } from './collection';
import { CommonModule } from '@angular/common'
import { ToastService } from './toast.service';
import { ITour } from '../interfaces/ITour';
import { IDestination } from '../interfaces/IDestination';
import { IArticle } from '../interfaces/IArticle';
import { IMessage } from '../interfaces/IMessage';
import { MessageType } from '../enums/MessageType';

@Component({
  selector: 'app-root',
  imports: [ CommonModule,FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  messages: IMessage[] = [
    { type: MessageType.Success, message:'Успешно!', id: 1 },
    { type: MessageType.Info, message:'Инфо', id: 2 },
    { type: MessageType.Warn, message: 'Предупреждение', id: 3 },
    { type: MessageType.Error, message: 'Ошибка', id: 4 },
  ];

  MessageType: typeof MessageType = MessageType;
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

  companyTitle: string = 'РУМТИБЕТ';
  stringCollection: Collection<string> = new Collection<string>();
  numberCollection: Collection<number> = new Collection<number>();

  constructor(public toastService: ToastService) {
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
