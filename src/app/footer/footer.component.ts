import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly services = [
    'Прогулки в горы летом',
    'Зимние походы в горы',
    'Посещение храмов в горах',
    'Экстремальные виды туризма',
    'Походы в джунглях Амазонии',
    'Поездка в Африку',
  ];

  protected readonly tips = [
    'Как собрать в долгий поход?',
    'Жизненно важные предметы для похода',
    'Медицинская страховка, гарантии безопасности',
    'Если вы врач — загляните сюда',
  ];

  constructor(protected readonly messageService: MessageService) {}

  protected subscribe(event: SubmitEvent): void {
    event.preventDefault();
    this.messageService.showInfo('Рассылка пока недоступна.');
  }
}
