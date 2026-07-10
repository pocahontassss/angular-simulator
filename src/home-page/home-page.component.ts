import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '../service/toast.service';
import { ILocation, IOffer, IParticipant, ISlide, ITours, ITravels } from '../interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { faMapPin, faShield, faTag, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule, FaIconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  toastService: ToastService = inject(ToastService);

  isLoading: boolean = true;
  selectedLocation!: string;
  selectedDate!: string;
  selectedCount!: string;
  liveText: string = '';
  faShield: IconDefinition = faShield;
  faTag: IconDefinition = faTag;
  faMapPin: IconDefinition = faMapPin;

  gallerySlides: ISlide[] = [
    {
      id: 1,
      icon: 'mountain-lake',
      title: 'Горное озеро'
    },
    {
      id: 2,
      icon: 'mountain-canyon',
      title: 'Горный каньон' 
    },
    {
      id: 3,
      icon: 'winter-mountains',
      title: 'Зимние горы'
    },
    {
      id: 4,
      icon: 'mountain-fields',
      title: 'Предгорья'
    }
  ];

  offers: IOffer[] = [
    {
      id: 1,
      title:'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: faMapPin
    },
    {
      id: 2,
      title:'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: faShield
    },
    {
      id: 3,
      title:'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: faTag
    }
  ];

  tours: ITours[] = [
    {
      id: 1, 
      rating: 4.9, 
      title: 'Озеро возле гор', 
      subtitle: 'романтическое приключение', 
      price: '480 $',
      icon: 'mountain-lake-tour'
    },
    {
      id: 2, 
      rating: 4.5, 
      title: 'Ночь в горах', 
      subtitle: 'в компании друзей', 
      price: '500 $',
      icon: 'mountains-night-tour'
    },
    {
      id: 3, 
      rating: 4.7, 
      title: 'Растяжка в горах', 
      subtitle: 'для тех, кто забоится о себе', 
      price: '230 $',
      icon: 'mountain-sunrise-tour'
    }
  ];

  travels: ITravels[] = [
    {
      id: 1,
      icon: 'italian-city-blog',
      title: 'Красивая Италия, какая она в реальности?',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      href: '#',
      linkText: 'читать статью'
    },
    {
      id: 2,
      icon: 'sunny-sky-blog',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      href: '#',
      linkText: 'читать статью'
    },
    {
      id: 3,
      icon: 'narrow-alley-blog',
      title: 'Как подготовиться к путешествию в одиночку? ',
      text: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      href: '#',
      linkText: 'читать статью'
    },
    {
      id: 4,
      icon: 'temple-india-blog',
      title: 'Индия ... летим?',
      text: 'Для современного мира базовый.',
      date: '01/04/2023',
      href: '#',
      linkText: 'читать статью'
    }
  ];

  impressionSlides: ISlide[] = [
    {
      id: 1,
      icon: 'impression-balloons',
      title: 'Воздушные шары'
    },
    {
      id: 2,
      icon: 'impression-map',
      title: 'Тревелкит' 
    },
    {
      id: 3,
      icon: 'impression-bay',
      title: 'Бухта'
    },
    {
      id: 4,
      icon: 'impression-beach',
      title: 'Пляж'
    },
    {
      id: 5,
      icon: 'impression-canyon',
      title: 'Каньон'
    },
    {
      id: 6,
      icon: 'impression-travel',
      title: 'Тревелсет'
    }
  ];

  locations: ILocation[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'Украина' },
    { id: 3, name: 'Беларусь' }
  ];

  participants: IParticipant[] = [
    { id: 1, value: '4 человека', quantity: 4 },
    { id: 2, value: '5 человек', quantity: 5 },
    { id: 3, value: '6 человек', quantity: 6 }
  ];

  constructor() {

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  onSearchSubmit(form: NgForm): void {}
}
