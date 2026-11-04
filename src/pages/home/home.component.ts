import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import '../../app/training';
import { Color } from '../../enums/color';
import '../../app/collection';
import { CommonModule } from '@angular/common';
import {
  IAboutBlockImage,
  IBestProgramsImage,
  IBestProgramsItem,
  IBlog,
  IPopularTourisms,
  IShareImpressions,
} from '../../interfaces/interfaces';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  messegesService: MessagesService = inject(MessagesService);

  companyName: string = 'румтибет';

  tour = {
    location: '',
    date: '',
    participants: '',
  };

  liveInput: string = '';

  activeImageIndex: number = 1;

  aboutBlockImages: IAboutBlockImage[] = [
    {
      src: '/pictures/about-mountain.jpg',
      alt: 'mountain',
    },
    {
      src: '/pictures/about-forest.jpg',
      alt: 'forest',
    },
  ];

  bestProgramsList: IBestProgramsItem[] = [
    {
      id: 1,
      src: '/pictures/guide-icon.svg',
      alt: 'guide',
      backgroundColor: '#E5EEEB',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      src: '/pictures/security-icon.svg',
      alt: 'security',
      backgroundColor: '#E3E6EE',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      src: '/pictures/price-icon.svg',
      alt: 'price',
      backgroundColor: '#F3F1E1',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];

  bestProgramsImages: IBestProgramsImage[] = [
    {
      id: 1,
      src: '/pictures/waterAndGrass.jpg',
      alt: 'Water and grass',
    },
    {
      id: 2,
      src: '/pictures/personOnMountain.jpg',
      alt: 'Person on mountain',
    },
    {
      id: 3,
      src: '/pictures/personOnSled.jpg',
      alt: 'Person on sled',
    },
    {
      id: 4,
      src: '/pictures/grassAroundMountain.jpg',
      alt: 'Grass around mountain',
    },
  ];

  popularTourisms: IPopularTourisms[] = [
    {
      id: 1,
      title: 'Озеро возле гор',
      text: 'романтическое приключение',
      price: 480,
      rating: 4.9,
      image: '/pictures/lakeAroundMountains.jpg',
      alt: 'Lake around mountains',
    },
    {
      id: 2,
      title: 'Ночь в горах',
      text: 'в компании друзей',
      price: 500,
      rating: 4.5,
      image: '/pictures/nightOnMountains.jpg',
      alt: 'Night on mountains',
    },
    {
      id: 3,
      title: 'Растяжка в горах',
      text: 'для тех, кто забоится о себе',
      price: 230,
      rating: 5.0,
      image: '/pictures/stretchingOnMountains.jpg',
      alt: 'Stretching on mountains',
    },
  ];

  blog: IBlog[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      image: '/pictures/beautiful_Italy.jpg',
      alt: 'Beautiful Italy',
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      image: '/pictures/airplane.jpg',
      alt: 'Airplane',
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку? ',
      text: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      image: '/pictures/aloneTravel.jpg',
      alt: 'Travel alone',
    },
    {
      id: 4,
      title: 'Индия ... летим?',
      text: 'Для современного мира базовый.',
      date: '01/04/2023',
      image: '/pictures/Taj_Mahal.jpg',
      alt: 'Taj Mahal',
    },
  ];

  shareImpressions: IShareImpressions[] = [
    {
      id: 1,
      src: '/pictures/parachutes.jpg',
      alt: 'Parachutes',
    },
    {
      id: 2,
      src: '/pictures/camera.jpg',
      alt: 'camera',
    },
    {
      id: 3,
      src: '/pictures/sail.jpg',
      alt: 'sail',
    },
    {
      id: 4,
      src: '/pictures/boats.jpg',
      alt: 'boats',
    },
    {
      id: 5,
      src: '/pictures/womanOnMountain.jpg',
      alt: 'Woman on a mountain',
    },
    {
      id: 6,
      src: '/pictures/nootebookForNotes.jpg',
      alt: 'Nootebook for notes',
    },
  ];

  get isSearchDisabled(): boolean {
    return !this.tour.date || !this.tour.location || !this.tour.participants;
  }

  openDatePicker(input: HTMLInputElement): void {
    input.focus();
    input.showPicker();
  }
}
