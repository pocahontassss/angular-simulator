import { Component } from '@angular/core';
import { IFooterLink } from '../app/interfaces/IFooterLink';
import { IImportantLink } from '../app/interfaces/IImportantLink';
import { faSkype, faTelegram, faVk, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})

export class FooterComponent {

  footerLinks: IFooterLink[] = [
    {
      id: 1,
      text: 'Прогулки в горы летом',
      link: '#',
    },
    {
      id: 2,
      text: 'Зимние походы в горы',
      link: '#',
    },
    {
      id: 3,
      text: 'Посещение храмов в горах',
      link: '#',
    },
    {
      id: 4,
      text: 'Экстремальные виды туризма',
      link: '#',
    },
    {
      id: 5,
      text: 'Походы в джунглях Амазонии',
      link: '#',
    },
    {
      id: 6,
      text: 'Поездка в Африку',
      link: '#',
    },
  ];

  importantLinks: IImportantLink[] = [
    {
      id: 1,
      text: 'Как собрать в долгий поход?',
      link: '#',
    },
    {
      id: 2,
      text: 'Жизненно важные предметы для похода',
      link: '#',
    },
    {
      id: 3,
      text: 'Медицинская страховка, гарантии безопасности',
      link: '#',
    },
    {
      id: 4,
      text: 'Если вы врач - загляните сюда',
      link: '#',
    },
  ];

  companyMedia: IconDefinition[] = [faTelegram, faVk, faPinterest, faSkype];

}
