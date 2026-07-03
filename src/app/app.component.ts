import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgramCard } from './program-card.interface';
import { WidgetMode } from './widget-mode.type';
import { Message } from './message.interface';
import { MessageType } from './message-type.enum';
import { MessageService } from './message.service';
import { LocalStorageService } from './local-storage.service';

export interface DestinationCard {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  rating: number;
  image: string;
}

export interface BlogArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  currentMode: WidgetMode = 'date';
  currentDate: string = '';
  count: number = 0;
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedMembers: string = '';
  companyName: string = 'РУМТИБЕТ';
  
  programCards: ProgramCard[] = [
    { id: 1, title: 'Опытный гид', image: 'expert-guide.svg', description: 'Гид с опытом.' },
    { id: 2, title: 'Безопасность', image: 'safe-hiking.svg', description: 'Безопасная цена.' },
    { id: 3, title: 'Комфорт', image: 'loyal-prices.svg', description: 'Лояльная цена.' }
  ];

  destinations: DestinationCard[] = [
    { id: 1, title: 'Озеро возле гор', subtitle: 'романтическое приключение', price: '480 $', rating: 4.9, image: 'lake-dest.jpg' },
    { id: 2, title: 'Ночь в горах', subtitle: 'в компании друзей', price: '500 $', rating: 4.5, image: 'sky-star.jpg' },
    { id: 3, title: 'Растяжка в горах', subtitle: 'для тех, кто заботится о себе', price: '230 $', rating: 5.0, image: 'yoga-lady.png' }
  ];

  blogArticles: BlogArticle[] = [
    { id: 1, title: 'Красивая Италия, какая она в реальности?', description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.', date: '01/04/2023', image: 'big-canyon.jpg' },
    { id: 2, title: 'Долой сомнения! Весь мир открыт для вас!', description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации... независимые способы реализации соответствующих...', date: '01/04/2023', image: 'fly-cloud.png' },
    { id: 3, title: 'Как подготовиться к путешествию в одиночку?', description: 'Для современного мира базовый вектор развития предполагает.', date: '01/04/2023', image: 'spanish-favels.png' },
    { id: 4, title: 'Индия ... летим?', description: 'Для современного мира базовый.', date: '01/04/2023', image: 'taj-mahal.png' }
  ];
  
  private timerInterval: number | null = null;

  constructor(
    private messageService: MessageService,
    private localStorageService: LocalStorageService
  ) {}
  
  get messages(): Message[] {
    return this.messageService.activeMessages;
  }
  
  ngOnInit(): void {
    this.updateDate();
    this.startTimer();
    
    const savedMode: WidgetMode | null = this.localStorageService.getItem<WidgetMode>('widget_mode');
    if (savedMode) {
      this.currentMode = savedMode;
    }

    const savedCount: number | null = this.localStorageService.getItem<number>('counter_value');
    if (savedCount !== null) {
      this.count = savedCount;
    }
  }
  
  ngOnDestroy(): void {
    this.stopTimer();
  }

  toggleWidgetMode(): void {
    this.currentMode = this.currentMode === 'date' ? 'counter' : 'date';
    this.localStorageService.setItem<WidgetMode>('widget_mode', this.currentMode);

    this.messageService.addMessage(
      `Режим изменен на: ${this.currentMode === 'date' ? 'Дата' : 'Счетчик'}`, 
      MessageType.Info
    );
  }
  
  increment(): void {
    this.count++;
    this.localStorageService.setItem<number>('counter_value', this.count);
  }
  
  decrement(): void {
    if (this.count > 0) {
      this.count--;
      this.localStorageService.setItem<number>('counter_value', this.count);
    }
  }

  handleCloseMessage(id: number): void {
    this.messageService.closeMessage(id);
  }

  showRatingAlert(): void {
    this.messageService.addMessage('Рейтинг направлений временно недоступен. Попробуйте позже.', MessageType.Warning);
  }

  openArticle(title: string): void {
    this.messageService.addMessage(`Открываем статью: "${title}"`, MessageType.Info);
  }
  
  private updateDate(): void {
    const now: Date = new Date();
    const dateString: string = now.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const timeString: string = now.toLocaleTimeString('ru-RU');
    this.currentDate = `${dateString}, ${timeString}`;
  }
  
  private startTimer(): void {
    this.timerInterval = window.setInterval(() => {
      this.updateDate();
    }, 1000);
  }
  
  private stopTimer(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}