import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

    servicesList = [
    { id: 1, text: 'Прогулки в горы летом', link: '#' },
    { id: 2, text: 'Зимние походы в горы', link: '#' },
    { id: 3, text: 'Посещение храмов в горах', link: '#' },
    { id: 4, text: 'Экстремальные виды туризма', link: '#' },
    { id: 5, text: 'Походы в джунглях Амазонки', link: '#' },
    { id: 6, text: 'Поездка в Африку', link: '#' }
  ];

  articlesList = [
    { id: 1, text: 'Как собрать в долгий поход?', link: '#' },
    { id: 2, text: 'Жизненно важные предметы для похода', link: '#' },
    { id: 3, text: 'Медицинская страховка, гарантия безопасности', link: '#' },
    { id: 4, text: 'Если вы врач - загляните сюда', link: '#' }
  ];

}
