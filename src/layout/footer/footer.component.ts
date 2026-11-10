import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ISocialMedias } from '../../interfaces/interfaces';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  socialMedias: ISocialMedias[] = [
    {
      id: 1,
      src: 'telegram-icon',
      alt: 'Telegram icon',
    },
    {
      id: 2,
      src: 'vk-icon',
      alt: 'VK icon',
    },
    {
      id: 3,
      src: 'pinterest-icon',
      alt: 'Pinterest icon',
    },
    {
      id: 4,
      src: 'skype-icon',
      alt: 'Skype icon',
    },
  ];

  footerCenterBtns: string[] = [
    'Прогулки в горы летом',
    'Зимние походы в горы',
    'Посещение храмов в горах',
    'Экстремальные виды туризма',
    'Походы в джунглях Амазонии',
    'Поездка в Африку',
  ];

  footerRightBtns: string[] = [
    'Как собрать в долгий поход?',
    'Жизненно важные предметы для похода',
    'Медицинская страховка, гарантии безопасности',
    'Если вы врач - загляните сюда',
  ];

  onSubmit(event: Event) {
    event.preventDefault();
  }
  
}
