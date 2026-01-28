import { Component } from '@angular/core';
import { IService } from '../interfaces/IService';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companyName: string = 'правозащитник';
  companyCategory: string = 'юридическая компания';

  selectedServiceId: number = 2;

  services: IService[] = [
    {
      id: 1,
      title: 'Банкротство физических лиц',
      description: 'Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». '
    },
    {
      id: 2,
      title: 'Сопровождение сделок',
      description: 'Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.'
    },
    {
      id: 3,
      title: 'Корпоративные споры',
      description: 'Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем'
    },
    {
      id: 4,
      title: 'Недвижимость и строительство',
      description: 'Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения'
    },
    {
      id: 5,
      title: 'Возврат страховых премий',
      description: 'Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя; оригинал страхового полиса'
    },
    {
      id: 6,
      title: 'Возврат страховых премий',
      description: 'Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах.'
    },
  ]

  selectService(serviceId: number): void {
    this.selectedServiceId = serviceId;
  }

}