import './training';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgTemplateOutlet, NgClass } from '@angular/common';

import { Color } from '../enums/Color';
import { MessageType } from '../enums/message-type.enum';
import { Collection } from './collection';
import { MessageService } from './message.service';
import { StorageService } from './storage.service';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe, NgTemplateOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly messageService = inject(MessageService);
  private readonly storage = inject(StorageService);
  
  readonly MessageType = MessageType; // Выровнено пробелами

  companyName: string = 'РУМТИБЕТ';
  currentDate: Date = new Date();
  clickCount: number = 0;
  showDate: boolean = true;
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';
  liveInputValue: string = '';
  isLoading: boolean = true;

  get messages() {
    return this.messageService.messages;
  }

  features: Feature[] = [
    {
      icon: 'guide-icon',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      icon: 'safety-icon',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      icon: 'price-icon',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ];

  constructor() {
    console.log('Red — основной?', this.isPrimaryColor(Color.Red));
    console.log('Yellow — основной?', this.isPrimaryColor(Color.Yellow));

    this.saveLastVisitDate();
    this.saveVisitCount();

    const strings = new Collection<string>(['Привет', 'Мир']);
    console.log('Строки:', strings.getAll());
    strings.remove(0);
    console.log('После удаления:', strings.getAll());

    const numbers = new Collection<number>([1, 2, 3]);
    console.log('Числа:', numbers.getAll());
    numbers.replace(0, 100);
    console.log('После замены:', numbers.getAll());

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  isPrimaryColor(color: Color): boolean {
    return [Color.Red, Color.Green, Color.Blue].includes(color);
  }

  saveLastVisitDate(): void {
    this.storage.set('lastVisitDate', new Date().toISOString());
  }

  saveVisitCount(): void {
    const current = this.storage.get<number>('visitCount') || 0;
    this.storage.set('visitCount', current + 1);
  }

  increment(): void {
    this.clickCount++;
  }

  decrement(): void {
    if (this.clickCount > 0) {
      this.clickCount--;
    }
  }

  toggleWidget(): void {
    this.showDate = !this.showDate;
  }

  addTestMessage(type: MessageType, title: string): void {
    this.messageService.addMessage(title, 'Message Content', type);
  }

  closeMessage(id: number): void {
    this.messageService.closeMessage(id);
  }
}