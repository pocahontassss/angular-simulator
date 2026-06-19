import { Component, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';;
import { IAdvantages } from '../../interfaces/IAdvantages';
import { IGallery } from '../../interfaces/IGallery';
import { IPopularTours } from '../../interfaces/IPopularTours';
import { IBlogTours } from '../../interfaces/IBlogTours';
import { IPinterestImages } from '../../interfaces/IPinterestImages';
import { DecimalPipe } from '@angular/common';
import { ShowMessageService } from '../services/show-message-service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  
  private showMessageService: ShowMessageService = inject(ShowMessageService);
  
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedTravelers: string = '';
  liveInput: string = '';
  
  
  advantages: IAdvantages[] = [
    {
      id: 1, 
      title: 'Опытный гид', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      srcImg: '/images/icons/experienced-guide.svg'
    },
    {
      id: 2, 
      title: 'Безопасный поход', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      srcImg: '/images/icons/shield.svg'
    },
    {
      id: 3, 
      title: 'Лояльные цены', 
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      srcImg: '/images/icons/tag.svg'
    }
  ]
  
  gallery: IGallery[] = [
    {
      id: 1,
      srcImg: '/images/mountain-river.png'
    },
    {
      id: 2,
      srcImg: '/images/man-on-mountain.png'
    },
    {
      id: 3,
      srcImg: '/images/man-on-snowmobile.png'
    },
    {
      id: 4,
      srcImg: '/images/mountain-landscape.png'
    }
  ]
  
  popularTours: IPopularTours[] = [
    {
      id: 1,
      rating: 4.9,
      srcImg: '/images/backgrounds/tour-by-lake.png',
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      price: 480,
      currency: '$'
    },
    {
      id: 2,
      rating: 4.5,
      srcImg: '/images/backgrounds/night-tour-on-mountain.png',
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      price: 500,
      currency: '$'
    },
    {
      id: 3,
      rating: 5.0,
      srcImg: '/images/backgrounds/tour-stretching-on-mountain.png',
      title: 'Растяжка в горах',
      subtitle: 'для тех, кто забоится о себе',
      price: 230,
      currency: '$'
    }
  ]
  
  blogTours: IBlogTours[] =[
    {
      id: 1,
      srcImg: '/images/italy-coast.png',
      title: 'Красивая Италия, какая она в реальности?',
      subtitle: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      srcAlt: 'italy-coast'
    },
    {
      id: 2,
      srcImg: '/images/airplane-wing-clouds.png',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      subtitle: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      srcAlt: 'airplane-wing-clouds'
    },
    {
      id: 3,
      srcImg: '/images/solo-traveler-backpacker.png',
      title: 'Как подготовиться к путешествию в одиночку?',
      subtitle: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      srcAlt: 'solo-traveler-backpacker'
    },
    {
      id: 4,
      srcImg: '/images/india-taj-mahal.png',
      title: 'Индия ... летим?',
      subtitle: 'Для современного мира базовый.',
      date: '01/04/2023',
      srcAlt: 'india-taj-mahal'
    }
  ]
  
  pinterestImages: IPinterestImages[] = [
    {
      id: 1,
      name: 'travel-cappadocia-balloons'
    },
    {
      id: 2,
      name: 'travel-essentials-flatlay'
    },
    {
      id: 3,
      name: 'dubai-burj-al-arab'
    },
    {
      id: 4,
      name: 'tropical-beach-drone'
    },
    {
      id: 5,
      name: 'grand-canyon-horseshoe'
    },
    {
      id: 6,
      name: 'vintage-travel-diary'
    }
  ]
  
  constructor() {}
  
  isFormValid(): boolean {
    return !this.selectedLocation || !this.selectedDate || !this.selectedTravelers;
  }
  
  public triggerNotification(type: 'success' | 'info' | 'warn' | 'error', text: string): void {
  if (type === 'success') this.showMessageService.showSuccess(text);
  if (type === 'info') this.showMessageService.showInfo(text);
  if (type === 'warn') this.showMessageService.showWarn(text);
  if (type === 'error') this.showMessageService.showError(text);
}
  
}
