import { faVk, faTelegram, faSkype, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { APP_CONFIG } from '../config.token';
import { AppConfig } from '../interfaces/IAppConfig';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  APP_CONFIG: AppConfig = inject(APP_CONFIG);

  companyName: string = this.APP_CONFIG.companyName;
  companyIP: string = 'ИП Константинопольский К.К., 2023';
  faAngleRight: IconDefinition = faAngleRight;

  messengers: IconDefinition[] = [faTelegram, faVk, faPinterest, faSkype];

  routes: string[] = [
    'Прогулки в горы летом',
    'Зимние походы в горы',
    'Посещение храмов в горах',
    'Экстремальные виды туризма',
    'Походы в джунглях Амазонии',
    'Поездка в Африку',
  ];

  travelEssentials: string[] = [
    'Как собрать в долгий поход?',
    'Жизненно важные предметы для похода',
    'Медицинская страховка, гарантии безопасности',
    'Если вы врач - загляните сюда',
  ];
}
