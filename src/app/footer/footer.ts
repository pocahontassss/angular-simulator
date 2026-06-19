import { Component } from '@angular/core';
import { IFooterLink } from '../../interfaces/IFooterLink';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  servicesLinks: IFooterLink[] =[
    {
      id: 1,
      name: 'Прогулки в горы летом'
    },
    {
      id: 2,
      name: 'Зимние походы в горы'
    },
    {
      id: 3,
      name: 'Посещение храмов в горах'
    },
    {
      id: 4,
      name: 'Экстремальные виды туризма'
    },
    {
      id: 5,
      name: 'Походы в джунглях Амазонии'
    },
    {
      id: 6,
      name: 'Поездка в Африку'
    }
  ]
  
  infoLinks: IFooterLink[] = [
    {
      id: 1,
      name: 'Как собрать в долгий поход?'
    },
    {
      id: 2,
      name: 'Жизненно важные предметы для похода'
    },
    {
      id: 3,
      name: 'Медицинская страховка, гарантии безопасности'
    },
    {
      id: 4,
      name: 'Если вы врач - загляните сюда'
    },
  ]
}
