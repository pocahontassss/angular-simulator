import { Component } from '@angular/core';
import { AboutHikeComponent } from '../about-hike/about-hike.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { HeroComponent } from '../hero/hero.component';
import { ProgramsComponent } from '../programs/programs.component';
import { TravelBlogComponent } from '../travel-blog/travel-blog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, AboutHikeComponent, ProgramsComponent, DestinationsComponent, TravelBlogComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected readonly photos = [
    { name: 'balloons', alt: 'Путешественники среди воздушных шаров', wide: true },
    { name: 'map', alt: 'Карта и фотоаппарат', wide: false },
    { name: 'dubai', alt: 'Отель Бурдж-эль-Араб со стороны моря', wide: false },
    { name: 'beach', alt: 'Лодки у берега бирюзовой бухты', wide: false },
    { name: 'canyon', alt: 'Путешественник над каньоном', wide: true },
    { name: 'notebook', alt: 'Открытый блокнот и вещи для путешествия', wide: false },
  ];

  constructor(protected readonly messageService: MessageService) {}
}
