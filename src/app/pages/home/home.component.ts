import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { IService } from '../../../interfaces/IService';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgTemplateOutlet, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedServiceId: number = 2;
  tourLocation: string = '';
  tourDate: string = '';
  tourParticipants: string = '';
  inputValue: string = '';

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
    }];

  constructor(public messageService: MessageService) { }

  public onProgramTourClick(): void {
    this.messageService.showWarn('Программа недоступна');
  }

  public onProgramPriceClick(): void {
    this.messageService.showInfo('Стоимость отправлена на почту');
  }

  public onRatingButtonClick(): void {
    this.messageService.showSuccess('Направления получены');
  }

  public onOtherStuffClick(): void {
    this.messageService.showError('Материалы недоступны');
  }

  public selectService(serviceId: number): void {
    this.selectedServiceId = serviceId;
  }
}