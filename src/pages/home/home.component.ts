import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import '../../app/training';
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

  companyName: string = 'румтибет';
  messegesService: MessagesService = inject(MessagesService);

  tour = {
    location: '',
    date: '',
    participants: '',
  };

  liveInput: string = '';

  activeImageIndex: number = 1;

  aboutBlockImages: IAboutBlockImage[] = [
    {
      src: 'about-mountain',
      alt: 'mountain',
    },
    {
      src: 'about-forest',
      alt: 'forest',
    },
  ];

  bestProgramsList: IBestProgramsItem[] = [
    {
      id: 1,
      src: 'guide-icon',
      alt: 'guide',
      backgroundColor: '#E5EEEB',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      src: 'security-icon',
      alt: 'security',
      backgroundColor: '#E3E6EE',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      src: 'price-icon',
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
      src: 'waterAndGrass',
      alt: 'Water and grass',
    },
    {
      id: 2,
      src: 'personOnMountain',
      alt: 'Person on mountain',
    },
    {
      id: 3,
      src: 'personOnSled',
      alt: 'Person on sled',
    },
    {
      id: 4,
      src: 'grassAroundMountain',
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
      image: 'lakeAroundMountains',
      alt: 'Lake around mountains',
    },
    {
      id: 2,
      title: 'Ночь в горах',
      text: 'в компании друзей',
      price: 500,
      rating: 4.5,
      image: 'nightOnMountains',
      alt: 'Night on mountains',
    },
    {
      id: 3,
      title: 'Растяжка в горах',
      text: 'для тех, кто забоится о себе',
      price: 230,
      rating: 5.0,
      image: 'stretchingOnMountains',
      alt: 'Stretching on mountains',
    },
  ];

  blog: IBlog[] = [
    {
      id: 1,
      title: 'Красивая Италия, какая она в реальности?',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      image: 'beautiful_Italy',
      alt: 'Beautiful Italy',
    },
    {
      id: 2,
      title: 'Долой сомнения! Весь мир открыт для вас!',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      image: 'airplane',
      alt: 'Airplane',
    },
    {
      id: 3,
      title: 'Как подготовиться к путешествию в одиночку? ',
      text: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      image: 'aloneTravel',
      alt: 'Travel alone',
    },
    {
      id: 4,
      title: 'Индия ... летим?',
      text: 'Для современного мира базовый.',
      date: '01/04/2023',
      image: 'Taj_Mahal',
      alt: 'Taj Mahal',
    },
  ];

  shareImpressions: IShareImpressions[] = [
    {
      id: 1,
      src: 'parachutes',
      alt: 'Parachutes',
    },
    {
      id: 2,
      src: 'camera',
      alt: 'camera',
    },
    {
      id: 3,
      src: 'sail',
      alt: 'sail',
    },
    {
      id: 4,
      src: 'boats',
      alt: 'boats',
    },
    {
      id: 5,
      src: 'womanOnMountain',
      alt: 'Woman on a mountain',
    },
    {
      id: 6,
      src: 'nootebookForNotes',
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
