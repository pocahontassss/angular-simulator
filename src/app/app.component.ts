import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProgramCard } from './IProgramCard';
import { IDestinationCard } from './IDestinationCard';
import { IBlogArticl } from './IBlogArticl';
import { IGalleryItem } from './IGalleryItem';
import { MessageComponent } from './components/message/message.component';

export type WidgetMode = 'date' | 'counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private getStoredItem<T>(key: string): T | null {
    const value = window.localStorage.getItem(key);
    if (value === null) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  }

  private setStoredItem<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  isLoading: boolean = false;
  companyName: string = 'ГОРНЫЙ СЛЕД';
  currentMode: WidgetMode = 'date';
  currentDate: string = '17.07.2026';
  count: number = 0;

  selectedLocation: string = '';
  selectedDate: string = '';
  selectedMembers: string = '';
  emailInput: string = '';

  programCards: IProgramCard[] = [
    { id: 1, title: 'Опытный гид', image: 'expert-guide', description: 'Гид с опытом.' },
    { id: 2, title: 'Безопасность', image: 'safe-hiking', description: 'Безопасная цена.' },
    { id: 3, title: 'Комфорт', image: 'loyal-prices', description: 'Лояльная цена.' }
  ];

  destinations: IDestinationCard[] = [
    { id: 1, title: 'Озеро возле гор', subtitle: 'романтическое приключение', price: '480 $', rating: 4.9, image: 'lake-dest' },
    { id: 2, title: 'Ночь в горах', subtitle: 'в компании друзей', price: '500 $', rating: 4.5, image: 'sky-star' },
    { id: 3, title: 'Растяжка в горах', subtitle: 'для тех, кто заботится о себе', price: '230 $', rating: 5.0, image: 'yoga-lady' }
  ];

  blogArticles: IBlogArticl[] = [
    { id: 1, title: 'Красивая Италия, какая она в реальности?', description: 'Для современного мира базовый вектор развития...', date: '01/04/2023', image: 'big-canyon' },
    { id: 2, title: 'Долой сомнения! Весь мир открыт для вас!', description: 'Для современного мира базовый вектор...', date: '01/04/2023', image: 'fly-cloud' },
    { id: 3, title: 'Как подготовиться к путешествию в одиночку?', description: 'Для современного мира базовый вектор...', date: '01/04/2023', image: 'spanish-favels' },
    { id: 4, title: 'Индия ... летим?', description: 'Для современного мира базовый.', date: '01/04/2023', image: 'taj-mahal' }
  ];

  galleryItems: IGalleryItem[] = [
    { id: 1, image: 'ballons-sky.jpg', alt: 'Воздушные шары над горами' },
    { id: 2, image: 'journey-maps.png', alt: 'Карта, камера и блокнот' },
    { id: 3, image: 'sail-town.png', alt: 'Отель Бурдж-эль-Араб у моря' },
    { id: 4, image: 'coast-blue.png', alt: 'Пляж с бирюзовой водой и лодками сверху' },
    { id: 5, image: 'Landscape_2.jpg', alt: 'Каньон Подкова с путешественником' },
    { id: 6, image: 'diary-pen.png', alt: 'Блокнот, очки и винтажный фотоаппарат' }
  ];

  ngOnInit(): void {
    this.selectedLocation = this.getStoredItem<string>('selectedLocation') ?? '';
    this.selectedDate = this.getStoredItem<string>('selectedDate') ?? '';
    this.selectedMembers = this.getStoredItem<string>('selectedMembers') ?? '';
    this.count = this.getStoredItem<number>('count') ?? 0;

    const savedMode: WidgetMode | null = this.getStoredItem<WidgetMode>('currentMode');
    if (savedMode) {
      this.currentMode = savedMode;
    }
  }

  toggleWidgetMode(): void {
    this.currentMode = this.currentMode === 'date' ? 'counter' : 'date';
    this.setStoredItem('currentMode', this.currentMode);
  }

  increment(): void {
    this.count++;
    this.setStoredItem('count', this.count);
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
      this.setStoredItem('count', this.count);
    }
  }

  saveFormState(): void {
    this.setStoredItem('selectedLocation', this.selectedLocation);
    this.setStoredItem('selectedDate', this.selectedDate);
    this.setStoredItem('selectedMembers', this.selectedMembers);
  }

  showRatingAlert(): void {
    window.alert('Рейтинг успешно обновлен!');
  }

  openArticle(title: string): void {
    window.alert(`Открытие статьи: "${title}"`);
  }

  subscribeNewsletter(): void {
    if (this.emailInput) {
      window.alert('Вы успешно подписались на рассылку!');
      this.emailInput = '';
    }
  }
}